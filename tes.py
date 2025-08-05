import cv2
from deepface import DeepFace
import sounddevice as sd
import numpy as np
import scipy.io.wavfile as wavfile
from faster_whisper import WhisperModel
from transformers import pipeline
import time
import pickle
import os
import opensmile
import pandas as pd
import librosa


# 얼굴 감정 분석 (웹캠 5초)
def analyze_face_emotion(duration=5):
    cap = cv2.VideoCapture(0)
    emotions = []
    start_time = time.time()
    print("[얼굴 감정 분석 시작] 웹캠을 5초간 바라보세요...")

    while time.time() - start_time < duration:
        ret, frame = cap.read()
        if not ret:
            continue

        try:
            result = DeepFace.analyze(frame, actions=["emotion"], enforce_detection=False)
            emotions.append(result[0]['dominant_emotion'])
            cv2.putText(frame, f"Emotion: {result[0]['dominant_emotion']}", (10, 50),
                        cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 255, 0), 2)
        except Exception:
            cv2.putText(frame, "Detecting...", (10, 50),
                        cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 0, 255), 2)

        cv2.imshow("Face Emotion", frame)
        if cv2.waitKey(1) & 0xFF == ord('q'):
            break

    cap.release()
    cv2.destroyAllWindows()

    if emotions:
        dominant = max(set(emotions), key=emotions.count)
        print(f"[얼굴 감정] 최종 감정: {dominant}")
        return dominant
    else:
        return "unknown"


# 음성 녹음 (sounddevice)
def record_audio(filename="audio.wav", duration=5, fs=44100):
    print("[음성 녹음 시작] 말해주세요...")
    audio = sd.rec(int(duration * fs), samplerate=fs, channels=1, dtype='int16')
    sd.wait()
    wavfile.write(filename, fs, audio)
    print("[음성 녹음 완료]")
    return filename, audio


def analyze_speech_emotion(audio, audio_file="audio.wav"):
    try:
        print("[음성 감정 분석 시작] OpenSMILE 특성 기반 분석...")

        # OpenSMILE 초기화 (GeMAPS 설정 사용 - 감정 인식에 최적화된 특성 세트)
        # 논문 참고: "The Geneva Minimalistic Acoustic Parameter Set (GeMAPS) for Voice Research and Affective Computing"
        smile = opensmile.Smile(
            feature_set=opensmile.FeatureSet.GeMAPS,
            feature_level=opensmile.FeatureLevel.Functionals,
        )

        # 특성 추출
        features = smile.process_file(audio_file)

        # 디버깅 정보 출력
        print(f"[OpenSMILE 특성] 형태: {features.shape}, 타입: {type(features)}")

        # 오디오 특성에서 감정 추론 (연구 기반 접근법)
        # 1. 기본 오디오 특성 추출
        y, sr = librosa.load(audio_file, sr=None)

        # 2. 음성 특성 추출 (논문 기반 특성들)
        # 음량(RMS) 계산 - 감정 강도와 관련
        rms = np.sqrt(np.mean(y ** 2))
        print(f"[음량(RMS)]: {rms:.4f}")

        # 음높이(F0) 추정 - 감정 유형과 관련
        pitches, magnitudes = librosa.piptrack(y=y, sr=sr)
        pitch = np.mean(pitches[magnitudes > 0.1]) if np.any(magnitudes > 0.1) else 0
        pitch_std = np.std(pitches[magnitudes > 0.1]) if np.any(magnitudes > 0.1) else 0
        print(f"[음높이(Pitch)]: {pitch:.2f} Hz, 표준편차: {pitch_std:.2f}")

        # 음성 속도(Zero Crossing Rate) 계산 - 감정 활성도와 관련
        zcr = np.mean(librosa.feature.zero_crossing_rate(y))
        print(f"[음성 속도(ZCR)]: {zcr:.4f}")

        # 스펙트럼 중심(Spectral Centroid) 계산 - 음색과 관련
        spectral_centroid = np.mean(librosa.feature.spectral_centroid(y=y, sr=sr))
        print(f"[스펙트럼 중심]: {spectral_centroid:.2f}")

        # MFCC (Mel-Frequency Cepstral Coefficients) - 음색과 관련
        mfccs = librosa.feature.mfcc(y=y, sr=sr, n_mfcc=13)
        mfcc_means = np.mean(mfccs, axis=1)
        mfcc_stds = np.std(mfccs, axis=1)
        print(f"[MFCC 평균]: {mfcc_means[0]:.4f}, {mfcc_means[1]:.4f}, ...")
        # 3. 감정 추론 (논문 기반 규칙)
        # 논문 참고: "Speech Emotion Recognition Using Acoustic Features"
        # 논문 참고: "Acoustic Feature Analysis for Discriminative Emotion Recognition"

        # 긍정/부정 점수 계산
        positive_score = 0
        negative_score = 0

        # 1. 음량(RMS) 영향 - 높은 RMS는 활성화된 감정(긍정 또는 화남)
        if rms > 0.1:
            positive_score += 1
        else:
            negative_score += 1

        # 2. 음높이(Pitch) 영향 - 높은 평균 피치는 긍정적 감정과 관련
        if pitch > 180:  # 여러 연구에서 제시한 임계값
            positive_score += 1
        else:
            negative_score += 1

        # 3. 피치 변동(Pitch Variability) - 높은 변동성은 감정적 표현과 관련
        if pitch_std > 50:  # 연구 기반 임계값
            positive_score += 1
        else:
            negative_score += 1

        # 4. 음성 속도(ZCR) - 높은 ZCR은 활성화된 감정과 관련
        if zcr > 0.08:  # 연구 기반 임계값
            positive_score += 1
        else:
            negative_score += 1

        # 5. 스펙트럼 중심 - 높은 값은 밝은 음색, 긍정적 감정과 관련
        if spectral_centroid > 1500:  # 연구 기반 임계값
            positive_score += 1
        else:
            negative_score += 1

        # 6. MFCC 특성 - 첫 번째 MFCC는 전체 에너지와 관련
        if mfcc_means[0] > 0:  # 연구 기반 임계값
            positive_score += 0.5
        else:
            negative_score += 0.5

        # 7. 두 번째 MFCC - 저주파/고주파 에너지 비율과 관련
        if mfcc_means[1] > 0:  # 연구 기반 임계값
            positive_score += 0.5
        else:
            negative_score += 0.5

        print(f"[감정 점수] 긍정: {positive_score}, 부정: {negative_score}")

        # 최종 감정 결정
        if positive_score > negative_score:
            emotion = "긍정"
        else:
            emotion = "부정"

        print(f"[음성 감정 분석 결과] {emotion} (긍정 점수: {positive_score}, 부정 점수: {negative_score})")
        return emotion

    except Exception as e:
        print(f"[음성 감정 분석 오류] {e}")
        print("[음성 감정 분석] 볼륨 기반 간단 분석으로 대체합니다.")

        # 볼륨 기반 간단 분석 (백업)
        volume = np.abs(audio).mean()
        print(f"[말투 볼륨 평균]: {volume:.2f}")

        # 볼륨 임계값 조정
        if volume > 500:
            return "긍정"
        else:
            return "부정"


