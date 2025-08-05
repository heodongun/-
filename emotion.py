import os
import sounddevice as sd
import numpy as np
import scipy.io.wavfile as wavfile
from gtts import gTTS
from faster_whisper import WhisperModel
from transformers import pipeline
import tempfile
import platform


# 1. 오디오 녹음
def record_audio(filename="output.wav", duration=5, fs=44100):
    print("🎙️ 말해주세요...")
    audio = sd.rec(int(duration * fs), samplerate=fs, channels=1, dtype='int16')
    sd.wait()
    wavfile.write(filename, fs, audio)
    print(f"✅ 녹음 완료: {filename}")


# 2. Whisper로 텍스트 추출
def transcribe_audio(file_path="output.wav"):
    print("🔍 음성 인식 중...")
    model = WhisperModel("base")
    segments, _ = model.transcribe(file_path)
    result = ""
    for segment in segments:
        print("[%.2fs -> %.2fs] %s" % (segment.start, segment.end, segment.text))
        result += segment.text + " "
    return result.strip()


# 3. 감정 분석
def analyze_text(text):
    print("🧠 감정 분석 중...")
    classifier = pipeline("sentiment-analysis")
    result = classifier(text)
    print(f"감정: {result[0]['label']} ({result[0]['score']:.2f})")
    return result[0]


# 4. TTS로 응답
def speak_text(text, lang='en'):
    print("🗣️ 응답 중...")
    tts = gTTS(text=text, lang=lang)
    with tempfile.NamedTemporaryFile(delete=False, suffix=".mp3") as fp:
        temp_mp3 = fp.name
        tts.save(temp_mp3)

    if platform.system() == "Darwin":
        os.system(f"afplay {temp_mp3}")
    elif platform.system() == "Windows":
        os.system(f"start {temp_mp3}")
    else:
        os.system(f"mpg123 {temp_mp3}")

    os.remove(temp_mp3)


# 🚀 전체 실행 흐름
def main():
    record_audio()
    text = transcribe_audio()
    if not text:
        print("❌ 음성 인식을 실패했습니다.")
        return
    analysis = analyze_text(text)
    response = f"You said: {text}. Your emotion seems to be {analysis['label']}."
    speak_text(response)


if __name__ == "__main__":
    main()
