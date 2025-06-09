const challengeCards = [
  // 카드 데이터를 여기에 추가하세요
];

// ✅ 중복 제거
const normalize = str => str?.toLowerCase().trim().replace(/\s+/g, '');
const seen = new Set();
challengeCards = challengeCards.filter(card => {{
  const key = normalize(card.link) + "::" + normalize(card.title);
  if (seen.has(key)) return false;
  seen.add(key);
  return true;
}});

// ✅ 최신순 정렬
function extractDate(title) {{
  const match = title.match(/\((\d{{4}}-\d{{2}}-\d{{2}})\)/);
  return match ? new Date(match[1]) : new Date(0);
}}
challengeCards.sort((a, b) => extractDate(b.title) - extractDate(a.title));

// ✅ 전역 등록
window.challengeCards = challengeCards;
