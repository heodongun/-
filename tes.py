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
        print("[음성 감정 분석 시작] ML 모델 사용...")

        # 모델 파일이 존재하는지 확인
        model_path = 'speech_emotion_model.pkl'
        if not os.path.exists(model_path):
            raise FileNotFoundError("모델 파일이 존재하지 않습니다. 먼저 speech_emotion_model_trainer.py를 실행하세요.")

        # 모델 로드
        with open(model_path, 'rb') as f:
            model_data = pickle.load(f)

        classifier = model_data['classifier']
        pca = model_data.get('pca')  # PCA가 없을 수도 있음
        scaler = model_data['scaler']

        # OpenSMILE을 사용하여 오디오 특성 추출
        print("[특성 추출] OpenSMILE을 사용하여 특성을 추출합니다...")

        # OpenSMILE 초기화 (ComParE_2016 설정 사용)
        smile = opensmile.Smile(
            feature_set=opensmile.FeatureSet.ComParE_2016,
            feature_level=opensmile.FeatureLevel.Functionals,
        )

        # 특성 추출
        features = smile.process_file(audio_file)

        # 디버깅 정보 출력
        print(f"[OpenSMILE 특성] 형태: {features.shape}, 타입: {type(features)}")

        # DataFrame을 numpy 배열로 변환 (중요: 여기서 바로 flatten하지 않음)
        if isinstance(features, pd.DataFrame):
            # 열 이름 출력 (디버깅용)
            print(f"[DataFrame 열 이름] {features.columns[:5]}... (총 {len(features.columns)}개)")

            # DataFrame을 numpy 배열로 변환
            feature_array = features.values
        else:
            feature_array = features

        # 이제 numpy 배열을 flatten
        feature_vector = feature_array.flatten()

        print(f"[특성 추출 완료] 추출된 특성 수: {len(feature_vector)}")

        # 모델이 기대하는 특성 수 (1582)
        expected_features = 1582

        # 특성 벡터 크기 조정 (numpy 배열 슬라이싱 사용)
        if len(feature_vector) > expected_features:
            print(f"[특성 조정] 특성 수를 {expected_features}개로 줄입니다.")
            # numpy 배열 슬라이싱 사용
            feature_vector = np.array(feature_vector[:expected_features])
        elif len(feature_vector) < expected_features:
            print(f"[특성 조정] 특성 수를 {expected_features}개로 늘립니다.")
            # 부족한 만큼 0으로 채우기
            padding = np.zeros(expected_features - len(feature_vector))
            feature_vector = np.concatenate([feature_vector, padding])

        # 스케일링 적용
        if scaler:
            # 2D 배열로 변환 후 스케일링
            feature_vector_2d = feature_vector.reshape(1, -1)
            feature_vector_2d = scaler.transform(feature_vector_2d)
            feature_vector = feature_vector_2d.flatten()

        # PCA 적용 (있는 경우)
        if pca:
            # 2D 배열로 변환 후 PCA 적용
            feature_vector_2d = feature_vector.reshape(1, -1)
            feature_vector_2d = pca.transform(feature_vector_2d)
            feature_vector = feature_vector_2d.flatten()

        # 예측 (2D 배열로 변환)
        feature_vector_2d = feature_vector.reshape(1, -1)
        prediction = classifier.predict(feature_vector_2d)[0]

        # 예측 결과 디버깅
        print(f"[예측 결과] 타입: {type(prediction)}, 값: {prediction}")

        # 감정 클래스 매핑
        emotions = ['anger', 'disgust', 'fear', 'happiness', 'sadness', 'surprise', 'neutral']

        # 정수로 변환 (필요한 경우)
        if not isinstance(prediction, (int, np.integer)):
            # 문자열인 경우 emotions 리스트에서 인덱스 찾기
            if isinstance(prediction, str) and prediction in emotions:
                prediction_idx = emotions.index(prediction)
            else:
                # 기본값으로 'neutral' 사용
                prediction_idx = emotions.index('neutral')
            print(f"[예측 변환] 원본: {prediction} -> 인덱스: {prediction_idx}")
        else:
            prediction_idx = prediction

        # 감정 이름 가져오기
        try:
            emotion = emotions[prediction_idx]
        except (IndexError, TypeError):
            # 예외 발생 시 기본값 사용
            print(f"[경고] 잘못된 예측 인덱스: {prediction_idx}, 기본값 사용")
            emotion = 'neutral'

        # 신뢰도 점수 (확률) 계산
        probabilities = classifier.predict_proba(feature_vector_2d)[0]
        print(f"[확률 분포] {probabilities}")

        # 최대 확률 사용
        confidence = np.max(probabilities)

        print(f"[ML 모델 예측] 감정: {emotion}, 신뢰도: {confidence:.2f}")

        # 감정 매핑 (영어 -> 한국어)
        emotion_map = {
            'anger': '화남',
            'disgust': '혐오',
            'fear': '공포',
            'happiness': '행복',
            'sadness': '슬픔',
            'surprise': '놀람',
            'neutral': '중립',
            'angry': '화남'  # 클래스 이름이 다를 수 있음
        }

        korean_emotion = emotion_map.get(emotion, emotion)
        print(f"[음성 감정] {korean_emotion} (신뢰도: {confidence:.2f})")

        return korean_emotion

    except Exception as e:
        print(f"[음성 감정 분석 오류] {e}")
        print(f"[오류 상세 정보] {type(e).__name__}")
        import traceback
        traceback.print_exc()  # 상세 오류 정보 출력
        print("[음성 감정 분석] 볼륨 기반 간단 분석으로 대체합니다.")

        # 볼륨 기반 간단 분석 (백업)
        volume = np.abs(audio).mean()
        print(f"[말투 볼륨 평균]: {volume:.2f}")

        # 볼륨 임계값 조정
        if volume > 1000:
            return "화남"
        elif volume > 700:
            return "놀람"
        elif volume > 400:
            return "행복"
        elif volume > 200:
            return "중립"
        else:
            return "슬픔"

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

    classifier = pipeline(
        'sentiment-analysis',
        model='sangrimlee/bert-base-multilingual-cased-nsmc'
    )
    text='내가 이딴 학교에 다녀야한다니'
    print(text)
    result = classifier(text)
    print(result)
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


# 통합 감정 결과 출력
def aggregate_emotions(face_emotion, speech_emotion, text_emotion):
    print("\n[최종 감정 종합]")
    print(f"얼굴 감정: {face_emotion}")
    print(f"말투 감정: {speech_emotion}")
    print(f"텍스트 감정: {text_emotion}")

    # 감정 매핑 테이블 (영어 -> 한국어)
    emotion_map = {
        'happy': '행복',
        'sad': '슬픔',
        'angry': '화남',
        'fear': '공포',
        'disgust': '혐오',
        'surprise': '놀람',
        'neutral': '중립'
    }

    # 영어 감정을 한국어로 변환
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