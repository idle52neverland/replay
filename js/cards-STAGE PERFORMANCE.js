const stagePerformanceCards = [
  {
    link: "https://www.youtube.com/watch?v=xxxx",
    category: "STAGE PERFORMANCE",
    member: "아이들",
    year: "2025",
    thumbnail: "https://i.ytimg.com/vi/xxxx/hqdefault.jpg",
    alt: "예시 영상 설명",
    title: "예시 제목 (2025-01-01)"
  }
];

const normalize = str => str?.toLowerCase().trim().replace(/\s+/g, '');
const seen = new Set();
const unique = stagePerformanceCards.filter(card => {
  const key = normalize(card.link) + "::" + normalize(card.title);
  if (!card.link || !card.title || seen.has(key)) return false;
  seen.add(key);
  return true;
});

window.stagePerformanceCards = unique;
