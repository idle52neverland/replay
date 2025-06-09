const allCards = [
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


];

// ✅ 중복 제거 로직 (선택)
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

// ✅ 전역 등록 (이거 꼭 필요함!)
window.allCards = allCards;
