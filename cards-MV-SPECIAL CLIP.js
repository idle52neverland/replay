const mvSpecialClipCards = [
{
  link: "https://www.youtube.com/watch?v=hAONx6nuEgI",
  category: "MV-SPECIAL CLIP",
  member: "아이들",
  year: "2025",
  thumbnail: "https://i.ytimg.com/vi/hAONx6nuEgI/hqdefault.jpg",
  alt: "아이들 - i-dle (아이들) 'Good Thing' Official Music Video (2025-05-19)",
  title: "i-dle (아이들) 'Good Thing' Official Music Video (2025-05-19)"
}



  
];

const normalize = str => str?.toLowerCase().trim().replace(/\s+/g, '');
const seen = new Set();
const unique = mvSpecialClipCards.filter(card => {
  const key = normalize(card.link) + "::" + normalize(card.title);
  if (!card.link || !card.title || seen.has(key)) return false;
  seen.add(key);
  return true;
});

window.mvSpecialClipCards = unique;
