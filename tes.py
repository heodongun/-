# ==============================================================================
#  개선된 멀티모달(얼굴, 음성, 텍스트) 감정 분석 시스템 (v4)
# ==============================================================================
#
#  이 스크립트는 웹캠, 마이크를 사용하여 사용자의 감정을 다각적으로 분석합니다.
#  - 텍스트 감정 분석 모델을 안정적인 무료 모델로 교체하여 오류를 수정했습니다.
#
#  [필요 라이브러리 설치]
#  pip install opencv-python deepface sounddevice scipy faster-whisper transformers torch opensmile pandas
#  # PyTorch는 시스템 환경(CPU/GPU)에 맞춰 설치하는 것을 권장합니다.
#  # (예: pip install torch torchvision torchaudio)
#
# ==============================================================================

import cv2
from deepface import DeepFace
import sounddevice as sd
import numpy as np
import scipy.io.wavfile as wavfile
from faster_whisper import WhisperModel
from transformers import pipeline
import time
import os
import opensmile
import pandas as pd
import librosa
from collections import defaultdict


# --- 1. 얼굴 표정 감정 분석 (신뢰도 기반) ---
def analyze_face_emotion_improved(duration=5):
    """
    웹캠을 통해 5초간 얼굴 표정을 분석하고, 가장 높은 평균 신뢰도를 가진 감정을 반환합니다.

    Args:
        duration (int): 분석 시간 (초).

    Returns:
        tuple: (분석된 감정, 신뢰도) 또는 ("분석 불가", 0)
    """
    cap = cv2.VideoCapture(0)
    if not cap.isOpened():
        print("[오류] 웹캠을 열 수 없습니다.")
        return "분석 불가", 0

    print("[얼굴 감정 분석 시작] 웹캠을 5초간 자연스럽게 바라보세요...")

    emotion_scores = defaultdict(list)
    start_time = time.time()

    while time.time() - start_time < duration:
        ret, frame = cap.read()
        if not ret:
            break

        try:
            result = DeepFace.analyze(frame, actions=["emotion"], enforce_detection=False, silent=True)
            if isinstance(result, list) and result:
                emotions = result[0]['emotion']
                for emotion, score in emotions.items():
                    emotion_scores[emotion].append(score)
                dominant_emotion = result[0]['dominant_emotion']
                cv2.putText(frame, f"Emotion: {dominant_emotion}", (10, 50),
                            cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 255, 0), 2)
        except Exception:
            cv2.putText(frame, "Detecting...", (10, 50),
                        cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 0, 255), 2)

        cv2.imshow("Face Emotion Analysis", frame)
        if cv2.waitKey(1) & 0xFF == ord('q'):
            break

    cap.release()
    cv2.destroyAllWindows()

    if not emotion_scores:
        print("[얼굴 감정 분석] 얼굴이 감지되지 않았거나 분석에 실패했습니다.")
        return "분석 불가", 0

    avg_scores = {emotion: np.mean(scores) for emotion, scores in emotion_scores.items()}
    final_emotion = max(avg_scores, key=avg_scores.get)
    confidence = avg_scores[final_emotion] / 100

    print(f"[얼굴 감정 분석 완료] 최종 감정: {final_emotion} (신뢰도: {confidence:.2f})")
    return final_emotion, confidence


# --- 2. 음성 녹음 ---
def record_audio(filename="recorded_audio.wav", duration=5, fs=16000):
    """
    지정된 시간 동안 마이크로부터 음성을 녹음하고 파일로 저장합니다.
    """
    print(f"\n[음성 녹음 시작] {duration}초 동안 말씀해주세요...")
    audio = sd.rec(int(duration * fs), samplerate=fs, channels=1, dtype='int16')
    sd.wait()
    wavfile.write(filename, fs, audio)
    print(f"[음성 녹음 완료] '{filename}' 파일로 저장되었습니다.")
    return filename


# --- 3. 음성 말투 감정 분석 (연구 기반) ---
def analyze_speech_emotion(audio_file="recorded_audio.wav"):
    """
    음성 파일로부터 감정(긍정/부정)을 분석합니다. OpenSMILE과 연구 기반 규칙을 사용합니다.
    """
    print("\n[음성 '말투' 감정 분석 시작]")
    if not os.path.exists(audio_file):
        print(f"[오류] 파일을 찾을 수 없습니다: {audio_file}")
        return "분석 불가", 0

    try:
        smile = opensmile.Smile(
            feature_set=opensmile.FeatureSet.GeMAPS,
            feature_level=opensmile.FeatureLevel.Functionals,
        )
        features = smile.process_file(audio_file)

        pitch_mean = features['F0semitoneFrom27.5Hz_sma3nz_amean'].iloc[0]
        pitch_std = features['F0semitoneFrom27.5Hz_sma3nz_stddevNorm'].iloc[0]
        hnr = features['HNRdBACF_sma3nz_amean'].iloc[0]
        jitter = features['jitterLocal_sma3nz_amean'].iloc[0]
        shimmer = features['shimmerLocaldB_sma3nz_amean'].iloc[0]
        y, sr = librosa.load(audio_file, sr=None)
        zcr_mean = np.mean(librosa.feature.zero_crossing_rate(y))

        positive_score, negative_score = 0, 0
        if pitch_mean > 25:
            positive_score += 2
        else:
            negative_score += 2
        if pitch_std > 0.1:
            positive_score += 2
        else:
            negative_score += 2
        if hnr > 15:
            positive_score += 1.5
        else:
            negative_score += 1.5
        if zcr_mean > 0.1:
            positive_score += 1
        else:
            negative_score += 1
        if jitter > 0.02 or shimmer > 0.2:
            negative_score += 1
        else:
            positive_score += 1

        total_score = positive_score + negative_score
        if total_score == 0: return "중립", 0.5
        emotion = "긍정" if positive_score > negative_score else "부정"
        confidence = abs(positive_score - negative_score) / total_score

        print(f"[음성 '말투' 분석 완료] 최종 감정: {emotion} (신뢰도: {confidence:.2f})")
        return emotion, confidence

    except Exception as e:
        print(f"[음성 '말투' 분석 오류] {e}")
        return "분석 불가", 0


