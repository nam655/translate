function detectLang(text) {
  // 간단 감지: 한글이 있으면 'ko', 아니면 'en'
  const koreanPattern = /[ㄱ-ㅎ가-힣]/;
  return koreanPattern.test(text) ? "ko" : "en";
}

async function translateText(text, from, to) {
  // 무료 MyMemory Translator API 사용
  const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${from}|${to}`;
  const res = await fetch(url);
  const data = await res.json();
  return data.responseData.translatedText;
}

document.getElementById('translateBtn').onclick = async function() {
  const input = document.getElementById('input').value.trim();
  if (!input) {
    document.getElementById('output').innerText = "텍스트를 입력하세요.";
    return;
  }
  const detected = detectLang(input);
  let from, to;
  if (detected === "ko") {
    from = "ko";
    to = "en";
  } else {
    from = "en";
    to = "ko";
  }
  document.getElementById('output').innerText = "번역 중...";
  try {
    const result = await translateText(input, from, to);
    document.getElementById('output').innerText = result;
  } catch (e) {
    document.getElementById('output').innerText = "번역 오류";
  }
};
