#!/usr/bin/env python 

import numpy as np
import pickle
import os
import librosa
import glob
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.neural_network import MLPClassifier
from sklearn.metrics import accuracy_score

print("[모델 훈련 시작] 간단한 음성 감정 분석 모델을 생성합니다...")

# 간단한 감정 분류 모델 생성 (실제 데이터셋 없이)
# 감정 클래스 정의
emotion_classes = ['anger', 'disgust', 'fear', 'happiness', 'sadness', 'surprise', 'neutral']

# 특성 추출 함수 정의
def extract_features(audio_file):
    try:
        # 오디오 파일 로드
        y, sr = librosa.load(audio_file, sr=None)
        
        # 특성 추출
        mfccs = librosa.feature.mfcc(y=y, sr=sr, n_mfcc=40)
        spectral_centroids = librosa.feature.spectral_centroid(y=y, sr=sr)[0]
        spectral_contrast = librosa.feature.spectral_contrast(y=y, sr=sr)[0]
        spectral_rolloff = librosa.feature.spectral_rolloff(y=y, sr=sr)[0]
        
        # 특성 통계량 계산 (평균, 표준편차, 최대, 최소)
        features = []
        for feature in [mfccs, np.array([spectral_centroids]), np.array([spectral_contrast]), np.array([spectral_rolloff])]:
            features.extend([np.mean(feature), np.std(feature), np.max(feature), np.min(feature)])
        
        return np.array(features)
    except Exception as e:
        print(f"오류 발생: {e}")
        return None

# 간단한 모델 생성 (실제 데이터 없이)
print("[가상 데이터 생성] 모델 훈련을 위한 가상 데이터를 생성합니다...")

# 가상 특성 벡터 생성 (각 감정 클래스당 50개)
n_samples_per_class = 50
n_features = 200  # 추출된 특성의 예상 개수

# 가상 데이터 생성
X = np.zeros((len(emotion_classes) * n_samples_per_class, n_features))
y = np.zeros(len(emotion_classes) * n_samples_per_class, dtype=object)

for i, emotion in enumerate(emotion_classes):
    # 각 감정 클래스에 대한 가상 특성 생성
    start_idx = i * n_samples_per_class
    end_idx = (i + 1) * n_samples_per_class
    
    # 각 감정마다 특성 분포를 약간 다르게 생성
    mean_shift = i * 0.5
    std_scale = 0.5 + i * 0.1
    
    X[start_idx:end_idx] = np.random.normal(mean_shift, std_scale, (n_samples_per_class, n_features))
    y[start_idx:end_idx] = emotion

print(f"[가상 데이터 생성 완료] 샘플 수: {len(y)}, 특성 수: {X.shape[1]}")
print(f"[감정 클래스] {emotion_classes}")

# 데이터 전처리
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)

# 훈련/테스트 데이터 분할
X_train, X_test, y_train, y_test = train_test_split(X_scaled, y, test_size=0.2, random_state=42)

# 모델 훈련
print("[모델 훈련 중] MLPClassifier...")
classifier = MLPClassifier(
    hidden_layer_sizes=(100, 50),
    activation='relu',
    solver='adam',
    alpha=0.0001,
    batch_size='auto',
    learning_rate='adaptive',
    max_iter=500,
    random_state=42
)
classifier.fit(X_train, y_train)

# 모델 성능 평가
y_pred = classifier.predict(X_test)
accuracy = accuracy_score(y_test, y_pred)
print(f"[모델 성능] 정확도: {accuracy:.4f}")

# 모델 저장
model_data = {
    'classifier': classifier,
    'scaler': scaler
}

model_path = 'speech_emotion_model.pkl'
with open(model_path, 'wb') as f:
    pickle.dump(model_data, f)

print(f"[모델 저장 완료] 파일: {model_path}")
print(f"[감정 클래스] {classifier.classes_}")
print("\n모델 훈련이 완료되었습니다. 이제 tes.py에서 음성 감정 분석을 실행할 수 있습니다.")
print("\n참고: 이 모델은 가상 데이터로 훈련되었으므로 실제 성능은 제한적일 수 있습니다.")
print("실제 데이터셋으로 훈련하려면 적절한 음성 감정 데이터셋을 준비하세요.")