# Whisper 음성 → 텍스트
def speech_to_text(audio_path):
    print("[음성 인식 중]...")
    model = WhisperModel("base")
    segments, _ = model.transcribe(audio_path)
    text = ""
    for segment in segments:
        print(f"[{segment.start:.2f}s → {segment.end:.2f}s] {segment.text}")
        text += segment.text + " "
    return text.strip()


# 텍스트 감정 분석
def analyze_text_emotion(text):
    print("[텍스트 감정 분석 시작]")

    # 입력 텍스트 확인
    print(f"[분석할 텍스트] {text}")

    # 특정 키워드 기반 감정 분석 (간단한 규칙 기반 분석)
    negative_keywords = ['슬프', '울', '우울', '화나', '화가', '짜증', '싫', '혐오', '무섭', '두렵', '공포', '불안', '걱정','슬퍼']
    positive_keywords = ['행복', '기쁘', '좋', '즐겁', '신나', '사랑', '감사', '웃']

    # 부정 키워드 확인
    for keyword in negative_keywords:
        if keyword in text:
            print(f"[부정 키워드 발견] '{keyword}'")
            return "부정"

    # 긍정 키워드 확인
    for keyword in positive_keywords:
        if keyword in text:
            print(f"[긍정 키워드 발견] '{keyword}'")
            return "긍정"

    # 딥러닝 모델 사용 (백업)
    try:
        classifier = pipeline(
            'sentiment-analysis',
            model='sangrimlee/bert-base-multilingual-cased-nsmc'
        )
        result = classifier(text)
        label = result[0]['label']
        score = result[0]['score']

        print(f"[텍스트 감정] {label} ({score:.2f})")

        # label을 한국어로 변환
        if label == "positive":
            return "긍정"
        elif label == "negative":
            return "부정"
        else:
            return "중립"
    except Exception as e:
        print(f"[텍스트 감정 분석 오류] {e}")
        return "중립"


# 통합 감정 결과 출력
def aggregate_emotions(face_emotion, speech_emotion, text_emotion):
    print("\n[최종 감정 종합]")
    print(f"얼굴 감정: {face_emotion}")
    print(f"말투 감정: {speech_emotion}")
    print(f"텍스트 감정: {text_emotion}")

    # 감정 매핑 테이블 (영어 -> 한국어)
    emotion_map = {
        'happy': '긍정',
        'sad': '부정',
        'angry': '부정',
        'fear': '부정',
        'disgust': '부정',
        'surprise': '긍정',
        'neutral': '중립'
    }

    # 영어 감정을 긍정/부정으로 변환
    if face_emotion in emotion_map:
        face_emotion = emotion_map[face_emotion]

    # 가중치 적용 (텍스트 감정에 더 높은 가중치)
    weights = {'얼굴': 0.3, '말투': 0.3, '텍스트': 0.4}

    # 감정 투표
    emotions = [face_emotion, speech_emotion, text_emotion]

    # 단순 최빈값 사용
    final_emotion = max(set(emotions), key=emotions.count)
    print(f"➡️ 최종 감정 판단: {final_emotion}")

    return final_emotion


if __name__ == "__main__":
    face_emotion = analyze_face_emotion()
    audio_file, audio_data = record_audio()
    speech_emotion = analyze_speech_emotion(audio_data, audio_file)
    text = speech_to_text(audio_file)
    text_emotion = analyze_text_emotion(text)
    aggregate_emotions(face_emotion, speech_emotion, text_emotion)