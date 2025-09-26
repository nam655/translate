function translateText() {
  const inputText = document.getElementById("englishText").value;

  // 실제 번역 API를 연결해야 정확한 번역이 가능함
  // 아래는 예시 번역 처리
  const fakeTranslation = inputText
    .replace(/hello/gi, "안녕하세요")
    .replace(/world/gi, "세계")
    .replace(/thank you/gi, "감사합니다");

  document.getElementById("translatedText").innerText = fakeTranslation || "번역 결과가 여기에 표시됩니다.";
}
