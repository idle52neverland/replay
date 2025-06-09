const mvSpecialClipCards = [
 {
  link: "https://www.youtube.com/watch?v=sTNXFgl-US4",
  category: "MV_SPECIAL_CLIP",
  member: "민니",
  year: "2025",
  thumbnail: "https://i.ytimg.com/vi/sTNXFgl-US4/hqdefault.jpg",
  alt: "민니 - [언젠가는 슬기로울 전공의생활 (Resident Playbook) OST Part 5] 민니 (MINNIE) - 숨 (Breath) MV (2025-04-26)",
  title: "[언젠가는 슬기로울 전공의생활 (Resident Playbook) OST Part 5] 민니 (MINNIE) - 숨 (Breath) MV (2025-04-26)"
},
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

// ✅ 중복 제거
const normalize = str => str?.toLowerCase().trim().replace(/\s+/g, '');
const seen = new Set();
mvSpecialClipCards = mvSpecialClipCards.filter(card => {{
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
mvSpecialClipCards.sort((a, b) => extractDate(b.title) - extractDate(a.title));

// ✅ 전역 등록
window.mvSpecialClipCards = mvSpecialClipCards;
