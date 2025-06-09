let allCards = [
  {
    link: "https://www.youtube.com/watch?v=hAONx6nuEgI",
    category: "MV_SPECIAL_CLIP",
    member: "아이들",
    year: "2025",
    thumbnail: "https://i.ytimg.com/vi/hAONx6nuEgI/hqdefault.jpg",
    alt: "아이들 - i-dle (아이들) 'Good Thing' Official Music Video (2025-05-19)",
    title: "i-dle (아이들) 'Good Thing' Official Music Video (2025-05-19)"
  },
  {
    link: "https://www.youtube.com/watch?v=zKfs2EM8LQ4",
    category: "MV_SPECIAL_CLIP",
    member: "아이들",
    year: "2025",
    thumbnail: "https://i.ytimg.com/vi/zKfs2EM8LQ4/hqdefault.jpg",
    alt: "아이들 - i-dle (아이들) 'Girlfriend' Official Music Video (2025-05-08)",
    title: "i-dle (아이들) 'Girlfriend' Official Music Video (2025-05-08)"
  }
  // 🔻 여기에 더 많은 카드 추가해도 상관없음 (무작위 순서여도 됨)
];

// ✅ 날짜 추출 함수
function extractDate(str) {
  const match = str.match(/\((\d{4}-\d{2}-\d{2})\)/);
  return match ? new Date(match[1]) : new Date(0); // 날짜 없으면 가장 오래된 날짜로 처리
}

// ✅ 최신순 정렬
allCards.sort((a, b) => extractDate(b.title) - extractDate(a.title));

// ✅ 중복 제거
const normalize = str => str?.toLowerCase().trim().replace(/\s+/g, '');
const seen = new Set();

allCards = allCards.filter(card => {
  const link = normalize(card.link);
  const title = normalize(card.title);
  const key = link + "::" + title;
  if (!link || !title || seen.has(key)) return false;
  seen.add(key);
  return true;
});

// ✅ 전역 등록
window.allCards = allCards;