# --- 4. 음성 인식 (STT) ---
def speech_to_text(audio_path):
    """
    오디오 파일에서 텍스트를 추출합니다.
    """
    print("\n[음성 인식(STT) 시작]")
    try:
        model = WhisperModel("base", device="cpu", compute_type="int8")
        segments, _ = model.transcribe(audio_path, language="ko")
        text = " ".join([segment.text for segment in segments])
        print(f"[음성 인식 완료] 인식된 텍스트: {text}")
        return text
    except Exception as e:
        print(f"[음성 인식 오류] {e}")
        return ""


# --- 5. 텍스트 감정 분석 (수정된 부분) ---
def analyze_text_emotion(text):
    """
    텍스트 내용으로부터 감정을 분석합니다. 안정적인 한국어 긍정/부정 분석 모델을 사용합니다.

    Args:
        text (str): 분석할 텍스트.

    Returns:
        tuple: (분석된 감정, 신뢰도) 또는 ("분석 불가", 0)
    """
    print("\n[텍스트 '내용' 감정 분석 시작]")
    if not text.strip():
        print("[텍스트 '내용' 분석] 분석할 텍스트가 없습니다.")
        return "분석 불가", 0

    try:
        # 안정적인 한국어 긍정/부정 분석 모델로 변경
        classifier = pipeline(
            'sentiment-analysis',
            model='sangrimlee/bert-base-multilingual-cased-nsmc'
        )
        result = classifier(text)[0]
        label = result['label']  # 'positive' 또는 'negative'
        score = result['score']

        # 모델의 출력을 '긍정', '부정'으로 변환
        emotion = "긍정" if label == 'positive' else "부정"

        print(f"[텍스트 '내용' 분석 완료] 모델 예측: {emotion} (신뢰도: {score:.2f})")
        return emotion, score
    except Exception as e:
        print(f"[텍스트 '내용' 분석 오류] {e}")
        return "분석 불가", 0


# --- 6. 최종 감정 종합 ---
def aggregate_emotions(face_result, speech_result, text_result):
    """
    모든 분석 결과를 종합하여 최종 감정을 판단합니다.
    """
    print("\n" + "=" * 25)
    print("[ 최종 감정 종합 분석 ]")
    print("=" * 25)
    print(f"  - 얼굴 표정: {face_result[0]} (신뢰도: {face_result[1]:.2f})")
    print(f"  - 음성 말투: {speech_result[0]} (신뢰도: {speech_result[1]:.2f})")
    print(f"  - 텍스트 내용: {text_result[0]} (신뢰도: {text_result[1]:.2f})")

    # 감정 매핑 (긍정, 부정, 중립으로 통일)
    emotion_map = {
        'happy': '긍정',
        'surprise': '긍정',
        'sad': '부정',
        'angry': '부정',
        'fear': '부정',
        'disgust': '부정',
        'neutral': '중립',
        '긍정': '긍정',
        '부정': '부정',
        '분석 불가': '분석 불가'
    }

    face_emotion, face_conf = emotion_map.get(face_result[0], '중립'), face_result[1]
    speech_emotion, speech_conf = emotion_map.get(speech_result[0], '중립'), speech_result[1]
    text_emotion, text_conf = emotion_map.get(text_result[0], '중립'), text_result[1]

    weights = {'얼굴': 0.3, '말투': 0.3, '텍스트': 0.4}

    final_scores = defaultdict(float)
    if face_emotion != '분석 불가':
        final_scores[face_emotion] += face_conf * weights['얼굴']
    if speech_emotion != '분석 불가':
        final_scores[speech_emotion] += speech_conf * weights['말투']
    if text_emotion != '분석 불가':
        final_scores[text_emotion] += text_conf * weights['텍스트']

    if not final_scores:
        final_emotion = "최종 판단 불가"
    else:
        final_emotion = max(final_scores, key=final_scores.get)

    print("-" * 25)
    print(f"➡️  최종 종합 감정: {final_emotion}")
    print("=" * 25 + "\n")

    return final_emotion


# --- 메인 실행 블록 ---
if __name__ == "__main__":
    face_result = analyze_face_emotion_improved()
    audio_file = record_audio()
    speech_result = analyze_speech_emotion(audio_file)
    text_content = speech_to_text(audio_file)
    text_result = analyze_text_emotion(text_content)
    aggregate_emotions(face_result, speech_result, text_result)

    if os.path.exists(audio_file):
        os.remove(audio_file)
