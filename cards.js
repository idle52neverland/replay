const allCards = [
{
  link: "https://www.youtube.com/watch?v=hAONx6nuEgI",
  category: "MV-SPECIAL CLIP",
  member: "아이들",
  year: "2025",
  thumbnail: "https://i.ytimg.com/vi/hAONx6nuEgI/hqdefault.jpg",
  alt: "아이들 - i-dle (아이들) 'Good Thing' Official Music Video (2025-05-19)",
  title: "i-dle (아이들) 'Good Thing' Official Music Video (2025-05-19)"
},
{
  link: "https://www.youtube.com/watch?v=zKfs2EM8LQ4",
  category: "MV-SPECIAL CLIP",
  member: "아이들",
  year: "2025",
  thumbnail: "https://i.ytimg.com/vi/zKfs2EM8LQ4/hqdefault.jpg",
  alt: "아이들 - i-dle (아이들) 'Girlfriend' Official Music Video (2025-05-08)",
  title: "i-dle (아이들) 'Girlfriend' Official Music Video (2025-05-08)"
},
{
  link: "https://www.youtube.com/watch?v=sTNXFgl-US4",
  category: "MV-SPECIAL CLIP",
  member: "민니",
  year: "2025",
  thumbnail: "https://i.ytimg.com/vi/sTNXFgl-US4/hqdefault.jpg",
  alt: "민니 - [언젠가는 슬기로울 전공의생활 (Resident Playbook) OST Part 5] 민니 (MINNIE) - 숨 (Breath) MV (2025-04-26)",
  title: "[언젠가는 슬기로울 전공의생활 (Resident Playbook) OST Part 5] 민니 (MINNIE) - 숨 (Breath) MV (2025-04-26)"
},
{
  link: "https://www.youtube.com/watch?v=jRkUik5EJwU",
  category: "MV-SPECIAL CLIP",
  member: "민니",
  year: "2025",
  thumbnail: "https://i.ytimg.com/vi/jRkUik5EJwU/hqdefault.jpg",
  alt: "민니 - 민니(MINNIE) - 'Cherry Sky' SPECIAL CLIP (2025-02-02)",
  title: "민니(MINNIE) - 'Cherry Sky' SPECIAL CLIP (2025-02-02)"
},
{
  link: "https://www.youtube.com/watch?v=-pKYsndlSXE",
  category: "MV-SPECIAL CLIP",
  member: "민니",
  year: "2025",
  thumbnail: "https://i.ytimg.com/vi/-pKYsndlSXE/hqdefault.jpg",
  alt: "민니 - 민니(MINNIE) - 'Obsession (Feat. TEN of WayV)' SPECIAL CLIP (2025-01-27)",
  title: "민니(MINNIE) - 'Obsession (Feat. TEN of WayV)' SPECIAL CLIP (2025-01-27)"
},
{
  link: "https://www.youtube.com/watch?v=SRCMt0sv-AY",
  category: "MV-SPECIAL CLIP",
  member: "민니",
  year: "2025",
  thumbnail: "https://i.ytimg.com/vi/SRCMt0sv-AY/hqdefault.jpg",
  alt: "민니 - 나의 완벽한 비서 OST Part.7 민니 ((여자)아이들) - Answer 뮤직비디오🎶 | 나의 완벽한 비서 | SBS (2025-01-25)",
  title: "나의 완벽한 비서 OST Part.7 민니 ((여자)아이들) - Answer 뮤직비디오🎶 | 나의 완벽한 비서 | SBS (2025-01-25)"
},
{
  link: "https://www.youtube.com/watch?v=3J_Ev390Q9Q",
  category: "MV-SPECIAL CLIP",
  member: "민니",
  year: "2025",
  thumbnail: "https://i.ytimg.com/vi/3J_Ev390Q9Q/hqdefault.jpg",
  alt: "민니 - [MV] 민니 ((여자)아이들) - Answer I SBS 나의 완벽한 비서 (Love Scout) OST Part.7 #나의완벽한비서 #LOVESCOUT #SBSCatch (2025-01-25)",
  title: "[MV] 민니 ((여자)아이들) - Answer I SBS 나의 완벽한 비서 (Love Scout) OST Part.7 #나의완벽한비서 #LOVESCOUT #SBSCatch (2025-01-25)"
},
{
  link: "https://www.youtube.com/watch?v=ZlpxcCiCCP4",
  category: "MV-SPECIAL CLIP",
  member: "슈화",
  year: "2025",
  thumbnail: "https://i.ytimg.com/vi/ZlpxcCiCCP4/hqdefault.jpg",
  alt: "슈화 - 周興哲Eric Chou《幾乎是愛情 Almost》Official Music Video (特邀主演:舒華 Shuhua 슈화) (2025-01-22)",
  title: "周興哲Eric Chou《幾乎是愛情 Almost》Official Music Video (特邀主演:舒華 Shuhua 슈화) (2025-01-22)"
},
{
  link: "https://www.youtube.com/watch?v=UTHqh7Vpa64",
  category: "MV-SPECIAL CLIP",
  member: "민니",
  year: "2025",
  thumbnail: "https://i.ytimg.com/vi/UTHqh7Vpa64/hqdefault.jpg",
  alt: "민니 - 민니(MINNIE) - 'HER' Official Music Video (2025-01-21)",
  title: "민니(MINNIE) - 'HER' Official Music Video (2025-01-21)"
},
{
  link: "https://www.youtube.com/watch?v=8KpvPHcXr1c",
  category: "MV-SPECIAL CLIP",
  member: "민니",
  year: "2025",
  thumbnail: "https://i.ytimg.com/vi/8KpvPHcXr1c/hqdefault.jpg",
  alt: "민니 - 민니(MINNIE) - 'Blind Eyes Red' Official Music Video (2025-01-06)",
  title: "민니(MINNIE) - 'Blind Eyes Red' Official Music Video (2025-01-06)"
},
{
  link: "https://www.youtube.com/watch?v=zkR3SAMLGno",
  category: "MV-SPECIAL CLIP",
  member: "미연",
  year: "2024",
  thumbnail: "https://i.ytimg.com/vi/zkR3SAMLGno/hqdefault.jpg",
  alt: "미연 - 미연(MIYEON) - 'Sky Walking' SPECIAL CLIP (2024-12-19)",
  title: "미연(MIYEON) - 'Sky Walking' SPECIAL CLIP (2024-12-19)"
},
{
  link: "https://www.youtube.com/watch?v=Dpopp6cgN58",
  category: "MV-SPECIAL CLIP",
  member: "우기",
  year: "2024",
  thumbnail: "https://i.ytimg.com/vi/Dpopp6cgN58/hqdefault.jpg",
  alt: "우기 - 우기 - 내일이 찾아오면 (Acoustic Ver.) (From 강매강 OST) MV (2024-10-17)",
  title: "우기 - 내일이 찾아오면 (Acoustic Ver.) (From 강매강 OST) MV (2024-10-17)"
},
{
  link: "https://www.youtube.com/watch?v=Ubz6C2t_FFM",
  category: "MV-SPECIAL CLIP",
  member: "우기",
  year: "2024",
  thumbnail: "https://i.ytimg.com/vi/Ubz6C2t_FFM/hqdefault.jpg",
  alt: "우기 - 우기(YUQI) - 'Radio (Dum-Dum)' SPECIAL CLIP (2024-09-22)",
  title: "우기(YUQI) - 'Radio (Dum-Dum)' SPECIAL CLIP (2024-09-22)"
},
{
  link: "https://www.youtube.com/watch?v=_s4PlNvJnDQ",
  category: "MV-SPECIAL CLIP",
  member: "아이들",
  year: "2024",
  thumbnail: "https://i.ytimg.com/vi/_s4PlNvJnDQ/hqdefault.jpg",
  alt: "아이들 - (여자)아이들((G)I-DLE) - 'Neverland' SPECIAL CLIP (2024-08-11)",
  title: "(여자)아이들((G)I-DLE) - 'Neverland' SPECIAL CLIP (2024-08-11)"
},
{
  link: "https://www.youtube.com/watch?v=Zf3nEwaWLpA",
  category: "MV-SPECIAL CLIP",
  member: "아이들",
  year: "2024",
  thumbnail: "https://i.ytimg.com/vi/Zf3nEwaWLpA/hqdefault.jpg",
  alt: "아이들 - (여자)아이들((G)I-DLE) - 'Bloom' SPECIAL CLIP (2024-08-05)",
  title: "(여자)아이들((G)I-DLE) - 'Bloom' SPECIAL CLIP (2024-08-05)"
},
{
  link: "https://www.youtube.com/watch?v=rTKqSmX9XhQ",
  category: "MV-SPECIAL CLIP",
  member: "아이들",
  year: "2024",
  thumbnail: "https://i.ytimg.com/vi/rTKqSmX9XhQ/hqdefault.jpg",
  alt: "아이들 - (여자)아이들((G)I-DLE) - '클락션 (Klaxon)' Official Music Video (2024-07-08)",
  title: "(여자)아이들((G)I-DLE) - '클락션 (Klaxon)' Official Music Video (2024-07-08)"
},
{
  link: "https://www.youtube.com/watch?v=EJiWPnTAZCM",
  category: "MV-SPECIAL CLIP",
  member: "아이들",
  year: "2024",
  thumbnail: "https://i.ytimg.com/vi/EJiWPnTAZCM/hqdefault.jpg",
  alt: "아이들 - TYTAN - YOBO [OFFICIAL MV] (2024-06-27)",
  title: "TYTAN - YOBO [OFFICIAL MV] (2024-06-27)"
},
{
  link: "https://www.youtube.com/watch?v=uSddv1T7Byg",
  category: "MV-SPECIAL CLIP",
  member: "우기,민니",
  year: "2024",
  thumbnail: "https://i.ytimg.com/vi/uSddv1T7Byg/hqdefault.jpg",
  alt: "우기,민니 - 우기(YUQI) - 'Everytime (With MINNIE ((G)I-DLE))' Special Clip (2024-05-08)",
  title: "우기(YUQI) - 'Everytime (With MINNIE ((G)I-DLE))' Special Clip (2024-05-08)"
},
{
  link: "https://www.youtube.com/watch?v=UqJIBItJeyg",
  category: "MV-SPECIAL CLIP",
  member: "우기",
  year: "2024",
  thumbnail: "https://i.ytimg.com/vi/UqJIBItJeyg/hqdefault.jpg",
  alt: "우기 - 우기(YUQI) - 'FREAK' Official Music Video (2024-04-23)",
  title: "우기(YUQI) - 'FREAK' Official Music Video (2024-04-23)"
},
{
  link: "https://www.youtube.com/watch?v=_lQxaYmt0DQ",
  category: "MV-SPECIAL CLIP",
  member: "민니",
  year: "2024",
  thumbnail: "https://i.ytimg.com/vi/_lQxaYmt0DQ/hqdefault.jpg",
  alt: "민니 - [선재 업고 튀어 OST Part 3] 민니 ((여자)아이들) (MINNIE) - 꿈결같아서 (Like A Dream) MV (2024-04-17)",
  title: "[선재 업고 튀어 OST Part 3] 민니 ((여자)아이들) (MINNIE) - 꿈결같아서 (Like A Dream) MV (2024-04-17)"
},
{
  link: "https://www.youtube.com/watch?v=ZqU4oTDy3XE",
  category: "MV-SPECIAL CLIP",
  member: "우기",
  year: "2024",
  thumbnail: "https://i.ytimg.com/vi/ZqU4oTDy3XE/hqdefault.jpg",
  alt: "우기 - 우기(YUQI) - 'Could It Be' Official Music Video (2024-04-05)",
  title: "우기(YUQI) - 'Could It Be' Official Music Video (2024-04-05)"
},
{
  link: "https://www.youtube.com/watch?v=KAymeaEyPr8",
  category: "MV-SPECIAL CLIP",
  member: "아이들",
  year: "2024",
  thumbnail: "https://i.ytimg.com/vi/KAymeaEyPr8/hqdefault.jpg",
  alt: "아이들 - (여자)아이들((G)I-DLE) - 'Revenge' Official Music Video (2024-02-15)",
  title: "(여자)아이들((G)I-DLE) - 'Revenge' Official Music Video (2024-02-15)"
},
{
  link: "https://www.youtube.com/watch?v=6f3RzjXPQwA",
  category: "MV-SPECIAL CLIP",
  member: "아이들",
  year: "2024",
  thumbnail: "https://i.ytimg.com/vi/6f3RzjXPQwA/hqdefault.jpg",
  alt: "아이들 - (여자)아이들((G)I-DLE) - 'Super Lady' Official Music Video (2024-01-29)",
  title: "(여자)아이들((G)I-DLE) - 'Super Lady' Official Music Video (2024-01-29)"
},
{
  link: "https://www.youtube.com/watch?v=baaNwRAhHBo",
  category: "MV-SPECIAL CLIP",
  member: "아이들",
  year: "2024",
  thumbnail: "https://i.ytimg.com/vi/baaNwRAhHBo/hqdefault.jpg",
  alt: "아이들 - (여자)아이들((G)I-DLE) - 'Wife' Official Music Video (2024-01-21)",
  title: "(여자)아이들((G)I-DLE) - 'Wife' Official Music Video (2024-01-21)"
},
{
  link: "https://www.youtube.com/watch?v=Iewisp9KYRw",
  category: "MV-SPECIAL CLIP",
  member: "아이들",
  year: "2023",
  thumbnail: "https://i.ytimg.com/vi/Iewisp9KYRw/hqdefault.jpg",
  alt: "아이들 - (여자)아이들((G)I-DLE) - 'I Want That' Official Music Video (2023-10-06)",
  title: "(여자)아이들((G)I-DLE) - 'I Want That' Official Music Video (2023-10-06)"
},
{
  link: "https://www.youtube.com/watch?v=U6DG3TBcV6s",
  category: "MV-SPECIAL CLIP",
  member: "아이들",
  year: "2023",
  thumbnail: "https://i.ytimg.com/vi/U6DG3TBcV6s/hqdefault.jpg",
  alt: "아이들 - (여자)아이들 ((G)I-DLE) 'Last Dance (Prod. GroovyRoom)' Official Music Video (2023-09-01)",
  title: "(여자)아이들 ((G)I-DLE) 'Last Dance (Prod. GroovyRoom)' Official Music Video (2023-09-01)"
},
{
  link: "https://www.youtube.com/watch?v=bKLTsAy9ig4",
  category: "MV-SPECIAL CLIP",
  member: "소연",
  year: "2023",
  thumbnail: "https://i.ytimg.com/vi/bKLTsAy9ig4/hqdefault.jpg",
  alt: "소연 - [MV] SOYEON ((G)I-DLE) X MOONO (소연 ((여자)아이들) X 무너) _ I'm OK(아무너케) (2023-08-23)",
  title: "[MV] SOYEON ((G)I-DLE) X MOONO (소연 ((여자)아이들) X 무너) _ I'm OK(아무너케) (2023-08-23)"
},
{
  link: "https://www.youtube.com/watch?v=pCh3Kp6qxo8",
  category: "MV-SPECIAL CLIP",
  member: "아이들",
  year: "2023",
  thumbnail: "https://i.ytimg.com/vi/pCh3Kp6qxo8/hqdefault.jpg",
  alt: "아이들 - (G)I-DLE - I DO (Official Music Video) (2023-07-14)",
  title: "(G)I-DLE - I DO (Official Music Video) (2023-07-14)"
},
{
  link: "https://www.youtube.com/watch?v=1XIi9ofX2kE",
  category: "MV-SPECIAL CLIP",
  member: "우기",
  year: "2023",
  thumbnail: "https://i.ytimg.com/vi/1XIi9ofX2kE/hqdefault.jpg",
  alt: "우기 - YENA (최예나) - Hate Rodrigo (Feat. 우기 ((여자)아이들)) MV (2023-06-30)",
  title: "YENA (최예나) - Hate Rodrigo (Feat. 우기 ((여자)아이들)) MV (2023-06-30)"
},
{
  link: "https://www.youtube.com/watch?v=7HDeem-JaSY",
  category: "MV-SPECIAL CLIP",
  member: "아이들",
  year: "2023",
  thumbnail: "https://i.ytimg.com/vi/7HDeem-JaSY/hqdefault.jpg",
  alt: "아이들 - (여자)아이들((G)I-DLE) - '퀸카 (Queencard)' Official Music Video (2023-05-15)",
  title: "(여자)아이들((G)I-DLE) - '퀸카 (Queencard)' Official Music Video (2023-05-15)"
},
{
  link: "https://www.youtube.com/watch?v=XZaBkbvteBc",
  category: "MV-SPECIAL CLIP",
  member: "아이들",
  year: "2023",
  thumbnail: "https://i.ytimg.com/vi/XZaBkbvteBc/hqdefault.jpg",
  alt: "아이들 - (여자)아이들((G)I-DLE) - 'Allergy' Official Music Video (2023-05-09)",
  title: "(여자)아이들((G)I-DLE) - 'Allergy' Official Music Video (2023-05-09)"
},
{
  link: "https://www.youtube.com/watch?v=dy3GaMa-j_c",
  category: "MV-SPECIAL CLIP",
  member: "아이들",
  year: "2023",
  thumbnail: "https://i.ytimg.com/vi/dy3GaMa-j_c/hqdefault.jpg",
  alt: "아이들 - X-RATED - PINK YOUR MOMENT [Official Music Video] (2023-04-26)",
  title: "X-RATED - PINK YOUR MOMENT [Official Music Video] (2023-04-26)"
},
{
  link: "https://www.youtube.com/watch?v=nGeIFpzH7rE",
  category: "MV-SPECIAL CLIP",
  member: "민니",
  year: "2023",
  thumbnail: "https://i.ytimg.com/vi/nGeIFpzH7rE/hqdefault.jpg",
  alt: "민니 - “Making Waves” ft. Don Diablo x Minnie of (G)I-DLE // VALORANT Champions Tour  Pacific 2023 (2023-03-15)",
  title: "“Making Waves” ft. Don Diablo x Minnie of (G)I-DLE // VALORANT Champions Tour  Pacific 2023 (2023-03-15)"
},
{
  link: "https://www.youtube.com/watch?v=jrt4iWhofPA",
  category: "MV-SPECIAL CLIP",
  member: "민니",
  year: "2023",
  thumbnail: "https://i.ytimg.com/vi/jrt4iWhofPA/hqdefault.jpg",
  alt: "민니 - Anne-Marie, 민니 ((여자)아이들) - Expectations (2023-03-09)",
  title: "Anne-Marie, 민니 ((여자)아이들) - Expectations (2023-03-09)"
},
{
  link: "https://www.youtube.com/watch?v=2zR7YuAD0t4",
  category: "MV-SPECIAL CLIP",
  member: "민니",
  year: "2023",
  thumbnail: "https://i.ytimg.com/vi/2zR7YuAD0t4/hqdefault.jpg",
  alt: "민니 - MV | 민니 ((여자)아이들) MINNIE ((G)I-DLE) - In The Novel | 모든 게 착각이었다 OST Part 2 (2023-01-26)",
  title: "MV | 민니 ((여자)아이들) MINNIE ((G)I-DLE) - In The Novel | 모든 게 착각이었다 OST Part 2 (2023-01-26)"
},
{
  link: "https://www.youtube.com/watch?v=pQHaaLzBZPM",
  category: "MV-SPECIAL CLIP",
  member: "소연",
  year: "2023",
  thumbnail: "https://i.ytimg.com/vi/pQHaaLzBZPM/hqdefault.jpg",
  alt: "소연 - Supercarry (Feat. SOYEON(소연) of (G)I-DLE (여자아이들)) Official Soundtrack. (2023-01-18)",
  title: "Supercarry (Feat. SOYEON(소연) of (G)I-DLE (여자아이들)) Official Soundtrack. (2023-01-18)"
},
{
  link: "https://www.youtube.com/watch?v=P7zU8MNxAoU",
  category: "MV-SPECIAL CLIP",
  member: "민니",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/P7zU8MNxAoU/hqdefault.jpg",
  alt: "민니 - 민니(MINNIE) - 'Recuérdame / Coco OST' (Cover) (2022-12-25)",
  title: "민니(MINNIE) - 'Recuérdame / Coco OST' (Cover) (2022-12-25)"
},
{
  link: "https://www.youtube.com/watch?v=qRrV31S7oO0",
  category: "MV-SPECIAL CLIP",
  member: "아이들",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/qRrV31S7oO0/hqdefault.jpg",
  alt: "아이들 - (여자)아이들((G)I-DLE), Steve Aoki - 'Nxde (Steve Aoki Remix)' Visualizer (2022-12-16)",
  title: "(여자)아이들((G)I-DLE), Steve Aoki - 'Nxde (Steve Aoki Remix)' Visualizer (2022-12-16)"
},
{
  link: "https://www.youtube.com/watch?v=fCO7f0SmrDc",
  category: "MV-SPECIAL CLIP",
  member: "아이들",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/fCO7f0SmrDc/hqdefault.jpg",
  alt: "아이들 - (여자)아이들((G)I-DLE) - 'Nxde' Official Music Video (2022-10-17)",
  title: "(여자)아이들((G)I-DLE) - 'Nxde' Official Music Video (2022-10-17)"
},
{
  link: "https://www.youtube.com/watch?v=T91NIKVhn_4",
  category: "MV-SPECIAL CLIP",
  member: "아이들",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/T91NIKVhn_4/hqdefault.jpg",
  alt: "아이들 - (여자)아이들((G)I-DLE) - X-FILE VIDEO (2022-10-11)",
  title: "(여자)아이들((G)I-DLE) - X-FILE VIDEO (2022-10-11)"
},
{
  link: "https://www.youtube.com/watch?v=yu_85QuSNAU",
  category: "MV-SPECIAL CLIP",
  member: "아이들",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/yu_85QuSNAU/hqdefault.jpg",
  alt: "아이들 - FIFA Official Licensed Product | Winter Film (Full) (2022-09-22)",
  title: "FIFA Official Licensed Product | Winter Film (Full) (2022-09-22)"
},
{
  link: "https://www.youtube.com/watch?v=xDBvRbiy9aI",
  category: "MV-SPECIAL CLIP",
  member: "우기",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/xDBvRbiy9aI/hqdefault.jpg",
  alt: "우기 - 우기 of (여자)아이들 (YUQI of (G)I-DLE) - 'Beggin’ / Måneskin' (Cover) (2022-09-22)",
  title: "우기 of (여자)아이들 (YUQI of (G)I-DLE) - 'Beggin’ / Måneskin' (Cover) (2022-09-22)"
},
{
  link: "https://www.youtube.com/watch?v=n9oti9orTuM",
  category: "MV-SPECIAL CLIP",
  member: "소연",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/n9oti9orTuM/hqdefault.jpg",
  alt: "소연 - [쉐이크쉑 X 전소연] 아따 맛있다(Ah-dda, It's delicious)(Shake Shack Korea) MV (2022-07-21)",
  title: "[쉐이크쉑 X 전소연] 아따 맛있다(Ah-dda, It's delicious)(Shake Shack Korea) MV (2022-07-21)"
},
{
  link: "https://www.youtube.com/watch?v=rsgyQYs4C8A",
  category: "MV-SPECIAL CLIP",
  member: "민니",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/rsgyQYs4C8A/hqdefault.jpg",
  alt: "민니 - [M/V] 민니 ((여자)아이들) - 너의 하루를 묻고 싶어 :: 링크: 먹고 사랑하라, 죽이게(Link: Eat, Love, Kill) OST Part.2 (2022-06-21)",
  title: "[M/V] 민니 ((여자)아이들) - 너의 하루를 묻고 싶어 :: 링크: 먹고 사랑하라, 죽이게(Link: Eat, Love, Kill) OST Part.2 (2022-06-21)"
},
{
  link: "https://www.youtube.com/watch?v=cKqxdDg-d9I",
  category: "MV-SPECIAL CLIP",
  member: "민니",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/cKqxdDg-d9I/hqdefault.jpg",
  alt: "민니 - 민니 of (여자)아이들 (MINNIE of (G)I-DLE) - 'Nothing / Bruno Major' (Cover) (LIVE ver.) (2022-05-08)",
  title: "민니 of (여자)아이들 (MINNIE of (G)I-DLE) - 'Nothing / Bruno Major' (Cover) (LIVE ver.) (2022-05-08)"
},
{
  link: "https://www.youtube.com/watch?v=35lirBqwgTs",
  category: "MV-SPECIAL CLIP",
  member: "미연",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/35lirBqwgTs/hqdefault.jpg",
  alt: "미연 - 미연 (MIYEON) - 'Drive' Official Music Video (2022-04-27)",
  title: "미연 (MIYEON) - 'Drive' Official Music Video (2022-04-27)"
},
{
  link: "https://www.youtube.com/watch?v=Jh4QFaPmdss",
  category: "MV-SPECIAL CLIP",
  member: "아이들",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/Jh4QFaPmdss/hqdefault.jpg",
  alt: "아이들 - (여자)아이들((G)I-DLE) - 'TOMBOY' Official Music Video (2022-03-14)",
  title: "(여자)아이들((G)I-DLE) - 'TOMBOY' Official Music Video (2022-03-14)"
},
{
  link: "https://www.youtube.com/watch?v=iA04XJDdyrg",
  category: "MV-SPECIAL CLIP",
  member: "우기",
  year: "2021",
  thumbnail: "https://i.ytimg.com/vi/iA04XJDdyrg/hqdefault.jpg",
  alt: "우기 - 우기 of (여자)아이들 (YUQI of (G)I-DLE) - 'Easy On Me / Adele' (Cover) (2021-12-31)",
  title: "우기 of (여자)아이들 (YUQI of (G)I-DLE) - 'Easy On Me / Adele' (Cover) (2021-12-31)"
},
{
  link: "https://www.youtube.com/watch?v=-pMAHu9i180",
  category: "MV-SPECIAL CLIP",
  member: "소연",
  year: "2021",
  thumbnail: "https://i.ytimg.com/vi/-pMAHu9i180/hqdefault.jpg",
  alt: "소연 - 세상의 기준을 불태워라! 불닭볶음면(Main casting \"(여자) 아이들 소연\") (2021-12-17)",
  title: "세상의 기준을 불태워라! 불닭볶음면(Main casting \"(여자) 아이들 소연\") (2021-12-17)"
},
{
  link: "https://www.youtube.com/watch?v=qIyXFwnGy_I",
  category: "MV-SPECIAL CLIP",
  member: "소연",
  year: "2021",
  thumbnail: "https://i.ytimg.com/vi/qIyXFwnGy_I/hqdefault.jpg",
  alt: "소연 - 라비(RAVI) - '애니(feat.소연 ((여자)아이들))' MV (2021-12-07)",
  title: "라비(RAVI) - '애니(feat.소연 ((여자)아이들))' MV (2021-12-07)"
},

// 🔽 새로 불러온 35개 항목
{
  link: "https://www.youtube.com/watch?v=Lx4ka2qBY_A",
  category: "MV-SPECIAL CLIP",
  member: "민니",
  year: "2021",
  thumbnail: "https://i.ytimg.com/vi/Lx4ka2qBY_A/hqdefault.jpg",
  alt: "민니 - F.HERO x URBOYTJ Ft. MINNIE ((G)I-DLE) - MONEY HONEY (Prod. By URBOYTJ) [Official MV] (2021-09-30)",
  title: "F.HERO x URBOYTJ Ft. MINNIE ((G)I-DLE) - MONEY HONEY (Prod. By URBOYTJ) [Official MV] (2021-09-30)"
},
{
  link: "https://www.youtube.com/watch?v=fyk0U2BpiQg",
  category: "MV-SPECIAL CLIP",
  member: "우기",
  year: "2021",
  thumbnail: "https://i.ytimg.com/vi/fyk0U2BpiQg/hqdefault.jpg",
  alt: "우기 - 우기 of (여자)아이들 (YUQI of (G)I-DLE) - 'Rise Up / Andra Day' (Cover) (2021-09-23)",
  title: "우기 of (여자)아이들 (YUQI of (G)I-DLE) - 'Rise Up / Andra Day' (Cover) (2021-09-23)"
},
{
  link: "https://www.youtube.com/watch?v=MqzX9JAZ08U",
  category: "MV-SPECIAL CLIP",
  member: "소연",
  year: "2021",
  thumbnail: "https://i.ytimg.com/vi/MqzX9JAZ08U/hqdefault.jpg",
  alt: "소연 - 전소연(JEON SOYEON) - '삠삠 (BEAM BEAM)' Official Music Video (2021-07-05)",
  title: "전소연(JEON SOYEON) - '삠삠 (BEAM BEAM)' Official Music Video (2021-07-05)"
},
{
  link: "https://www.youtube.com/watch?v=AE8yKldv_oo",
  category: "MV-SPECIAL CLIP",
  member: "우기",
  year: "2021",
  thumbnail: "https://i.ytimg.com/vi/AE8yKldv_oo/hqdefault.jpg",
  alt: "우기 - 우기 (YUQI) - 'Bonnie & Clyde' Official Music Video (2021-05-20)",
  title: "우기 (YUQI) - 'Bonnie & Clyde' Official Music Video (2021-05-20)"
},
{
  link: "https://www.youtube.com/watch?v=wxDHQT0iBKM",
  category: "MV-SPECIAL CLIP",
  member: "우기",
  year: "2021",
  thumbnail: "https://i.ytimg.com/vi/wxDHQT0iBKM/hqdefault.jpg",
  alt: "우기 - 우기 (YUQI) - 'Giant' Official Music Video (2021-05-13)",
  title: "우기 (YUQI) - 'Giant' Official Music Video (2021-05-13)"
},
{
  link: "https://www.youtube.com/watch?v=P62kgQCuxGE",
  category: "MV-SPECIAL CLIP",
  member: "아이들",
  year: "2021",
  thumbnail: "https://i.ytimg.com/vi/P62kgQCuxGE/hqdefault.jpg",
  alt: "아이들 - (여자)아이들((G)I-DLE), Dimitri Vegas & Like Mike - 'HWAA (Dimitri Vegas & Like Mike Remix)' Official M/V (2021-02-05)",
  title: "(여자)아이들((G)I-DLE), Dimitri Vegas & Like Mike - 'HWAA (Dimitri Vegas & Like Mike Remix)' Official M/V (2021-02-05)"
},
{
  link: "https://www.youtube.com/watch?v=z3szNvgQxHo",
  category: "MV-SPECIAL CLIP",
  member: "아이들",
  year: "2021",
  thumbnail: "https://i.ytimg.com/vi/z3szNvgQxHo/hqdefault.jpg",
  alt: "아이들 - (여자)아이들((G)I-DLE) - '화(火花)(HWAA)' Official Music Video (2021-01-11)",
  title: "(여자)아이들((G)I-DLE) - '화(火花)(HWAA)' Official Music Video (2021-01-11)"
},
{
  link: "https://www.youtube.com/watch?v=eiHCe0kGy3M",
  category: "MV-SPECIAL CLIP",
  member: "민니",
  year: "2020",
  thumbnail: "https://i.ytimg.com/vi/eiHCe0kGy3M/hqdefault.jpg",
  alt: "민니 - 민니 of (여자)아이들 (MINNIE of (G)I-DLE) - 'Why Do You Love Me (Acoustic)' / Charlotte Lawrence (Cover) (2020-11-12)",
  title: "민니 of (여자)아이들 (MINNIE of (G)I-DLE) - 'Why Do You Love Me (Acoustic)' / Charlotte Lawrence (Cover) (2020-11-12)"
},
{
  link: "https://www.youtube.com/watch?v=Q8mioC2TpLg",
  category: "MV-SPECIAL CLIP",
  member: "우기",
  year: "2020",
  thumbnail: "https://i.ytimg.com/vi/Q8mioC2TpLg/hqdefault.jpg",
  alt: "우기 - 우기 of (여자)아이들 (YUQI of (G)I-DLE) - 'Shallow' / Lady Gaga, Bradley Cooper (Cover) (2020-09-22)",
  title: "우기 of (여자)아이들 (YUQI of (G)I-DLE) - 'Shallow' / Lady Gaga, Bradley Cooper (Cover) (2020-09-22)"
},
{
  link: "https://www.youtube.com/watch?v=RkID8_gnTxw",
  category: "MV-SPECIAL CLIP",
  member: "아이들",
  year: "2020",
  thumbnail: "https://i.ytimg.com/vi/RkID8_gnTxw/hqdefault.jpg",
  alt: "아이들 - K/DA - THE BADDEST ft. (G)I-DLE, Bea Miller, Wolftyla (Official Lyric Video) | League of Legends (2020-08-27)",
  title: "K/DA - THE BADDEST ft. (G)I-DLE, Bea Miller, Wolftyla (Official Lyric Video) | League of Legends (2020-08-27)"
},
{
  link: "https://www.youtube.com/watch?v=HPQ5mqovXHo",
  category: "MV-SPECIAL CLIP",
  member: "아이들",
  year: "2020",
  thumbnail: "https://i.ytimg.com/vi/HPQ5mqovXHo/hqdefault.jpg",
  alt: "아이들 - (여자)아이들((G)I-DLE) - '덤디덤디 (DUMDi DUMDi)' Official Music Video (2020-08-03)",
  title: "(여자)아이들((G)I-DLE) - '덤디덤디 (DUMDi DUMDi)' Official Music Video (2020-08-03)"
},
{
  link: "https://www.youtube.com/watch?v=4VmLuWDkHYQ",
  category: "MV-SPECIAL CLIP",
  member: "소연",
  year: "2020",
  thumbnail: "https://i.ytimg.com/vi/4VmLuWDkHYQ/hqdefault.jpg",
  alt: "소연 - HYO 효연 ‘DESSERT (Feat. Loopy, SOYEON ((G)I-DLE))’ MV (2020-07-22)",
  title: "HYO 효연 ‘DESSERT (Feat. Loopy, SOYEON ((G)I-DLE))’ MV (2020-07-22)"
},
{
  link: "https://www.youtube.com/watch?v=ZlKoeJ3xlx4",
  category: "MV-SPECIAL CLIP",
  member: "아이들",
  year: "2020",
  thumbnail: "https://i.ytimg.com/vi/ZlKoeJ3xlx4/hqdefault.jpg",
  alt: "아이들 - (여자)아이들((G)I-DLE) - 'i'M THE TREND' Special Clip (2020-07-07)",
  title: "(여자)아이들((G)I-DLE) - 'i'M THE TREND' Special Clip (2020-07-07)"
},
{
  link: "https://www.youtube.com/watch?v=om3n2ni8luE",
  category: "MV-SPECIAL CLIP",
  member: "아이들",
  year: "2020",
  thumbnail: "https://i.ytimg.com/vi/om3n2ni8luE/hqdefault.jpg",
  alt: "아이들 - (여자)아이들((G)I-DLE) - 'Oh my god' Official Music Video (2020-04-06)",
  title: "(여자)아이들((G)I-DLE) - 'Oh my god' Official Music Video (2020-04-06)"
},
{
  link: "https://www.youtube.com/watch?v=6oanIo_2Z4Q",
  category: "MV-SPECIAL CLIP",
  member: "아이들",
  year: "2019",
  thumbnail: "https://i.ytimg.com/vi/6oanIo_2Z4Q/hqdefault.jpg",
  alt: "아이들 - (여자)아이들((G)I-DLE) - 'LION' Official Music Video (2019-11-03)",
  title: "(여자)아이들((G)I-DLE) - 'LION' Official Music Video (2019-11-03)"
},
{
  link: "https://www.youtube.com/watch?v=-kVhMnKuk_A",
  category: "MV-SPECIAL CLIP",
  member: "민니",
  year: "2019",
  thumbnail: "https://i.ytimg.com/vi/-kVhMnKuk_A/hqdefault.jpg",
  alt: "민니 - WENGIE ft. MINNIE of (G)I-DLE 'EMPIRE' (OFFICIAL MV) (2019-10-18)",
  title: "WENGIE ft. MINNIE of (G)I-DLE 'EMPIRE' (OFFICIAL MV) (2019-10-18)"
},
{
  link: "https://www.youtube.com/watch?v=ypNJMDlJvY4",
  category: "MV-SPECIAL CLIP",
  member: "아이들",
  year: "2019",
  thumbnail: "https://i.ytimg.com/vi/ypNJMDlJvY4/hqdefault.jpg",
  alt: "아이들 - (G)I-DLE - 「LATATA」(Japanese ver.) MUSIC VIDEO (2019-07-31)",
  title: "(G)I-DLE - 「LATATA」(Japanese ver.) MUSIC VIDEO (2019-07-31)"
},
{
  link: "https://www.youtube.com/watch?v=I66oFXdf0KU",
  category: "MV-SPECIAL CLIP",
  member: "아이들",
  year: "2019",
  thumbnail: "https://i.ytimg.com/vi/I66oFXdf0KU/hqdefault.jpg",
  alt: "아이들 - (여자)아이들((G)I-DLE) - 'Uh-Oh' Official Music Video (2019-06-26)",
  title: "(여자)아이들((G)I-DLE) - 'Uh-Oh' Official Music Video (2019-06-26)"
},
{
  link: "https://www.youtube.com/watch?v=0Hk8qGSoHnA",
  category: "MV-SPECIAL CLIP",
  member: "소연",
  year: "2019",
  thumbnail: "https://i.ytimg.com/vi/0Hk8qGSoHnA/hqdefault.jpg",
  alt: "소연 - 소연(SOYEON) - '애정결핍(The loveless)' Drawing Video (2019-06-08)",
  title: "소연(SOYEON) - '애정결핍(The loveless)' Drawing Video (2019-06-08)"
},
{
  link: "https://www.youtube.com/watch?v=AkcCCaDUyaU",
  category: "MV-SPECIAL CLIP",
  member: "아이들",
  year: "2019",
  thumbnail: "https://i.ytimg.com/vi/AkcCCaDUyaU/hqdefault.jpg",
  alt: "아이들 - [그녀의 사생활 OST Part 1] (여자)아이들 ((G)I-DLE) - Help Me MV (2019-04-11)",
  title: "[그녀의 사생활 OST Part 1] (여자)아이들 ((G)I-DLE) - Help Me MV (2019-04-11)"
},
{
  link: "https://www.youtube.com/watch?v=4gxMgJSSVaQ",
  category: "MV-SPECIAL CLIP",
  member: "민니",
  year: "2019",
  thumbnail: "https://i.ytimg.com/vi/4gxMgJSSVaQ/hqdefault.jpg",
  alt: "민니 - 민니 of (여자)아이들 (MINNIE of (G)I-DLE) - 'Gravity / Sara Bareilles' (Cover) (2019-03-13)",
  title: "민니 of (여자)아이들 (MINNIE of (G)I-DLE) - 'Gravity / Sara Bareilles' (Cover) (2019-03-13)"
},
{
  link: "https://www.youtube.com/watch?v=_E5JtAcc3cY",
  category: "MV-SPECIAL CLIP",
  member: "소연",
  year: "2019",
  thumbnail: "https://i.ytimg.com/vi/_E5JtAcc3cY/hqdefault.jpg",
  alt: "소연 - KEY 키 'I Wanna Be (Feat. 소연 of (여자)아이들)' MV (2019-03-04)",
  title: "KEY 키 'I Wanna Be (Feat. 소연 of (여자)아이들)' MV (2019-03-04)"
},
{
  link: "https://www.youtube.com/watch?v=2cevbhEqQF4",
  category: "MV-SPECIAL CLIP",
  member: "아이들",
  year: "2019",
  thumbnail: "https://i.ytimg.com/vi/2cevbhEqQF4/hqdefault.jpg",
  alt: "아이들 - (여자)아이들((G)I-DLE) - 'Senorita' Official Music Video (2019-02-26)",
  title: "(여자)아이들((G)I-DLE) - 'Senorita' Official Music Video (2019-02-26)"
},
{
  link: "https://www.youtube.com/watch?v=08ATpBqlAIk",
  category: "MV-SPECIAL CLIP",
  member: "아이들",
  year: "2019",
  thumbnail: "https://i.ytimg.com/vi/08ATpBqlAIk/hqdefault.jpg",
  alt: "아이들 - [MV] (G)I-DLE((여자)아이들) _ Blow Your Mind (2019-02-19)",
  title: "[MV] (G)I-DLE((여자)아이들) _ Blow Your Mind (2019-02-19)"
},
{
  link: "https://www.youtube.com/watch?v=UOxkGD8qRB4",
  category: "MV-SPECIAL CLIP",
  member: "아이들",
  year: "2018",
  thumbnail: "https://i.ytimg.com/vi/UOxkGD8qRB4/hqdefault.jpg",
  alt: "아이들 - K/DA - POP/STARS (ft. Madison Beer, (G)I-DLE, Jaira Burns) | Music Video - League of Legends (2018-11-03)",
  title: "K/DA - POP/STARS (ft. Madison Beer, (G)I-DLE, Jaira Burns) | Music Video - League of Legends (2018-11-03)"
},
{
  link: "https://www.youtube.com/watch?v=KR5CtMLuiqQ",
  category: "MV-SPECIAL CLIP",
  member: "소연",
  year: "2018",
  thumbnail: "https://i.ytimg.com/vi/KR5CtMLuiqQ/hqdefault.jpg",
  alt: "소연 - [STATION X 0] 슬기(SEULGI)X신비(여자친구)X청하X소연 'Wow Thing' MV (2018-09-28)",
  title: "[STATION X 0] 슬기(SEULGI)X신비(여자친구)X청하X소연 'Wow Thing' MV (2018-09-28)"
},
{
  link: "https://www.youtube.com/watch?v=fAJi2ZAryNY",
  category: "MV-SPECIAL CLIP",
  member: "아이들",
  year: "2018",
  thumbnail: "https://i.ytimg.com/vi/fAJi2ZAryNY/hqdefault.jpg",
  alt: "아이들 - (여자)아이들((G)I-DLE) - 'APESXXT / The Carters (Choreography in New York)' (2018-08-16)",
  title: "(여자)아이들((G)I-DLE) - 'APESXXT / The Carters (Choreography in New York)' (2018-08-16)"
},
{
  link: "https://www.youtube.com/watch?v=ERK1jzLEDm0",
  category: "MV-SPECIAL CLIP",
  member: "아이들",
  year: "2018",
  thumbnail: "https://i.ytimg.com/vi/ERK1jzLEDm0/hqdefault.jpg",
  alt: "아이들 - (여자)아이들((G)I-DLE) - 'FAKE LOVE / BTS (Dance Cover in New York)' (2018-08-16)",
  title: "(여자)아이들((G)I-DLE) - 'FAKE LOVE / BTS (Dance Cover in New York)' (2018-08-16)"
},
{
  link: "https://www.youtube.com/watch?v=OKNXn2qCEws",
  category: "MV-SPECIAL CLIP",
  member: "아이들",
  year: "2018",
  thumbnail: "https://i.ytimg.com/vi/OKNXn2qCEws/hqdefault.jpg",
  alt: "아이들 - (여자)아이들((G)I-DLE) - '한(一)(HANN(Alone))' Official Music Video (2018-08-14)",
  title: "(여자)아이들((G)I-DLE) - '한(一)(HANN(Alone))' Official Music Video (2018-08-14)"
},
{
  link: "https://www.youtube.com/watch?v=ztWnrkpKPk8",
  category: "MV-SPECIAL CLIP",
  member: "아이들",
  year: "2018",
  thumbnail: "https://i.ytimg.com/vi/ztWnrkpKPk8/hqdefault.jpg",
  alt: "아이들 - (여자)아이들((G)I-DLE) - FLASHMOB in New York : '#LATATA' (2018-08-11)",
  title: "(여자)아이들((G)I-DLE) - FLASHMOB in New York : '#LATATA' (2018-08-11)"
},
{
  link: "https://www.youtube.com/watch?v=p4RIhcY7V3c",
  category: "MV-SPECIAL CLIP",
  member: "아이들",
  year: "2018",
  thumbnail: "https://i.ytimg.com/vi/p4RIhcY7V3c/hqdefault.jpg",
  alt: "아이들 - (여자)아이들((G)I-DLE) - 'LATATA' Official Music Video (2018-05-02)",
  title: "(여자)아이들((G)I-DLE) - 'LATATA' Official Music Video (2018-05-02)"
},
{
  link: "https://www.youtube.com/watch?v=b01dBTBzyz0",
  category: "MV-SPECIAL CLIP",
  member: "소연",
  year: "2018",
  thumbnail: "https://i.ytimg.com/vi/b01dBTBzyz0/hqdefault.jpg",
  alt: "소연 - [MV] JEON SOYEON (전소연) _  Idle song (아이들 쏭) (2018-02-28)",
  title: "[MV] JEON SOYEON (전소연) _  Idle song (아이들 쏭) (2018-02-28)"
},
{
  link: "https://www.youtube.com/watch?v=2CdgxK7zmO0",
  category: "MV-SPECIAL CLIP",
  member: "소연",
  year: "2018",
  thumbnail: "https://i.ytimg.com/vi/2CdgxK7zmO0/hqdefault.jpg",
  alt: "소연 - 전소연(JEON SOYEON) - '아이들 쏭 (Idle song)' Official Music Video (2018-02-28)",
  title: "전소연(JEON SOYEON) - '아이들 쏭 (Idle song)' Official Music Video (2018-02-28)"
},
{
  link: "https://www.youtube.com/watch?v=yXQFSJV2wtQ",
  category: "MV-SPECIAL CLIP",
  member: "아이들",
  year: "2018",
  thumbnail: "https://i.ytimg.com/vi/yXQFSJV2wtQ/hqdefault.jpg",
  alt: "아이들 - 진호(JINHO) - MAGAZINE HO #13 'Finesse (Remix) / Bruno Mars' (2018-01-31)",
  title: "진호(JINHO) - MAGAZINE HO #13 'Finesse (Remix) / Bruno Mars' (2018-01-31)"
},
{
  link: "https://www.youtube.com/watch?v=azY7skjwg6Y",
  category: "MV-SPECIAL CLIP",
  member: "소연",
  year: "2017",
  thumbnail: "https://i.ytimg.com/vi/azY7skjwg6Y/hqdefault.jpg",
  alt: "소연 - 전소연(JEON SOYEON) - 'Jelly' Official Music Video (2017-11-05)",
  title: "전소연(JEON SOYEON) - 'Jelly' Official Music Video (2017-11-05)"
},
// 🔽 새로 불러온 50개 항목
{
  link: "https://www.youtube.com/watch?v=Rf0ajz4PrEg",
  category: "RECORDING BEHIND",
  member: "아이들",
  year: "2025",
  thumbnail: "https://i.ytimg.com/vi/Rf0ajz4PrEg/hqdefault.jpg",
  alt: "아이들 - i-dle (아이들) 'Girlfriend' Recording BehindㅣSUB (2025-06-03)",
  title: "i-dle (아이들) 'Girlfriend' Recording BehindㅣSUB (2025-06-03)"
},
{
  link: "https://www.youtube.com/watch?v=KceEp8y5HC4",
  category: "RECORDING BEHIND",
  member: "아이들",
  year: "2025",
  thumbnail: "https://i.ytimg.com/vi/KceEp8y5HC4/hqdefault.jpg",
  alt: "아이들 - i-dle (아이들) 'Girlfriend' Choreography Video (2025-06-02)",
  title: "i-dle (아이들) 'Girlfriend' Choreography Video (2025-06-02)"
},
{
  link: "https://www.youtube.com/watch?v=Ly5SxYH5OhI",
  category: "RECORDING BEHIND",
  member: "아이들",
  year: "2025",
  thumbnail: "https://i.ytimg.com/vi/Ly5SxYH5OhI/hqdefault.jpg",
  alt: "아이들 - i-dle (아이들) 'Good Thing' Recording BehindㅣSUB (2025-05-27)",
  title: "i-dle (아이들) 'Good Thing' Recording BehindㅣSUB (2025-05-27)"
},
{
  link: "https://www.youtube.com/watch?v=5MrJBrR_sfo",
  category: "RECORDING BEHIND",
  member: "아이들",
  year: "2025",
  thumbnail: "https://i.ytimg.com/vi/5MrJBrR_sfo/hqdefault.jpg",
  alt: "아이들 - i-dle (아이들) 'Good Thing' Choreography Practice Video (2025-05-26)",
  title: "i-dle (아이들) 'Good Thing' Choreography Practice Video (2025-05-26)"
},
{
  link: "https://www.youtube.com/watch?v=eOFfOLZOp0M",
  category: "RECORDING BEHIND",
  member: "민니",
  year: "2025",
  thumbnail: "https://i.ytimg.com/vi/eOFfOLZOp0M/hqdefault.jpg",
  alt: "민니 - [MaumC Record] 민니 ((여자)아이들) | 숨 | Recording Behind | 녹음 비하인드 (2025-04-26)",
  title: "[MaumC Record] 민니 ((여자)아이들) | 숨 | Recording Behind | 녹음 비하인드 (2025-04-26)"
},
{
  link: "https://www.youtube.com/watch?v=i2wG04YoEOg",
  category: "RECORDING BEHIND",
  member: "민니",
  year: "2025",
  thumbnail: "https://i.ytimg.com/vi/i2wG04YoEOg/hqdefault.jpg",
  alt: "민니 - [언젠가는 슬기로울 전공의생활 (Resident Playbook) OST Part 5] 민니 (MINNIE) - 숨 (Breath) MV Teaser (2025-04-26)",
  title: "[언젠가는 슬기로울 전공의생활 (Resident Playbook) OST Part 5] 민니 (MINNIE) - 숨 (Breath) MV Teaser (2025-04-26)"
},
{
  link: "https://www.youtube.com/watch?v=HxROxHdBQ2g",
  category: "RECORDING BEHIND",
  member: "미연",
  year: "2025",
  thumbnail: "https://i.ytimg.com/vi/HxROxHdBQ2g/hqdefault.jpg",
  alt: "미연 - 미연(MIYEON), Jike Junyi - 'Glow Up' SPECIAL CLIP (2025-04-17)",
  title: "미연(MIYEON), Jike Junyi - 'Glow Up' SPECIAL CLIP (2025-04-17)"
},
{
  link: "https://www.youtube.com/watch?v=pdUV1R2ZObs",
  category: "RECORDING BEHIND",
  member: "아이들",
  year: "2025",
  thumbnail: "https://i.ytimg.com/vi/pdUV1R2ZObs/hqdefault.jpg",
  alt: "아이들 - [나 혼자만 레벨업:ARISE] (여자)아이들 콜라보 기념 영상 편지 (2025-04-12)",
  title: "[나 혼자만 레벨업:ARISE] (여자)아이들 콜라보 기념 영상 편지 (2025-04-12)"
},
{
  link: "https://www.youtube.com/watch?v=OAISVzre8QQ",
  category: "RECORDING BEHIND",
  member: "민니",
  year: "2025",
  thumbnail: "https://i.ytimg.com/vi/OAISVzre8QQ/hqdefault.jpg",
  alt: "민니 - [MV] MINNIE(민니) ((G)I-DLE ((여자)아이들)) - Draw the Moon(달이 그려지다) (feat. MIYAVI) (2025-03-21)",
  title: "[MV] MINNIE(민니) ((G)I-DLE ((여자)아이들)) - Draw the Moon(달이 그려지다) (feat. MIYAVI) (2025-03-21)"
},
{
  link: "https://www.youtube.com/watch?v=yvWNj1E872g",
  category: "RECORDING BEHIND",
  member: "민니",
  year: "2025",
  thumbnail: "https://i.ytimg.com/vi/yvWNj1E872g/hqdefault.jpg",
  alt: "민니 - 민니(MINNIE) - 1st Mini Album [HER] 수록곡 Recording BehindㅣSUB (2025-02-17)",
  title: "민니(MINNIE) - 1st Mini Album [HER] 수록곡 Recording BehindㅣSUB (2025-02-17)"
},
{
  link: "https://www.youtube.com/watch?v=8V2SpdoRxTk",
  category: "RECORDING BEHIND",
  member: "미연",
  year: "2025",
  thumbnail: "https://i.ytimg.com/vi/8V2SpdoRxTk/hqdefault.jpg",
  alt: "미연 - [MV] MIYEON ((G)I-DLE))(미연 ((여자)아이들)) _ Red Moon(적월) (2025-02-12)",
  title: "[MV] MIYEON ((G)I-DLE))(미연 ((여자)아이들)) _ Red Moon(적월) (2025-02-12)"
},
{
  link: "https://www.youtube.com/watch?v=HKzKcnEx9Bk",
  category: "RECORDING BEHIND",
  member: "민니",
  year: "2025",
  thumbnail: "https://i.ytimg.com/vi/HKzKcnEx9Bk/hqdefault.jpg",
  alt: "민니 - 민니(MINNIE) - 'HER' Recording BehindㅣSUB (2025-02-01)",
  title: "민니(MINNIE) - 'HER' Recording BehindㅣSUB (2025-02-01)"
},
{
  link: "https://www.youtube.com/watch?v=qDg3uR7exAU",
  category: "RECORDING BEHIND",
  member: "민니",
  year: "2025",
  thumbnail: "https://i.ytimg.com/vi/qDg3uR7exAU/hqdefault.jpg",
  alt: "민니 - 민니(MINNIE) - 'HER' Choreography Practice Video (2025-01-27)",
  title: "민니(MINNIE) - 'HER' Choreography Practice Video (2025-01-27)"
},
{
  link: "https://www.youtube.com/watch?v=3Ccu3CjsPZo",
  category: "RECORDING BEHIND",
  member: "미연",
  year: "2024",
  thumbnail: "https://i.ytimg.com/vi/3Ccu3CjsPZo/hqdefault.jpg",
  alt: "미연 - [making] 미연 ((여자)아이들) - 기도 (2024-11-13)",
  title: "[making] 미연 ((여자)아이들) - 기도 (2024-11-13)"
},
{
  link: "https://www.youtube.com/watch?v=8u9879OGO14",
  category: "RECORDING BEHIND",
  member: "아이들",
  year: "2024",
  thumbnail: "https://i.ytimg.com/vi/8u9879OGO14/hqdefault.jpg",
  alt: "아이들 - (여자)아이들((G)I-DLE) - 'Neverland' Recording BehindㅣSUB (2024-08-06)",
  title: "(여자)아이들((G)I-DLE) - 'Neverland' Recording BehindㅣSUB (2024-08-06)"
},
{
  link: "https://www.youtube.com/watch?v=dTAvYoKt6M4",
  category: "RECORDING BEHIND",
  member: "아이들",
  year: "2024",
  thumbnail: "https://i.ytimg.com/vi/dTAvYoKt6M4/hqdefault.jpg",
  alt: "아이들 - (여자)아이들((G)I-DLE) - 'Bloom' Recording Behind (ENG/CHN) (2024-08-02)",
  title: "(여자)아이들((G)I-DLE) - 'Bloom' Recording Behind (ENG/CHN) (2024-08-02)"
},
{
  link: "https://www.youtube.com/watch?v=ioWv9shT4lU",
  category: "RECORDING BEHIND",
  member: "아이들",
  year: "2024",
  thumbnail: "https://i.ytimg.com/vi/ioWv9shT4lU/hqdefault.jpg",
  alt: "아이들 - (여자)아이들((G)I-DLE) - '클락션 (Klaxon)' Recording Behind (ENG/CHN) (2024-07-17)",
  title: "(여자)아이들((G)I-DLE) - '클락션 (Klaxon)' Recording Behind (ENG/CHN) (2024-07-17)"
},
{
  link: "https://www.youtube.com/watch?v=hLntT4a_O58",
  category: "RECORDING BEHIND",
  member: "아이들",
  year: "2024",
  thumbnail: "https://i.ytimg.com/vi/hLntT4a_O58/hqdefault.jpg",
  alt: "아이들 - (여자)아이들((G)I-DLE) - '클락션 (Klaxon)' Choreography Practice Video (2024-07-13)",
  title: "(여자)아이들((G)I-DLE) - '클락션 (Klaxon)' Choreography Practice Video (2024-07-13)"
},
{
  link: "https://www.youtube.com/watch?v=n2Q4qN7kjGM",
  category: "RECORDING BEHIND",
  member: "우기,민니",
  year: "2024",
  thumbnail: "https://i.ytimg.com/vi/n2Q4qN7kjGM/hqdefault.jpg",
  alt: "우기,민니 - 우기(YUQI) - 'Everytime (With MINNIE ((G)I-DLE))' Recording Behind (ENG/CHN) (2024-05-17)",
  title: "우기(YUQI) - 'Everytime (With MINNIE ((G)I-DLE))' Recording Behind (ENG/CHN) (2024-05-17)"
},
{
  link: "https://www.youtube.com/watch?v=nYUetCEWXVE",
  category: "RECORDING BEHIND",
  member: "우기",
  year: "2024",
  thumbnail: "https://i.ytimg.com/vi/nYUetCEWXVE/hqdefault.jpg",
  alt: "우기 - 우기(YUQI) - 'FREAK' Recording Behind (ENG/CHN) (2024-05-01)",
  title: "우기(YUQI) - 'FREAK' Recording Behind (ENG/CHN) (2024-05-01)"
},
{
  link: "https://www.youtube.com/watch?v=dyFGwGFerAc",
  category: "RECORDING BEHIND",
  member: "우기",
  year: "2024",
  thumbnail: "https://i.ytimg.com/vi/dyFGwGFerAc/hqdefault.jpg",
  alt: "우기 - 우기(YUQI) - 'FREAK' Choreography Practice Video (2024-04-29)",
  title: "우기(YUQI) - 'FREAK' Choreography Practice Video (2024-04-29)"
},
{
  link: "https://www.youtube.com/watch?v=wFikxHi9WO0",
  category: "RECORDING BEHIND",
  member: "미연",
  year: "2024",
  thumbnail: "https://i.ytimg.com/vi/wFikxHi9WO0/hqdefault.jpg",
  alt: "미연 - [연애남매] 미연 ((여자)아이들) - You and I (연애남매 OST Part.2) | Making🎙️ | My Sibling's Romance OST | GOGOSING (2024-03-22)",
  title: "[연애남매] 미연 ((여자)아이들) - You and I (연애남매 OST Part.2) | Making🎙️ | My Sibling's Romance OST | GOGOSING (2024-03-22)"
},
{
  link: "https://www.youtube.com/watch?v=u_rl0JqSGVY",
  category: "RECORDING BEHIND",
  member: "아이들",
  year: "2024",
  thumbnail: "https://i.ytimg.com/vi/u_rl0JqSGVY/hqdefault.jpg",
  alt: "아이들 - (여자)아이들((G)I-DLE) - 'Super Lady' Recording Behind (ENG/CHN) (2024-02-11)",
  title: "(여자)아이들((G)I-DLE) - 'Super Lady' Recording Behind (ENG/CHN) (2024-02-11)"
},
{
  link: "https://www.youtube.com/watch?v=J3TANTDWmTQ",
  category: "RECORDING BEHIND",
  member: "아이들",
  year: "2024",
  thumbnail: "https://i.ytimg.com/vi/J3TANTDWmTQ/hqdefault.jpg",
  alt: "아이들 - (여자)아이들((G)I-DLE) - 'Super Lady' Dance Practice Video (With Kirsten) Teaser (2024-01-29)",
  title: "(여자)아이들((G)I-DLE) - 'Super Lady' Dance Practice Video (With Kirsten) Teaser (2024-01-29)"
},
{
  link: "https://www.youtube.com/watch?v=C5VwU4rdeHU",
  category: "RECORDING BEHIND",
  member: "민니",
  year: "2023",
  thumbnail: "https://i.ytimg.com/vi/C5VwU4rdeHU/hqdefault.jpg",
  alt: "민니 - [오늘도 사랑스럽개 OST] 민니((여자)아이들) MINNIE((G)I-DLE) '타이밍(Timing)' Special CLIP : 오늘도 사랑스럽개 OST Part. 2 (2023-11-15)",
  title: "[오늘도 사랑스럽개 OST] 민니((여자)아이들) MINNIE((G)I-DLE) '타이밍(Timing)' Special CLIP : 오늘도 사랑스럽개 OST Part. 2 (2023-11-15)"
},
{
  link: "https://www.youtube.com/watch?v=CdSWl1tU_pk",
  category: "RECORDING BEHIND",
  member: "미연",
  year: "2023",
  thumbnail: "https://i.ytimg.com/vi/CdSWl1tU_pk/hqdefault.jpg",
  alt: "미연 - [MV] MIYEON(미연 ((여자)아이들)) - The Painted On The Moonlight(달빛에 그려지는) (2023-08-21)",
  title: "[MV] MIYEON(미연 ((여자)아이들)) - The Painted On The Moonlight(달빛에 그려지는) (2023-08-21)"
},
{
  link: "https://www.youtube.com/watch?v=O2sNRgiTidc",
  category: "RECORDING BEHIND",
  member: "미연",
  year: "2023",
  thumbnail: "https://i.ytimg.com/vi/O2sNRgiTidc/hqdefault.jpg",
  alt: "미연 - [연인] OST, 미연((여자)아이들) '달빛에 그려지는' Full Ver., MBC 230819 방송 (2023-08-21)",
  title: "[연인] OST, 미연((여자)아이들) '달빛에 그려지는' Full Ver., MBC 230819 방송 (2023-08-21)"
},
{
  link: "https://www.youtube.com/watch?v=_5EOmPP9qwM",
  category: "RECORDING BEHIND",
  member: "아이들",
  year: "2023",
  thumbnail: "https://i.ytimg.com/vi/_5EOmPP9qwM/hqdefault.jpg",
  alt: "아이들 - (여자)아이들((G)I-DLE) - 'Paradise' & '어린 어른' Recording Behind (ENG/CHN) (2023-06-16)",
  title: "(여자)아이들((G)I-DLE) - 'Paradise' & '어린 어른' Recording Behind (ENG/CHN) (2023-06-16)"
},
{
  link: "https://www.youtube.com/watch?v=wg7AL7inFTE",
  category: "RECORDING BEHIND",
  member: "아이들",
  year: "2023",
  thumbnail: "https://i.ytimg.com/vi/wg7AL7inFTE/hqdefault.jpg",
  alt: "아이들 - (여자)아이들((G)I-DLE) - '퀸카 (Queencard)' Recording Behind (ENG/CHN) (2023-05-26)",
  title: "(여자)아이들((G)I-DLE) - '퀸카 (Queencard)' Recording Behind (ENG/CHN) (2023-05-26)"
},
{
  link: "https://www.youtube.com/watch?v=pKCaXYYwGjw",
  category: "RECORDING BEHIND",
  member: "아이들",
  year: "2023",
  thumbnail: "https://i.ytimg.com/vi/pKCaXYYwGjw/hqdefault.jpg",
  alt: "아이들 - (여자)아이들((G)I-DLE) - '퀸카 (Queencard)' Choreography Practice Video (2023-05-21)",
  title: "(여자)아이들((G)I-DLE) - '퀸카 (Queencard)' Choreography Practice Video (2023-05-21)"
},
{
  link: "https://www.youtube.com/watch?v=17I_MiCA9HQ",
  category: "RECORDING BEHIND",
  member: "민니",
  year: "2023",
  thumbnail: "https://i.ytimg.com/vi/17I_MiCA9HQ/hqdefault.jpg",
  alt: "민니 - [Behind The Scene] 민니 ((여자)아이들) 'Expectations' 녹음 현장 (2023-03-20)",
  title: "[Behind The Scene] 민니 ((여자)아이들) 'Expectations' 녹음 현장 (2023-03-20)"
},
{
  link: "https://www.youtube.com/watch?v=YlEahTLcL_Y",
  category: "RECORDING BEHIND",
  member: "우기",
  year: "2023",
  thumbnail: "https://i.ytimg.com/vi/YlEahTLcL_Y/hqdefault.jpg",
  alt: "우기 - (여자)아이들 (G)I-DLE 우기(YUQI) X 하이퍼타임(HypeerTime) 'Not Cinderella' Live Clip - 신데렐라는 내가 아니었다 OST (2023-02-23)",
  title: "(여자)아이들 (G)I-DLE 우기(YUQI) X 하이퍼타임(HypeerTime) 'Not Cinderella' Live Clip - 신데렐라는 내가 아니었다 OST (2023-02-23)"
},
{
  link: "https://www.youtube.com/watch?v=CqBytxSQhHo",
  category: "RECORDING BEHIND",
  member: "우기",
  year: "2023",
  thumbnail: "https://i.ytimg.com/vi/CqBytxSQhHo/hqdefault.jpg",
  alt: "우기 - 메이킹 MV | 우기 (YUQI (여자)아이들), 하이퍼타임 (HypeerTime) - Not Cinderella | 신데렐라는 내가 아니었다 OST Part 1 (2023-02-23)",
  title: "메이킹 MV | 우기 (YUQI (여자)아이들), 하이퍼타임 (HypeerTime) - Not Cinderella | 신데렐라는 내가 아니었다 OST Part 1 (2023-02-23)"
},
{
  link: "https://www.youtube.com/watch?v=FaSYRHyd-2E",
  category: "RECORDING BEHIND",
  member: "미연",
  year: "2023",
  thumbnail: "https://i.ytimg.com/vi/FaSYRHyd-2E/hqdefault.jpg",
  alt: "미연 - [에버소울] 재클린 OST 📀 「무덤덤(Numb)」 song by 미연 (2023-02-01)",
  title: "[에버소울] 재클린 OST 📀 「무덤덤(Numb)」 song by 미연 (2023-02-01)"
},
{
  link: "https://www.youtube.com/watch?v=pPLX4Y37dD0",
  category: "RECORDING BEHIND",
  member: "민니",
  year: "2023",
  thumbnail: "https://i.ytimg.com/vi/pPLX4Y37dD0/hqdefault.jpg",
  alt: "민니 - 메이킹 MV | 민니 ((여자)아이들) MINNIE ((G)I-DLE) - In The Novel | 모든 게 착각이었다 OST Part 2 (2023-01-26)",
  title: "메이킹 MV | 민니 ((여자)아이들) MINNIE ((G)I-DLE) - In The Novel | 모든 게 착각이었다 OST Part 2 (2023-01-26)"
},
{
  link: "https://www.youtube.com/watch?v=NPrqmhdrjjI",
  category: "RECORDING BEHIND",
  member: "민니",
  year: "2023",
  thumbnail: "https://i.ytimg.com/vi/NPrqmhdrjjI/hqdefault.jpg",
  alt: "민니 - (여자)아이들 민니(MINNIE) 'In The Novel' Live Clip - 모든 게 착각이었다 OST (2023-01-26)",
  title: "(여자)아이들 민니(MINNIE) 'In The Novel' Live Clip - 모든 게 착각이었다 OST (2023-01-26)"
},
{
  link: "https://www.youtube.com/watch?v=kfadkfcKUrU",
  category: "RECORDING BEHIND",
  member: "민니",
  year: "2023",
  thumbnail: "https://i.ytimg.com/vi/kfadkfcKUrU/hqdefault.jpg",
  alt: "민니 - (여자)아이들 민니(MINNIE) 'In The Novel' 녹음현장 인터뷰 - 모든 게 착각이었다 OST (2023-01-26)",
  title: "(여자)아이들 민니(MINNIE) 'In The Novel' 녹음현장 인터뷰 - 모든 게 착각이었다 OST (2023-01-26)"
},
{
  link: "https://www.youtube.com/watch?v=F8p3RR37naI",
  category: "RECORDING BEHIND",
  member: "아이들",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/F8p3RR37naI/hqdefault.jpg",
  alt: "아이들 - (여자)아이들((G)I-DLE) - 'Nxde' Recording Behind (ENG/CHN) (2022-12-23)",
  title: "(여자)아이들((G)I-DLE) - 'Nxde' Recording Behind (ENG/CHN) (2022-12-23)"
},
{
  link: "https://www.youtube.com/watch?v=R9UsmrVEWYY",
  category: "RECORDING BEHIND",
  member: "아이들",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/R9UsmrVEWYY/hqdefault.jpg",
  alt: "아이들 - (여자)아이들((G)I-DLE) - 'Nxde' (Choreography Practice Video) (2022-10-23)",
  title: "(여자)아이들((G)I-DLE) - 'Nxde' (Choreography Practice Video) (2022-10-23)"
},
{
  link: "https://www.youtube.com/watch?v=xBdy4pG6pK4",
  category: "RECORDING BEHIND",
  member: "아이들",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/xBdy4pG6pK4/hqdefault.jpg",
  alt: "아이들 - 귀여운 사람이 멋진 척 할 때 l 서든어택 (2022-07-28)",
  title: "귀여운 사람이 멋진 척 할 때 l 서든어택 (2022-07-28)"
},
{
  link: "https://www.youtube.com/watch?v=4zKHhA_HtKQ",
  category: "RECORDING BEHIND",
  member: "아이들",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/4zKHhA_HtKQ/hqdefault.jpg",
  alt: "아이들 - 헤이즈(Heize) - The 2nd Album [Undo] Album Making Film Ep.3 (2022-07-05)",
  title: "헤이즈(Heize) - The 2nd Album [Undo] Album Making Film Ep.3 (2022-07-05)"
},
{
  link: "https://www.youtube.com/watch?v=pXVD5lLQyq0",
  category: "RECORDING BEHIND",
  member: "민니",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/pXVD5lLQyq0/hqdefault.jpg",
  alt: "민니 - [INTERVIEW & MAKING] 민니 ((여자)아이들) - 너의 하루를 묻고 싶어 :: 링크: 먹고 사랑하라, 죽이게 OST Part.2 (2022-06-21)",
  title: "[INTERVIEW & MAKING] 민니 ((여자)아이들) - 너의 하루를 묻고 싶어 :: 링크: 먹고 사랑하라, 죽이게 OST Part.2 (2022-06-21)"
},
{
  link: "https://www.youtube.com/watch?v=Si5pQHRRH5w",
  category: "RECORDING BEHIND",
  member: "아이들",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/Si5pQHRRH5w/hqdefault.jpg",
  alt: "아이들 - (여자)아이들((G)I-DLE) - 'MY BAG' (Choreography Practice Video) (2022-03-28)",
  title: "(여자)아이들((G)I-DLE) - 'MY BAG' (Choreography Practice Video) (2022-03-28)"
},
{
  link: "https://www.youtube.com/watch?v=CKSQjJDQTaQ",
  category: "RECORDING BEHIND",
  member: "아이들",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/CKSQjJDQTaQ/hqdefault.jpg",
  alt: "아이들 - (여자)아이들((G)I-DLE) - 'TOMBOY' (Choreography Practice Video) (2022-03-24)",
  title: "(여자)아이들((G)I-DLE) - 'TOMBOY' (Choreography Practice Video) (2022-03-24)"
},
{
  link: "https://www.youtube.com/watch?v=zGTjopEZnmQ",
  category: "RECORDING BEHIND",
  member: "미연",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/zGTjopEZnmQ/hqdefault.jpg",
  alt: "미연 - [Blue Moon] Donghae Recording Log #3 with Miyeon from (G)-IDLE / 동해 녹음 비하인드 #3 with (여자)아이들 미연 (2022-01-29)",
  title: "[Blue Moon] Donghae Recording Log #3 with Miyeon from (G)-IDLE / 동해 녹음 비하인드 #3 with (여자)아이들 미연 (2022-01-29)"
},
{
  link: "https://www.youtube.com/watch?v=mgB4LrADUls",
  category: "RECORDING BEHIND",
  member: "소연",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/mgB4LrADUls/hqdefault.jpg",
  alt: "소연 - [메이킹]불타오르게 위대하게 난리난 소연의 녹음 현장! (2022-01-17)",
  title: "[메이킹]불타오르게 위대하게 난리난 소연의 녹음 현장! (2022-01-17)"
},
{
  link: "https://www.youtube.com/watch?v=o0MM7TIpilE",
  category: "RECORDING BEHIND",
  member: "소연",
  year: "2021",
  thumbnail: "https://i.ytimg.com/vi/o0MM7TIpilE/hqdefault.jpg",
  alt: "소연 - 전소연(JEON SOYEON) - '삠삠 (BEAM BEAM)' Choreography Video (CEO Ver.) (2021-08-01)",
  title: "전소연(JEON SOYEON) - '삠삠 (BEAM BEAM)' Choreography Video (CEO Ver.) (2021-08-01)"
},
{
  link: "https://www.youtube.com/watch?v=6YGOq65MZpw",
  category: "RECORDING BEHIND",
  member: "소연",
  year: "2021",
  thumbnail: "https://i.ytimg.com/vi/6YGOq65MZpw/hqdefault.jpg",
  alt: "소연 - 전소연(JEON SOYEON) - '삠삠 (BEAM BEAM)' Choreography Video (2021-07-12)",
  title: "전소연(JEON SOYEON) - '삠삠 (BEAM BEAM)' Choreography Video (2021-07-12)"
},
{
  link: "https://www.youtube.com/watch?v=v99wxx_Dkj8",
  category: "RECORDING BEHIND",
  member: "아이들",
  year: "2021",
  thumbnail: "https://i.ytimg.com/vi/v99wxx_Dkj8/hqdefault.jpg",
  alt: "아이들 - (여자)아이들((G)I-DLE) - 'HWAA(火/花) (Chinese Ver.)' 녹음 비하인드 (ENG) (2021-02-06)",
  title: "(여자)아이들((G)I-DLE) - 'HWAA(火/花) (Chinese Ver.)' 녹음 비하인드 (ENG) (2021-02-06)"
},
{
  link: "https://www.youtube.com/watch?v=cwKYh2geaik",
  category: "RECORDING BEHIND",
  member: "아이들",
  year: "2021",
  thumbnail: "https://i.ytimg.com/vi/cwKYh2geaik/hqdefault.jpg",
  alt: "아이들 - (여자)아이들((G)I-DLE) - '화(火花)(HWAA)' (Choreography Practice Video) (2021-01-19)",
  title: "(여자)아이들((G)I-DLE) - '화(火花)(HWAA)' (Choreography Practice Video) (2021-01-19)"
},

// 🔽 새로 불러온 12개 항목
{
  link: "https://www.youtube.com/watch?v=ipeRGRNQiC4",
  category: "RECORDING BEHIND",
  member: "소연,미연",
  year: "2020",
  thumbnail: "https://i.ytimg.com/vi/ipeRGRNQiC4/hqdefault.jpg",
  alt: "소연,미연 - (여자)아이들((G)I-DLE) - LoL K/DA 'THE BADDEST' 녹음 비하인드 (미연&소연) (2020-08-28)",
  title: "(여자)아이들((G)I-DLE) - LoL K/DA 'THE BADDEST' 녹음 비하인드 (미연&소연) (2020-08-28)"
},
{
  link: "https://www.youtube.com/watch?v=S3DVpMbd9Aw",
  category: "RECORDING BEHIND",
  member: "소연",
  year: "2020",
  thumbnail: "https://i.ytimg.com/vi/S3DVpMbd9Aw/hqdefault.jpg",
  alt: "소연 - HYO 효연 ‘DESSERT (Feat. Loopy, SOYEON ((G)I-DLE))’ Behind The Scenes (2020-07-21)",
  title: "HYO 효연 ‘DESSERT (Feat. Loopy, SOYEON ((G)I-DLE))’ Behind The Scenes (2020-07-21)"
},
{
  link: "https://www.youtube.com/watch?v=KqE4UK5sfHA",
  category: "RECORDING BEHIND",
  member: "아이들",
  year: "2020",
  thumbnail: "https://i.ytimg.com/vi/KqE4UK5sfHA/hqdefault.jpg",
  alt: "아이들 - (여자)아이들((G)I-DLE) - 'Oh my god' (Special Choreography Video) (2020-04-20)",
  title: "(여자)아이들((G)I-DLE) - 'Oh my god' (Special Choreography Video) (2020-04-20)"
},
{
  link: "https://www.youtube.com/watch?v=wLlKktf0ZWE",
  category: "RECORDING BEHIND",
  member: "아이들",
  year: "2020",
  thumbnail: "https://i.ytimg.com/vi/wLlKktf0ZWE/hqdefault.jpg",
  alt: "아이들 - (여자)아이들((G)I-DLE) - 'Oh my god' (Choreography Practice Video) (2020-04-12)",
  title: "(여자)아이들((G)I-DLE) - 'Oh my god' (Choreography Practice Video) (2020-04-12)"
},
{
  link: "https://www.youtube.com/watch?v=FRYY-OxzRTU",
  category: "RECORDING BEHIND",
  member: "아이들",
  year: "2019",
  thumbnail: "https://i.ytimg.com/vi/FRYY-OxzRTU/hqdefault.jpg",
  alt: "아이들 - (여자)아이들((G)I-DLE) - 'LION' (Choreography Practice Video) (2019-11-27)",
  title: "(여자)아이들((G)I-DLE) - 'LION' (Choreography Practice Video) (2019-11-27)"
},
{
  link: "https://www.youtube.com/watch?v=SBtF_e6XWnc",
  category: "RECORDING BEHIND",
  member: "아이들",
  year: "2019",
  thumbnail: "https://i.ytimg.com/vi/SBtF_e6XWnc/hqdefault.jpg",
  alt: "아이들 - (여자)아이들((G)I-DLE) - '싫다고 말해 (Nightmare Ver.)' (Halloween Ver. Choreography Video) (2019-10-29)",
  title: "(여자)아이들((G)I-DLE) - '싫다고 말해 (Nightmare Ver.)' (Halloween Ver. Choreography Video) (2019-10-29)"
},
{
  link: "https://www.youtube.com/watch?v=PzSCnRCpM_c",
  category: "RECORDING BEHIND",
  member: "아이들",
  year: "2019",
  thumbnail: "https://i.ytimg.com/vi/PzSCnRCpM_c/hqdefault.jpg",
  alt: "아이들 - (여자)아이들((G)I-DLE) - 'Uh-Oh' (Choreography Practice Video) (2019-06-30)",
  title: "(여자)아이들((G)I-DLE) - 'Uh-Oh' (Choreography Practice Video) (2019-06-30)"
},
{
  link: "https://www.youtube.com/watch?v=rhBa2_-qw00",
  category: "RECORDING BEHIND",
  member: "아이들",
  year: "2019",
  thumbnail: "https://i.ytimg.com/vi/rhBa2_-qw00/hqdefault.jpg",
  alt: "아이들 - (여자)아이들((G)I-DLE) - 'Senorita' (Choreography Practice Video) (2019-03-04)",
  title: "(여자)아이들((G)I-DLE) - 'Senorita' (Choreography Practice Video) (2019-03-04)"
},
{
  link: "https://www.youtube.com/watch?v=FBipo03U00E",
  category: "RECORDING BEHIND",
  member: "소연",
  year: "2018",
  thumbnail: "https://i.ytimg.com/vi/FBipo03U00E/hqdefault.jpg",
  alt: "소연 - [STATION X 0] 슬기(SEULGI)X신비(여자친구)X청하X소연 'Wow Thing' 비하인더스테이션 (2018-09-26)",
  title: "[STATION X 0] 슬기(SEULGI)X신비(여자친구)X청하X소연 'Wow Thing' 비하인더스테이션 (2018-09-26)"
},
{
  link: "https://www.youtube.com/watch?v=2SO-qLst3po",
  category: "RECORDING BEHIND",
  member: "소연",
  year: "2018",
  thumbnail: "https://i.ytimg.com/vi/2SO-qLst3po/hqdefault.jpg",
  alt: "소연 - [STATION X 0] 슬기(SEULGI)X신비(여자친구)X청하X소연 'Wow Thing' Dance Practice (2018-09-21)",
  title: "[STATION X 0] 슬기(SEULGI)X신비(여자친구)X청하X소연 'Wow Thing' Dance Practice (2018-09-21)"
},
{
  link: "https://www.youtube.com/watch?v=EGuuBE7xjBk",
  category: "RECORDING BEHIND",
  member: "아이들",
  year: "2018",
  thumbnail: "https://i.ytimg.com/vi/EGuuBE7xjBk/hqdefault.jpg",
  alt: "아이들 - (여자)아이들((G)I-DLE) - '한(一)(HANN(Alone))' (Choreography Practice Video) (2018-08-20)",
  title: "(여자)아이들((G)I-DLE) - '한(一)(HANN(Alone))' (Choreography Practice Video) (2018-08-20)"
},
{
  link: "https://www.youtube.com/watch?v=Fhk4Qzj_QpM",
  category: "RECORDING BEHIND",
  member: "아이들",
  year: "2018",
  thumbnail: "https://i.ytimg.com/vi/Fhk4Qzj_QpM/hqdefault.jpg",
  alt: "아이들 - (여자)아이들((G)I-DLE) - 'LATATA' (Choreography Practice Video) (2018-05-10)",
  title: "(여자)아이들((G)I-DLE) - 'LATATA' (Choreography Practice Video) (2018-05-10)"
},
// 🔽 새로 불러온 50개 항목
{
  link: "https://www.youtube.com/watch?v=-xcOOq9bWYI",
  category: "INTERVIEW",
  member: "아이들",
  year: "2025",
  thumbnail: "https://i.ytimg.com/vi/-xcOOq9bWYI/hqdefault.jpg",
  alt: "아이들 - 얘랑 더 친하다고?? 유치빤스 전쟁 시작된 아이들💔 소연, 미연, 민니, 우기, 슈화의 우정 쟁탈전ㅣ i-dle (아이들) 젤리 텔미 | COSMOPOLITAN KOREA (2025-05-28)",
  title: "얘랑 더 친하다고?? 유치빤스 전쟁 시작된 아이들💔 소연, 미연, 민니, 우기, 슈화의 우정 쟁탈전ㅣ i-dle (아이들) 젤리 텔미 | COSMOPOLITAN KOREA (2025-05-28)"
},
{
  link: "https://www.youtube.com/watch?v=YA7W7r_4A6Y",
  category: "INTERVIEW",
  member: "아이들",
  year: "2025",
  thumbnail: "https://i.ytimg.com/vi/YA7W7r_4A6Y/hqdefault.jpg",
  alt: "아이들 - 【i-dle 아이들】20250521 i-dle SOHU KOREA interview 인터뷰（아이돌 출근한다 爱豆上班啦） (2025-05-21)",
  title: "【i-dle 아이들】20250521 i-dle SOHU KOREA interview 인터뷰（아이돌 출근한다 爱豆上班啦） (2025-05-21)"
},
{
  link: "https://www.youtube.com/watch?v=NSD0BJIdCjw",
  category: "INTERVIEW",
  member: "아이들",
  year: "2025",
  thumbnail: "https://i.ytimg.com/vi/NSD0BJIdCjw/hqdefault.jpg",
  alt: "아이들 - K-pop Stars i-dle Dish On 8th Mini Album [We are] (Exclusive) (2025-05-19)",
  title: "K-pop Stars i-dle Dish On 8th Mini Album [We are] (Exclusive) (2025-05-19)"
},
{
  link: "https://www.youtube.com/watch?v=DTFeuesDDyg",
  category: "INTERVIEW",
  member: "아이들",
  year: "2025",
  thumbnail: "https://i.ytimg.com/vi/DTFeuesDDyg/hqdefault.jpg",
  alt: "아이들 - [ENG/JPN/Full] i-dle 'Good Thing' Showcase 아이들 '굿띵' 쇼케이스 풀영상 l 미연·민니·소연·우기·슈화 (2025-05-19)",
  title: "[ENG/JPN/Full] i-dle 'Good Thing' Showcase 아이들 '굿띵' 쇼케이스 풀영상 l 미연·민니·소연·우기·슈화 (2025-05-19)"
},
{
  link: "https://www.youtube.com/watch?v=G0FrdVlNuHE",
  category: "INTERVIEW",
  member: "미연",
  year: "2025",
  thumbnail: "https://i.ytimg.com/vi/G0FrdVlNuHE/hqdefault.jpg",
  alt: "미연 - 미연이 폭싹 속았수다를 안 보고 있는 이유는?ㅣDAZED THINGS (2025-05-14)",
  title: "미연이 폭싹 속았수다를 안 보고 있는 이유는?ㅣDAZED THINGS (2025-05-14)"
},
{
  link: "https://www.youtube.com/watch?v=VCLjwNlZYvU",
  category: "INTERVIEW",
  member: "소연",
  year: "2025",
  thumbnail: "https://i.ytimg.com/vi/VCLjwNlZYvU/hqdefault.jpg",
  alt: "소연 - [ENG] 여자아이들 소연이 말아주는 ASMR 시작할게요~ 인마이백 단골템 야돔 어떻게 쓰는지 알려줌! by W Korea (2025-03-26)",
  title: "[ENG] 여자아이들 소연이 말아주는 ASMR 시작할게요~ 인마이백 단골템 야돔 어떻게 쓰는지 알려줌! by W Korea (2025-03-26)"
},
{
  link: "https://www.youtube.com/watch?v=SCGW79pWEIw",
  category: "INTERVIEW",
  member: "슈화",
  year: "2025",
  thumbnail: "https://i.ytimg.com/vi/SCGW79pWEIw/hqdefault.jpg",
  alt: "슈화 - 가방 소개하는 슈화가 왜 이렇게 귀여워😻  | 얼루어코리아 Allure Korea (2025-03-14)",
  title: "가방 소개하는 슈화가 왜 이렇게 귀여워😻  | 얼루어코리아 Allure Korea (2025-03-14)"
},
{
  link: "https://www.youtube.com/watch?v=nbM1BAv0heI",
  category: "INTERVIEW",
  member: "민니",
  year: "2025",
  thumbnail: "https://i.ytimg.com/vi/nbM1BAv0heI/hqdefault.jpg",
  alt: "민니 - 【MINNIE 민니】20250127 MINNIE SOHU KOREA interview 인터뷰 （아이돌 출근한다 爱豆上班啦） (2025-01-27)",
  title: "【MINNIE 민니】20250127 MINNIE SOHU KOREA interview 인터뷰 （아이돌 출근한다 爱豆上班啦） (2025-01-27)"
},
{
  link: "https://www.youtube.com/watch?v=Iz9q_y8Piaw",
  category: "INTERVIEW",
  member: "민니",
  year: "2025",
  thumbnail: "https://i.ytimg.com/vi/Iz9q_y8Piaw/hqdefault.jpg",
  alt: "민니 - 민니를 웃게 만든 바자의 센스 있고, 고급스럽고, 뻔하지 않은 선물들! 어디서 살 수 있냐고요? (feat. 카카오톡 선물하기) (2025-01-12)",
  title: "민니를 웃게 만든 바자의 센스 있고, 고급스럽고, 뻔하지 않은 선물들! 어디서 살 수 있냐고요? (feat. 카카오톡 선물하기) (2025-01-12)"
},
{
  link: "https://www.youtube.com/watch?v=L7uwbUvH_O0",
  category: "INTERVIEW",
  member: "민니",
  year: "2024",
  thumbnail: "https://i.ytimg.com/vi/L7uwbUvH_O0/hqdefault.jpg",
  alt: "민니 - [ENG] 2024 민니 헤메스 월드컵ㅣMINNIEㅣ(여자)아이들ㅣ코스모톡톡 (2024-12-04)",
  title: "[ENG] 2024 민니 헤메스 월드컵ㅣMINNIEㅣ(여자)아이들ㅣ코스모톡톡 (2024-12-04)"
},
{
  link: "https://www.youtube.com/watch?v=RbQip_zmPxI",
  category: "INTERVIEW",
  member: "민니",
  year: "2024",
  thumbnail: "https://i.ytimg.com/vi/RbQip_zmPxI/hqdefault.jpg",
  alt: "민니 - [ENG/THAI] 음색 천재 민니의 ASMR 기다린 걸까~?🎶 맥시멀리스트가 가방 꾸미기를 하면?👜 by W Korea (2024-09-02)",
  title: "[ENG/THAI] 음색 천재 민니의 ASMR 기다린 걸까~?🎶 맥시멀리스트가 가방 꾸미기를 하면?👜 by W Korea (2024-09-02)"
},
{
  link: "https://www.youtube.com/watch?v=Yb3D1vFNQ8s",
  category: "INTERVIEW",
  member: "소연",
  year: "2024",
  thumbnail: "https://i.ytimg.com/vi/Yb3D1vFNQ8s/hqdefault.jpg",
  alt: "소연 - [ENG] 앨범 스포에 증명사진까지 보여준 소연? 고마워요ㅣ(여자)아이들ㅣ코스모톡톡 (2024-07-01)",
  title: "[ENG] 앨범 스포에 증명사진까지 보여준 소연? 고마워요ㅣ(여자)아이들ㅣ코스모톡톡 (2024-07-01)"
},
{
  link: "https://www.youtube.com/watch?v=FYkex66MH4U",
  category: "INTERVIEW",
  member: "우기",
  year: "2024",
  thumbnail: "https://i.ytimg.com/vi/FYkex66MH4U/hqdefault.jpg",
  alt: "우기 - [ENG] 아이들 우기의 새로운 이름 코커?🤔 그게 무슨 뜻 이예요? I 아이들 우기 편집장 인터뷰 (2024-05-30)",
  title: "[ENG] 아이들 우기의 새로운 이름 코커?🤔 그게 무슨 뜻 이예요? I 아이들 우기 편집장 인터뷰 (2024-05-30)"
},
{
  link: "https://www.youtube.com/watch?v=slrQWhFYVKQ",
  category: "INTERVIEW",
  member: "아이들",
  year: "2024",
  thumbnail: "https://i.ytimg.com/vi/slrQWhFYVKQ/hqdefault.jpg",
  alt: "아이들 - [ENG/KOR SUB] 葉舒華分享最喜歡的五件事物！迷上俄羅斯方塊甚至會上網研究？狗勾的名字怎麼取？狂播同一首歌播到隊友都膩了？｜關於藝人的那5件事｜GQ Taiwan (2024-05-15)",
  title: "[ENG/KOR SUB] 葉舒華分享最喜歡的五件事物！迷上俄羅斯方塊甚至會上網研究？狗勾的名字怎麼取？狂播同一首歌播到隊友都膩了？｜關於藝人的那5件事｜GQ Taiwan (2024-05-15)"
},
{
  link: "https://www.youtube.com/watch?v=d_BH_NvLb5Q",
  category: "INTERVIEW",
  member: "우기",
  year: "2024",
  thumbnail: "https://i.ytimg.com/vi/d_BH_NvLb5Q/hqdefault.jpg",
  alt: "우기 - 【YUQI 우기】20240430 YUQI SOHU KOREA interview 인터뷰（아이돌 출근한다 爱豆上班啦） (2024-04-30)",
  title: "【YUQI 우기】20240430 YUQI SOHU KOREA interview 인터뷰（아이돌 출근한다 爱豆上班啦） (2024-04-30)"
},
{
  link: "https://www.youtube.com/watch?v=D3mLlNqHUbA",
  category: "INTERVIEW",
  member: "아이들",
  year: "2024",
  thumbnail: "https://i.ytimg.com/vi/D3mLlNqHUbA/hqdefault.jpg",
  alt: "아이들 - [ENG] 블링블링 골저스 레이디~💍 댕댕댕 케미맛.ZIP 도착!ㅣ(여자)아이들ㅣ케미맛.ZIP (2024-03-12)",
  title: "[ENG] 블링블링 골저스 레이디~💍 댕댕댕 케미맛.ZIP 도착!ㅣ(여자)아이들ㅣ케미맛.ZIP (2024-03-12)"
},
{
  link: "https://www.youtube.com/watch?v=S28IPI0PTZ4",
  category: "INTERVIEW",
  member: "아이들",
  year: "2024",
  thumbnail: "https://i.ytimg.com/vi/S28IPI0PTZ4/hqdefault.jpg",
  alt: "아이들 - 【(G)I-DLE (여자)아이들】20240221 (G)I-DLE SOHU KOREA interview 인터뷰【2 부】（아이돌 출근한다 爱豆上班啦） (2024-02-21)",
  title: "【(G)I-DLE (여자)아이들】20240221 (G)I-DLE SOHU KOREA interview 인터뷰【2 부】（아이돌 출근한다 爱豆上班啦） (2024-02-21)"
},
{
  link: "https://www.youtube.com/watch?v=yjdg8jmXXOw",
  category: "INTERVIEW",
  member: "아이들",
  year: "2024",
  thumbnail: "https://i.ytimg.com/vi/yjdg8jmXXOw/hqdefault.jpg",
  alt: "아이들 - (ENG/한) SUPER LADIES Off to Work (2024-02-15)",
  title: "(ENG/한) SUPER LADIES Off to Work (2024-02-15)"
},
{
  link: "https://www.youtube.com/watch?v=7jPhEu2I4qc",
  category: "INTERVIEW",
  member: "아이들",
  year: "2024",
  thumbnail: "https://i.ytimg.com/vi/7jPhEu2I4qc/hqdefault.jpg",
  alt: "아이들 - 【(G)I-DLE (여자)아이들】20240207 (G)I-DLE SOHU KOREA interview 인터뷰【1 부】（아이돌 출근한다 爱豆上班啦） (2024-02-07)",
  title: "【(G)I-DLE (여자)아이들】20240207 (G)I-DLE SOHU KOREA interview 인터뷰【1 부】（아이돌 출근한다 爱豆上班啦） (2024-02-07)"
},
{
  link: "https://www.youtube.com/watch?v=sk60HEx2BBg",
  category: "INTERVIEW",
  member: "소연",
  year: "2023",
  thumbnail: "https://i.ytimg.com/vi/sk60HEx2BBg/hqdefault.jpg",
  alt: "소연 - [ENG]한때 서커스 단원을 꿈꿨던 (여자)아이들 전소연과 태양의서커스가 만났을 때! #툭툭인터뷰 (2023-11-29)",
  title: "[ENG]한때 서커스 단원을 꿈꿨던 (여자)아이들 전소연과 태양의서커스가 만났을 때! #툭툭인터뷰 (2023-11-29)"
},
{
  link: "https://www.youtube.com/watch?v=bcA9cMy1h94",
  category: "INTERVIEW",
  member: "아이들",
  year: "2023",
  thumbnail: "https://i.ytimg.com/vi/bcA9cMy1h94/hqdefault.jpg",
  alt: "아이들 - (G)I-DLE Competes in a Compliment Battle | Teen Vogue (2023-10-03)",
  title: "(G)I-DLE Competes in a Compliment Battle | Teen Vogue (2023-10-03)"
},
{
  link: "https://www.youtube.com/watch?v=Y_cBrePWzyo",
  category: "INTERVIEW",
  member: "아이들",
  year: "2023",
  thumbnail: "https://i.ytimg.com/vi/Y_cBrePWzyo/hqdefault.jpg",
  alt: "아이들 - (G)I-DLE Take a Friendship Test | Glamour (2023-09-21)",
  title: "(G)I-DLE Take a Friendship Test | Glamour (2023-09-21)"
},
{
  link: "https://www.youtube.com/watch?v=QMmFRSMduuU",
  category: "INTERVIEW",
  member: "아이들",
  year: "2023",
  thumbnail: "https://i.ytimg.com/vi/QMmFRSMduuU/hqdefault.jpg",
  alt: "아이들 - (G)I-DLE友情測驗！團員彼此第一印象反差超大？吵吵鬧鬧感情好到像一家人:「有你們表演永遠不辛苦！」｜人物專訪｜Vogue Taiwan (2023-09-21)",
  title: "(G)I-DLE友情測驗！團員彼此第一印象反差超大？吵吵鬧鬧感情好到像一家人:「有你們表演永遠不辛苦！」｜人物專訪｜Vogue Taiwan (2023-09-21)"
},
{
  link: "https://www.youtube.com/watch?v=enigs5YRIzU",
  category: "INTERVIEW",
  member: "아이들",
  year: "2023",
  thumbnail: "https://i.ytimg.com/vi/enigs5YRIzU/hqdefault.jpg",
  alt: "아이들 - (G)I-DLE Break Down Their Favorite Snacks | Snacked (2023-09-12)",
  title: "(G)I-DLE Break Down Their Favorite Snacks | Snacked (2023-09-12)"
},
{
  link: "https://www.youtube.com/watch?v=taRyoI-CMyY",
  category: "INTERVIEW",
  member: "아이들",
  year: "2023",
  thumbnail: "https://i.ytimg.com/vi/taRyoI-CMyY/hqdefault.jpg",
  alt: "아이들 - (G)I-DLE On Acting Like Aliens In Their Music Video (2023-09-08)",
  title: "(G)I-DLE On Acting Like Aliens In Their Music Video (2023-09-08)"
},
{
  link: "https://www.youtube.com/watch?v=uCqZKpISJI0",
  category: "INTERVIEW",
  member: "아이들",
  year: "2023",
  thumbnail: "https://i.ytimg.com/vi/uCqZKpISJI0/hqdefault.jpg",
  alt: "아이들 - Here Are Five Things You Didn't Know About (G)I - DLE | Billboard (2023-09-06)",
  title: "Here Are Five Things You Didn't Know About (G)I - DLE | Billboard (2023-09-06)"
},
{
  link: "https://www.youtube.com/watch?v=wW23SWOmdDk",
  category: "INTERVIEW",
  member: "아이들",
  year: "2023",
  thumbnail: "https://i.ytimg.com/vi/wW23SWOmdDk/hqdefault.jpg",
  alt: "아이들 - Does (G)I-DLE Get Jet Lag (2023-09-06)",
  title: "Does (G)I-DLE Get Jet Lag (2023-09-06)"
},
{
  link: "https://www.youtube.com/watch?v=ZRbbd8ojDGk",
  category: "INTERVIEW",
  member: "아이들",
  year: "2023",
  thumbnail: "https://i.ytimg.com/vi/ZRbbd8ojDGk/hqdefault.jpg",
  alt: "아이들 - Here's (G)I-DLE Talking \"I DO\" And The World Tour (2023-09-03)",
  title: "Here's (G)I-DLE Talking \"I DO\" And The World Tour (2023-09-03)"
},
{
  link: "https://www.youtube.com/watch?v=LFsSEoiyjOY",
  category: "INTERVIEW",
  member: "아이들",
  year: "2023",
  thumbnail: "https://i.ytimg.com/vi/LFsSEoiyjOY/hqdefault.jpg",
  alt: "아이들 - (G)I-DLE Invade America (2023-08-10)",
  title: "(G)I-DLE Invade America (2023-08-10)"
},
{
  link: "https://www.youtube.com/watch?v=2XTW18a5DVY",
  category: "INTERVIEW",
  member: "아이들",
  year: "2023",
  thumbnail: "https://i.ytimg.com/vi/2XTW18a5DVY/hqdefault.jpg",
  alt: "아이들 - [PRESS Conference] 2023 GIDLE WORLD TOUR I am FREE TY IN BANGKOK (2023-07-14)",
  title: "[PRESS Conference] 2023 GIDLE WORLD TOUR I am FREE TY IN BANGKOK (2023-07-14)"
},
{
  link: "https://www.youtube.com/watch?v=iacZ4UR-m_g",
  category: "INTERVIEW",
  member: "아이들",
  year: "2023",
  thumbnail: "https://i.ytimg.com/vi/iacZ4UR-m_g/hqdefault.jpg",
  alt: "아이들 - 폴꾸에 진심인 (여자)아이들💜 폴꾸zip📁 with (G)I-DLE (Eng sub) (2023-07-13)",
  title: "폴꾸에 진심인 (여자)아이들💜 폴꾸zip📁 with (G)I-DLE (Eng sub) (2023-07-13)"
},
{
  link: "https://www.youtube.com/watch?v=Lgc9s-kTTKk",
  category: "INTERVIEW",
  member: "슈화",
  year: "2023",
  thumbnail: "https://i.ytimg.com/vi/Lgc9s-kTTKk/hqdefault.jpg",
  alt: "슈화 - [eng sub] 그니까❓ 화보 촬영장에서 왜 밥을 짓고 있어요?!🤔 슈화는 요리왕👩‍🍳 COOKING SHUHUA✨ (2023-07-07)",
  title: "[eng sub] 그니까❓ 화보 촬영장에서 왜 밥을 짓고 있어요?!🤔 슈화는 요리왕👩‍🍳 COOKING SHUHUA✨ (2023-07-07)"
},
{
  link: "https://www.youtube.com/watch?v=tIALOeq2Mwo",
  category: "INTERVIEW",
  member: "민니",
  year: "2023",
  thumbnail: "https://i.ytimg.com/vi/tIALOeq2Mwo/hqdefault.jpg",
  alt: "민니 - [ENG SUB] 당도 100%‼️ 이렇게 귀여워도 되나요❓ 민니의 N초 인터뷰 (2023-06-24)",
  title: "[ENG SUB] 당도 100%‼️ 이렇게 귀여워도 되나요❓ 민니의 N초 인터뷰 (2023-06-24)"
},
{
  link: "https://www.youtube.com/watch?v=YQV5B8qoDEc",
  category: "INTERVIEW",
  member: "아이들",
  year: "2023",
  thumbnail: "https://i.ytimg.com/vi/YQV5B8qoDEc/hqdefault.jpg",
  alt: "아이들 - K인터뷰 제 38기 인터뷰 번역본 爱我请举手 K访谈 第三十八期采访 (2023-06-21)",
  title: "K인터뷰 제 38기 인터뷰 번역본 爱我请举手 K访谈 第三十八期采访 (2023-06-21)"
},
{
  link: "https://www.youtube.com/watch?v=ISQRO4UNh80",
  category: "INTERVIEW",
  member: "아이들",
  year: "2023",
  thumbnail: "https://i.ytimg.com/vi/ISQRO4UNh80/hqdefault.jpg",
  alt: "아이들 - (G)I-DLE's Fav Outfits From QueenCard & Allergy Videos (2023-06-20)",
  title: "(G)I-DLE's Fav Outfits From QueenCard & Allergy Videos (2023-06-20)"
},
{
  link: "https://www.youtube.com/watch?v=riYNymhKtHE",
  category: "INTERVIEW",
  member: "미연",
  year: "2023",
  thumbnail: "https://i.ytimg.com/vi/riYNymhKtHE/hqdefault.jpg",
  alt: "미연 - [ENG] 사주부터 저 공주 맞는데요?!👑💗 퀸카 그 잡채 (여자)아이들 미연의 이모지 인터뷰 #여자아이들 #Queencard | ELLE KOREA (2023-06-08)",
  title: "[ENG] 사주부터 저 공주 맞는데요?!👑💗 퀸카 그 잡채 (여자)아이들 미연의 이모지 인터뷰 #여자아이들 #Queencard | ELLE KOREA (2023-06-08)"
},
{
  link: "https://www.youtube.com/watch?v=gKPisaOJzQw",
  category: "INTERVIEW",
  member: "우기",
  year: "2023",
  thumbnail: "https://i.ytimg.com/vi/gKPisaOJzQw/hqdefault.jpg",
  alt: "우기 - [ENG] 퀸카(Queencard) 그 잡채..💖 우기 거울 셀카 팁 독점 공개합니다.｜INSTA TOUR (2023-06-02)",
  title: "[ENG] 퀸카(Queencard) 그 잡채..💖 우기 거울 셀카 팁 독점 공개합니다.｜INSTA TOUR (2023-06-02)"
},
{
  link: "https://www.youtube.com/watch?v=93z_ePVDzUc",
  category: "INTERVIEW",
  member: "소연",
  year: "2023",
  thumbnail: "https://i.ytimg.com/vi/93z_ePVDzUc/hqdefault.jpg",
  alt: "소연 - [ENG] (여자)아이들에 퀸며들게 만드는 리더 소연 👑 이제는 말 할 수 있다?! 6년 아이돌 인생 중 소연의 위기썰은?ㅣ전소연 ㅣ퀸카ㅣ줌터뷰 (2023-05-26)",
  title: "[ENG] (여자)아이들에 퀸며들게 만드는 리더 소연 👑 이제는 말 할 수 있다?! 6년 아이돌 인생 중 소연의 위기썰은?ㅣ전소연 ㅣ퀸카ㅣ줌터뷰 (2023-05-26)"
},
{
  link: "https://www.youtube.com/watch?v=nK57FEe9a_U",
  category: "INTERVIEW",
  member: "아이들",
  year: "2023",
  thumbnail: "https://i.ytimg.com/vi/nK57FEe9a_U/hqdefault.jpg",
  alt: "아이들 - 여자아이들, 제22회 뉴욕 전미주한인체육대회 홍보영상 (2023-05-25)",
  title: "여자아이들, 제22회 뉴욕 전미주한인체육대회 홍보영상 (2023-05-25)"
},
{
  link: "https://www.youtube.com/watch?v=CbAVQGPqvtM",
  category: "INTERVIEW",
  member: "슈화",
  year: "2023",
  thumbnail: "https://i.ytimg.com/vi/CbAVQGPqvtM/hqdefault.jpg",
  alt: "슈화 - SHUHUA of (G)I-DLE Answers 21 Questions | SHUHUA x Mindset (2023-05-19)",
  title: "SHUHUA of (G)I-DLE Answers 21 Questions | SHUHUA x Mindset (2023-05-19)"
},
{
  link: "https://www.youtube.com/watch?v=VotvPanrGHo",
  category: "INTERVIEW",
  member: "미연",
  year: "2023",
  thumbnail: "https://i.ytimg.com/vi/VotvPanrGHo/hqdefault.jpg",
  alt: "미연 - 혜미리예채파 I.💖 이 분이 누구시죠..?!🙄 나는 내 사진을 모르겠숴요😂 혜리, 미연, 예나의 찐친 케미! ZOOM QUIZ 👀 (2023-03-31)",
  title: "혜미리예채파 I.💖 이 분이 누구시죠..?!🙄 나는 내 사진을 모르겠숴요😂 혜리, 미연, 예나의 찐친 케미! ZOOM QUIZ 👀 (2023-03-31)"
},
{
  link: "https://www.youtube.com/watch?v=ZxV1wz1bpDk",
  category: "INTERVIEW",
  member: "아이들",
  year: "2023",
  thumbnail: "https://i.ytimg.com/vi/ZxV1wz1bpDk/hqdefault.jpg",
  alt: "아이들 - 🌏GEEF 2023 with (G)I-DLE \"We make impact; soft power through culture.\" (2023-01-30)",
  title: "🌏GEEF 2023 with (G)I-DLE \"We make impact; soft power through culture.\" (2023-01-30)"
},
{
  link: "https://www.youtube.com/watch?v=dE70UVkkvpE",
  category: "INTERVIEW",
  member: "슈화",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/dE70UVkkvpE/hqdefault.jpg",
  alt: "슈화 - Nxde로 파격적인 이미지를 보여준 슈화와 MAPS와의 사랑스러운 인터뷰 (2022-12-26)",
  title: "Nxde로 파격적인 이미지를 보여준 슈화와 MAPS와의 사랑스러운 인터뷰 (2022-12-26)"
},
{
  link: "https://www.youtube.com/watch?v=t7V8EeVxLg0",
  category: "INTERVIEW",
  member: "아이들",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/t7V8EeVxLg0/hqdefault.jpg",
  alt: "아이들 - (G)I-DLE:  Bonus MRL Ask Anything Chat (2022-12-24)",
  title: "(G)I-DLE:  Bonus MRL Ask Anything Chat (2022-12-24)"
},
{
  link: "https://www.youtube.com/watch?v=pPbkEVCX1dA",
  category: "INTERVIEW",
  member: "우기",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/pPbkEVCX1dA/hqdefault.jpg",
  alt: "우기 - [ENG] 🚨6분 순삭 주의🚨우기(YUQI)에게 6분간 홀렸습니다…💫ㅣ(여자) 아이들ㅣ우기ㅣ줌터뷰 (2022-12-23)",
  title: "[ENG] 🚨6분 순삭 주의🚨우기(YUQI)에게 6분간 홀렸습니다…💫ㅣ(여자) 아이들ㅣ우기ㅣ줌터뷰 (2022-12-23)"
},
{
  link: "https://www.youtube.com/watch?v=dI_8XzWS81I",
  category: "INTERVIEW",
  member: "아이들",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/dI_8XzWS81I/hqdefault.jpg",
  alt: "아이들 - (G)I-DLE Talks Producing Music, New Album Coming Soon & More! (2022-12-09)",
  title: "(G)I-DLE Talks Producing Music, New Album Coming Soon & More! (2022-12-09)"
},
{
  link: "https://www.youtube.com/watch?v=QGgo7r3QP3o",
  category: "INTERVIEW",
  member: "아이들",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/QGgo7r3QP3o/hqdefault.jpg",
  alt: "아이들 - (G)I-DLE Takes The BFF Test (2022-12-07)",
  title: "(G)I-DLE Takes The BFF Test (2022-12-07)"
},
{
  link: "https://www.youtube.com/watch?v=jbhv6Rg41bo",
  category: "INTERVIEW",
  member: "민니,우기",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/jbhv6Rg41bo/hqdefault.jpg",
  alt: "민니,우기 - ACBF 2022 Christmas Collection | with (G)I-DLE MINNIE&YUQI (2022-12-07)",
  title: "ACBF 2022 Christmas Collection | with (G)I-DLE MINNIE&YUQI (2022-12-07)"
},
{
  link: "https://www.youtube.com/watch?v=J_KZhtVe_Zk",
  category: "INTERVIEW",
  member: "아이들",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/J_KZhtVe_Zk/hqdefault.jpg",
  alt: "아이들 - [2022 TMA 결산] (여자)아이들 \"아이들의 해로 만들어보겠다!\" (2022-12-03)",
  title: "[2022 TMA 결산] (여자)아이들 \"아이들의 해로 만들어보겠다!\" (2022-12-03)"
},
{
  link: "https://www.youtube.com/watch?v=6fKxTMn6vB4",
  category: "INTERVIEW",
  member: "민니,미연",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/6fKxTMn6vB4/hqdefault.jpg",
  alt: "민니,미연 - (여자)아이들 댕자🐾 민니 미연 절대 비주얼 케미💕✨ (2022-12-02)",
  title: "(여자)아이들 댕자🐾 민니 미연 절대 비주얼 케미💕✨ (2022-12-02)"
},

// 🔽 새로 불러온 50개 항목
{
  link: "https://www.youtube.com/watch?v=39clq3fn4w0",
  category: "INTERVIEW",
  member: "슈화",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/39clq3fn4w0/hqdefault.jpg",
  alt: "슈화 - (여자)아이들 슈화 | 날씨, 그게 뭐? 나에겐 안타티카! | KOLON SPORT (2022-12-02)",
  title: "(여자)아이들 슈화 | 날씨, 그게 뭐? 나에겐 안타티카! | KOLON SPORT (2022-12-02)"
},
{
  link: "https://www.youtube.com/watch?v=-EVQZLNHl6g",
  category: "INTERVIEW",
  member: "아이들",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/-EVQZLNHl6g/hqdefault.jpg",
  alt: "아이들 - (G)I-DLE Sings 'Love', BLACKPINK, and Charlie Puth in ROUND 2 of Song Association | ELLE (2022-11-28)",
  title: "(G)I-DLE Sings 'Love', BLACKPINK, and Charlie Puth in ROUND 2 of Song Association | ELLE (2022-11-28)"
},
{
  link: "https://www.youtube.com/watch?v=aDWdhbeWwgM",
  category: "INTERVIEW",
  member: "아이들",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/aDWdhbeWwgM/hqdefault.jpg",
  alt: "아이들 - Let's Meet (G)I-DLE.  Miyeon, Minnie, Soyeon, Yuqi, and Shuhua. (2022-11-19)",
  title: "Let's Meet (G)I-DLE.  Miyeon, Minnie, Soyeon, Yuqi, and Shuhua. (2022-11-19)"
},
{
  link: "https://www.youtube.com/watch?v=NCqy39zGfow",
  category: "INTERVIEW",
  member: "미연",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/NCqy39zGfow/hqdefault.jpg",
  alt: "미연 - 미연 공주님의 최애 주종은 소주?💚 소주잔 논란부터 미연의 최애 패션템, 촬영장 인바이백까지! | 얼루어코리아 Allure Korea (2022-11-17)",
  title: "미연 공주님의 최애 주종은 소주?💚 소주잔 논란부터 미연의 최애 패션템, 촬영장 인바이백까지! | 얼루어코리아 Allure Korea (2022-11-17)"
},
{
  link: "https://www.youtube.com/watch?v=PpwPAcdh-As",
  category: "INTERVIEW",
  member: "아이들",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/PpwPAcdh-As/hqdefault.jpg",
  alt: "아이들 - 【(G)I-DLE (여자)아이들】20221109 (G)I-DLE SOHU KOREA interview 인터뷰（아이돌 출근한다 爱豆上班啦） (2022-11-09)",
  title: "【(G)I-DLE (여자)아이들】20221109 (G)I-DLE SOHU KOREA interview 인터뷰（아이돌 출근한다 爱豆上班啦） (2022-11-09)"
},
{
  link: "https://www.youtube.com/watch?v=tZrEWldWHCg",
  category: "INTERVIEW",
  member: "소연",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/tZrEWldWHCg/hqdefault.jpg",
  alt: "소연 - [ENG] 'Nxde'로 화려하게 돌아온💗 (여자)아이들 리더 전소연의 Fearless🔥하게 사는 방법은? I FFF (2022-10-26)",
  title: "[ENG] 'Nxde'로 화려하게 돌아온💗 (여자)아이들 리더 전소연의 Fearless🔥하게 사는 방법은? I FFF (2022-10-26)"
},
{
  link: "https://www.youtube.com/watch?v=jw2ykFpMt6Y",
  category: "INTERVIEW",
  member: "민니,슈화",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/jw2ykFpMt6Y/hqdefault.jpg",
  alt: "민니,슈화 - 침착? 조용? 그거 어떻게 하는건데… 미친 케미 민니 슈화의 #W히든백 by W Korea (2022-10-21)",
  title: "침착? 조용? 그거 어떻게 하는건데… 미친 케미 민니 슈화의 #W히든백 by W Korea (2022-10-21)"
},
{
  link: "https://www.youtube.com/watch?v=TDnWQFMQ1a0",
  category: "INTERVIEW",
  member: "미연,슈화",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/TDnWQFMQ1a0/hqdefault.jpg",
  alt: "미연,슈화 - [ENG] (여자)아이들 '막맏내' 미연♥슈화, 미연이 슈화를 '감자탕'이라고 표현한 이유는?ㅣ원플러스원 #04 (2022-10-19)",
  title: "[ENG] (여자)아이들 '막맏내' 미연♥슈화, 미연이 슈화를 '감자탕'이라고 표현한 이유는?ㅣ원플러스원 #04 (2022-10-19)"
},
{
  link: "https://www.youtube.com/watch?v=a5MB1tkHMlE",
  category: "INTERVIEW",
  member: "아이들",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/a5MB1tkHMlE/hqdefault.jpg",
  alt: "아이들 - (여자)아이들((G)I-DLE) - 5th Mini Album [I love] X-LOVE SHOW (2022-10-17)",
  title: "(여자)아이들((G)I-DLE) - 5th Mini Album [I love] X-LOVE SHOW (2022-10-17)"
},
{
  link: "https://www.youtube.com/watch?v=O6aRrFZGuGY",
  category: "INTERVIEW",
  member: "아이들",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/O6aRrFZGuGY/hqdefault.jpg",
  alt: "아이들 - (여자)아이들 [I love] 발매 기념 무물보 공개❤️ #여자아이들 #멜론스포트라이트 (2022-10-17)",
  title: "(여자)아이들 [I love] 발매 기념 무물보 공개❤️ #여자아이들 #멜론스포트라이트 (2022-10-17)"
},
{
  link: "https://www.youtube.com/watch?v=XFVGF_1DDQk",
  category: "INTERVIEW",
  member: "아이들",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/XFVGF_1DDQk/hqdefault.jpg",
  alt: "아이들 - ถึงคิว L’Officiel Question ช่วงถามตอบกับศิลปินสาวสุดฮอตฮอต มินนี่-ณิชา ยนตรรักษ์ แห่งวง (G)I-DLE (2022-10-14)",
  title: "ถึงคิว L’Officiel Question ช่วงถามตอบกับศิลปินสาวสุดฮอตฮอต มินนี่-ณิชา ยนตรรักษ์ แห่งวง (G)I-DLE (2022-10-14)"
},
{
  link: "https://www.youtube.com/watch?v=fn7RMJPx8ww",
  category: "INTERVIEW",
  member: "우기,슈화",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/fn7RMJPx8ww/hqdefault.jpg",
  alt: "우기,슈화 - I LOVE SUDSAPDA EP.59 : พา YUQI & SHUHUA แห่ง (G)I-DLE ดินเนอร์ใต้แสงจันทร์ชมวิวแม่น้ำเจ้าพระยา (2022-10-14)",
  title: "I LOVE SUDSAPDA EP.59 : พา YUQI & SHUHUA แห่ง (G)I-DLE ดินเนอร์ใต้แสงจันทร์ชมวิวแม่น้ำเจ้าพระยา (2022-10-14)"
},
{
  link: "https://www.youtube.com/watch?v=2HbCdXfKzEs",
  category: "INTERVIEW",
  member: "민니,우기",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/2HbCdXfKzEs/hqdefault.jpg",
  alt: "민니,우기 - [ACBF × (G)I-DLE MINNIE&YUQI] 22FW Fashion Film / 에이씨비에프 × (여자)아이들 민니, 우기 (2022-10-13)",
  title: "[ACBF × (G)I-DLE MINNIE&YUQI] 22FW Fashion Film / 에이씨비에프 × (여자)아이들 민니, 우기 (2022-10-13)"
},
{
  link: "https://www.youtube.com/watch?v=AOiqHD7r6U4",
  category: "INTERVIEW",
  member: "아이들",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/AOiqHD7r6U4/hqdefault.jpg",
  alt: "아이들 - [한밤 Originals] 한밤 현지 취재! (여자)아이들 월드투어 in 싱가포르! (2022-10-13)",
  title: "[한밤 Originals] 한밤 현지 취재! (여자)아이들 월드투어 in 싱가포르! (2022-10-13)"
},
{
  link: "https://www.youtube.com/watch?v=0OFG2Z88Tog",
  category: "INTERVIEW",
  member: "우기,슈화",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/0OFG2Z88Tog/hqdefault.jpg",
  alt: "우기,슈화 - (ENG SUB) จับเข่านั่งคุยกับ YUQI & SHUHUA แก๊งน้องเล็กจาก (G)I-DLE (2022-10-11)",
  title: "(ENG SUB) จับเข่านั่งคุยกับ YUQI & SHUHUA แก๊งน้องเล็กจาก (G)I-DLE (2022-10-11)"
},
{
  link: "https://www.youtube.com/watch?v=XWYFkx4NQKI",
  category: "INTERVIEW",
  member: "아이들",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/XWYFkx4NQKI/hqdefault.jpg",
  alt: "아이들 - นั่งเม้าท์กับสาวๆ (G)I-DLE สาดความน่ารักและเสน่ห์ล้นจอ (2022-09-23)",
  title: "นั่งเม้าท์กับสาวๆ (G)I-DLE สาดความน่ารักและเสน่ห์ล้นจอ (2022-09-23)"
},
{
  link: "https://www.youtube.com/watch?v=7DTKsdzL7Ys",
  category: "INTERVIEW",
  member: "아이들",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/7DTKsdzL7Ys/hqdefault.jpg",
  alt: "아이들 - 5분만 : Give me a minute｜Ep.2 (G)I-DLE (2022-08-05)",
  title: "5분만 : Give me a minute｜Ep.2 (G)I-DLE (2022-08-05)"
},
{
  link: "https://www.youtube.com/watch?v=_toQhv6h2OQ",
  category: "INTERVIEW",
  member: "아이들",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/_toQhv6h2OQ/hqdefault.jpg",
  alt: "아이들 - 5분만 : Give me a minute｜Ep.2 Bonus Clip (2022-08-05)",
  title: "5분만 : Give me a minute｜Ep.2 Bonus Clip (2022-08-05)"
},
{
  link: "https://www.youtube.com/watch?v=fe7-gv2GjSQ",
  category: "INTERVIEW",
  member: "민니",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/fe7-gv2GjSQ/hqdefault.jpg",
  alt: "민니 - 민니 소원! '손민수' 꼭 해주세용🥺 (여자)아이들 민니의 인생 아이템 모음.zip #여자아이들 민니 |  ELLE KOREA (2022-07-30)",
  title: "민니 소원! '손민수' 꼭 해주세용🥺 (여자)아이들 민니의 인생 아이템 모음.zip #여자아이들 민니 |  ELLE KOREA (2022-07-30)"
},
{
  link: "https://www.youtube.com/watch?v=arHZL3QSnq4",
  category: "INTERVIEW",
  member: "아이들",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/arHZL3QSnq4/hqdefault.jpg",
  alt: "아이들 - (여자)아이들 멋짐 그 잡채! | BEHIND.ZYP (2022-07-29)",
  title: "(여자)아이들 멋짐 그 잡채! | BEHIND.ZYP (2022-07-29)"
},
{
  link: "https://www.youtube.com/watch?v=srJWnrV_6bw",
  category: "INTERVIEW",
  member: "소연",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/srJWnrV_6bw/hqdefault.jpg",
  alt: "소연 - Welcome to the Mind of SOYEON of (G)I-DLE | SOYEON x Mindset (2022-07-22)",
  title: "Welcome to the Mind of SOYEON of (G)I-DLE | SOYEON x Mindset (2022-07-22)"
},
{
  link: "https://www.youtube.com/watch?v=gLY8nbCRmuQ",
  category: "INTERVIEW",
  member: "아이들",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/gLY8nbCRmuQ/hqdefault.jpg",
  alt: "아이들 - [ENG, CN SUB] 명언파티! 인생 2회차?! (여자)아이들의 이모지퀴즈🤟 (2022-07-12)",
  title: "[ENG, CN SUB] 명언파티! 인생 2회차?! (여자)아이들의 이모지퀴즈🤟 (2022-07-12)"
},
{
  link: "https://www.youtube.com/watch?v=Su4ROnuZy2I",
  category: "INTERVIEW",
  member: "우기",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/Su4ROnuZy2I/hqdefault.jpg",
  alt: "우기 - 아이돌의 하루란 이런 것..?🥺 (여자)아이들 우기의 활동기 VS 비활동기 루틴 대공개🌟 | ELLE KOREA (2022-07-07)",
  title: "아이돌의 하루란 이런 것..?🥺 (여자)아이들 우기의 활동기 VS 비활동기 루틴 대공개🌟 | ELLE KOREA (2022-07-07)"
},
{
  link: "https://www.youtube.com/watch?v=vjkY9KsZqqw",
  category: "INTERVIEW",
  member: "소연,민니,미연",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/vjkY9KsZqqw/hqdefault.jpg",
  alt: "소연,민니,미연 - WHO'S THE REAL REAL? / (여자)아이들 미연, 소연, 민니가 쏘아 올린 무한한 파장, 아디다스X구찌 스펙트럼의 존재 이유. (2022-06-15)",
  title: "WHO'S THE REAL REAL? / (여자)아이들 미연, 소연, 민니가 쏘아 올린 무한한 파장, 아디다스X구찌 스펙트럼의 존재 이유. (2022-06-15)"
},
{
  link: "https://www.youtube.com/watch?v=FWHELcAB7hM",
  category: "INTERVIEW",
  member: "아이들",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/FWHELcAB7hM/hqdefault.jpg",
  alt: "아이들 - (G)I-DLE CAN'T Decide Between These Two Fashion Statements | Drip Or Drop | Cosmopolitan (2022-05-20)",
  title: "(G)I-DLE CAN'T Decide Between These Two Fashion Statements | Drip Or Drop | Cosmopolitan (2022-05-20)"
},
{
  link: "https://www.youtube.com/watch?v=7muD6N96B4Q",
  category: "INTERVIEW",
  member: "아이들",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/7muD6N96B4Q/hqdefault.jpg",
  alt: "아이들 - 예쁘고 좋은 건 크게 보라고 배웠어요.ㅣ뷰티쁠(BEAUTY+) (2022-05-13)",
  title: "예쁘고 좋은 건 크게 보라고 배웠어요.ㅣ뷰티쁠(BEAUTY+) (2022-05-13)"
},
{
  link: "https://www.youtube.com/watch?v=EHsVCyKOymM",
  category: "INTERVIEW",
  member: "슈화",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/EHsVCyKOymM/hqdefault.jpg",
  alt: "슈화 - [유료광고] 슈화 인스타그램 같이 볼래요?ㅣ뷰티쁠(BEAUTY+) (2022-05-09)",
  title: "[유료광고] 슈화 인스타그램 같이 볼래요?ㅣ뷰티쁠(BEAUTY+) (2022-05-09)"
},
{
  link: "https://www.youtube.com/watch?v=ARVPBgjzUJ4",
  category: "INTERVIEW",
  member: "미연",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/ARVPBgjzUJ4/hqdefault.jpg",
  alt: "미연 - [ENG SUB] 존재가 프린세스인 #미연 이랑 셀카 #Drive 함께 가실미연?👸 (2022-05-05)",
  title: "[ENG SUB] 존재가 프린세스인 #미연 이랑 셀카 #Drive 함께 가실미연?👸 (2022-05-05)"
},
{
  link: "https://www.youtube.com/watch?v=6UVkGdUOjfo",
  category: "INTERVIEW",
  member: "미연",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/6UVkGdUOjfo/hqdefault.jpg",
  alt: "미연 - 존재가 프린세스인 아이들 미연에 대한 모든 것👸🏻💟 About Me (G)I-DLE MIYEON (Eng Sub) (2022-04-29)",
  title: "존재가 프린세스인 아이들 미연에 대한 모든 것👸🏻💟 About Me (G)I-DLE MIYEON (Eng Sub) (2022-04-29)"
},
{
  link: "https://www.youtube.com/watch?v=RiSjSWOcU04",
  category: "INTERVIEW",
  member: "아이들",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/RiSjSWOcU04/hqdefault.jpg",
  alt: "아이들 - K-Pop's Girl Band (G)I-DLE Has REALLY DAMAGED Hair?! | Then vs. Now | Seventeen (2022-04-21)",
  title: "K-Pop's Girl Band (G)I-DLE Has REALLY DAMAGED Hair?! | Then vs. Now | Seventeen (2022-04-21)"
},
{
  link: "https://www.youtube.com/watch?v=P_Pk8ehfOCQ",
  category: "INTERVIEW",
  member: "아이들",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/P_Pk8ehfOCQ/hqdefault.jpg",
  alt: "아이들 - JUST ME I-DLE / 다른 어떤 수식어도 필요 없이, 아이들은 아이들답게. (2022-04-21)",
  title: "JUST ME I-DLE / 다른 어떤 수식어도 필요 없이, 아이들은 아이들답게. (2022-04-21)"
},
{
  link: "https://www.youtube.com/watch?v=eoyCrS3ysb4",
  category: "INTERVIEW",
  member: "아이들",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/eoyCrS3ysb4/hqdefault.jpg",
  alt: "아이들 - (G)I-DLE Plays Who’s Who (2022-04-12)",
  title: "(G)I-DLE Plays Who’s Who (2022-04-12)"
},
{
  link: "https://www.youtube.com/watch?v=bUdyN4Ja1Uo",
  category: "INTERVIEW",
  member: "아이들",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/bUdyN4Ja1Uo/hqdefault.jpg",
  alt: "아이들 - K-Pop (G)I-DLE ft. Sakshma Srivastav | Indian Interview | Tomboy (2022-04-09)",
  title: "K-Pop (G)I-DLE ft. Sakshma Srivastav | Indian Interview | Tomboy (2022-04-09)"
},
{
  link: "https://www.youtube.com/watch?v=c8780vEbx1k",
  category: "INTERVIEW",
  member: "민니",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/c8780vEbx1k/hqdefault.jpg",
  alt: "민니 - Welcome to the Mind of MINNIE of (G)I-DLE | MINNIE x Mindset (2022-04-01)",
  title: "Welcome to the Mind of MINNIE of (G)I-DLE | MINNIE x Mindset (2022-04-01)"
},
{
  link: "https://www.youtube.com/watch?v=zoz64gmt-Z8",
  category: "INTERVIEW",
  member: "아이들",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/zoz64gmt-Z8/hqdefault.jpg",
  alt: "아이들 - 【(G)I-DLE (여자)아이들】20220331 (G)I-DLE SOHU KOREA interview 인터뷰（아이돌 출근한다 爱豆上班啦） (2022-03-31)",
  title: "【(G)I-DLE (여자)아이들】20220331 (G)I-DLE SOHU KOREA interview 인터뷰（아이돌 출근한다 爱豆上班啦） (2022-03-31)"
},
{
  link: "https://www.youtube.com/watch?v=RYR4H1DYzcs",
  category: "INTERVIEW",
  member: "민니",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/RYR4H1DYzcs/hqdefault.jpg",
  alt: "민니 - 민니야 언니 화장 잘하지🤟😈🤟 오늘 직업 만족도 최상♥인 이사배(RISABAE Makeup) (2022-03-24)",
  title: "민니야 언니 화장 잘하지🤟😈🤟 오늘 직업 만족도 최상♥인 이사배(RISABAE Makeup) (2022-03-24)"
},
{
  link: "https://www.youtube.com/watch?v=L-5BsMgB4FQ",
  category: "INTERVIEW",
  member: "소연,민니,우기",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/L-5BsMgB4FQ/hqdefault.jpg",
  alt: "소연,민니,우기 - [ENG] 무반주 댄스를 곁들인 (여자)아이들 민니&소연&우기의 1분 인터뷰! l 싱터뷰 (2022-03-24)",
  title: "[ENG] 무반주 댄스를 곁들인 (여자)아이들 민니&소연&우기의 1분 인터뷰! l 싱터뷰 (2022-03-24)"
},
{
  link: "https://www.youtube.com/watch?v=N9rj2BipAqY",
  category: "INTERVIEW",
  member: "소연",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/N9rj2BipAqY/hqdefault.jpg",
  alt: "소연 - [ENG] 데뷔 4년차 (여자)아이들 찐친 테스트! 화제의 Ye, 삐- Tomboy🧡 작곡가 소연이 생각하는 킬링 파트는? by W Korea (2022-03-22)",
  title: "[ENG] 데뷔 4년차 (여자)아이들 찐친 테스트! 화제의 Ye, 삐- Tomboy🧡 작곡가 소연이 생각하는 킬링 파트는? by W Korea (2022-03-22)"
},
{
  link: "https://www.youtube.com/watch?v=F65srPl8I-U",
  category: "INTERVIEW",
  member: "소연,민니,미연",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/F65srPl8I-U/hqdefault.jpg",
  alt: "소연,민니,미연 - [ENG/Full ver.] (G)I-DLE (여자)아이들 'TOMBOY' (톰보이) Showcase 쇼케이스 풀영상 (미연, 민니, 소연  외)ㅣTongTongCulture (2022-03-14)",
  title: "[ENG/Full ver.] (G)I-DLE (여자)아이들 'TOMBOY' (톰보이) Showcase 쇼케이스 풀영상 (미연, 민니, 소연  외)ㅣTongTongCulture (2022-03-14)"
},
{
  link: "https://www.youtube.com/watch?v=9yGq-mIo-mg",
  category: "INTERVIEW",
  member: "아이들",
  year: "2021",
  thumbnail: "https://i.ytimg.com/vi/9yGq-mIo-mg/hqdefault.jpg",
  alt: "아이들 - 글로벌 오디션 '방과후 설렘' 제작발표회 현장 풀 영상 #NewsenTV (2021-11-25)",
  title: "글로벌 오디션 '방과후 설렘' 제작발표회 현장 풀 영상 #NewsenTV (2021-11-25)"
},
{
  link: "https://www.youtube.com/watch?v=Bma3vrk1XtY",
  category: "INTERVIEW",
  member: "민니",
  year: "2021",
  thumbnail: "https://i.ytimg.com/vi/Bma3vrk1XtY/hqdefault.jpg",
  alt: "민니 - [ENG SUB] ELLE Music Station EP.12 : MINNIE (G)I-DLE โชว์ร้องเพลง 3 ภาษา ไทย อังกฤษ และเกาหลี (2021-09-15)",
  title: "[ENG SUB] ELLE Music Station EP.12 : MINNIE (G)I-DLE โชว์ร้องเพลง 3 ภาษา ไทย อังกฤษ และเกาหลี (2021-09-15)"
},
{
  link: "https://www.youtube.com/watch?v=8uT30GTGea8",
  category: "INTERVIEW",
  member: "아이들",
  year: "2021",
  thumbnail: "https://i.ytimg.com/vi/8uT30GTGea8/hqdefault.jpg",
  alt: "아이들 - [ENG SUB] มินนี่ (G)I-DLE แชร์ประสบการณ์ความต่างของวัฒนธรรม ตลอดจนความสนุกเมื่อแทกุกไลน์รวมตัว (2021-09-06)",
  title: "[ENG SUB] มินนี่ (G)I-DLE แชร์ประสบการณ์ความต่างของวัฒนธรรม ตลอดจนความสนุกเมื่อแทกุกไลน์รวมตัว (2021-09-06)"
},
{
  link: "https://www.youtube.com/watch?v=ELW_jflFceg",
  category: "INTERVIEW",
  member: "소연",
  year: "2021",
  thumbnail: "https://i.ytimg.com/vi/ELW_jflFceg/hqdefault.jpg",
  alt: "소연 - (여자)아이들 전소연이 고백하는 법 알려드림 (2021-08-05)",
  title: "(여자)아이들 전소연이 고백하는 법 알려드림 (2021-08-05)"
},
{
  link: "https://www.youtube.com/watch?v=2JHwTJETnuc",
  category: "INTERVIEW",
  member: "소연",
  year: "2021",
  thumbnail: "https://i.ytimg.com/vi/2JHwTJETnuc/hqdefault.jpg",
  alt: "소연 - [ENG] [TMI NEWS] 출근길 TMI 인터뷰｜전소연#TMINEWS | EP.78 (2021-08-04)",
  title: "[ENG] [TMI NEWS] 출근길 TMI 인터뷰｜전소연#TMINEWS | EP.78 (2021-08-04)"
},
{
  link: "https://www.youtube.com/watch?v=46R8bC04MsE",
  category: "INTERVIEW",
  member: "민니",
  year: "2021",
  thumbnail: "https://i.ytimg.com/vi/46R8bC04MsE/hqdefault.jpg",
  alt: "민니 - (ENG SUB) Q&A with MINNIE (G)I-DLE (PLS DO NOT RE-UPLOAD, PLS SHARE) (2021-08-02)",
  title: "(ENG SUB) Q&A with MINNIE (G)I-DLE (PLS DO NOT RE-UPLOAD, PLS SHARE) (2021-08-02)"
},
{
  link: "https://www.youtube.com/watch?v=HXda3rdPs6E",
  category: "INTERVIEW",
  member: "소연",
  year: "2021",
  thumbnail: "https://i.ytimg.com/vi/HXda3rdPs6E/hqdefault.jpg",
  alt: "소연 - 🍔윈디 버거 대표🍔 (여자)아이들 소연이가 가장 좋아하는 열가지💜 (G)I-DLE JEON SOYEON MY 10 FAVORITES(ENG SUB) (2021-07-28)",
  title: "🍔윈디 버거 대표🍔 (여자)아이들 소연이가 가장 좋아하는 열가지💜 (G)I-DLE JEON SOYEON MY 10 FAVORITES(ENG SUB) (2021-07-28)"
},
{
  link: "https://www.youtube.com/watch?v=Y1Ie8uDbhrY",
  category: "INTERVIEW",
  member: "소연",
  year: "2021",
  thumbnail: "https://i.ytimg.com/vi/Y1Ie8uDbhrY/hqdefault.jpg",
  alt: "소연 - MAPS 2021 AUGUST ISSUE 눈감아도 보이는 요정 비주얼 소연 (2021-07-17)",
  title: "MAPS 2021 AUGUST ISSUE 눈감아도 보이는 요정 비주얼 소연 (2021-07-17)"
},
{
  link: "https://www.youtube.com/watch?v=JM67SbkWUes",
  category: "INTERVIEW",
  member: "소연",
  year: "2021",
  thumbnail: "https://i.ytimg.com/vi/JM67SbkWUes/hqdefault.jpg",
  alt: "소연 - 전소연(JEON SOYEON) - 'Weather' 뮤직 필름💕ㅣ8PM CONCERT (2021-07-07)",
  title: "전소연(JEON SOYEON) - 'Weather' 뮤직 필름💕ㅣ8PM CONCERT (2021-07-07)"
},
{
  link: "https://www.youtube.com/watch?v=ccSdMrR3CYA",
  category: "INTERVIEW",
  member: "아이들",
  year: "2021",
  thumbnail: "https://i.ytimg.com/vi/ccSdMrR3CYA/hqdefault.jpg",
  alt: "아이들 - [ENG SUB] 이 분들 퀴즈에 진심입니다! 퀴즈 풀다 먹태 뜯은 사람은 누구? | 내일 지구가 망해버렸으면 좋겠어 | 넷플릭스 (2021-06-26)",
  title: "[ENG SUB] 이 분들 퀴즈에 진심입니다! 퀴즈 풀다 먹태 뜯은 사람은 누구? | 내일 지구가 망해버렸으면 좋겠어 | 넷플릭스 (2021-06-26)"
},
{
  link: "https://www.youtube.com/watch?v=nMa4UJDc7OY",
  category: "INTERVIEW",
  member: "아이들",
  year: "2021",
  thumbnail: "https://i.ytimg.com/vi/nMa4UJDc7OY/hqdefault.jpg",
  alt: "아이들 - [ENG SUB] 영재 대체 누굴 바라보는거야? 지구망 배우들의 꿀케미 가득한 #미션지구파서블ㅣ내일 지구가 망해버렸으면 좋겠어ㅣ넷플릭스 (2021-06-19)",
  title: "[ENG SUB] 영재 대체 누굴 바라보는거야? 지구망 배우들의 꿀케미 가득한 #미션지구파서블ㅣ내일 지구가 망해버렸으면 좋겠어ㅣ넷플릭스 (2021-06-19)"
},

// 🔽 새로 불러온 50개 항목
{
  link: "https://www.youtube.com/watch?v=k5d5TRDxl8A",
  category: "INTERVIEW",
  member: "아이들",
  year: "2021",
  thumbnail: "https://i.ytimg.com/vi/k5d5TRDxl8A/hqdefault.jpg",
  alt: "아이들 - Meet the Cast of So Not Worth It [ENG SUB] (2021-06-14)",
  title: "Meet the Cast of So Not Worth It [ENG SUB] (2021-06-14)"
},
{
  link: "https://www.youtube.com/watch?v=M0Q2tK6bAag",
  category: "INTERVIEW",
  member: "민니",
  year: "2021",
  thumbnail: "https://i.ytimg.com/vi/M0Q2tK6bAag/hqdefault.jpg",
  alt: "민니 - Exclusive Interview : MINNIE (G)I-DLE  ที่แรกก่อนใคร! ปล่อยพลังน่ารักสดใสสุดๆ (2021-05-28)",
  title: "Exclusive Interview : MINNIE (G)I-DLE  ที่แรกก่อนใคร! ปล่อยพลังน่ารักสดใสสุดๆ (2021-05-28)"
},
{
  link: "https://www.youtube.com/watch?v=4d68adSEfmg",
  category: "INTERVIEW",
  member: "민니,미연",
  year: "2021",
  thumbnail: "https://i.ytimg.com/vi/4d68adSEfmg/hqdefault.jpg",
  alt: "민니,미연 - [ENG](여자)아이들 미연&민니 넘사벽 취향 차이 무엇?!｜싱터뷰 (2021-02-27)",
  title: "[ENG](여자)아이들 미연&민니 넘사벽 취향 차이 무엇?!｜싱터뷰 (2021-02-27)"
},
{
  link: "https://www.youtube.com/watch?v=pJlxwB0Sa4A",
  category: "INTERVIEW",
  member: "아이들",
  year: "2021",
  thumbnail: "https://i.ytimg.com/vi/pJlxwB0Sa4A/hqdefault.jpg",
  alt: "아이들 - [휴방위] (여자)아이들((G)I-DLE)이 불(火) 지피고 꽃(花)피우고 간 인터뷰｜EP.09 (2021-01-15)",
  title: "[휴방위] (여자)아이들((G)I-DLE)이 불(火) 지피고 꽃(花)피우고 간 인터뷰｜EP.09 (2021-01-15)"
},
{
  link: "https://www.youtube.com/watch?v=wB2r4hxi9JA",
  category: "INTERVIEW",
  member: "소연,우기",
  year: "2021",
  thumbnail: "https://i.ytimg.com/vi/wB2r4hxi9JA/hqdefault.jpg",
  alt: "소연,우기 - 환상의 티키타카. (여자)아이들 소연 우기 추측🤔인터뷰(Eng Sub) (2021-01-13)",
  title: "환상의 티키타카. (여자)아이들 소연 우기 추측🤔인터뷰(Eng Sub) (2021-01-13)"
},
{
  link: "https://www.youtube.com/watch?v=67GwZiEjeMk",
  category: "INTERVIEW",
  member: "아이들",
  year: "2021",
  thumbnail: "https://i.ytimg.com/vi/67GwZiEjeMk/hqdefault.jpg",
  alt: "아이들 - [풀영상 Q&A] (여자)아이들 (G)I-DLE 'I burn' 컴백 미디어 쇼케이스 기자간담회 (2021-01-11)",
  title: "[풀영상 Q&A] (여자)아이들 (G)I-DLE 'I burn' 컴백 미디어 쇼케이스 기자간담회 (2021-01-11)"
},
{
  link: "https://www.youtube.com/watch?v=y_Z5kAf96yo",
  category: "INTERVIEW",
  member: "아이들",
  year: "2021",
  thumbnail: "https://i.ytimg.com/vi/y_Z5kAf96yo/hqdefault.jpg",
  alt: "아이들 - [Full ver.] (G)I-DLE (여자)아이들 '화'(火花) (HWAA) Showcase 쇼케이스 풀영상 (미연, 민니, 수진, 소연, 우기, 슈화) [통통TV] (2021-01-11)",
  title: "[Full ver.] (G)I-DLE (여자)아이들 '화'(火花) (HWAA) Showcase 쇼케이스 풀영상 (미연, 민니, 수진, 소연, 우기, 슈화) [통통TV] (2021-01-11)"
},
{
  link: "https://www.youtube.com/watch?v=55TEB82zfVk",
  category: "INTERVIEW",
  member: "아이들",
  year: "2021",
  thumbnail: "https://i.ytimg.com/vi/55TEB82zfVk/hqdefault.jpg",
  alt: "아이들 - (여자)아이들((G)I-DLE) - '화(火花)(HWAA)' : ONLINE MEDIA SHOWCASE Ver. (2021-01-11)",
  title: "(여자)아이들((G)I-DLE) - '화(火花)(HWAA)' : ONLINE MEDIA SHOWCASE Ver. (2021-01-11)"
},
{
  link: "https://www.youtube.com/watch?v=YnaRV2-3Hoo",
  category: "INTERVIEW",
  member: "아이들",
  year: "2021",
  thumbnail: "https://i.ytimg.com/vi/YnaRV2-3Hoo/hqdefault.jpg",
  alt: "아이들 - [ENG SUB]불꽃(火花)튀는 #W드로잉터뷰 전쟁!! (여자)아이들((G)I-DLE), 화(火)난 거 아니지? (feat. 화보 미공개 B컷 공개) by W Korea (2021-01-10)",
  title: "[ENG SUB]불꽃(火花)튀는 #W드로잉터뷰 전쟁!! (여자)아이들((G)I-DLE), 화(火)난 거 아니지? (feat. 화보 미공개 B컷 공개) by W Korea (2021-01-10)"
},
{
  link: "https://www.youtube.com/watch?v=ynYP0zHOvYk",
  category: "INTERVIEW",
  member: "소연,우기",
  year: "2021",
  thumbnail: "https://i.ytimg.com/vi/ynYP0zHOvYk/hqdefault.jpg",
  alt: "소연,우기 - 좌식댄스 도장깨기 하러 온  (여자)아이들(G)I-DLE 소연&우기 덤디덤디DUMDi DUMDi 좌식댄스(eng) (2021-01-06)",
  title: "좌식댄스 도장깨기 하러 온  (여자)아이들(G)I-DLE 소연&우기 덤디덤디DUMDi DUMDi 좌식댄스(eng) (2021-01-06)"
},
{
  link: "https://www.youtube.com/watch?v=CEYyGxftaYQ",
  category: "INTERVIEW",
  member: "슈화",
  year: "2020",
  thumbnail: "https://i.ytimg.com/vi/CEYyGxftaYQ/hqdefault.jpg",
  alt: "슈화 - #수진 #슈화 의 텔레파시가 이정도? 역시 #수슈 다! ㅣ 싱터뷰 (2020-12-21)",
  title: "#수진 #슈화 의 텔레파시가 이정도? 역시 #수슈 다! ㅣ 싱터뷰 (2020-12-21)"
},
{
  link: "https://www.youtube.com/watch?v=Kt-OUrecJ_g",
  category: "INTERVIEW",
  member: "민니",
  year: "2020",
  thumbnail: "https://i.ytimg.com/vi/Kt-OUrecJ_g/hqdefault.jpg",
  alt: "민니 - [ASEAN ISSUE] 제4화 아세안 출신 K-POP 스타! (여자)아이들 민니 & CLC 손 편! (2020-11-26)",
  title: "[ASEAN ISSUE] 제4화 아세안 출신 K-POP 스타! (여자)아이들 민니 & CLC 손 편! (2020-11-26)"
},
{
  link: "https://www.youtube.com/watch?v=IKvBAJk5Ydk",
  category: "INTERVIEW",
  member: "아이들",
  year: "2020",
  thumbnail: "https://i.ytimg.com/vi/IKvBAJk5Ydk/hqdefault.jpg",
  alt: "아이들 - (Exclusive) (G)I-DLE INTERVIEW (MULTI SUB) | ONLINE CONCERT ‘I-LAND : WHO AM I’ | #tvNMeet (2020-08-02)",
  title: "(Exclusive) (G)I-DLE INTERVIEW (MULTI SUB) | ONLINE CONCERT ‘I-LAND : WHO AM I’ | #tvNMeet (2020-08-02)"
},
{
  link: "https://www.youtube.com/watch?v=nmY4AEZfRfE",
  category: "INTERVIEW",
  member: "미연,슈화",
  year: "2020",
  thumbnail: "https://i.ytimg.com/vi/nmY4AEZfRfE/hqdefault.jpg",
  alt: "미연,슈화 - 시작한지 1초만에 균열.... (여자)아이들(G)I-DLE 미연 슈화 좌식댄스_오마이갓 Oh my god(Eng Sub) (2020-06-05)",
  title: "시작한지 1초만에 균열.... (여자)아이들(G)I-DLE 미연 슈화 좌식댄스_오마이갓 Oh my god(Eng Sub) (2020-06-05)"
},
{
  link: "https://www.youtube.com/watch?v=-ZeDaxqB8BM",
  category: "INTERVIEW",
  member: "미연,슈화",
  year: "2020",
  thumbnail: "https://i.ytimg.com/vi/-ZeDaxqB8BM/hqdefault.jpg",
  alt: "미연,슈화 - (여자)아이들 미연 슈화 서로 첫인상은? 최애 노래는? _ (초하이텐션)퀵터뷰 Eng Sub (2020-06-01)",
  title: "(여자)아이들 미연 슈화 서로 첫인상은? 최애 노래는? _ (초하이텐션)퀵터뷰 Eng Sub (2020-06-01)"
},
{
  link: "https://www.youtube.com/watch?v=EGcLl7MUFFg",
  category: "INTERVIEW",
  member: "아이들",
  year: "2020",
  thumbnail: "https://i.ytimg.com/vi/EGcLl7MUFFg/hqdefault.jpg",
  alt: "아이들 - (G)I-DLE Reveals Who Has the Most Aegyo, Who's the Best Singer, and More | Superlatives (2020-05-15)",
  title: "(G)I-DLE Reveals Who Has the Most Aegyo, Who's the Best Singer, and More | Superlatives (2020-05-15)"
},
{
  link: "https://www.youtube.com/watch?v=RkBzgG6BUrk",
  category: "INTERVIEW",
  member: "아이들",
  year: "2020",
  thumbnail: "https://i.ytimg.com/vi/RkBzgG6BUrk/hqdefault.jpg",
  alt: "아이들 - [Eng] (여자)아이들, 깜짝! 놀라버린 에피소드 대방출 (G)-IDLE [오마이갓 인터뷰] (2020-04-20)",
  title: "[Eng] (여자)아이들, 깜짝! 놀라버린 에피소드 대방출 (G)-IDLE [오마이갓 인터뷰] (2020-04-20)"
},
{
  link: "https://www.youtube.com/watch?v=qmoT-VuvI9A",
  category: "INTERVIEW",
  member: "아이들",
  year: "2020",
  thumbnail: "https://i.ytimg.com/vi/qmoT-VuvI9A/hqdefault.jpg",
  alt: "아이들 - (CC) We asked (G)I-DLE to do the most insane interviewㅣOh my godㅣQuestion Parade (2020-04-19)",
  title: "(CC) We asked (G)I-DLE to do the most insane interviewㅣOh my godㅣQuestion Parade (2020-04-19)"
},
{
  link: "https://www.youtube.com/watch?v=SYgqRbCmNsQ",
  category: "INTERVIEW",
  member: "아이들",
  year: "2020",
  thumbnail: "https://i.ytimg.com/vi/SYgqRbCmNsQ/hqdefault.jpg",
  alt: "아이들 - [풀버전] (여자)아이들 (G)I-DLE \"I trust\" 온라인 쇼케이스 (2020-04-16)",
  title: "[풀버전] (여자)아이들 (G)I-DLE \"I trust\" 온라인 쇼케이스 (2020-04-16)"
},
{
  link: "https://www.youtube.com/watch?v=PUC7Rs6FuxM",
  category: "INTERVIEW",
  member: "아이들",
  year: "2020",
  thumbnail: "https://i.ytimg.com/vi/PUC7Rs6FuxM/hqdefault.jpg",
  alt: "아이들 - [Eng] 최다 정답자와 우승자가 바뀐 (여자)아이들 [몹쓸퀴즈] (2020-04-14)",
  title: "[Eng] 최다 정답자와 우승자가 바뀐 (여자)아이들 [몹쓸퀴즈] (2020-04-14)"
},
{
  link: "https://www.youtube.com/watch?v=eqpesL2E9co",
  category: "INTERVIEW",
  member: "아이들",
  year: "2020",
  thumbnail: "https://i.ytimg.com/vi/eqpesL2E9co/hqdefault.jpg",
  alt: "아이들 - (SUB) (여자)아이들이 팬들의 질문에 답했다! | (G)I-DLE | Oh my god | 대답자판기 Q&A Machine (2020-04-11)",
  title: "(SUB) (여자)아이들이 팬들의 질문에 답했다! | (G)I-DLE | Oh my god | 대답자판기 Q&A Machine (2020-04-11)"
},
{
  link: "https://www.youtube.com/watch?v=W59VCFYAzrg",
  category: "INTERVIEW",
  member: "아이들",
  year: "2020",
  thumbnail: "https://i.ytimg.com/vi/W59VCFYAzrg/hqdefault.jpg",
  alt: "아이들 - (여자)아이들((G)I-DLE) - 3rd Mini Album \"I trust\" ONLINE MEDIA SHOWCASE (2020-04-08)",
  title: "(여자)아이들((G)I-DLE) - 3rd Mini Album \"I trust\" ONLINE MEDIA SHOWCASE (2020-04-08)"
},
{
  link: "https://www.youtube.com/watch?v=YvS4nsdGh3c",
  category: "INTERVIEW",
  member: "아이들",
  year: "2020",
  thumbnail: "https://i.ytimg.com/vi/YvS4nsdGh3c/hqdefault.jpg",
  alt: "아이들 - (여자)아이들, 컴백 쇼케이스 'I Trust’ 풀영상 [WD영상] (2020-04-07)",
  title: "(여자)아이들, 컴백 쇼케이스 'I Trust’ 풀영상 [WD영상] (2020-04-07)"
},
{
  link: "https://www.youtube.com/watch?v=hNMsePqV1FE",
  category: "INTERVIEW",
  member: "아이들",
  year: "2020",
  thumbnail: "https://i.ytimg.com/vi/hNMsePqV1FE/hqdefault.jpg",
  alt: "아이들 - (ENG) [Full ver.] (여자)아이들 (G)I-DLE ‘Oh my god' Showcase 쇼케이스 풀영상 (미연, 민니, 수진, 소연, 우기, 슈화) [통통TV] (2020-04-06)",
  title: "(ENG) [Full ver.] (여자)아이들 (G)I-DLE ‘Oh my god' Showcase 쇼케이스 풀영상 (미연, 민니, 수진, 소연, 우기, 슈화) [통통TV] (2020-04-06)"
},
{
  link: "https://www.youtube.com/watch?v=sce5ct7nCVE",
  category: "INTERVIEW",
  member: "아이들",
  year: "2019",
  thumbnail: "https://i.ytimg.com/vi/sce5ct7nCVE/hqdefault.jpg",
  alt: "아이들 - [ENG SUB] (여자)아이들과의 TMI 인터뷰 (TMI interview with (여자)아이들) (2019-12-27)",
  title: "[ENG SUB] (여자)아이들과의 TMI 인터뷰 (TMI interview with (여자)아이들) (2019-12-27)"
},
{
  link: "https://www.youtube.com/watch?v=yhCAvYHTF7g",
  category: "INTERVIEW",
  member: "아이들",
  year: "2019",
  thumbnail: "https://i.ytimg.com/vi/yhCAvYHTF7g/hqdefault.jpg",
  alt: "아이들 - [191214] (G)I-DLE 여자아이들 VTODAY Game  Vietnam (2019-12-22)",
  title: "[191214] (G)I-DLE 여자아이들 VTODAY Game  Vietnam (2019-12-22)"
},
{
  link: "https://www.youtube.com/watch?v=-sLXjQTDwV8",
  category: "INTERVIEW",
  member: "아이들",
  year: "2019",
  thumbnail: "https://i.ytimg.com/vi/-sLXjQTDwV8/hqdefault.jpg",
  alt: "아이들 - 누가 누군지 궁금했지? 요즘 대세 #여자아이들 의 저세상 텐션 릴레이카메라 #짤터뷰/ #G_I_DLE  #ELLE짤터뷰 I ELLE KOREA (2019-10-25)",
  title: "누가 누군지 궁금했지? 요즘 대세 #여자아이들 의 저세상 텐션 릴레이카메라 #짤터뷰/ #G_I_DLE  #ELLE짤터뷰 I ELLE KOREA (2019-10-25)"
},
{
  link: "https://www.youtube.com/watch?v=jfzm4KxmPyA",
  category: "INTERVIEW",
  member: "슈화",
  year: "2019",
  thumbnail: "https://i.ytimg.com/vi/jfzm4KxmPyA/hqdefault.jpg",
  alt: "슈화 - [팅글인터뷰] ASMR로 듣는 '수진이의 학창 시절 최고 등수는?' | (여자)아이들 수진&슈화 편 (ENG SUB) (2019-09-30)",
  title: "[팅글인터뷰] ASMR로 듣는 '수진이의 학창 시절 최고 등수는?' | (여자)아이들 수진&슈화 편 (ENG SUB) (2019-09-30)"
},
{
  link: "https://www.youtube.com/watch?v=9Eq_DrLQmuM",
  category: "INTERVIEW",
  member: "아이들",
  year: "2019",
  thumbnail: "https://i.ytimg.com/vi/9Eq_DrLQmuM/hqdefault.jpg",
  alt: "아이들 - (G)I-DLE Reviews Latin American SnacksㅣSnack Talk (2019-08-24)",
  title: "(G)I-DLE Reviews Latin American SnacksㅣSnack Talk (2019-08-24)"
},
{
  link: "https://www.youtube.com/watch?v=SUg4NVD7nPQ",
  category: "INTERVIEW",
  member: "아이들",
  year: "2019",
  thumbnail: "https://i.ytimg.com/vi/SUg4NVD7nPQ/hqdefault.jpg",
  alt: "아이들 - (G)I-DLE (여자)아이들 | Portuguese Tongue Twister Reading Challenge! (2019-08-03)",
  title: "(G)I-DLE (여자)아이들 | Portuguese Tongue Twister Reading Challenge! (2019-08-03)"
},
{
  link: "https://www.youtube.com/watch?v=V5Io30Sz8CI",
  category: "INTERVIEW",
  member: "아이들",
  year: "2019",
  thumbnail: "https://i.ytimg.com/vi/V5Io30Sz8CI/hqdefault.jpg",
  alt: "아이들 - ★여자아이들 'Uh-Oh' Showcase Photo Time +Talk★ (2019-06-26)",
  title: "★여자아이들 'Uh-Oh' Showcase Photo Time +Talk★ (2019-06-26)"
},
{
  link: "https://www.youtube.com/watch?v=r7egXBZRM7o",
  category: "INTERVIEW",
  member: "아이들",
  year: "2019",
  thumbnail: "https://i.ytimg.com/vi/r7egXBZRM7o/hqdefault.jpg",
  alt: "아이들 - 세상 취향 확실한 (여자)아이들의 tmi★ (볼륨을 키워 시청하세요) / 잠깐만 tmi [봉춘기획] (2019-04-01)",
  title: "세상 취향 확실한 (여자)아이들의 tmi★ (볼륨을 키워 시청하세요) / 잠깐만 tmi [봉춘기획] (2019-04-01)"
},
{
  link: "https://www.youtube.com/watch?v=V0eEifvMpdc",
  category: "INTERVIEW",
  member: "아이들",
  year: "2019",
  thumbnail: "https://i.ytimg.com/vi/V0eEifvMpdc/hqdefault.jpg",
  alt: "아이들 - [MEET&GREET] 190315 (G)I-DLE ((여자)아이들) 2ND MINI ALBUM 'I MADE' (ENG SUB / FULL) (2019-03-29)",
  title: "[MEET&GREET] 190315 (G)I-DLE ((여자)아이들) 2ND MINI ALBUM 'I MADE' (ENG SUB / FULL) (2019-03-29)"
},
{
  link: "https://www.youtube.com/watch?v=5RgCND3HbWw",
  category: "INTERVIEW",
  member: "아이들",
  year: "2019",
  thumbnail: "https://i.ytimg.com/vi/5RgCND3HbWw/hqdefault.jpg",
  alt: "아이들 - [Multi SUB/I'm Celuv] (여자)아이들((G)I-DLE), 19년 3월 7일 방송 Full Ver. (Celuv.TV) (2019-03-08)",
  title: "[Multi SUB/I'm Celuv] (여자)아이들((G)I-DLE), 19년 3월 7일 방송 Full Ver. (Celuv.TV) (2019-03-08)"
},
{
  link: "https://www.youtube.com/watch?v=bmqshsqVYkg",
  category: "INTERVIEW",
  member: "아이들",
  year: "2019",
  thumbnail: "https://i.ytimg.com/vi/bmqshsqVYkg/hqdefault.jpg",
  alt: "아이들 - (Eng sub) (여자)아이들과 신기방기 뷰티 게임 Beauty Quiz｜(G)I-DLE｜VOGUE TV (2019-03-07)",
  title: "(Eng sub) (여자)아이들과 신기방기 뷰티 게임 Beauty Quiz｜(G)I-DLE｜VOGUE TV (2019-03-07)"
},
{
  link: "https://www.youtube.com/watch?v=vXUKDkK3hi0",
  category: "INTERVIEW",
  member: "아이들",
  year: "2019",
  thumbnail: "https://i.ytimg.com/vi/vXUKDkK3hi0/hqdefault.jpg",
  alt: "아이들 - (Eng sub) 입덕 포인트 터진 (여자)아이들과의 Beauty Talk｜(G)I-DLE｜VOGUE TV (2019-03-01)",
  title: "(Eng sub) 입덕 포인트 터진 (여자)아이들과의 Beauty Talk｜(G)I-DLE｜VOGUE TV (2019-03-01)"
},
{
  link: "https://www.youtube.com/watch?v=nXQJhTa6HXs",
  category: "INTERVIEW",
  member: "아이들",
  year: "2019",
  thumbnail: "https://i.ytimg.com/vi/nXQJhTa6HXs/hqdefault.jpg",
  alt: "아이들 - (Eng sub) [Full ver] (G)I-DLE ((여자)아이들) 'I made' Showcase (Senorita) [통통TV] (2019-02-26)",
  title: "(Eng sub) [Full ver] (G)I-DLE ((여자)아이들) 'I made' Showcase (Senorita) [통통TV] (2019-02-26)"
},
{
  link: "https://www.youtube.com/watch?v=TtbRfX4F8mQ",
  category: "INTERVIEW",
  member: "아이들",
  year: "2019",
  thumbnail: "https://i.ytimg.com/vi/TtbRfX4F8mQ/hqdefault.jpg",
  alt: "아이들 - ★ 여자 아이들 ((G)I-DLE) [555인터뷰] ★ (2019-01-30)",
  title: "★ 여자 아이들 ((G)I-DLE) [555인터뷰] ★ (2019-01-30)"
},
{
  link: "https://www.youtube.com/watch?v=qJoppg1L6ts",
  category: "INTERVIEW",
  member: "아이들",
  year: "2018",
  thumbnail: "https://i.ytimg.com/vi/qJoppg1L6ts/hqdefault.jpg",
  alt: "아이들 - [꿀DJ] (여자)아이들 일일인터뷰+'한(ㅡ)' 안무 (2018-08-25)",
  title: "[꿀DJ] (여자)아이들 일일인터뷰+'한(ㅡ)' 안무 (2018-08-25)"
},
{
  link: "https://www.youtube.com/watch?v=yvg0JI02nDU",
  category: "INTERVIEW",
  member: "아이들",
  year: "2018",
  thumbnail: "https://i.ytimg.com/vi/yvg0JI02nDU/hqdefault.jpg",
  alt: "아이들 - [TV텐 비하인드] (여자)아이들의 뜨거운 화보 현장을 가보았다! (텐스타 7월호) (2018-07-13)",
  title: "[TV텐 비하인드] (여자)아이들의 뜨거운 화보 현장을 가보았다! (텐스타 7월호) (2018-07-13)"
},
{
  link: "https://www.youtube.com/watch?v=vsb62-O5Cwg",
  category: "INTERVIEW",
  member: "슈화",
  year: "2018",
  thumbnail: "https://i.ytimg.com/vi/vsb62-O5Cwg/hqdefault.jpg",
  alt: "슈화 - [오구설명서] (여자)아이들/(G)I-DLE 슈화 (2018-06-02)",
  title: "[오구설명서] (여자)아이들/(G)I-DLE 슈화 (2018-06-02)"
},
{
  link: "https://www.youtube.com/watch?v=_HAH0Eqpj6o",
  category: "INTERVIEW",
  member: "우기",
  year: "2018",
  thumbnail: "https://i.ytimg.com/vi/_HAH0Eqpj6o/hqdefault.jpg",
  alt: "우기 - [오구설명서] (여자)아이들/(G)I-DLE 우기 (2018-06-01)",
  title: "[오구설명서] (여자)아이들/(G)I-DLE 우기 (2018-06-01)"
},
{
  link: "https://www.youtube.com/watch?v=PvKRasJ4QM0",
  category: "INTERVIEW",
  member: "소연",
  year: "2018",
  thumbnail: "https://i.ytimg.com/vi/PvKRasJ4QM0/hqdefault.jpg",
  alt: "소연 - [오구설명서] (여자)아이들/(G)I-DLE 소연 (2018-05-31)",
  title: "[오구설명서] (여자)아이들/(G)I-DLE 소연 (2018-05-31)"
},
{
  link: "https://www.youtube.com/watch?v=NY8nbgD2odI",
  category: "INTERVIEW",
  member: "아이들",
  year: "2018",
  thumbnail: "https://i.ytimg.com/vi/NY8nbgD2odI/hqdefault.jpg",
  alt: "아이들 - Winners of (G)I-DLE((여자)아이들) 'LATATA' Choreography Cover Contest (2018-05-31)",
  title: "Winners of (G)I-DLE((여자)아이들) 'LATATA' Choreography Cover Contest (2018-05-31)"
},
{
  link: "https://www.youtube.com/watch?v=Vfyd5q99eiI",
  category: "INTERVIEW",
  member: "아이들",
  year: "2018",
  thumbnail: "https://i.ytimg.com/vi/Vfyd5q99eiI/hqdefault.jpg",
  alt: "아이들 - [오구설명서] (여자)아이들/(G)I-DLE 수진 (2018-05-30)",
  title: "[오구설명서] (여자)아이들/(G)I-DLE 수진 (2018-05-30)"
},
{
  link: "https://www.youtube.com/watch?v=lhs0y6k2z3c",
  category: "INTERVIEW",
  member: "민니",
  year: "2018",
  thumbnail: "https://i.ytimg.com/vi/lhs0y6k2z3c/hqdefault.jpg",
  alt: "민니 - [오구설명서] (여자)아이들/(G)I-DLE 민니 (2018-05-29)",
  title: "[오구설명서] (여자)아이들/(G)I-DLE 민니 (2018-05-29)"
},
{
  link: "https://www.youtube.com/watch?v=qDnFFHosNUg",
  category: "INTERVIEW",
  member: "미연",
  year: "2018",
  thumbnail: "https://i.ytimg.com/vi/qDnFFHosNUg/hqdefault.jpg",
  alt: "미연 - [오구설명서] (여자)아이들/(G)I-DLE 미연 (2018-05-28)",
  title: "[오구설명서] (여자)아이들/(G)I-DLE 미연 (2018-05-28)"
},
{
  link: "https://www.youtube.com/watch?v=Yeed17jb814",
  category: "INTERVIEW",
  member: "아이들",
  year: "2018",
  thumbnail: "https://i.ytimg.com/vi/Yeed17jb814/hqdefault.jpg",
  alt: "아이들 - [Celuv.TV/셀럽티비] '(여자)아이들' 데뷔 쇼케이스 (2018-05-03)",
  title: "[Celuv.TV/셀럽티비] '(여자)아이들' 데뷔 쇼케이스 (2018-05-03)"
},
{
  link: "https://www.youtube.com/watch?v=Uqhm7vq3u1Y",
  category: "INTERVIEW",
  member: "소연",
  year: "2018",
  thumbnail: "https://i.ytimg.com/vi/Uqhm7vq3u1Y/hqdefault.jpg",
  alt: "소연 - [풀영상] (G)I-DLE 'LATATA' Showcase ((여자)아이들, I am, 쇼케이스, MAZE, 소연, SOYEON) (2018-05-02)",
  title: "[풀영상] (G)I-DLE 'LATATA' Showcase ((여자)아이들, I am, 쇼케이스, MAZE, 소연, SOYEON) (2018-05-02)"
},
{
  link: "https://www.youtube.com/watch?v=LpANo-YD4-E",
  category: "INTERVIEW",
  member: "소연",
  year: "2018",
  thumbnail: "https://i.ytimg.com/vi/LpANo-YD4-E/hqdefault.jpg",
  alt: "소연 - [100%VIEW] 전소연 (G)I-DLE((여자)아이들) 인터뷰 interview (2018-03-20)",
  title: "[100%VIEW] 전소연 (G)I-DLE((여자)아이들) 인터뷰 interview (2018-03-20)"
},

// 🔽 새로 불러온 2개 항목
{
  link: "https://www.youtube.com/watch?v=B-UdZ9a7rH4",
  category: "INTERVIEW",
  member: "아이들",
  year: "2016",
  thumbnail: "https://i.ytimg.com/vi/B-UdZ9a7rH4/hqdefault.jpg",
  alt: "아이들 - 언프리티랩스타3 X miadidas 디지털 프로모션 영상 (2016-10-07)",
  title: "언프리티랩스타3 X miadidas 디지털 프로모션 영상 (2016-10-07)"
},
{
  link: "https://www.youtube.com/watch?v=nI3v3PunQVk",
  category: "INTERVIEW",
  member: "소연",
  year: "2016",
  thumbnail: "https://i.ytimg.com/vi/nI3v3PunQVk/hqdefault.jpg",
  alt: "소연 - [TV10] 전소연 X 텐아시아 화보 촬영 메이킹 영상 (2016-10-06)",
  title: "[TV10] 전소연 X 텐아시아 화보 촬영 메이킹 영상 (2016-10-06)"
},
// 🔽 새로 불러온 44개 항목
{
  link: "https://www.youtube.com/watch?v=AsjBiO1gsJs",
  category: "RADIO-PODCAST",
  member: "민니,미연",
  year: "2025",
  thumbnail: "https://i.ytimg.com/vi/AsjBiO1gsJs/hqdefault.jpg",
  alt: "민니,미연 - [FULL] 다시 시작! 2막을 시작하다!!💞 완전체로 돌아온 아이들(i-dle)의 미연, 민니 보는 라디오 | 박소현의 러브게임 | 250601 (2025-06-01)",
  title: "[FULL] 다시 시작! 2막을 시작하다!!💞 완전체로 돌아온 아이들(i-dle)의 미연, 민니 보는 라디오 | 박소현의 러브게임 | 250601 (2025-06-01)"
},
{
  link: "https://www.youtube.com/watch?v=inaLcT_gOS8",
  category: "RADIO-PODCAST",
  member: "아이들",
  year: "2025",
  thumbnail: "https://i.ytimg.com/vi/inaLcT_gOS8/hqdefault.jpg",
  alt: "아이들 - [FULL] 함께해서 두 배로 즐거웠던 시간🥳 아이들(idle), 조째즈(ZO ZAZZ) 보는 라디오 | 두시탈출 컬투쇼 | 250527 (2025-05-27)",
  title: "[FULL] 함께해서 두 배로 즐거웠던 시간🥳 아이들(idle), 조째즈(ZO ZAZZ) 보는 라디오 | 두시탈출 컬투쇼 | 250527 (2025-05-27)"
},
{
  link: "https://www.youtube.com/watch?v=ISsi7sLXI8g",
  category: "RADIO-PODCAST",
  member: "아이들",
  year: "2025",
  thumbnail: "https://i.ytimg.com/vi/ISsi7sLXI8g/hqdefault.jpg",
  alt: "아이들 - [이은지의 가요광장]  with 아이들  | KBS 250520(화) 방송 (2025-05-20)",
  title: "[이은지의 가요광장]  with 아이들  | KBS 250520(화) 방송 (2025-05-20)"
},
{
  link: "https://www.youtube.com/watch?v=QieM1oxUFUI",
  category: "RADIO-PODCAST",
  member: "미연",
  year: "2025",
  thumbnail: "https://i.ytimg.com/vi/QieM1oxUFUI/hqdefault.jpg",
  alt: "미연 - 가광 초대석, 누구세요? with 브브걸 (BBGIRLS) (스페셜 DJ 미연) full ver. / [이은지의 가요광장] I KBS 250219 방송 (2025-02-19)",
  title: "가광 초대석, 누구세요? with 브브걸 (BBGIRLS) (스페셜 DJ 미연) full ver. / [이은지의 가요광장] I KBS 250219 방송 (2025-02-19)"
},
{
  link: "https://www.youtube.com/watch?v=jsr9XqQh-C8",
  category: "RADIO-PODCAST",
  member: "민니",
  year: "2025",
  thumbnail: "https://i.ytimg.com/vi/jsr9XqQh-C8/hqdefault.jpg",
  alt: "민니 - [FULL] Cause I’m HER!!💗 다른 누구도 아닌 솔로가수 민니(MINNIE) 보는 라디오 | 웬디의 영스트리트 | 250127 (2025-01-28)",
  title: "[FULL] Cause I’m HER!!💗 다른 누구도 아닌 솔로가수 민니(MINNIE) 보는 라디오 | 웬디의 영스트리트 | 250127 (2025-01-28)"
},
{
  link: "https://www.youtube.com/watch?v=AKbHvJDWLC8",
  category: "RADIO-PODCAST",
  member: "민니",
  year: "2025",
  thumbnail: "https://i.ytimg.com/vi/AKbHvJDWLC8/hqdefault.jpg",
  alt: "민니 - 이은지의 가요광장 with 민니((여자)아이들) KBS 250130(목) 방송 (2025-01-30)",
  title: "이은지의 가요광장 with 민니((여자)아이들) KBS 250130(목) 방송 (2025-01-30)"
},
{
  link: "https://www.youtube.com/watch?v=5rLPgvdUnJ4",
  category: "RADIO-PODCAST",
  member: "민니",
  year: "2025",
  thumbnail: "https://i.ytimg.com/vi/5rLPgvdUnJ4/hqdefault.jpg",
  alt: "민니 - [FULL] who shot ya?🔫 내 심장을 저격한 민니(MINNIE) 보는 라디오 | 두시탈출 컬투쇼 | 250126 (2025-01-26)",
  title: "[FULL] who shot ya?🔫 내 심장을 저격한 민니(MINNIE) 보는 라디오 | 두시탈출 컬투쇼 | 250126 (2025-01-26)"
},
{
  link: "https://www.youtube.com/watch?v=OorZpjSm7QE",
  category: "RADIO-PODCAST",
  member: "민니",
  year: "2025",
  thumbnail: "https://i.ytimg.com/vi/OorZpjSm7QE/hqdefault.jpg",
  alt: "민니 - 볼륨 초대석 : 최효정의 비밀정원 with 민니 (MINNIE) full ver. / [오마이걸 효정의 볼륨을 높여요] | KBS 250123 방송 (2025-01-23)",
  title: "볼륨 초대석 : 최효정의 비밀정원 with 민니 (MINNIE) full ver. / [오마이걸 효정의 볼륨을 높여요] | KBS 250123 방송 (2025-01-23)"
},
{
  link: "https://www.youtube.com/watch?v=x8BwPfJdncw",
  category: "RADIO-PODCAST",
  member: "민니",
  year: "2025",
  thumbnail: "https://i.ytimg.com/vi/x8BwPfJdncw/hqdefault.jpg",
  alt: "민니 - [FULL] 솔로 데뷔 2일차 ✨민니✨ 앨범 잉크도 마르기 전에 '헐'레벌떡 라이브 온 에어로 모셨습니다💗 | 정오의 희망곡 김신영입니다 | MBC 250122 방송 (2025-01-22)",
  title: "[FULL] 솔로 데뷔 2일차 ✨민니✨ 앨범 잉크도 마르기 전에 '헐'레벌떡 라이브 온 에어로 모셨습니다💗 | 정오의 희망곡 김신영입니다 | MBC 250122 방송 (2025-01-22)"
},
{
  link: "https://www.youtube.com/watch?v=HFYobCvufa8",
  category: "RADIO-PODCAST",
  member: "소연",
  year: "2024",
  thumbnail: "https://i.ytimg.com/vi/HFYobCvufa8/hqdefault.jpg",
  alt: "소연 - [FULL] 정희 대장님 ✨신디✨와 아이들 선장님 ✨소연✨ 조합❤️ 소리 대신 클락션 질러❗️| 정오의 희망곡 김신영입니다 | MBC 240722 방송 (2024-07-22)",
  title: "[FULL] 정희 대장님 ✨신디✨와 아이들 선장님 ✨소연✨ 조합❤️ 소리 대신 클락션 질러❗️| 정오의 희망곡 김신영입니다 | MBC 240722 방송 (2024-07-22)"
},
{
  link: "https://www.youtube.com/watch?v=Xsu0iUK_W8A",
  category: "RADIO-PODCAST",
  member: "미연,우기",
  year: "2024",
  thumbnail: "https://i.ytimg.com/vi/Xsu0iUK_W8A/hqdefault.jpg",
  alt: "미연,우기 - [Full ver.] 미연&우기가 밤라에 나온다!!!! 쪼꼬들 클락션 울려!!!🛞🚘✨ \"나잇투밋츄\" w/(여자)아이들 우기&미연 (2024-07-18)",
  title: "[Full ver.] 미연&우기가 밤라에 나온다!!!! 쪼꼬들 클락션 울려!!!🛞🚘✨ \"나잇투밋츄\" w/(여자)아이들 우기&미연 (2024-07-18)"
},
{
  link: "https://www.youtube.com/watch?v=XhO80sPC0u8",
  category: "RADIO-PODCAST",
  member: "아이들",
  year: "2024",
  thumbnail: "https://i.ytimg.com/vi/XhO80sPC0u8/hqdefault.jpg",
  alt: "아이들 - 이은지의 가요광장 with (여자)아이들 ((G)I-DLE) | KBS 240709(화) 방송 (2024-07-09)",
  title: "이은지의 가요광장 with (여자)아이들 ((G)I-DLE) | KBS 240709(화) 방송 (2024-07-09)"
},
{
  link: "https://www.youtube.com/watch?v=TLO_rkq7gBc",
  category: "RADIO-PODCAST",
  member: "소연",
  year: "2024",
  thumbnail: "https://i.ytimg.com/vi/TLO_rkq7gBc/hqdefault.jpg",
  alt: "소연 - [FULL] ✨전소연✨ 암더탑 Super Lady로 정희 접수완❤️｜정오의 희망곡 김신영입니다｜MBC 240214 방송 (2024-02-14)",
  title: "[FULL] ✨전소연✨ 암더탑 Super Lady로 정희 접수완❤️｜정오의 희망곡 김신영입니다｜MBC 240214 방송 (2024-02-14)"
},
{
  link: "https://www.youtube.com/watch?v=Z7akYetUqcI",
  category: "RADIO-PODCAST",
  member: "아이들",
  year: "2023",
  thumbnail: "https://i.ytimg.com/vi/Z7akYetUqcI/hqdefault.jpg",
  alt: "아이들 - (G)I-DLE Reveals Who They Would Like To Collaborate With (2023-08-09)",
  title: "(G)I-DLE Reveals Who They Would Like To Collaborate With (2023-08-09)"
},
{
  link: "https://www.youtube.com/watch?v=PryFedOdq9s",
  category: "RADIO-PODCAST",
  member: "아이들",
  year: "2023",
  thumbnail: "https://i.ytimg.com/vi/PryFedOdq9s/hqdefault.jpg",
  alt: "아이들 - (G)I-DLE Reveals Their Favorite Part About NYC (2023-08-09)",
  title: "(G)I-DLE Reveals Their Favorite Part About NYC (2023-08-09)"
},
{
  link: "https://www.youtube.com/watch?v=jhJSaQxl1zY",
  category: "RADIO-PODCAST",
  member: "민니,우기",
  year: "2023",
  thumbnail: "https://i.ytimg.com/vi/jhJSaQxl1zY/hqdefault.jpg",
  alt: "민니,우기 - [Full ver.] 디스했다가 훈훈했다가 여기 완전 💥찐남매 케미 맛집💥 l 나잇투밋츄 w. (여자)아이들 G)I-DLE 민니&우기 (2023-06-21)",
  title: "[Full ver.] 디스했다가 훈훈했다가 여기 완전 💥찐남매 케미 맛집💥 l 나잇투밋츄 w. (여자)아이들 G)I-DLE 민니&우기 (2023-06-21)"
},
{
  link: "https://www.youtube.com/watch?v=IU7MAHrW7Hg",
  category: "RADIO-PODCAST",
  member: "소연,미연,우기",
  year: "2023",
  thumbnail: "https://i.ytimg.com/vi/IU7MAHrW7Hg/hqdefault.jpg",
  alt: "소연,미연,우기 - [FULL] 그냥 예쁘게 태어.난.곤.데💕👑퀸카 (여자)아이들((G)I-DLE)👑 미연, 우기, 소연 보는 라디오 | 두시탈출 컬투쇼 (2023-05-31)",
  title: "[FULL] 그냥 예쁘게 태어.난.곤.데💕👑퀸카 (여자)아이들((G)I-DLE)👑 미연, 우기, 소연 보는 라디오 | 두시탈출 컬투쇼 (2023-05-31)"
},
{
  link: "https://www.youtube.com/watch?v=bRsmqbo5UOc",
  category: "RADIO-PODCAST",
  member: "아이들",
  year: "2023",
  thumbnail: "https://i.ytimg.com/vi/bRsmqbo5UOc/hqdefault.jpg",
  alt: "아이들 - 전설의 고수 with (여자)아이들 full ver. /[박명수의 라디오쇼]｜KBS 230522 방송 (2023-05-22)",
  title: "전설의 고수 with (여자)아이들 full ver. /[박명수의 라디오쇼]｜KBS 230522 방송 (2023-05-22)"
},
{
  link: "https://www.youtube.com/watch?v=v2Sb7KtK_tY",
  category: "RADIO-PODCAST",
  member: "소연,민니,미연",
  year: "2023",
  thumbnail: "https://i.ytimg.com/vi/v2Sb7KtK_tY/hqdefault.jpg",
  alt: "소연,민니,미연 - 이은지의 가요광장 with 아이들((G)I-DLE) 미연,민니,소연 230517 (2023-05-17)",
  title: "이은지의 가요광장 with 아이들((G)I-DLE) 미연,민니,소연 230517 (2023-05-17)"
},
{
  link: "https://www.youtube.com/watch?v=h4kcfz8Uea4",
  category: "RADIO-PODCAST",
  member: "아이들",
  year: "2023",
  thumbnail: "https://i.ytimg.com/vi/h4kcfz8Uea4/hqdefault.jpg",
  alt: "아이들 - 원샷초대석 with (여자)아이들 full ver. / [비투비의 키스 더 라디오] | KBS 230516 방송 (2023-05-16)",
  title: "원샷초대석 with (여자)아이들 full ver. / [비투비의 키스 더 라디오] | KBS 230516 방송 (2023-05-16)"
},
{
  link: "https://www.youtube.com/watch?v=pg0wx6nAGdQ",
  category: "RADIO-PODCAST",
  member: "아이들",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/pg0wx6nAGdQ/hqdefault.jpg",
  alt: "아이들 - 전설의 고수 with (여자)아이들 full ver. /[박명수의 라디오쇼]｜KBS 221114 방송 (2022-11-14)",
  title: "전설의 고수 with (여자)아이들 full ver. /[박명수의 라디오쇼]｜KBS 221114 방송 (2022-11-14)"
},
{
  link: "https://www.youtube.com/watch?v=S0YWmCh3CvM",
  category: "RADIO-PODCAST",
  member: "아이들",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/S0YWmCh3CvM/hqdefault.jpg",
  alt: "아이들 - [FULL][4K] (여자)아이들((G)I-DLE) | 박소현의 러브게임 | 금주의 인기가요 톱텐 | The K-pop Stars Radio (2022-11-12)",
  title: "[FULL][4K] (여자)아이들((G)I-DLE) | 박소현의 러브게임 | 금주의 인기가요 톱텐 | The K-pop Stars Radio (2022-11-12)"
},
{
  link: "https://www.youtube.com/watch?v=7uAq3vuboEI",
  category: "RADIO-PODCAST",
  member: "민니,미연,슈화",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/7uAq3vuboEI/hqdefault.jpg",
  alt: "민니,미연,슈화 - 기광 막힌 초대석 with (여자)아이들 (미연, 민니, 슈화) full ver./ [이기광의 가요광장] I KBS 221025 방송 (2022-10-25)",
  title: "기광 막힌 초대석 with (여자)아이들 (미연, 민니, 슈화) full ver./ [이기광의 가요광장] I KBS 221025 방송 (2022-10-25)"
},
{
  link: "https://www.youtube.com/watch?v=AgXZkCieP50",
  category: "RADIO-PODCAST",
  member: "아이들",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/AgXZkCieP50/hqdefault.jpg",
  alt: "아이들 - 볼륨 초대석 : 왔어요 with (여자)아이들 ((G)I-DLE) full ver./ [헤이즈의 볼륨을 높여요] I KBS 221024 방송 (2022-10-24)",
  title: "볼륨 초대석 : 왔어요 with (여자)아이들 ((G)I-DLE) full ver./ [헤이즈의 볼륨을 높여요] I KBS 221024 방송 (2022-10-24)"
},
{
  link: "https://www.youtube.com/watch?v=sRguxMpZMB0",
  category: "RADIO-PODCAST",
  member: "아이들",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/sRguxMpZMB0/hqdefault.jpg",
  alt: "아이들 - 비투비의 키스더라디오(BTOB Kiss the radio) with (G)I-DLE (여자)아이들 221020 (2022-10-20)",
  title: "비투비의 키스더라디오(BTOB Kiss the radio) with (G)I-DLE (여자)아이들 221020 (2022-10-20)"
},
{
  link: "https://www.youtube.com/watch?v=Avq13ocXYz8",
  category: "RADIO-PODCAST",
  member: "아이들",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/Avq13ocXYz8/hqdefault.jpg",
  alt: "아이들 - [FULL] 가장 (여자)아이들다운 모습을 입고 따따랏따라~ / GOT7 영재의 친한친구 / MBC 221020 방송 (2022-10-20)",
  title: "[FULL] 가장 (여자)아이들다운 모습을 입고 따따랏따라~ / GOT7 영재의 친한친구 / MBC 221020 방송 (2022-10-20)"
},
{
  link: "https://www.youtube.com/watch?v=ojYeaY5D8lk",
  category: "RADIO-PODCAST",
  member: "미연",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/ojYeaY5D8lk/hqdefault.jpg",
  alt: "미연 - [FULL] 비슷한 부분까지 닮은 최애의 조합 탄생💖 미연(MIYEON) 보는라디오 | 웬디의 영스트리트 | 220502 (2022-05-03)",
  title: "[FULL] 비슷한 부분까지 닮은 최애의 조합 탄생💖 미연(MIYEON) 보는라디오 | 웬디의 영스트리트 | 220502 (2022-05-03)"
},
{
  link: "https://www.youtube.com/watch?v=rylW3vpKSfk",
  category: "RADIO-PODCAST",
  member: "미연",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/rylW3vpKSfk/hqdefault.jpg",
  alt: "미연 - [FULL] 존재 자체가 프린세스❤️ 미연(MIYEON) | (여자)아이들((G)I-DLE) | 두시탈출 컬투쇼 | 220501 (2022-05-01)",
  title: "[FULL] 존재 자체가 프린세스❤️ 미연(MIYEON) | (여자)아이들((G)I-DLE) | 두시탈출 컬투쇼 | 220501 (2022-05-01)"
},
{
  link: "https://www.youtube.com/watch?v=loGopFmdBD0",
  category: "RADIO-PODCAST",
  member: "미연",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/loGopFmdBD0/hqdefault.jpg",
  alt: "미연 - 비투비의 키스더라디오(BTOB Kiss the radio) with 미연(아이들)(MIYEON((G)I-DLE)) 220427 (2022-04-27)",
  title: "비투비의 키스더라디오(BTOB Kiss the radio) with 미연(아이들)(MIYEON((G)I-DLE)) 220427 (2022-04-27)"
},
{
  link: "https://www.youtube.com/watch?v=qdYeb4z_F-Y",
  category: "RADIO-PODCAST",
  member: "민니,우기",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/qdYeb4z_F-Y/hqdefault.jpg",
  alt: "민니,우기 - [Full ver.] 펜타곤 신원이 아이들 민니&우기한테 소리지른 사연ㅋㅋㅋ l 나잇투밋츄 w.(여자)아이들 민니&우기 (2022-04-18)",
  title: "[Full ver.] 펜타곤 신원이 아이들 민니&우기한테 소리지른 사연ㅋㅋㅋ l 나잇투밋츄 w.(여자)아이들 민니&우기 (2022-04-18)"
},
{
  link: "https://www.youtube.com/watch?v=RwKaWHCHOkc",
  category: "RADIO-PODCAST",
  member: "민니,미연,우기",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/RwKaWHCHOkc/hqdefault.jpg",
  alt: "민니,미연,우기 - [FULL][4K] (여자)아이들((G)I-DLE) 미연, 우기, 민니  | 박소현의 러브게임 | 금주의 인기가요 톱텐 | The K-pop Stars Radio (2022-03-26)",
  title: "[FULL][4K] (여자)아이들((G)I-DLE) 미연, 우기, 민니  | 박소현의 러브게임 | 금주의 인기가요 톱텐 | The K-pop Stars Radio (2022-03-26)"
},
{
  link: "https://www.youtube.com/watch?v=R1PJt5KQak8",
  category: "RADIO-PODCAST",
  member: "소연",
  year: "2021",
  thumbnail: "https://i.ytimg.com/vi/R1PJt5KQak8/hqdefault.jpg",
  alt: "소연 - 라디오 토토 with 소연(of (여자)아이들) full ver. /[정은지의 가요광장] l KBS 210721 방송 (2021-07-21)",
  title: "라디오 토토 with 소연(of (여자)아이들) full ver. /[정은지의 가요광장] l KBS 210721 방송 (2021-07-21)"
},
{
  link: "https://www.youtube.com/watch?v=IGr-H7l8jcQ",
  category: "RADIO-PODCAST",
  member: "소연",
  year: "2021",
  thumbnail: "https://i.ytimg.com/vi/IGr-H7l8jcQ/hqdefault.jpg",
  alt: "소연 - 본인등판! 전소연 full ver. /[Day6의 키스 더 라디오] l kbs 210711방송 (2021-07-01)",
  title: "본인등판! 전소연 full ver. /[Day6의 키스 더 라디오] l kbs 210711방송 (2021-07-01)"
},
{
  link: "https://www.youtube.com/watch?v=3tVxtSw1Juk",
  category: "RADIO-PODCAST",
  member: "민니,미연",
  year: "2021",
  thumbnail: "https://i.ytimg.com/vi/3tVxtSw1Juk/hqdefault.jpg",
  alt: "민니,미연 - [FULL][4K] (여자)아이들((G)I-DLE) 민니, 미연 | 박소현의 러브게임 | 금주의 인기가요 톱텐 | The K-pop Stars Radio (2021-02-06)",
  title: "[FULL][4K] (여자)아이들((G)I-DLE) 민니, 미연 | 박소현의 러브게임 | 금주의 인기가요 톱텐 | The K-pop Stars Radio (2021-02-06)"
},
{
  link: "https://www.youtube.com/watch?v=jwWoos-T5aE",
  category: "RADIO-PODCAST",
  member: "아이들",
  year: "2021",
  thumbnail: "https://i.ytimg.com/vi/jwWoos-T5aE/hqdefault.jpg",
  alt: "아이들 - [FULL] 1위하고 달려온 (여자)아이들((G)I-DLE))🎉 보는 라디오 | 이준의 영스트리트 | 210122 (광고, 음악삭제) (2021-01-25)",
  title: "[FULL] 1위하고 달려온 (여자)아이들((G)I-DLE))🎉 보는 라디오 | 이준의 영스트리트 | 210122 (광고, 음악삭제) (2021-01-25)"
},
{
  link: "https://www.youtube.com/watch?v=eFe6ocZWY5E",
  category: "RADIO-PODCAST",
  member: "아이들",
  year: "2021",
  thumbnail: "https://i.ytimg.com/vi/eFe6ocZWY5E/hqdefault.jpg",
  alt: "아이들 - 본인등판 with  (여자)아이들((G)I-DLE) full ver. /[Day6의 키스 더 라디오] l kbs 210113 방송 (2021-01-13)",
  title: "본인등판 with  (여자)아이들((G)I-DLE) full ver. /[Day6의 키스 더 라디오] l kbs 210113 방송 (2021-01-13)"
},
{
  link: "https://www.youtube.com/watch?v=zEmJahH-WRw",
  category: "RADIO-PODCAST",
  member: "소연",
  year: "2020",
  thumbnail: "https://i.ytimg.com/vi/zEmJahH-WRw/hqdefault.jpg",
  alt: "소연 - [박소현의 러브게임] 🌟에라오 단독공개🌟(여자)아이들((G)I-DLE) 수진(Soojin), 소연(Soyeon) | K-pop special (2020-04-25)",
  title: "[박소현의 러브게임] 🌟에라오 단독공개🌟(여자)아이들((G)I-DLE) 수진(Soojin), 소연(Soyeon) | K-pop special (2020-04-25)"
},
{
  link: "https://www.youtube.com/watch?v=_n7d83zyV4Y",
  category: "RADIO-PODCAST",
  member: "아이들",
  year: "2020",
  thumbnail: "https://i.ytimg.com/vi/_n7d83zyV4Y/hqdefault.jpg",
  alt: "아이들 - [최파타]🎊 Oh my god 첫 그랜드슬램 🎊달성한(여자)아이들((G)I-DLE) | 보는 라디오 Full ver.│20200421 (광고, 음악삭제) (2020-04-21)",
  title: "[최파타]🎊 Oh my god 첫 그랜드슬램 🎊달성한(여자)아이들((G)I-DLE) | 보는 라디오 Full ver.│20200421 (광고, 음악삭제) (2020-04-21)"
},
{
  link: "https://www.youtube.com/watch?v=rclhcbOIcHc",
  category: "RADIO-PODCAST",
  member: "아이들",
  year: "2020",
  thumbnail: "https://i.ytimg.com/vi/rclhcbOIcHc/hqdefault.jpg",
  alt: "아이들 - 키스더 초대석 with (여자)아이들  full ver. /200414[박원의 키스 더 라디오] (2020-04-14)",
  title: "키스더 초대석 with (여자)아이들  full ver. /200414[박원의 키스 더 라디오] (2020-04-14)"
},
{
  link: "https://www.youtube.com/watch?v=4-hj0AyLz3k",
  category: "RADIO-PODCAST",
  member: "미연,우기",
  year: "2025",
  thumbnail: "https://i.ytimg.com/vi/4-hj0AyLz3k/hqdefault.jpg",
  alt: "미연,우기 - [FULL] 모든 G는 처단한다❌ 오롯이 'idle'이라는 이름으로 빛날 분금치✨아이들 미연&우기✨와 함께하는 브카☕️💜 | 이석훈의 브런치 카페 | MBC 250521 방송 (2025-05-21)",
  title: "[FULL] 모든 G는 처단한다❌ 오롯이 'idle'이라는 이름으로 빛날 분금치✨아이들 미연&우기✨와 함께하는 브카☕️💜 | 이석훈의 브런치 카페 | MBC 250521 방송 (2025-05-21)"
},
{
  link: "https://www.youtube.com/watch?v=gUSubxDc5vE",
  category: "RADIO-PODCAST",
  member: "민니,우기,슈화",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/gUSubxDc5vE/hqdefault.jpg",
  alt: "민니,우기,슈화 - [FULL] 🤟‘아이들이 아이들했다’🤟 (여자)아이들((G)I-DLE) 민니, 우기, 슈화 | 추적 30분 | 두시탈출 컬투쇼 | 220320 (2022-03-20)",
  title: "[FULL] 🤟‘아이들이 아이들했다’🤟 (여자)아이들((G)I-DLE) 민니, 우기, 슈화 | 추적 30분 | 두시탈출 컬투쇼 | 220320 (2022-03-20)"
},
{
  link: "https://www.youtube.com/watch?v=chMiGr_W8Zo",
  category: "RADIO-PODCAST",
  member: "아이들",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/chMiGr_W8Zo/hqdefault.jpg",
  alt: "아이들 - 원샷 초대석 with (여자)아이들((G)I-DLE) full ver. / [비투비의 키스 더 라디오] l KBS 220318 방송 (2022-03-18)",
  title: "원샷 초대석 with (여자)아이들((G)I-DLE) full ver. / [비투비의 키스 더 라디오] l KBS 220318 방송 (2022-03-18)"
},
{
  link: "https://www.youtube.com/watch?v=-nuwY7zCK-k",
  category: "RADIO-PODCAST",
  member: "아이들",
  year: "2020",
  thumbnail: "https://i.ytimg.com/vi/-nuwY7zCK-k/hqdefault.jpg",
  alt: "아이들 - 키스 더 음감회 with (여자)아이들((G)I-DLE) full ver. /200821[박원의 키스 더 라디오] (2020-08-21)",
  title: "키스 더 음감회 with (여자)아이들((G)I-DLE) full ver. /200821[박원의 키스 더 라디오] (2020-08-21)"
},
{
  link: "https://www.youtube.com/watch?v=7l2FpaYWP4Q",
  category: "RADIO-PODCAST",
  member: "소연,우기",
  year: "2020",
  thumbnail: "https://i.ytimg.com/vi/7l2FpaYWP4Q/hqdefault.jpg",
  alt: "소연,우기 - [박소현의 러브게임][4K]🌟에라오 단독공개🌟 금주의 인기가요 톱텐 | (여자)아이들((G)I-DLE) 소연,우기 | The K-pop Stars Radio (2020-08-15)",
  title: "[박소현의 러브게임][4K]🌟에라오 단독공개🌟 금주의 인기가요 톱텐 | (여자)아이들((G)I-DLE) 소연,우기 | The K-pop Stars Radio (2020-08-15)"
},
// 🔽 새로 불러온 50개 항목
{
  link: "https://www.youtube.com/watch?v=iXgtOKjLPEE",
  category: "BEHIND CLIPS",
  member: "아이들",
  year: "2025",
  thumbnail: "https://i.ytimg.com/vi/iXgtOKjLPEE/hqdefault.jpg",
  alt: "아이들 - '컴백 인터뷰' i-dle (아이들) #엠카운트다운 EP.889 | Mnet 250522 방송 (2025-05-22)",
  title: "'컴백 인터뷰' i-dle (아이들) #엠카운트다운 EP.889 | Mnet 250522 방송 (2025-05-22)"
},
{
  link: "https://www.youtube.com/watch?v=btkzg2Rl0XA",
  category: "BEHIND CLIPS",
  member: "민니",
  year: "2025",
  thumbnail: "https://i.ytimg.com/vi/btkzg2Rl0XA/hqdefault.jpg",
  alt: "민니 - (Videodump) MINNIE(민니) 'HER' | STUDIO CHOOM ORIGINAL (ENG SUB) (2025-02-06)",
  title: "(Videodump) MINNIE(민니) 'HER' | STUDIO CHOOM ORIGINAL (ENG SUB) (2025-02-06)"
},
{
  link: "https://www.youtube.com/watch?v=1QwRnpTX5vo",
  category: "BEHIND CLIPS",
  member: "아이들",
  year: "2025",
  thumbnail: "https://i.ytimg.com/vi/1QwRnpTX5vo/hqdefault.jpg",
  alt: "아이들 - 분위기 레전드(+) 아이들 썸네일 모음집📸 | 릴레이댄스 비하인드 (2025-05-27)",
  title: "분위기 레전드(+) 아이들 썸네일 모음집📸 | 릴레이댄스 비하인드 (2025-05-27)"
},
{
  link: "https://www.youtube.com/watch?v=cXmG6eKtP_4",
  category: "BEHIND CLIPS",
  member: "미연,우기",
  year: "2025",
  thumbnail: "https://i.ytimg.com/vi/cXmG6eKtP_4/hqdefault.jpg",
  alt: "미연,우기 - [4K] 공듀님 둘의 케미는 왕크게 봐야 좋으니까 💗왕크왕캠💗 아이들 미연&우기💜 (2025-05-21)",
  title: "[4K] 공듀님 둘의 케미는 왕크게 봐야 좋으니까 💗왕크왕캠💗 아이들 미연&우기💜 (2025-05-21)"
},
{
  link: "https://www.youtube.com/watch?v=0kSsoUhTvno",
  category: "BEHIND CLIPS",
  member: "아이들",
  year: "2025",
  thumbnail: "https://i.ytimg.com/vi/0kSsoUhTvno/hqdefault.jpg",
  alt: "아이들 - [골든디스크 백스테이지] (여자)아이들 ((G)I-DLE)｜The 39th Golden Disc Awards (2025-01-08)",
  title: "[골든디스크 백스테이지] (여자)아이들 ((G)I-DLE)｜The 39th Golden Disc Awards (2025-01-08)"
},
{
  link: "https://www.youtube.com/watch?v=GxL3PZar-hA",
  category: "BEHIND CLIPS",
  member: "아이들",
  year: "2025",
  thumbnail: "https://i.ytimg.com/vi/GxL3PZar-hA/hqdefault.jpg",
  alt: "아이들 - [MMA 비하인드캠🎥] 뽑기왕을 찾아라! 멜론뮤직어워드 백스테이지에선 무슨 일이?👀 | EP.02 #MMA2024 #멜론뮤직어워드 (2025-01-06)",
  title: "[MMA 비하인드캠🎥] 뽑기왕을 찾아라! 멜론뮤직어워드 백스테이지에선 무슨 일이?👀 | EP.02 #MMA2024 #멜론뮤직어워드 (2025-01-06)"
},
{
  link: "https://www.youtube.com/watch?v=6xE82Cnv8pI",
  category: "BEHIND CLIPS",
  member: "아이들",
  year: "2024",
  thumbnail: "https://i.ytimg.com/vi/6xE82Cnv8pI/hqdefault.jpg",
  alt: "아이들 - [마마미누] 2024 MAMA 대기실 판독기🔍부터 찐 VIP의 빅뱅 무대 리액션까지🙊 1초도 놓칠 수 없는 미미미누의 오사카 48시간! | MAMAMINU (ENG/JPN) (2024-12-16)",
  title: "[마마미누] 2024 MAMA 대기실 판독기🔍부터 찐 VIP의 빅뱅 무대 리액션까지🙊 1초도 놓칠 수 없는 미미미누의 오사카 48시간! | MAMAMINU (ENG/JPN) (2024-12-16)"
},
{
  link: "https://www.youtube.com/watch?v=YLqRfopWLaA",
  category: "BEHIND CLIPS",
  member: "아이들",
  year: "2024",
  thumbnail: "https://i.ytimg.com/vi/YLqRfopWLaA/hqdefault.jpg",
  alt: "아이들 - (Behind) (G)I-DLE ((여자)아이들) '클락션 (Klaxon)' | STUDIO CHOOM ORIGINAL (ENG SUB) (2024-07-23)",
  title: "(Behind) (G)I-DLE ((여자)아이들) '클락션 (Klaxon)' | STUDIO CHOOM ORIGINAL (ENG SUB) (2024-07-23)"
},
{
  link: "https://www.youtube.com/watch?v=k426nSKvkuc",
  category: "BEHIND CLIPS",
  member: "아이들",
  year: "2024",
  thumbnail: "https://i.ytimg.com/vi/k426nSKvkuc/hqdefault.jpg",
  alt: "아이들 - '미니 팬미팅' (여자)아이들 ((G)I-DLE) (with NEVERLAND ♥) #엠카운트다운 EP.852 | Mnet 240711 방송 (2024-07-11)",
  title: "'미니 팬미팅' (여자)아이들 ((G)I-DLE) (with NEVERLAND ♥) #엠카운트다운 EP.852 | Mnet 240711 방송 (2024-07-11)"
},
{
  link: "https://www.youtube.com/watch?v=b327aGnSV4s",
  category: "BEHIND CLIPS",
  member: "아이들",
  year: "2024",
  thumbnail: "https://i.ytimg.com/vi/b327aGnSV4s/hqdefault.jpg",
  alt: "아이들 - 골든 웨이브 〈여보세요 부스〉 풀버전 - 가수들의 [▶️추천 플레이리스트]를 들을 수 있는 공간! | JTBC 240504 방송 (2024-05-04)",
  title: "골든 웨이브 〈여보세요 부스〉 풀버전 - 가수들의 [▶️추천 플레이리스트]를 들을 수 있는 공간! | JTBC 240504 방송 (2024-05-04)"
},
{
  link: "https://www.youtube.com/watch?v=IBh1IEbqpjo",
  category: "BEHIND CLIPS",
  member: "아이들",
  year: "2023",
  thumbnail: "https://i.ytimg.com/vi/IBh1IEbqpjo/hqdefault.jpg",
  alt: "아이들 - [#2023MAMA] (G)I-DLE ((여자)아이들) REACTION CAM ♬MAMA SUPER STAGE (2023-12-08)",
  title: "[#2023MAMA] (G)I-DLE ((여자)아이들) REACTION CAM ♬MAMA SUPER STAGE (2023-12-08)"
},
{
  link: "https://www.youtube.com/watch?v=k8But4uOCDI",
  category: "BEHIND CLIPS",
  member: "아이들",
  year: "2024",
  thumbnail: "https://i.ytimg.com/vi/k8But4uOCDI/hqdefault.jpg",
  alt: "소연 - (여자)아이들 전소연 막내 VS 언니 차별 이슈 | #Gotcha37 #GIDLE #shorts (2024-02-09)",
  title: "(여자)아이들 전소연 막내 VS 언니 차별 이슈 | #Gotcha37 #GIDLE #shorts (2024-02-09)"
},
{
  link: "https://www.youtube.com/watch?v=lIiKTLz0igo",
  category: "BEHIND CLIPS",
  member: "아이들",
  year: "2024",
  thumbnail: "https://i.ytimg.com/vi/lIiKTLz0igo/hqdefault.jpg",
  alt: "아이들 - [EN/JP] '미니 팬미팅' (여자)아이들 ((G)I-DLE) (with NEVERLAND ♥) #엠카운트다운 EP.827 | Mnet 240201 방송 (2024-02-01)",
  title: "[EN/JP] '미니 팬미팅' (여자)아이들 ((G)I-DLE) (with NEVERLAND ♥) #엠카운트다운 EP.827 | Mnet 240201 방송 (2024-02-01)"
},
{
  link: "https://www.youtube.com/watch?v=wcyYkKNEnGA",
  category: "BEHIND CLIPS",
  member: "아이들",
  year: "2023",
  thumbnail: "https://i.ytimg.com/vi/wcyYkKNEnGA/hqdefault.jpg",
  alt: "아이들 - ✨엠카 800회 기념✨ ⏰ 엠카 800 챌린지 ✦ 특별판 ✦ MC 허니여니 편 (2023-06-11)",
  title: "✨엠카 800회 기념✨ ⏰ 엠카 800 챌린지 ✦ 특별판 ✦ MC 허니여니 편 (2023-06-11)"
},
{
  link: "https://www.youtube.com/watch?v=lHOdneHI9n4",
  category: "BEHIND CLIPS",
  member: "아이들",
  year: "2023",
  thumbnail: "https://i.ytimg.com/vi/lHOdneHI9n4/hqdefault.jpg",
  alt: "아이들 - (ENG) [쇼챔직캠미방] 🚨네버랜드 참고🚨 (여자)아이들 콘서트 드레스 코드👑 l #GIDLE l #쇼챔피언 (2023-06-11)",
  title: "(ENG) [쇼챔직캠미방] 🚨네버랜드 참고🚨 (여자)아이들 콘서트 드레스 코드👑 l #GIDLE l #쇼챔피언 (2023-06-11)"
},
{
  link: "https://www.youtube.com/watch?v=1jyJCP4325E",
  category: "BEHIND CLIPS",
  member: "아이들",
  year: "2023",
  thumbnail: "https://i.ytimg.com/vi/1jyJCP4325E/hqdefault.jpg",
  alt: "아이들 - ✨엠카 800회 기념✨ 엠카 백일장 📝 | 주헌 (몬스타엑스), (여자)아이들, AB6IX(에이비식스), Xdinary Heroes, LE SSERAFIM, xikers(싸이커스) (2023-06-10)",
  title: "✨엠카 800회 기념✨ 엠카 백일장 📝 | 주헌 (몬스타엑스), (여자)아이들, AB6IX(에이비식스), Xdinary Heroes, LE SSERAFIM, xikers(싸이커스) (2023-06-10)"
},
{
  link: "https://www.youtube.com/watch?v=-_mBU0inx0g",
  category: "BEHIND CLIPS",
  member: "아이들",
  year: "2023",
  thumbnail: "https://i.ytimg.com/vi/-_mBU0inx0g/hqdefault.jpg",
  alt: "아이들 - [직캠 보고서🔍] 네버랜드 '퀸'받게 하는 아이들 모음.ZIP👑 #여자아이들 #퀸카 #Queencard #Shorts (2023-06-02)",
  title: "[직캠 보고서🔍] 네버랜드 '퀸'받게 하는 아이들 모음.ZIP👑 #여자아이들 #퀸카 #Queencard #Shorts (2023-06-02)"
},
{
  link: "https://www.youtube.com/watch?v=pTaKYCHPbis",
  category: "BEHIND CLIPS",
  member: "아이들",
  year: "2023",
  thumbnail: "https://i.ytimg.com/vi/pTaKYCHPbis/hqdefault.jpg",
  alt: "아이들 - (여자)아이들((G)-IDLE) 1theKILLPO 비하인드│원더킬포│퀸카(Queencard)│BEHIND│미연 민니 소연 우기 슈화 (2023-05-30)",
  title: "(여자)아이들((G)-IDLE) 1theKILLPO 비하인드│원더킬포│퀸카(Queencard)│BEHIND│미연 민니 소연 우기 슈화 (2023-05-30)"
},
{
  link: "https://www.youtube.com/watch?v=m_ZuuKj2a1Y",
  category: "BEHIND CLIPS",
  member: "아이들",
  year: "2023",
  thumbnail: "https://i.ytimg.com/vi/m_ZuuKj2a1Y/hqdefault.jpg",
  alt: "아이들 - [쇼! 음악중심] 암어 퀸~카 암어암어암어 퀸~카♩♬♪└(^o^ ))┐┌(( ^o^)┘♩♬♪ #여자아이들 #GIDLE #퀸카 #Queencard #Shorts (2023-05-25)",
  title: "[쇼! 음악중심] 암어 퀸~카 암어암어암어 퀸~카♩♬♪└(^o^ ))┐┌(( ^o^)┘♩♬♪ #여자아이들 #GIDLE #퀸카 #Queencard #Shorts (2023-05-25)"
},
{
  link: "https://www.youtube.com/watch?v=eql5fVKWiZw",
  category: "BEHIND CLIPS",
  member: "아이들",
  year: "2023",
  thumbnail: "https://i.ytimg.com/vi/eql5fVKWiZw/hqdefault.jpg",
  alt: "아이들 - [직캠 보고서🔍] ~퀸카의 조건~ 기들 퀸카와 함께 트월킹으로 입장하기👑💖 #GIDLE #퀸카 #Shorts (2023-05-25)",
  title: "[직캠 보고서🔍] ~퀸카의 조건~ 기들 퀸카와 함께 트월킹으로 입장하기👑💖 #GIDLE #퀸카 #Shorts (2023-05-25)"
},
{
  link: "https://www.youtube.com/watch?v=13NG42eAaV4",
  category: "BEHIND CLIPS",
  member: "아이들",
  year: "2023",
  thumbnail: "https://i.ytimg.com/vi/13NG42eAaV4/hqdefault.jpg",
  alt: "아이들 - [EN/JP] [썸썸썸] 퀸카들이 사진 찍는 법? 사실 (여자)아이들도 모름 | (G)I-DLE - 퀸카(Queencard) 썸네일 쟁탈전 (2023-05-24)",
  title: "[EN/JP] [썸썸썸] 퀸카들이 사진 찍는 법? 사실 (여자)아이들도 모름 | (G)I-DLE - 퀸카(Queencard) 썸네일 쟁탈전 (2023-05-24)"
},
{
  link: "https://www.youtube.com/watch?v=6NWpalFqdvo",
  category: "BEHIND CLIPS",
  member: "아이들",
  year: "2023",
  thumbnail: "https://i.ytimg.com/vi/6NWpalFqdvo/hqdefault.jpg",
  alt: "아이들 - [릴레이 의리 게임] 번갯불에 퀸카 홍보하기 #릴레이의리게임 #여자아이들 #퀸카 (2023-05-23)",
  title: "[릴레이 의리 게임] 번갯불에 퀸카 홍보하기 #릴레이의리게임 #여자아이들 #퀸카 (2023-05-23)"
},
{
  link: "https://www.youtube.com/watch?v=um8hiCb6FuA",
  category: "BEHIND CLIPS",
  member: "아이들",
  year: "2023",
  thumbnail: "https://i.ytimg.com/vi/um8hiCb6FuA/hqdefault.jpg",
  alt: "아이들 - [EN/JP] [Mnet PRIME SHOW] 싸이가 된 (여자)아이들! 그리고 그들이 선택한 싸이의 곡은? | Mnet 230329 방송 (2023-03-29)",
  title: "[EN/JP] [Mnet PRIME SHOW] 싸이가 된 (여자)아이들! 그리고 그들이 선택한 싸이의 곡은? | Mnet 230329 방송 (2023-03-29)"
},
{
  link: "https://www.youtube.com/watch?v=iuZJTnAhzbU",
  category: "BEHIND CLIPS",
  member: "아이들",
  year: "2023",
  thumbnail: "https://i.ytimg.com/vi/iuZJTnAhzbU/hqdefault.jpg",
  alt: "아이들 - [탐스제로] (G)I-DLE 메이킹필름 (2023-03-17)",
  title: "[탐스제로] (G)I-DLE 메이킹필름 (2023-03-17)"
},
{
  link: "https://www.youtube.com/watch?v=FeNFC7pDFCE",
  category: "BEHIND CLIPS",
  member: "미연",
  year: "2023",
  thumbnail: "https://i.ytimg.com/vi/FeNFC7pDFCE/hqdefault.jpg",
  alt: "미연 - (여자)아이들 미연 ((G)I-DLE Mi-yeon) Backstage Quiz Show I 써클차트 뮤직 어워즈 2022 (2023-02-28)",
  title: "(여자)아이들 미연 ((G)I-DLE Mi-yeon) Backstage Quiz Show I 써클차트 뮤직 어워즈 2022 (2023-02-28)"
},
{
  link: "https://www.youtube.com/watch?v=v0vqrTzBQCw",
  category: "BEHIND CLIPS",
  member: "아이들",
  year: "2023",
  thumbnail: "https://i.ytimg.com/vi/v0vqrTzBQCw/hqdefault.jpg",
  alt: "아이들 - DREAM STAGE🌟 | (G)I-DLE ((여자)아이들) | KCON 2023 THAILAND (2023-02-28)",
  title: "DREAM STAGE🌟 | (G)I-DLE ((여자)아이들) | KCON 2023 THAILAND (2023-02-28)"
},
{
  link: "https://www.youtube.com/watch?v=VfYdvIpTP3g",
  category: "BEHIND CLIPS",
  member: "민니",
  year: "2023",
  thumbnail: "https://i.ytimg.com/vi/VfYdvIpTP3g/hqdefault.jpg",
  alt: "민니 - 【偶像建起來EP.5-2】(G)I-DLE默契考驗竟公然作弊？！小顆粒MINNIE現學現賣中文超強！ㅣ來作客吧 (2023-02-06)",
  title: "【偶像建起來EP.5-2】(G)I-DLE默契考驗竟公然作弊？！小顆粒MINNIE現學現賣中文超強！ㅣ來作客吧 (2023-02-06)"
},
{
  link: "https://www.youtube.com/watch?v=rD5dwCd1be0",
  category: "BEHIND CLIPS",
  member: "아이들",
  year: "2023",
  thumbnail: "https://i.ytimg.com/vi/rD5dwCd1be0/hqdefault.jpg",
  alt: "아이들 - 【偶像建起來EP.5-1】來台參加紅白的(G)I-DLE對成員的初印象居然是？！舒華直接在夜市舉辦小型見面會？小娟是天使製作人？ㅣ來作客吧 (2023-02-06)",
  title: "【偶像建起來EP.5-1】來台參加紅白的(G)I-DLE對成員的初印象居然是？！舒華直接在夜市舉辦小型見面會？小娟是天使製作人？ㅣ來作客吧 (2023-02-06)"
},
{
  link: "https://www.youtube.com/watch?v=i590uREMrf8",
  category: "BEHIND CLIPS",
  member: "아이들",
  year: "2023",
  thumbnail: "https://i.ytimg.com/vi/i590uREMrf8/hqdefault.jpg",
  alt: "아이들 - [제32회 서울가요대상 SMA 백스테이지 인터뷰] (여자)아이들((G)I-DLE) (2023-01-25)",
  title: "[제32회 서울가요대상 SMA 백스테이지 인터뷰] (여자)아이들((G)I-DLE) (2023-01-25)"
},
{
  link: "https://www.youtube.com/watch?v=B-SynolBfVs",
  category: "BEHIND CLIPS",
  member: "민니,우기",
  year: "2023",
  thumbnail: "https://i.ytimg.com/vi/B-SynolBfVs/hqdefault.jpg",
  alt: "민니,우기 - [The 32nd SMA BACKSTAGE] 민니, 우기 화보 촬영(??)현장 Minnie, Yuqi Photoshoot scene(??) (2023-01-23)",
  title: "[The 32nd SMA BACKSTAGE] 민니, 우기 화보 촬영(??)현장 Minnie, Yuqi Photoshoot scene(??) (2023-01-23)"
},
{
  link: "https://www.youtube.com/watch?v=eezUny53aS8",
  category: "BEHIND CLIPS",
  member: "민니",
  year: "2023",
  thumbnail: "https://i.ytimg.com/vi/eezUny53aS8/hqdefault.jpg",
  alt: "민니 - 【Oh!8 Pick (G)I-DLE】｜小顆粒MINNIE中文饒口令超標準 舒華開口即認輸｜Oh!8歐叭 (2023-01-22)",
  title: "【Oh!8 Pick (G)I-DLE】｜小顆粒MINNIE中文饒口令超標準 舒華開口即認輸｜Oh!8歐叭 (2023-01-22)"
},
{
  link: "https://www.youtube.com/watch?v=dz-D0mi_TzU",
  category: "BEHIND CLIPS",
  member: "민니",
  year: "2023",
  thumbnail: "https://i.ytimg.com/vi/dz-D0mi_TzU/hqdefault.jpg",
  alt: "민니 - [ENG SUB] 直擊(G)I-DLE《紅白》化妝間：Minnie五國語言拜年！舒華下次想嘗試彩虹髮色？｜Getting Ready With｜Vogue Taiwan (2023-01-21)",
  title: "[ENG SUB] 直擊(G)I-DLE《紅白》化妝間：Minnie五國語言拜年！舒華下次想嘗試彩虹髮色？｜Getting Ready With｜Vogue Taiwan (2023-01-21)"
},
{
  link: "https://www.youtube.com/watch?v=ChNYXVtUwjo",
  category: "BEHIND CLIPS",
  member: "우기",
  year: "2023",
  thumbnail: "https://i.ytimg.com/vi/ChNYXVtUwjo/hqdefault.jpg",
  alt: "우기 - [The 32nd SMA BACKSTAGE] (여자)아이들 우기의 오페라 데뷔? (G)I-DLE Yuqi's Opera Debut? (2023-01-20)",
  title: "[The 32nd SMA BACKSTAGE] (여자)아이들 우기의 오페라 데뷔? (G)I-DLE Yuqi's Opera Debut? (2023-01-20)"
},
{
  link: "https://www.youtube.com/watch?v=21vEBIsrsTM",
  category: "BEHIND CLIPS",
  member: "소연",
  year: "2023",
  thumbnail: "https://i.ytimg.com/vi/21vEBIsrsTM/hqdefault.jpg",
  alt: "소연 - 리그 오브 레전드 플레이어 여러분에게 전하는 메시지 💞 (Feat. 소연 (여자)아이들) (2023-01-18)",
  title: "리그 오브 레전드 플레이어 여러분에게 전하는 메시지 💞 (Feat. 소연 (여자)아이들) (2023-01-18)"
},
{
  link: "https://www.youtube.com/watch?v=B5CHZK7_lbM",
  category: "BEHIND CLIPS",
  member: "아이들",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/B5CHZK7_lbM/hqdefault.jpg",
  alt: "아이들 - [2022 SBS 가요대전] 아이들이 스포하는 #2022가요대전 은?!🎁 #Dive_into_Kpop_in_Korea (2022-12-24)",
  title: "[2022 SBS 가요대전] 아이들이 스포하는 #2022가요대전 은?!🎁 #Dive_into_Kpop_in_Korea (2022-12-24)"
},
{
  link: "https://www.youtube.com/watch?v=0lNIW_a4QP4",
  category: "BEHIND CLIPS",
  member: "아이들",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/0lNIW_a4QP4/hqdefault.jpg",
  alt: "아이들 - [2022 MAMA BEHIND] 자우림 X (G)I-DLE 의 스페셜 컬래버! | Mnet 221220 방송 (2022-12-20)",
  title: "[2022 MAMA BEHIND] 자우림 X (G)I-DLE 의 스페셜 컬래버! | Mnet 221220 방송 (2022-12-20)"
},
{
  link: "https://www.youtube.com/watch?v=lpWiDKZLsHc",
  category: "BEHIND CLIPS",
  member: "소연",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/lpWiDKZLsHc/hqdefault.jpg",
  alt: "소연 - [2022 MAMA BEHIND] 지코 X (G)I-DLE 소연 의 스페셜 컬래버! | Mnet 221220 방송 (2022-12-20)",
  title: "[2022 MAMA BEHIND] 지코 X (G)I-DLE 소연 의 스페셜 컬래버! | Mnet 221220 방송 (2022-12-20)"
},
{
  link: "https://www.youtube.com/watch?v=TLr8zmZDua8",
  category: "BEHIND CLIPS",
  member: "아이들",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/TLr8zmZDua8/hqdefault.jpg",
  alt: "아이들 - [메이킹] 올겨울 해외갈때 여기어때 비하인드😎 Part2 (2022-11-30)",
  title: "[메이킹] 올겨울 해외갈때 여기어때 비하인드😎 Part2 (2022-11-30)"
},
{
  link: "https://www.youtube.com/watch?v=pFnu1BjAuME",
  category: "BEHIND CLIPS",
  member: "아이들",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/pFnu1BjAuME/hqdefault.jpg",
  alt: "아이들 - [MMA2022 | 수상소감] 올해의 뮤직비디오 - (여자)아이들 | #gidle #여자아이들 #MMA2022 (2022-11-27)",
  title: "[MMA2022 | 수상소감] 올해의 뮤직비디오 - (여자)아이들 | #gidle #여자아이들 #MMA2022 (2022-11-27)"
},
{
  link: "https://www.youtube.com/watch?v=KWCmFH77HF8",
  category: "BEHIND CLIPS",
  member: "아이들",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/KWCmFH77HF8/hqdefault.jpg",
  alt: "아이들 - [MMA2022 | 수상소감] 송라이터 -  (여자)아이들 전소연 | #gidle #여자아이들 #MMA2022 (2022-11-27)",
  title: "[MMA2022 | 수상소감] 송라이터 -  (여자)아이들 전소연 | #gidle #여자아이들 #MMA2022 (2022-11-27)"
},
{
  link: "https://www.youtube.com/watch?v=sqaVw0bFbVk",
  category: "BEHIND CLIPS",
  member: "아이들",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/sqaVw0bFbVk/hqdefault.jpg",
  alt: "아이들 - 엔플라잉 (N.Flying), (여자)아이들 ((G)I-DLE),  Play List, 백스테이지 [비하인드 더쇼 221025] (2022-11-23)",
  title: "엔플라잉 (N.Flying), (여자)아이들 ((G)I-DLE),  Play List, 백스테이지 [비하인드 더쇼 221025] (2022-11-23)"
},
{
  link: "https://www.youtube.com/watch?v=y8mrMkCVHpE",
  category: "BEHIND CLIPS",
  member: "아이들",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/y8mrMkCVHpE/hqdefault.jpg",
  alt: "아이들 - [2022 MAMA] STAR COUNTDOWN D-8 by (G)I-DLE (2022-11-29)",
  title: "[2022 MAMA] STAR COUNTDOWN D-8 by (G)I-DLE (2022-11-29)"
},
{
  link: "https://www.youtube.com/watch?v=PdJYRCpnuX8",
  category: "BEHIND CLIPS",
  member: "소연",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/PdJYRCpnuX8/hqdefault.jpg",
  alt: "소연 - [읽덕직캠] (여자)아이들 소연의 'MY BAG' 레전드 입덕직캠 댓글 읽기💬 (ENG SUB) (2022-11-19)",
  title: "[읽덕직캠] (여자)아이들 소연의 'MY BAG' 레전드 입덕직캠 댓글 읽기💬 (ENG SUB) (2022-11-19)"
},
{
  link: "https://www.youtube.com/watch?v=Fndha4cwgjQ",
  category: "BEHIND CLIPS",
  member: "아이들",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/Fndha4cwgjQ/hqdefault.jpg",
  alt: "아이들 - 2022 GMA | 지니뮤직어워드 백스테이지 인터뷰🎤 | #아이들 편 (2022-11-18)",
  title: "2022 GMA | 지니뮤직어워드 백스테이지 인터뷰🎤 | #아이들 편 (2022-11-18)"
},
{
  link: "https://www.youtube.com/watch?v=eo8FBwE_uok",
  category: "BEHIND CLIPS",
  member: "민니",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/eo8FBwE_uok/hqdefault.jpg",
  alt: "민니 - 민니의 태국 최애 음식?🤔 민니 태국여행 밸런스게임🇹🇭❤️ #태국갈때여기어때 #shorts (2022-11-18)",
  title: "민니의 태국 최애 음식?🤔 민니 태국여행 밸런스게임🇹🇭❤️ #태국갈때여기어때 #shorts (2022-11-18)"
},
{
  link: "https://www.youtube.com/watch?v=ZtJWPKTiLhg",
  category: "BEHIND CLIPS",
  member: "아이들",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/ZtJWPKTiLhg/hqdefault.jpg",
  alt: "아이들 - (여자)아이들(I-DLE) \"멋진 상 주신 네버랜드에게 보답할게요\" | (G)I-DLE Top Ten Awards China 1st place (2022-11-14)",
  title: "(여자)아이들(I-DLE) \"멋진 상 주신 네버랜드에게 보답할게요\" | (G)I-DLE Top Ten Awards China 1st place (2022-11-14)"
},
{
  link: "https://www.youtube.com/watch?v=-1P80jG4_rQ",
  category: "BEHIND CLIPS",
  member: "아이들",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/-1P80jG4_rQ/hqdefault.jpg",
  alt: "아이들 - [인기가요대신가드림] 인기가요 무대에 야유하는 팬들이 있다? 아이들 사녹 비하인드🎥🎬 (2022-11-12)",
  title: "[인기가요대신가드림] 인기가요 무대에 야유하는 팬들이 있다? 아이들 사녹 비하인드🎥🎬 (2022-11-12)"
},
{
  link: "https://www.youtube.com/watch?v=Ury7kAczq20",
  category: "BEHIND CLIPS",
  member: "아이들",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/Ury7kAczq20/hqdefault.jpg",
  alt: "아이들 - [퇴근길 LIVE 4K] 아이들(GIDLE)이 보여주는 퇴근의 본모습! 다따랏따라와💨 (2022-11-07)",
  title: "[퇴근길 LIVE 4K] 아이들(GIDLE)이 보여주는 퇴근의 본모습! 다따랏따라와💨 (2022-11-07)"
},
{
  link: "https://www.youtube.com/watch?v=UcuKUSiPj2Y",
  category: "BEHIND CLIPS",
  member: "소연,우기,슈화",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/UcuKUSiPj2Y/hqdefault.jpg",
  alt: "소연,우기,슈화 - [벌칙영상] 어떤 모습이어도 사랑해💗 (여자)아이들((G)I-DLE) 슈화&소연&우기 서로 칭찬해주기✨ / [비투비의 키스 더 라디오] l KBS 221020 방송 (2022-10-20)",
  title: "[벌칙영상] 어떤 모습이어도 사랑해💗 (여자)아이들((G)I-DLE) 슈화&소연&우기 서로 칭찬해주기✨ / [비투비의 키스 더 라디오] l KBS 221020 방송 (2022-10-20)"
},
{
  link: "https://www.youtube.com/watch?v=1-91Dfmfa0g",
  category: "BEHIND CLIPS",
  member: "미연",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/1-91Dfmfa0g/hqdefault.jpg",
  alt: "미연 - [엠카운트다운] 〈다시 만난 세계〉 엠카 보컬 챌린지 비하인드 | 뉴진스(NewJeans), STAYC(스테이씨), 최예나, (여자)아이들 미연, 우주소녀 연정, VIVIZ 은하 (2022-10-14)",
  title: "[엠카운트다운] 〈다시 만난 세계〉 엠카 보컬 챌린지 비하인드 | 뉴진스(NewJeans), STAYC(스테이씨), 최예나, (여자)아이들 미연, 우주소녀 연정, VIVIZ 은하 (2022-10-14)"
},

// 🔽 새로 불러온 50개 항목
{
  link: "https://www.youtube.com/watch?v=8-9adUyfnjg",
  category: "BEHIND CLIPS",
  member: "미연",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/8-9adUyfnjg/hqdefault.jpg",
  alt: "미연 - [쇼챔 백스테이지] 나는 너무 걱정돼..너네가 쇼챔 오면 천국은 누가 지켜..천사가 지상에 있어도 되는 건가...★ (유나이트/미연/문별/베리베리)│쇼챔피언 비하인드 EP.234 (2022-05-12)",
  title: "[쇼챔 백스테이지] 나는 너무 걱정돼..너네가 쇼챔 오면 천국은 누가 지켜..천사가 지상에 있어도 되는 건가...★ (유나이트/미연/문별/베리베리)│쇼챔피언 비하인드 EP.234 (2022-05-12)"
},
{
  link: "https://www.youtube.com/watch?v=_zquu-8e_wA",
  category: "BEHIND CLIPS",
  member: "미연",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/_zquu-8e_wA/hqdefault.jpg",
  alt: "미연 - 어린이날 맞이🧒 웃음과 비명이 난무하는 엠카 GAME ZONE🕹️ 근데 이제 극딜을 곁들인.. | MC 윤수&미연, DKZ, IVE, VICTON(빅톤), 드림캐쳐, CRAVITY (2022-05-06)",
  title: "어린이날 맞이🧒 웃음과 비명이 난무하는 엠카 GAME ZONE🕹️ 근데 이제 극딜을 곁들인.. | MC 윤수&미연, DKZ, IVE, VICTON(빅톤), 드림캐쳐, CRAVITY (2022-05-06)"
},
{
  link: "https://www.youtube.com/watch?v=kuylxZ9jqf8",
  category: "BEHIND CLIPS",
  member: "미연",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/kuylxZ9jqf8/hqdefault.jpg",
  alt: "미연 - 미연이 고른 이모지는? 네버랜드🏰 VS 에버랜드🎢 | #이모지오 #shorts (2022-05-06)",
  title: "미연이 고른 이모지는? 네버랜드🏰 VS 에버랜드🎢 | #이모지오 #shorts (2022-05-06)"
},
{
  link: "https://www.youtube.com/watch?v=hhdm9fZZN4I",
  category: "BEHIND CLIPS",
  member: "미연",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/hhdm9fZZN4I/hqdefault.jpg",
  alt: "미연 - 미연 벌칙 언박싱! 'Drive' 에 맞춰 'TOMBOY' 춤추기//ㅣSTATION Zㅣ미연의 언박싱ㅣKBS 220430 방송 (2022-04-29)",
  title: "미연 벌칙 언박싱! 'Drive' 에 맞춰 'TOMBOY' 춤추기//ㅣSTATION Zㅣ미연의 언박싱ㅣKBS 220430 방송 (2022-04-29)"
},
{
  link: "https://www.youtube.com/watch?v=qmYHgLtgRlg",
  category: "BEHIND CLIPS",
  member: "아이들",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/qmYHgLtgRlg/hqdefault.jpg",
  alt: "아이들 - [BE ORIGINAL] (G)I-DLE ((여자)아이들) 'TOMBOY' (Behind) (ENG SUB) (2022-04-02)",
  title: "[BE ORIGINAL] (G)I-DLE ((여자)아이들) 'TOMBOY' (Behind) (ENG SUB) (2022-04-02)"
},
{
  link: "https://www.youtube.com/watch?v=ezQB9ycyvz8",
  category: "BEHIND CLIPS",
  member: "민니",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/ezQB9ycyvz8/hqdefault.jpg",
  alt: "민니 - [쇼챔 백스테이지] 민니 어머니까지 취향저격‼ 갓띵곡 TOMBOY로 쇼챔까지 찢은 기들..★ l #쇼챔피언비하인드 l EP.229 (2022-03-31)",
  title: "[쇼챔 백스테이지] 민니 어머니까지 취향저격‼ 갓띵곡 TOMBOY로 쇼챔까지 찢은 기들..★ l #쇼챔피언비하인드 l EP.229 (2022-03-31)"
},
{
  link: "https://www.youtube.com/watch?v=SPgnFHmur9w",
  category: "BEHIND CLIPS",
  member: "아이들",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/SPgnFHmur9w/hqdefault.jpg",
  alt: "아이들 - [퇴근길 LIVE 4K] JUST I-DLE 이것이 아이들의 퇴근길 애티튜드! (2022-03-28)",
  title: "[퇴근길 LIVE 4K] JUST I-DLE 이것이 아이들의 퇴근길 애티튜드! (2022-03-28)"
},
{
  link: "https://www.youtube.com/watch?v=KlcS-kr_cIM",
  category: "BEHIND CLIPS",
  member: "아이들",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/KlcS-kr_cIM/hqdefault.jpg",
  alt: "아이들 - [EN/JP] [썸썸썸] 꽤나 멋진 꼬깔 네일을 장만한 (여자)아이들 | (G)I-DLE - TOMBOY 썸네일 쟁탈전 (2022-03-23)",
  title: "[EN/JP] [썸썸썸] 꽤나 멋진 꼬깔 네일을 장만한 (여자)아이들 | (G)I-DLE - TOMBOY 썸네일 쟁탈전 (2022-03-23)"
},
{
  link: "https://www.youtube.com/watch?v=I6XlTOGYGTM",
  category: "BEHIND CLIPS",
  member: "아이들",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/I6XlTOGYGTM/hqdefault.jpg",
  alt: "아이들 - [벌칙영상] (여자)아이들((G)I-DLE) ‘TOMBOY(톰보이)’ 2배속 댄스💖/ [비투비의 키스 더 라디오] l KBS 220318 방송 (2022-03-18)",
  title: "[벌칙영상] (여자)아이들((G)I-DLE) ‘TOMBOY(톰보이)’ 2배속 댄스💖/ [비투비의 키스 더 라디오] l KBS 220318 방송 (2022-03-18)"
},
{
  link: "https://www.youtube.com/watch?v=-efi4z6crnY",
  category: "BEHIND CLIPS",
  member: "소연",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/-efi4z6crnY/hqdefault.jpg",
  alt: "소연 - [비하인드] 전소연과 함께하는 두근두근 촉감게임❤ (feat. 찐.팬. 제작진이 준비한 선물) [유희열의 스케치북/You Heeyeol’s Sketchbook] | KBS 방송 (2022-02-11)",
  title: "[비하인드] 전소연과 함께하는 두근두근 촉감게임❤ (feat. 찐.팬. 제작진이 준비한 선물) [유희열의 스케치북/You Heeyeol’s Sketchbook] | KBS 방송 (2022-02-11)"
},
{
  link: "https://www.youtube.com/watch?v=zqb5gzZA01U",
  category: "BEHIND CLIPS",
  member: "아이들",
  year: "2021",
  thumbnail: "https://i.ytimg.com/vi/zqb5gzZA01U/hqdefault.jpg",
  alt: "아이들 - 아이돌에서 아티스트로 능력을 갖춘 남다른 매력💕 (여자)아이들((G)I-DLE) JTBC 팩추얼(JTBC FACTUAL) | JTBC 210501 방송 (2021-05-01)",
  title: "아이돌에서 아티스트로 능력을 갖춘 남다른 매력💕 (여자)아이들((G)I-DLE) JTBC 팩추얼(JTBC FACTUAL) | JTBC 210501 방송 (2021-05-01)"
},
{
  link: "https://www.youtube.com/watch?v=qQvauroKlI8",
  category: "BEHIND CLIPS",
  member: "아이들",
  year: "2021",
  thumbnail: "https://i.ytimg.com/vi/qQvauroKlI8/hqdefault.jpg",
  alt: "아이들 - 잊지 못할 경험🤩 K/DA 가상 캐릭터와 같이 공연을 했던 (여자)아이들((G)I-DLE) JTBC 팩추얼(JTBC FACTUAL) | JTBC 210501 방송 (2021-05-01)",
  title: "잊지 못할 경험🤩 K/DA 가상 캐릭터와 같이 공연을 했던 (여자)아이들((G)I-DLE) JTBC 팩추얼(JTBC FACTUAL) | JTBC 210501 방송 (2021-05-01)"
},
{
  link: "https://www.youtube.com/watch?v=dy4F2QdzZ8o",
  category: "BEHIND CLIPS",
  member: "슈화",
  year: "2021",
  thumbnail: "https://i.ytimg.com/vi/dy4F2QdzZ8o/hqdefault.jpg",
  alt: "슈화 - 슈화에게 XX을 발음 시키면 고장이 난다?!!? 뽀짝미 폭발하는 (여자)아이들 [답해서 잠금해제] #여자아이들 #답잠 (2021-02-06)",
  title: "슈화에게 XX을 발음 시키면 고장이 난다?!!? 뽀짝미 폭발하는 (여자)아이들 [답해서 잠금해제] #여자아이들 #답잠 (2021-02-06)"
},
{
  link: "https://www.youtube.com/watch?v=GMUVwyWrWrA",
  category: "BEHIND CLIPS",
  member: "아이들",
  year: "2021",
  thumbnail: "https://i.ytimg.com/vi/GMUVwyWrWrA/hqdefault.jpg",
  alt: "아이들 - (여자)아이들((G)I-DLE), 크래비티(CRAVITY) 컨택 비하인드 [비하인드 더 쇼 210126] (2021-02-05)",
  title: "(여자)아이들((G)I-DLE), 크래비티(CRAVITY) 컨택 비하인드 [비하인드 더 쇼 210126] (2021-02-05)"
},
{
  link: "https://www.youtube.com/watch?v=kJbbMBkbAgs",
  category: "BEHIND CLIPS",
  member: "아이들",
  year: "2021",
  thumbnail: "https://i.ytimg.com/vi/kJbbMBkbAgs/hqdefault.jpg",
  alt: "아이들 - [챔피언송] (여자)아이들의 화(火花) 첫 1위! l #쇼챔피언비하인드 l EP.189 (2021-01-26)",
  title: "[챔피언송] (여자)아이들의 화(火花) 첫 1위! l #쇼챔피언비하인드 l EP.189 (2021-01-26)"
},
{
  link: "https://www.youtube.com/watch?v=ldPkhD8WJU8",
  category: "BEHIND CLIPS",
  member: "아이들",
  year: "2021",
  thumbnail: "https://i.ytimg.com/vi/ldPkhD8WJU8/hqdefault.jpg",
  alt: "아이들 - 네버랜드 맘에 불을 지핀♨ 아이들 불꽃♥ l #쇼챔피언비하인드 l EP.189 (2021-01-26)",
  title: "네버랜드 맘에 불을 지핀♨ 아이들 불꽃♥ l #쇼챔피언비하인드 l EP.189 (2021-01-26)"
},
{
  link: "https://www.youtube.com/watch?v=K6lTRwB4w_4",
  category: "BEHIND CLIPS",
  member: "아이들",
  year: "2021",
  thumbnail: "https://i.ytimg.com/vi/K6lTRwB4w_4/hqdefault.jpg",
  alt: "아이들 - [ENG] [BEHIND THE SCENE - (G)I-DLE] KPOP TV Show #엠카운트다운 | M COUNTDOWN EP.695 (2021-01-21)",
  title: "[ENG] [BEHIND THE SCENE - (G)I-DLE] KPOP TV Show #엠카운트다운 | M COUNTDOWN EP.695 (2021-01-21)"
},
{
  link: "https://www.youtube.com/watch?v=bBks-KJqVL8",
  category: "BEHIND CLIPS",
  member: "슈화",
  year: "2021",
  thumbnail: "https://i.ytimg.com/vi/bBks-KJqVL8/hqdefault.jpg",
  alt: "슈화 - [EN/JP] [썸썸썸] (여자)아이들 슈화, 게임 하다가 언니들에게 냅다 \"야!!!\"라고 부른 썰 | (G)I-DLE - 화(火花) 썸네일 쟁탈전 (2021-01-21)",
  title: "[EN/JP] [썸썸썸] (여자)아이들 슈화, 게임 하다가 언니들에게 냅다 \"야!!!\"라고 부른 썰 | (G)I-DLE - 화(火花) 썸네일 쟁탈전 (2021-01-21)"
},
{
  link: "https://www.youtube.com/watch?v=jJ5ML_CQSFY",
  category: "BEHIND CLIPS",
  member: "아이들",
  year: "2021",
  thumbnail: "https://i.ytimg.com/vi/jJ5ML_CQSFY/hqdefault.jpg",
  alt: "아이들 - [Show Champion] [줍줍 TIME] 화려하게 꽃피운 (여자)아이들의 치명미♥ l EP.381 (2021-01-20)",
  title: "[Show Champion] [줍줍 TIME] 화려하게 꽃피운 (여자)아이들의 치명미♥ l EP.381 (2021-01-20)"
},
{
  link: "https://www.youtube.com/watch?v=zFxULkjVOEs",
  category: "BEHIND CLIPS",
  member: "아이들",
  year: "2021",
  thumbnail: "https://i.ytimg.com/vi/zFxULkjVOEs/hqdefault.jpg",
  alt: "아이들 - 🔥 화(火花)(HWAA) 🔥 2배속 댄스 /[DAY6의 키스 더 라디오] l KBS 210113 방송 (2021-01-13)",
  title: "🔥 화(火花)(HWAA) 🔥 2배속 댄스 /[DAY6의 키스 더 라디오] l KBS 210113 방송 (2021-01-13)"
},
{
  link: "https://www.youtube.com/watch?v=89norapeIl4",
  category: "BEHIND CLIPS",
  member: "아이들",
  year: "2020",
  thumbnail: "https://i.ytimg.com/vi/89norapeIl4/hqdefault.jpg",
  alt: "아이들 - [#여자아이들 슈퍼온택트 비하인드] ＂아이돌이라는 자신감이 다시 나왔어요🤟＂ / 폴라로이드 사진 촬영 현장📸 (2020-10-23)",
  title: "[#여자아이들 슈퍼온택트 비하인드] ＂아이돌이라는 자신감이 다시 나왔어요🤟＂ / 폴라로이드 사진 촬영 현장📸 (2020-10-23)"
},
{
  link: "https://www.youtube.com/watch?v=L40hFFNoRN4",
  category: "BEHIND CLIPS",
  member: "아이들",
  year: "2020",
  thumbnail: "https://i.ytimg.com/vi/L40hFFNoRN4/hqdefault.jpg",
  alt: "아이들 - [쇼챔비하인드 FULL] 태양처럼 ?강렬한? 한여름의 축제! l (여자)아이들((G)I-DLE) 'DUMDi DUMDi' behind (2020-10-20)",
  title: "[쇼챔비하인드 FULL] 태양처럼 ?강렬한? 한여름의 축제! l (여자)아이들((G)I-DLE) 'DUMDi DUMDi' behind (2020-10-20)"
},
{
  link: "https://www.youtube.com/watch?v=N_b7oFlmG3w",
  category: "BEHIND CLIPS",
  member: "소연",
  year: "2020",
  thumbnail: "https://i.ytimg.com/vi/N_b7oFlmG3w/hqdefault.jpg",
  alt: "소연 - 천재만 보는 나비가 있대.. 그래서 전소연만 볼 수 있대.. l #쇼챔피언비하인드 l EP.161 (2020-05-05)",
  title: "천재만 보는 나비가 있대.. 그래서 전소연만 볼 수 있대.. l #쇼챔피언비하인드 l EP.161 (2020-05-05)"
},
{
  link: "https://www.youtube.com/watch?v=d6lmphiZ3ds",
  category: "BEHIND CLIPS",
  member: "아이들",
  year: "2020",
  thumbnail: "https://i.ytimg.com/vi/d6lmphiZ3ds/hqdefault.jpg",
  alt: "아이들 - 에이핑크, (여자)아이들 페이스티켓 [비하인드 더 쇼 200421] (2020-05-03)",
  title: "에이핑크, (여자)아이들 페이스티켓 [비하인드 더 쇼 200421] (2020-05-03)"
},
{
  link: "https://www.youtube.com/watch?v=bwO046TMRXQ",
  category: "BEHIND CLIPS",
  member: "아이들",
  year: "2020",
  thumbnail: "https://i.ytimg.com/vi/bwO046TMRXQ/hqdefault.jpg",
  alt: "아이들 - [Show Champion] [줍줍 TIME] 차고 넘친 (여자)아이들 매력 능력치 Max♥ l EP.351 (2020-04-29)",
  title: "[Show Champion] [줍줍 TIME] 차고 넘친 (여자)아이들 매력 능력치 Max♥ l EP.351 (2020-04-29)"
},
{
  link: "https://www.youtube.com/watch?v=L9p-4UaEf2I",
  category: "BEHIND CLIPS",
  member: "아이들",
  year: "2020",
  thumbnail: "https://i.ytimg.com/vi/L9p-4UaEf2I/hqdefault.jpg",
  alt: "아이들 - 퇴근을 너무 '사랑해♥'버린 아이들의 퇴근길은 Oh my god! [퇴근길 LIVE] (2020-04-29)",
  title: "퇴근을 너무 '사랑해♥'버린 아이들의 퇴근길은 Oh my god! [퇴근길 LIVE] (2020-04-29)"
},
{
  link: "https://www.youtube.com/watch?v=4DUG8wAZNNc",
  category: "BEHIND CLIPS",
  member: "우기",
  year: "2020",
  thumbnail: "https://i.ytimg.com/vi/4DUG8wAZNNc/hqdefault.jpg",
  alt: "우기 - 왕 크니까 왕 귀여운 송우기 초근접 CAM♥ l #쇼챔피언비하인드 l EP.160 (2020-04-28)",
  title: "왕 크니까 왕 귀여운 송우기 초근접 CAM♥ l #쇼챔피언비하인드 l EP.160 (2020-04-28)"
},
{
  link: "https://www.youtube.com/watch?v=g1STXl8lHtM",
  category: "BEHIND CLIPS",
  member: "아이들",
  year: "2020",
  thumbnail: "https://i.ytimg.com/vi/g1STXl8lHtM/hqdefault.jpg",
  alt: "아이들 - '(여자)아이들'만의 S/S 패션 TIP #리액션#장인 l #쇼챔피언비하인드 l EP.160 (2020-04-28)",
  title: "'(여자)아이들'만의 S/S 패션 TIP #리액션#장인 l #쇼챔피언비하인드 l EP.160 (2020-04-28)"
},
{
  link: "https://www.youtube.com/watch?v=1ISy8dR-a2Q",
  category: "BEHIND CLIPS",
  member: "아이들",
  year: "2020",
  thumbnail: "https://i.ytimg.com/vi/1ISy8dR-a2Q/hqdefault.jpg",
  alt: "아이들 - 'Oh my god'으로 돌아온 몽환돌 (여자)아이들 l #쇼챔피언비하인드 l EP.160 (2020-04-28)",
  title: "'Oh my god'으로 돌아온 몽환돌 (여자)아이들 l #쇼챔피언비하인드 l EP.160 (2020-04-28)"
},
{
  link: "https://www.youtube.com/watch?v=ZWXN2CCYkfw",
  category: "BEHIND CLIPS",
  member: "소연",
  year: "2020",
  thumbnail: "https://i.ytimg.com/vi/ZWXN2CCYkfw/hqdefault.jpg",
  alt: "소연 - (여자)아이들((G)I-DLE) 소연이(SOYEON) 최근에 받은 택배는? [TD셀피인터뷰] (2020-04-27)",
  title: "(여자)아이들((G)I-DLE) 소연이(SOYEON) 최근에 받은 택배는? [TD셀피인터뷰] (2020-04-27)"
},
{
  link: "https://www.youtube.com/watch?v=Hc01-xYBSNE",
  category: "BEHIND CLIPS",
  member: "아이들",
  year: "2020",
  thumbnail: "https://i.ytimg.com/vi/Hc01-xYBSNE/hqdefault.jpg",
  alt: "아이들 - [ENG] [엠카뮤비 메이킹] ✨큐티빠띠뽀띠✨ (여자)아이들 'Superstar' 엠카 뮤비 비하인드 (2020-04-17)",
  title: "[ENG] [엠카뮤비 메이킹] ✨큐티빠띠뽀띠✨ (여자)아이들 'Superstar' 엠카 뮤비 비하인드 (2020-04-17)"
},
{
  link: "https://www.youtube.com/watch?v=4sFR80Ko6-o",
  category: "BEHIND CLIPS",
  member: "슈화",
  year: "2020",
  thumbnail: "https://i.ytimg.com/vi/4sFR80Ko6-o/hqdefault.jpg",
  alt: "슈화 - (여자)아이들((G)I-DLE) 수진(SOOJIN)은 인형, 슈화(SHUHUA)는 냉동 인간? [TD습격영상] (2020-04-07)",
  title: "(여자)아이들((G)I-DLE) 수진(SOOJIN)은 인형, 슈화(SHUHUA)는 냉동 인간? [TD습격영상] (2020-04-07)"
},
{
  link: "https://www.youtube.com/watch?v=tvf9DTC_n0I",
  category: "BEHIND CLIPS",
  member: "우기",
  year: "2020",
  thumbnail: "https://i.ytimg.com/vi/tvf9DTC_n0I/hqdefault.jpg",
  alt: "우기 - \"기승전 우기의 사랑\" 애정 넘치는 (여자)아이들 [대기실 습격 인터뷰] (2020-03-17)",
  title: "\"기승전 우기의 사랑\" 애정 넘치는 (여자)아이들 [대기실 습격 인터뷰] (2020-03-17)"
},
{
  link: "https://www.youtube.com/watch?v=xCf8h_3qi7Y",
  category: "BEHIND CLIPS",
  member: "우기",
  year: "2020",
  thumbnail: "https://i.ytimg.com/vi/xCf8h_3qi7Y/hqdefault.jpg",
  alt: "우기 - 대기실 셀프CAM (여자)아이들 편_02 큐브 천재 송우기｜Waiting Room Self-CAM with (G)I-DLE_02 Cube Genius YUQI (2020-03-06)",
  title: "대기실 셀프CAM (여자)아이들 편_02 큐브 천재 송우기｜Waiting Room Self-CAM with (G)I-DLE_02 Cube Genius YUQI (2020-03-06)"
},
{
  link: "https://www.youtube.com/watch?v=GI9blP-ReRc",
  category: "BEHIND CLIPS",
  member: "아이들",
  year: "2020",
  thumbnail: "https://i.ytimg.com/vi/GI9blP-ReRc/hqdefault.jpg",
  alt: "아이들 - 대기실 셀프CAM (여자)아이들 편_01 아이들의 연습게임｜Waiting Room Self-CAM with (G)I-DLE_01 I-DLE's practice game (2020-03-04)",
  title: "대기실 셀프CAM (여자)아이들 편_01 아이들의 연습게임｜Waiting Room Self-CAM with (G)I-DLE_01 I-DLE's practice game (2020-03-04)"
},
{
  link: "https://www.youtube.com/watch?v=x9uDEYGxVnk",
  category: "BEHIND CLIPS",
  member: "아이들",
  year: "2020",
  thumbnail: "https://i.ytimg.com/vi/x9uDEYGxVnk/hqdefault.jpg",
  alt: "아이들 - [쇼챔비하인드.zip] (여자)아이들 'Uh-Oh' 백스테이지 Full l (G)I-DLE (2020-01-04)",
  title: "[쇼챔비하인드.zip] (여자)아이들 'Uh-Oh' 백스테이지 Full l (G)I-DLE (2020-01-04)"
},
{
  link: "https://www.youtube.com/watch?v=SzHrw9BKVwM",
  category: "BEHIND CLIPS",
  member: "아이들",
  year: "2020",
  thumbnail: "https://i.ytimg.com/vi/SzHrw9BKVwM/hqdefault.jpg",
  alt: "아이들 - [쇼챔비하인드.zip] (여자)아이들 'LATATA' 백스테이지 Full l (G)I-DLE (2020-01-04)",
  title: "[쇼챔비하인드.zip] (여자)아이들 'LATATA' 백스테이지 Full l (G)I-DLE (2020-01-04)"
},
{
  link: "https://www.youtube.com/watch?v=HFr8bpWn0es",
  category: "BEHIND CLIPS",
  member: "아이들",
  year: "2020",
  thumbnail: "https://i.ytimg.com/vi/HFr8bpWn0es/hqdefault.jpg",
  alt: "아이들 - [쇼챔비하인드.zip] (여자)아이들 'Senorita' 백스테이지 Full l (G)I-DLE (2020-01-04)",
  title: "[쇼챔비하인드.zip] (여자)아이들 'Senorita' 백스테이지 Full l (G)I-DLE (2020-01-04)"
},
{
  link: "https://www.youtube.com/watch?v=DCzC6tbIcyg",
  category: "BEHIND CLIPS",
  member: "아이들",
  year: "2019",
  thumbnail: "https://i.ytimg.com/vi/DCzC6tbIcyg/hqdefault.jpg",
  alt: "아이들 - [K-LOG] (여자)아이들! 태국에서 족발도 뜯고 무대도 잘하고~♡ | Ep.2 @KCON19TH (ENG SUB) (2019-11-01)",
  title: "[K-LOG] (여자)아이들! 태국에서 족발도 뜯고 무대도 잘하고~♡ | Ep.2 @KCON19TH (ENG SUB) (2019-11-01)"
},
{
  link: "https://www.youtube.com/watch?v=vgNtfaWSEUs",
  category: "BEHIND CLIPS",
  member: "아이들",
  year: "2018",
  thumbnail: "https://i.ytimg.com/vi/vgNtfaWSEUs/hqdefault.jpg",
  alt: "아이들 - [2018MAMA x M2] (여자)아이들((G)I-DLE) at 땡큐스테이지(Thank You Stage) in KOREA (2018-12-10)",
  title: "[2018MAMA x M2] (여자)아이들((G)I-DLE) at 땡큐스테이지(Thank You Stage) in KOREA (2018-12-10)"
},
{
  link: "https://www.youtube.com/watch?v=mxlqvIAmDRY",
  category: "BEHIND CLIPS",
  member: "아이들",
  year: "2018",
  thumbnail: "https://i.ytimg.com/vi/mxlqvIAmDRY/hqdefault.jpg",
  alt: "아이들 - [KCON2018TH x M2] (여자)아이들((G)I-DLE) Ending Finale Self Camera (2018-10-11)",
  title: "[KCON2018TH x M2] (여자)아이들((G)I-DLE) Ending Finale Self Camera (2018-10-11)"
},
{
  link: "https://www.youtube.com/watch?v=w3iVpRjSn1c",
  category: "BEHIND CLIPS",
  member: "미연,우기",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/w3iVpRjSn1c/hqdefault.jpg",
  alt: "미연,우기 - [쇼챔비하인드.zip] 혼자서도 무대 꽉 채우는 여자 솔로 가수 비하인드 모음zip l 우기, 미연, 예나, 유주, 권은비, 문별 (2022-05-29)",
  title: "[쇼챔비하인드.zip] 혼자서도 무대 꽉 채우는 여자 솔로 가수 비하인드 모음zip l 우기, 미연, 예나, 유주, 권은비, 문별 (2022-05-29)"
},
{
  link: "https://www.youtube.com/watch?v=c4Vo2Z37BpI",
  category: "BEHIND CLIPS",
  member: "우기",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/c4Vo2Z37BpI/hqdefault.jpg",
  alt: "우기 - [쇼챔 백스테이지] 쇼챔보고 공짜 개안하고 나의 성공시대 시작됐다...★ (우기/우즈/르세라핌/클라씨/딴콩민) l #쇼챔피언비하인드 l EP.235 (2022-05-19)",
  title: "[쇼챔 백스테이지] 쇼챔보고 공짜 개안하고 나의 성공시대 시작됐다...★ (우기/우즈/르세라핌/클라씨/딴콩민) l #쇼챔피언비하인드 l EP.235 (2022-05-19)"
},
{
  link: "https://www.youtube.com/watch?v=KImxTpPzLnE",
  category: "BEHIND CLIPS",
  member: "아이들",
  year: "2021",
  thumbnail: "https://i.ytimg.com/vi/KImxTpPzLnE/hqdefault.jpg",
  alt: "아이들 - [ING터뷰] 거짓말 하기 있기? 없기? 노필터 토크🤭 포커페이싱터뷰 START | 어른연습생 편 (2021-11-10)",
  title: "[ING터뷰] 거짓말 하기 있기? 없기? 노필터 토크🤭 포커페이싱터뷰 START | 어른연습생 편 (2021-11-10)"
},
{
  link: "https://www.youtube.com/watch?v=7yUBBqIthwI",
  category: "BEHIND CLIPS",
  member: "아이들",
  year: "2020",
  thumbnail: "https://i.ytimg.com/vi/7yUBBqIthwI/hqdefault.jpg",
  alt: "아이들 - (여자)아이들((G)I-DLE) 페이스티켓 [비하인드 더 쇼 200811] (2020-09-04)",
  title: "(여자)아이들((G)I-DLE) 페이스티켓 [비하인드 더 쇼 200811] (2020-09-04)"
},
{
  link: "https://www.youtube.com/watch?v=vzB4D1wqqLg",
  category: "BEHIND CLIPS",
  member: "아이들",
  year: "2020",
  thumbnail: "https://i.ytimg.com/vi/vzB4D1wqqLg/hqdefault.jpg",
  alt: "아이들 - [쇼챔비하인드 FULL] 몽환×카리스마로 네버랜드들 정신 다 뺏어가는 아이들..☆ l (여자)아이들((G)I-DLE) 'Oh my god' behind (2020-05-30)",
  title: "[쇼챔비하인드 FULL] 몽환×카리스마로 네버랜드들 정신 다 뺏어가는 아이들..☆ l (여자)아이들((G)I-DLE) 'Oh my god' behind (2020-05-30)"
},
{
  link: "https://www.youtube.com/watch?v=Jw9eWqScvWc",
  category: "BEHIND CLIPS",
  member: "아이들",
  year: "2019",
  thumbnail: "https://i.ytimg.com/vi/Jw9eWqScvWc/hqdefault.jpg",
  alt: "아이들 - [ENG sub] (여자)아이들((G)I-DLE) 'Uh-Oh' M COUNTDOWN 사전녹화 비하인드 (2019-07-02)",
  title: "[ENG sub] (여자)아이들((G)I-DLE) 'Uh-Oh' M COUNTDOWN 사전녹화 비하인드 (2019-07-02)"
},
{
  link: "https://www.youtube.com/watch?v=rBnlxgfGGTI",
  category: "BEHIND CLIPS",
  member: "아이들",
  year: "2019",
  thumbnail: "https://i.ytimg.com/vi/rBnlxgfGGTI/hqdefault.jpg",
  alt: "아이들 - (G)I-DLE, Cube family medley is so sweet that eardrums melt. [Dream Concert 2019, Behind] (2019-06-11)",
  title: "(G)I-DLE, Cube family medley is so sweet that eardrums melt. [Dream Concert 2019, Behind] (2019-06-11)"
},
{
  link: "https://www.youtube.com/watch?v=dFoXDP1E_Mo",
  category: "BEHIND CLIPS",
  member: "아이들",
  year: "2019",
  thumbnail: "https://i.ytimg.com/vi/dFoXDP1E_Mo/hqdefault.jpg",
  alt: "아이들 - (G)I-DLE, Insider battle Chapter5 [Dream Concert 2019, Behind] (2019-05-28)",
  title: "(G)I-DLE, Insider battle Chapter5 [Dream Concert 2019, Behind] (2019-05-28)"
},
{
  link: "https://www.youtube.com/watch?v=Sk2XQvGQVFo",
  category: "BEHIND CLIPS",
  member: "아이들",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/Sk2XQvGQVFo/hqdefault.jpg",
  alt: "아이들 - [MMA X 1theK] 지금 무슨 노래 듣고 계세요? in MMA | 너의 플리가 들려 | what's in your playlist | @MMA2022 (2022-12-17)",
  title: "[MMA X 1theK] 지금 무슨 노래 듣고 계세요? in MMA | 너의 플리가 들려 | what's in your playlist | @MMA2022 (2022-12-17)"
},

// 🔽 새로 불러온 26개 항목
{
  link: "https://www.youtube.com/watch?v=YVkA7KMwJYc",
  category: "BEHIND CLIPS",
  member: "아이들",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/YVkA7KMwJYc/hqdefault.jpg",
  alt: "아이들 - [MMA X 1theK] 아이들에게 큐브란..? 멜뮤와서 원더케이 혼내고 간 (여자)아이들((G)I-DLE) | 진격의 킹보드 | KINGboard | @MMA2022 (2022-12-12)",
  title: "[MMA X 1theK] 아이들에게 큐브란..? 멜뮤와서 원더케이 혼내고 간 (여자)아이들((G)I-DLE) | 진격의 킹보드 | KINGboard | @MMA2022 (2022-12-12)"
},
{
  link: "https://www.youtube.com/watch?v=u1sEy9RAqjI",
  category: "BEHIND CLIPS",
  member: "아이들",
  year: "2020",
  thumbnail: "https://i.ytimg.com/vi/u1sEy9RAqjI/hqdefault.jpg",
  alt: "아이들 - 네버랜드를 향한 사랑 가득 담은 아이들 그립톡♥ l #쇼챔피언비하인드 l EP.176 (2020-08-25)",
  title: "네버랜드를 향한 사랑 가득 담은 아이들 그립톡♥ l #쇼챔피언비하인드 l EP.176 (2020-08-25)"
},
{
  link: "https://www.youtube.com/watch?v=yKIVAQmi-Qk",
  category: "BEHIND CLIPS",
  member: "아이들",
  year: "2020",
  thumbnail: "https://i.ytimg.com/vi/yKIVAQmi-Qk/hqdefault.jpg",
  alt: "아이들 - 컴백과 동시에 '첫 1위'한 (여자)아이들! l #쇼챔피언비하인드 l EP.175 (2020-08-18)",
  title: "컴백과 동시에 '첫 1위'한 (여자)아이들! l #쇼챔피언비하인드 l EP.175 (2020-08-18)"
},
{
  link: "https://www.youtube.com/watch?v=Ee5JkpEWQRA",
  category: "BEHIND CLIPS",
  member: "아이들",
  year: "2020",
  thumbnail: "https://i.ytimg.com/vi/Ee5JkpEWQRA/hqdefault.jpg",
  alt: "아이들 - (여자)아이들의 가방 속 필수템 소개 TIME l #쇼챔피언비하인드 l EP.175 (2020-08-18)",
  title: "(여자)아이들의 가방 속 필수템 소개 TIME l #쇼챔피언비하인드 l EP.175 (2020-08-18)"
},
{
  link: "https://www.youtube.com/watch?v=t0fYdXYLmVE",
  category: "BEHIND CLIPS",
  member: "아이들",
  year: "2020",
  thumbnail: "https://i.ytimg.com/vi/t0fYdXYLmVE/hqdefault.jpg",
  alt: "아이들 - 강렬하고 시원한 (여자)아이들 '덤디덤디'♪ 컴백 l #쇼챔피언비하인드 l EP.175 (2020-08-18)",
  title: "강렬하고 시원한 (여자)아이들 '덤디덤디'♪ 컴백 l #쇼챔피언비하인드 l EP.175 (2020-08-18)"
},
{
  link: "https://www.youtube.com/watch?v=X-h-wsY4uwI",
  category: "BEHIND CLIPS",
  member: "아이들",
  year: "2020",
  thumbnail: "https://i.ytimg.com/vi/X-h-wsY4uwI/hqdefault.jpg",
  alt: "아이들 - [퇴근길 LIVE] 여름night 더위를 날려줄 아이들의 퇴근길 두구 둥! 네버랜드 심장 Dumdi Dumdi 할 준비 됐어?! (2020-08-14)",
  title: "[퇴근길 LIVE] 여름night 더위를 날려줄 아이들의 퇴근길 두구 둥! 네버랜드 심장 Dumdi Dumdi 할 준비 됐어?! (2020-08-14)"
},
{
  link: "https://www.youtube.com/watch?v=ILo5Q6FnpG8",
  category: "BEHIND CLIPS",
  member: "소연",
  year: "2020",
  thumbnail: "https://i.ytimg.com/vi/ILo5Q6FnpG8/hqdefault.jpg",
  alt: "소연 - [Show Champion] [음.소.거♪] 천재 아이돌 갓소연의 '덤디덤디' 작업기! l EP.366 (2020-08-12)",
  title: "[Show Champion] [음.소.거♪] 천재 아이돌 갓소연의 '덤디덤디' 작업기! l EP.366 (2020-08-12)"
},
{
  link: "https://www.youtube.com/watch?v=C8jl3hLBB5I",
  category: "BEHIND CLIPS",
  member: "아이들",
  year: "2020",
  thumbnail: "https://i.ytimg.com/vi/C8jl3hLBB5I/hqdefault.jpg",
  alt: "아이들 - (여자)아이들 촬영 스태프 체험 VLOGㅣDUMDi DUMDiㅣ뮤플리 스페셜 비하인드 (2020-08-07)",
  title: "(여자)아이들 촬영 스태프 체험 VLOGㅣDUMDi DUMDiㅣ뮤플리 스페셜 비하인드 (2020-08-07)"
},
{
  link: "https://www.youtube.com/watch?v=IAVpVNEt9bs",
  category: "BEHIND CLIPS",
  member: "아이들",
  year: "2021",
  thumbnail: "https://i.ytimg.com/vi/IAVpVNEt9bs/hqdefault.jpg",
  alt: "아이들 - [멀티캠] (여자)아이들 - 화(火花) ((G)I-DLE - HWAA) l #쇼챔피언비하인드 l EP.189 (2021-01-26)",
  title: "[멀티캠] (여자)아이들 - 화(火花) ((G)I-DLE - HWAA) l #쇼챔피언비하인드 l EP.189 (2021-01-26)"
},
{
  link: "https://www.youtube.com/watch?v=Zyc1zfQf81U",
  category: "BEHIND CLIPS",
  member: "아이들",
  year: "2023",
  thumbnail: "https://i.ytimg.com/vi/Zyc1zfQf81U/hqdefault.jpg",
  alt: "아이들 - [EN/JP] '컴백 인터뷰' with (여자)아이들 #엠카운트다운 EP.797 | Mnet 230518 방송 (2023-05-18)",
  title: "[EN/JP] '컴백 인터뷰' with (여자)아이들 #엠카운트다운 EP.797 | Mnet 230518 방송 (2023-05-18)"
},
{
  link: "https://www.youtube.com/watch?v=WYmBh5tE6iU",
  category: "BEHIND CLIPS",
  member: "아이들",
  year: "2023",
  thumbnail: "https://i.ytimg.com/vi/WYmBh5tE6iU/hqdefault.jpg",
  alt: "아이들 - (ENG)[MusicBank Interview Cam](여자)아이들 ((G)I-DLE Interview)l @MusicBank KBS 230526 (2023-05-26)",
  title: "(ENG)[MusicBank Interview Cam](여자)아이들 ((G)I-DLE Interview)l @MusicBank KBS 230526 (2023-05-26)"
},
{
  link: "https://www.youtube.com/watch?v=tQarRFapPeA",
  category: "BEHIND CLIPS",
  member: "아이들",
  year: "2021",
  thumbnail: "https://i.ytimg.com/vi/tQarRFapPeA/hqdefault.jpg",
  alt: "아이들 - 화려하게 꽃피운 (여자)아이들의 '화(火花)'♪ 컴백 l #쇼챔피언비하인드 l EP.189 (2021-01-26)",
  title: "화려하게 꽃피운 (여자)아이들의 '화(火花)'♪ 컴백 l #쇼챔피언비하인드 l EP.189 (2021-01-26)"
},
{
  link: "https://www.youtube.com/watch?v=iWmjp-hWkL4",
  category: "BEHIND CLIPS",
  member: "아이들",
  year: "2020",
  thumbnail: "https://i.ytimg.com/vi/iWmjp-hWkL4/hqdefault.jpg",
  alt: "아이들 - [ENG] [BEHIND THE SCENE - (G)I-DLE] KPOP TV Show | M COUNTDOWN 200423 EP.662 (2020-04-23)",
  title: "[ENG] [BEHIND THE SCENE - (G)I-DLE] KPOP TV Show | M COUNTDOWN 200423 EP.662 (2020-04-23)"
},
{
  link: "https://www.youtube.com/watch?v=mfXQVeOiUwU",
  category: "BEHIND CLIPS",
  member: "소연",
  year: "2021",
  thumbnail: "https://i.ytimg.com/vi/mfXQVeOiUwU/hqdefault.jpg",
  alt: "소연 - 에스에프나인(SF9), 전소연(JEON SOYEON) 백스테이지 [비하인드 더 쇼 210713] (2021-07-24)",
  title: "에스에프나인(SF9), 전소연(JEON SOYEON) 백스테이지 [비하인드 더 쇼 210713] (2021-07-24)"
},
{
  link: "https://www.youtube.com/watch?v=BwvvnMrGyqY",
  category: "BEHIND CLIPS",
  member: "소연",
  year: "2021",
  thumbnail: "https://i.ytimg.com/vi/BwvvnMrGyqY/hqdefault.jpg",
  alt: "소연 - [2021 MBC 방송 연예 대상] 방과후 설렘 옥주현&권유리&아이키&전소연 '특별상' 수상!, MBC 211229 방송 (2021-12-29)",
  title: "[2021 MBC 방송 연예 대상] 방과후 설렘 옥주현&권유리&아이키&전소연 '특별상' 수상!, MBC 211229 방송 (2021-12-29)"
},
{
  link: "https://www.youtube.com/watch?v=VO3emDZQbPU",
  category: "BEHIND CLIPS",
  member: "소연,미연",
  year: "2021",
  thumbnail: "https://i.ytimg.com/vi/VO3emDZQbPU/hqdefault.jpg",
  alt: "소연,미연 - [ENG] 전소연&미연이 알려주는 이번 주 엠카운트다운 라인업은? #엠카운트다운 EP.719 (2021-07-26)",
  title: "[ENG] 전소연&미연이 알려주는 이번 주 엠카운트다운 라인업은? #엠카운트다운 EP.719 (2021-07-26)"
},
{
  link: "https://www.youtube.com/watch?v=2iT0sfJN1qg",
  category: "BEHIND CLIPS",
  member: "소연",
  year: "2021",
  thumbnail: "https://i.ytimg.com/vi/2iT0sfJN1qg/hqdefault.jpg",
  alt: "소연 - [자축라이브 4K] 삠삠(BEAMBEAM)한 여름을 책임져줄 전소연(JEON SOYEON)의 1위 자축 (2021-07-16)",
  title: "[자축라이브 4K] 삠삠(BEAMBEAM)한 여름을 책임져줄 전소연(JEON SOYEON)의 1위 자축 (2021-07-16)"
},
{
  link: "https://www.youtube.com/watch?v=BOVn3btc3YA",
  category: "BEHIND CLIPS",
  member: "소연",
  year: "2021",
  thumbnail: "https://i.ytimg.com/vi/BOVn3btc3YA/hqdefault.jpg",
  alt: "소연 - [ENG] 7월 마지막 주 1위 '전소연'의 '삠삠(BEAM BEAM)' 앵콜 무대! (Full ver.) #엠카운트다운 EP.719 (2021-08-02)",
  title: "[ENG] 7월 마지막 주 1위 '전소연'의 '삠삠(BEAM BEAM)' 앵콜 무대! (Full ver.) #엠카운트다운 EP.719 (2021-08-02)"
},
{
  link: "https://www.youtube.com/watch?v=nibhktktGJI",
  category: "BEHIND CLIPS",
  member: "소연",
  year: "2021",
  thumbnail: "https://i.ytimg.com/vi/nibhktktGJI/hqdefault.jpg",
  alt: "소연 - [ENG] [최종회] (여자)아이들 전소연의 칭찬세례! 매력적인 목소리 서빈이에게 딱 어울리는 곡 선물까지♥#캡틴 | CAP-TEEN EP.10 | Mnet 210121 방송 (2021-01-21)",
  title: "[ENG] [최종회] (여자)아이들 전소연의 칭찬세례! 매력적인 목소리 서빈이에게 딱 어울리는 곡 선물까지♥#캡틴 | CAP-TEEN EP.10 | Mnet 210121 방송 (2021-01-21)"
},
{
  link: "https://www.youtube.com/watch?v=LX4FyrMehtY",
  category: "BEHIND CLIPS",
  member: "아이들",
  year: "2023",
  thumbnail: "https://i.ytimg.com/vi/LX4FyrMehtY/hqdefault.jpg",
  alt: "아이들 - [EN/JP] (4K) [Mnet PRIME SHOW/BALANCE GAME] 세상에 없던 질문 조합 VS (여자)아이들 (2023-03-27)",
  title: "[EN/JP] (4K) [Mnet PRIME SHOW/BALANCE GAME] 세상에 없던 질문 조합 VS (여자)아이들 (2023-03-27)"
},
{
  link: "https://www.youtube.com/watch?v=ZuLbx9RcBV4",
  category: "BEHIND CLIPS",
  member: "아이들",
  year: "2023",
  thumbnail: "https://i.ytimg.com/vi/ZuLbx9RcBV4/hqdefault.jpg",
  alt: "아이들 - [Mnet PRIME SHOW/BALANCE GAME] 세상에 없던 질문 조합 VS (여자)아이들 (2023-03-27)",
  title: "[Mnet PRIME SHOW/BALANCE GAME] 세상에 없던 질문 조합 VS (여자)아이들 (2023-03-27)"
},
{
  link: "https://www.youtube.com/watch?v=oB5Ao5IwJHc",
  category: "BEHIND CLIPS",
  member: "아이들",
  year: "2023",
  thumbnail: "https://i.ytimg.com/vi/oB5Ao5IwJHc/hqdefault.jpg",
  alt: "아이들 - [Mnet PRIME SHOW] (G)I-DLE 중 최강 빌런은 누구?!? (2023-03-23)",
  title: "[Mnet PRIME SHOW] (G)I-DLE 중 최강 빌런은 누구?!? (2023-03-23)"
},
{
  link: "https://www.youtube.com/watch?v=VTEaXNYy0vA",
  category: "BEHIND CLIPS",
  member: "아이들",
  year: "2023",
  thumbnail: "https://i.ytimg.com/vi/VTEaXNYy0vA/hqdefault.jpg",
  alt: "아이들 - [Mnet PRIME SHOW/PRIME POINT] 상상도 못했던 PSY의 톰보이! 그리고 그걸 보는 (G)I-DLE! (2023-03-22)",
  title: "[Mnet PRIME SHOW/PRIME POINT] 상상도 못했던 PSY의 톰보이! 그리고 그걸 보는 (G)I-DLE! (2023-03-22)"
},
{
  link: "https://www.youtube.com/watch?v=thDFxMUsj4o",
  category: "BEHIND CLIPS",
  member: "아이들",
  year: "2023",
  thumbnail: "https://i.ytimg.com/vi/thDFxMUsj4o/hqdefault.jpg",
  alt: "아이들 - [Mnet PRIME SHOW/PRIME POINT] \"미친거아냐?\"대형 스포일러 ㅃ6YA-★ (2023-03-22)",
  title: "[Mnet PRIME SHOW/PRIME POINT] \"미친거아냐?\"대형 스포일러 ㅃ6YA-★ (2023-03-22)"
},
{
  link: "https://www.youtube.com/watch?v=1J5MFru6Gc8",
  category: "BEHIND CLIPS",
  member: "아이들",
  year: "2023",
  thumbnail: "https://i.ytimg.com/vi/1J5MFru6Gc8/hqdefault.jpg",
  alt: "아이들 - [Mnet PRIME SHOW/PRIME ARTIST] (G)I-DLE이 다시 돌아가고 싶은 순간은?! (2023-03-15)",
  title: "[Mnet PRIME SHOW/PRIME ARTIST] (G)I-DLE이 다시 돌아가고 싶은 순간은?! (2023-03-15)"
},
{
  link: "https://www.youtube.com/watch?v=JcHVNZo9vOI",
  category: "BEHIND CLIPS",
  member: "아이들",
  year: "2023",
  thumbnail: "https://i.ytimg.com/vi/JcHVNZo9vOI/hqdefault.jpg",
  alt: "아이들 - [Mnet PRIME SHOW/PRIME ARTIST] (G)I-DLE이 직접 고른 멤버별 최애 직캠은? (2023-03-15)",
  title: "[Mnet PRIME SHOW/PRIME ARTIST] (G)I-DLE이 직접 고른 멤버별 최애 직캠은? (2023-03-15)"
},
// 🔽 새로 불러온 50개 항목
{
  link: "https://www.youtube.com/watch?v=wlnE89SEC4U",
  category: "LIVE-COVER-DANCE",
  member: "아이들",
  year: "2025",
  thumbnail: "https://i.ytimg.com/vi/wlnE89SEC4U/hqdefault.jpg",
  alt: "아이들 - [4K] 아이들(i-dle) “Good Thing” Band LIVE 전기 맞은 것처럼 계속 귓가에 맴돈다..⚡ [it’s KPOP LIVE 잇츠라이브] (2025-05-26)",
  title: "[4K] 아이들(i-dle) “Good Thing” Band LIVE 전기 맞은 것처럼 계속 귓가에 맴돈다..⚡ [it’s KPOP LIVE 잇츠라이브] (2025-05-26)"
},
{
  link: "https://www.youtube.com/watch?v=atG5JRh-5bQ",
  category: "LIVE-COVER-DANCE",
  member: "아이들",
  year: "2025",
  thumbnail: "https://i.ytimg.com/vi/atG5JRh-5bQ/hqdefault.jpg",
  alt: "아이들 - [릴레이댄스] i-dle(아이들) - Good Thing (4K) (2025-05-24)",
  title: "[릴레이댄스] i-dle(아이들) - Good Thing (4K) (2025-05-24)"
},
{
  link: "https://www.youtube.com/watch?v=87mjTHuwZoc",
  category: "LIVE-COVER-DANCE",
  member: "아이들",
  year: "2025",
  thumbnail: "https://i.ytimg.com/vi/87mjTHuwZoc/hqdefault.jpg",
  alt: "아이들 - i-dle(아이들) - Good Thing (Band VER.) [더 시즌즈-박보검의 칸타빌레] | KBS 250523 방송 (2025-05-23)",
  title: "i-dle(아이들) - Good Thing (Band VER.) [더 시즌즈-박보검의 칸타빌레] | KBS 250523 방송 (2025-05-23)"
},
{
  link: "https://www.youtube.com/watch?v=2IbEaAin0Lk",
  category: "LIVE-COVER-DANCE",
  member: "소연",
  year: "2025",
  thumbnail: "https://i.ytimg.com/vi/2IbEaAin0Lk/hqdefault.jpg",
  alt: "소연 - 소연(i-dle) - 내 이름 맑음 [더 시즌즈-박보검의 칸타빌레] | KBS 250523 방송 (2025-05-23)",
  title: "소연(i-dle) - 내 이름 맑음 [더 시즌즈-박보검의 칸타빌레] | KBS 250523 방송 (2025-05-23)"
},
{
  link: "https://www.youtube.com/watch?v=0VZHj9WhcKA",
  category: "LIVE-COVER-DANCE",
  member: "아이들",
  year: "2025",
  thumbnail: "https://i.ytimg.com/vi/0VZHj9WhcKA/hqdefault.jpg",
  alt: "아이들 - i-dle (아이들) - LATATA + 퀸카 (Queencard) + TOMBOY [더 시즌즈-박보검의 칸타빌레] | KBS 250523 방송 (2025-05-23)",
  title: "i-dle (아이들) - LATATA + 퀸카 (Queencard) + TOMBOY [더 시즌즈-박보검의 칸타빌레] | KBS 250523 방송 (2025-05-23)"
},
{
  link: "https://www.youtube.com/watch?v=4xRQo_5n0YI",
  category: "LIVE-COVER-DANCE",
  member: "아이들",
  year: "2025",
  thumbnail: "https://i.ytimg.com/vi/4xRQo_5n0YI/hqdefault.jpg",
  alt: "아이들 - i-dle (아이들) - Good Thing｜i-dle_Good Thing｜야외녹음실｜Beyond the Studio｜LIVE (2025-05-21)",
  title: "i-dle (아이들) - Good Thing｜i-dle_Good Thing｜야외녹음실｜Beyond the Studio｜LIVE (2025-05-21)"
},
{
  link: "https://www.youtube.com/watch?v=nUwSf-Szaws",
  category: "LIVE-COVER-DANCE",
  member: "아이들",
  year: "2025",
  thumbnail: "https://i.ytimg.com/vi/nUwSf-Szaws/hqdefault.jpg",
  alt: "아이들 - i-dle(아이들) 'Good Thing' (4K) | STUDIO CHOOM ORIGINAL (2025-05-20)",
  title: "i-dle(아이들) 'Good Thing' (4K) | STUDIO CHOOM ORIGINAL (2025-05-20)"
},
{
  link: "https://www.youtube.com/watch?v=CcxUYln_8Zc",
  category: "LIVE-COVER-DANCE",
  member: "아이들",
  year: "2025",
  thumbnail: "https://i.ytimg.com/vi/CcxUYln_8Zc/hqdefault.jpg",
  alt: "아이들 - i-dle (아이들) – Girlfriend | dingo Live | 딩고뮤직 | DingoMusic (2025-05-13)",
  title: "i-dle (아이들) – Girlfriend | dingo Live | 딩고뮤직 | DingoMusic (2025-05-13)"
},
{
  link: "https://www.youtube.com/watch?v=yT0VPAyPbH8",
  category: "LIVE-COVER-DANCE",
  member: "아이들",
  year: "2025",
  thumbnail: "https://i.ytimg.com/vi/yT0VPAyPbH8/hqdefault.jpg",
  alt: "아이들 - [리무진서비스] (여자)아이들 플레이리스트 | (G)I-DLE PLAYLIST (2025-04-19)",
  title: "[리무진서비스] (여자)아이들 플레이리스트 | (G)I-DLE PLAYLIST (2025-04-19)"
},
{
  link: "https://www.youtube.com/watch?v=PW5Rs1DATZU",
  category: "LIVE-COVER-DANCE",
  member: "미연,우기",
  year: "2025",
  thumbnail: "https://i.ytimg.com/vi/PW5Rs1DATZU/hqdefault.jpg",
  alt: "미연,우기 - (中文歌詞)Despacito - Miyeon & Yuqi ¦ (G)I-DLE ¦ Music Bank in MEXICO 2023 (2025-04-11)",
  title: "(中文歌詞)Despacito - Miyeon & Yuqi ¦ (G)I-DLE ¦ Music Bank in MEXICO 2023 (2025-04-11)"
},
{
  link: "https://www.youtube.com/watch?v=kd2IxwrRNbs",
  category: "LIVE-COVER-DANCE",
  member: "우기",
  year: "2025",
  thumbnail: "https://i.ytimg.com/vi/kd2IxwrRNbs/hqdefault.jpg",
  alt: "우기 - [LIVE | 4K] 스퀘어 | 우기 ((여자)아이들) - Radio (Dum-Dum) | SQUARE (2025-03-17)",
  title: "[LIVE | 4K] 스퀘어 | 우기 ((여자)아이들) - Radio (Dum-Dum) | SQUARE (2025-03-17)"
},
{
  link: "https://www.youtube.com/watch?v=yFTcW_DdKYk",
  category: "LIVE-COVER-DANCE",
  member: "민니",
  year: "2025",
  thumbnail: "https://i.ytimg.com/vi/yFTcW_DdKYk/hqdefault.jpg",
  alt: "민니 - DAY ONE | MINNIE (G)I-DLE x TorSaksit (Piano & i Live) (2025-03-08)",
  title: "DAY ONE | MINNIE (G)I-DLE x TorSaksit (Piano & i Live) (2025-03-08)"
},
{
  link: "https://www.youtube.com/watch?v=lcs6h2AmZ_A",
  category: "LIVE-COVER-DANCE",
  member: "민니",
  year: "2025",
  thumbnail: "https://i.ytimg.com/vi/lcs6h2AmZ_A/hqdefault.jpg",
  alt: "민니 - Rise Up | MINNIE (G)I-DLE x TorSaksit (Piano & i Live) (2025-03-08)",
  title: "Rise Up | MINNIE (G)I-DLE x TorSaksit (Piano & i Live) (2025-03-08)"
},
{
  link: "https://www.youtube.com/watch?v=nfCqOXm1rHs",
  category: "LIVE-COVER-DANCE",
  member: "아이들",
  year: "2025",
  thumbnail: "https://i.ytimg.com/vi/nfCqOXm1rHs/hqdefault.jpg",
  alt: "아이들 - (여자)아이들이 부르는 '비가 오는 날엔' 레전드 커버 ㄷㄷ (2025-02-06)",
  title: "(여자)아이들이 부르는 '비가 오는 날엔' 레전드 커버 ㄷㄷ (2025-02-06)"
},
{
  link: "https://www.youtube.com/watch?v=krlkjQ70ndw",
  category: "LIVE-COVER-DANCE",
  member: "민니",
  year: "2025",
  thumbnail: "https://i.ytimg.com/vi/krlkjQ70ndw/hqdefault.jpg",
  alt: "민니 - [LIVE] 민니(MINNIE) - HER | 두시탈출 컬투쇼 (2025-01-26)",
  title: "[LIVE] 민니(MINNIE) - HER | 두시탈출 컬투쇼 (2025-01-26)"
},
{
  link: "https://www.youtube.com/watch?v=gYN5aX0ClHs",
  category: "LIVE-COVER-DANCE",
  member: "민니",
  year: "2025",
  thumbnail: "https://i.ytimg.com/vi/gYN5aX0ClHs/hqdefault.jpg",
  alt: "민니 - 민니 ((여자)아이들) - Valentine’s Dream [더 시즌즈-이영지의 레인보우] | KBS 250124 방송 (2025-01-24)",
  title: "민니 ((여자)아이들) - Valentine’s Dream [더 시즌즈-이영지의 레인보우] | KBS 250124 방송 (2025-01-24)"
},
{
  link: "https://www.youtube.com/watch?v=eif8t-wQe2o",
  category: "LIVE-COVER-DANCE",
  member: "민니",
  year: "2025",
  thumbnail: "https://i.ytimg.com/vi/eif8t-wQe2o/hqdefault.jpg",
  alt: "민니 - 꿈결같은 목소리로 민니 ((여자)아이들)가 부르는 ‘꿈결같아서’🎤 [더 시즌즈-이영지의 레인보우] | KBS 250124 방송 (2025-01-24)",
  title: "꿈결같은 목소리로 민니 ((여자)아이들)가 부르는 ‘꿈결같아서’🎤 [더 시즌즈-이영지의 레인보우] | KBS 250124 방송 (2025-01-24)"
},
{
  link: "https://www.youtube.com/watch?v=lnHQ8CILrcw",
  category: "LIVE-COVER-DANCE",
  member: "민니",
  year: "2025",
  thumbnail: "https://i.ytimg.com/vi/lnHQ8CILrcw/hqdefault.jpg",
  alt: "민니 - 민니 ((여자)아이들) - HER [더 시즌즈-이영지의 레인보우] | KBS 250124 방송 (2025-01-24)",
  title: "민니 ((여자)아이들) - HER [더 시즌즈-이영지의 레인보우] | KBS 250124 방송 (2025-01-24)"
},
{
  link: "https://www.youtube.com/watch?v=DlAtWozonI0",
  category: "LIVE-COVER-DANCE",
  member: "민니",
  year: "2025",
  thumbnail: "https://i.ytimg.com/vi/DlAtWozonI0/hqdefault.jpg",
  alt: "민니 - [ALLIVE] 민니 (MINNIE) - HER | 올라이브 | 정오의 희망곡 김신영입니다｜MBC 250122 방송 (2025-01-22)",
  title: "[ALLIVE] 민니 (MINNIE) - HER | 올라이브 | 정오의 희망곡 김신영입니다｜MBC 250122 방송 (2025-01-22)"
},
{
  link: "https://www.youtube.com/watch?v=T-1qv7iCwoI",
  category: "LIVE-COVER-DANCE",
  member: "민니",
  year: "2025",
  thumbnail: "https://i.ytimg.com/vi/T-1qv7iCwoI/hqdefault.jpg",
  alt: "민니 - MINNIE(민니) - 익숙해 | dingo live | 딩고뮤직 | DingoMusic (2025-01-22)",
  title: "MINNIE(민니) - 익숙해 | dingo live | 딩고뮤직 | DingoMusic (2025-01-22)"
},
{
  link: "https://www.youtube.com/watch?v=dzkb0VPV3hk",
  category: "LIVE-COVER-DANCE",
  member: "민니",
  year: "2025",
  thumbnail: "https://i.ytimg.com/vi/dzkb0VPV3hk/hqdefault.jpg",
  alt: "민니 - MINNIE(민니) 'HER' (4K) | STUDIO CHOOM ORIGINAL (2025-01-21)",
  title: "MINNIE(민니) 'HER' (4K) | STUDIO CHOOM ORIGINAL (2025-01-21)"
},
{
  link: "https://www.youtube.com/watch?v=3yeeTaqZuKw",
  category: "LIVE-COVER-DANCE",
  member: "미연",
  year: "2025",
  thumbnail: "https://i.ytimg.com/vi/3yeeTaqZuKw/hqdefault.jpg",
  alt: "미연 - [4K] 미연((여자)아이들)(MIYEON((G)I-DLE)) “Blazing Heart” (원신 OST) Band LIVE Concert [it’s KPOP LIVE 잇츠라이브] (2025-01-05)",
  title: "[4K] 미연((여자)아이들)(MIYEON((G)I-DLE)) “Blazing Heart” (원신 OST) Band LIVE Concert [it’s KPOP LIVE 잇츠라이브] (2025-01-05)"
},
{
  link: "https://www.youtube.com/watch?v=yt8440nvPBU",
  category: "LIVE-COVER-DANCE",
  member: "아이들",
  year: "2024",
  thumbnail: "https://i.ytimg.com/vi/yt8440nvPBU/hqdefault.jpg",
  alt: "아이들 - 【LIVE首发🔥】宋雨琦《Radio+Freak》国内首次跨年演出 唱跳全开舞台能量满满！ 2024-2025浙江卫视跨年晚会 纯享 20241231 (2024-12-31)",
  title: "【LIVE首发🔥】宋雨琦《Radio+Freak》国内首次跨年演出 唱跳全开舞台能量满满！ 2024-2025浙江卫视跨年晚会 纯享 20241231 (2024-12-31)"
},
{
  link: "https://www.youtube.com/watch?v=NgprUB-_Ex4",
  category: "LIVE-COVER-DANCE",
  member: "소연",
  year: "2024",
  thumbnail: "https://i.ytimg.com/vi/NgprUB-_Ex4/hqdefault.jpg",
  alt: "소연 - [리무진 서비스 클립] Not Enough l  (여자)아이들 소연 |  (G)I-DLE SOYEON (2024-08-31)",
  title: "[리무진 서비스 클립] Not Enough l  (여자)아이들 소연 |  (G)I-DLE SOYEON (2024-08-31)"
},
{
  link: "https://www.youtube.com/watch?v=sgiPOTWTw1k",
  category: "LIVE-COVER-DANCE",
  member: "아이들",
  year: "2024",
  thumbnail: "https://i.ytimg.com/vi/sgiPOTWTw1k/hqdefault.jpg",
  alt: "아이들 - [4K] (여자)아이들((G)I-DLE) “클락션(Klaxon)” Band LIVE Concert 야! 아이들 밴드라이브 좀 봐줘💓 [it’s KPOP LIVE 잇츠라이브] (2024-07-18)",
  title: "[4K] (여자)아이들((G)I-DLE) “클락션(Klaxon)” Band LIVE Concert 야! 아이들 밴드라이브 좀 봐줘💓 [it’s KPOP LIVE 잇츠라이브] (2024-07-18)"
},
{
  link: "https://www.youtube.com/watch?v=gpDgp8j8JZg",
  category: "LIVE-COVER-DANCE",
  member: "아이들",
  year: "2024",
  thumbnail: "https://i.ytimg.com/vi/gpDgp8j8JZg/hqdefault.jpg",
  alt: "아이들 - (Full Focused) (G)I-DLE ((여자)아이들) '클락션 (Klaxon)' 4K | STUDIO CHOOM ORIGINAL (2024-07-16)",
  title: "(Full Focused) (G)I-DLE ((여자)아이들) '클락션 (Klaxon)' 4K | STUDIO CHOOM ORIGINAL (2024-07-16)"
},
{
  link: "https://www.youtube.com/watch?v=hHrr1lf7_V8",
  category: "LIVE-COVER-DANCE",
  member: "아이들",
  year: "2024",
  thumbnail: "https://i.ytimg.com/vi/hHrr1lf7_V8/hqdefault.jpg",
  alt: "아이들 - (여자)아이들이 부르는 썸머쏭🎶 (여자)아이들 - 냉면 + Touch my body+ Bubble Pop! [더 시즌즈-지코의 아티스트] | KBS 240712 방송 (2024-07-12)",
  title: "(여자)아이들이 부르는 썸머쏭🎶 (여자)아이들 - 냉면 + Touch my body+ Bubble Pop! [더 시즌즈-지코의 아티스트] | KBS 240712 방송 (2024-07-12)"
},
{
  link: "https://www.youtube.com/watch?v=dRkWQ3gHcX4",
  category: "LIVE-COVER-DANCE",
  member: "아이들",
  year: "2024",
  thumbnail: "https://i.ytimg.com/vi/dRkWQ3gHcX4/hqdefault.jpg",
  alt: "아이들 - (여자)아이들 - 나는 아픈 건 딱 질색이니까 (Band VER.) [더 시즌즈-지코의 아티스트] | KBS 240712 방송 (2024-07-12)",
  title: "(여자)아이들 - 나는 아픈 건 딱 질색이니까 (Band VER.) [더 시즌즈-지코의 아티스트] | KBS 240712 방송 (2024-07-12)"
},
{
  link: "https://www.youtube.com/watch?v=mN1XIwlLTPk",
  category: "LIVE-COVER-DANCE",
  member: "아이들",
  year: "2024",
  thumbnail: "https://i.ytimg.com/vi/mN1XIwlLTPk/hqdefault.jpg",
  alt: "아이들 - [가로] (여자)아이들 - 클락션 (Klaxon) / Special Narr. ZICO (지코) [더 시즌즈-지코의 아티스트] | KBS 240712 방송 (2024-07-12)",
  title: "[가로] (여자)아이들 - 클락션 (Klaxon) / Special Narr. ZICO (지코) [더 시즌즈-지코의 아티스트] | KBS 240712 방송 (2024-07-12)"
},
{
  link: "https://www.youtube.com/watch?v=LBr00SKCEV0",
  category: "LIVE-COVER-DANCE",
  member: "아이들",
  year: "2024",
  thumbnail: "https://i.ytimg.com/vi/LBr00SKCEV0/hqdefault.jpg",
  alt: "아이들 - [세로] (여자)아이들 - 클락션 (Klaxon) / Special Narr. ZICO (지코) [더 시즌즈-지코의 아티스트] | KBS 240712 방송 (2024-07-12)",
  title: "[세로] (여자)아이들 - 클락션 (Klaxon) / Special Narr. ZICO (지코) [더 시즌즈-지코의 아티스트] | KBS 240712 방송 (2024-07-12)"
},
{
  link: "https://www.youtube.com/watch?v=3SD2Jh7dxGM",
  category: "LIVE-COVER-DANCE",
  member: "아이들",
  year: "2024",
  thumbnail: "https://i.ytimg.com/vi/3SD2Jh7dxGM/hqdefault.jpg",
  alt: "아이들 - [릴레이댄스] (여자)아이들((G)I-DLE) - 클락션 (Klaxon) (4K) (2024-07-12)",
  title: "[릴레이댄스] (여자)아이들((G)I-DLE) - 클락션 (Klaxon) (4K) (2024-07-12)"
},
{
  link: "https://www.youtube.com/watch?v=oFOvnompsBo",
  category: "LIVE-COVER-DANCE",
  member: "아이들",
  year: "2024",
  thumbnail: "https://i.ytimg.com/vi/oFOvnompsBo/hqdefault.jpg",
  alt: "아이들 - (G)I-DLE ((여자)아이들) '클락션 (Klaxon)' (4K) | STUDIO CHOOM ORIGINAL (2024-07-09)",
  title: "(G)I-DLE ((여자)아이들) '클락션 (Klaxon)' (4K) | STUDIO CHOOM ORIGINAL (2024-07-09)"
},
{
  link: "https://www.youtube.com/watch?v=eVHq7GN-lqc",
  category: "LIVE-COVER-DANCE",
  member: "미연",
  year: "2024",
  thumbnail: "https://i.ytimg.com/vi/eVHq7GN-lqc/hqdefault.jpg",
  alt: "미연 - [리무진서비스] EP.122 (여자)아이들 미연 | (G)I-DLE MIYEON | 클락션, Because of You, To. X, 한(寒) (2024-07-09)",
  title: "[리무진서비스] EP.122 (여자)아이들 미연 | (G)I-DLE MIYEON | 클락션, Because of You, To. X, 한(寒) (2024-07-09)"
},
{
  link: "https://www.youtube.com/watch?v=FAT2rvgIH9w",
  category: "LIVE-COVER-DANCE",
  member: "아이들",
  year: "2024",
  thumbnail: "https://i.ytimg.com/vi/FAT2rvgIH9w/hqdefault.jpg",
  alt: "아이들 - 쿨룩 LIVE ▷ (여자)아이들((G)I-DLE) ‘클락션(Klaxon)’ / [이은지의 가요광장] I KBS 240709 방송 (2024-07-09)",
  title: "쿨룩 LIVE ▷ (여자)아이들((G)I-DLE) ‘클락션(Klaxon)’ / [이은지의 가요광장] I KBS 240709 방송 (2024-07-09)"
},
{
  link: "https://www.youtube.com/watch?v=KBdeNhYn3Pg",
  category: "LIVE-COVER-DANCE",
  member: "미연",
  year: "2024",
  thumbnail: "https://i.ytimg.com/vi/KBdeNhYn3Pg/hqdefault.jpg",
  alt: "미연 - (40분 모아듣기) (여자)아이들 미연 퍼스널 컬러=비긴어게인✨ #모아듣기 #오픈마이크 (2024-06-25)",
  title: "(40분 모아듣기) (여자)아이들 미연 퍼스널 컬러=비긴어게인✨ #모아듣기 #오픈마이크 (2024-06-25)"
},
{
  link: "https://www.youtube.com/watch?v=QBUnVOcUOAc",
  category: "LIVE-COVER-DANCE",
  member: "미연",
  year: "2024",
  thumbnail: "https://i.ytimg.com/vi/QBUnVOcUOAc/hqdefault.jpg",
  alt: "미연 - [ENG] 세상 무해한 조합💙 한 편의 청춘 영화 같은 '폴킴x볼빨간사춘기x미연x이무진' 마카오 V-LOG✈️｜비긴어게인 오픈마이크 (2024-06-12)",
  title: "[ENG] 세상 무해한 조합💙 한 편의 청춘 영화 같은 '폴킴x볼빨간사춘기x미연x이무진' 마카오 V-LOG✈️｜비긴어게인 오픈마이크 (2024-06-12)"
},
{
  link: "https://www.youtube.com/watch?v=loNFKe98XsM",
  category: "LIVE-COVER-DANCE",
  member: "미연",
  year: "2024",
  thumbnail: "https://i.ytimg.com/vi/loNFKe98XsM/hqdefault.jpg",
  alt: "미연 - 미연((G)I-DLE MIYEON)의 목소리로 듣는 어쿠스틱 버전 '뚫고 지나가요' ♬｜비긴어게인 오픈마이크 (2024-05-22)",
  title: "미연((G)I-DLE MIYEON)의 목소리로 듣는 어쿠스틱 버전 '뚫고 지나가요' ♬｜비긴어게인 오픈마이크 (2024-05-22)"
},
{
  link: "https://www.youtube.com/watch?v=SkEDRmXi7Fk",
  category: "LIVE-COVER-DANCE",
  member: "소연",
  year: "2024",
  thumbnail: "https://i.ytimg.com/vi/SkEDRmXi7Fk/hqdefault.jpg",
  alt: "소연 - [아이엠온더비트] EP.3 (G)I-DLE 소연 | 아픈 건 딱 질색이니까, 한(一), 한(寒), 화(火花), LION, Psycho [4K HDR] (2024-05-04)",
  title: "[아이엠온더비트] EP.3 (G)I-DLE 소연 | 아픈 건 딱 질색이니까, 한(一), 한(寒), 화(火花), LION, Psycho [4K HDR] (2024-05-04)"
},
{
  link: "https://www.youtube.com/watch?v=kjVk8u58YVE",
  category: "LIVE-COVER-DANCE",
  member: "우기",
  year: "2024",
  thumbnail: "https://i.ytimg.com/vi/kjVk8u58YVE/hqdefault.jpg",
  alt: "우기 - [4K] 우기((여자)아이들) (YUQI ((G)I-DLE)) “FREAK” Band LIVE Concert 락스타🎸로 변신한 아기토끼🐰 [it’s KPOP LIVE 잇츠라이브] (2024-04-26)",
  title: "[4K] 우기((여자)아이들) (YUQI ((G)I-DLE)) “FREAK” Band LIVE Concert 락스타🎸로 변신한 아기토끼🐰 [it’s KPOP LIVE 잇츠라이브] (2024-04-26)"
},
{
  link: "https://www.youtube.com/watch?v=9SA_uS2l-z8",
  category: "LIVE-COVER-DANCE",
  member: "아이들",
  year: "2024",
  thumbnail: "https://i.ytimg.com/vi/9SA_uS2l-z8/hqdefault.jpg",
  alt: "아이들 - ซ่อนกลิ่น - เจมีไนน์ นรวิชญ์ / โฟร์ท ณัฐวรรธน์ | The Wall Song ร้องข้ามกำแพง (2024-03-28)",
  title: "ซ่อนกลิ่น - เจมีไนน์ นรวิชญ์ / โฟร์ท ณัฐวรรธน์ | The Wall Song ร้องข้ามกำแพง (2024-03-28)"
},
{
  link: "https://www.youtube.com/watch?v=bjyS46qzAfw",
  category: "LIVE-COVER-DANCE",
  member: "아이들",
  year: "2024",
  thumbnail: "https://i.ytimg.com/vi/bjyS46qzAfw/hqdefault.jpg",
  alt: "아이들 - Abracadabra - (여자)아이들 [더 시즌즈-이효리의 레드카펫] | KBS 240202 방송 (2024-02-12)",
  title: "Abracadabra - (여자)아이들 [더 시즌즈-이효리의 레드카펫] | KBS 240202 방송 (2024-02-12)"
},
{
  link: "https://www.youtube.com/watch?v=eWVsuqzDu88",
  category: "LIVE-COVER-DANCE",
  member: "아이들",
  year: "2024",
  thumbnail: "https://i.ytimg.com/vi/eWVsuqzDu88/hqdefault.jpg",
  alt: "아이들 - [가로직캠] (여자)아이들 - 나는 아픈 건 딱 질색이니까 [더 시즌즈-이효리의 레드카펫] | KBS 240202 방송 (2024-02-02)",
  title: "[가로직캠] (여자)아이들 - 나는 아픈 건 딱 질색이니까 [더 시즌즈-이효리의 레드카펫] | KBS 240202 방송 (2024-02-02)"
},
{
  link: "https://www.youtube.com/watch?v=b-A0R5C2z6o",
  category: "LIVE-COVER-DANCE",
  member: "소연",
  year: "2024",
  thumbnail: "https://i.ytimg.com/vi/b-A0R5C2z6o/hqdefault.jpg",
  alt: "소연 - 이효리에게 곡을 준 소연! [미발표곡] 유후(Yoo Hoo) - 소연 [더 시즌즈-이효리의 레드카펫] | KBS 240202 방송 (2024-02-02)",
  title: "이효리에게 곡을 준 소연! [미발표곡] 유후(Yoo Hoo) - 소연 [더 시즌즈-이효리의 레드카펫] | KBS 240202 방송 (2024-02-02)"
},
{
  link: "https://www.youtube.com/watch?v=r4sUpfOk7DM",
  category: "LIVE-COVER-DANCE",
  member: "아이들",
  year: "2024",
  thumbnail: "https://i.ytimg.com/vi/r4sUpfOk7DM/hqdefault.jpg",
  alt: "아이들 - Super Lady - (여자)아이들 [더 시즌즈-이효리의 레드카펫] | KBS 240202 방송 (2024-02-02)",
  title: "Super Lady - (여자)아이들 [더 시즌즈-이효리의 레드카펫] | KBS 240202 방송 (2024-02-02)"
},
{
  link: "https://www.youtube.com/watch?v=ZIRhmDkjoXM",
  category: "LIVE-COVER-DANCE",
  member: "아이들",
  year: "2024",
  thumbnail: "https://i.ytimg.com/vi/ZIRhmDkjoXM/hqdefault.jpg",
  alt: "아이들 - [Performance37] (G)I-DLE((여자)아이들) 'Super Lady' (4K) (2024-02-02)",
  title: "[Performance37] (G)I-DLE((여자)아이들) 'Super Lady' (4K) (2024-02-02)"
},
{
  link: "https://www.youtube.com/watch?v=EDZ5qX-pTWk",
  category: "LIVE-COVER-DANCE",
  member: "아이들",
  year: "2024",
  thumbnail: "https://i.ytimg.com/vi/EDZ5qX-pTWk/hqdefault.jpg",
  alt: "아이들 - [4K] (여자)아이들((G)I-DLE) “Super Lady” Band LIVE Concert 이 세상 모든 슈퍼레이디에게 전하는 곡❤ [it’s KPOP LIVE 잇츠라이브] (2024-02-02)",
  title: "[4K] (여자)아이들((G)I-DLE) “Super Lady” Band LIVE Concert 이 세상 모든 슈퍼레이디에게 전하는 곡❤ [it’s KPOP LIVE 잇츠라이브] (2024-02-02)"
},
{
  link: "https://www.youtube.com/watch?v=t3a7JJEKiMA",
  category: "LIVE-COVER-DANCE",
  member: "소연",
  year: "2024",
  thumbnail: "https://i.ytimg.com/vi/t3a7JJEKiMA/hqdefault.jpg",
  alt: "소연 - [리무진서비스] EP.99 (여자)아이들 소연 | (G)I-DLE SOYEON | 나는 아픈 건 딱 질색이니까, 아파, Not Enough, 사랑은 은하수 다방에서 (2024-01-30)",
  title: "[리무진서비스] EP.99 (여자)아이들 소연 | (G)I-DLE SOYEON | 나는 아픈 건 딱 질색이니까, 아파, Not Enough, 사랑은 은하수 다방에서 (2024-01-30)"
},
{
  link: "https://www.youtube.com/watch?v=ByB66M00sgI",
  category: "LIVE-COVER-DANCE",
  member: "민니,미연",
  year: "2024",
  thumbnail: "https://i.ytimg.com/vi/ByB66M00sgI/hqdefault.jpg",
  alt: "민니,미연 - 몽글몽글 ʚ음색요정ɞ 미연·민니 노래모음 #오픈마이크 (2024-01-16)",
  title: "몽글몽글 ʚ음색요정ɞ 미연·민니 노래모음 #오픈마이크 (2024-01-16)"
},
{
  link: "https://www.youtube.com/watch?v=vTX54zOmoiY",
  category: "LIVE-COVER-DANCE",
  member: "민니",
  year: "2023",
  thumbnail: "https://i.ytimg.com/vi/vTX54zOmoiY/hqdefault.jpg",
  alt: "민니 - 로꼬 (Loco) - ‘NOT OK (Feat. 민니 ((여자)아이들))’ Official Live [ENG/CHN] (2023-10-24)",
  title: "로꼬 (Loco) - ‘NOT OK (Feat. 민니 ((여자)아이들))’ Official Live [ENG/CHN] (2023-10-24)"
},
{
  link: "https://www.youtube.com/watch?v=zc3IhWwexNA",
  category: "LIVE-COVER-DANCE",
  member: "아이들",
  year: "2023",
  thumbnail: "https://i.ytimg.com/vi/zc3IhWwexNA/hqdefault.jpg",
  alt: "아이들 - (G)I-DLE - I DO / THE FIRST TAKE (2023-09-27)",
  title: "(G)I-DLE - I DO / THE FIRST TAKE (2023-09-27)"
},

// 🔽 새로 불러온 50개 항목
{
  link: "https://www.youtube.com/watch?v=o8XOhs2KmRM",
  category: "LIVE-COVER-DANCE",
  member: "아이들",
  year: "2023",
  thumbnail: "https://i.ytimg.com/vi/o8XOhs2KmRM/hqdefault.jpg",
  alt: "아이들 - (G)I-DLE - Queencard / THE FIRST TAKE (2023-09-15)",
  title: "(G)I-DLE - Queencard / THE FIRST TAKE (2023-09-15)"
},
{
  link: "https://www.youtube.com/watch?v=P3kZKT00Cr8",
  category: "LIVE-COVER-DANCE",
  member: "소연",
  year: "2023",
  thumbnail: "https://i.ytimg.com/vi/P3kZKT00Cr8/hqdefault.jpg",
  alt: "소연 - [M2 LIVE] 소연((여자)아이들) X 무너 - 아무너케 (I'm OK) (2023-09-14)",
  title: "[M2 LIVE] 소연((여자)아이들) X 무너 - 아무너케 (I'm OK) (2023-09-14)"
},
{
  link: "https://www.youtube.com/watch?v=opZkoaZZXpw",
  category: "LIVE-COVER-DANCE",
  member: "아이들",
  year: "2023",
  thumbnail: "https://i.ytimg.com/vi/opZkoaZZXpw/hqdefault.jpg",
  alt: "아이들 - 학생들과 약속 지키러 이화여대에 다녀왔습니다😎 - 퀸카 (Queencard), Allergy, TOMBOY | [(여자)아이들의 탐스어택] (2023-07-24)",
  title: "학생들과 약속 지키러 이화여대에 다녀왔습니다😎 - 퀸카 (Queencard), Allergy, TOMBOY | [(여자)아이들의 탐스어택] (2023-07-24)"
},
{
  link: "https://www.youtube.com/watch?v=Uh1EDh5NVHA",
  category: "LIVE-COVER-DANCE",
  member: "민니",
  year: "2023",
  thumbnail: "https://i.ytimg.com/vi/Uh1EDh5NVHA/hqdefault.jpg",
  alt: "민니 - 신이 주신 선물이 분명한 음색 요정,,❣️ (여자)아이들 민니 노래모음 #오픈마이크 (2023-06-08)",
  title: "신이 주신 선물이 분명한 음색 요정,,❣️ (여자)아이들 민니 노래모음 #오픈마이크 (2023-06-08)"
},
{
  link: "https://www.youtube.com/watch?v=FTSQfkQLuro",
  category: "LIVE-COVER-DANCE",
  member: "아이들",
  year: "2023",
  thumbnail: "https://i.ytimg.com/vi/FTSQfkQLuro/hqdefault.jpg",
  alt: "아이들 - [EyeContact Ver.👀] (여자)아이들((G)I-DLE) _ 퀸카(Queencard)  | 1theKILLPO | 원더킬포 | 아이컨택 | 미연 민니 소연 우기 슈화 (2023-06-07)",
  title: "[EyeContact Ver.👀] (여자)아이들((G)I-DLE) _ 퀸카(Queencard)  | 1theKILLPO | 원더킬포 | 아이컨택 | 미연 민니 소연 우기 슈화 (2023-06-07)"
},
{
  link: "https://www.youtube.com/watch?v=REIeVXbixwE",
  category: "LIVE-COVER-DANCE",
  member: "아이들",
  year: "2023",
  thumbnail: "https://i.ytimg.com/vi/REIeVXbixwE/hqdefault.jpg",
  alt: "아이들 - [PICK] (여자)아이들을 부를 땐 ‘퀸카(Queencard)’라고 해야지👑 (Dance Performance.Ver) | 두시탈출 컬투쇼 (2023-05-31)",
  title: "[PICK] (여자)아이들을 부를 땐 ‘퀸카(Queencard)’라고 해야지👑 (Dance Performance.Ver) | 두시탈출 컬투쇼 (2023-05-31)"
},
{
  link: "https://www.youtube.com/watch?v=7virpG1LQFU",
  category: "LIVE-COVER-DANCE",
  member: "아이들",
  year: "2023",
  thumbnail: "https://i.ytimg.com/vi/7virpG1LQFU/hqdefault.jpg",
  alt: "아이들 - (여자)아이들((G)I-DLE) _ 퀸카(Queencard) | BE-RIC VIDEO | 비릭비디오 | 미연 민니 소연 우기 슈화 (2023-05-30)",
  title: "(여자)아이들((G)I-DLE) _ 퀸카(Queencard) | BE-RIC VIDEO | 비릭비디오 | 미연 민니 소연 우기 슈화 (2023-05-30)"
},
{
  link: "https://www.youtube.com/watch?v=SxCTvsBPyfM",
  category: "LIVE-COVER-DANCE",
  member: "민니",
  year: "2023",
  thumbnail: "https://i.ytimg.com/vi/SxCTvsBPyfM/hqdefault.jpg",
  alt: "민니 - 힐링 되는 차분한 음색❣️ 민니(MINNIE)♬ 'beside you'｜비긴어게인 오픈마이크 (2023-05-29)",
  title: "힐링 되는 차분한 음색❣️ 민니(MINNIE)♬ 'beside you'｜비긴어게인 오픈마이크 (2023-05-29)"
},
{
  link: "https://www.youtube.com/watch?v=GItqsEiHde4",
  category: "LIVE-COVER-DANCE",
  member: "미연",
  year: "2023",
  thumbnail: "https://i.ytimg.com/vi/GItqsEiHde4/hqdefault.jpg",
  alt: "미연 - [리무진서비스] EP.64 (여자)아이들 미연 | (G)I-DLE MIYEON | 퀸카(Queencard), When This Rain Stops, Teenage Fantasy (2023-05-23)",
  title: "[리무진서비스] EP.64 (여자)아이들 미연 | (G)I-DLE MIYEON | 퀸카(Queencard), When This Rain Stops, Teenage Fantasy (2023-05-23)"
},
{
  link: "https://www.youtube.com/watch?v=LIZ31XJVG5o",
  category: "LIVE-COVER-DANCE",
  member: "민니",
  year: "2023",
  thumbnail: "https://i.ytimg.com/vi/LIZ31XJVG5o/hqdefault.jpg",
  alt: "민니 - (여자)아이들 신곡 라이브 최초 공개! 민니(MINNIE)♬ 'Paradise'｜비긴어게인 오픈마이크 (2023-05-22)",
  title: "(여자)아이들 신곡 라이브 최초 공개! 민니(MINNIE)♬ 'Paradise'｜비긴어게인 오픈마이크 (2023-05-22)"
},
{
  link: "https://www.youtube.com/watch?v=YVeqXQypiwQ",
  category: "LIVE-COVER-DANCE",
  member: "민니",
  year: "2023",
  thumbnail: "https://i.ytimg.com/vi/YVeqXQypiwQ/hqdefault.jpg",
  alt: "민니 - 격정적인 두 사람의 듀엣 임한별(ONESTAR)X민니(MINNIE)의♬ 'Die For You'｜비긴어게인 오픈마이크 (2023-05-22)",
  title: "격정적인 두 사람의 듀엣 임한별(ONESTAR)X민니(MINNIE)의♬ 'Die For You'｜비긴어게인 오픈마이크 (2023-05-22)"
},
{
  link: "https://www.youtube.com/watch?v=fBQ9HAe1UrE",
  category: "LIVE-COVER-DANCE",
  member: "아이들",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/fBQ9HAe1UrE/hqdefault.jpg",
  alt: "아이들 - 쿨룩 LIVE ▷ (여자)아이들 '퀸카(Queencard)' - 노래방 ver. / [박명수의 라디오쇼] I KBS 230522 방송 (2022-05-22)",
  title: "쿨룩 LIVE ▷ (여자)아이들 '퀸카(Queencard)' - 노래방 ver. / [박명수의 라디오쇼] I KBS 230522 방송 (2022-05-22)"
},
{
  link: "https://www.youtube.com/watch?v=63CR6ssrvr8",
  category: "LIVE-COVER-DANCE",
  member: "아이들",
  year: "2023",
  thumbnail: "https://i.ytimg.com/vi/63CR6ssrvr8/hqdefault.jpg",
  alt: "아이들 - 퀸카(Queencard) - (여자)아이들 [더 시즌즈-최정훈의 밤의공원] | KBS 230521 방송 (2023-05-21)",
  title: "퀸카(Queencard) - (여자)아이들 [더 시즌즈-최정훈의 밤의공원] | KBS 230521 방송 (2023-05-21)"
},
{
  link: "https://www.youtube.com/watch?v=mxwX-dUMR0Y",
  category: "LIVE-COVER-DANCE",
  member: "아이들",
  year: "2023",
  thumbnail: "https://i.ytimg.com/vi/mxwX-dUMR0Y/hqdefault.jpg",
  alt: "아이들 - 밤의 공원을 위해 (여자)아이들이 준비한 잔나비의 ‘주저하는 연인들을 위해’♪ [더 시즌즈-최정훈의 밤의공원] | KBS 230521 방송 (2023-05-21)",
  title: "밤의 공원을 위해 (여자)아이들이 준비한 잔나비의 ‘주저하는 연인들을 위해’♪ [더 시즌즈-최정훈의 밤의공원] | KBS 230521 방송 (2023-05-21)"
},
{
  link: "https://www.youtube.com/watch?v=5hVBjS1Vgjs",
  category: "LIVE-COVER-DANCE",
  member: "아이들",
  year: "2023",
  thumbnail: "https://i.ytimg.com/vi/5hVBjS1Vgjs/hqdefault.jpg",
  alt: "아이들 - [세로] (여자) 아이들 - 주저하는 연인들을 위해 [더 시즌즈-최정훈의 밤의공원] | KBS 230521 방송 (2023-05-21)",
  title: "[세로] (여자) 아이들 - 주저하는 연인들을 위해 [더 시즌즈-최정훈의 밤의공원] | KBS 230521 방송 (2023-05-21)"
},
{
  link: "https://www.youtube.com/watch?v=f0eQbs0oP8Q",
  category: "LIVE-COVER-DANCE",
  member: "아이들",
  year: "2023",
  thumbnail: "https://i.ytimg.com/vi/f0eQbs0oP8Q/hqdefault.jpg",
  alt: "아이들 - [릴레이댄스] (여자)아이들((G)I-DLE) - 퀸카 (Queencard) (4K) (2023-05-19)",
  title: "[릴레이댄스] (여자)아이들((G)I-DLE) - 퀸카 (Queencard) (4K) (2023-05-19)"
},
{
  link: "https://www.youtube.com/watch?v=iHGv2nIvodo",
  category: "LIVE-COVER-DANCE",
  member: "아이들",
  year: "2023",
  thumbnail: "https://i.ytimg.com/vi/iHGv2nIvodo/hqdefault.jpg",
  alt: "아이들 - (여자)아이들((G)I-DLE) _ 퀸카(Queencard) | 1theKILLPO | 원더킬포 | 킬포인트 | 퍼포먼스 | Performance | 미연 민니 소연 우기 슈화 (2023-05-18)",
  title: "(여자)아이들((G)I-DLE) _ 퀸카(Queencard) | 1theKILLPO | 원더킬포 | 킬포인트 | 퍼포먼스 | Performance | 미연 민니 소연 우기 슈화 (2023-05-18)"
},
{
  link: "https://www.youtube.com/watch?v=92_JD2k-Bco",
  category: "LIVE-COVER-DANCE",
  member: "아이들",
  year: "2023",
  thumbnail: "https://i.ytimg.com/vi/92_JD2k-Bco/hqdefault.jpg",
  alt: "아이들 - 쿨룩 LIVE ▷(여자)아이들 #GIdle '퀸카' 라이브 / [비투비의 키스 더 라디오] I KBS 230516 방송 (2023-05-16)",
  title: "쿨룩 LIVE ▷(여자)아이들 #GIdle '퀸카' 라이브 / [비투비의 키스 더 라디오] I KBS 230516 방송 (2023-05-16)"
},
{
  link: "https://www.youtube.com/watch?v=et3VDbL7cIA",
  category: "LIVE-COVER-DANCE",
  member: "아이들",
  year: "2023",
  thumbnail: "https://i.ytimg.com/vi/et3VDbL7cIA/hqdefault.jpg",
  alt: "아이들 - (여자)아이들((G)I-DLE)의 킬링보이스를 라이브로! - 퀸카, TOMBOY, 말리지마, POP/STARS, MY BAG, 한, 덤디덤디| 딩고뮤직 | Dingo Music (2023-05-16)",
  title: "(여자)아이들((G)I-DLE)의 킬링보이스를 라이브로! - 퀸카, TOMBOY, 말리지마, POP/STARS, MY BAG, 한, 덤디덤디| 딩고뮤직 | Dingo Music (2023-05-16)"
},
{
  link: "https://www.youtube.com/watch?v=3MhPVbOij1U",
  category: "LIVE-COVER-DANCE",
  member: "민니",
  year: "2023",
  thumbnail: "https://i.ytimg.com/vi/3MhPVbOij1U/hqdefault.jpg",
  alt: "민니 - 악당으로 변신한 민니의(MINNIE)의 새로운 모습😈 '빌런(Villain)'｜비긴어게인 오픈마이크 (2023-05-15)",
  title: "악당으로 변신한 민니의(MINNIE)의 새로운 모습😈 '빌런(Villain)'｜비긴어게인 오픈마이크 (2023-05-15)"
},
{
  link: "https://www.youtube.com/watch?v=Xmk3nBjraTY",
  category: "LIVE-COVER-DANCE",
  member: "민니",
  year: "2023",
  thumbnail: "https://i.ytimg.com/vi/Xmk3nBjraTY/hqdefault.jpg",
  alt: "민니 - Pink Moment로 가득찬 민니(MINNIE)의 핑크빛 Stage-X 라이브 무대ㅣ딩고뮤직ㅣDingo Music (2023-05-11)",
  title: "Pink Moment로 가득찬 민니(MINNIE)의 핑크빛 Stage-X 라이브 무대ㅣ딩고뮤직ㅣDingo Music (2023-05-11)"
},
{
  link: "https://www.youtube.com/watch?v=Z79g-rwUWec",
  category: "LIVE-COVER-DANCE",
  member: "아이들",
  year: "2023",
  thumbnail: "https://i.ytimg.com/vi/Z79g-rwUWec/hqdefault.jpg",
  alt: "아이들 - X-RATED - PINK YOUR MOMENT (45s ver) (2023-05-11)",
  title: "X-RATED - PINK YOUR MOMENT (45s ver) (2023-05-11)"
},
{
  link: "https://www.youtube.com/watch?v=SLG5LJNkqec",
  category: "LIVE-COVER-DANCE",
  member: "아이들",
  year: "2023",
  thumbnail: "https://i.ytimg.com/vi/SLG5LJNkqec/hqdefault.jpg",
  alt: "아이들 - [리무진서비스] EP.62 이무진 | LEE MU JIN | 신호등, 잠깐 시간 될까, 눈이 오잖아 (2023-05-09)",
  title: "[리무진서비스] EP.62 이무진 | LEE MU JIN | 신호등, 잠깐 시간 될까, 눈이 오잖아 (2023-05-09)"
},
{
  link: "https://www.youtube.com/watch?v=HMKFv28JSo0",
  category: "LIVE-COVER-DANCE",
  member: "아이들",
  year: "2023",
  thumbnail: "https://i.ytimg.com/vi/HMKFv28JSo0/hqdefault.jpg",
  alt: "아이들 - Look at (여자)아이들! 잠실의 열기를 더해준 TOMBOY 공연🔥 [트윈스REC] (2023-05-01)",
  title: "Look at (여자)아이들! 잠실의 열기를 더해준 TOMBOY 공연🔥 [트윈스REC] (2023-05-01)"
},
{
  link: "https://www.youtube.com/watch?v=9CiLGS8l6vQ",
  category: "LIVE-COVER-DANCE",
  member: "아이들",
  year: "2023",
  thumbnail: "https://i.ytimg.com/vi/9CiLGS8l6vQ/hqdefault.jpg",
  alt: "아이들 - [KCON 2023 THAILAND] (G)I-DLE - TOMBOY @DREAM STAGE | Mnet 230406 방송 (2023-04-06)",
  title: "[KCON 2023 THAILAND] (G)I-DLE - TOMBOY @DREAM STAGE | Mnet 230406 방송 (2023-04-06)"
},
{
  link: "https://www.youtube.com/watch?v=6Nxsif96Pro",
  category: "LIVE-COVER-DANCE",
  member: "아이들",
  year: "2023",
  thumbnail: "https://i.ytimg.com/vi/6Nxsif96Pro/hqdefault.jpg",
  alt: "아이들 - [Mnet PRIME SHOW] 아이들의 선물 같은 앵콜 무대, ♬ My Bag - (G)I-DLE | Mnet 230329 방송 (2023-03-29)",
  title: "[Mnet PRIME SHOW] 아이들의 선물 같은 앵콜 무대, ♬ My Bag - (G)I-DLE | Mnet 230329 방송 (2023-03-29)"
},
{
  link: "https://www.youtube.com/watch?v=L2ancO9U57s",
  category: "LIVE-COVER-DANCE",
  member: "아이들",
  year: "2023",
  thumbnail: "https://i.ytimg.com/vi/L2ancO9U57s/hqdefault.jpg",
  alt: "아이들 - [Mnet PRIME SHOW] 세상 어디에도 없던 컬래버레이션! ♬ That That (Feat. PSY) - (G)I-DLE | Mnet 230329 방송 (2023-03-29)",
  title: "[Mnet PRIME SHOW] 세상 어디에도 없던 컬래버레이션! ♬ That That (Feat. PSY) - (G)I-DLE | Mnet 230329 방송 (2023-03-29)"
},
{
  link: "https://www.youtube.com/watch?v=pmT8kj019iQ",
  category: "LIVE-COVER-DANCE",
  member: "아이들",
  year: "2023",
  thumbnail: "https://i.ytimg.com/vi/pmT8kj019iQ/hqdefault.jpg",
  alt: "아이들 - [Mnet PRIME SHOW] 방송 최초 공개! ♬ VILLAIN DIES - (G)I-DLE | Mnet 230329 방송 (2023-03-29)",
  title: "[Mnet PRIME SHOW] 방송 최초 공개! ♬ VILLAIN DIES - (G)I-DLE | Mnet 230329 방송 (2023-03-29)"
},
{
  link: "https://www.youtube.com/watch?v=pdEzfr8KDgo",
  category: "LIVE-COVER-DANCE",
  member: "민니",
  year: "2023",
  thumbnail: "https://i.ytimg.com/vi/pdEzfr8KDgo/hqdefault.jpg",
  alt: "민니 - [DGG PRESENTS] Anne-Marie X 민니 ((여자)아이들) – Expectations | K+POP #앤마리 #민니 #콜라보 (2023-03-16)",
  title: "[DGG PRESENTS] Anne-Marie X 민니 ((여자)아이들) – Expectations | K+POP #앤마리 #민니 #콜라보 (2023-03-16)"
},
{
  link: "https://www.youtube.com/watch?v=LghUlIJi18s",
  category: "LIVE-COVER-DANCE",
  member: "아이들",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/LghUlIJi18s/hqdefault.jpg",
  alt: "아이들 - 쿨룩 LIVE ▷(여자)아이들 'TOMBOY' / [박명수의 라디오쇼]ㅣKBS 221114 방송 (2022-11-14)",
  title: "쿨룩 LIVE ▷(여자)아이들 'TOMBOY' / [박명수의 라디오쇼]ㅣKBS 221114 방송 (2022-11-14)"
},
{
  link: "https://www.youtube.com/watch?v=Et6pQpSidJ0",
  category: "LIVE-COVER-DANCE",
  member: "아이들",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/Et6pQpSidJ0/hqdefault.jpg",
  alt: "아이들 - [EyeContact Ver.👀] (여자)아이들((G)I-DLE) _ Nxde  | 1theKILLPO | 원더킬포 | 아이컨택 | Facecam | 미연 민니 소연 우기 슈화 (2022-11-11)",
  title: "[EyeContact Ver.👀] (여자)아이들((G)I-DLE) _ Nxde  | 1theKILLPO | 원더킬포 | 아이컨택 | Facecam | 미연 민니 소연 우기 슈화 (2022-11-11)"
},
{
  link: "https://www.youtube.com/watch?v=mgt350Xhf8Q",
  category: "LIVE-COVER-DANCE",
  member: "아이들",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/mgt350Xhf8Q/hqdefault.jpg",
  alt: "아이들 - 쿨룩 LIVE ▷ (여자)아이들((G)I-DLE) ‘Nxde’ / [비투비의 키스 더 라디오] l KBS 221020 방송 (2022-10-20)",
  title: "쿨룩 LIVE ▷ (여자)아이들((G)I-DLE) ‘Nxde’ / [비투비의 키스 더 라디오] l KBS 221020 방송 (2022-10-20)"
},
{
  link: "https://www.youtube.com/watch?v=r_u9wz5AkRg",
  category: "LIVE-COVER-DANCE",
  member: "아이들",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/r_u9wz5AkRg/hqdefault.jpg",
  alt: "아이들 - (여자)아이들((G)I-DLE) _ Nxde  | 1theKILLPO | 원더킬포 | 킬포인트 | 퍼포먼스 | Performance | 4K | 미연 민니 소연 우기 슈화 (2022-10-20)",
  title: "(여자)아이들((G)I-DLE) _ Nxde  | 1theKILLPO | 원더킬포 | 킬포인트 | 퍼포먼스 | Performance | 4K | 미연 민니 소연 우기 슈화 (2022-10-20)"
},
{
  link: "https://www.youtube.com/watch?v=dNCGGpQzZ5M",
  category: "LIVE-COVER-DANCE",
  member: "아이들",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/dNCGGpQzZ5M/hqdefault.jpg",
  alt: "아이들 - [LIVE] (여자)아이들 (G)I-DLE 'Nxde'(누드) Showcase Stage 쇼케이스 무대 (미연·민니·소연·우기·슈화) (2022-10-17)",
  title: "[LIVE] (여자)아이들 (G)I-DLE 'Nxde'(누드) Showcase Stage 쇼케이스 무대 (미연·민니·소연·우기·슈화) (2022-10-17)"
},
{
  link: "https://www.youtube.com/watch?v=_Ofb0OhD4Vk",
  category: "LIVE-COVER-DANCE",
  member: "미연",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/_Ofb0OhD4Vk/hqdefault.jpg",
  alt: "미연 - [모아보기] 🌷계절이 봄으로 변하는 영상🌷 (여자)아이들 미연 노래모음 #오픈마이크 (2022-08-18)",
  title: "[모아보기] 🌷계절이 봄으로 변하는 영상🌷 (여자)아이들 미연 노래모음 #오픈마이크 (2022-08-18)"
},
{
  link: "https://www.youtube.com/watch?v=AA8amPGXhKw",
  category: "LIVE-COVER-DANCE",
  member: "민니",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/AA8amPGXhKw/hqdefault.jpg",
  alt: "민니 - WEBTOON MV | HWAA (วันทองไร้ใจ ver.) ร้องโดย #MINNIE | Studio Live (2022-07-17)",
  title: "WEBTOON MV | HWAA (วันทองไร้ใจ ver.) ร้องโดย #MINNIE | Studio Live (2022-07-17)"
},
{
  link: "https://www.youtube.com/watch?v=_1VFivt8bLI",
  category: "LIVE-COVER-DANCE",
  member: "아이들",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/_1VFivt8bLI/hqdefault.jpg",
  alt: "아이들 - ⚠️단독⚠️ (G)I-DLE (아이들) 완전체 TOMBOY 큐티 ver. (2022-06-29)",
  title: "⚠️단독⚠️ (G)I-DLE (아이들) 완전체 TOMBOY 큐티 ver. (2022-06-29)"
},
{
  link: "https://www.youtube.com/watch?v=t2bTZ42cNTw",
  category: "LIVE-COVER-DANCE",
  member: "아이들",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/t2bTZ42cNTw/hqdefault.jpg",
  alt: "아이들 - [풀버전] (여자)아이들 – 너 없인 안 된다 & 비가 오는 날엔 ♪ 《뉴페스타(newfesta)》 (2022-06-28)",
  title: "[풀버전] (여자)아이들 – 너 없인 안 된다 & 비가 오는 날엔 ♪ 《뉴페스타(newfesta)》 (2022-06-28)"
},
{
  link: "https://www.youtube.com/watch?v=dino0IQ0vRw",
  category: "LIVE-COVER-DANCE",
  member: "아이들",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/dino0IQ0vRw/hqdefault.jpg",
  alt: "아이들 - 여름 장마에 들으면 터지는 감성💦 (여자)아이들 〈비가 오는 날엔〉♪ 뉴페스타 4회 | JTBC 220628 방송 (2022-06-28)",
  title: "여름 장마에 들으면 터지는 감성💦 (여자)아이들 〈비가 오는 날엔〉♪ 뉴페스타 4회 | JTBC 220628 방송 (2022-06-28)"
},
{
  link: "https://www.youtube.com/watch?v=vHgfAIAa_X4",
  category: "LIVE-COVER-DANCE",
  member: "소연",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/vHgfAIAa_X4/hqdefault.jpg",
  alt: "소연 - [복면가왕] TV📺소리 듣고 땃쥐나오네~하고 봤는데 가면 쓰고 있는 mood.. 1초만 들어도 울 소연이❤️ㅣ#소연 #여자아이들 #복면가왕 #엠뚜루마뚜루 MBC220508방송 (2022-05-14)",
  title: "[복면가왕] TV📺소리 듣고 땃쥐나오네~하고 봤는데 가면 쓰고 있는 mood.. 1초만 들어도 울 소연이❤️ㅣ#소연 #여자아이들 #복면가왕 #엠뚜루마뚜루 MBC220508방송 (2022-05-14)"
},
{
  link: "https://www.youtube.com/watch?v=4XopixBylh8",
  category: "LIVE-COVER-DANCE",
  member: "우기",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/4XopixBylh8/hqdefault.jpg",
  alt: "우기 - [리무진서비스] EP12. (여자)아이들 우기 | (G)I-DLE YUQI | TOMBOY, Thinking 'Bout You, 그때 그 아인, 1,2,3,4 (2022-05-10)",
  title: "[리무진서비스] EP12. (여자)아이들 우기 | (G)I-DLE YUQI | TOMBOY, Thinking 'Bout You, 그때 그 아인, 1,2,3,4 (2022-05-10)"
},
{
  link: "https://www.youtube.com/watch?v=_n5RSRkqQ8k",
  category: "LIVE-COVER-DANCE",
  member: "미연",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/_n5RSRkqQ8k/hqdefault.jpg",
  alt: "미연 - 미연(MIYEON) - ROSE SPECIAL LIVE CLIP 🌹｜나일론뮤직 NYLON MUSIC LIVE ♪｜(여자)아이들 미연｜로즈 라이브 클립 & 인터뷰 (2022-05-06)",
  title: "미연(MIYEON) - ROSE SPECIAL LIVE CLIP 🌹｜나일론뮤직 NYLON MUSIC LIVE ♪｜(여자)아이들 미연｜로즈 라이브 클립 & 인터뷰 (2022-05-06)"
},
{
  link: "https://www.youtube.com/watch?v=dT42WN-mgA4",
  category: "LIVE-COVER-DANCE",
  member: "미연",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/dT42WN-mgA4/hqdefault.jpg",
  alt: "미연 - 쿨룩 LIVE ▷ 미연((G)I-DLE) ‘Drive’ / [비투비의 키스 더 라디오] l KBS 220427 방송 (2022-04-27)",
  title: "쿨룩 LIVE ▷ 미연((G)I-DLE) ‘Drive’ / [비투비의 키스 더 라디오] l KBS 220427 방송 (2022-04-27)"
},
{
  link: "https://www.youtube.com/watch?v=7BDms0-EZQA",
  category: "LIVE-COVER-DANCE",
  member: "아이들",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/7BDms0-EZQA/hqdefault.jpg",
  alt: "아이들 - [플리예고LIVE] (여자)아이들 – TOMBOY | 뭐? 어젯밤에 (옆반)아이들이 학교 뒤집어놨다고?🤷‍ (2022-04-06)",
  title: "[플리예고LIVE] (여자)아이들 – TOMBOY | 뭐? 어젯밤에 (옆반)아이들이 학교 뒤집어놨다고?🤷‍ (2022-04-06)"
},
{
  link: "https://www.youtube.com/watch?v=pM1RsWhg8ZA",
  category: "LIVE-COVER-DANCE",
  member: "아이들",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/pM1RsWhg8ZA/hqdefault.jpg",
  alt: "아이들 - [거치면 흥하리] (여자)아이들((G)I-DLE) - TOMBOY (앞마당 멤꾸댄스 Full Ver.) | HIT Village (2022-04-05)",
  title: "[거치면 흥하리] (여자)아이들((G)I-DLE) - TOMBOY (앞마당 멤꾸댄스 Full Ver.) | HIT Village (2022-04-05)"
},
{
  link: "https://www.youtube.com/watch?v=t0m4ZZjv83w",
  category: "LIVE-COVER-DANCE",
  member: "아이들",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/t0m4ZZjv83w/hqdefault.jpg",
  alt: "아이들 - [릴레이댄스 어게인] (여자)아이들 - Nobody (Original Song by. Wonder Girls)(4K) (2022-04-02)",
  title: "[릴레이댄스 어게인] (여자)아이들 - Nobody (Original Song by. Wonder Girls)(4K) (2022-04-02)"
},
{
  link: "https://www.youtube.com/watch?v=C9JnQa42xhM",
  category: "LIVE-COVER-DANCE",
  member: "아이들",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/C9JnQa42xhM/hqdefault.jpg",
  alt: "아이들 - [릴레이댄스] (여자)아이들((G)I-DLE) - TOMBOY (4K) (2022-03-20)",
  title: "[릴레이댄스] (여자)아이들((G)I-DLE) - TOMBOY (4K) (2022-03-20)"
},
{
  link: "https://www.youtube.com/watch?v=RSa6WoKk0GI",
  category: "LIVE-COVER-DANCE",
  member: "아이들",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/RSa6WoKk0GI/hqdefault.jpg",
  alt: "아이들 - 쿨룩 LIVE ▷ (여자)아이들((G)I-DLE) ‘TOMBOY(톰보이)’ / [비투비의 키스 더 라디오] l KBS 220318 방송 (2022-03-18)",
  title: "쿨룩 LIVE ▷ (여자)아이들((G)I-DLE) ‘TOMBOY(톰보이)’ / [비투비의 키스 더 라디오] l KBS 220318 방송 (2022-03-18)"
},
{
  link: "https://www.youtube.com/watch?v=ql-q-biGUlU",
  category: "LIVE-COVER-DANCE",
  member: "아이들",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/ql-q-biGUlU/hqdefault.jpg",
  alt: "아이들 - [BE ORIGINAL] (G)I-DLE ((여자)아이들) 'TOMBOY' (4K) (2022-03-18)",
  title: "[BE ORIGINAL] (G)I-DLE ((여자)아이들) 'TOMBOY' (4K) (2022-03-18)"
},
{
  link: "https://www.youtube.com/watch?v=uU-7By1aA9o",
  category: "LIVE-COVER-DANCE",
  member: "민니,미연,우기",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/uU-7By1aA9o/hqdefault.jpg",
  alt: "민니,미연,우기 - 【로켓피플】 (여자)아이들 보컬 미연X우기X민니 복면가왕 모음💝 단체 무대도 사랑하지만 솔로도 사랑해💓 보컬 실력 NEVER DIE❗️｜복면가왕｜TVPP｜MBC 210228 방송 (2022-03-09)",
  title: "【로켓피플】 (여자)아이들 보컬 미연X우기X민니 복면가왕 모음💝 단체 무대도 사랑하지만 솔로도 사랑해💓 보컬 실력 NEVER DIE❗️｜복면가왕｜TVPP｜MBC 210228 방송 (2022-03-09)"
},

// 🔽 새로 불러온 49개 항목
{
  link: "https://www.youtube.com/watch?v=G0kw8mhnCMc",
  category: "LIVE-COVER-DANCE",
  member: "민니",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/G0kw8mhnCMc/hqdefault.jpg",
  alt: "민니 - [리무진서비스] 민니 - 구애 | 직캠서비스 (2022-02-22)",
  title: "[리무진서비스] 민니 - 구애 | 직캠서비스 (2022-02-22)"
},
{
  link: "https://www.youtube.com/watch?v=p2UeSrQHn_c",
  category: "LIVE-COVER-DANCE",
  member: "민니",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/p2UeSrQHn_c/hqdefault.jpg",
  alt: "민니 - [리무진서비스] EP01. (여자)아이들 민니 | (G)I-DLE MINNIE | Senorita, 구애, 신호등, Lost Stars | TH/EN (2022-02-22)",
  title: "[리무진서비스] EP01. (여자)아이들 민니 | (G)I-DLE MINNIE | Senorita, 구애, 신호등, Lost Stars | TH/EN (2022-02-22)"
},
{
  link: "https://www.youtube.com/watch?v=QGv_JxODoCk",
  category: "LIVE-COVER-DANCE",
  member: "소연",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/QGv_JxODoCk/hqdefault.jpg",
  alt: "소연 - 소연 ((여자)아이들) - A Little Lovin [유희열의 스케치북/You Heeyeol’s Sketchbook] | KBS 220218 방송 (2022-02-18)",
  title: "소연 ((여자)아이들) - A Little Lovin [유희열의 스케치북/You Heeyeol’s Sketchbook] | KBS 220218 방송 (2022-02-18)"
},
{
  link: "https://www.youtube.com/watch?v=8Xw3ngC4q_M",
  category: "LIVE-COVER-DANCE",
  member: "소연",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/8Xw3ngC4q_M/hqdefault.jpg",
  alt: "소연 - 전소연 - 난리나 [유희열의 스케치북/You Heeyeol’s Sketchbook] | KBS 220211 방송 (2022-02-11)",
  title: "전소연 - 난리나 [유희열의 스케치북/You Heeyeol’s Sketchbook] | KBS 220211 방송 (2022-02-11)"
},
{
  link: "https://www.youtube.com/watch?v=EUXCd_xGtOc",
  category: "LIVE-COVER-DANCE",
  member: "소연",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/EUXCd_xGtOc/hqdefault.jpg",
  alt: "소연 - JEON SOYEON (전소연) - Weather (웨더)  | Guest Show | Beatbox To World Live 2021 (2022-01-12)",
  title: "JEON SOYEON (전소연) - Weather (웨더)  | Guest Show | Beatbox To World Live 2021 (2022-01-12)"
},
{
  link: "https://www.youtube.com/watch?v=bu_HqqkN534",
  category: "LIVE-COVER-DANCE",
  member: "민니,미연",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/bu_HqqkN534/hqdefault.jpg",
  alt: "민니,미연 - 💌촛불하나 - JUN. K, 이기광, 서은광, 조권, 효정, 미연, 민니 (단체곡) I 아돌라스쿨 : 홈커밍데이 겨울방학 특집 EP.02 스페셜 클립 (2022-01-04)",
  title: "💌촛불하나 - JUN. K, 이기광, 서은광, 조권, 효정, 미연, 민니 (단체곡) I 아돌라스쿨 : 홈커밍데이 겨울방학 특집 EP.02 스페셜 클립 (2022-01-04)"
},
{
  link: "https://www.youtube.com/watch?v=aJ6fMfvgZ9g",
  category: "LIVE-COVER-DANCE",
  member: "민니,미연",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/aJ6fMfvgZ9g/hqdefault.jpg",
  alt: "민니,미연 - 🎙눈의 꽃 - 미연 & 민니 ((여자)아이들) I 아돌라스쿨 : 홈커밍데이 겨울방학 특집 EP.02 스페셜 클립 (2022-01-04)",
  title: "🎙눈의 꽃 - 미연 & 민니 ((여자)아이들) I 아돌라스쿨 : 홈커밍데이 겨울방학 특집 EP.02 스페셜 클립 (2022-01-04)"
},
{
  link: "https://www.youtube.com/watch?v=UQ883uYqKxM",
  category: "LIVE-COVER-DANCE",
  member: "민니,미연",
  year: "2021",
  thumbnail: "https://i.ytimg.com/vi/UQ883uYqKxM/hqdefault.jpg",
  alt: "민니,미연 - 🎙We Already Fell in Love - 미연 & 민니 ((여자)아이들) I 아돌라스쿨 : 홈커밍데이 겨울방학 특집 EP.01 스페셜 클립 (2021-12-29)",
  title: "🎙We Already Fell in Love - 미연 & 민니 ((여자)아이들) I 아돌라스쿨 : 홈커밍데이 겨울방학 특집 EP.01 스페셜 클립 (2021-12-29)"
},
{
  link: "https://www.youtube.com/watch?v=8jdKZakPGHw",
  category: "LIVE-COVER-DANCE",
  member: "소연",
  year: "2021",
  thumbnail: "https://i.ytimg.com/vi/8jdKZakPGHw/hqdefault.jpg",
  alt: "소연 - [방과후 설렘 선공개] 방과후 설렘 담임선생님 퍼포먼스 (여자)아이들 소연ver., MBC 211128 방송 (2021-11-18)",
  title: "[방과후 설렘 선공개] 방과후 설렘 담임선생님 퍼포먼스 (여자)아이들 소연ver., MBC 211128 방송 (2021-11-18)"
},
{
  link: "https://www.youtube.com/watch?v=qnB6vWZTp2I",
  category: "LIVE-COVER-DANCE",
  member: "아이들",
  year: "2021",
  thumbnail: "https://i.ytimg.com/vi/qnB6vWZTp2I/hqdefault.jpg",
  alt: "아이들 - 纯享：(G)I-DLE宋雨琦《Big Up 咆哮》开场天使造型绝美 超强高音“Never Hold Back Your Fire” | 爆裂舞台 EP10 | Stage Boom | iQiyi精选 (2021-10-08)",
  title: "纯享：(G)I-DLE宋雨琦《Big Up 咆哮》开场天使造型绝美 超强高音“Never Hold Back Your Fire” | 爆裂舞台 EP10 | Stage Boom | iQiyi精选 (2021-10-08)"
},
{
  link: "https://www.youtube.com/watch?v=E66MOzep6js",
  category: "LIVE-COVER-DANCE",
  member: "아이들",
  year: "2021",
  thumbnail: "https://i.ytimg.com/vi/E66MOzep6js/hqdefault.jpg",
  alt: "아이들 - 纯享：宋雨琦《Lion》女王范儿超slay 烟嗓低迷性感十足 | 爆裂舞台 EP01 | Stage Boom | iQiyi精选 (2021-08-06)",
  title: "纯享：宋雨琦《Lion》女王范儿超slay 烟嗓低迷性感十足 | 爆裂舞台 EP01 | Stage Boom | iQiyi精选 (2021-08-06)"
},
{
  link: "https://www.youtube.com/watch?v=MDtUnM30iBs",
  category: "LIVE-COVER-DANCE",
  member: "소연",
  year: "2021",
  thumbnail: "https://i.ytimg.com/vi/MDtUnM30iBs/hqdefault.jpg",
  alt: "소연 - 쿨룩 LIVE ▷소연(of (여자)아이들) 'Psycho' /[강한나의 볼륨을 높여요]｜KBS 210726 방송 (2021-07-26)",
  title: "쿨룩 LIVE ▷소연(of (여자)아이들) 'Psycho' /[강한나의 볼륨을 높여요]｜KBS 210726 방송 (2021-07-26)"
},
{
  link: "https://www.youtube.com/watch?v=1IoOSDivRUs",
  category: "LIVE-COVER-DANCE",
  member: "소연",
  year: "2021",
  thumbnail: "https://i.ytimg.com/vi/1IoOSDivRUs/hqdefault.jpg",
  alt: "소연 - 전소연 -삠삠 (BEAM BEAM) [유희열의 스케치북/You Heeyeol’s Sketchbook] | KBS 210723 방송 (2021-07-23)",
  title: "전소연 -삠삠 (BEAM BEAM) [유희열의 스케치북/You Heeyeol’s Sketchbook] | KBS 210723 방송 (2021-07-23)"
},
{
  link: "https://www.youtube.com/watch?v=pxEDbr5fzdM",
  category: "LIVE-COVER-DANCE",
  member: "소연",
  year: "2021",
  thumbnail: "https://i.ytimg.com/vi/pxEDbr5fzdM/hqdefault.jpg",
  alt: "소연 - 네버랜드 모여라!! 여기 ‘하루 종일 비가 내렸어’ 부르는 전소연 있어요☆  [유희열의 스케치북/You Heeyeol’s Sketchbook] | KBS 210723 방송 (2021-07-23)",
  title: "네버랜드 모여라!! 여기 ‘하루 종일 비가 내렸어’ 부르는 전소연 있어요☆  [유희열의 스케치북/You Heeyeol’s Sketchbook] | KBS 210723 방송 (2021-07-23)"
},
{
  link: "https://www.youtube.com/watch?v=Oo9KsSgB-3o",
  category: "LIVE-COVER-DANCE",
  member: "소연",
  year: "2021",
  thumbnail: "https://i.ytimg.com/vi/Oo9KsSgB-3o/hqdefault.jpg",
  alt: "소연 - 전소연 -LION [유희열의 스케치북/You Heeyeol’s Sketchbook] | KBS 210723 방송 (2021-07-23)",
  title: "전소연 -LION [유희열의 스케치북/You Heeyeol’s Sketchbook] | KBS 210723 방송 (2021-07-23)"
},
{
  link: "https://www.youtube.com/watch?v=NWI9dXcC9xs",
  category: "LIVE-COVER-DANCE",
  member: "소연",
  year: "2021",
  thumbnail: "https://i.ytimg.com/vi/NWI9dXcC9xs/hqdefault.jpg",
  alt: "소연 - [가로 직캠] 전소연 - 하루 종일 비가 내렸어 (JEON SOYEON - FAN CAM) [유희열의 스케치북/You Heeyeol’s Sketchbook] | KBS 방송 (2021-07-23)",
  title: "[가로 직캠] 전소연 - 하루 종일 비가 내렸어 (JEON SOYEON - FAN CAM) [유희열의 스케치북/You Heeyeol’s Sketchbook] | KBS 방송 (2021-07-23)"
},
{
  link: "https://www.youtube.com/watch?v=ssusm3vIuzs",
  category: "LIVE-COVER-DANCE",
  member: "소연",
  year: "2021",
  thumbnail: "https://i.ytimg.com/vi/ssusm3vIuzs/hqdefault.jpg",
  alt: "소연 - ☆유없스 노래방☆ 미러볼 안경을 쓰고 전소연이 템포+3으로 부르는 코요태의 ‘우리의 꿈’ [유희열의 스케치북/You Heeyeol’s Sketchbook] | KBS 방송 (2021-07-22)",
  title: "☆유없스 노래방☆ 미러볼 안경을 쓰고 전소연이 템포+3으로 부르는 코요태의 ‘우리의 꿈’ [유희열의 스케치북/You Heeyeol’s Sketchbook] | KBS 방송 (2021-07-22)"
},
{
  link: "https://www.youtube.com/watch?v=da8OgvOnvWg",
  category: "LIVE-COVER-DANCE",
  member: "소연",
  year: "2021",
  thumbnail: "https://i.ytimg.com/vi/da8OgvOnvWg/hqdefault.jpg",
  alt: "소연 - 쿨룩 LIVE ▷소연(of (여자)아이들) 'Quit' /[정은지의 가요광장]｜KBS 210721 방송 (2021-07-21)",
  title: "쿨룩 LIVE ▷소연(of (여자)아이들) 'Quit' /[정은지의 가요광장]｜KBS 210721 방송 (2021-07-21)"
},
{
  link: "https://www.youtube.com/watch?v=BE2idbmJbG8",
  category: "LIVE-COVER-DANCE",
  member: "소연",
  year: "2021",
  thumbnail: "https://i.ytimg.com/vi/BE2idbmJbG8/hqdefault.jpg",
  alt: "소연 - 쿨룩 LIVE ▷ 전소연 ‘삠삠’ /[DAY6의 키스 더 라디오] ㅣ KBS 210711 방송 (2021-07-11)",
  title: "쿨룩 LIVE ▷ 전소연 ‘삠삠’ /[DAY6의 키스 더 라디오] ㅣ KBS 210711 방송 (2021-07-11)"
},
{
  link: "https://www.youtube.com/watch?v=jzNF6uY13uM",
  category: "LIVE-COVER-DANCE",
  member: "소연",
  year: "2021",
  thumbnail: "https://i.ytimg.com/vi/jzNF6uY13uM/hqdefault.jpg",
  alt: "소연 - [PLAY COLOR] 전소연(JEON SOYEON) - 삠삠 (BEAM BEAM) (2021-07-09)",
  title: "[PLAY COLOR] 전소연(JEON SOYEON) - 삠삠 (BEAM BEAM) (2021-07-09)"
},
{
  link: "https://www.youtube.com/watch?v=yQ_YZGrsx6M",
  category: "LIVE-COVER-DANCE",
  member: "소연",
  year: "2021",
  thumbnail: "https://i.ytimg.com/vi/yQ_YZGrsx6M/hqdefault.jpg",
  alt: "소연 - 전소연 - Is this bad b****** number? (Feat. 비비(BIBI), 이영지) | [DF LIVE] JEON SOYEON (2021-07-06)",
  title: "전소연 - Is this bad b****** number? (Feat. 비비(BIBI), 이영지) | [DF LIVE] JEON SOYEON (2021-07-06)"
},
{
  link: "https://www.youtube.com/watch?v=YtwCIIuLDsQ",
  category: "LIVE-COVER-DANCE",
  member: "소연",
  year: "2021",
  thumbnail: "https://i.ytimg.com/vi/YtwCIIuLDsQ/hqdefault.jpg",
  alt: "소연 - [LIVE] 전소연 _ 삠삠 (BEAM BEAM) | JEON SOYEON | (여자)아이들 | (G)I-DLE | The Booth | 더 부스 | 라이브 (2021-07-05)",
  title: "[LIVE] 전소연 _ 삠삠 (BEAM BEAM) | JEON SOYEON | (여자)아이들 | (G)I-DLE | The Booth | 더 부스 | 라이브 (2021-07-05)"
},
{
  link: "https://www.youtube.com/watch?v=hWiJ_SW0R_Q",
  category: "LIVE-COVER-DANCE",
  member: "미연",
  year: "2021",
  thumbnail: "https://i.ytimg.com/vi/hWiJ_SW0R_Q/hqdefault.jpg",
  alt: "미연 - 미연 ((여자)아이들) - 너는 나의 숨이였다 | 스페셜클립 | Special Clip | MIYEON | (G)I-DLE | Live | 4K (2021-05-28)",
  title: "미연 ((여자)아이들) - 너는 나의 숨이였다 | 스페셜클립 | Special Clip | MIYEON | (G)I-DLE | Live | 4K (2021-05-28)"
},
{
  link: "https://www.youtube.com/watch?v=TGMFDfNTgx8",
  category: "LIVE-COVER-DANCE",
  member: "소연,민니",
  year: "2021",
  thumbnail: "https://i.ytimg.com/vi/TGMFDfNTgx8/hqdefault.jpg",
  alt: "소연,민니 - Ep.3 라이브🎵 | 데뷔 후 처음 부르는 UNPRETTY RAPSTAR 명곡 | 여자아이들 (G)I-DLE 소연&민니 - 웃어 (2021-02-25)",
  title: "Ep.3 라이브🎵 | 데뷔 후 처음 부르는 UNPRETTY RAPSTAR 명곡 | 여자아이들 (G)I-DLE 소연&민니 - 웃어 (2021-02-25)"
},
{
  link: "https://www.youtube.com/watch?v=cXKKf2soP04",
  category: "LIVE-COVER-DANCE",
  member: "아이들",
  year: "2021",
  thumbnail: "https://i.ytimg.com/vi/cXKKf2soP04/hqdefault.jpg",
  alt: "아이들 - [랜덤플레이댄스ZIP] (군무)아이들❓❗ 불을 지펴라🔥 화(火花)려하게 주간아 찢고 간 아이들! l (여자)아이들((G)I-DLE) l RandomPlayDance (2021-01-31)",
  title: "[랜덤플레이댄스ZIP] (군무)아이들❓❗ 불을 지펴라🔥 화(火花)려하게 주간아 찢고 간 아이들! l (여자)아이들((G)I-DLE) l RandomPlayDance (2021-01-31)"
},
{
  link: "https://www.youtube.com/watch?v=JJk7Pd4XSzs",
  category: "LIVE-COVER-DANCE",
  member: "아이들",
  year: "2021",
  thumbnail: "https://i.ytimg.com/vi/JJk7Pd4XSzs/hqdefault.jpg",
  alt: "아이들 - [릴레이댄스 어게인] (여자)아이들((G)I-DLE) - 미쳐(Crazy) (Original Song by. 4MINUTE) (4K) (2021-01-30)",
  title: "[릴레이댄스 어게인] (여자)아이들((G)I-DLE) - 미쳐(Crazy) (Original Song by. 4MINUTE) (4K) (2021-01-30)"
},
{
  link: "https://www.youtube.com/watch?v=hM4FXyzsaAw",
  category: "LIVE-COVER-DANCE",
  member: "아이들",
  year: "2021",
  thumbnail: "https://i.ytimg.com/vi/hM4FXyzsaAw/hqdefault.jpg",
  alt: "아이들 - 다른 음색 3명의 만들어낸 깊은 하모니♥ (여자)아이들 - 널 사랑하지 않아 [유희열의 스케치북/You Heeyeol’s Sketchbook] | KBS 210115 방송 (2021-01-15)",
  title: "다른 음색 3명의 만들어낸 깊은 하모니♥ (여자)아이들 - 널 사랑하지 않아 [유희열의 스케치북/You Heeyeol’s Sketchbook] | KBS 210115 방송 (2021-01-15)"
},
{
  link: "https://www.youtube.com/watch?v=2IwBbCEo5pQ",
  category: "LIVE-COVER-DANCE",
  member: "아이들",
  year: "2021",
  thumbnail: "https://i.ytimg.com/vi/2IwBbCEo5pQ/hqdefault.jpg",
  alt: "아이들 - (여자)아이들 - LATATA+덤디덤디 (DUMDi DUMDi) [유희열의 스케치북/You Heeyeol’s Sketchbook] | KBS 210115 방송 (2021-01-15)",
  title: "(여자)아이들 - LATATA+덤디덤디 (DUMDi DUMDi) [유희열의 스케치북/You Heeyeol’s Sketchbook] | KBS 210115 방송 (2021-01-15)"
},
{
  link: "https://www.youtube.com/watch?v=S5DKGX88sLI",
  category: "LIVE-COVER-DANCE",
  member: "아이들",
  year: "2021",
  thumbnail: "https://i.ytimg.com/vi/S5DKGX88sLI/hqdefault.jpg",
  alt: "아이들 - [릴레이댄스] (여자)아이들((G)I-DLE) - 화(火花)(HWAA) (4K) (2021-01-15)",
  title: "[릴레이댄스] (여자)아이들((G)I-DLE) - 화(火花)(HWAA) (4K) (2021-01-15)"
},
{
  link: "https://www.youtube.com/watch?v=hB6DxEwJ7Tc",
  category: "LIVE-COVER-DANCE",
  member: "아이들",
  year: "2021",
  thumbnail: "https://i.ytimg.com/vi/hB6DxEwJ7Tc/hqdefault.jpg",
  alt: "아이들 - (여자)아이들((G)I-DLE) - 화(火花) ONE-CAM DANCE | 휴방위 직캠 (2021-01-14)",
  title: "(여자)아이들((G)I-DLE) - 화(火花) ONE-CAM DANCE | 휴방위 직캠 (2021-01-14)"
},
{
  link: "https://www.youtube.com/watch?v=LcGFqPhChLA",
  category: "LIVE-COVER-DANCE",
  member: "아이들",
  year: "2021",
  thumbnail: "https://i.ytimg.com/vi/LcGFqPhChLA/hqdefault.jpg",
  alt: "아이들 - [집방캠][4K] (여자)아이들((G)I-DLE) - 화(火花)(HWAA) LIVE | 두시탈출 컬투쇼 | 210114 (2021-01-14)",
  title: "[집방캠][4K] (여자)아이들((G)I-DLE) - 화(火花)(HWAA) LIVE | 두시탈출 컬투쇼 | 210114 (2021-01-14)"
},
{
  link: "https://www.youtube.com/watch?v=337omN7a2qk",
  category: "LIVE-COVER-DANCE",
  member: "아이들",
  year: "2021",
  thumbnail: "https://i.ytimg.com/vi/337omN7a2qk/hqdefault.jpg",
  alt: "아이들 - [랜덤플레이댄스FULL] 이게 아이들이지..☆ 불태울 준비 완료🔥 활짝 핀 아이들 군무! l 여자아이들((G)I-DLE) l RandomPlayDance (2021-01-13)",
  title: "[랜덤플레이댄스FULL] 이게 아이들이지..☆ 불태울 준비 완료🔥 활짝 핀 아이들 군무! l 여자아이들((G)I-DLE) l RandomPlayDance (2021-01-13)"
},
{
  link: "https://www.youtube.com/watch?v=MLrSdfX0ZXY",
  category: "LIVE-COVER-DANCE",
  member: "아이들",
  year: "2021",
  thumbnail: "https://i.ytimg.com/vi/MLrSdfX0ZXY/hqdefault.jpg",
  alt: "아이들 - (여자)아이들 _ 화(火花) | (G)I-DLE _ HWAA | 스페셜클립 | 퍼포먼스 | Special Clip | Performance | 미연 민니 수진 소연 우기 슈화 (2021-01-12)",
  title: "(여자)아이들 _ 화(火花) | (G)I-DLE _ HWAA | 스페셜클립 | 퍼포먼스 | Special Clip | Performance | 미연 민니 수진 소연 우기 슈화 (2021-01-12)"
},
{
  link: "https://www.youtube.com/watch?v=IgoqikBnGF4",
  category: "LIVE-COVER-DANCE",
  member: "아이들",
  year: "2020",
  thumbnail: "https://i.ytimg.com/vi/IgoqikBnGF4/hqdefault.jpg",
  alt: "아이들 - 💜 유하가 직접 불러봤어요 💜 '웬디(Wendy) - Good bye (뷰티인사이드 OST)'  커버 영상 || U HI 유하이 (2020-12-27)",
  title: "💜 유하가 직접 불러봤어요 💜 '웬디(Wendy) - Good bye (뷰티인사이드 OST)'  커버 영상 || U HI 유하이 (2020-12-27)"
},
{
  link: "https://www.youtube.com/watch?v=K-P0dgzYlUM",
  category: "LIVE-COVER-DANCE",
  member: "아이들",
  year: "2020",
  thumbnail: "https://i.ytimg.com/vi/K-P0dgzYlUM/hqdefault.jpg",
  alt: "아이들 - [Artist Of The Month] Choreo-Record with (G)I-DLE SOOJIN(수진) | December 2020 (ENG SUB) (2020-12-26)",
  title: "[Artist Of The Month] Choreo-Record with (G)I-DLE SOOJIN(수진) | December 2020 (ENG SUB) (2020-12-26)"
},
{
  link: "https://www.youtube.com/watch?v=F_m2j9lvTig",
  category: "LIVE-COVER-DANCE",
  member: "아이들",
  year: "2020",
  thumbnail: "https://i.ytimg.com/vi/F_m2j9lvTig/hqdefault.jpg",
  alt: "아이들 - [Artist Of The Month] 'Got It' covered by (G)I-DLE SOOJIN(수진) | December 2020 (4K) (2020-12-19)",
  title: "[Artist Of The Month] 'Got It' covered by (G)I-DLE SOOJIN(수진) | December 2020 (4K) (2020-12-19)"
},
{
  link: "https://www.youtube.com/watch?v=AFJDfT-ODcE",
  category: "LIVE-COVER-DANCE",
  member: "슈화",
  year: "2020",
  thumbnail: "https://i.ytimg.com/vi/AFJDfT-ODcE/hqdefault.jpg",
  alt: "슈화 - 아린X슈화X장원영X유나 - 몰라요 (원곡: 에이핑크(Apink) [2020 KBS 가요대축제] | Arin, Shuhua, Jang Wonyoung, Yuna (2020-12-18)",
  title: "아린X슈화X장원영X유나 - 몰라요 (원곡: 에이핑크(Apink) [2020 KBS 가요대축제] | Arin, Shuhua, Jang Wonyoung, Yuna (2020-12-18)"
},
{
  link: "https://www.youtube.com/watch?v=Uvy_o058T40",
  category: "LIVE-COVER-DANCE",
  member: "아이들",
  year: "2020",
  thumbnail: "https://i.ytimg.com/vi/Uvy_o058T40/hqdefault.jpg",
  alt: "아이들 - 1MILLION X K/DA - MORE (2020-11-06)",
  title: "1MILLION X K/DA - MORE (2020-11-06)"
},
{
  link: "https://www.youtube.com/watch?v=L3_yrJwo6PA",
  category: "LIVE-COVER-DANCE",
  member: "아이들",
  year: "2020",
  thumbnail: "https://i.ytimg.com/vi/L3_yrJwo6PA/hqdefault.jpg",
  alt: "아이들 - [엠카 댄스 챌린지 풀버전] (여자)아이들 - Bubble Pop! ♬ (2020-09-23)",
  title: "[엠카 댄스 챌린지 풀버전] (여자)아이들 - Bubble Pop! ♬ (2020-09-23)"
},
{
  link: "https://www.youtube.com/watch?v=Ks2SkLVEx4s",
  category: "LIVE-COVER-DANCE",
  member: "아이들",
  year: "2020",
  thumbnail: "https://i.ytimg.com/vi/Ks2SkLVEx4s/hqdefault.jpg",
  alt: "아이들 - (G)I-DLE - 「Oh my god」(Japanese ver.) Relay Dance (2020-08-26)",
  title: "(G)I-DLE - 「Oh my god」(Japanese ver.) Relay Dance (2020-08-26)"
},
{
  link: "https://www.youtube.com/watch?v=EX0kgl2w1eU",
  category: "LIVE-COVER-DANCE",
  member: "아이들",
  year: "2020",
  thumbnail: "https://i.ytimg.com/vi/EX0kgl2w1eU/hqdefault.jpg",
  alt: "아이들 - [엠카 댄스 챌린지 풀버전] (여자)아이들((G)I-DLE) ♬ 가시나 ♬ (2020-08-19)",
  title: "[엠카 댄스 챌린지 풀버전] (여자)아이들((G)I-DLE) ♬ 가시나 ♬ (2020-08-19)"
},
{
  link: "https://www.youtube.com/watch?v=sy1EL49xMXc",
  category: "LIVE-COVER-DANCE",
  member: "아이들",
  year: "2020",
  thumbnail: "https://i.ytimg.com/vi/sy1EL49xMXc/hqdefault.jpg",
  alt: "아이들 - [릴레이댄스] (여자)아이들((G)I-DLE) - 덤디덤디(DUMDi DUMDi) (4K) (2020-08-07)",
  title: "[릴레이댄스] (여자)아이들((G)I-DLE) - 덤디덤디(DUMDi DUMDi) (4K) (2020-08-07)"
},
{
  link: "https://www.youtube.com/watch?v=5jiS8DVDeUs",
  category: "LIVE-COVER-DANCE",
  member: "아이들",
  year: "2020",
  thumbnail: "https://i.ytimg.com/vi/5jiS8DVDeUs/hqdefault.jpg",
  alt: "아이들 - [선공개] (여자)아이들((G)I-DLE) - '덤디덤디 (DUMDi DUMDi) performance ver.ㅣ딩고뮤직ㅣDingo Music (2020-08-07)",
  title: "[선공개] (여자)아이들((G)I-DLE) - '덤디덤디 (DUMDi DUMDi) performance ver.ㅣ딩고뮤직ㅣDingo Music (2020-08-07)"
},
{
  link: "https://www.youtube.com/watch?v=04l4LH_U21E",
  category: "LIVE-COVER-DANCE",
  member: "아이들",
  year: "2020",
  thumbnail: "https://i.ytimg.com/vi/04l4LH_U21E/hqdefault.jpg",
  alt: "아이들 - [집방캠][4K] 덤디덤디(DUMDi DUMDi) - (여자)아이들 ((G)I-DLE) LIVE│200806 컬투쇼 (2020-08-07)",
  title: "[집방캠][4K] 덤디덤디(DUMDi DUMDi) - (여자)아이들 ((G)I-DLE) LIVE│200806 컬투쇼 (2020-08-07)"
},
{
  link: "https://www.youtube.com/watch?v=H_HKE1mwzuo",
  category: "LIVE-COVER-DANCE",
  member: "아이들",
  year: "2020",
  thumbnail: "https://i.ytimg.com/vi/H_HKE1mwzuo/hqdefault.jpg",
  alt: "아이들 - (여자)아이들((G)I-DLE) - '덤디덤디 (DUMDi DUMDi)' : ONLINE MEDIA SHOWCASE Ver. (2020-08-03)",
  title: "(여자)아이들((G)I-DLE) - '덤디덤디 (DUMDi DUMDi)' : ONLINE MEDIA SHOWCASE Ver. (2020-08-03)"
},
{
  link: "https://www.youtube.com/watch?v=J7X6iK3Ox3U",
  category: "LIVE-COVER-DANCE",
  member: "아이들",
  year: "2020",
  thumbnail: "https://i.ytimg.com/vi/J7X6iK3Ox3U/hqdefault.jpg",
  alt: "아이들 - [4K] (여자)아이들((G)I-DLE) _ 덤디덤디(DUMDi DUMDi) | 퍼포먼스 | Take#1 | 테이크원 | Performance (2020-08-03)",
  title: "[4K] (여자)아이들((G)I-DLE) _ 덤디덤디(DUMDi DUMDi) | 퍼포먼스 | Take#1 | 테이크원 | Performance (2020-08-03)"
},
{
  link: "https://www.youtube.com/watch?v=0x9FdBB4wCM",
  category: "LIVE-COVER-DANCE",
  member: "아이들",
  year: "2020",
  thumbnail: "https://i.ytimg.com/vi/0x9FdBB4wCM/hqdefault.jpg",
  alt: "아이들 - (G)I-DLE (여자)아이들  - LION (Angel vs Devil ver.) | Safe House Concert (2020-04-29)",
  title: "(G)I-DLE (여자)아이들  - LION (Angel vs Devil ver.) | Safe House Concert (2020-04-29)"
},
{
  link: "https://www.youtube.com/watch?v=3Mea3YLcd5c",
  category: "LIVE-COVER-DANCE",
  member: "아이들",
  year: "2020",
  thumbnail: "https://i.ytimg.com/vi/3Mea3YLcd5c/hqdefault.jpg",
  alt: "아이들 - Black & White 수트 장착하고 돌아온 (여자)아이들! 클로즈업 할 때마다 Oh my god🙊 | (G)I-DLE_Oh my god | 수트댄스 | Suit Dance (2020-04-06)",
  title: "Black & White 수트 장착하고 돌아온 (여자)아이들! 클로즈업 할 때마다 Oh my god🙊 | (G)I-DLE_Oh my god | 수트댄스 | Suit Dance (2020-04-06)"
},
{
  link: "https://www.youtube.com/watch?v=72ZC1fHf9h4",
  category: "LIVE-COVER-DANCE",
  member: "아이들",
  year: "2020",
  thumbnail: "https://i.ytimg.com/vi/72ZC1fHf9h4/hqdefault.jpg",
  alt: "아이들 - [주간아.zip] 춤노래힙합퀸들의 전쟁♨ 재능부자 l (여자)아이들 (G)I-DLE (2020-04-02)",
  title: "[주간아.zip] 춤노래힙합퀸들의 전쟁♨ 재능부자 l (여자)아이들 (G)I-DLE (2020-04-02)"
},

// 🔽 새로 불러온 0개 항목


// 🔽 새로 불러온 42개 항목
{
  link: "https://www.youtube.com/watch?v=tpmgSw_LtGg",
  category: "LIVE-COVER-DANCE",
  member: "소연",
  year: "2020",
  thumbnail: "https://i.ytimg.com/vi/tpmgSw_LtGg/hqdefault.jpg",
  alt: "소연 - [ENG sub] Do You Know Hiphop? [2회/풀버전] 2020 LION - 맘바 (넋업샨, 더블케이, 전소연) 200306 EP.2 (2020-03-07)",
  title: "[ENG sub] Do You Know Hiphop? [2회/풀버전] 2020 LION - 맘바 (넋업샨, 더블케이, 전소연) 200306 EP.2 (2020-03-07)"
},
{
  link: "https://www.youtube.com/watch?v=4NeFljq8VfQ",
  category: "LIVE-COVER-DANCE",
  member: "소연",
  year: "2020",
  thumbnail: "https://i.ytimg.com/vi/4NeFljq8VfQ/hqdefault.jpg",
  alt: "소연 - [ENG sub] Do You Know Hiphop? [2회] 2020 LION - 맘바(넋업샨,더블케이,전소연) @ 1차 경연 200306 EP.2 (2020-03-06)",
  title: "[ENG sub] Do You Know Hiphop? [2회] 2020 LION - 맘바(넋업샨,더블케이,전소연) @ 1차 경연 200306 EP.2 (2020-03-06)"
},
{
  link: "https://www.youtube.com/watch?v=smqyRBYCbl0",
  category: "LIVE-COVER-DANCE",
  member: "아이들",
  year: "2020",
  thumbnail: "https://i.ytimg.com/vi/smqyRBYCbl0/hqdefault.jpg",
  alt: "아이들 - 한 편의 뮤지컬 같은 (여자)아이들((G)I-DLE)의 '2020 Show'♪ 슈가맨3(SUGARMAN3) 9회 (2020-01-31)",
  title: "한 편의 뮤지컬 같은 (여자)아이들((G)I-DLE)의 '2020 Show'♪ 슈가맨3(SUGARMAN3) 9회 (2020-01-31)"
},
{
  link: "https://www.youtube.com/watch?v=KNLSvJwGSlc",
  category: "LIVE-COVER-DANCE",
  member: "소연",
  year: "2020",
  thumbnail: "https://i.ytimg.com/vi/KNLSvJwGSlc/hqdefault.jpg",
  alt: "소연 - 독기로 언니들을 올킬하기 위해 나선 당찬 연습생! 전소연((여자)아이들) 언프리티 랩스타3 랩 모음 (2020-01-22)",
  title: "독기로 언니들을 올킬하기 위해 나선 당찬 연습생! 전소연((여자)아이들) 언프리티 랩스타3 랩 모음 (2020-01-22)"
},
{
  link: "https://www.youtube.com/watch?v=34agc9QaV5U",
  category: "LIVE-COVER-DANCE",
  member: "아이들",
  year: "2019",
  thumbnail: "https://i.ytimg.com/vi/34agc9QaV5U/hqdefault.jpg",
  alt: "아이들 - 무대장인 끝판왕 (여자)아이들 퀸덤에서 끼 탈탈 발산♥ 퀸덤 (여자)아이들 무대모음 | #다시보는_퀸덤 | #Diggle (2019-12-22)",
  title: "무대장인 끝판왕 (여자)아이들 퀸덤에서 끼 탈탈 발산♥ 퀸덤 (여자)아이들 무대모음 | #다시보는_퀸덤 | #Diggle (2019-12-22)"
},
{
  link: "https://www.youtube.com/watch?v=WFkZjTCxVPc",
  category: "LIVE-COVER-DANCE",
  member: "아이들",
  year: "2019",
  thumbnail: "https://i.ytimg.com/vi/WFkZjTCxVPc/hqdefault.jpg",
  alt: "아이들 - GIANTS - Opening Ceremony Presented by Mastercard | 2019 World Championship Finals (2019-11-10)",
  title: "GIANTS - Opening Ceremony Presented by Mastercard | 2019 World Championship Finals (2019-11-10)"
},
{
  link: "https://www.youtube.com/watch?v=pTv0x3UYnd4",
  category: "LIVE-COVER-DANCE",
  member: "아이들",
  year: "2019",
  thumbnail: "https://i.ytimg.com/vi/pTv0x3UYnd4/hqdefault.jpg",
  alt: "아이들 - [Full CAM] ♬ LION - (여자)아이들((G)I-DLE) 4K 직캠 @ 퀸덤 FINAL 경연 (2019-11-01)",
  title: "[Full CAM] ♬ LION - (여자)아이들((G)I-DLE) 4K 직캠 @ 퀸덤 FINAL 경연 (2019-11-01)"
},
{
  link: "https://www.youtube.com/watch?v=QTjZJzYWzEU",
  category: "LIVE-COVER-DANCE",
  member: "아이들",
  year: "2019",
  thumbnail: "https://i.ytimg.com/vi/QTjZJzYWzEU/hqdefault.jpg",
  alt: "아이들 - [풀버전] ♬ 싫다고 말해(Nightmare Ver.) - (여자)아이들 @3차 경연 컴백전쟁 : 퀸덤 8화 (2019-10-17)",
  title: "[풀버전] ♬ 싫다고 말해(Nightmare Ver.) - (여자)아이들 @3차 경연 컴백전쟁 : 퀸덤 8화 (2019-10-17)"
},
{
  link: "https://www.youtube.com/watch?v=2jetax5BUBU",
  category: "LIVE-COVER-DANCE",
  member: "아이들",
  year: "2019",
  thumbnail: "https://i.ytimg.com/vi/2jetax5BUBU/hqdefault.jpg",
  alt: "아이들 - [풀버전] ♬ 친절한 금자씨+Senorita+Strip+Smooth Criminal+두 개의 달+Power - 식스퍼즐 @3차 경연   퍼포먼스 유닛 컴백전쟁 : 퀸덤 7화 (2019-10-10)",
  title: "[풀버전] ♬ 친절한 금자씨+Senorita+Strip+Smooth Criminal+두 개의 달+Power - 식스퍼즐 @3차 경연   퍼포먼스 유닛 컴백전쟁 : 퀸덤 7화 (2019-10-10)"
},
{
  link: "https://www.youtube.com/watch?v=flKbMiJVMYw",
  category: "LIVE-COVER-DANCE",
  member: "아이들",
  year: "2019",
  thumbnail: "https://i.ytimg.com/vi/flKbMiJVMYw/hqdefault.jpg",
  alt: "아이들 - [풀버전] ♬ instagram - 아아 @3차 경연 컴백전쟁 : 퀸덤 7화 (2019-10-10)",
  title: "[풀버전] ♬ instagram - 아아 @3차 경연 컴백전쟁 : 퀸덤 7화 (2019-10-10)"
},
{
  link: "https://www.youtube.com/watch?v=J5GzXbq4J5Q",
  category: "LIVE-COVER-DANCE",
  member: "아이들",
  year: "2019",
  thumbnail: "https://i.ytimg.com/vi/J5GzXbq4J5Q/hqdefault.jpg",
  alt: "아이들 - (여자)아이들 - 비몽 [불후의 명곡 전설을 노래하다 , Immortal Songs 2].20191005 (2019-10-05)",
  title: "(여자)아이들 - 비몽 [불후의 명곡 전설을 노래하다 , Immortal Songs 2].20191005 (2019-10-05)"
},
{
  link: "https://www.youtube.com/watch?v=2zTWkZY7AJ0",
  category: "LIVE-COVER-DANCE",
  member: "아이들",
  year: "2019",
  thumbnail: "https://i.ytimg.com/vi/2zTWkZY7AJ0/hqdefault.jpg",
  alt: "아이들 - [풀버전] ♬ Fire - (여자)아이들 @2차 경연 컴백전쟁 : 퀸덤 4화 (2019-09-19)",
  title: "[풀버전] ♬ Fire - (여자)아이들 @2차 경연 컴백전쟁 : 퀸덤 4화 (2019-09-19)"
},
{
  link: "https://www.youtube.com/watch?v=KfVPBfPq2Kk",
  category: "LIVE-COVER-DANCE",
  member: "아이들",
  year: "2019",
  thumbnail: "https://i.ytimg.com/vi/KfVPBfPq2Kk/hqdefault.jpg",
  alt: "아이들 - [중앙CAM] ♬ LATATA - (여자)아이들 @1차 경연 컴백전쟁 : 퀸덤 2화 (2019-09-06)",
  title: "[중앙CAM] ♬ LATATA - (여자)아이들 @1차 경연 컴백전쟁 : 퀸덤 2화 (2019-09-06)"
},
{
  link: "https://www.youtube.com/watch?v=BFr4BefEw7U",
  category: "LIVE-COVER-DANCE",
  member: "아이들",
  year: "2019",
  thumbnail: "https://i.ytimg.com/vi/BFr4BefEw7U/hqdefault.jpg",
  alt: "아이들 - [풀버전] ♬ LATATA - (여자)아이들 @1차 경연 컴백전쟁 : 퀸덤 2화 (2019-09-05)",
  title: "[풀버전] ♬ LATATA - (여자)아이들 @1차 경연 컴백전쟁 : 퀸덤 2화 (2019-09-05)"
},
{
  link: "https://www.youtube.com/watch?v=bju1EGowkKo",
  category: "LIVE-COVER-DANCE",
  member: "아이들",
  year: "2019",
  thumbnail: "https://i.ytimg.com/vi/bju1EGowkKo/hqdefault.jpg",
  alt: "아이들 - KATE×(G)I-DLE ｜LATATA クラッシュダイヤモンドアイズver. (2019-08-19)",
  title: "KATE×(G)I-DLE ｜LATATA クラッシュダイヤモンドアイズver. (2019-08-19)"
},
{
  link: "https://www.youtube.com/watch?v=QBjV5p1ctwo",
  category: "LIVE-COVER-DANCE",
  member: "아이들",
  year: "2019",
  thumbnail: "https://i.ytimg.com/vi/QBjV5p1ctwo/hqdefault.jpg",
  alt: "아이들 - 오프닝 퍼포먼스(Opening Performance)ㅣ(여자)아이들 컴백전쟁 : 퀸덤 0화 (2019-08-29)",
  title: "오프닝 퍼포먼스(Opening Performance)ㅣ(여자)아이들 컴백전쟁 : 퀸덤 0화 (2019-08-29)"
},
{
  link: "https://www.youtube.com/watch?v=F8pB0rJmD1k",
  category: "LIVE-COVER-DANCE",
  member: "아이들",
  year: "2019",
  thumbnail: "https://i.ytimg.com/vi/F8pB0rJmD1k/hqdefault.jpg",
  alt: "아이들 - (G)I-DLE, ㅋㅋ DANCE(KK DANCE) Full Version [THE SHOW 190716] (2019-07-16)",
  title: "(G)I-DLE, ㅋㅋ DANCE(KK DANCE) Full Version [THE SHOW 190716] (2019-07-16)"
},
{
  link: "https://www.youtube.com/watch?v=vJIsvoUF3Sk",
  category: "LIVE-COVER-DANCE",
  member: "아이들",
  year: "2019",
  thumbnail: "https://i.ytimg.com/vi/vJIsvoUF3Sk/hqdefault.jpg",
  alt: "아이들 - (Eng Sub)[랜덤1열댄스] RANDOM 1LINE DANCE (여자)아이들 ((G)-IDLE) │ Uh-Oh... 그녀들의 스웩에 취해버렸다..🤭 (2019-07-16)",
  title: "(Eng Sub)[랜덤1열댄스] RANDOM 1LINE DANCE (여자)아이들 ((G)-IDLE) │ Uh-Oh... 그녀들의 스웩에 취해버렸다..🤭 (2019-07-16)"
},
{
  link: "https://www.youtube.com/watch?v=PmSrod54WEU",
  category: "LIVE-COVER-DANCE",
  member: "아이들",
  year: "2019",
  thumbnail: "https://i.ytimg.com/vi/PmSrod54WEU/hqdefault.jpg",
  alt: "아이들 - 멋이란 것이 폭발해버리는 (여자)아이들 'Uh-Oh' [안무영상] (2019-07-15)",
  title: "멋이란 것이 폭발해버리는 (여자)아이들 'Uh-Oh' [안무영상] (2019-07-15)"
},
{
  link: "https://www.youtube.com/watch?v=rT3UqPDT9pk",
  category: "LIVE-COVER-DANCE",
  member: "민니,우기",
  year: "2019",
  thumbnail: "https://i.ytimg.com/vi/rT3UqPDT9pk/hqdefault.jpg",
  alt: "민니,우기 - (ENG) [Weekly Idol] 오디션이었으면 만장일치 합격!! 음색 끝판왕 민니X우기 듀엣!! l EP.413 (2019-06-26)",
  title: "(ENG) [Weekly Idol] 오디션이었으면 만장일치 합격!! 음색 끝판왕 민니X우기 듀엣!! l EP.413 (2019-06-26)"
},
{
  link: "https://www.youtube.com/watch?v=x5qQ07xjRQU",
  category: "LIVE-COVER-DANCE",
  member: "아이들",
  year: "2019",
  thumbnail: "https://i.ytimg.com/vi/x5qQ07xjRQU/hqdefault.jpg",
  alt: "아이들 - [4K] 100초로 보는 (여자)아이들 👭(G)I-DLE | 🧚‍♀️신곡 \"Uh-Oh\" 무대 최초 공개!  | 100sec Dingo music Choreography (2019-06-26)",
  title: "[4K] 100초로 보는 (여자)아이들 👭(G)I-DLE | 🧚‍♀️신곡 \"Uh-Oh\" 무대 최초 공개!  | 100sec Dingo music Choreography (2019-06-26)"
},
{
  link: "https://www.youtube.com/watch?v=aPMQmiiHL3g",
  category: "LIVE-COVER-DANCE",
  member: "소연",
  year: "2019",
  thumbnail: "https://i.ytimg.com/vi/aPMQmiiHL3g/hqdefault.jpg",
  alt: "소연 - [Weekly Idol] 갓소연은 노래도 잘해ㅠㅠ(감격) 오늘은 히든 보컬 영접하는 날♥! l EP.413 (2019-06-26)",
  title: "[Weekly Idol] 갓소연은 노래도 잘해ㅠㅠ(감격) 오늘은 히든 보컬 영접하는 날♥! l EP.413 (2019-06-26)"
},
{
  link: "https://www.youtube.com/watch?v=tgRRnmsMLZ4",
  category: "LIVE-COVER-DANCE",
  member: "아이들",
  year: "2019",
  thumbnail: "https://i.ytimg.com/vi/tgRRnmsMLZ4/hqdefault.jpg",
  alt: "아이들 - [4K] (G)I-DLE((여자)아이들) 'Uh-Oh'(어-오) Showcase stage [통통TV] (2019-06-26)",
  title: "[4K] (G)I-DLE((여자)아이들) 'Uh-Oh'(어-오) Showcase stage [통통TV] (2019-06-26)"
},
{
  link: "https://www.youtube.com/watch?v=nhgEO_A3BdI",
  category: "LIVE-COVER-DANCE",
  member: "아이들",
  year: "2019",
  thumbnail: "https://i.ytimg.com/vi/nhgEO_A3BdI/hqdefault.jpg",
  alt: "아이들 - (여자)아이들 (G)I-DLE \"Senorita\" Performance video | MOVE REC | 4K (2019-03-02)",
  title: "(여자)아이들 (G)I-DLE \"Senorita\" Performance video | MOVE REC | 4K (2019-03-02)"
},
{
  link: "https://www.youtube.com/watch?v=_DlaP6PbxQM",
  category: "LIVE-COVER-DANCE",
  member: "아이들",
  year: "2019",
  thumbnail: "https://i.ytimg.com/vi/_DlaP6PbxQM/hqdefault.jpg",
  alt: "아이들 - [1theK Dance Cover Contest] (G)I-DLE((여자)아이들) _ Senorita(세뇨리따)(mirrored ver.) (2019-03-01)",
  title: "[1theK Dance Cover Contest] (G)I-DLE((여자)아이들) _ Senorita(세뇨리따)(mirrored ver.) (2019-03-01)"
},
{
  link: "https://www.youtube.com/watch?v=Ecgl1Qi3Sj8",
  category: "LIVE-COVER-DANCE",
  member: "아이들",
  year: "2019",
  thumbnail: "https://i.ytimg.com/vi/Ecgl1Qi3Sj8/hqdefault.jpg",
  alt: "아이들 - [릴레이댄스] (여자)아이들((G)I-DLE) - Senorita (2019-02-28)",
  title: "[릴레이댄스] (여자)아이들((G)I-DLE) - Senorita (2019-02-28)"
},
{
  link: "https://www.youtube.com/watch?v=cENRfkAwQP0",
  category: "LIVE-COVER-DANCE",
  member: "아이들",
  year: "2018",
  thumbnail: "https://i.ytimg.com/vi/cENRfkAwQP0/hqdefault.jpg",
  alt: "아이들 - [릴레이댄스] (여자)아이들((G)-IDLE) - 한(-)(HANN) (2018-08-28)",
  title: "[릴레이댄스] (여자)아이들((G)-IDLE) - 한(-)(HANN) (2018-08-28)"
},
{
  link: "https://www.youtube.com/watch?v=XzVwGhPKs8E",
  category: "LIVE-COVER-DANCE",
  member: "아이들",
  year: "2018",
  thumbnail: "https://i.ytimg.com/vi/XzVwGhPKs8E/hqdefault.jpg",
  alt: "아이들 - (여자)아이들의 솔로와 군무를 한(一) 번에 담았다! | (G)I-DLE _ HANN (Alone) | 인앤아웃댄스 | IN&OUT DANCE (2018-08-22)",
  title: "(여자)아이들의 솔로와 군무를 한(一) 번에 담았다! | (G)I-DLE _ HANN (Alone) | 인앤아웃댄스 | IN&OUT DANCE (2018-08-22)"
},
{
  link: "https://www.youtube.com/watch?v=KwJWwCH2ECw",
  category: "LIVE-COVER-DANCE",
  member: "아이들",
  year: "2018",
  thumbnail: "https://i.ytimg.com/vi/KwJWwCH2ECw/hqdefault.jpg",
  alt: "아이들 - Let's Dance(렛츠댄스): (G)I-DLE((여자)아이들) _ LATATA 비하인드 영상! Behind ver. (2018-05-12)",
  title: "Let's Dance(렛츠댄스): (G)I-DLE((여자)아이들) _ LATATA 비하인드 영상! Behind ver. (2018-05-12)"
},
{
  link: "https://www.youtube.com/watch?v=om_vT0SdJ38",
  category: "LIVE-COVER-DANCE",
  member: "아이들",
  year: "2018",
  thumbnail: "https://i.ytimg.com/vi/om_vT0SdJ38/hqdefault.jpg",
  alt: "아이들 - [릴레이댄스] (여자)아이들((G)I-DLE) - LATATA (2018-05-08)",
  title: "[릴레이댄스] (여자)아이들((G)I-DLE) - LATATA (2018-05-08)"
},
{
  link: "https://www.youtube.com/watch?v=gXpwUK8L7WM",
  category: "LIVE-COVER-DANCE",
  member: "아이들",
  year: "2018",
  thumbnail: "https://i.ytimg.com/vi/gXpwUK8L7WM/hqdefault.jpg",
  alt: "아이들 - [1theK Dance Cover Contest] (G)I-DLE((여자)아이들) _ LATATA (mirrored ver.) (2018-05-06)",
  title: "[1theK Dance Cover Contest] (G)I-DLE((여자)아이들) _ LATATA (mirrored ver.) (2018-05-06)"
},
{
  link: "https://www.youtube.com/watch?v=2M9tT19JiY4",
  category: "LIVE-COVER-DANCE",
  member: "아이들",
  year: "2018",
  thumbnail: "https://i.ytimg.com/vi/2M9tT19JiY4/hqdefault.jpg",
  alt: "아이들 - (G)I-DLE ((여자)아이들) - LATATA 라이브 [뷰티캠] Beauty Cam Live (2018-05-05)",
  title: "(G)I-DLE ((여자)아이들) - LATATA 라이브 [뷰티캠] Beauty Cam Live (2018-05-05)"
},
{
  link: "https://www.youtube.com/watch?v=xnhlyf4I_vo",
  category: "LIVE-COVER-DANCE",
  member: "아이들",
  year: "2018",
  thumbnail: "https://i.ytimg.com/vi/xnhlyf4I_vo/hqdefault.jpg",
  alt: "아이들 - Let's Dance(렛츠댄스): (G)I-DLE((여자)아이들) _ LATATA (2018-05-04)",
  title: "Let's Dance(렛츠댄스): (G)I-DLE((여자)아이들) _ LATATA (2018-05-04)"
},
{
  link: "https://www.youtube.com/watch?v=lr0Ekoxa5bA",
  category: "LIVE-COVER-DANCE",
  member: "소연",
  year: "2016",
  thumbnail: "https://i.ytimg.com/vi/lr0Ekoxa5bA/hqdefault.jpg",
  alt: "소연 - [G마켓X에잇세컨즈] 8초만에 반할거야♪ - Rap by 전소연 (2016-10-13)",
  title: "[G마켓X에잇세컨즈] 8초만에 반할거야♪ - Rap by 전소연 (2016-10-13)"
},
{
  link: "https://www.youtube.com/watch?v=ah-67Hn8vVA",
  category: "LIVE-COVER-DANCE",
  member: "소연",
  year: "2016",
  thumbnail: "https://i.ytimg.com/vi/ah-67Hn8vVA/hqdefault.jpg",
  alt: "소연 - UNPRETTY RAPSTAR vol.3 [9회] \"넌 잘하고 있어, 넌충분히 해내고 있어\" 웃어 전소연 feat. 다비 @ 세미파이널 1라운드 160923 EP.9 (2016-09-23)",
  title: "UNPRETTY RAPSTAR vol.3 [9회] \"넌 잘하고 있어, 넌충분히 해내고 있어\" 웃어 전소연 feat. 다비 @ 세미파이널 1라운드 160923 EP.9 (2016-09-23)"
},
{
  link: "https://www.youtube.com/watch?v=tnA6HF6wGNE",
  category: "LIVE-COVER-DANCE",
  member: "소연",
  year: "2016",
  thumbnail: "https://i.ytimg.com/vi/tnA6HF6wGNE/hqdefault.jpg",
  alt: "소연 - UNPRETTY RAPSTAR vol.3 [8회/단독] ′생각없이 놀아대!′ 전소연 어린이의 하루 (Feat. 슈퍼비) @본선1차 1라운드 160916 EP.8 (2016-09-16)",
  title: "UNPRETTY RAPSTAR vol.3 [8회/단독] ′생각없이 놀아대!′ 전소연 어린이의 하루 (Feat. 슈퍼비) @본선1차 1라운드 160916 EP.8 (2016-09-16)"
},
{
  link: "https://www.youtube.com/watch?v=iDdgFj9gSoE",
  category: "LIVE-COVER-DANCE",
  member: "소연",
  year: "2016",
  thumbnail: "https://i.ytimg.com/vi/iDdgFj9gSoE/hqdefault.jpg",
  alt: "소연 - UNPRETTY RAPSTAR vol.3 [풀버전/단독] ′PUZZLE′ - 씨잼&나다&전소연 @ #7 트랙 콜라보 미션 160909 EP.7 (2016-09-09)",
  title: "UNPRETTY RAPSTAR vol.3 [풀버전/단독] ′PUZZLE′ - 씨잼&나다&전소연 @ #7 트랙 콜라보 미션 160909 EP.7 (2016-09-09)"
},
{
  link: "https://www.youtube.com/watch?v=GwkvpkjvaEs",
  category: "LIVE-COVER-DANCE",
  member: "아이들",
  year: "2016",
  thumbnail: "https://i.ytimg.com/vi/GwkvpkjvaEs/hqdefault.jpg",
  alt: "아이들 - [UNPRETTY RAPSTAR3] ‘Is So Yeon 19?’ Jeon So Yeon @Track 4 Solo Battle 20160826 EP.05 (2016-08-26)",
  title: "[UNPRETTY RAPSTAR3] ‘Is So Yeon 19?’ Jeon So Yeon @Track 4 Solo Battle 20160826 EP.05 (2016-08-26)"
},
{
  link: "https://www.youtube.com/watch?v=exvIJqnHMRM",
  category: "LIVE-COVER-DANCE",
  member: "아이들",
  year: "2016",
  thumbnail: "https://i.ytimg.com/vi/exvIJqnHMRM/hqdefault.jpg",
  alt: "아이들 - [UNPRETTY RAPSTAR3][MV] Track#3. Jeon So Yeon, Nada Scary (Prod.by KUSH) 20160826 EP.05 (2016-08-23)",
  title: "[UNPRETTY RAPSTAR3][MV] Track#3. Jeon So Yeon, Nada Scary (Prod.by KUSH) 20160826 EP.05 (2016-08-23)"
},
{
  link: "https://www.youtube.com/watch?v=Bj27U8qOjeE",
  category: "LIVE-COVER-DANCE",
  member: "아이들",
  year: "2016",
  thumbnail: "https://i.ytimg.com/vi/Bj27U8qOjeE/hqdefault.jpg",
  alt: "아이들 - [UNPRETTY RAPSTAR3] My Way – Jeon So Yeon, Miryo, Ha Joo Yeon @Track 2 Team Battle Mission EP.02 (2016-08-05)",
  title: "[UNPRETTY RAPSTAR3] My Way – Jeon So Yeon, Miryo, Ha Joo Yeon @Track 2 Team Battle Mission EP.02 (2016-08-05)"
},
{
  link: "https://www.youtube.com/watch?v=cmIEYf5ILZY",
  category: "LIVE-COVER-DANCE",
  member: "아이들",
  year: "2016",
  thumbnail: "https://i.ytimg.com/vi/cmIEYf5ILZY/hqdefault.jpg",
  alt: "아이들 - 쇼미더머니5 파이널 특별무대 언프리티랩스타3 (2016-07-30)",
  title: "쇼미더머니5 파이널 특별무대 언프리티랩스타3 (2016-07-30)"
},
{
  link: "https://www.youtube.com/watch?v=RD-tS1qM_T4",
  category: "LIVE-COVER-DANCE",
  member: "아이들",
  year: "2016",
  thumbnail: "https://i.ytimg.com/vi/RD-tS1qM_T4/hqdefault.jpg",
  alt: "아이들 - [UNPRETTY RAPSTAR3] ‘She’s Coming’ One-take MV in Full 20160729 EP.01 (2016-07-29)",
  title: "[UNPRETTY RAPSTAR3] ‘She’s Coming’ One-take MV in Full 20160729 EP.01 (2016-07-29)"
},
// 🔽 새로 불러온 44개 항목
{
  link: "https://www.youtube.com/watch?v=IG2Ne-GLiMQ",
  category: "MEDIA CONTENTS",
  member: "민니",
  year: "2025",
  thumbnail: "https://i.ytimg.com/vi/IG2Ne-GLiMQ/hqdefault.jpg",
  alt: "민니 - [ENG/ TH] 용타로 맹신 걸그룹 아이들 민니의 용타로점 결과는? | EP.32 (2025-06-04)",
  title: "[ENG/ TH] 용타로 맹신 걸그룹 아이들 민니의 용타로점 결과는? | EP.32 (2025-06-04)"
},
{
  link: "https://www.youtube.com/watch?v=ob2iB3H53nY",
  category: "MEDIA CONTENTS",
  member: "우기",
  year: "2025",
  thumbnail: "https://i.ytimg.com/vi/ob2iB3H53nY/hqdefault.jpg",
  alt: "우기 - 오늘 이후 '우기' 출연 금지령😱 감당 안 되는 똑똑함!😲 중국 상위5% 클라쓰 美쳤다🧠🤯💡 (2025-06-04)",
  title: "오늘 이후 '우기' 출연 금지령😱 감당 안 되는 똑똑함!😲 중국 상위5% 클라쓰 美쳤다🧠🤯💡 (2025-06-04)"
},
{
  link: "https://www.youtube.com/watch?v=ZWiX7ljJ4mc",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2025",
  thumbnail: "https://i.ytimg.com/vi/ZWiX7ljJ4mc/hqdefault.jpg",
  alt: "아이들 - [픽잇] 완전체 재계약 성공 기념 아이들(i-dle) 예능 90분 모음.zip MBC250517방송 #전참시 #나혼산 #아이들 (2025-06-04)",
  title: "[픽잇] 완전체 재계약 성공 기념 아이들(i-dle) 예능 90분 모음.zip MBC250517방송 #전참시 #나혼산 #아이들 (2025-06-04)"
},
{
  link: "https://www.youtube.com/watch?v=du28NxB0SGo",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2025",
  thumbnail: "https://i.ytimg.com/vi/du28NxB0SGo/hqdefault.jpg",
  alt: "아이들 - [FULL] i-dle's Most Unfiltered & Unstoppable Spotify House Party | K-Pop ON Video Podcast (2025-05-31)",
  title: "[FULL] i-dle's Most Unfiltered & Unstoppable Spotify House Party | K-Pop ON Video Podcast (2025-05-31)"
},
{
  link: "https://www.youtube.com/watch?v=sJFegjopCRA",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2025",
  thumbnail: "https://i.ytimg.com/vi/sJFegjopCRA/hqdefault.jpg",
  alt: "아이들 - [ENG SUB] 십년지기 동생과 또 다른 동생의 대환장 달팽이관 공격 👂🏻🙉 l EP11 l 조현아의 평범한 목요일 밤 (2025-05-29)",
  title: "[ENG SUB] 십년지기 동생과 또 다른 동생의 대환장 달팽이관 공격 👂🏻🙉 l EP11 l 조현아의 평범한 목요일 밤 (2025-05-29)"
},
{
  link: "https://www.youtube.com/watch?v=3SS8xwX3FHI",
  category: "MEDIA CONTENTS",
  member: "민니",
  year: "2025",
  thumbnail: "https://i.ytimg.com/vi/3SS8xwX3FHI/hqdefault.jpg",
  alt: "민니 - [SUB] 태국 아이돌은 왜 풀뱅을 고수하는가… 당신이 몰랐(으면 좋겠)던 Good Thing한 이유 ✨민니✨ l 얼굴보고 얘기해 EP09 #민니 #idle #티파니영 (2025-05-28)",
  title: "[SUB] 태국 아이돌은 왜 풀뱅을 고수하는가… 당신이 몰랐(으면 좋겠)던 Good Thing한 이유 ✨민니✨ l 얼굴보고 얘기해 EP09 #민니 #idle #티파니영 (2025-05-28)"
},
{
  link: "https://www.youtube.com/watch?v=141b1bB22h8",
  category: "MEDIA CONTENTS",
  member: "소연,미연",
  year: "2025",
  thumbnail: "https://i.ytimg.com/vi/141b1bB22h8/hqdefault.jpg",
  alt: "소연,미연 - [#습집🗂] G떼고 돌아온 아이들 소연X미연❤️ 깡깡이 월드에 초대 받은 아이들의 들망진창인 반전 퀴즈 실력ㅋㅋㅋ 예능감도 Good Thing인 i-dle👍 | 런닝맨 | SBS (2025-05-26)",
  title: "[#습집🗂] G떼고 돌아온 아이들 소연X미연❤️ 깡깡이 월드에 초대 받은 아이들의 들망진창인 반전 퀴즈 실력ㅋㅋㅋ 예능감도 Good Thing인 i-dle👍 | 런닝맨 | SBS (2025-05-26)"
},
{
  link: "https://www.youtube.com/watch?v=YouyFmKwGz8",
  category: "MEDIA CONTENTS",
  member: "우기",
  year: "2025",
  thumbnail: "https://i.ytimg.com/vi/YouyFmKwGz8/hqdefault.jpg",
  alt: "우기 - [풀버전✂] 쿠키영상 있음🍪 심곡파출소에 등장한 우기?! Holy moly✨ '심곡파출소' [개그 콘서트/Gag Concert Ep.1123] | KBS 250525방송 (2025-05-25)",
  title: "[풀버전✂] 쿠키영상 있음🍪 심곡파출소에 등장한 우기?! Holy moly✨ '심곡파출소' [개그 콘서트/Gag Concert Ep.1123] | KBS 250525방송 (2025-05-25)"
},
{
  link: "https://www.youtube.com/watch?v=gyy645RzBBA",
  category: "MEDIA CONTENTS",
  member: "미연",
  year: "2025",
  thumbnail: "https://i.ytimg.com/vi/gyy645RzBBA/hqdefault.jpg",
  alt: "미연 - *텐션 주의* 미연 기 빨리는 아이들 완전체의 들망진창 토크🫨 | 노래 라이브, Good Thing (2025-05-25)",
  title: "*텐션 주의* 미연 기 빨리는 아이들 완전체의 들망진창 토크🫨 | 노래 라이브, Good Thing (2025-05-25)"
},
{
  link: "https://www.youtube.com/watch?v=-1e656YkJwU",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2025",
  thumbnail: "https://i.ytimg.com/vi/-1e656YkJwU/hqdefault.jpg",
  alt: "아이들 - (여자)아이들에서 아이들로! ＂공식 팀명을 바꾼 이유는?＂ [더 시즌즈-박보검의 칸타빌레] | KBS 250523 방송 (2025-05-23)",
  title: "(여자)아이들에서 아이들로! ＂공식 팀명을 바꾼 이유는?＂ [더 시즌즈-박보검의 칸타빌레] | KBS 250523 방송 (2025-05-23)"
},
{
  link: "https://www.youtube.com/watch?v=EDDO1Ip_Glw",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2025",
  thumbnail: "https://i.ytimg.com/vi/EDDO1Ip_Glw/hqdefault.jpg",
  alt: "아이들 - [SUB] 이 조합 Good Thing✨ 팬심 저격 토크.zip | G 빠진 아이들 😉 | 집대성 ep.58 (2025-05-23)",
  title: "[SUB] 이 조합 Good Thing✨ 팬심 저격 토크.zip | G 빠진 아이들 😉 | 집대성 ep.58 (2025-05-23)"
},
{
  link: "https://www.youtube.com/watch?v=gecnUpw9sAk",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2025",
  thumbnail: "https://i.ytimg.com/vi/gecnUpw9sAk/hqdefault.jpg",
  alt: "아이들 - (ENG) 🔥아~ 왕자 보고 싶어!!!🔥아이들(i-dle) 너네 가서 왕자 데리고 와!!! | 할명수 ep.237 (2025-05-23)",
  title: "(ENG) 🔥아~ 왕자 보고 싶어!!!🔥아이들(i-dle) 너네 가서 왕자 데리고 와!!! | 할명수 ep.237 (2025-05-23)"
},
{
  link: "https://www.youtube.com/watch?v=a4kO0Mk8BkI",
  category: "MEDIA CONTENTS",
  member: "우기",
  year: "2025",
  thumbnail: "https://i.ytimg.com/vi/a4kO0Mk8BkI/hqdefault.jpg",
  alt: "우기 - [sub] 아일릿 멤버가 다섯 명이라고요⁉️ 싸우기 딱 좋은 멤버 수네요🤭 | 민주의 핑크 캐비닛💝 EP.22 | i-dle (2025-05-22)",
  title: "[sub] 아일릿 멤버가 다섯 명이라고요⁉️ 싸우기 딱 좋은 멤버 수네요🤭 | 민주의 핑크 캐비닛💝 EP.22 | i-dle (2025-05-22)"
},
{
  link: "https://www.youtube.com/watch?v=37Bf68jEZew",
  category: "MEDIA CONTENTS",
  member: "미연",
  year: "2025",
  thumbnail: "https://i.ytimg.com/vi/37Bf68jEZew/hqdefault.jpg",
  alt: "미연 - [SUB] 그래도 내가 언닌데ㅠㅠㅠ 아이들 맏내로 살아남기 l [정용화의 엘피룸] EP.07 아이들 미연 (2025-05-22)",
  title: "[SUB] 그래도 내가 언닌데ㅠㅠㅠ 아이들 맏내로 살아남기 l [정용화의 엘피룸] EP.07 아이들 미연 (2025-05-22)"
},
{
  link: "https://www.youtube.com/watch?v=WE4LU1ks8u4",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2025",
  thumbnail: "https://i.ytimg.com/vi/WE4LU1ks8u4/hqdefault.jpg",
  alt: "아이들 - [아이유의 팔레트🎨] '아이'들 (With i-dle) Ep.33 (2025-05-22)",
  title: "[아이유의 팔레트🎨] '아이'들 (With i-dle) Ep.33 (2025-05-22)"
},
{
  link: "https://www.youtube.com/watch?v=IHgVv65TPuA",
  category: "MEDIA CONTENTS",
  member: "우기",
  year: "2025",
  thumbnail: "https://i.ytimg.com/vi/IHgVv65TPuA/hqdefault.jpg",
  alt: "우기 - [전참시 미방] 아이들 메인 래퍼는 우기 on and on??? #아이들 #전지적참견시점 #kpop #전참시 #우기 (2025-05-22)",
  title: "[전참시 미방] 아이들 메인 래퍼는 우기 on and on??? #아이들 #전지적참견시점 #kpop #전참시 #우기 (2025-05-22)"
},
{
  link: "https://www.youtube.com/watch?v=iJkVKzTeVZA",
  category: "MEDIA CONTENTS",
  member: "미연",
  year: "2025",
  thumbnail: "https://i.ytimg.com/vi/iJkVKzTeVZA/hqdefault.jpg",
  alt: "미연 - 임슬옹의 걸스옹탑 | 여섯 번째 게스트 조미연✨ 라이벌 유튜버이자 오랜 제자이자 공주인 미연의 등장 (2025-05-21)",
  title: "임슬옹의 걸스옹탑 | 여섯 번째 게스트 조미연✨ 라이벌 유튜버이자 오랜 제자이자 공주인 미연의 등장 (2025-05-21)"
},
{
  link: "https://www.youtube.com/watch?v=-YXnmXHdzzk",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2025",
  thumbnail: "https://i.ytimg.com/vi/-YXnmXHdzzk/hqdefault.jpg",
  alt: "아이들 - (G)가 죽었습니다... | 🎥라이브 짧게보기 (2025-05-21)",
  title: "(G)가 죽었습니다... | 🎥라이브 짧게보기 (2025-05-21)"
},
{
  link: "https://www.youtube.com/watch?v=6AnMTINzL4g",
  category: "MEDIA CONTENTS",
  member: "민니",
  year: "2025",
  thumbnail: "https://i.ytimg.com/vi/6AnMTINzL4g/hqdefault.jpg",
  alt: "민니 - 챗GPT로 사주보는 사주마스터 아이들 민니 | 미스터선샤인 아히안 | 소리꾼 마포로르 | 낭만의 외노자 EP.5 (ENG) (2025-05-21)",
  title: "챗GPT로 사주보는 사주마스터 아이들 민니 | 미스터선샤인 아히안 | 소리꾼 마포로르 | 낭만의 외노자 EP.5 (ENG) (2025-05-21)"
},
{
  link: "https://www.youtube.com/watch?v=unBP1SynDcA",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2025",
  thumbnail: "https://i.ytimg.com/vi/unBP1SynDcA/hqdefault.jpg",
  alt: "아이들 - [전참시 미방분]  환승이별 vs 잠수이별? 다섯 개의 i가 모여 네버엔딩 아이들(i-dle) 밸런스 게임! (2025-05-20)",
  title: "[전참시 미방분]  환승이별 vs 잠수이별? 다섯 개의 i가 모여 네버엔딩 아이들(i-dle) 밸런스 게임! (2025-05-20)"
},
{
  link: "https://www.youtube.com/watch?v=dVkhHSIbc08",
  category: "MEDIA CONTENTS",
  member: "민니,우기",
  year: "2025",
  thumbnail: "https://i.ytimg.com/vi/dVkhHSIbc08/hqdefault.jpg",
  alt: "민니,우기 - [전참시] 민니 표 태국요리부터 우기의 중국식 삼겹살볶음까지 다국적 음식으로 차려진 아이들의 저녁 한 상 MBC250517방송 #전지적참견시점 #아이들 #idle (2025-05-19)",
  title: "[전참시] 민니 표 태국요리부터 우기의 중국식 삼겹살볶음까지 다국적 음식으로 차려진 아이들의 저녁 한 상 MBC250517방송 #전지적참견시점 #아이들 #idle (2025-05-19)"
},
{
  link: "https://www.youtube.com/watch?v=NS5YovKgcco",
  category: "MEDIA CONTENTS",
  member: "민니",
  year: "2025",
  thumbnail: "https://i.ytimg.com/vi/NS5YovKgcco/hqdefault.jpg",
  alt: "민니 - [전참시] [SUB] 민니 하우스 최초 공개🏠 서로 견제했던 연습생 시절 에피소드부터 재계약 비하인드까지 다 얘기하는 아이들ㅣ#아이들 #idle MBC250517방송 (2025-05-18)",
  title: "[전참시] [SUB] 민니 하우스 최초 공개🏠 서로 견제했던 연습생 시절 에피소드부터 재계약 비하인드까지 다 얘기하는 아이들ㅣ#아이들 #idle MBC250517방송 (2025-05-18)"
},
{
  link: "https://www.youtube.com/watch?v=RugCavy2gXM",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2025",
  thumbnail: "https://i.ytimg.com/vi/RugCavy2gXM/hqdefault.jpg",
  alt: "아이들 - [전참시] [SUB] 완전체 재계약 후 1인 1매니저로 바뀐 아이들의 5인 5색 시끌벅적 출근길🤩ㅣ#아이들 #idle MBC250517방송 (2025-05-18)",
  title: "[전참시] [SUB] 완전체 재계약 후 1인 1매니저로 바뀐 아이들의 5인 5색 시끌벅적 출근길🤩ㅣ#아이들 #idle MBC250517방송 (2025-05-18)"
},
{
  link: "https://www.youtube.com/watch?v=Mm5JoAF6wTw",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2025",
  thumbnail: "https://i.ytimg.com/vi/Mm5JoAF6wTw/hqdefault.jpg",
  alt: "아이들 - [전참시 미방분] 들망진창 완전체 아이들 (i-dle) 포토타임 (2025-05-17)",
  title: "[전참시 미방분] 들망진창 완전체 아이들 (i-dle) 포토타임 (2025-05-17)"
},
{
  link: "https://www.youtube.com/watch?v=khZTXMEu-A0",
  category: "MEDIA CONTENTS",
  member: "민니,우기",
  year: "2025",
  thumbnail: "https://i.ytimg.com/vi/khZTXMEu-A0/hqdefault.jpg",
  alt: "민니,우기 - [전지적 참견 시점] 아이들의 연습생 시절 에피소드😂 텃세 부렸던 민니x우기?!, MBC 250517 방송 (2025-05-17)",
  title: "[전지적 참견 시점] 아이들의 연습생 시절 에피소드😂 텃세 부렸던 민니x우기?!, MBC 250517 방송 (2025-05-17)"
},
{
  link: "https://www.youtube.com/watch?v=q0zMusGlbVE",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2025",
  thumbnail: "https://i.ytimg.com/vi/q0zMusGlbVE/hqdefault.jpg",
  alt: "아이들 - [전지적 참견 시점] 아이들의 들망진창 이동길😆 네버랜드와 특별한 음감회, MBC 250517 방송 (2025-05-17)",
  title: "[전지적 참견 시점] 아이들의 들망진창 이동길😆 네버랜드와 특별한 음감회, MBC 250517 방송 (2025-05-17)"
},
{
  link: "https://www.youtube.com/watch?v=MTllcSxjwtk",
  category: "MEDIA CONTENTS",
  member: "미연,우기",
  year: "2025",
  thumbnail: "https://i.ytimg.com/vi/MTllcSxjwtk/hqdefault.jpg",
  alt: "미연,우기 - [전지적 참견 시점] 시끌벅적 아이들 메이크업 현장💄 어쩔 수 없이(?) 자꾸 붙게 되는 미연X우기, MBC 250517 방송 (2025-05-17)",
  title: "[전지적 참견 시점] 시끌벅적 아이들 메이크업 현장💄 어쩔 수 없이(?) 자꾸 붙게 되는 미연X우기, MBC 250517 방송 (2025-05-17)"
},
{
  link: "https://www.youtube.com/watch?v=cJkmXQTa_1s",
  category: "MEDIA CONTENTS",
  member: "우기",
  year: "2025",
  thumbnail: "https://i.ytimg.com/vi/cJkmXQTa_1s/hqdefault.jpg",
  alt: "우기 - [전지적 참견 시점] 아침부터 텐션 최고인 우기의 출근길🎤 차 안에서 노래 열창, MBC 250517 방송 (2025-05-17)",
  title: "[전지적 참견 시점] 아침부터 텐션 최고인 우기의 출근길🎤 차 안에서 노래 열창, MBC 250517 방송 (2025-05-17)"
},
{
  link: "https://www.youtube.com/watch?v=at8vzw8HcCM",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2025",
  thumbnail: "https://i.ytimg.com/vi/at8vzw8HcCM/hqdefault.jpg",
  alt: "아이들 - [전지적 참견 시점 347회 예고] 7년을 함께한 들망진창 아이들💜 & 신기루와 거인걸즈의 데뷔 20주년 파티🎉, MBC 250517 방송 (2025-05-10)",
  title: "[전지적 참견 시점 347회 예고] 7년을 함께한 들망진창 아이들💜 & 신기루와 거인걸즈의 데뷔 20주년 파티🎉, MBC 250517 방송 (2025-05-10)"
},
{
  link: "https://www.youtube.com/watch?v=DFpCGKxWwn0",
  category: "MEDIA CONTENTS",
  member: "민니",
  year: "2025",
  thumbnail: "https://i.ytimg.com/vi/DFpCGKxWwn0/hqdefault.jpg",
  alt: "민니 - BUFF TALK UNSEEN | EP.92 | MINNIE BamBam กับฉากหลุดขำพรืดด (with Brust out laughing !! ) (2025-03-27)",
  title: "BUFF TALK UNSEEN | EP.92 | MINNIE BamBam กับฉากหลุดขำพรืดด (with Brust out laughing !! ) (2025-03-27)"
},
{
  link: "https://www.youtube.com/watch?v=KugGeYNllXI",
  category: "MEDIA CONTENTS",
  member: "민니",
  year: "2025",
  thumbnail: "https://i.ytimg.com/vi/KugGeYNllXI/hqdefault.jpg",
  alt: "민니 - BUFF TALK | EP.92 | MINNIE - BamBam (2025-03-24)",
  title: "BUFF TALK | EP.92 | MINNIE - BamBam (2025-03-24)"
},
{
  link: "https://www.youtube.com/watch?v=maBftz9T4Eo",
  category: "MEDIA CONTENTS",
  member: "민니",
  year: "2025",
  thumbnail: "https://i.ytimg.com/vi/maBftz9T4Eo/hqdefault.jpg",
  alt: "민니 - MINNIE of (G)I-DLE: All About 'HER' (2025-03-21)",
  title: "MINNIE of (G)I-DLE: All About 'HER' (2025-03-21)"
},
{
  link: "https://www.youtube.com/watch?v=omxkdqMRvcw",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2025",
  thumbnail: "https://i.ytimg.com/vi/omxkdqMRvcw/hqdefault.jpg",
  alt: "아이들 - มื้อสุดท้ายก่อนตายของ มินนี่ ณิชา l Last Supper EP.8 l [GoyNattyDream] (2025-03-11)",
  title: "มื้อสุดท้ายก่อนตายของ มินนี่ ณิชา l Last Supper EP.8 l [GoyNattyDream] (2025-03-11)"
},
{
  link: "https://www.youtube.com/watch?v=Gb0aae7-wnc",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2025",
  thumbnail: "https://i.ytimg.com/vi/Gb0aae7-wnc/hqdefault.jpg",
  alt: "아이들 - [ENG] [Mnet 30주년 차트쇼/1회] ★G-DRAGON 등판★ 지디가 해명한 MAMA 퍼포먼스는? | Mnet 250306 방송 (2025-03-06)",
  title: "[ENG] [Mnet 30주년 차트쇼/1회] ★G-DRAGON 등판★ 지디가 해명한 MAMA 퍼포먼스는? | Mnet 250306 방송 (2025-03-06)"
},
{
  link: "https://www.youtube.com/watch?v=m8hR8X3whAY",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2025",
  thumbnail: "https://i.ytimg.com/vi/m8hR8X3whAY/hqdefault.jpg",
  alt: "아이들 - ท้ามินนี่ (G)I-DLE ทายราคาอาหารไทยในดวงใจ | MARCHU EP.172 (2025-03-02)",
  title: "ท้ามินนี่ (G)I-DLE ทายราคาอาหารไทยในดวงใจ | MARCHU EP.172 (2025-03-02)"
},
{
  link: "https://www.youtube.com/watch?v=CibZxv0MSHo",
  category: "MEDIA CONTENTS",
  member: "민니",
  year: "2025",
  thumbnail: "https://i.ytimg.com/vi/CibZxv0MSHo/hqdefault.jpg",
  alt: "민니 - [SUB] 늘 힘이 되어줘서 너무 고맙다고 얘기하고 싶었어요🩷ㅣ최애 익스프레스📦ㅣ(여자)아이들 민니 (2025-02-17)",
  title: "[SUB] 늘 힘이 되어줘서 너무 고맙다고 얘기하고 싶었어요🩷ㅣ최애 익스프레스📦ㅣ(여자)아이들 민니 (2025-02-17)"
},
{
  link: "https://www.youtube.com/watch?v=MyOT2TX9znI",
  category: "MEDIA CONTENTS",
  member: "민니",
  year: "2025",
  thumbnail: "https://i.ytimg.com/vi/MyOT2TX9znI/hqdefault.jpg",
  alt: "민니 - [SUB] “제 최종 목표는 빌보드 1등이에요”ㅣEP.1 (여자)아이들 민니ㅣ미방분 (2025-02-01)",
  title: "[SUB] “제 최종 목표는 빌보드 1등이에요”ㅣEP.1 (여자)아이들 민니ㅣ미방분 (2025-02-01)"
},
{
  link: "https://www.youtube.com/watch?v=CHUYm9B9uJM",
  category: "MEDIA CONTENTS",
  member: "민니",
  year: "2025",
  thumbnail: "https://i.ytimg.com/vi/CHUYm9B9uJM/hqdefault.jpg",
  alt: "민니 - [EN/JP/TI] Her! 덕통사고 당했어요💘 SBN 앞에서 심장이 lub-dub❤️‍🔥 | 민주의 핑크 캐비닛💝 EP.8 | MINNIE (2025-01-30)",
  title: "[EN/JP/TI] Her! 덕통사고 당했어요💘 SBN 앞에서 심장이 lub-dub❤️‍🔥 | 민주의 핑크 캐비닛💝 EP.8 | MINNIE (2025-01-30)"
},
{
  link: "https://www.youtube.com/watch?v=BkDW8RmTK4A",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2025",
  thumbnail: "https://i.ytimg.com/vi/BkDW8RmTK4A/hqdefault.jpg",
  alt: "아이들 - [2025春晚等着你]白鹿 程潇 宋雨琦即兴舞蹈 眼神巨有戏！ | CCTV春晚 (2025-01-28)",
  title: "[2025春晚等着你]白鹿 程潇 宋雨琦即兴舞蹈 眼神巨有戏！ | CCTV春晚 (2025-01-28)"
},
{
  link: "https://www.youtube.com/watch?v=c5hEAM8FHeY",
  category: "MEDIA CONTENTS",
  member: "민니",
  year: "2025",
  thumbnail: "https://i.ytimg.com/vi/c5hEAM8FHeY/hqdefault.jpg",
  alt: "민니 - [무대+토크 풀버전] 첫 솔로로 컴백한 (여자)아이들 민니💖 신곡 ‘Her’+ 방송 최초 라이브 ‘꿈결같아서’ + ‘Valentine’s Dream’ | KBS 250124 방송 (2025-01-24)",
  title: "[무대+토크 풀버전] 첫 솔로로 컴백한 (여자)아이들 민니💖 신곡 ‘Her’+ 방송 최초 라이브 ‘꿈결같아서’ + ‘Valentine’s Dream’ | KBS 250124 방송 (2025-01-24)"
},
{
  link: "https://www.youtube.com/watch?v=Y-sN-d3IDmw",
  category: "MEDIA CONTENTS",
  member: "민니",
  year: "2025",
  thumbnail: "https://i.ytimg.com/vi/Y-sN-d3IDmw/hqdefault.jpg",
  alt: "민니 - [EN/JP/CN] “우리 팀 아니야?!🔥” 또 싸움난 민니&뱀뱀ㅋㅋㅋㅋ 죄송하지만 다른데 가서 싸워주세요🙏ㅋㅋㅋㅋ | EP.12 민니&뱀뱀 | 이쪽으로올래2 (2025-01-24)",
  title: "[EN/JP/CN] “우리 팀 아니야?!🔥” 또 싸움난 민니&뱀뱀ㅋㅋㅋㅋ 죄송하지만 다른데 가서 싸워주세요🙏ㅋㅋㅋㅋ | EP.12 민니&뱀뱀 | 이쪽으로올래2 (2025-01-24)"
},
{
  link: "https://www.youtube.com/watch?v=hcJG25ZFqDA",
  category: "MEDIA CONTENTS",
  member: "소연",
  year: "2025",
  thumbnail: "https://i.ytimg.com/vi/hcJG25ZFqDA/hqdefault.jpg",
  alt: "소연 - [SUB]전소연이 키운(?) 버추얼 아이돌 | 사내수공업 가수 - 다비드 봉ㅣ(여자)아이들 소연 (2025-01-23)",
  title: "[SUB]전소연이 키운(?) 버추얼 아이돌 | 사내수공업 가수 - 다비드 봉ㅣ(여자)아이들 소연 (2025-01-23)"
},
{
  link: "https://www.youtube.com/watch?v=p9DQKwXS2Go",
  category: "MEDIA CONTENTS",
  member: "민니",
  year: "2025",
  thumbnail: "https://i.ytimg.com/vi/p9DQKwXS2Go/hqdefault.jpg",
  alt: "민니 - (여자)아이들과 (헬스)아이들... (Feat. 민니, 마선호) (2025-01-15)",
  title: "(여자)아이들과 (헬스)아이들... (Feat. 민니, 마선호) (2025-01-15)"
},
{
  link: "https://www.youtube.com/watch?v=Qzg92GvSQgU",
  category: "MEDIA CONTENTS",
  member: "민니",
  year: "2025",
  thumbnail: "https://i.ytimg.com/vi/Qzg92GvSQgU/hqdefault.jpg",
  alt: "민니 - [EN] 태국에서 공짜로 샴페인 먹는 법 (민니 찬스) / 밥사효 EP.24 (여자)아이들 민니 편 (2025-01-22)",
  title: "[EN] 태국에서 공짜로 샴페인 먹는 법 (민니 찬스) / 밥사효 EP.24 (여자)아이들 민니 편 (2025-01-22)"
},

// 🔽 새로 불러온 50개 항목
{
  link: "https://www.youtube.com/watch?v=XuFRgZ03gLQ",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2024",
  thumbnail: "https://i.ytimg.com/vi/XuFRgZ03gLQ/hqdefault.jpg",
  alt: "아이들 - 舒華的舞蹈教室開張！楊祐寧扭腰擺臀學《Queencard》 王大陸性感POSE一次到位 要不要組團出道了XD ｜艾嘉食堂 EP8精華 AI's kitchen (2024-11-30)",
  title: "舒華的舞蹈教室開張！楊祐寧扭腰擺臀學《Queencard》 王大陸性感POSE一次到位 要不要組團出道了XD ｜艾嘉食堂 EP8精華 AI's kitchen (2024-11-30)"
},
{
  link: "https://www.youtube.com/watch?v=MhHPhF2rbs8",
  category: "MEDIA CONTENTS",
  member: "소연",
  year: "2024",
  thumbnail: "https://i.ytimg.com/vi/MhHPhF2rbs8/hqdefault.jpg",
  alt: "소연 - [ENG] 재계약 논란에 대해 입을 열다 | 비빔팝(BIBIM-POP) EP.15 전소연 (여자)아이들 (2024-11-27)",
  title: "[ENG] 재계약 논란에 대해 입을 열다 | 비빔팝(BIBIM-POP) EP.15 전소연 (여자)아이들 (2024-11-27)"
},
{
  link: "https://www.youtube.com/watch?v=V1l1MMVmrjM",
  category: "MEDIA CONTENTS",
  member: "소연",
  year: "2024",
  thumbnail: "https://i.ytimg.com/vi/V1l1MMVmrjM/hqdefault.jpg",
  alt: "소연 - [EN/JP] 제 1회 지코 주주총회 | 이용진, 선미, 도경수, 전소연, 우태운, 블락비(재효, 유권, 피오), 보이넥스트도어(명재현, 태산, 운학) (2024-11-16)",
  title: "[EN/JP] 제 1회 지코 주주총회 | 이용진, 선미, 도경수, 전소연, 우태운, 블락비(재효, 유권, 피오), 보이넥스트도어(명재현, 태산, 운학) (2024-11-16)"
},
{
  link: "https://www.youtube.com/watch?v=sh_FEpfNfuE",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2024",
  thumbnail: "https://i.ytimg.com/vi/sh_FEpfNfuE/hqdefault.jpg",
  alt: "아이들 - พา (G)I-DLE กินข้าวแกง! [GoyNattyDream] (2024-10-29)",
  title: "พา (G)I-DLE กินข้าวแกง! [GoyNattyDream] (2024-10-29)"
},
{
  link: "https://www.youtube.com/watch?v=K1pNJbqu9_c",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2024",
  thumbnail: "https://i.ytimg.com/vi/K1pNJbqu9_c/hqdefault.jpg",
  alt: "아이들 - กรรมกรข่าวลุกเป็นไฟ คาลิสม่ากระจาย กับ \"(G)I-DLE\" 5 สาวหลากสัญชาติ สุดร้อนแรง (2024-10-17)",
  title: "กรรมกรข่าวลุกเป็นไฟ คาลิสม่ากระจาย กับ \"(G)I-DLE\" 5 สาวหลากสัญชาติ สุดร้อนแรง (2024-10-17)"
},
{
  link: "https://www.youtube.com/watch?v=0jAUa7APMX4",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2017",
  thumbnail: "https://i.ytimg.com/vi/0jAUa7APMX4/hqdefault.jpg",
  alt: "아이들 - Live \"กรรมกรข่าว คุยนอกจอ\"  17 ตุลาคม 2567 (2017-10-67)",
  title: "Live \"กรรมกรข่าว คุยนอกจอ\"  17 ตุลาคม 2567 (2017-10-67)"
},
{
  link: "https://www.youtube.com/watch?v=npr7MDAUAoU",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2024",
  thumbnail: "https://i.ytimg.com/vi/npr7MDAUAoU/hqdefault.jpg",
  alt: "아이들 - นัด “มินนี่ (G)I-DLE” ตั้งวงจกส้มตำปลาร้ากลางกรุงฯ @ตำกระเทยสาเกต | กี้ซดโอปโซ้ย EP.133 (2024-10-16)",
  title: "นัด “มินนี่ (G)I-DLE” ตั้งวงจกส้มตำปลาร้ากลางกรุงฯ @ตำกระเทยสาเกต | กี้ซดโอปโซ้ย EP.133 (2024-10-16)"
},
{
  link: "https://www.youtube.com/watch?v=6yHb9LqZ77Y",
  category: "MEDIA CONTENTS",
  member: "소연",
  year: "2024",
  thumbnail: "https://i.ytimg.com/vi/6yHb9LqZ77Y/hqdefault.jpg",
  alt: "소연 - [#나혼산] 전소연이 제 킥입니다. 아이들부터 QWER까지 완벽 디렉팅하는 소연의 본업 모먼트 몰아보기ㅣ#전소연 #아이들 MBC220513방송 (2024-10-12)",
  title: "[#나혼산] 전소연이 제 킥입니다. 아이들부터 QWER까지 완벽 디렉팅하는 소연의 본업 모먼트 몰아보기ㅣ#전소연 #아이들 MBC220513방송 (2024-10-12)"
},
{
  link: "https://www.youtube.com/watch?v=v-ktLgn4tkk",
  category: "MEDIA CONTENTS",
  member: "미연",
  year: "2024",
  thumbnail: "https://i.ytimg.com/vi/v-ktLgn4tkk/hqdefault.jpg",
  alt: "미연 - [#시골에간도시Z] 하이라이트 | 나야... 조미연... 👑 아이들 미연의 시골간Z 고정 활약 모음.ZIP📂 | ENA 채널 |  매주 [일] 저녁 8시 30분 방송 (2024-10-09)",
  title: "[#시골에간도시Z] 하이라이트 | 나야... 조미연... 👑 아이들 미연의 시골간Z 고정 활약 모음.ZIP📂 | ENA 채널 |  매주 [일] 저녁 8시 30분 방송 (2024-10-09)"
},
{
  link: "https://www.youtube.com/watch?v=je19F-V_WPg",
  category: "MEDIA CONTENTS",
  member: "민니",
  year: "2024",
  thumbnail: "https://i.ytimg.com/vi/je19F-V_WPg/hqdefault.jpg",
  alt: "민니 - [ENG SUB] มินนี่ ทำดีดีลูก! หนูเป็นศิลปิน | ปากต่อปาก EP.33 | (G)I-DLE MINNIE (2024-10-09)",
  title: "[ENG SUB] มินนี่ ทำดีดีลูก! หนูเป็นศิลปิน | ปากต่อปาก EP.33 | (G)I-DLE MINNIE (2024-10-09)"
},
{
  link: "https://www.youtube.com/watch?v=83SW5et3ruI",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2024",
  thumbnail: "https://i.ytimg.com/vi/83SW5et3ruI/hqdefault.jpg",
  alt: "아이들 - [#놀라운토요일] 역대급 무대 나왔다!!🔥 놀토.ver 키 X (여자) 아이들 〈클락션(Klaxon)〉♬ 제2의 멤버 인정입니다. | #번개클립 (2024-08-13)",
  title: "[#놀라운토요일] 역대급 무대 나왔다!!🔥 놀토.ver 키 X (여자) 아이들 〈클락션(Klaxon)〉♬ 제2의 멤버 인정입니다. | #번개클립 (2024-08-13)"
},
{
  link: "https://www.youtube.com/watch?v=x1EpdKKy4vk",
  category: "MEDIA CONTENTS",
  member: "소연",
  year: "2024",
  thumbnail: "https://i.ytimg.com/vi/x1EpdKKy4vk/hqdefault.jpg",
  alt: "소연 - [덱스의 냉터뷰] 🐭땃쥐와 🐶덱댕이가 보낸 최고의 하루🌿l EP.19 (여자)아이들((G)I-DLE) 소연 편 (2024-08-01)",
  title: "[덱스의 냉터뷰] 🐭땃쥐와 🐶덱댕이가 보낸 최고의 하루🌿l EP.19 (여자)아이들((G)I-DLE) 소연 편 (2024-08-01)"
},
{
  link: "https://www.youtube.com/watch?v=1Ccx4kjPz_M",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2024",
  thumbnail: "https://i.ytimg.com/vi/1Ccx4kjPz_M/hqdefault.jpg",
  alt: "아이들 - [IND/ENG] (G)I-DLE dapat peringkat satu berkat tampil di KBS? | The Seasons | KBS WORLD TV 240719 (2024-07-26)",
  title: "[IND/ENG] (G)I-DLE dapat peringkat satu berkat tampil di KBS? | The Seasons | KBS WORLD TV 240719 (2024-07-26)"
},
{
  link: "https://www.youtube.com/watch?v=RT8ZqskIuVE",
  category: "MEDIA CONTENTS",
  member: "소연",
  year: "2024",
  thumbnail: "https://i.ytimg.com/vi/RT8ZqskIuVE/hqdefault.jpg",
  alt: "소연 - [미공개] 술찌 외장하드 탈탈 털었습니다🔥 (feat. 슬기, 전소연, 조유리, 채령) | 인싸동 술찌 비하인드② (2024-07-24)",
  title: "[미공개] 술찌 외장하드 탈탈 털었습니다🔥 (feat. 슬기, 전소연, 조유리, 채령) | 인싸동 술찌 비하인드② (2024-07-24)"
},
{
  link: "https://www.youtube.com/watch?v=LboMzlpKcxY",
  category: "MEDIA CONTENTS",
  member: "소연",
  year: "2024",
  thumbnail: "https://i.ytimg.com/vi/LboMzlpKcxY/hqdefault.jpg",
  alt: "소연 - [ENG SUB] \"빚 까는 데만 3년 걸렸어요\" (여자)아이들 전소연 님 앞에서 미미미누 방구석 노래방 퀸카 불렀습니다 | 직업탐구 영역 EP.10 (2024-07-16)",
  title: "[ENG SUB] \"빚 까는 데만 3년 걸렸어요\" (여자)아이들 전소연 님 앞에서 미미미누 방구석 노래방 퀸카 불렀습니다 | 직업탐구 영역 EP.10 (2024-07-16)"
},
{
  link: "https://www.youtube.com/watch?v=40uWYloF7Js",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2024",
  thumbnail: "https://i.ytimg.com/vi/40uWYloF7Js/hqdefault.jpg",
  alt: "아이들 - [#더시즌즈] 쏟아지는 비하인드~ 지코가 부르는 (여자)아이들의 신곡😎(feat. 짱구 춤🤣) | KBS 240712 방송 (2024-07-14)",
  title: "[#더시즌즈] 쏟아지는 비하인드~ 지코가 부르는 (여자)아이들의 신곡😎(feat. 짱구 춤🤣) | KBS 240712 방송 (2024-07-14)"
},
{
  link: "https://www.youtube.com/watch?v=EvviDzgLwA4",
  category: "MEDIA CONTENTS",
  member: "민니,미연",
  year: "2024",
  thumbnail: "https://i.ytimg.com/vi/EvviDzgLwA4/hqdefault.jpg",
  alt: "민니,미연 - [EN/TH] [밥묵자](꼰대와)아이들(feat. 미연,민니) (2024-07-13)",
  title: "[EN/TH] [밥묵자](꼰대와)아이들(feat. 미연,민니) (2024-07-13)"
},
{
  link: "https://www.youtube.com/watch?v=bm1dFHxZ-Kk",
  category: "MEDIA CONTENTS",
  member: "소연",
  year: "2024",
  thumbnail: "https://i.ytimg.com/vi/bm1dFHxZ-Kk/hqdefault.jpg",
  alt: "소연 - (여자)아이들 소연이 직접 디렉팅 본 이번 신곡! 멤버들의 끊임없이 쏟아지는 비하인드🤣 [더 시즌즈-지코의 아티스트] | KBS 240712 방송 (2024-07-12)",
  title: "(여자)아이들 소연이 직접 디렉팅 본 이번 신곡! 멤버들의 끊임없이 쏟아지는 비하인드🤣 [더 시즌즈-지코의 아티스트] | KBS 240712 방송 (2024-07-12)"
},
{
  link: "https://www.youtube.com/watch?v=THeZo_llTA8",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2024",
  thumbnail: "https://i.ytimg.com/vi/THeZo_llTA8/hqdefault.jpg",
  alt: "아이들 - 데뷔 7년차인 (여자)아이들이 데뷔 초 때 했던 인사를 재현하다?!🤣😂 [더 시즌즈-지코의 아티스트] | KBS 240712 방송 (2024-07-12)",
  title: "데뷔 7년차인 (여자)아이들이 데뷔 초 때 했던 인사를 재현하다?!🤣😂 [더 시즌즈-지코의 아티스트] | KBS 240712 방송 (2024-07-12)"
},
{
  link: "https://www.youtube.com/watch?v=OsYO6tj89vA",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2024",
  thumbnail: "https://i.ytimg.com/vi/OsYO6tj89vA/hqdefault.jpg",
  alt: "아이들 - [EN/JP] 요즘 아이들과 친해지기 쉽네 막이래ㅋ| 집대성 ep.14 (2024-07-12)",
  title: "[EN/JP] 요즘 아이들과 친해지기 쉽네 막이래ㅋ| 집대성 ep.14 (2024-07-12)"
},
{
  link: "https://www.youtube.com/watch?v=Jcv9THBalhM",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2024",
  thumbnail: "https://i.ytimg.com/vi/Jcv9THBalhM/hqdefault.jpg",
  alt: "아이들 - 난 공주고 이건 공주 테스트다 (2024-07-11)",
  title: "난 공주고 이건 공주 테스트다 (2024-07-11)"
},
{
  link: "https://www.youtube.com/watch?v=WFfXRmlhgDQ",
  category: "MEDIA CONTENTS",
  member: "민니",
  year: "2024",
  thumbnail: "https://i.ytimg.com/vi/WFfXRmlhgDQ/hqdefault.jpg",
  alt: "민니 - [SUB] 내 편인듯 내 편 아닌 선배님과 TALK│재친구 Ep. 43 │아이들 민니 김재중 (2024-07-11)",
  title: "[SUB] 내 편인듯 내 편 아닌 선배님과 TALK│재친구 Ep. 43 │아이들 민니 김재중 (2024-07-11)"
},
{
  link: "https://www.youtube.com/watch?v=uE7hBc9aEzg",
  category: "MEDIA CONTENTS",
  member: "미연",
  year: "2024",
  thumbnail: "https://i.ytimg.com/vi/uE7hBc9aEzg/hqdefault.jpg",
  alt: "미연 - [EN] (여자)아이들 '떼창 실패 사건'의 전말 (효연x미연) / 밥사효 EP.05 미연 편 (2024-07-10)",
  title: "[EN] (여자)아이들 '떼창 실패 사건'의 전말 (효연x미연) / 밥사효 EP.05 미연 편 (2024-07-10)"
},
{
  link: "https://www.youtube.com/watch?v=8XSgO4JNhi4",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2024",
  thumbnail: "https://i.ytimg.com/vi/8XSgO4JNhi4/hqdefault.jpg",
  alt: "아이들 - (여자)아이들 술터뷰 (2024-07-09)",
  title: "(여자)아이들 술터뷰 (2024-07-09)"
},
{
  link: "https://www.youtube.com/watch?v=3c3hU4qtiRM",
  category: "MEDIA CONTENTS",
  member: "우기",
  year: "2024",
  thumbnail: "https://i.ytimg.com/vi/3c3hU4qtiRM/hqdefault.jpg",
  alt: "우기 - 살다살다 이런 배틀까지...? (여자)아이들 우기 vs 쭌앤브라 한국어 대결 | 박준형 & 브라이언 XYOB EP.6 (2024-05-03)",
  title: "살다살다 이런 배틀까지...? (여자)아이들 우기 vs 쭌앤브라 한국어 대결 | 박준형 & 브라이언 XYOB EP.6 (2024-05-03)"
},
{
  link: "https://www.youtube.com/watch?v=drfCoH6pVvs",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2024",
  thumbnail: "https://i.ytimg.com/vi/drfCoH6pVvs/hqdefault.jpg",
  alt: "아이들 - [EN/JP/CN/RU] 뛰는 슈주 위에 나는 엘프의 등장..💙 | EP.5 (여자)아이들((G)I-DLE) | 이쪽으로올래 (2024-04-26)",
  title: "[EN/JP/CN/RU] 뛰는 슈주 위에 나는 엘프의 등장..💙 | EP.5 (여자)아이들((G)I-DLE) | 이쪽으로올래 (2024-04-26)"
},
{
  link: "https://www.youtube.com/watch?v=9lsvBVtG1X8",
  category: "MEDIA CONTENTS",
  member: "소연",
  year: "2024",
  thumbnail: "https://i.ytimg.com/vi/9lsvBVtG1X8/hqdefault.jpg",
  alt: "소연 - [SUB] 히트곡메이커 전소연에게 1위 비결을 묻다ㅣ인싸동 술찌 ep. 13 (2024-04-24)",
  title: "[SUB] 히트곡메이커 전소연에게 1위 비결을 묻다ㅣ인싸동 술찌 ep. 13 (2024-04-24)"
},
{
  link: "https://www.youtube.com/watch?v=VVhmUgFtEAA",
  category: "MEDIA CONTENTS",
  member: "우기",
  year: "2024",
  thumbnail: "https://i.ytimg.com/vi/VVhmUgFtEAA/hqdefault.jpg",
  alt: "우기 - (EN) 덕질 12년 만에 처음으로 만난 내 최애의 아이돌💫 │ 려욱이의 [인생짤칵📸] Ep.05 (여자)아이들 우기 (2024-04-23)",
  title: "(EN) 덕질 12년 만에 처음으로 만난 내 최애의 아이돌💫 │ 려욱이의 [인생짤칵📸] Ep.05 (여자)아이들 우기 (2024-04-23)"
},
{
  link: "https://www.youtube.com/watch?v=qllUq84v2ZA",
  category: "MEDIA CONTENTS",
  member: "민니",
  year: "2024",
  thumbnail: "https://i.ytimg.com/vi/qllUq84v2ZA/hqdefault.jpg",
  alt: "민니 - 난 가르치는 건 딱 적성이니까🎼[(여자)아이들 민니] | 최애티처 ep.3 [EN/JP/ID/VI/TH] (2024-04-18)",
  title: "난 가르치는 건 딱 적성이니까🎼[(여자)아이들 민니] | 최애티처 ep.3 [EN/JP/ID/VI/TH] (2024-04-18)"
},
{
  link: "https://www.youtube.com/watch?v=dhH9LVytAhY",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2024",
  thumbnail: "https://i.ytimg.com/vi/dhH9LVytAhY/hqdefault.jpg",
  alt: "아이들 - พา \"มินนี่ (G)I-DLE\" นั่งรถตุ๊กตุ๊ก ตะลุยกินของไทยอร่อยๆ ย่านพระนคร | ถ้าโลกนี้ไม่มี GPS Survey (2024-04-12)",
  title: "พา \"มินนี่ (G)I-DLE\" นั่งรถตุ๊กตุ๊ก ตะลุยกินของไทยอร่อยๆ ย่านพระนคร | ถ้าโลกนี้ไม่มี GPS Survey (2024-04-12)"
},
{
  link: "https://www.youtube.com/watch?v=Avr80KQT530",
  category: "MEDIA CONTENTS",
  member: "우기",
  year: "2024",
  thumbnail: "https://i.ytimg.com/vi/Avr80KQT530/hqdefault.jpg",
  alt: "우기 - 슈퍼스타 ENFJ들은 슈퍼이끌림이되..⭐️ㅣMAX&(여자)아이들 우기 [셀폰KODE] (2024-04-09)",
  title: "슈퍼스타 ENFJ들은 슈퍼이끌림이되..⭐️ㅣMAX&(여자)아이들 우기 [셀폰KODE] (2024-04-09)"
},
{
  link: "https://www.youtube.com/watch?v=KkBWQTt4B6g",
  category: "MEDIA CONTENTS",
  member: "미연",
  year: "2024",
  thumbnail: "https://i.ytimg.com/vi/KkBWQTt4B6g/hqdefault.jpg",
  alt: "미연 - 현직 아이돌 일침ㄷㄷ \"27살인데 연애 한 번 못해봤겠어요?ㅋ 아이돌도 사람인데\"ㅣ동네스타K4 EP.3 뱀뱀 미연 파트리샤 (2024-04-09)",
  title: "현직 아이돌 일침ㄷㄷ \"27살인데 연애 한 번 못해봤겠어요?ㅋ 아이돌도 사람인데\"ㅣ동네스타K4 EP.3 뱀뱀 미연 파트리샤 (2024-04-09)"
},
{
  link: "https://www.youtube.com/watch?v=cFH_iap4pDc",
  category: "MEDIA CONTENTS",
  member: "미연",
  year: "2024",
  thumbnail: "https://i.ytimg.com/vi/cFH_iap4pDc/hqdefault.jpg",
  alt: "미연 - [ENG] 미연님, 정말 외모 고민이 없으세요? (2024-04-01)",
  title: "[ENG] 미연님, 정말 외모 고민이 없으세요? (2024-04-01)"
},
{
  link: "https://www.youtube.com/watch?v=H3pkJHnPtNA",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2024",
  thumbnail: "https://i.ytimg.com/vi/H3pkJHnPtNA/hqdefault.jpg",
  alt: "아이들 - The Wall Song ร้องข้ามกำแพง| EP.186 |เบสท์ / ปันปัน , แจ๊คกี้/เจมีไนน์ , โฟร์ท| 28 มี.ค. 67 FULL EP (2024-03-29)",
  title: "The Wall Song ร้องข้ามกำแพง| EP.186 |เบสท์ / ปันปัน , แจ๊คกี้/เจมีไนน์ , โฟร์ท| 28 มี.ค. 67 FULL EP (2024-03-29)"
},
{
  link: "https://www.youtube.com/watch?v=E0kuxie_ZNs",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2024",
  thumbnail: "https://i.ytimg.com/vi/E0kuxie_ZNs/hqdefault.jpg",
  alt: "아이들 - The Wall Song ร้องข้ามกำแพง | EP.186 | เจมีไนน์ นรวิชญ์ / โฟร์ท ณัฐวรรธน์ | 28 มี.ค. 67 [5/5] (2024-03-28)",
  title: "The Wall Song ร้องข้ามกำแพง | EP.186 | เจมีไนน์ นรวิชญ์ / โฟร์ท ณัฐวรรธน์ | 28 มี.ค. 67 [5/5] (2024-03-28)"
},
{
  link: "https://www.youtube.com/watch?v=6mtKI_b_DgY",
  category: "MEDIA CONTENTS",
  member: "미연",
  year: "2024",
  thumbnail: "https://i.ytimg.com/vi/6mtKI_b_DgY/hqdefault.jpg",
  alt: "미연 - [사나의 냉터뷰] 예쁜 애 옆에 예쁜 애🌸두 공주의 냉터뷰🐹💥🐰 l EP.1 (여자)아이들 미연 편 (2024-03-28)",
  title: "[사나의 냉터뷰] 예쁜 애 옆에 예쁜 애🌸두 공주의 냉터뷰🐹💥🐰 l EP.1 (여자)아이들 미연 편 (2024-03-28)"
},
{
  link: "https://www.youtube.com/watch?v=i3edDXjiv7U",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2024",
  thumbnail: "https://i.ytimg.com/vi/i3edDXjiv7U/hqdefault.jpg",
  alt: "아이들 - ยังไงไหนเล่า EP. 89 มินนี่ (G)I-DLE พร้อมตอบเรื่องความรัก! [GoyNattyDream] (2024-03-25)",
  title: "ยังไงไหนเล่า EP. 89 มินนี่ (G)I-DLE พร้อมตอบเรื่องความรัก! [GoyNattyDream] (2024-03-25)"
},
{
  link: "https://www.youtube.com/watch?v=vX6s3Nkb9WM",
  category: "MEDIA CONTENTS",
  member: "미연",
  year: "2024",
  thumbnail: "https://i.ytimg.com/vi/vX6s3Nkb9WM/hqdefault.jpg",
  alt: "미연 - 나는 무인도는 딱 질색이니까 [(여자)아이들 미연] | 무이자 ep.10 [EN/JP/ID/TH] (2024-03-22)",
  title: "나는 무인도는 딱 질색이니까 [(여자)아이들 미연] | 무이자 ep.10 [EN/JP/ID/TH] (2024-03-22)"
},
{
  link: "https://www.youtube.com/watch?v=gh5aq4Tqq9A",
  category: "MEDIA CONTENTS",
  member: "미연",
  year: "2024",
  thumbnail: "https://i.ytimg.com/vi/gh5aq4Tqq9A/hqdefault.jpg",
  alt: "미연 - 걸그룹이 혼자 무인도 가면 생기는 일 [(여자)아이들 미연] | 무이자 ep.9 [EN/JP/ID/TH] (2024-03-21)",
  title: "걸그룹이 혼자 무인도 가면 생기는 일 [(여자)아이들 미연] | 무이자 ep.9 [EN/JP/ID/TH] (2024-03-21)"
},
{
  link: "https://www.youtube.com/watch?v=Wff4Ip_SHBw",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2024",
  thumbnail: "https://i.ytimg.com/vi/Wff4Ip_SHBw/hqdefault.jpg",
  alt: "아이들 - คำต้องห้าม EP.106 | เทพลีลา x มินนี่ (G)I-DLE (2024-03-19)",
  title: "คำต้องห้าม EP.106 | เทพลีลา x มินนี่ (G)I-DLE (2024-03-19)"
},
{
  link: "https://www.youtube.com/watch?v=6CPOm8MlNfk",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2024",
  thumbnail: "https://i.ytimg.com/vi/6CPOm8MlNfk/hqdefault.jpg",
  alt: "아이들 - “มินนี่ - พีพี” ไม่ได้เป็นคนเซ็กซี่ ความจริงเรียบร้อย พูดน้อย น่ารัก? | วอดอวอแว EP.10 (2024-03-12)",
  title: "“มินนี่ - พีพี” ไม่ได้เป็นคนเซ็กซี่ ความจริงเรียบร้อย พูดน้อย น่ารัก? | วอดอวอแว EP.10 (2024-03-12)"
},
{
  link: "https://www.youtube.com/watch?v=-qiAmSozQTA",
  category: "MEDIA CONTENTS",
  member: "민니",
  year: "2024",
  thumbnail: "https://i.ytimg.com/vi/-qiAmSozQTA/hqdefault.jpg",
  alt: "민니 - 텐 민니가 들려주는 기묘한 태국 이야기 | ODG (2024-02-18)",
  title: "텐 민니가 들려주는 기묘한 태국 이야기 | ODG (2024-02-18)"
},
{
  link: "https://www.youtube.com/watch?v=PTWyWh1Oeow",
  category: "MEDIA CONTENTS",
  member: "슈화",
  year: "2024",
  thumbnail: "https://i.ytimg.com/vi/PTWyWh1Oeow/hqdefault.jpg",
  alt: "슈화 - 강형욱이 동업 제안한 최초의 (여자)아이들 슈화 [강형욱의개스트쇼] EP.25 (2024-02-17)",
  title: "강형욱이 동업 제안한 최초의 (여자)아이들 슈화 [강형욱의개스트쇼] EP.25 (2024-02-17)"
},
{
  link: "https://www.youtube.com/watch?v=SsITRxMFZn8",
  category: "MEDIA CONTENTS",
  member: "미연",
  year: "2024",
  thumbnail: "https://i.ytimg.com/vi/SsITRxMFZn8/hqdefault.jpg",
  alt: "미연 - [ENG][아형✪하이라이트] ＂넌 3개월 용이야＂ '면프로디테' 미연의 자존심을 상하게 한 나쁜 남자 이진호의 충격 발언😱 | 아는 형님 | JTBC 240203 방송 (2024-02-03)",
  title: "[ENG][아형✪하이라이트] ＂넌 3개월 용이야＂ '면프로디테' 미연의 자존심을 상하게 한 나쁜 남자 이진호의 충격 발언😱 | 아는 형님 | JTBC 240203 방송 (2024-02-03)"
},
{
  link: "https://www.youtube.com/watch?v=grKFXFAEpLE",
  category: "MEDIA CONTENTS",
  member: "우기",
  year: "2024",
  thumbnail: "https://i.ytimg.com/vi/grKFXFAEpLE/hqdefault.jpg",
  alt: "우기 - 문어왕이라고 라떼 시절 소환하는 경규와 지지 않는 MZ 퀸카 송우기👑 (2024-02-01)",
  title: "문어왕이라고 라떼 시절 소환하는 경규와 지지 않는 MZ 퀸카 송우기👑 (2024-02-01)"
},
{
  link: "https://www.youtube.com/watch?v=m8s6G5gU0gk",
  category: "MEDIA CONTENTS",
  member: "소연",
  year: "2024",
  thumbnail: "https://i.ytimg.com/vi/m8s6G5gU0gk/hqdefault.jpg",
  alt: "소연 - [EN] \"저 기억하세요..?\" 10년만에 재회한 천재돌 사촌동생 소연이ㅣ시즌비시즌4 EP.17 (2024-02-01)",
  title: "[EN] \"저 기억하세요..?\" 10년만에 재회한 천재돌 사촌동생 소연이ㅣ시즌비시즌4 EP.17 (2024-02-01)"
},
{
  link: "https://www.youtube.com/watch?v=N_1XDDzPjNE",
  category: "MEDIA CONTENTS",
  member: "민니",
  year: "2024",
  thumbnail: "https://i.ytimg.com/vi/N_1XDDzPjNE/hqdefault.jpg",
  alt: "민니 - [SUB] (여자)아이들의 필승 보이스💕 Super Lady✨  민니 안 좋아하는 거 어떻게 하는 건데... | EP.58 l 조현아의 목요일 밤 l 민니 조현아 (2024-02-01)",
  title: "[SUB] (여자)아이들의 필승 보이스💕 Super Lady✨  민니 안 좋아하는 거 어떻게 하는 건데... | EP.58 l 조현아의 목요일 밤 l 민니 조현아 (2024-02-01)"
},
{
  link: "https://www.youtube.com/watch?v=7ZqERcFR4iA",
  category: "MEDIA CONTENTS",
  member: "우기",
  year: "2024",
  thumbnail: "https://i.ytimg.com/vi/7ZqERcFR4iA/hqdefault.jpg",
  alt: "우기 - [SUB](여자)아이들 우기, K-pop 최고의 퀸카 TOMBOY에서 NxDE로 어그로 끌던 SUPER LADYㅣ노빠꾸탁재훈 시즌2 EP.89 (2024-02-01)",
  title: "[SUB](여자)아이들 우기, K-pop 최고의 퀸카 TOMBOY에서 NxDE로 어그로 끌던 SUPER LADYㅣ노빠꾸탁재훈 시즌2 EP.89 (2024-02-01)"
},
{
  link: "https://www.youtube.com/watch?v=EXkHLMzZLM0",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2024",
  thumbnail: "https://i.ytimg.com/vi/EXkHLMzZLM0/hqdefault.jpg",
  alt: "아이들 - [SUB] 포장막차 우천시 취소 특집 (2024-01-31)",
  title: "[SUB] 포장막차 우천시 취소 특집 (2024-01-31)"
},
{
  link: "https://www.youtube.com/watch?v=99KDAa0yvyY",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2024",
  thumbnail: "https://i.ytimg.com/vi/99KDAa0yvyY/hqdefault.jpg",
  alt: "아이들 - GZ 잡는 예측 불가 美연 언니 쿠로미쨩 되다?!💜 | 제니의 세탁소 EP.4 (2024-01-31)",
  title: "GZ 잡는 예측 불가 美연 언니 쿠로미쨩 되다?!💜 | 제니의 세탁소 EP.4 (2024-01-31)"
},

// 🔽 새로 불러온 50개 항목
{
  link: "https://www.youtube.com/watch?v=4q56QakVfjY",
  category: "MEDIA CONTENTS",
  member: "미연",
  year: "2024",
  thumbnail: "https://i.ytimg.com/vi/4q56QakVfjY/hqdefault.jpg",
  alt: "미연 - [sub] 빠져든다… 빠져든다… 엉뚱함에 빠져든다…☺️ | 혤's club🍸 ep2 미연 (2024-01-12)",
  title: "[sub] 빠져든다… 빠져든다… 엉뚱함에 빠져든다…☺️ | 혤's club🍸 ep2 미연 (2024-01-12)"
},
{
  link: "https://www.youtube.com/watch?v=WKIXF1cQsg4",
  category: "MEDIA CONTENTS",
  member: "민니",
  year: "2023",
  thumbnail: "https://i.ytimg.com/vi/WKIXF1cQsg4/hqdefault.jpg",
  alt: "민니 - [유료광고포함] 블록버스터가 되어버린 꿀 빠는 소리?🍯·· 오늘의 꿀톤 아티스트는~ ‘인간 꿀후루’ 민니! [더 시즌즈-악뮤의 오날오밤] | KBS 231103 방송 (2023-11-03)",
  title: "[유료광고포함] 블록버스터가 되어버린 꿀 빠는 소리?🍯·· 오늘의 꿀톤 아티스트는~ ‘인간 꿀후루’ 민니! [더 시즌즈-악뮤의 오날오밤] | KBS 231103 방송 (2023-11-03)"
},
{
  link: "https://www.youtube.com/watch?v=pijYts6GYaM",
  category: "MEDIA CONTENTS",
  member: "미연",
  year: "2023",
  thumbnail: "https://i.ytimg.com/vi/pijYts6GYaM/hqdefault.jpg",
  alt: "미연 - 미연아, 주윤발 이야기 궁금하지 않니? 🙌안 듣고 싶어용🙌 | 조간예능맛집 #런닝맨 (2023-10-30)",
  title: "미연아, 주윤발 이야기 궁금하지 않니? 🙌안 듣고 싶어용🙌 | 조간예능맛집 #런닝맨 (2023-10-30)"
},
{
  link: "https://www.youtube.com/watch?v=KUbS-sx-caY",
  category: "MEDIA CONTENTS",
  member: "소연",
  year: "2023",
  thumbnail: "https://i.ytimg.com/vi/KUbS-sx-caY/hqdefault.jpg",
  alt: "소연 - 전소연 뮤비 촬영 현장 습격! 아무너케 탈탈 털어보는 [털털한 인터뷰] EP.01 (2023-08-31)",
  title: "전소연 뮤비 촬영 현장 습격! 아무너케 탈탈 털어보는 [털털한 인터뷰] EP.01 (2023-08-31)"
},
{
  link: "https://www.youtube.com/watch?v=oRUg6bJQ-Xk",
  category: "MEDIA CONTENTS",
  member: "민니,우기",
  year: "2023",
  thumbnail: "https://i.ytimg.com/vi/oRUg6bJQ-Xk/hqdefault.jpg",
  alt: "민니,우기 - MINNIE don't like sexy YUQI?  |Keep Running S11|CLIP|EP11 (2023-07-31)",
  title: "MINNIE don't like sexy YUQI?  |Keep Running S11|CLIP|EP11 (2023-07-31)"
},
{
  link: "https://www.youtube.com/watch?v=AVGQAleAIBQ",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2023",
  thumbnail: "https://i.ytimg.com/vi/AVGQAleAIBQ/hqdefault.jpg",
  alt: "아이들 - (ENG) 비방용 토크 미리 죄송합니다...🙏💦 너무 과몰입해서 그만..... | 와르르츄택 EP.4 (2023-07-24)",
  title: "(ENG) 비방용 토크 미리 죄송합니다...🙏💦 너무 과몰입해서 그만..... | 와르르츄택 EP.4 (2023-07-24)"
},
{
  link: "https://www.youtube.com/watch?v=WY2pw9uICzY",
  category: "MEDIA CONTENTS",
  member: "민니,우기",
  year: "2023",
  thumbnail: "https://i.ytimg.com/vi/WY2pw9uICzY/hqdefault.jpg",
  alt: "민니,우기 - MINNIE & YUQI of (G)I-DLE, It's Time to Go Home... Filming is Over! 😂 | DAEBAK SHOW S3 EP 10 (2023-07-18)",
  title: "MINNIE & YUQI of (G)I-DLE, It's Time to Go Home... Filming is Over! 😂 | DAEBAK SHOW S3 EP 10 (2023-07-18)"
},
{
  link: "https://www.youtube.com/watch?v=ANa_hp0A7pg",
  category: "MEDIA CONTENTS",
  member: "소연,미연,우기",
  year: "2023",
  thumbnail: "https://i.ytimg.com/vi/ANa_hp0A7pg/hqdefault.jpg",
  alt: "소연,미연,우기 - [SUB] 퀸카로 살아남는 법 | EP.6 (여자)아이들 미연&소연&우기 | 살롱드립☕ (2023-06-27)",
  title: "[SUB] 퀸카로 살아남는 법 | EP.6 (여자)아이들 미연&소연&우기 | 살롱드립☕ (2023-06-27)"
},
{
  link: "https://www.youtube.com/watch?v=tpZWFgxTRaY",
  category: "MEDIA CONTENTS",
  member: "우기",
  year: "2023",
  thumbnail: "https://i.ytimg.com/vi/tpZWFgxTRaY/hqdefault.jpg",
  alt: "우기 - [#라디오스타] 암어 암어 암어 퀸카~👑전교 7등 하던 엘프 소녀🧚🏻우기가 K-POP 이끄는 퀸카가 되기까지💜 | #우기 #(여자)아이들 #엠뚜루마뚜루 MBC230614방송 (2023-06-16)",
  title: "[#라디오스타] 암어 암어 암어 퀸카~👑전교 7등 하던 엘프 소녀🧚🏻우기가 K-POP 이끄는 퀸카가 되기까지💜 | #우기 #(여자)아이들 #엠뚜루마뚜루 MBC230614방송 (2023-06-16)"
},
{
  link: "https://www.youtube.com/watch?v=vS3ijM2tnZA",
  category: "MEDIA CONTENTS",
  member: "우기",
  year: "2023",
  thumbnail: "https://i.ytimg.com/vi/vS3ijM2tnZA/hqdefault.jpg",
  alt: "우기 - (ENG) MBTI 최악의 궁합 ISTP 명수와 ENFJ (G)I-DLE 우기(YUQI)의 안 싸우면 다행인 데이트 ㅣ 할명수 ep.134 (2023-06-09)",
  title: "(ENG) MBTI 최악의 궁합 ISTP 명수와 ENFJ (G)I-DLE 우기(YUQI)의 안 싸우면 다행인 데이트 ㅣ 할명수 ep.134 (2023-06-09)"
},
{
  link: "https://www.youtube.com/watch?v=SvNCqXY7w-M",
  category: "MEDIA CONTENTS",
  member: "미연",
  year: "2023",
  thumbnail: "https://i.ytimg.com/vi/SvNCqXY7w-M/hqdefault.jpg",
  alt: "미연 - [ENG]＂???얘 원래 이런 애야???＂ 예능감 美친 예쁜 또fk이 (여자)아이들 미연✨｜아는형님｜JTBC 230603 방송 (2023-06-04)",
  title: "[ENG]＂???얘 원래 이런 애야???＂ 예능감 美친 예쁜 또fk이 (여자)아이들 미연✨｜아는형님｜JTBC 230603 방송 (2023-06-04)"
},
{
  link: "https://www.youtube.com/watch?v=R5G51JSjG5g",
  category: "MEDIA CONTENTS",
  member: "미연",
  year: "2023",
  thumbnail: "https://i.ytimg.com/vi/R5G51JSjG5g/hqdefault.jpg",
  alt: "미연 - [ENG]＂계속 해도 괜찮을까?＂ ❌트월킹 은퇴 선언❌ 퀸카 (여자)아이들 미연의 춤을 본 아형 반응은?｜아는형님｜JTBC 230603 방송 (2023-06-03)",
  title: "[ENG]＂계속 해도 괜찮을까?＂ ❌트월킹 은퇴 선언❌ 퀸카 (여자)아이들 미연의 춤을 본 아형 반응은?｜아는형님｜JTBC 230603 방송 (2023-06-03)"
},
{
  link: "https://www.youtube.com/watch?v=BUq0SOM90ls",
  category: "MEDIA CONTENTS",
  member: "미연",
  year: "2023",
  thumbnail: "https://i.ytimg.com/vi/BUq0SOM90ls/hqdefault.jpg",
  alt: "미연 - [아형✪하이라이트] 발라드부터 힙합까지! '조현아x김조한x뮤지x미연' 천재 뮤지션들의 大 폭발 퍼포먼스를 모아 모아~! | 아는 형님 | JTBC 230603 방송 (2023-06-03)",
  title: "[아형✪하이라이트] 발라드부터 힙합까지! '조현아x김조한x뮤지x미연' 천재 뮤지션들의 大 폭발 퍼포먼스를 모아 모아~! | 아는 형님 | JTBC 230603 방송 (2023-06-03)"
},
{
  link: "https://www.youtube.com/watch?v=oFBGOI_OGho",
  category: "MEDIA CONTENTS",
  member: "민니,슈화",
  year: "2023",
  thumbnail: "https://i.ytimg.com/vi/oFBGOI_OGho/hqdefault.jpg",
  alt: "민니,슈화 - [오지구영] (여자)아이들의 퀸카 of 퀸카! 댄스 동아리에 찾아온 민니X슈화👑 가요계 선배 OOO 깜짝 등장까지?! | DOPE CLUB - (G)-IDLE (ENG SUB) (2023-06-02)",
  title: "[오지구영] (여자)아이들의 퀸카 of 퀸카! 댄스 동아리에 찾아온 민니X슈화👑 가요계 선배 OOO 깜짝 등장까지?! | DOPE CLUB - (G)-IDLE (ENG SUB) (2023-06-02)"
},
{
  link: "https://www.youtube.com/watch?v=VQS73e0AE28",
  category: "MEDIA CONTENTS",
  member: "소연",
  year: "2023",
  thumbnail: "https://i.ytimg.com/vi/VQS73e0AE28/hqdefault.jpg",
  alt: "소연 - [#놀라운토요일] \"와 이거 미쳤다\" 키도 당황한 최고 난이도 전소연 곡ㄷㄷ 놀토 역대 최소 글자인데 하나도 안 들림ㅋㅋㅋ (2023-05-30)",
  title: "[#놀라운토요일] \"와 이거 미쳤다\" 키도 당황한 최고 난이도 전소연 곡ㄷㄷ 놀토 역대 최소 글자인데 하나도 안 들림ㅋㅋㅋ (2023-05-30)"
},
{
  link: "https://www.youtube.com/watch?v=vY8uxSlem3A",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2023",
  thumbnail: "https://i.ytimg.com/vi/vY8uxSlem3A/hqdefault.jpg",
  alt: "아이들 - 갑자기 더워진☀ 날씨를 위해 시원한🍧 간겜 한 사발 #highlight#놀라운토요일 | amazingsaturday EP.265 (2023-05-28)",
  title: "갑자기 더워진☀ 날씨를 위해 시원한🍧 간겜 한 사발 #highlight#놀라운토요일 | amazingsaturday EP.265 (2023-05-28)"
},
{
  link: "https://www.youtube.com/watch?v=tqoPFaEgZJk",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2023",
  thumbnail: "https://i.ytimg.com/vi/tqoPFaEgZJk/hqdefault.jpg",
  alt: "아이들 - 원샷이 4명?! 선장님 등판에 긴장감 최고조 #highlight#놀라운토요일 | amazingsaturday EP.265 (2023-05-28)",
  title: "원샷이 4명?! 선장님 등판에 긴장감 최고조 #highlight#놀라운토요일 | amazingsaturday EP.265 (2023-05-28)"
},
{
  link: "https://www.youtube.com/watch?v=Ca_vDKnMHaQ",
  category: "MEDIA CONTENTS",
  member: "민니,미연,우기",
  year: "2023",
  thumbnail: "https://i.ytimg.com/vi/Ca_vDKnMHaQ/hqdefault.jpg",
  alt: "민니,미연,우기 - [#동네스타K3] ※고막주의※ 퀸카 아이들 미연 X 민니 X 우기👑 이번엔 훌라후프 갈기고 감ㅋㅋㅋ | EP.6 (여자)아이들 (2023-05-27)",
  title: "[#동네스타K3] ※고막주의※ 퀸카 아이들 미연 X 민니 X 우기👑 이번엔 훌라후프 갈기고 감ㅋㅋㅋ | EP.6 (여자)아이들 (2023-05-27)"
},
{
  link: "https://www.youtube.com/watch?v=_kUBP3G9gQg",
  category: "MEDIA CONTENTS",
  member: "소연",
  year: "2023",
  thumbnail: "https://i.ytimg.com/vi/_kUBP3G9gQg/hqdefault.jpg",
  alt: "소연 - [#소년판타지] 소연 프로듀서의 맞춤형 프로듀싱으로 소년들의 실력과 매력이 뿜뿜🤩 '스페이스맨'팀의 무대🎵 | #전소연 #진영 #강승윤 MBC230525방송 (2023-05-26)",
  title: "[#소년판타지] 소연 프로듀서의 맞춤형 프로듀싱으로 소년들의 실력과 매력이 뿜뿜🤩 '스페이스맨'팀의 무대🎵 | #전소연 #진영 #강승윤 MBC230525방송 (2023-05-26)"
},
{
  link: "https://www.youtube.com/watch?v=zh-4Tef5YqE",
  category: "MEDIA CONTENTS",
  member: "소연,민니",
  year: "2023",
  thumbnail: "https://i.ytimg.com/vi/zh-4Tef5YqE/hqdefault.jpg",
  alt: "소연,민니 - [소년판타지 - 방과후 설렘2] 히든카드 민니의 등장?!🌟 프로듀서 전소연의 디렉팅으로 실시간 발전하는 ＜스페이스맨＞팀!, MBC 230525 방송 (2023-05-25)",
  title: "[소년판타지 - 방과후 설렘2] 히든카드 민니의 등장?!🌟 프로듀서 전소연의 디렉팅으로 실시간 발전하는 ＜스페이스맨＞팀!, MBC 230525 방송 (2023-05-25)"
},
{
  link: "https://www.youtube.com/watch?v=lDh4X8mnuQQ",
  category: "MEDIA CONTENTS",
  member: "슈화",
  year: "2023",
  thumbnail: "https://i.ytimg.com/vi/lDh4X8mnuQQ/hqdefault.jpg",
  alt: "슈화 - [ENG/JP] 치명☆도도★ 👸퀸 슈화에게 퀸카 되는 비법을 전수받다! | 은채의 스타일기💫 EP09 | (G)I-DLE (2023-05-25)",
  title: "[ENG/JP] 치명☆도도★ 👸퀸 슈화에게 퀸카 되는 비법을 전수받다! | 은채의 스타일기💫 EP09 | (G)I-DLE (2023-05-25)"
},
{
  link: "https://www.youtube.com/watch?v=iE4pcQuvfWM",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2023",
  thumbnail: "https://i.ytimg.com/vi/iE4pcQuvfWM/hqdefault.jpg",
  alt: "아이들 - (SUB) “맞아요 저 인기 많았어요^^“ 당당히 퀸카였던 과거들 밝히는 아이들 역시 모두가 키쓰 키쓰를 원할만 하네요 / [문명특급 EP.292] (2023-05-25)",
  title: "(SUB) “맞아요 저 인기 많았어요^^“ 당당히 퀸카였던 과거들 밝히는 아이들 역시 모두가 키쓰 키쓰를 원할만 하네요 / [문명특급 EP.292] (2023-05-25)"
},
{
  link: "https://www.youtube.com/watch?v=ugsDF39exeY",
  category: "MEDIA CONTENTS",
  member: "소연",
  year: "2023",
  thumbnail: "https://i.ytimg.com/vi/ugsDF39exeY/hqdefault.jpg",
  alt: "소연 - [SUB] 전소연 너가 퀸카야? 나는? (2023-05-20)",
  title: "[SUB] 전소연 너가 퀸카야? 나는? (2023-05-20)"
},
{
  link: "https://www.youtube.com/watch?v=Eb1Nh1tbjqY",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2023",
  thumbnail: "https://i.ytimg.com/vi/Eb1Nh1tbjqY/hqdefault.jpg",
  alt: "아이들 - [꼬꼬무 79회 요약] ＂내 아들은 어떻게 죽었나요?＂ 37년 간 던진 아버지의 질문에 대한 답은? | 꼬리에 꼬리를 무는 그날 이야기 (SBS방송) (2023-05-18)",
  title: "[꼬꼬무 79회 요약] ＂내 아들은 어떻게 죽었나요?＂ 37년 간 던진 아버지의 질문에 대한 답은? | 꼬리에 꼬리를 무는 그날 이야기 (SBS방송) (2023-05-18)"
},
{
  link: "https://www.youtube.com/watch?v=aF-dmrojCvg",
  category: "MEDIA CONTENTS",
  member: "민니",
  year: "2023",
  thumbnail: "https://i.ytimg.com/vi/aF-dmrojCvg/hqdefault.jpg",
  alt: "민니 - [SUB]⚠️방송 아님 주의⚠️ 뱀뱀과 민니의 프리한 우정 (feat. 쏨땀) [뱀집]Ep. 14(ENG/TH) (2023-05-19)",
  title: "[SUB]⚠️방송 아님 주의⚠️ 뱀뱀과 민니의 프리한 우정 (feat. 쏨땀) [뱀집]Ep. 14(ENG/TH) (2023-05-19)"
},
{
  link: "https://www.youtube.com/watch?v=TWDK_4oij5I",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2023",
  thumbnail: "https://i.ytimg.com/vi/TWDK_4oij5I/hqdefault.jpg",
  alt: "아이들 - (여자)아이들끼리 마피아 게임하면 전쟁 나겠슈(화)~ 진짜도! 가짜도! 연기를 해버리는 연기왕 게임🤯 | 슈퍼TV2 (2023-05-19)",
  title: "(여자)아이들끼리 마피아 게임하면 전쟁 나겠슈(화)~ 진짜도! 가짜도! 연기를 해버리는 연기왕 게임🤯 | 슈퍼TV2 (2023-05-19)"
},
{
  link: "https://www.youtube.com/watch?v=_O1IaaTrz4s",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2023",
  thumbnail: "https://i.ytimg.com/vi/_O1IaaTrz4s/hqdefault.jpg",
  alt: "아이들 - [ENG SUB] 이번편은 선글라스 필수 입니다. (여자)아이들 미모에 눈이 멀 테니까…😎 [용진호건강원 EP.10] (2023-05-18)",
  title: "[ENG SUB] 이번편은 선글라스 필수 입니다. (여자)아이들 미모에 눈이 멀 테니까…😎 [용진호건강원 EP.10] (2023-05-18)"
},
{
  link: "https://www.youtube.com/watch?v=UiO4Ksz7AtU",
  category: "MEDIA CONTENTS",
  member: "우기",
  year: "2023",
  thumbnail: "https://i.ytimg.com/vi/UiO4Ksz7AtU/hqdefault.jpg",
  alt: "우기 - [ENG] 퀸카라고 우기는 아이돌 초대석 | 미선이네👩‍🍳 (2023-05-18)",
  title: "[ENG] 퀸카라고 우기는 아이돌 초대석 | 미선이네👩‍🍳 (2023-05-18)"
},
{
  link: "https://www.youtube.com/watch?v=YarPYSBT4w8",
  category: "MEDIA CONTENTS",
  member: "소연",
  year: "2023",
  thumbnail: "https://i.ytimg.com/vi/YarPYSBT4w8/hqdefault.jpg",
  alt: "소연 - (SUB) 전소연을 이긴 천재 프로듀서의 등장? 아이들 리더 총괄 프로듀서의 자리가 많이 위험해보이네요^^ / [문명특급 EP.291] (2023-05-18)",
  title: "(SUB) 전소연을 이긴 천재 프로듀서의 등장? 아이들 리더 총괄 프로듀서의 자리가 많이 위험해보이네요^^ / [문명특급 EP.291] (2023-05-18)"
},
{
  link: "https://www.youtube.com/watch?v=7uau4tTuJp4",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2023",
  thumbnail: "https://i.ytimg.com/vi/7uau4tTuJp4/hqdefault.jpg",
  alt: "아이들 - 🍯꿀잼 보장🍯 탐스 학교에 강제입학한 (여자)아이들, 1등 학교면 어디든 간다✈️ | [(여자)아이들의 탐스어택 도전기] (2023-05-04)",
  title: "🍯꿀잼 보장🍯 탐스 학교에 강제입학한 (여자)아이들, 1등 학교면 어디든 간다✈️ | [(여자)아이들의 탐스어택 도전기] (2023-05-04)"
},
{
  link: "https://www.youtube.com/watch?v=nkUkDl3_su4",
  category: "MEDIA CONTENTS",
  member: "민니",
  year: "2023",
  thumbnail: "https://i.ytimg.com/vi/nkUkDl3_su4/hqdefault.jpg",
  alt: "민니 - [SUB] 사쿠라X민니X최현우 마법사와 아이돌 스페셜! 마법사 후계자 도전하기 [겁도 없꾸라] EP.23 (2023-05-03)",
  title: "[SUB] 사쿠라X민니X최현우 마법사와 아이돌 스페셜! 마법사 후계자 도전하기 [겁도 없꾸라] EP.23 (2023-05-03)"
},
{
  link: "https://www.youtube.com/watch?v=T0fBFbASjvc",
  category: "MEDIA CONTENTS",
  member: "슈화",
  year: "2023",
  thumbnail: "https://i.ytimg.com/vi/T0fBFbASjvc/hqdefault.jpg",
  alt: "슈화 - (ENG / 한글자막 SUB )巧遇舒華啊啊啊｜愛追星的女友｜如何取綽號 @official_i_dle #舒華 #shuhua #슈화 【EP 123】Dcard尋奇｜Dcard.Video (2023-04-26)",
  title: "(ENG / 한글자막 SUB )巧遇舒華啊啊啊｜愛追星的女友｜如何取綽號 @official_i_dle #舒華 #shuhua #슈화 【EP 123】Dcard尋奇｜Dcard.Video (2023-04-26)"
},
{
  link: "https://www.youtube.com/watch?v=7_yHAR1c0lQ",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2023",
  thumbnail: "https://i.ytimg.com/vi/7_yHAR1c0lQ/hqdefault.jpg",
  alt: "아이들 - 【哈囉!毛小孩】(G)I-DLE舒華「女神氣場」讓偉晉小鹿亂撞！「狗狗才藝秀」讓視網膜意外找到柴犬救星？｜EP11紅白達人秀!｜完整版_20230415 (2023-04-24)",
  title: "【哈囉!毛小孩】(G)I-DLE舒華「女神氣場」讓偉晉小鹿亂撞！「狗狗才藝秀」讓視網膜意外找到柴犬救星？｜EP11紅白達人秀!｜完整版_20230415 (2023-04-24)"
},
{
  link: "https://www.youtube.com/watch?v=oHJWrY6TR9s",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2023",
  thumbnail: "https://i.ytimg.com/vi/oHJWrY6TR9s/hqdefault.jpg",
  alt: "아이들 - EP1下 陈伟霆宋雨琦深夜聊天坦露内心  张颜齐魏大勋陷发际线困扰 杨迪魏大勋四川话争夺露营床位 | #一起露营吧S2 FULL | CAMPING LIFE II | iQIYI综艺 (2023-04-21)",
  title: "EP1下 陈伟霆宋雨琦深夜聊天坦露内心  张颜齐魏大勋陷发际线困扰 杨迪魏大勋四川话争夺露营床位 | #一起露营吧S2 FULL | CAMPING LIFE II | iQIYI综艺 (2023-04-21)"
},
{
  link: "https://www.youtube.com/watch?v=TV30MhKsNNw",
  category: "MEDIA CONTENTS",
  member: "소연",
  year: "2023",
  thumbnail: "https://i.ytimg.com/vi/TV30MhKsNNw/hqdefault.jpg",
  alt: "소연 - [#소년판타지] 전소연쌤의 미소를 받은 3등급 실력자의 등장?!💫 특별 구제를 받으려는 3등급 소년들의 재도전👊 | #전소연 #우영 #최강창민 MBC230406방송 (2023-04-07)",
  title: "[#소년판타지] 전소연쌤의 미소를 받은 3등급 실력자의 등장?!💫 특별 구제를 받으려는 3등급 소년들의 재도전👊 | #전소연 #우영 #최강창민 MBC230406방송 (2023-04-07)"
},
{
  link: "https://www.youtube.com/watch?v=crdlc2AfTgs",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2023",
  thumbnail: "https://i.ytimg.com/vi/crdlc2AfTgs/hqdefault.jpg",
  alt: "아이들 - 葉舒華常喝斷片要朋友抬！自爆團內吵架是日常@ebcstars (2023-04-04)",
  title: "葉舒華常喝斷片要朋友抬！自爆團內吵架是日常@ebcstars (2023-04-04)"
},
{
  link: "https://www.youtube.com/watch?v=iVu6WqpZDUk",
  category: "MEDIA CONTENTS",
  member: "소연",
  year: "2023",
  thumbnail: "https://i.ytimg.com/vi/iVu6WqpZDUk/hqdefault.jpg",
  alt: "소연 - [#소년판타지] 무서운데 멋있어,, 돌아온 소연쌤의 영혼 탈탈 터는 돌직구 심사🔥| #전소연 #우영 #최강창민 MBC230330방송 (2023-03-30)",
  title: "[#소년판타지] 무서운데 멋있어,, 돌아온 소연쌤의 영혼 탈탈 터는 돌직구 심사🔥| #전소연 #우영 #최강창민 MBC230330방송 (2023-03-30)"
},
{
  link: "https://www.youtube.com/watch?v=oC2eDcgMEwI",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2023",
  thumbnail: "https://i.ytimg.com/vi/oC2eDcgMEwI/hqdefault.jpg",
  alt: "아이들 - [EN/JP] [Mnet PRIME SHOW] \"나는 다시 한국 갈 수 있는 건가...?\" (여자)아이들의 진솔한 그때의 이야기 | Mnet 230329 방송 (2023-03-29)",
  title: "[EN/JP] [Mnet PRIME SHOW] \"나는 다시 한국 갈 수 있는 건가...?\" (여자)아이들의 진솔한 그때의 이야기 | Mnet 230329 방송 (2023-03-29)"
},
{
  link: "https://www.youtube.com/watch?v=c9bobxQaCLU",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2023",
  thumbnail: "https://i.ytimg.com/vi/c9bobxQaCLU/hqdefault.jpg",
  alt: "아이들 - [Mnet PRIME SHOW] 강렬한 인트로👑 ♬ Nxde (theatre Ver.) - (G)I-DLE | Mnet 230329 방송 (2023-03-29)",
  title: "[Mnet PRIME SHOW] 강렬한 인트로👑 ♬ Nxde (theatre Ver.) - (G)I-DLE | Mnet 230329 방송 (2023-03-29)"
},
{
  link: "https://www.youtube.com/watch?v=KkREDN0cg7U",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2023",
  thumbnail: "https://i.ytimg.com/vi/KkREDN0cg7U/hqdefault.jpg",
  alt: "아이들 - [ENG] [Mnet PRIME SHOW/선공개] 천재? \"맞습니다!\" 자체 프로듀싱 아이돌 (여자)아이들 (2023-03-29)",
  title: "[ENG] [Mnet PRIME SHOW/선공개] 천재? \"맞습니다!\" 자체 프로듀싱 아이돌 (여자)아이들 (2023-03-29)"
},
{
  link: "https://www.youtube.com/watch?v=xSneOW-SGu0",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2023",
  thumbnail: "https://i.ytimg.com/vi/xSneOW-SGu0/hqdefault.jpg",
  alt: "아이들 - [ENG] [Mnet PRIME SHOW/선공개] 우당탕탕 (여자)아이들 팀 MBTI 짓기 (2023-03-28)",
  title: "[ENG] [Mnet PRIME SHOW/선공개] 우당탕탕 (여자)아이들 팀 MBTI 짓기 (2023-03-28)"
},
{
  link: "https://www.youtube.com/watch?v=GuysSbpJcmk",
  category: "MEDIA CONTENTS",
  member: "미연",
  year: "2023",
  thumbnail: "https://i.ytimg.com/vi/GuysSbpJcmk/hqdefault.jpg",
  alt: "미연 - [SUB] 🔥단독공개🔥 (여자)아이들 미연 : 트월킹❌은퇴 선언❌ “나한테 트월킹 시키지마 아무도!!” | EP.05 | 조현아의 목요일 밤 | (여자)아이들 미연 조현아 (2023-03-02)",
  title: "[SUB] 🔥단독공개🔥 (여자)아이들 미연 : 트월킹❌은퇴 선언❌ “나한테 트월킹 시키지마 아무도!!” | EP.05 | 조현아의 목요일 밤 | (여자)아이들 미연 조현아 (2023-03-02)"
},
{
  link: "https://www.youtube.com/watch?v=Zbr8-UNgwM8",
  category: "MEDIA CONTENTS",
  member: "민니,우기,슈화",
  year: "2023",
  thumbnail: "https://i.ytimg.com/vi/Zbr8-UNgwM8/hqdefault.jpg",
  alt: "민니,우기,슈화 - [#놀라운토요일] 송우기 예슈화 김민니 한국어 폼 미쳤다🤟 아이들(G)I-DLE 멤버들의 한국어 패치된 입담ㅋㅋㅋ | #샾잉 (2023-01-02)",
  title: "[#놀라운토요일] 송우기 예슈화 김민니 한국어 폼 미쳤다🤟 아이들(G)I-DLE 멤버들의 한국어 패치된 입담ㅋㅋㅋ | #샾잉 (2023-01-02)"
},
{
  link: "https://www.youtube.com/watch?v=mR1-u97ZrQE",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2023",
  thumbnail: "https://i.ytimg.com/vi/mR1-u97ZrQE/hqdefault.jpg",
  alt: "아이들 - [#갓구운클립] 혹시 여권 색깔이❓ 사투리부터 뉘앙스까지 한국인 패치 완벽한 아이들ㅋㅋㅋ | #놀라운토요일 (2023-01-02)",
  title: "[#갓구운클립] 혹시 여권 색깔이❓ 사투리부터 뉘앙스까지 한국인 패치 완벽한 아이들ㅋㅋㅋ | #놀라운토요일 (2023-01-02)"
},
{
  link: "https://www.youtube.com/watch?v=mk_zgKyzEG0",
  category: "MEDIA CONTENTS",
  member: "소연",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/mk_zgKyzEG0/hqdefault.jpg",
  alt: "소연 - [EN/JP][Teaser] 전소연이 보는 방과후 설렘 시즌2 참가자 [MBC 소년 판타지] (2022-12-30)",
  title: "[EN/JP][Teaser] 전소연이 보는 방과후 설렘 시즌2 참가자 [MBC 소년 판타지] (2022-12-30)"
},
{
  link: "https://www.youtube.com/watch?v=o0MEdSGP440",
  category: "MEDIA CONTENTS",
  member: "소연",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/o0MEdSGP440/hqdefault.jpg",
  alt: "소연 - [방과후 설렘2 - 소년판타지 Teaser] 전소연이 보는 방과후설렘 시즌2 참가자 [MBC 소년 판타지] (2022-12-30)",
  title: "[방과후 설렘2 - 소년판타지 Teaser] 전소연이 보는 방과후설렘 시즌2 참가자 [MBC 소년 판타지] (2022-12-30)"
},
{
  link: "https://www.youtube.com/watch?v=HVxmLzV50JE",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/HVxmLzV50JE/hqdefault.jpg",
  alt: "아이들 - (ENG) '비하인드'라 쓰고 '템플스테이 2탄'이라 읽는다 [건강을 지켜츄] (2022-12-28)",
  title: "(ENG) '비하인드'라 쓰고 '템플스테이 2탄'이라 읽는다 [건강을 지켜츄] (2022-12-28)"
},
{
  link: "https://www.youtube.com/watch?v=KyP1gaUQueo",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/KyP1gaUQueo/hqdefault.jpg",
  alt: "아이들 - [#Fallin서울] 24시간 잠들지 않는 도시, 서울 나이트 투어 (북악팔각정) EP.5 (2022-12-27)",
  title: "[#Fallin서울] 24시간 잠들지 않는 도시, 서울 나이트 투어 (북악팔각정) EP.5 (2022-12-27)"
},
{
  link: "https://www.youtube.com/watch?v=Koyd1tQSZ_g",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/Koyd1tQSZ_g/hqdefault.jpg",
  alt: "아이들 - [#Fallin서울] 가장 한국스럽고 전통적인 오리지널 서울 여행 (광화문, 서순라길) EP.4 (2022-12-27)",
  title: "[#Fallin서울] 가장 한국스럽고 전통적인 오리지널 서울 여행 (광화문, 서순라길) EP.4 (2022-12-27)"
},
{
  link: "https://www.youtube.com/watch?v=SqUfKNf26ts",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/SqUfKNf26ts/hqdefault.jpg",
  alt: "아이들 - [#Fallin서울] MZ세대가 사랑하는 서울의 MZ PLACE (경의선숲길) EP.3 (2022-12-27)",
  title: "[#Fallin서울] MZ세대가 사랑하는 서울의 MZ PLACE (경의선숲길) EP.3 (2022-12-27)"
},

// 🔽 새로 불러온 50개 항목
{
  link: "https://www.youtube.com/watch?v=J8fBwQIAWcM",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/J8fBwQIAWcM/hqdefault.jpg",
  alt: "아이들 - [#Fallin서울] 시대의 흐름을 그대로 간직한 서울 용산 EP.2 (2022-12-27)",
  title: "[#Fallin서울] 시대의 흐름을 그대로 간직한 서울 용산 EP.2 (2022-12-27)"
},
{
  link: "https://www.youtube.com/watch?v=fEpi6TKbS5o",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/fEpi6TKbS5o/hqdefault.jpg",
  alt: "아이들 - [#Fallin서울] 전 세계가 주목! K - 패션&뷰티의 모든 것 (DDP) EP.1 (2022-12-27)",
  title: "[#Fallin서울] 전 세계가 주목! K - 패션&뷰티의 모든 것 (DDP) EP.1 (2022-12-27)"
},
{
  link: "https://www.youtube.com/watch?v=m3F4bcvXo5U",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/m3F4bcvXo5U/hqdefault.jpg",
  alt: "아이들 - (ENG) 시끄러움 주의🤫 절에서 절애도(?) 되나요? 오디오 감독님께 joy를 표합니다🙇 [정신건강을 지켜츄] (2022-12-16)",
  title: "(ENG) 시끄러움 주의🤫 절에서 절애도(?) 되나요? 오디오 감독님께 joy를 표합니다🙇 [정신건강을 지켜츄] (2022-12-16)"
},
{
  link: "https://www.youtube.com/watch?v=9tcWB-k72rQ",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/9tcWB-k72rQ/hqdefault.jpg",
  alt: "아이들 - [이슬라이브2] (여자)아이들 (G)IDLE - Nxde, TOMBOYㅣ딩고뮤직ㅣDingo Music (2022-11-24)",
  title: "[이슬라이브2] (여자)아이들 (G)IDLE - Nxde, TOMBOYㅣ딩고뮤직ㅣDingo Music (2022-11-24)"
},
{
  link: "https://www.youtube.com/watch?v=WBPkMg20ESs",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/WBPkMg20ESs/hqdefault.jpg",
  alt: "아이들 - ENG) [#코노돌🎤] EP.17 아이들 코노돌이 💥쩨쩨쩨쩨〰일 잘나가💥 (미방분 공개)(Eng Sub) (2022-11-24)",
  title: "ENG) [#코노돌🎤] EP.17 아이들 코노돌이 💥쩨쩨쩨쩨〰일 잘나가💥 (미방분 공개)(Eng Sub) (2022-11-24)"
},
{
  link: "https://www.youtube.com/watch?v=f6abgJUSwQ0",
  category: "MEDIA CONTENTS",
  member: "우기",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/f6abgJUSwQ0/hqdefault.jpg",
  alt: "우기 - [#놀면뭐하니?] 미주와 사고방식 똑 닮은 귀요미 찐친 우기💕 근데 재석의 찐친은... 일단 찐친 맞나요?ㅣ#우기 #미주#유재석 MBC221112방송 (2022-11-13)",
  title: "[#놀면뭐하니?] 미주와 사고방식 똑 닮은 귀요미 찐친 우기💕 근데 재석의 찐친은... 일단 찐친 맞나요?ㅣ#우기 #미주#유재석 MBC221112방송 (2022-11-13)"
},
{
  link: "https://www.youtube.com/watch?v=kuYPHEuxx0o",
  category: "MEDIA CONTENTS",
  member: "소연",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/kuYPHEuxx0o/hqdefault.jpg",
  alt: "소연 - [티엠아] 믿고 듣는 천재 작곡돌 전소연 I-DLE 레전드곡 탄생 비하인드✨ 소연이는 다 계획이 있구나?ㅣ아는형님ㅣJTBC 221029 방송 (2022-11-04)",
  title: "[티엠아] 믿고 듣는 천재 작곡돌 전소연 I-DLE 레전드곡 탄생 비하인드✨ 소연이는 다 계획이 있구나?ㅣ아는형님ㅣJTBC 221029 방송 (2022-11-04)"
},
{
  link: "https://www.youtube.com/watch?v=bc0uFY5LySk",
  category: "MEDIA CONTENTS",
  member: "소연",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/bc0uFY5LySk/hqdefault.jpg",
  alt: "소연 - [아는형님] TOMBOY 때문에 적자 기록했다고요..? ★하지만 갓쏘는 해냅니다★ 저작권 부자 전소연 히트곡 비하인드｜핫클립｜JTBC 221029 방송 외 (2022-10-29)",
  title: "[아는형님] TOMBOY 때문에 적자 기록했다고요..? ★하지만 갓쏘는 해냅니다★ 저작권 부자 전소연 히트곡 비하인드｜핫클립｜JTBC 221029 방송 외 (2022-10-29)"
},
{
  link: "https://www.youtube.com/watch?v=Be9khAA9YHU",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/Be9khAA9YHU/hqdefault.jpg",
  alt: "아이들 - [아는형님] (여자)아이들은 Live도 화끈하게 인증합니다🔥 히트곡 메들리부터 신곡 Nxde까지 중독적이따따랏따라~♬｜핫클립｜JTBC 221029 방송 외 (2022-10-29)",
  title: "[아는형님] (여자)아이들은 Live도 화끈하게 인증합니다🔥 히트곡 메들리부터 신곡 Nxde까지 중독적이따따랏따라~♬｜핫클립｜JTBC 221029 방송 외 (2022-10-29)"
},
{
  link: "https://www.youtube.com/watch?v=RURhqGt8NbM",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/RURhqGt8NbM/hqdefault.jpg",
  alt: "아이들 - [ENG][아형✪하이라이트] 끝없는 매력 발산٩(๑˃̵ᴗ˂̵)و (여자)아이들 게임·퍼포먼스 모음.zip | 아는 형님 | JTBC 221029 방송 (2022-10-29)",
  title: "[ENG][아형✪하이라이트] 끝없는 매력 발산٩(๑˃̵ᴗ˂̵)و (여자)아이들 게임·퍼포먼스 모음.zip | 아는 형님 | JTBC 221029 방송 (2022-10-29)"
},
{
  link: "https://www.youtube.com/watch?v=sWwHWK7OYJ8",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/sWwHWK7OYJ8/hqdefault.jpg",
  alt: "아이들 - [ENG][아형✪하이라이트] (여자)아이들 완전체 떴다↗ 멋짐 폭발♥ 5인 5색 토크 모음.zip | 아는 형님 | JTBC 221029 방송 (2022-10-29)",
  title: "[ENG][아형✪하이라이트] (여자)아이들 완전체 떴다↗ 멋짐 폭발♥ 5인 5색 토크 모음.zip | 아는 형님 | JTBC 221029 방송 (2022-10-29)"
},
{
  link: "https://www.youtube.com/watch?v=inwAM4-ZfRw",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/inwAM4-ZfRw/hqdefault.jpg",
  alt: "아이들 - [#동네스타K2] 1위 가수 (여자)아이들 냅다 트월킹 갈기고 감ㅋㅋㅋㅋㅋ 1위 가수는 역시 다르다~ (ft. nxde 라이브) | EP.9 (2022-10-29)",
  title: "[#동네스타K2] 1위 가수 (여자)아이들 냅다 트월킹 갈기고 감ㅋㅋㅋㅋㅋ 1위 가수는 역시 다르다~ (ft. nxde 라이브) | EP.9 (2022-10-29)"
},
{
  link: "https://www.youtube.com/watch?v=0HcLZuQmM8A",
  category: "MEDIA CONTENTS",
  member: "소연",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/0HcLZuQmM8A/hqdefault.jpg",
  alt: "소연 - 【분량체크】 TOMBOY+Nxde까지 대박 난 (여자)아이들 선장님 전소연👑 톰보이 전성기 때 라스 나와서 작곡 천재 인증 | #라디오스타 | TVPP | MBC 220504 방송 (2022-10-28)",
  title: "【분량체크】 TOMBOY+Nxde까지 대박 난 (여자)아이들 선장님 전소연👑 톰보이 전성기 때 라스 나와서 작곡 천재 인증 | #라디오스타 | TVPP | MBC 220504 방송 (2022-10-28)"
},
{
  link: "https://www.youtube.com/watch?v=_FJqiferRkE",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/_FJqiferRkE/hqdefault.jpg",
  alt: "아이들 - (여자)아이들이 수능 앞두고 인생네컷 찍으러 왔다 | (G)I-DLE_Nxde | 아이들 | 네컷라이브 | 4Cut Live (2022-10-24)",
  title: "(여자)아이들이 수능 앞두고 인생네컷 찍으러 왔다 | (G)I-DLE_Nxde | 아이들 | 네컷라이브 | 4Cut Live (2022-10-24)"
},
{
  link: "https://www.youtube.com/watch?v=ZWYSXgY-RdQ",
  category: "MEDIA CONTENTS",
  member: "슈화",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/ZWYSXgY-RdQ/hqdefault.jpg",
  alt: "슈화 - [ENG SUB] 탈색까지 한 슈화가 원하는 단 한 가지?! ☝👀 | [아이돌 인간극장] (2022-10-22)",
  title: "[ENG SUB] 탈색까지 한 슈화가 원하는 단 한 가지?! ☝👀 | [아이돌 인간극장] (2022-10-22)"
},
{
  link: "https://www.youtube.com/watch?v=8hBykAhXINc",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/8hBykAhXINc/hqdefault.jpg",
  alt: "아이들 - [미방분 후공개] (여자)아이들 이번 신곡 미쳤는데요 ❤수록곡은 더 미침💜  수록곡 맛집 아이들의 한소절 TIME🎶 #술트리트파이터2 (2022-10-21)",
  title: "[미방분 후공개] (여자)아이들 이번 신곡 미쳤는데요 ❤수록곡은 더 미침💜  수록곡 맛집 아이들의 한소절 TIME🎶 #술트리트파이터2 (2022-10-21)"
},
{
  link: "https://www.youtube.com/watch?v=XI4zvfwucfc",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/XI4zvfwucfc/hqdefault.jpg",
  alt: "아이들 - [EN/ID][EP.18] 탈유교찐친그룹 ♨(여자)아이들♨ 서로 씹고 뜯고 맛보고 즐기는 이런 여돌 처음이야ㅎㄷㄷ #술트리트파이터2 18회 (2022-10-20)",
  title: "[EN/ID][EP.18] 탈유교찐친그룹 ♨(여자)아이들♨ 서로 씹고 뜯고 맛보고 즐기는 이런 여돌 처음이야ㅎㄷㄷ #술트리트파이터2 18회 (2022-10-20)"
},
{
  link: "https://www.youtube.com/watch?v=zxxb-A9zgGA",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/zxxb-A9zgGA/hqdefault.jpg",
  alt: "아이들 - [#티전드] Nxde로 컴백한 컨셉 천재 (여자)아이들의 노래 도전부터 출연까지 다 모았다📁 매력으로 놀토를 찢어따따랏따라~💗 | #놀라운토요일 (2022-10-20)",
  title: "[#티전드] Nxde로 컴백한 컨셉 천재 (여자)아이들의 노래 도전부터 출연까지 다 모았다📁 매력으로 놀토를 찢어따따랏따라~💗 | #놀라운토요일 (2022-10-20)"
},
{
  link: "https://www.youtube.com/watch?v=haA57MIbnh0",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/haA57MIbnh0/hqdefault.jpg",
  alt: "아이들 - [EN/ID][EP.17] 또 제 발로 술트파에 찾아온 여돌! (여자)아이들과 하이볼 시~원하게 들이켰습니다 #술트리트파이터2 17회 (2022-10-13)",
  title: "[EN/ID][EP.17] 또 제 발로 술트파에 찾아온 여돌! (여자)아이들과 하이볼 시~원하게 들이켰습니다 #술트리트파이터2 17회 (2022-10-13)"
},
{
  link: "https://www.youtube.com/watch?v=TUeWhU9Rfeo",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/TUeWhU9Rfeo/hqdefault.jpg",
  alt: "아이들 - [귀찮아서 풀영상] 도시어부4 6회_여기가 바로 도시어부입니다 (2022-09-30)",
  title: "[귀찮아서 풀영상] 도시어부4 6회_여기가 바로 도시어부입니다 (2022-09-30)"
},
{
  link: "https://www.youtube.com/watch?v=FqYq5YXF_40",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/FqYq5YXF_40/hqdefault.jpg",
  alt: "아이들 - [비하인드 EP.4] 뉴페스타에 찾아온 (여자)아이들((G)I-DLE)이 슬러시를 잔뜩 먹고 간 이유｜뉴페스타 newfesta (2022-07-14)",
  title: "[비하인드 EP.4] 뉴페스타에 찾아온 (여자)아이들((G)I-DLE)이 슬러시를 잔뜩 먹고 간 이유｜뉴페스타 newfesta (2022-07-14)"
},
{
  link: "https://www.youtube.com/watch?v=NMwNmT0Hfm8",
  category: "MEDIA CONTENTS",
  member: "미연",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/NMwNmT0Hfm8/hqdefault.jpg",
  alt: "미연 - 휑-한 부분에 털을 심어보았습니다. | 털.털.한 미연 | 풍성한 세형 | 부분가발 | M자탈모 | 양세형 | 미연 | 『좋광고2』 Ep.1 부분가발 (2022-07-06)",
  title: "휑-한 부분에 털을 심어보았습니다. | 털.털.한 미연 | 풍성한 세형 | 부분가발 | M자탈모 | 양세형 | 미연 | 『좋광고2』 Ep.1 부분가발 (2022-07-06)"
},
{
  link: "https://www.youtube.com/watch?v=M2jk4pVrRNY",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/M2jk4pVrRNY/hqdefault.jpg",
  alt: "아이들 - (ENG) 형님 🤟(G)I-DLE (아이들) 월드투어🤟 추가 홍보 해버릴까요?  [만나달라] Ep.4 (2022-06-28)",
  title: "(ENG) 형님 🤟(G)I-DLE (아이들) 월드투어🤟 추가 홍보 해버릴까요?  [만나달라] Ep.4 (2022-06-28)"
},
{
  link: "https://www.youtube.com/watch?v=iuUqJBYESfo",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/iuUqJBYESfo/hqdefault.jpg",
  alt: "아이들 - (ENG) 네버버 집쭝🔥 저슽미아이들 그잡채 홍보영상 나왔다❤️💜 [만나달라] Ep.3 (2022-06-21)",
  title: "(ENG) 네버버 집쭝🔥 저슽미아이들 그잡채 홍보영상 나왔다❤️💜 [만나달라] Ep.3 (2022-06-21)"
},
{
  link: "https://www.youtube.com/watch?v=HpNjoR3baxk",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/HpNjoR3baxk/hqdefault.jpg",
  alt: "아이들 - [🎤EP 2] KOK JAGO BANGET SIH?! (G)I-DLE HEBOH MAIN GAME PAKE MAKANAN INDONESIA🇮🇩ㅣMANTUL ENTERTAINMENT (2022-06-05)",
  title: "[🎤EP 2] KOK JAGO BANGET SIH?! (G)I-DLE HEBOH MAIN GAME PAKE MAKANAN INDONESIA🇮🇩ㅣMANTUL ENTERTAINMENT (2022-06-05)"
},
{
  link: "https://www.youtube.com/watch?v=J5hBQOLD1l0",
  category: "MEDIA CONTENTS",
  member: "소연",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/J5hBQOLD1l0/hqdefault.jpg",
  alt: "소연 - [풀클립②] 강승윤 기타 연주에 전소연 즉흥 노래°˖✧˖° 오늘은 여기서 잠들겠습니다… 〈아티스트 웨이(ARTIST WAY) 3회〉 | JTBC 220530 방송 (2022-05-31)",
  title: "[풀클립②] 강승윤 기타 연주에 전소연 즉흥 노래°˖✧˖° 오늘은 여기서 잠들겠습니다… 〈아티스트 웨이(ARTIST WAY) 3회〉 | JTBC 220530 방송 (2022-05-31)"
},
{
  link: "https://www.youtube.com/watch?v=BYmgZkqpaYQ",
  category: "MEDIA CONTENTS",
  member: "소연",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/BYmgZkqpaYQ/hqdefault.jpg",
  alt: "소연 - [풀클립①] 위너와 마지막 여행을 즐길 역대급 영감 메이트 🤘(여자)아이들 소연🤘 〈아티스트 웨이(ARTIST WAY) 3회〉 | JTBC 220530 방송 (2022-05-31)",
  title: "[풀클립①] 위너와 마지막 여행을 즐길 역대급 영감 메이트 🤘(여자)아이들 소연🤘 〈아티스트 웨이(ARTIST WAY) 3회〉 | JTBC 220530 방송 (2022-05-31)"
},
{
  link: "https://www.youtube.com/watch?v=fD556Mt9RDw",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/fD556Mt9RDw/hqdefault.jpg",
  alt: "아이들 - [🎤EP 1] MAKIN DEKET SAMA (G)I-DLE 💜ㅣMANTUL ENTERTAINMENT (2022-05-29)",
  title: "[🎤EP 1] MAKIN DEKET SAMA (G)I-DLE 💜ㅣMANTUL ENTERTAINMENT (2022-05-29)"
},
{
  link: "https://www.youtube.com/watch?v=uFyYLtP5gh4",
  category: "MEDIA CONTENTS",
  member: "우기,슈화",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/uFyYLtP5gh4/hqdefault.jpg",
  alt: "우기,슈화 - [신속배달] (여자)아이들 막내즈가 주간아에 왔어요❤ 슈화&우기 주간아 꿀잼 모먼트 모음❗ l #주간아이돌 l EP.563 (2022-05-26)",
  title: "[신속배달] (여자)아이들 막내즈가 주간아에 왔어요❤ 슈화&우기 주간아 꿀잼 모먼트 모음❗ l #주간아이돌 l EP.563 (2022-05-26)"
},
{
  link: "https://www.youtube.com/watch?v=TaXQRksP2Bs",
  category: "MEDIA CONTENTS",
  member: "우기,슈화",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/TaXQRksP2Bs/hqdefault.jpg",
  alt: "우기,슈화 - [ENG] [TMI NEWS SHOW] (여자)아이들의 막내온탑( •̀ ω •́ )✧ 슈화&우기의 TMI MOMENTS#TMINEWSSHOW I EP.14 (2022-05-26)",
  title: "[ENG] [TMI NEWS SHOW] (여자)아이들의 막내온탑( •̀ ω •́ )✧ 슈화&우기의 TMI MOMENTS#TMINEWSSHOW I EP.14 (2022-05-26)"
},
{
  link: "https://www.youtube.com/watch?v=jfOM5eJJ21M",
  category: "MEDIA CONTENTS",
  member: "우기,슈화",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/jfOM5eJJ21M/hqdefault.jpg",
  alt: "우기,슈화 - [TMI NEWS SHOW/14회 풀버전] TMI 챌린지 강재준& (여자)아이들 슈화&우기 풀버전#TMINEWSSHOW I EP.14 (2022-05-26)",
  title: "[TMI NEWS SHOW/14회 풀버전] TMI 챌린지 강재준& (여자)아이들 슈화&우기 풀버전#TMINEWSSHOW I EP.14 (2022-05-26)"
},
{
  link: "https://www.youtube.com/watch?v=sLQGNQsTBqo",
  category: "MEDIA CONTENTS",
  member: "미연",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/sLQGNQsTBqo/hqdefault.jpg",
  alt: "미연 - 존재가 Princess 어쩌면 공주병👑 미연 공주님의 동스케 행차! 조나단과 동성동본? | 동네스타K EP.10 (2022-05-21)",
  title: "존재가 Princess 어쩌면 공주병👑 미연 공주님의 동스케 행차! 조나단과 동성동본? | 동네스타K EP.10 (2022-05-21)"
},
{
  link: "https://www.youtube.com/watch?v=AoXLBKrnC2g",
  category: "MEDIA CONTENTS",
  member: "소연",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/AoXLBKrnC2g/hqdefault.jpg",
  alt: "소연 - [나 혼자 산다]😎음악은 뚝딱뚝딱🎵음식은 그냥 뚝딱이🤢우당탕탕 소연이네 아지트🎙| #전소연 MBC220513방송 (2022-05-18)",
  title: "[나 혼자 산다]😎음악은 뚝딱뚝딱🎵음식은 그냥 뚝딱이🤢우당탕탕 소연이네 아지트🎙| #전소연 MBC220513방송 (2022-05-18)"
},
{
  link: "https://www.youtube.com/watch?v=UlLGcDL5x7g",
  category: "MEDIA CONTENTS",
  member: "소연",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/UlLGcDL5x7g/hqdefault.jpg",
  alt: "소연 - Meenoi's Yorizori Season3 | EP.3 SOYEON (2022-05-17)",
  title: "Meenoi's Yorizori Season3 | EP.3 SOYEON (2022-05-17)"
},
{
  link: "https://www.youtube.com/watch?v=a7LKP4FlTFI",
  category: "MEDIA CONTENTS",
  member: "소연",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/a7LKP4FlTFI/hqdefault.jpg",
  alt: "소연 - [나 혼자 산다]🐌느리다 느려 소연 사회🚶‍♀️느리게 바쁜 프로듀서 전소연의 공백기 일상🧎‍♀️| #전소연 MBC220513방송 (2022-05-17)",
  title: "[나 혼자 산다]🐌느리다 느려 소연 사회🚶‍♀️느리게 바쁜 프로듀서 전소연의 공백기 일상🧎‍♀️| #전소연 MBC220513방송 (2022-05-17)"
},
{
  link: "https://www.youtube.com/watch?v=VKQYN7cv5ZQ",
  category: "MEDIA CONTENTS",
  member: "소연",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/VKQYN7cv5ZQ/hqdefault.jpg",
  alt: "소연 - [나 혼자 산다]🧓소를... 아십니까?♨매운맛보다 매력적인💛노랑노랑 하우스의 소연을 아십니까?💛| #전소연 MBC220513방송 (2022-05-16)",
  title: "[나 혼자 산다]🧓소를... 아십니까?♨매운맛보다 매력적인💛노랑노랑 하우스의 소연을 아십니까?💛| #전소연 MBC220513방송 (2022-05-16)"
},
{
  link: "https://www.youtube.com/watch?v=ZWEuXZUeitk",
  category: "MEDIA CONTENTS",
  member: "민니,미연,슈화",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/ZWEuXZUeitk/hqdefault.jpg",
  alt: "민니,미연,슈화 - [Eng 아이☁️클라우드] 카일로 X 누나들💜초코에 빠진 아이들(IDLE)🍫 미연 민니 슈화ㅣ순둥이 베이비｜Adorable Babyㅣ아이돌ㅣ아이들ㅣ네버랜드 (2022-05-13)",
  title: "[Eng 아이☁️클라우드] 카일로 X 누나들💜초코에 빠진 아이들(IDLE)🍫 미연 민니 슈화ㅣ순둥이 베이비｜Adorable Babyㅣ아이돌ㅣ아이들ㅣ네버랜드 (2022-05-13)"
},
{
  link: "https://www.youtube.com/watch?v=fpktP9ynLKk",
  category: "MEDIA CONTENTS",
  member: "우기,슈화",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/fpktP9ynLKk/hqdefault.jpg",
  alt: "우기,슈화 - 아이들과 욕, 트림, 삭발, 대파, 톰보이, 블랙맘바 다하는 인터뷰 | 하승진의 회초리 | (G)I-DLE | 우기 슈화 | Ha's Whiplash (2022-05-12)",
  title: "아이들과 욕, 트림, 삭발, 대파, 톰보이, 블랙맘바 다하는 인터뷰 | 하승진의 회초리 | (G)I-DLE | 우기 슈화 | Ha's Whiplash (2022-05-12)"
},
{
  link: "https://www.youtube.com/watch?v=sbFnwvixOgY",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/sbFnwvixOgY/hqdefault.jpg",
  alt: "아이들 - [주간아이돌] 기습 라이브 with PENTAGON, (G)I-DLE, GNCD, DRIPPIN (2022-05-09)",
  title: "[주간아이돌] 기습 라이브 with PENTAGON, (G)I-DLE, GNCD, DRIPPIN (2022-05-09)"
},
{
  link: "https://www.youtube.com/watch?v=Hx1CYhERG-I",
  category: "MEDIA CONTENTS",
  member: "민니,미연,슈화",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/Hx1CYhERG-I/hqdefault.jpg",
  alt: "민니,미연,슈화 - [Eng 아이☁️클라우드]💛카일로 X IDLE💜미연 민니 슈화의 NEVERLAND Drive🚗ㅣ순둥이 베이비｜Adorable Babyㅣ아이돌ㅣ아이들ㅣ네버랜드 (2022-05-06)",
  title: "[Eng 아이☁️클라우드]💛카일로 X IDLE💜미연 민니 슈화의 NEVERLAND Drive🚗ㅣ순둥이 베이비｜Adorable Babyㅣ아이돌ㅣ아이들ㅣ네버랜드 (2022-05-06)"
},
{
  link: "https://www.youtube.com/watch?v=YiaqjpIv_HM",
  category: "MEDIA CONTENTS",
  member: "소연",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/YiaqjpIv_HM/hqdefault.jpg",
  alt: "소연 - [라디오스타] 디스랩으로 라스 MC들 기강 잡고(?) 간 천재돌 전소연ㅣ#전소연 #(여자)아이들 MBC220504방송 (2022-05-06)",
  title: "[라디오스타] 디스랩으로 라스 MC들 기강 잡고(?) 간 천재돌 전소연ㅣ#전소연 #(여자)아이들 MBC220504방송 (2022-05-06)"
},
{
  link: "https://www.youtube.com/watch?v=Og1n6hkf05Q",
  category: "MEDIA CONTENTS",
  member: "미연,우기",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/Og1n6hkf05Q/hqdefault.jpg",
  alt: "미연,우기 - (ENG) 봄 사랑... 명수 말고 🌸미연&우기와 달달~~하게 한곡 뽑았습니다🌸 | 할명수 ep.77 (2022-05-06)",
  title: "(ENG) 봄 사랑... 명수 말고 🌸미연&우기와 달달~~하게 한곡 뽑았습니다🌸 | 할명수 ep.77 (2022-05-06)"
},
{
  link: "https://www.youtube.com/watch?v=lyLNiiU-jLk",
  category: "MEDIA CONTENTS",
  member: "미연",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/lyLNiiU-jLk/hqdefault.jpg",
  alt: "미연 - 프로 혼밥요리사로 돌아온 미연!👩‍🍳 면이표 마E면 + MY스무디 쿡방 | 혼밥상 | IDOL COOKBANG | MIYEON (2022-05-04)",
  title: "프로 혼밥요리사로 돌아온 미연!👩‍🍳 면이표 마E면 + MY스무디 쿡방 | 혼밥상 | IDOL COOKBANG | MIYEON (2022-05-04)"
},
{
  link: "https://www.youtube.com/watch?v=JX1MDOEYfMI",
  category: "MEDIA CONTENTS",
  member: "미연",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/JX1MDOEYfMI/hqdefault.jpg",
  alt: "미연 - Full.ver|✨첫 솔로데뷔✨미연공주님 행차하십니다👸 ㅣSTATION Zㅣ미연의 언박싱ㅣKBS 220430 방송 (2022-04-29)",
  title: "Full.ver|✨첫 솔로데뷔✨미연공주님 행차하십니다👸 ㅣSTATION Zㅣ미연의 언박싱ㅣKBS 220430 방송 (2022-04-29)"
},
{
  link: "https://www.youtube.com/watch?v=Yml_jnMQui0",
  category: "MEDIA CONTENTS",
  member: "미연",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/Yml_jnMQui0/hqdefault.jpg",
  alt: "미연 - [ENG] 내 딸 평생의 인연... 아니 미연 | 안녕자네 Ep.33 (2022-04-29)",
  title: "[ENG] 내 딸 평생의 인연... 아니 미연 | 안녕자네 Ep.33 (2022-04-29)"
},
{
  link: "https://www.youtube.com/watch?v=bsjj6WWtIgk",
  category: "MEDIA CONTENTS",
  member: "민니,미연,슈화",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/bsjj6WWtIgk/hqdefault.jpg",
  alt: "민니,미연,슈화 - [Eng 아이☁️클라우드] 카일로X BTOB 창섭& IDLE 미연 민니 슈화의 Drive🚗😎ㅣ순둥이 베이비｜Adorable Babyㅣ아이돌ㅣ아이들ㅣ (2022-04-29)",
  title: "[Eng 아이☁️클라우드] 카일로X BTOB 창섭& IDLE 미연 민니 슈화의 Drive🚗😎ㅣ순둥이 베이비｜Adorable Babyㅣ아이돌ㅣ아이들ㅣ (2022-04-29)"
},
{
  link: "https://www.youtube.com/watch?v=oHS1LtikV0s",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/oHS1LtikV0s/hqdefault.jpg",
  alt: "아이들 - (Idol_Challenge - (G)I-DLE ep-2) 네버버ㅋㅋ이번 챌린지도 참지 않긔… (ENG sub) (2022-04-29)",
  title: "(Idol_Challenge - (G)I-DLE ep-2) 네버버ㅋㅋ이번 챌린지도 참지 않긔… (ENG sub) (2022-04-29)"
},
{
  link: "https://www.youtube.com/watch?v=2VYvLGNLWes",
  category: "MEDIA CONTENTS",
  member: "민니",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/2VYvLGNLWes/hqdefault.jpg",
  alt: "민니 - (ENG) [아이돌.zip] I'm 김민니 내 매력은 셀 수 없지( •̀ ω •́ )y 아이들 민니의 예능활약상 모아보기★ l (여자)아이들 ((G)I-dle) (2022-04-28)",
  title: "(ENG) [아이돌.zip] I'm 김민니 내 매력은 셀 수 없지( •̀ ω •́ )y 아이들 민니의 예능활약상 모아보기★ l (여자)아이들 ((G)I-dle) (2022-04-28)"
},
{
  link: "https://www.youtube.com/watch?v=L6I-mYAVI_A",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/L6I-mYAVI_A/hqdefault.jpg",
  alt: "아이들 - (Idol_Challenge - (G)I-DLE ep-1) 네버버~ “드루와!! 나보여나??” (여자)아이들이얌 (ENG sub) (2022-04-22)",
  title: "(Idol_Challenge - (G)I-DLE ep-1) 네버버~ “드루와!! 나보여나??” (여자)아이들이얌 (ENG sub) (2022-04-22)"
},
{
  link: "https://www.youtube.com/watch?v=p2827vnIZAk",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/p2827vnIZAk/hqdefault.jpg",
  alt: "아이들 - (ENG)🏠 아이들 오신 날 (2022-04-19)",
  title: "(ENG)🏠 아이들 오신 날 (2022-04-19)"
},

// 🔽 새로 불러온 0개 항목


// 🔽 새로 불러온 0개 항목


// 🔽 새로 불러온 0개 항목


// 🔽 새로 불러온 0개 항목


// 🔽 새로 불러온 50개 항목
{
  link: "https://www.youtube.com/watch?v=pu-9bzecBIg",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/pu-9bzecBIg/hqdefault.jpg",
  alt: "아이들 - [꿀잠캠] 노는 것도 1등, 자는 것도 1등😴 고유 1등 (여자)아이들은 꿀잠중💤 | 돌들의 침묵 | (G)I-DLE ((여자)아이들) ‘TOMBOY’ (2022-04-04)",
  title: "[꿀잠캠] 노는 것도 1등, 자는 것도 1등😴 고유 1등 (여자)아이들은 꿀잠중💤 | 돌들의 침묵 | (G)I-DLE ((여자)아이들) ‘TOMBOY’ (2022-04-04)"
},
{
  link: "https://www.youtube.com/watch?v=muttupBkGTg",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/muttupBkGTg/hqdefault.jpg",
  alt: "아이들 - (ENG)예능감 NEVER DIE🔥 교관도 웃겨버리는 (여자)아이들  | 돌들의 침묵 | (G)I-DLE ((여자)아이들) ‘TOMBOY’ (2022-04-02)",
  title: "(ENG)예능감 NEVER DIE🔥 교관도 웃겨버리는 (여자)아이들  | 돌들의 침묵 | (G)I-DLE ((여자)아이들) ‘TOMBOY’ (2022-04-02)"
},
{
  link: "https://www.youtube.com/watch?v=K9Pt2WGVy24",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/K9Pt2WGVy24/hqdefault.jpg",
  alt: "아이들 - [거치면 흥하리] 할머니댁에 금쪽이들 올 수 있는거임? (여자)아이들도? 감히 최고 텐션 보장합니다🤟 (ENG SUB) | HIT Village (2022-04-01)",
  title: "[거치면 흥하리] 할머니댁에 금쪽이들 올 수 있는거임? (여자)아이들도? 감히 최고 텐션 보장합니다🤟 (ENG SUB) | HIT Village (2022-04-01)"
},
{
  link: "https://www.youtube.com/watch?v=VWf2QcvVxms",
  category: "MEDIA CONTENTS",
  member: "소연",
  year: "2021",
  thumbnail: "https://i.ytimg.com/vi/VWf2QcvVxms/hqdefault.jpg",
  alt: "소연 - 무려 3개의 경연프로그램에 출연한 아이들((G)I-DLE)소연의 이야기✨ 아이들 '라타타'는 '라따라따 아라따~'에서 나왔다고??  | #강제소환 | KBS 방송 (2021-01-15)",
  title: "무려 3개의 경연프로그램에 출연한 아이들((G)I-DLE)소연의 이야기✨ 아이들 '라타타'는 '라따라따 아라따~'에서 나왔다고??  | #강제소환 | KBS 방송 (2021-01-15)"
},
{
  link: "https://www.youtube.com/watch?v=dD2QdVz0RsQ",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/dD2QdVz0RsQ/hqdefault.jpg",
  alt: "아이들 - [ENG SUB] 별안간 들려온 🚨무삭제🤟🚨 버전에 춤추다 놀란 (여자)아이들!? 🛒 [매터돌 EP.4] | IDOL’S Snack Spree | (G)I-DLE (2022-03-24)",
  title: "[ENG SUB] 별안간 들려온 🚨무삭제🤟🚨 버전에 춤추다 놀란 (여자)아이들!? 🛒 [매터돌 EP.4] | IDOL’S Snack Spree | (G)I-DLE (2022-03-24)"
},
{
  link: "https://www.youtube.com/watch?v=_MAqNr9d-HM",
  category: "MEDIA CONTENTS",
  member: "소연",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/_MAqNr9d-HM/hqdefault.jpg",
  alt: "소연 - [모아봤습👀/SUB] 전소연의 깜짝 결혼 계획 발표?! 자이언트핑크 신혼집 찾아온 언프 친구들 모음 #동상이몽2 #YouareMyDestiny #SBSenter (2022-03-24)",
  title: "[모아봤습👀/SUB] 전소연의 깜짝 결혼 계획 발표?! 자이언트핑크 신혼집 찾아온 언프 친구들 모음 #동상이몽2 #YouareMyDestiny #SBSenter (2022-03-24)"
},
{
  link: "https://www.youtube.com/watch?v=MSQRys5oDV8",
  category: "MEDIA CONTENTS",
  member: "우기",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/MSQRys5oDV8/hqdefault.jpg",
  alt: "우기 - 우기야 아이들 무대에서 이런 머리는 어때 ?? TOMBOY (2022-03-21)",
  title: "우기야 아이들 무대에서 이런 머리는 어때 ?? TOMBOY (2022-03-21)"
},
{
  link: "https://www.youtube.com/watch?v=UZDSpQBlSU8",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/UZDSpQBlSU8/hqdefault.jpg",
  alt: "아이들 - GIDLE NEVER DIE!!! 이제 아이들에서 (여자)는 빼줘 | (여자)아이들 | (G)I-DLE  | TOMBOY | 아이돌등판 | IDDP | 전소연 미연 민니 우기 슈화 (2022-03-15)",
  title: "GIDLE NEVER DIE!!! 이제 아이들에서 (여자)는 빼줘 | (여자)아이들 | (G)I-DLE  | TOMBOY | 아이돌등판 | IDDP | 전소연 미연 민니 우기 슈화 (2022-03-15)"
},
{
  link: "https://www.youtube.com/watch?v=Yo_fY-ZB4-s",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/Yo_fY-ZB4-s/hqdefault.jpg",
  alt: "아이들 - [EN/JP] 데뷔조에 들어갈 마지막 7위는? (2022-03-02)",
  title: "[EN/JP] 데뷔조에 들어갈 마지막 7위는? (2022-03-02)"
},
{
  link: "https://www.youtube.com/watch?v=EikJ43Gxavw",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/EikJ43Gxavw/hqdefault.jpg",
  alt: "아이들 - [EN/JP] 파이널 3위부터 6위까지 순위발표 (2022-03-02)",
  title: "[EN/JP] 파이널 3위부터 6위까지 순위발표 (2022-03-02)"
},
{
  link: "https://www.youtube.com/watch?v=to47w5tP2BY",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/to47w5tP2BY/hqdefault.jpg",
  alt: "아이들 - [EN/JP] 파이널 1라운드 데뷔조 DREAMING vs 도전조 SUN (2022-03-02)",
  title: "[EN/JP] 파이널 1라운드 데뷔조 DREAMING vs 도전조 SUN (2022-03-02)"
},
{
  link: "https://www.youtube.com/watch?v=Hd8m6Ly7xFk",
  category: "MEDIA CONTENTS",
  member: "소연",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/Hd8m6Ly7xFk/hqdefault.jpg",
  alt: "소연 - [방과후설렘] 서낳괴 전소연이 서바이벌 프로듀서가 되면 벌어지는 일 mp4. (멋폭발♨)ㅣ#전소연 #방과후설렘 MBC220220방송 (2022-02-24)",
  title: "[방과후설렘] 서낳괴 전소연이 서바이벌 프로듀서가 되면 벌어지는 일 mp4. (멋폭발♨)ㅣ#전소연 #방과후설렘 MBC220220방송 (2022-02-24)"
},
{
  link: "https://www.youtube.com/watch?v=Q3Fjvq4IR7o",
  category: "MEDIA CONTENTS",
  member: "소연",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/Q3Fjvq4IR7o/hqdefault.jpg",
  alt: "소연 - #전소연 💜4학년 소연쌤 몰아보기💜 랩,작사,작곡,프로듀싱 능력에 티칭 능력까지?😘👍능력 만랩 소연쌤 모음 ZIP💜 | 방과후 설렘 | TVPP | MBC 220130 방송 (2022-02-23)",
  title: "#전소연 💜4학년 소연쌤 몰아보기💜 랩,작사,작곡,프로듀싱 능력에 티칭 능력까지?😘👍능력 만랩 소연쌤 모음 ZIP💜 | 방과후 설렘 | TVPP | MBC 220130 방송 (2022-02-23)"
},
{
  link: "https://www.youtube.com/watch?v=pO6_va6BHXc",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/pO6_va6BHXc/hqdefault.jpg",
  alt: "아이들 - [방과후 설렘 11화] 레옹.. 이대로 괜찮나요? _ 선공개 (2022-02-20)",
  title: "[방과후 설렘 11화] 레옹.. 이대로 괜찮나요? _ 선공개 (2022-02-20)"
},
{
  link: "https://www.youtube.com/watch?v=SjUxTj7yfUE",
  category: "MEDIA CONTENTS",
  member: "소연",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/SjUxTj7yfUE/hqdefault.jpg",
  alt: "소연 - 소연, 오디션 평가에서 거침없는 발언에 이유는? [유희열의 스케치북/You Heeyeol’s Sketchbook] | KBS 220211 방송 (2022-02-11)",
  title: "소연, 오디션 평가에서 거침없는 발언에 이유는? [유희열의 스케치북/You Heeyeol’s Sketchbook] | KBS 220211 방송 (2022-02-11)"
},
{
  link: "https://www.youtube.com/watch?v=_5wBuFcFuO4",
  category: "MEDIA CONTENTS",
  member: "소연",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/_5wBuFcFuO4/hqdefault.jpg",
  alt: "소연 - [방과후 설렘 선공개] 처음으로 화내는 소연 선생님!😡컨디션 관리도 실력이야💥, MBC 220123 방송 (2022-01-22)",
  title: "[방과후 설렘 선공개] 처음으로 화내는 소연 선생님!😡컨디션 관리도 실력이야💥, MBC 220123 방송 (2022-01-22)"
},
{
  link: "https://www.youtube.com/watch?v=8LwVwIf6Czw",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/8LwVwIf6Czw/hqdefault.jpg",
  alt: "아이들 - [방과후 설렘] 역대급 퀄리티의 랩 무대 탄생..! BTS 'MIC Drop' vs Doja Cat 'Boss Rich' 배틀 대결의 승자는...?ㅣ#8화 MBC 220116방송 (2022-01-18)",
  title: "[방과후 설렘] 역대급 퀄리티의 랩 무대 탄생..! BTS 'MIC Drop' vs Doja Cat 'Boss Rich' 배틀 대결의 승자는...?ㅣ#8화 MBC 220116방송 (2022-01-18)"
},
{
  link: "https://www.youtube.com/watch?v=WzR2pxtX-xo",
  category: "MEDIA CONTENTS",
  member: "소연",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/WzR2pxtX-xo/hqdefault.jpg",
  alt: "소연 - [방과후 설렘 미방분] 🍓전소연 선생님과 케이크 만들기🎂, MBC 220109 방송 (2022-01-11)",
  title: "[방과후 설렘 미방분] 🍓전소연 선생님과 케이크 만들기🎂, MBC 220109 방송 (2022-01-11)"
},
{
  link: "https://www.youtube.com/watch?v=rYuymcaXPDQ",
  category: "MEDIA CONTENTS",
  member: "소연",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/rYuymcaXPDQ/hqdefault.jpg",
  alt: "소연 - [방과후 설렘] 눈에 띄게 성장한 실력에 소연쌤도 활짝😊 구멍에서 레전드가 된 3, 4학년 댄스연합의 무대ㅣ#방과후설렘 #7화 #전소연 MBC220109방송 (2022-01-10)",
  title: "[방과후 설렘] 눈에 띄게 성장한 실력에 소연쌤도 활짝😊 구멍에서 레전드가 된 3, 4학년 댄스연합의 무대ㅣ#방과후설렘 #7화 #전소연 MBC220109방송 (2022-01-10)"
},
{
  link: "https://www.youtube.com/watch?v=19Eg09QC97A",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/19Eg09QC97A/hqdefault.jpg",
  alt: "아이들 - [방과후 설렘] 12살 최연소 팀과 레전드 찍은 무대🔥 'La Vie en Rose' 예쁜 애 4학년 vs 1학년 | #방과후설렘 #6화 #엠뚜루마뚜루 MBC220102방송 (2022-01-03)",
  title: "[방과후 설렘] 12살 최연소 팀과 레전드 찍은 무대🔥 'La Vie en Rose' 예쁜 애 4학년 vs 1학년 | #방과후설렘 #6화 #엠뚜루마뚜루 MBC220102방송 (2022-01-03)"
},
{
  link: "https://www.youtube.com/watch?v=YNp9IR8EkTY",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2021",
  thumbnail: "https://i.ytimg.com/vi/YNp9IR8EkTY/hqdefault.jpg",
  alt: "아이들 - [EN/JP] 내가 댄스배틀을 어떻게 해.. (2021-12-22)",
  title: "[EN/JP] 내가 댄스배틀을 어떻게 해.. (2021-12-22)"
},
{
  link: "https://www.youtube.com/watch?v=im6Q-bVqJu4",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2021",
  thumbnail: "https://i.ytimg.com/vi/im6Q-bVqJu4/hqdefault.jpg",
  alt: "아이들 - [EN/JP] \"최약체한테 지는 기분 느껴봐\" (2021-12-22)",
  title: "[EN/JP] \"최약체한테 지는 기분 느껴봐\" (2021-12-22)"
},
{
  link: "https://www.youtube.com/watch?v=8eECNbE9NIc",
  category: "MEDIA CONTENTS",
  member: "소연",
  year: "2021",
  thumbnail: "https://i.ytimg.com/vi/8eECNbE9NIc/hqdefault.jpg",
  alt: "소연 - [EN/JP] \"자신감이 중요해\" 전소연 샘의 개인지도 (2021-12-22)",
  title: "[EN/JP] \"자신감이 중요해\" 전소연 샘의 개인지도 (2021-12-22)"
},
{
  link: "https://www.youtube.com/watch?v=QIOM4aT1cAQ",
  category: "MEDIA CONTENTS",
  member: "소연",
  year: "2021",
  thumbnail: "https://i.ytimg.com/vi/QIOM4aT1cAQ/hqdefault.jpg",
  alt: "소연 - [티라이트] 받쓰 후 설렘..아닌 긴장😱?! 주목 공포증 때문에 게스트 최초 제일 맨끝자리에 앉은 (여자)아이들 소연! 서바이벌이 낳은 괴물 전소연의 반전 낯가림 | 놀라운토요일 (2021-12-20)",
  title: "[티라이트] 받쓰 후 설렘..아닌 긴장😱?! 주목 공포증 때문에 게스트 최초 제일 맨끝자리에 앉은 (여자)아이들 소연! 서바이벌이 낳은 괴물 전소연의 반전 낯가림 | 놀라운토요일 (2021-12-20)"
},
{
  link: "https://www.youtube.com/watch?v=iEZPbD0ueSc",
  category: "MEDIA CONTENTS",
  member: "소연",
  year: "2021",
  thumbnail: "https://i.ytimg.com/vi/iEZPbD0ueSc/hqdefault.jpg",
  alt: "소연 - [방과후 설렘] 전소연쌤 티칭으로 분위기 180도 바뀐 4학년의 'Black Mamba' vs  최강 3학년의 'Pretty Savage'  | #4화 MBC211219방송 (2021-12-20)",
  title: "[방과후 설렘] 전소연쌤 티칭으로 분위기 180도 바뀐 4학년의 'Black Mamba' vs  최강 3학년의 'Pretty Savage'  | #4화 MBC211219방송 (2021-12-20)"
},
{
  link: "https://www.youtube.com/watch?v=tyyQelVHxHk",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2021",
  thumbnail: "https://i.ytimg.com/vi/tyyQelVHxHk/hqdefault.jpg",
  alt: "아이들 - [방과후 설렘] ＂같이 가고 싶었어요＂ 선생님 PICK 탈락자 추가 합격부터 학년별 담임 배정까지🔥 | #방과후설렘 #3화 #엠뚜루마뚜루 MBC211212방송 (2021-12-13)",
  title: "[방과후 설렘] ＂같이 가고 싶었어요＂ 선생님 PICK 탈락자 추가 합격부터 학년별 담임 배정까지🔥 | #방과후설렘 #3화 #엠뚜루마뚜루 MBC211212방송 (2021-12-13)"
},
{
  link: "https://www.youtube.com/watch?v=tT0HkexQnvs",
  category: "MEDIA CONTENTS",
  member: "소연",
  year: "2021",
  thumbnail: "https://i.ytimg.com/vi/tT0HkexQnvs/hqdefault.jpg",
  alt: "소연 - [방과후 설렘] 전소연의 혹평 연습생 생활 5년이면 더 잘했어야 한다💥 김지연의 ＜아낙네＞, MBC 211205 방송 (2021-12-05)",
  title: "[방과후 설렘] 전소연의 혹평 연습생 생활 5년이면 더 잘했어야 한다💥 김지연의 ＜아낙네＞, MBC 211205 방송 (2021-12-05)"
},
{
  link: "https://www.youtube.com/watch?v=OkTgbYvvIow",
  category: "MEDIA CONTENTS",
  member: "소연",
  year: "2021",
  thumbnail: "https://i.ytimg.com/vi/OkTgbYvvIow/hqdefault.jpg",
  alt: "소연 - [방과후 설렘] ＜가시나＞팀 김유연의 탈락..! 전소연 선생님의 다급한 마지막 한 마디 같이 가고 싶었습니다, MBC 211128 방송 (2021-11-28)",
  title: "[방과후 설렘] ＜가시나＞팀 김유연의 탈락..! 전소연 선생님의 다급한 마지막 한 마디 같이 가고 싶었습니다, MBC 211128 방송 (2021-11-28)"
},
{
  link: "https://www.youtube.com/watch?v=5Pk8rV6GsfE",
  category: "MEDIA CONTENTS",
  member: "소연",
  year: "2021",
  thumbnail: "https://i.ytimg.com/vi/5Pk8rV6GsfE/hqdefault.jpg",
  alt: "소연 - [방과후 설렘] 화도 안날 정도로 최악이었어요 전소연 선생님의 혹평에 붉어진 ＜살짝 설렜어＞팀의 눈시울💦, MBC 211128 방송 (2021-11-28)",
  title: "[방과후 설렘] 화도 안날 정도로 최악이었어요 전소연 선생님의 혹평에 붉어진 ＜살짝 설렜어＞팀의 눈시울💦, MBC 211128 방송 (2021-11-28)"
},
{
  link: "https://www.youtube.com/watch?v=OVqnr2FYxII",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2021",
  thumbnail: "https://i.ytimg.com/vi/OVqnr2FYxII/hqdefault.jpg",
  alt: "아이들 - 🥰(여자)아이들 맛있는 녀석들 풀버전ㅣ미연,민니,소연,우기,슈화🥰 (2021-11-01)",
  title: "🥰(여자)아이들 맛있는 녀석들 풀버전ㅣ미연,민니,소연,우기,슈화🥰 (2021-11-01)"
},
{
  link: "https://www.youtube.com/watch?v=A9skYY-BLrQ",
  category: "MEDIA CONTENTS",
  member: "소연",
  year: "2021",
  thumbnail: "https://i.ytimg.com/vi/A9skYY-BLrQ/hqdefault.jpg",
  alt: "소연 - ♨핫클립♨ MZ세대 스타일 아이콘 (여자)아이들 전소연이 선택한 스타일링은!?｜K-스타일링 배틀 마법옷장｜JTBC 211013 방송 (2021-10-16)",
  title: "♨핫클립♨ MZ세대 스타일 아이콘 (여자)아이들 전소연이 선택한 스타일링은!?｜K-스타일링 배틀 마법옷장｜JTBC 211013 방송 (2021-10-16)"
},
{
  link: "https://www.youtube.com/watch?v=7Pfy2wOaOEA",
  category: "MEDIA CONTENTS",
  member: "소연",
  year: "2021",
  thumbnail: "https://i.ytimg.com/vi/7Pfy2wOaOEA/hqdefault.jpg",
  alt: "소연 - [TMI NEWS] (여자)아이들의 지니어스한 리더 전소연의 TMI MOMENTS (2021-08-05)",
  title: "[TMI NEWS] (여자)아이들의 지니어스한 리더 전소연의 TMI MOMENTS (2021-08-05)"
},
{
  link: "https://www.youtube.com/watch?v=MNRVK03jb4s",
  category: "MEDIA CONTENTS",
  member: "소연",
  year: "2021",
  thumbnail: "https://i.ytimg.com/vi/MNRVK03jb4s/hqdefault.jpg",
  alt: "소연 - [ENG SUB] 전소연과 윈디, 비슷한 듯 다른 두 사람의 이야기 | 아이돌 인간극장 (2021-07-31)",
  title: "[ENG SUB] 전소연과 윈디, 비슷한 듯 다른 두 사람의 이야기 | 아이돌 인간극장 (2021-07-31)"
},
{
  link: "https://www.youtube.com/watch?v=o8SwTZ_rIP4",
  category: "MEDIA CONTENTS",
  member: "소연",
  year: "2021",
  thumbnail: "https://i.ytimg.com/vi/o8SwTZ_rIP4/hqdefault.jpg",
  alt: "소연 - [ENG] 🎙EP10. 전소연이 찜콩한 남자 딱 알랴줌 [#리벌스트랙]ㅣ#타이거JK #전소연 #허영지 #여자아이들 #JEONSOYEON (2021-07-30)",
  title: "[ENG] 🎙EP10. 전소연이 찜콩한 남자 딱 알랴줌 [#리벌스트랙]ㅣ#타이거JK #전소연 #허영지 #여자아이들 #JEONSOYEON (2021-07-30)"
},
{
  link: "https://www.youtube.com/watch?v=lCQ47Tm30vA",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2021",
  thumbnail: "https://i.ytimg.com/vi/lCQ47Tm30vA/hqdefault.jpg",
  alt: "아이들 - ※항마력 주의※ 두가지 부캐, 윈디와 연하공주의 각각 다른 말투!  [유희열의 스케치북/You Heeyeol’s Sketchbook] | KBS 210723 방송 (2021-07-23)",
  title: "※항마력 주의※ 두가지 부캐, 윈디와 연하공주의 각각 다른 말투!  [유희열의 스케치북/You Heeyeol’s Sketchbook] | KBS 210723 방송 (2021-07-23)"
},
{
  link: "https://www.youtube.com/watch?v=2jSjfdnTxd0",
  category: "MEDIA CONTENTS",
  member: "소연",
  year: "2021",
  thumbnail: "https://i.ytimg.com/vi/2jSjfdnTxd0/hqdefault.jpg",
  alt: "소연 - 말하는대로~ 미래엔 이 영상이 성지?! 과거에 지금의 자신을 예언했던 전소연?  [유희열의 스케치북/You Heeyeol’s Sketchbook] | KBS 210723 방송 (2021-07-23)",
  title: "말하는대로~ 미래엔 이 영상이 성지?! 과거에 지금의 자신을 예언했던 전소연?  [유희열의 스케치북/You Heeyeol’s Sketchbook] | KBS 210723 방송 (2021-07-23)"
},
{
  link: "https://www.youtube.com/watch?v=Anhxm2MXILI",
  category: "MEDIA CONTENTS",
  member: "소연",
  year: "2021",
  thumbnail: "https://i.ytimg.com/vi/Anhxm2MXILI/hqdefault.jpg",
  alt: "소연 - [ENG]🎙EP9. (여자)아이들 때보다 솔로가 편하다고??? [#리벌스트랙]ㅣ#타이거JK #전소연 #허영지 #여자아이들 #JEONSOYEON (2021-07-23)",
  title: "[ENG]🎙EP9. (여자)아이들 때보다 솔로가 편하다고??? [#리벌스트랙]ㅣ#타이거JK #전소연 #허영지 #여자아이들 #JEONSOYEON (2021-07-23)"
},
{
  link: "https://www.youtube.com/watch?v=4m1QS-TywCo",
  category: "MEDIA CONTENTS",
  member: "소연",
  year: "2021",
  thumbnail: "https://i.ytimg.com/vi/4m1QS-TywCo/hqdefault.jpg",
  alt: "소연 - 전소연의 인생 띵곡 플리🎶 이 노래들 들으면서 소연이 생각 해달라 하네요😇 | 최애플레이리스트 ep.12 (2021-07-20)",
  title: "전소연의 인생 띵곡 플리🎶 이 노래들 들으면서 소연이 생각 해달라 하네요😇 | 최애플레이리스트 ep.12 (2021-07-20)"
},
{
  link: "https://www.youtube.com/watch?v=kpwfbO5dqdU",
  category: "MEDIA CONTENTS",
  member: "소연",
  year: "2021",
  thumbnail: "https://i.ytimg.com/vi/kpwfbO5dqdU/hqdefault.jpg",
  alt: "소연 - [#샷추가] 🚨삠삠한 무더운 여름을 날려줄 전소연 등장 삐용삐용🚨 수전증 댄스로 코빅 흔들고 가신 무대 장인 천재만재 갓소연🌟 | #코미디빅리그 #Diggle (2021-07-20)",
  title: "[#샷추가] 🚨삠삠한 무더운 여름을 날려줄 전소연 등장 삐용삐용🚨 수전증 댄스로 코빅 흔들고 가신 무대 장인 천재만재 갓소연🌟 | #코미디빅리그 #Diggle (2021-07-20)"
},
{
  link: "https://www.youtube.com/watch?v=qKb5UYHcdLg",
  category: "MEDIA CONTENTS",
  member: "소연",
  year: "2021",
  thumbnail: "https://i.ytimg.com/vi/qKb5UYHcdLg/hqdefault.jpg",
  alt: "소연 - [ENG] 전소연에게 딸의 팬레터를 읽어줬다 | 안녕자네 Ep.01 (2021-07-16)",
  title: "[ENG] 전소연에게 딸의 팬레터를 읽어줬다 | 안녕자네 Ep.01 (2021-07-16)"
},
{
  link: "https://www.youtube.com/watch?v=pt4psDKkryM",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2021",
  thumbnail: "https://i.ytimg.com/vi/pt4psDKkryM/hqdefault.jpg",
  alt: "아이들 - [신사소 EP.5]라떼는 말이야,, 일하면서 아이돌도 만났어 ,, | 별퀴즈 | 방송사 신입 | ihq (2021-07-16)",
  title: "[신사소 EP.5]라떼는 말이야,, 일하면서 아이돌도 만났어 ,, | 별퀴즈 | 방송사 신입 | ihq (2021-07-16)"
},
{
  link: "https://www.youtube.com/watch?v=5Cve_AY1R3g",
  category: "MEDIA CONTENTS",
  member: "소연",
  year: "2021",
  thumbnail: "https://i.ytimg.com/vi/5Cve_AY1R3g/hqdefault.jpg",
  alt: "소연 - 삠삠 듣기 딱 좋은 날씨네☀ 전소연의 첫 미니 앨범 [Windy] 작업기 | 최애플레이리스트 ep.11 (2021-07-13)",
  title: "삠삠 듣기 딱 좋은 날씨네☀ 전소연의 첫 미니 앨범 [Windy] 작업기 | 최애플레이리스트 ep.11 (2021-07-13)"
},
{
  link: "https://www.youtube.com/watch?v=0WuYvCdcWiY",
  category: "MEDIA CONTENTS",
  member: "소연",
  year: "2021",
  thumbnail: "https://i.ytimg.com/vi/0WuYvCdcWiY/hqdefault.jpg",
  alt: "소연 - 아이에게 전소연 설명하기 | Studio Kizzle (2021-07-08)",
  title: "아이에게 전소연 설명하기 | Studio Kizzle (2021-07-08)"
},
{
  link: "https://www.youtube.com/watch?v=Pg0FB-Pfjzs",
  category: "MEDIA CONTENTS",
  member: "소연",
  year: "2021",
  thumbnail: "https://i.ytimg.com/vi/Pg0FB-Pfjzs/hqdefault.jpg",
  alt: "소연 - [EN] 서바이벌이 낳은 괴물 (여자) 아이들 소연의 매력 삠삠 (BEAM BEAM) 인터뷰 《제시의 쇼!터뷰》 EP.58 by 모비딕 Mobidic (2021-07-08)",
  title: "[EN] 서바이벌이 낳은 괴물 (여자) 아이들 소연의 매력 삠삠 (BEAM BEAM) 인터뷰 《제시의 쇼!터뷰》 EP.58 by 모비딕 Mobidic (2021-07-08)"
},
{
  link: "https://www.youtube.com/watch?v=M1zZUa_Y0I4",
  category: "MEDIA CONTENTS",
  member: "소연",
  year: "2021",
  thumbnail: "https://i.ytimg.com/vi/M1zZUa_Y0I4/hqdefault.jpg",
  alt: "소연 - 【분량체크】 초능력 얻은 전소연🔮 불사조가 되다🔥 이번 앨범 Windy 컨셉이 야채🥒 편식이라며? 야채가 싫다고 했던 소연이 | 라디오스타 | TVPP | MBC 191030 방송 (2021-07-05)",
  title: "【분량체크】 초능력 얻은 전소연🔮 불사조가 되다🔥 이번 앨범 Windy 컨셉이 야채🥒 편식이라며? 야채가 싫다고 했던 소연이 | 라디오스타 | TVPP | MBC 191030 방송 (2021-07-05)"
},
{
  link: "https://www.youtube.com/watch?v=_4JZa2rwbSI",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2021",
  thumbnail: "https://i.ytimg.com/vi/_4JZa2rwbSI/hqdefault.jpg",
  alt: "아이들 - Cast of So Not Worth It argues about friendship vs. love and other life decisions [ENG SUB] (2021-06-26)",
  title: "Cast of So Not Worth It argues about friendship vs. love and other life decisions [ENG SUB] (2021-06-26)"
},
{
  link: "https://www.youtube.com/watch?v=RggfbV5legQ",
  category: "MEDIA CONTENTS",
  member: "미연,우기",
  year: "2021",
  thumbnail: "https://i.ytimg.com/vi/RggfbV5legQ/hqdefault.jpg",
  alt: "미연,우기 - K-메인보컬의 위엄! 면프로디테 (여자)아이들 미연 모아보기(feat. 우기♥) l #대한외국인게스트하우스 l #대한외국인 l #MBCevery1 l EP.141,62 (2021-06-25)",
  title: "K-메인보컬의 위엄! 면프로디테 (여자)아이들 미연 모아보기(feat. 우기♥) l #대한외국인게스트하우스 l #대한외국인 l #MBCevery1 l EP.141,62 (2021-06-25)"
},
{
  link: "https://www.youtube.com/watch?v=4enZ9viSE0c",
  category: "MEDIA CONTENTS",
  member: "민니",
  year: "2021",
  thumbnail: "https://i.ytimg.com/vi/4enZ9viSE0c/hqdefault.jpg",
  alt: "민니 - The Driver EP.123 - MINNIE (G)I-DLE (2021-06-17)",
  title: "The Driver EP.123 - MINNIE (G)I-DLE (2021-06-17)"
},
{
  link: "https://www.youtube.com/watch?v=AGIWf7LHHnQ",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2021",
  thumbnail: "https://i.ytimg.com/vi/AGIWf7LHHnQ/hqdefault.jpg",
  alt: "아이들 - (ENG / 한글자막 SUB) (G)I-DLE 的舒華化身綜藝天后！遊戲超強，過關機器就非舒華莫屬！就算懲罰也OK！綜藝玩很大 X FORA福爾額溫槍 179回20210612【第356集完整版】 (2021-06-14)",
  title: "(ENG / 한글자막 SUB) (G)I-DLE 的舒華化身綜藝天后！遊戲超強，過關機器就非舒華莫屬！就算懲罰也OK！綜藝玩很大 X FORA福爾額溫槍 179回20210612【第356集完整版】 (2021-06-14)"
},
{
  link: "https://www.youtube.com/watch?v=HThGznwjEig",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2021",
  thumbnail: "https://i.ytimg.com/vi/HThGznwjEig/hqdefault.jpg",
  alt: "아이들 - (ENG / 한글자막 SUB) 超人氣韓國女團(G)I-DLE的舒華可愛來襲！綜藝初體驗，錄影還可以遇到偶像太幸福啦～綜藝玩很大 X FORA福爾額溫槍 179回20210605【第355集完整版】 (2021-06-07)",
  title: "(ENG / 한글자막 SUB) 超人氣韓國女團(G)I-DLE的舒華可愛來襲！綜藝初體驗，錄影還可以遇到偶像太幸福啦～綜藝玩很大 X FORA福爾額溫槍 179回20210605【第355集完整版】 (2021-06-07)"
},

// 🔽 새로 불러온 0개 항목


// 🔽 새로 불러온 9개 항목
{
  link: "https://www.youtube.com/watch?v=AsSZB44wGO4",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2020",
  thumbnail: "https://i.ytimg.com/vi/AsSZB44wGO4/hqdefault.jpg",
  alt: "아이들 - 【ENG) 동동신기│EP.11】 무대에서 가장 중요한 엔딩 요정🧚🏻은 누구? 동동신기x(여자)아이들 '덤디덤디'♪ 콜라보 (유-후=3)│TTXQ FULL- knowingbros (2020-09-19)",
  title: "【ENG) 동동신기│EP.11】 무대에서 가장 중요한 엔딩 요정🧚🏻은 누구? 동동신기x(여자)아이들 '덤디덤디'♪ 콜라보 (유-후=3)│TTXQ FULL- knowingbros (2020-09-19)"
},
{
  link: "https://www.youtube.com/watch?v=vQvKWIfaFmI",
  category: "MEDIA CONTENTS",
  member: "우기",
  year: "2020",
  thumbnail: "https://i.ytimg.com/vi/vQvKWIfaFmI/hqdefault.jpg",
  alt: "우기 - 【ENG) 동동신기│EP.10】 사랑에 빠지는 데 세 글자면 충분한 '(여자)아이들' 수진x우기와 '덤디덤디'♬ 좋아효😍 #협찬 │TTXQ FULL- knowingbros (2020-09-12)",
  title: "【ENG) 동동신기│EP.10】 사랑에 빠지는 데 세 글자면 충분한 '(여자)아이들' 수진x우기와 '덤디덤디'♬ 좋아효😍 #협찬 │TTXQ FULL- knowingbros (2020-09-12)"
},
{
  link: "https://www.youtube.com/watch?v=mbq5ih0DAwU",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2020",
  thumbnail: "https://i.ytimg.com/vi/mbq5ih0DAwU/hqdefault.jpg",
  alt: "아이들 - [니들모해?!] (여자)아이들 (G)I-DLE, 오일파스타 내가 해줄게 'Q&A' (영상통화_셀프캠)[NewsenTV] (2020-09-03)",
  title: "[니들모해?!] (여자)아이들 (G)I-DLE, 오일파스타 내가 해줄게 'Q&A' (영상통화_셀프캠)[NewsenTV] (2020-09-03)"
},
{
  link: "https://www.youtube.com/watch?v=nfwxkKRD8Ik",
  category: "MEDIA CONTENTS",
  member: "소연,민니,미연",
  year: "2020",
  thumbnail: "https://i.ytimg.com/vi/nfwxkKRD8Ik/hqdefault.jpg",
  alt: "소연,민니,미연 - (G)I-DLE 여자아이들 소연&미연&민니☆리그오브레전드(LoL) K/DA 컴백 기념! 아이돌 그라운드 몰아보기~♥ (※Cookie videos) [ENG] (2020-09-01)",
  title: "(G)I-DLE 여자아이들 소연&미연&민니☆리그오브레전드(LoL) K/DA 컴백 기념! 아이돌 그라운드 몰아보기~♥ (※Cookie videos) [ENG] (2020-09-01)"
},
{
  link: "https://www.youtube.com/watch?v=sqlNv5vfGSE",
  category: "MEDIA CONTENTS",
  member: "우기",
  year: "2020",
  thumbnail: "https://i.ytimg.com/vi/sqlNv5vfGSE/hqdefault.jpg",
  alt: "우기 - [EN/JP] (여자)아이들의 운명을 룰렛이 정한다? 덤디덤디 썸네일 주인공 정하다 노래에 재미 들인 우기(따라다다따♬) | (G)I-DLE | 썸네일쟁탈전 | 썸썸썸 (2020-08-13)",
  title: "[EN/JP] (여자)아이들의 운명을 룰렛이 정한다? 덤디덤디 썸네일 주인공 정하다 노래에 재미 들인 우기(따라다다따♬) | (G)I-DLE | 썸네일쟁탈전 | 썸썸썸 (2020-08-13)"
},
{
  link: "https://www.youtube.com/watch?v=tYgD_bJysfw",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2020",
  thumbnail: "https://i.ytimg.com/vi/tYgD_bJysfw/hqdefault.jpg",
  alt: "아이들 - [엉망진창제작소] (여자)아이들 서열 1위는 오늘부터 🥁덤디단이야🥁 l 덤디덤디 l(G)I-DLE l DUMDi DUMDi l 4Kㅣ딩고뮤직ㅣDingo Music ㅣ LIVE (2020-08-11)",
  title: "[엉망진창제작소] (여자)아이들 서열 1위는 오늘부터 🥁덤디단이야🥁 l 덤디덤디 l(G)I-DLE l DUMDi DUMDi l 4Kㅣ딩고뮤직ㅣDingo Music ㅣ LIVE (2020-08-11)"
},
{
  link: "https://www.youtube.com/watch?v=JTRRhkjicPo",
  category: "MEDIA CONTENTS",
  member: "민니,미연,우기",
  year: "2020",
  thumbnail: "https://i.ytimg.com/vi/JTRRhkjicPo/hqdefault.jpg",
  alt: "민니,미연,우기 - '대세 걸그룹' (여자)아이들((G)I-DLE) 미연&민니&우기의 TMI MOMENTS! (2020-08-06)",
  title: "'대세 걸그룹' (여자)아이들((G)I-DLE) 미연&민니&우기의 TMI MOMENTS! (2020-08-06)"
},
{
  link: "https://www.youtube.com/watch?v=AQWWtwyBWC8",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2020",
  thumbnail: "https://i.ytimg.com/vi/AQWWtwyBWC8/hqdefault.jpg",
  alt: "아이들 - [런닝맨] '저 세상 텐션의 끝 미쳐버린 짝꿍레이스!' / 'RunningMan' Special | SBS NOW (2020-07-28)",
  title: "[런닝맨] '저 세상 텐션의 끝 미쳐버린 짝꿍레이스!' / 'RunningMan' Special | SBS NOW (2020-07-28)"
},
{
  link: "https://www.youtube.com/watch?v=8l9yNXKqTLU",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2020",
  thumbnail: "https://i.ytimg.com/vi/8l9yNXKqTLU/hqdefault.jpg",
  alt: "아이들 - 큐브걸 팀, 형돈의 설명을 어려워하는 98년 생 아이돌, 수진 [퀴즈 위의 아이돌] 20200727 (2020-07-27)",
  title: "큐브걸 팀, 형돈의 설명을 어려워하는 98년 생 아이돌, 수진 [퀴즈 위의 아이돌] 20200727 (2020-07-27)"
},

// 🔽 새로 불러온 41개 항목
{
  link: "https://www.youtube.com/watch?v=exWD4Pf-N0w",
  category: "MEDIA CONTENTS",
  member: "민니",
  year: "2021",
  thumbnail: "https://i.ytimg.com/vi/exWD4Pf-N0w/hqdefault.jpg",
  alt: "민니 - 무대에서 한국어 노래를 부르기 위해 열심히 노력했던 민니👏🏻 JTBC 팩추얼(JTBC FACTUAL) | JTBC 210501 방송 (2021-05-01)",
  title: "무대에서 한국어 노래를 부르기 위해 열심히 노력했던 민니👏🏻 JTBC 팩추얼(JTBC FACTUAL) | JTBC 210501 방송 (2021-05-01)"
},
{
  link: "https://www.youtube.com/watch?v=mGLQSc1cejQ",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2021",
  thumbnail: "https://i.ytimg.com/vi/mGLQSc1cejQ/hqdefault.jpg",
  alt: "아이들 - Ep.3-3 [최초공개] 우리가 몰랐던 (G)I-DLE (여자)아이들 연습생 시절 썰 & 멤버별 관계 《소파어웨이》 (EN) (2021-02-24)",
  title: "Ep.3-3 [최초공개] 우리가 몰랐던 (G)I-DLE (여자)아이들 연습생 시절 썰 & 멤버별 관계 《소파어웨이》 (EN) (2021-02-24)"
},
{
  link: "https://www.youtube.com/watch?v=h8it_zBeoS4",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2021",
  thumbnail: "https://i.ytimg.com/vi/h8it_zBeoS4/hqdefault.jpg",
  alt: "아이들 - Ep.3 미방영분 | (G)I-DLE (여자)아이들 환장파티! 비하인드 풀고 항마력 테스트 😹 《소파어웨이》 (EN) (2021-02-18)",
  title: "Ep.3 미방영분 | (G)I-DLE (여자)아이들 환장파티! 비하인드 풀고 항마력 테스트 😹 《소파어웨이》 (EN) (2021-02-18)"
},
{
  link: "https://www.youtube.com/watch?v=UT28mAGBTrY",
  category: "MEDIA CONTENTS",
  member: "소연,민니,우기",
  year: "2021",
  thumbnail: "https://i.ytimg.com/vi/UT28mAGBTrY/hqdefault.jpg",
  alt: "소연,민니,우기 - Ep.3-2 언프랩3 이후 5년 만인 전소연×나다🤘랩배틀에 우기 삭발 공약까지?😲 (G)I-DLE (여자)아이들 민니&소연 《소파어웨이》 (EN) (2021-02-17)",
  title: "Ep.3-2 언프랩3 이후 5년 만인 전소연×나다🤘랩배틀에 우기 삭발 공약까지?😲 (G)I-DLE (여자)아이들 민니&소연 《소파어웨이》 (EN) (2021-02-17)"
},
{
  link: "https://www.youtube.com/watch?v=iBYJqZdqWI0",
  category: "MEDIA CONTENTS",
  member: "소연,민니",
  year: "2021",
  thumbnail: "https://i.ytimg.com/vi/iBYJqZdqWI0/hqdefault.jpg",
  alt: "소연,민니 - Ep.3-1 2026년 빌보드 차트 1위로 전세계를 K-POP으로 물들인 (G)I-DLE (여자)아이들 소연&민니 《소파어웨이》 (EN) (2021-02-17)",
  title: "Ep.3-1 2026년 빌보드 차트 1위로 전세계를 K-POP으로 물들인 (G)I-DLE (여자)아이들 소연&민니 《소파어웨이》 (EN) (2021-02-17)"
},
{
  link: "https://www.youtube.com/watch?v=n5lxCxPp2hs",
  category: "MEDIA CONTENTS",
  member: "소연",
  year: "2021",
  thumbnail: "https://i.ytimg.com/vi/n5lxCxPp2hs/hqdefault.jpg",
  alt: "소연 - 멋지면 다 언니야 ㅠㅠ 프로美 넘치는 소연언니의 녹음현황.avi [#페이스아이디] (2021-02-08)",
  title: "멋지면 다 언니야 ㅠㅠ 프로美 넘치는 소연언니의 녹음현황.avi [#페이스아이디] (2021-02-08)"
},
{
  link: "https://www.youtube.com/watch?v=PznNN4aJrvc",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2021",
  thumbnail: "https://i.ytimg.com/vi/PznNN4aJrvc/hqdefault.jpg",
  alt: "아이들 - 수진이의 이상형 그분(?)과의 결과 공개! [#페이스아이디] (2021-02-08)",
  title: "수진이의 이상형 그분(?)과의 결과 공개! [#페이스아이디] (2021-02-08)"
},
{
  link: "https://www.youtube.com/watch?v=O3RYs1mNOWE",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2021",
  thumbnail: "https://i.ytimg.com/vi/O3RYs1mNOWE/hqdefault.jpg",
  alt: "아이들 - ★1위 가수★의 스밍법 ㅋㅋㅋ 화(火)가 가득한 (여자)아이들 [#페이스아이디] (2021-02-08)",
  title: "★1위 가수★의 스밍법 ㅋㅋㅋ 화(火)가 가득한 (여자)아이들 [#페이스아이디] (2021-02-08)"
},
{
  link: "https://www.youtube.com/watch?v=6912bo3BKIU",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2021",
  thumbnail: "https://i.ytimg.com/vi/6912bo3BKIU/hqdefault.jpg",
  alt: "아이들 - (여자)아이들 중, 거짓말쟁이를 찾아라! [#페이스아이디] 비하인드 (2021-02-05)",
  title: "(여자)아이들 중, 거짓말쟁이를 찾아라! [#페이스아이디] 비하인드 (2021-02-05)"
},
{
  link: "https://www.youtube.com/watch?v=8hL7WcJAuS4",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2021",
  thumbnail: "https://i.ytimg.com/vi/8hL7WcJAuS4/hqdefault.jpg",
  alt: "아이들 - 원래 (여자)아이들의 리더는 수진이었다?! [#페이스아이디​] 비하인드 (2021-02-03)",
  title: "원래 (여자)아이들의 리더는 수진이었다?! [#페이스아이디​] 비하인드 (2021-02-03)"
},
{
  link: "https://www.youtube.com/watch?v=BWMWcWqY3z0",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2021",
  thumbnail: "https://i.ytimg.com/vi/BWMWcWqY3z0/hqdefault.jpg",
  alt: "아이들 - (여자)아이들 내 치열(,,,❓)한 순위 싸움 결과 💥서열 1위💥를 발표합니다❤️💜 두구두구두구 [아이돌리그 미방영분] (2021-02-03)",
  title: "(여자)아이들 내 치열(,,,❓)한 순위 싸움 결과 💥서열 1위💥를 발표합니다❤️💜 두구두구두구 [아이돌리그 미방영분] (2021-02-03)"
},
{
  link: "https://www.youtube.com/watch?v=em0WtgMURSM",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2021",
  thumbnail: "https://i.ytimg.com/vi/em0WtgMURSM/hqdefault.jpg",
  alt: "아이들 - ❤️💜(여자)아이들 좋아해송❤️💜 아이들 애교에 나 부끄❤️ [아이돌리그 미방영분] (2021-02-01)",
  title: "❤️💜(여자)아이들 좋아해송❤️💜 아이들 애교에 나 부끄❤️ [아이돌리그 미방영분] (2021-02-01)"
},
{
  link: "https://www.youtube.com/watch?v=PVcBLWSeLDQ",
  category: "MEDIA CONTENTS",
  member: "소연",
  year: "2021",
  thumbnail: "https://i.ytimg.com/vi/PVcBLWSeLDQ/hqdefault.jpg",
  alt: "소연 - 소연 핸드폰에서 수상한(?) 어플 포착?! 그 이유가 뭐냐ㅁ.... [#페이스아이디] (2021-02-01)",
  title: "소연 핸드폰에서 수상한(?) 어플 포착?! 그 이유가 뭐냐ㅁ.... [#페이스아이디] (2021-02-01)"
},
{
  link: "https://www.youtube.com/watch?v=sXTKVxWG10g",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2021",
  thumbnail: "https://i.ytimg.com/vi/sXTKVxWG10g/hqdefault.jpg",
  alt: "아이들 - 오늘도 화목하게 디스하는 (여자)아이들^^ [#페이스아이디] (2021-02-01)",
  title: "오늘도 화목하게 디스하는 (여자)아이들^^ [#페이스아이디] (2021-02-01)"
},
{
  link: "https://www.youtube.com/watch?v=Xsn3yvvRHiI",
  category: "MEDIA CONTENTS",
  member: "소연,우기",
  year: "2021",
  thumbnail: "https://i.ytimg.com/vi/Xsn3yvvRHiI/hqdefault.jpg",
  alt: "소연,우기 - 우기 앞에서 소연이가 세상 단호해진 이유는?! (feat.태연선배님) [#페이스아이디] (2021-02-01)",
  title: "우기 앞에서 소연이가 세상 단호해진 이유는?! (feat.태연선배님) [#페이스아이디] (2021-02-01)"
},
{
  link: "https://www.youtube.com/watch?v=5FjB5L6wZYw",
  category: "MEDIA CONTENTS",
  member: "우기",
  year: "2021",
  thumbnail: "https://i.ytimg.com/vi/5FjB5L6wZYw/hqdefault.jpg",
  alt: "우기 - 우기 진실공방 ‘큐브 아니었으면 SM 갔다?!’ [#페이스아이디] 선공개 (2021-01-31)",
  title: "우기 진실공방 ‘큐브 아니었으면 SM 갔다?!’ [#페이스아이디] 선공개 (2021-01-31)"
},
{
  link: "https://www.youtube.com/watch?v=JvsYmb8H9YQ",
  category: "MEDIA CONTENTS",
  member: "소연,우기",
  year: "2021",
  thumbnail: "https://i.ytimg.com/vi/JvsYmb8H9YQ/hqdefault.jpg",
  alt: "소연,우기 - (여자)아이들 우기 X 소연 👑 우기 잡으러 온 리더언니의 ㅎㄷㄷ한 예능 참교육😱 | (G)I-DLE YUQI | 런웨이 (LEARN WAY) EP.17 (2021-01-29)",
  title: "(여자)아이들 우기 X 소연 👑 우기 잡으러 온 리더언니의 ㅎㄷㄷ한 예능 참교육😱 | (G)I-DLE YUQI | 런웨이 (LEARN WAY) EP.17 (2021-01-29)"
},
{
  link: "https://www.youtube.com/watch?v=SwZXbGFjnQY",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2021",
  thumbnail: "https://i.ytimg.com/vi/SwZXbGFjnQY/hqdefault.jpg",
  alt: "아이들 - (여자)아이들이 같이 곡 작업을 해보고 싶은 사람은 아이유🎼, 아이돌리그 대기실에서 전해드립니다.｜DOL터뷰 #STATV (2021-01-29)",
  title: "(여자)아이들이 같이 곡 작업을 해보고 싶은 사람은 아이유🎼, 아이돌리그 대기실에서 전해드립니다.｜DOL터뷰 #STATV (2021-01-29)"
},
{
  link: "https://www.youtube.com/watch?v=VvSDq_VagNw",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2021",
  thumbnail: "https://i.ytimg.com/vi/VvSDq_VagNw/hqdefault.jpg",
  alt: "아이들 - [ENG] [아이돌리그] (여자)아이들｜토요일 저녁 8시 공개 (2021-01-29)",
  title: "[ENG] [아이돌리그] (여자)아이들｜토요일 저녁 8시 공개 (2021-01-29)"
},
{
  link: "https://www.youtube.com/watch?v=6yhOsRTmQYg",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2021",
  thumbnail: "https://i.ytimg.com/vi/6yhOsRTmQYg/hqdefault.jpg",
  alt: "아이들 - 🔥화(火花)가 많은 (여자)아이들의 데시벨 파괴 ASMR! [아빠 안 잔다 After_zzZ] (여자)아이들 (2021-01-28)",
  title: "🔥화(火花)가 많은 (여자)아이들의 데시벨 파괴 ASMR! [아빠 안 잔다 After_zzZ] (여자)아이들 (2021-01-28)"
},
{
  link: "https://www.youtube.com/watch?v=zuaLAYrI_yM",
  category: "MEDIA CONTENTS",
  member: "소연",
  year: "2021",
  thumbnail: "https://i.ytimg.com/vi/zuaLAYrI_yM/hqdefault.jpg",
  alt: "소연 - 소연이 폰 혹시 좀비폰…? [#페이스아이디] 비하인드 (2021-01-27)",
  title: "소연이 폰 혹시 좀비폰…? [#페이스아이디] 비하인드 (2021-01-27)"
},
{
  link: "https://www.youtube.com/watch?v=g6yUORLbJIc",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2021",
  thumbnail: "https://i.ytimg.com/vi/g6yUORLbJIc/hqdefault.jpg",
  alt: "아이들 - 서로를 잘 모르는 서 이사와 (여자)아이들,,☆ 아이돌리그에서 친해지길 바라❤️ [아이돌리그] (2021-01-27)",
  title: "서로를 잘 모르는 서 이사와 (여자)아이들,,☆ 아이돌리그에서 친해지길 바라❤️ [아이돌리그] (2021-01-27)"
},
{
  link: "https://www.youtube.com/watch?v=xpMD0r5TACE",
  category: "MEDIA CONTENTS",
  member: "소연",
  year: "2021",
  thumbnail: "https://i.ytimg.com/vi/xpMD0r5TACE/hqdefault.jpg",
  alt: "소연 - 내 주변 음악하는 사람 전부 XXX쓴다? 소연이의 핸폰부심ㅋㅋ [#페이스아이디] (2021-01-25)",
  title: "내 주변 음악하는 사람 전부 XXX쓴다? 소연이의 핸폰부심ㅋㅋ [#페이스아이디] (2021-01-25)"
},
{
  link: "https://www.youtube.com/watch?v=S7mGZWUhiag",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2021",
  thumbnail: "https://i.ytimg.com/vi/S7mGZWUhiag/hqdefault.jpg",
  alt: "아이들 - 무대 스포+이슈토크+우쭈쭈 = (여자)아이들 단톡방에서는 무슨 일이? [#페이스아이디] (2021-01-25)",
  title: "무대 스포+이슈토크+우쭈쭈 = (여자)아이들 단톡방에서는 무슨 일이? [#페이스아이디] (2021-01-25)"
},
{
  link: "https://www.youtube.com/watch?v=llPSv2lQD2I",
  category: "MEDIA CONTENTS",
  member: "소연",
  year: "2021",
  thumbnail: "https://i.ytimg.com/vi/llPSv2lQD2I/hqdefault.jpg",
  alt: "소연 - [팬심토크] 전소연 그녀가 토요미스테리에 나왔다고? 제시카 매우 흥분한 생방 하이라이트 편집본 (2021-01-20)",
  title: "[팬심토크] 전소연 그녀가 토요미스테리에 나왔다고? 제시카 매우 흥분한 생방 하이라이트 편집본 (2021-01-20)"
},
{
  link: "https://www.youtube.com/watch?v=sGbYKS2YjCc",
  category: "MEDIA CONTENTS",
  member: "우기",
  year: "2021",
  thumbnail: "https://i.ytimg.com/vi/sGbYKS2YjCc/hqdefault.jpg",
  alt: "우기 - [스타★봐야지][ENG] 너무 귀여워서 화(火花)나네.. 우기(YUQI)의 귀엽고 야무진 순간들 모음♥ㅣ아는형님ㅣ201031 방송 외 (2021-01-16)",
  title: "[스타★봐야지][ENG] 너무 귀여워서 화(火花)나네.. 우기(YUQI)의 귀엽고 야무진 순간들 모음♥ㅣ아는형님ㅣ201031 방송 외 (2021-01-16)"
},
{
  link: "https://www.youtube.com/watch?v=stVV5UFAwaE",
  category: "MEDIA CONTENTS",
  member: "소연",
  year: "2021",
  thumbnail: "https://i.ytimg.com/vi/stVV5UFAwaE/hqdefault.jpg",
  alt: "소연 - 작사, 작곡, 프로듀싱 완벽 그 자체★ 만능형 아이돌♥ 소연 (ft. 의성어 천재) [유희열의 스케치북/You Heeyeol’s Sketchbook] | KBS 210115 방송 (2021-01-15)",
  title: "작사, 작곡, 프로듀싱 완벽 그 자체★ 만능형 아이돌♥ 소연 (ft. 의성어 천재) [유희열의 스케치북/You Heeyeol’s Sketchbook] | KBS 210115 방송 (2021-01-15)"
},
{
  link: "https://www.youtube.com/watch?v=8I4sIH7eLpM",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2021",
  thumbnail: "https://i.ytimg.com/vi/8I4sIH7eLpM/hqdefault.jpg",
  alt: "아이들 - [Weekly Idol] (여자)아이들의 신곡 ＜화(火花)＞ 탄생 비하인드! l EP.494 (ENG) (2021-01-13)",
  title: "[Weekly Idol] (여자)아이들의 신곡 ＜화(火花)＞ 탄생 비하인드! l EP.494 (ENG) (2021-01-13)"
},
{
  link: "https://www.youtube.com/watch?v=iQwndstgjQE",
  category: "MEDIA CONTENTS",
  member: "소연",
  year: "2020",
  thumbnail: "https://i.ytimg.com/vi/iQwndstgjQE/hqdefault.jpg",
  alt: "소연 - 현주엽과 식성이 똑같은 (여자)아이들 리더 소연★ 채소는 안 먹어요...^^ [사장님 귀는 당나귀 귀/Boss in the Mirror] | KBS 201220 방송 (2020-12-20)",
  title: "현주엽과 식성이 똑같은 (여자)아이들 리더 소연★ 채소는 안 먹어요...^^ [사장님 귀는 당나귀 귀/Boss in the Mirror] | KBS 201220 방송 (2020-12-20)"
},
{
  link: "https://www.youtube.com/watch?v=KhOpiBsBtlU",
  category: "MEDIA CONTENTS",
  member: "미연,우기",
  year: "2020",
  thumbnail: "https://i.ytimg.com/vi/KhOpiBsBtlU/hqdefault.jpg",
  alt: "미연,우기 - (SUBs) (여자)아이들, 활동 이래 최대 위기?! 먹방 중 홍어가 나타났다! | 미연과 우기의 서울 여행 (2020-11-23)",
  title: "(SUBs) (여자)아이들, 활동 이래 최대 위기?! 먹방 중 홍어가 나타났다! | 미연과 우기의 서울 여행 (2020-11-23)"
},
{
  link: "https://www.youtube.com/watch?v=THXd5YqXTEs",
  category: "MEDIA CONTENTS",
  member: "민니,우기",
  year: "2020",
  thumbnail: "https://i.ytimg.com/vi/THXd5YqXTEs/hqdefault.jpg",
  alt: "민니,우기 - (ENG SUB)[PLAY SEOUL / EP.1] (여자)아이들 X HIPSTREET TOUR, 민니 VS 우기 골목대장 쟁탈전 (2020-11-17)",
  title: "(ENG SUB)[PLAY SEOUL / EP.1] (여자)아이들 X HIPSTREET TOUR, 민니 VS 우기 골목대장 쟁탈전 (2020-11-17)"
},
{
  link: "https://www.youtube.com/watch?v=tqgLlNpsvpM",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2020",
  thumbnail: "https://i.ytimg.com/vi/tqgLlNpsvpM/hqdefault.jpg",
  alt: "아이들 - (ENG) ㈜아이돌워크숍 (여자)아이들 1회 I [IDOL WORKSHOP (G)I-DLE EP.01 FULL] (2020-11-10)",
  title: "(ENG) ㈜아이돌워크숍 (여자)아이들 1회 I [IDOL WORKSHOP (G)I-DLE EP.01 FULL] (2020-11-10)"
},
{
  link: "https://www.youtube.com/watch?v=Nb7Vy0wJO-E",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2020",
  thumbnail: "https://i.ytimg.com/vi/Nb7Vy0wJO-E/hqdefault.jpg",
  alt: "아이들 - 휴덕엔딩프로젝트 [큐브통신(All That CUBE] 8회 : (여자)아이들 외국인즈 텐션이 하늘 찔러 지구 뿌셔! (2020-09-13)",
  title: "휴덕엔딩프로젝트 [큐브통신(All That CUBE] 8회 : (여자)아이들 외국인즈 텐션이 하늘 찔러 지구 뿌셔! (2020-09-13)"
},
{
  link: "https://www.youtube.com/watch?v=IyPSDK_Qhd8",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2020",
  thumbnail: "https://i.ytimg.com/vi/IyPSDK_Qhd8/hqdefault.jpg",
  alt: "아이들 - 큐브 소속사 탐방! (여자)아이들 덤디덤디 녹음실 습격해봤습니다🙌 (2020-09-04)",
  title: "큐브 소속사 탐방! (여자)아이들 덤디덤디 녹음실 습격해봤습니다🙌 (2020-09-04)"
},
{
  link: "https://www.youtube.com/watch?v=6cHIz7nGAq0",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2020",
  thumbnail: "https://i.ytimg.com/vi/6cHIz7nGAq0/hqdefault.jpg",
  alt: "아이들 - [니들모해?!] (여자)아이들 (G)I-DLE, 으음음~♥ 20분전에 뭐하니?(영상통화_셀프캠)[NewsenTV] (2020-09-03)",
  title: "[니들모해?!] (여자)아이들 (G)I-DLE, 으음음~♥ 20분전에 뭐하니?(영상통화_셀프캠)[NewsenTV] (2020-09-03)"
},
{
  link: "https://www.youtube.com/watch?v=3XIEZAOlEuk",
  category: "MEDIA CONTENTS",
  member: "소연",
  year: "2020",
  thumbnail: "https://i.ytimg.com/vi/3XIEZAOlEuk/hqdefault.jpg",
  alt: "소연 - [나는 MBTI에 미쳤다] 머릿속에 딱 꽂히는 전소연(Jeon Soyeon)의 MBTI 강의💡 장르만 코미디(justcomedy) 8회 (2020-08-22)",
  title: "[나는 MBTI에 미쳤다] 머릿속에 딱 꽂히는 전소연(Jeon Soyeon)의 MBTI 강의💡 장르만 코미디(justcomedy) 8회 (2020-08-22)"
},
{
  link: "https://www.youtube.com/watch?v=merDpU-rsQA",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2020",
  thumbnail: "https://i.ytimg.com/vi/merDpU-rsQA/hqdefault.jpg",
  alt: "아이들 - [After School Club] (G)I-DLE((여자)아이들) has come back with the summer song☀️DUMDi DUMDi _ Full Episode (2020-08-12)",
  title: "[After School Club] (G)I-DLE((여자)아이들) has come back with the summer song☀️DUMDi DUMDi _ Full Episode (2020-08-12)"
},
{
  link: "https://www.youtube.com/watch?v=GPMvdjNSO-c",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2020",
  thumbnail: "https://i.ytimg.com/vi/GPMvdjNSO-c/hqdefault.jpg",
  alt: "아이들 - 200810 🌼(여자)아이들🌼 이준의 영스트리트 (2020-08-10)",
  title: "200810 🌼(여자)아이들🌼 이준의 영스트리트 (2020-08-10)"
},
{
  link: "https://www.youtube.com/watch?v=NBISLXLJoW0",
  category: "MEDIA CONTENTS",
  member: "미연",
  year: "2020",
  thumbnail: "https://i.ytimg.com/vi/NBISLXLJoW0/hqdefault.jpg",
  alt: "미연 - 휴덕엔딩프로젝트 [큐브통신(All That CUBE] 2회 : (여자)아이들 미연, 코의 각도는 과연?! (2020-08-02)",
  title: "휴덕엔딩프로젝트 [큐브통신(All That CUBE] 2회 : (여자)아이들 미연, 코의 각도는 과연?! (2020-08-02)"
},
{
  link: "https://www.youtube.com/watch?v=ll6tKH9xCGo",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2020",
  thumbnail: "https://i.ytimg.com/vi/ll6tKH9xCGo/hqdefault.jpg",
  alt: "아이들 - [ENG SUB] 승부의 행방이 달린 마지막 한 자리는 과연 누가? [퀴즈 위의 아이돌] 20200727 (2020-07-27)",
  title: "[ENG SUB] 승부의 행방이 달린 마지막 한 자리는 과연 누가? [퀴즈 위의 아이돌] 20200727 (2020-07-27)"
},
{
  link: "https://www.youtube.com/watch?v=EHV16B9aSYA",
  category: "MEDIA CONTENTS",
  member: "우기",
  year: "2020",
  thumbnail: "https://i.ytimg.com/vi/EHV16B9aSYA/hqdefault.jpg",
  alt: "우기 - 더 이상 물러날 곳이 없다! 큐브걸 팀, 출제자 우기! [퀴즈 위의 아이돌] 20200727 (2020-07-27)",
  title: "더 이상 물러날 곳이 없다! 큐브걸 팀, 출제자 우기! [퀴즈 위의 아이돌] 20200727 (2020-07-27)"
},

// 🔽 새로 불러온 11개 항목
{
  link: "https://www.youtube.com/watch?v=SQzo9KQZPvM",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2020",
  thumbnail: "https://i.ytimg.com/vi/SQzo9KQZPvM/hqdefault.jpg",
  alt: "아이들 - (여자)아이들🌋저세상 승낳괴🌋 기네스 도전하다 싸움 날 뻔한 썰 | (G)I-DLE | 끼네스촌 EP.5 | KKINNESS CHALLENGE | Oh my god (2020-03-31)",
  title: "(여자)아이들🌋저세상 승낳괴🌋 기네스 도전하다 싸움 날 뻔한 썰 | (G)I-DLE | 끼네스촌 EP.5 | KKINNESS CHALLENGE | Oh my god (2020-03-31)"
},
{
  link: "https://www.youtube.com/watch?v=TzcF5Nqfldo",
  category: "MEDIA CONTENTS",
  member: "소연",
  year: "2020",
  thumbnail: "https://i.ytimg.com/vi/TzcF5Nqfldo/hqdefault.jpg",
  alt: "소연 - [ENG sub] Do You Know Hiphop? [2회] 솟구치는 러블리함을 지닌 영래퍼! 호치키스, 전소연 200306 EP.2 (2020-03-06)",
  title: "[ENG sub] Do You Know Hiphop? [2회] 솟구치는 러블리함을 지닌 영래퍼! 호치키스, 전소연 200306 EP.2 (2020-03-06)"
},
{
  link: "https://www.youtube.com/watch?v=VZj43uDugjk",
  category: "MEDIA CONTENTS",
  member: "우기",
  year: "2020",
  thumbnail: "https://i.ytimg.com/vi/VZj43uDugjk/hqdefault.jpg",
  alt: "우기 - 독재자가 뭐죠??? 관상부터 똑똑한 우기! 자신감이 그냥 나오는 게 아니었네~ What's a dictator? Yuqi's  physiognomy is clever! [ENG] (2020-02-28)",
  title: "독재자가 뭐죠??? 관상부터 똑똑한 우기! 자신감이 그냥 나오는 게 아니었네~ What's a dictator? Yuqi's  physiognomy is clever! [ENG] (2020-02-28)"
},
{
  link: "https://www.youtube.com/watch?v=9S3sfkfkZN8",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2020",
  thumbnail: "https://i.ytimg.com/vi/9S3sfkfkZN8/hqdefault.jpg",
  alt: "아이들 - 슈수커플의 운명은 이미 정해져 있었다?!!!! 관상으로 알아본 슈수궁합(?) The fate of the ShuSoo had already been decided? [ENG] (2020-02-19)",
  title: "슈수커플의 운명은 이미 정해져 있었다?!!!! 관상으로 알아본 슈수궁합(?) The fate of the ShuSoo had already been decided? [ENG] (2020-02-19)"
},
{
  link: "https://www.youtube.com/watch?v=ryt1MPKzw8s",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2020",
  thumbnail: "https://i.ytimg.com/vi/ryt1MPKzw8s/hqdefault.jpg",
  alt: "아이들 - 이곳은 혼돈의 카오스?! '아이돌 그라운드' (여자)아이들((G)I-DLE) 6편 [ENG] (2020-02-12)",
  title: "이곳은 혼돈의 카오스?! '아이돌 그라운드' (여자)아이들((G)I-DLE) 6편 [ENG] (2020-02-12)"
},
{
  link: "https://www.youtube.com/watch?v=pSnD2hFY_Bo",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2020",
  thumbnail: "https://i.ytimg.com/vi/pSnD2hFY_Bo/hqdefault.jpg",
  alt: "아이들 - '아이돌 그라운드' 비하인드 대방출 리액션캠 (여자)아이들((G)I-DLE) 편 #2 [ENG] (2020-02-06)",
  title: "'아이돌 그라운드' 비하인드 대방출 리액션캠 (여자)아이들((G)I-DLE) 편 #2 [ENG] (2020-02-06)"
},
{
  link: "https://www.youtube.com/watch?v=QHlZ4ZUPwBM",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2020",
  thumbnail: "https://i.ytimg.com/vi/QHlZ4ZUPwBM/hqdefault.jpg",
  alt: "아이들 - '아이돌 그라운드' 비하인드 대방출 리액션캠 (여자)아이들((G)I-DLE) 편 #1 [ENG] (2020-01-29)",
  title: "'아이돌 그라운드' 비하인드 대방출 리액션캠 (여자)아이들((G)I-DLE) 편 #1 [ENG] (2020-01-29)"
},
{
  link: "https://www.youtube.com/watch?v=qJ25SOuYGys",
  category: "MEDIA CONTENTS",
  member: "민니",
  year: "2019",
  thumbnail: "https://i.ytimg.com/vi/qJ25SOuYGys/hqdefault.jpg",
  alt: "민니 - 내 호주머니에 넣어 다니고 싶은 포켓걸 민니 매력 폭발!! 나 죽어,, 적당히 귀여운거 할 줄 모르는구나,,♥ | #다시보는_퀸덤 | #Diggle (2019-12-22)",
  title: "내 호주머니에 넣어 다니고 싶은 포켓걸 민니 매력 폭발!! 나 죽어,, 적당히 귀여운거 할 줄 모르는구나,,♥ | #다시보는_퀸덤 | #Diggle (2019-12-22)"
},
{
  link: "https://www.youtube.com/watch?v=8jDtzYNJQyo",
  category: "MEDIA CONTENTS",
  member: "소연",
  year: "2019",
  thumbnail: "https://i.ytimg.com/vi/8jDtzYNJQyo/hqdefault.jpg",
  alt: "소연 - 소연이 리더인 이유. 너는 계획이 다 있구나 소여나♥ 걸크 뿜뿜 전리더 모먼트 | #다시보는_퀸덤 | #Diggle (2019-12-13)",
  title: "소연이 리더인 이유. 너는 계획이 다 있구나 소여나♥ 걸크 뿜뿜 전리더 모먼트 | #다시보는_퀸덤 | #Diggle (2019-12-13)"
},
{
  link: "https://www.youtube.com/watch?v=utlgTmcA_fY",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2019",
  thumbnail: "https://i.ytimg.com/vi/utlgTmcA_fY/hqdefault.jpg",
  alt: "아이들 - 한국어 패치 평균 4년차 (여자)아이들에게 과외를 받아보았다 [내 쌤은 동년배] EP.7 (2019-12-05)",
  title: "한국어 패치 평균 4년차 (여자)아이들에게 과외를 받아보았다 [내 쌤은 동년배] EP.7 (2019-12-05)"
},
{
  link: "https://www.youtube.com/watch?v=hUykIdD4pQM",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2019",
  thumbnail: "https://i.ytimg.com/vi/hUykIdD4pQM/hqdefault.jpg",
  alt: "아이들 - [퀸' Story] (여자)아이들 'LION' @ 퀸덤 FINAL 경연 (2019-11-01)",
  title: "[퀸' Story] (여자)아이들 'LION' @ 퀸덤 FINAL 경연 (2019-11-01)"
},

// 🔽 새로 불러온 39개 항목
{
  link: "https://www.youtube.com/watch?v=rUi9Z8ZaF-A",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2020",
  thumbnail: "https://i.ytimg.com/vi/rUi9Z8ZaF-A/hqdefault.jpg",
  alt: "아이들 - Watch how wild it gets when (G)I-DLE plays soccer with a fan ⚽️ㅣ82minutes (2020-07-08)",
  title: "Watch how wild it gets when (G)I-DLE plays soccer with a fan ⚽️ㅣ82minutes (2020-07-08)"
},
{
  link: "https://www.youtube.com/watch?v=1j6Cl2hH2yY",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2020",
  thumbnail: "https://i.ytimg.com/vi/1j6Cl2hH2yY/hqdefault.jpg",
  alt: "아이들 - “폰 번호 뭐야?” 아이돌들이 만난지 하루만에 번호따는 법  | WJSN | (G)I-DLE | 오늘부터 1일♥ | The First Date (2020-06-19)",
  title: "“폰 번호 뭐야?” 아이돌들이 만난지 하루만에 번호따는 법  | WJSN | (G)I-DLE | 오늘부터 1일♥ | The First Date (2020-06-19)"
},
{
  link: "https://www.youtube.com/watch?v=CWcAfbBhP_g",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2020",
  thumbnail: "https://i.ytimg.com/vi/CWcAfbBhP_g/hqdefault.jpg",
  alt: "아이들 - 꼰대 테스트 결과에 충격 제대로 받아버린 (여자) 아이들💖(여자)아이들편 [인생주식회사] EP.1 (2020-06-16)",
  title: "꼰대 테스트 결과에 충격 제대로 받아버린 (여자) 아이들💖(여자)아이들편 [인생주식회사] EP.1 (2020-06-16)"
},
{
  link: "https://www.youtube.com/watch?v=H6FAzIgOYH0",
  category: "MEDIA CONTENTS",
  member: "우기",
  year: "2020",
  thumbnail: "https://i.ytimg.com/vi/H6FAzIgOYH0/hqdefault.jpg",
  alt: "우기 - 거친 우기와 불안한 엑시와 그걸 지켜보는 여름 이건 아마도 전쟁 같은 우정 | WJSN | (G)I-DLE | 오늘부터 1일♥ | The First Date (2020-06-12)",
  title: "거친 우기와 불안한 엑시와 그걸 지켜보는 여름 이건 아마도 전쟁 같은 우정 | WJSN | (G)I-DLE | 오늘부터 1일♥ | The First Date (2020-06-12)"
},
{
  link: "https://www.youtube.com/watch?v=q_QJtA-D9BU",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2020",
  thumbnail: "https://i.ytimg.com/vi/q_QJtA-D9BU/hqdefault.jpg",
  alt: "아이들 - 대기실 셀프CAM (여자)아이들 편_아이들의 셀프캠｜Waiting Room Self-CAM with (G)I-DLE [ENG] (2020-06-11)",
  title: "대기실 셀프CAM (여자)아이들 편_아이들의 셀프캠｜Waiting Room Self-CAM with (G)I-DLE [ENG] (2020-06-11)"
},
{
  link: "https://www.youtube.com/watch?v=ZVtoH3tZtlE",
  category: "MEDIA CONTENTS",
  member: "미연",
  year: "2020",
  thumbnail: "https://i.ytimg.com/vi/ZVtoH3tZtlE/hqdefault.jpg",
  alt: "미연 - (여자)아이들 미연과 이어줌!｜(G)I-DLE MIYEON's EARZOOM! (2020-06-09)",
  title: "(여자)아이들 미연과 이어줌!｜(G)I-DLE MIYEON's EARZOOM! (2020-06-09)"
},
{
  link: "https://www.youtube.com/watch?v=IY8V6gQtwuQ",
  category: "MEDIA CONTENTS",
  member: "우기",
  year: "2020",
  thumbnail: "https://i.ytimg.com/vi/IY8V6gQtwuQ/hqdefault.jpg",
  alt: "우기 - 여돌판 부부의 세계 (여자)아이들 우기가 우주소녀 여름을 버리고 엑시와 바람핀 사연 | WJSN | (G)I-DLE | 오늘부터 1일♥ | The First Date (2020-06-05)",
  title: "여돌판 부부의 세계 (여자)아이들 우기가 우주소녀 여름을 버리고 엑시와 바람핀 사연 | WJSN | (G)I-DLE | 오늘부터 1일♥ | The First Date (2020-06-05)"
},
{
  link: "https://www.youtube.com/watch?v=zI7qONiJv9Q",
  category: "MEDIA CONTENTS",
  member: "민니",
  year: "2020",
  thumbnail: "https://i.ytimg.com/vi/zI7qONiJv9Q/hqdefault.jpg",
  alt: "민니 - (여자)아이들 민니와 이어줌!｜(G)I-DLE MINNIE's EARZOOM! (2020-06-05)",
  title: "(여자)아이들 민니와 이어줌!｜(G)I-DLE MINNIE's EARZOOM! (2020-06-05)"
},
{
  link: "https://www.youtube.com/watch?v=XFRadoCTP2s",
  category: "MEDIA CONTENTS",
  member: "소연",
  year: "2020",
  thumbnail: "https://i.ytimg.com/vi/XFRadoCTP2s/hqdefault.jpg",
  alt: "소연 - (여자)아이들 소연이와 이어줌!｜(G)I-DLE SOYEON's EARZOOM! (2020-06-03)",
  title: "(여자)아이들 소연이와 이어줌!｜(G)I-DLE SOYEON's EARZOOM! (2020-06-03)"
},
{
  link: "https://www.youtube.com/watch?v=fCRNiRCL4aU",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2020",
  thumbnail: "https://i.ytimg.com/vi/fCRNiRCL4aU/hqdefault.jpg",
  alt: "아이들 - 둠칫 둠칫 랜덤 댄스 - (여자)아이들((G)I-DLE) 편｜Doomchit Doomchit Random Dance - (G)I-DLE [ENG] (2020-06-01)",
  title: "둠칫 둠칫 랜덤 댄스 - (여자)아이들((G)I-DLE) 편｜Doomchit Doomchit Random Dance - (G)I-DLE [ENG] (2020-06-01)"
},
{
  link: "https://www.youtube.com/watch?v=ABUlf7ZWWM4",
  category: "MEDIA CONTENTS",
  member: "우기",
  year: "2020",
  thumbnail: "https://i.ytimg.com/vi/ABUlf7ZWWM4/hqdefault.jpg",
  alt: "우기 - 우주소녀 엑시도 당황한 핵인싸 (여자)아이들 우기의 찐텐션은 과연? | WJSN | (G)I-DLE | 오늘부터 1일♥ | The First Date (2020-05-29)",
  title: "우주소녀 엑시도 당황한 핵인싸 (여자)아이들 우기의 찐텐션은 과연? | WJSN | (G)I-DLE | 오늘부터 1일♥ | The First Date (2020-05-29)"
},
{
  link: "https://www.youtube.com/watch?v=zXaZlvOAeJw",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2020",
  thumbnail: "https://i.ytimg.com/vi/zXaZlvOAeJw/hqdefault.jpg",
  alt: "아이들 - '아이돌 그라운드' 비하인드 대방출 리액션캠 (여자)아이들((G)I-DLE) 2편｜'Idol Ground' behind ReactionCam with (G)I-DLE #2[ENG] (2020-05-29)",
  title: "'아이돌 그라운드' 비하인드 대방출 리액션캠 (여자)아이들((G)I-DLE) 2편｜'Idol Ground' behind ReactionCam with (G)I-DLE #2[ENG] (2020-05-29)"
},
{
  link: "https://www.youtube.com/watch?v=KD5Ca1DTGqU",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2020",
  thumbnail: "https://i.ytimg.com/vi/KD5Ca1DTGqU/hqdefault.jpg",
  alt: "아이들 - (ENG/JPN) [내친방] 최초공개 특집?! (여자)아이들((G)I-DLE) '나비보벳따우' MV & 땡지×솔라(Solar) '뱉어 챌린지'┃#내친구가방송국에산다┃EP.10 (2020-05-14)",
  title: "(ENG/JPN) [내친방] 최초공개 특집?! (여자)아이들((G)I-DLE) '나비보벳따우' MV & 땡지×솔라(Solar) '뱉어 챌린지'┃#내친구가방송국에산다┃EP.10 (2020-05-14)"
},
{
  link: "https://www.youtube.com/watch?v=IvCgRVTDMeA",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2020",
  thumbnail: "https://i.ytimg.com/vi/IvCgRVTDMeA/hqdefault.jpg",
  alt: "아이들 - '아이돌 그라운드' 비하인드 대방출 리액션캠 (여자)아이들((G)I-DLE) 1편｜'Idol Ground' behind ReactionCam with (G)I-DLE #1[ENG] (2020-05-13)",
  title: "'아이돌 그라운드' 비하인드 대방출 리액션캠 (여자)아이들((G)I-DLE) 1편｜'Idol Ground' behind ReactionCam with (G)I-DLE #1[ENG] (2020-05-13)"
},
{
  link: "https://www.youtube.com/watch?v=ohV93QEgOQE",
  category: "MEDIA CONTENTS",
  member: "민니,우기",
  year: "2020",
  thumbnail: "https://i.ytimg.com/vi/ohV93QEgOQE/hqdefault.jpg",
  alt: "민니,우기 - [별의 별 사람] (여자)아이들 매니저가 개인카드 꺼낸.ssul! 민니&우기&매니저의 가족 모먼트❣ (ENG SUB) (2020-05-07)",
  title: "[별의 별 사람] (여자)아이들 매니저가 개인카드 꺼낸.ssul! 민니&우기&매니저의 가족 모먼트❣ (ENG SUB) (2020-05-07)"
},
{
  link: "https://www.youtube.com/watch?v=Sw59kmzuzSQ",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2020",
  thumbnail: "https://i.ytimg.com/vi/Sw59kmzuzSQ/hqdefault.jpg",
  alt: "아이들 - (ENG/JPN) [내친방] 역대급 커버! '(여자)아이들((G)I-DLE) 나비보벳따우' 녹음 현장 (feat.땡지의 감독 도전기)┃#내친구가방송국에산다┃EP.9 (2020-05-07)",
  title: "(ENG/JPN) [내친방] 역대급 커버! '(여자)아이들((G)I-DLE) 나비보벳따우' 녹음 현장 (feat.땡지의 감독 도전기)┃#내친구가방송국에산다┃EP.9 (2020-05-07)"
},
{
  link: "https://www.youtube.com/watch?v=Dy94oGZueUs",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2020",
  thumbnail: "https://i.ytimg.com/vi/Dy94oGZueUs/hqdefault.jpg",
  alt: "아이들 - (G)I-DLE, HAPPY STAN LIVE Full Version [THE SHOW 200428] (2020-04-28)",
  title: "(G)I-DLE, HAPPY STAN LIVE Full Version [THE SHOW 200428] (2020-04-28)"
},
{
  link: "https://www.youtube.com/watch?v=hrLlVxpbGlI",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2020",
  thumbnail: "https://i.ytimg.com/vi/hrLlVxpbGlI/hqdefault.jpg",
  alt: "아이들 - 이멤버 리멤버!! (여자)아이들 1탄 몰아보기 with 쿠키영상 (2020-04-28)",
  title: "이멤버 리멤버!! (여자)아이들 1탄 몰아보기 with 쿠키영상 (2020-04-28)"
},
{
  link: "https://www.youtube.com/watch?v=NRQyPvS1aJI",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2020",
  thumbnail: "https://i.ytimg.com/vi/NRQyPvS1aJI/hqdefault.jpg",
  alt: "아이들 - (ENG SUB)《신동가요 ‘Oh my god’ (여자)아이들》 / 《Shindong Gayo - (G)I-DLE of Oh my god》 (2020-04-25)",
  title: "(ENG SUB)《신동가요 ‘Oh my god’ (여자)아이들》 / 《Shindong Gayo - (G)I-DLE of Oh my god》 (2020-04-25)"
},
{
  link: "https://www.youtube.com/watch?v=lXbyVw6F1dg",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2020",
  thumbnail: "https://i.ytimg.com/vi/lXbyVw6F1dg/hqdefault.jpg",
  alt: "아이들 - *SUB* (G)I-DLE's Legendary Online Concert 2020 | (여자)아이들ㅣSafe House Concert (2020-04-25)",
  title: "*SUB* (G)I-DLE's Legendary Online Concert 2020 | (여자)아이들ㅣSafe House Concert (2020-04-25)"
},
{
  link: "https://www.youtube.com/watch?v=Fd6cxqUkpfE",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2020",
  thumbnail: "https://i.ytimg.com/vi/Fd6cxqUkpfE/hqdefault.jpg",
  alt: "아이들 - [ENG SUB] 퀸의 세 가지 조건 #힘 #참을성 그리고 #담력 [보았다 ; BOATTA 8화 (G)I-DLE] (2020-04-18)",
  title: "[ENG SUB] 퀸의 세 가지 조건 #힘 #참을성 그리고 #담력 [보았다 ; BOATTA 8화 (G)I-DLE] (2020-04-18)"
},
{
  link: "https://www.youtube.com/watch?v=ETfmqpZvn_s",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2020",
  thumbnail: "https://i.ytimg.com/vi/ETfmqpZvn_s/hqdefault.jpg",
  alt: "아이들 - [골라봐야지] (여자)아이들((G)I-DLE) ♥보는 순간 입덕♥ 예능 활약&댄스 모음 #아는형님 #슈가맨3 #JTBC봐야지 (2020-04-17)",
  title: "[골라봐야지] (여자)아이들((G)I-DLE) ♥보는 순간 입덕♥ 예능 활약&댄스 모음 #아는형님 #슈가맨3 #JTBC봐야지 (2020-04-17)"
},
{
  link: "https://www.youtube.com/watch?v=FO8lvO0lfyk",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2020",
  thumbnail: "https://i.ytimg.com/vi/FO8lvO0lfyk/hqdefault.jpg",
  alt: "아이들 - ['MCD MV' (G)I-DLE - Super Star] KPOP TV Show | M COUNTDOWN 200409 EP.660 (2020-04-09)",
  title: "['MCD MV' (G)I-DLE - Super Star] KPOP TV Show | M COUNTDOWN 200409 EP.660 (2020-04-09)"
},
{
  link: "https://www.youtube.com/watch?v=_iT1h_5Vc-Y",
  category: "MEDIA CONTENTS",
  member: "슈화",
  year: "2020",
  thumbnail: "https://i.ytimg.com/vi/_iT1h_5Vc-Y/hqdefault.jpg",
  alt: "슈화 - (여자)아이들((G)I-DLE) 수진(SOOJIN)이 게임 도중 슈화(Shuhua)에게 뽀뽀를 한 이유는? [TD습격영상] (2020-04-09)",
  title: "(여자)아이들((G)I-DLE) 수진(SOOJIN)이 게임 도중 슈화(Shuhua)에게 뽀뽀를 한 이유는? [TD습격영상] (2020-04-09)"
},
{
  link: "https://www.youtube.com/watch?v=_lyjv6ci1U0",
  category: "MEDIA CONTENTS",
  member: "우기",
  year: "2020",
  thumbnail: "https://i.ytimg.com/vi/_lyjv6ci1U0/hqdefault.jpg",
  alt: "우기 - [Episode.3](G)I-DLE Comeback: Concepts, Songs, and more! What made Yuqi cry?! (갑자기 눈물이 터진 우기!) (2020-04-08)",
  title: "[Episode.3](G)I-DLE Comeback: Concepts, Songs, and more! What made Yuqi cry?! (갑자기 눈물이 터진 우기!) (2020-04-08)"
},
{
  link: "https://www.youtube.com/watch?v=kxt5H9yx25w",
  category: "MEDIA CONTENTS",
  member: "소연",
  year: "2020",
  thumbnail: "https://i.ytimg.com/vi/kxt5H9yx25w/hqdefault.jpg",
  alt: "소연 - [Episode.2] (G)I-DLE Takes Fan Requests : 2PM's 'My House' Dance Cover (소연ver. 우리집 (이.뤘.다)) (2020-04-08)",
  title: "[Episode.2] (G)I-DLE Takes Fan Requests : 2PM's 'My House' Dance Cover (소연ver. 우리집 (이.뤘.다)) (2020-04-08)"
},
{
  link: "https://www.youtube.com/watch?v=7h8vHv3pqq0",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2020",
  thumbnail: "https://i.ytimg.com/vi/7h8vHv3pqq0/hqdefault.jpg",
  alt: "아이들 - [Episode.1] Do the Members of (G)I-DLE Even Know Each Other?! (아이들 팀워크에 위기가?!) (2020-04-08)",
  title: "[Episode.1] Do the Members of (G)I-DLE Even Know Each Other?! (아이들 팀워크에 위기가?!) (2020-04-08)"
},
{
  link: "https://www.youtube.com/watch?v=YC-aIbhxpu0",
  category: "MEDIA CONTENTS",
  member: "민니,미연,우기",
  year: "2020",
  thumbnail: "https://i.ytimg.com/vi/YC-aIbhxpu0/hqdefault.jpg",
  alt: "민니,미연,우기 - (여자)아이들 우기와 민니((G)I-DLE YUQI MINNIE)가 상황극을 하게 된 사연은? (Feat.미연(MIYEON) 엽기 셀카) [TD습격영상] (2020-04-08)",
  title: "(여자)아이들 우기와 민니((G)I-DLE YUQI MINNIE)가 상황극을 하게 된 사연은? (Feat.미연(MIYEON) 엽기 셀카) [TD습격영상] (2020-04-08)"
},
{
  link: "https://www.youtube.com/watch?v=1-3r-7CGOcY",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2020",
  thumbnail: "https://i.ytimg.com/vi/1-3r-7CGOcY/hqdefault.jpg",
  alt: "아이들 - (여자)아이들 신기록👑 플렉스 한 현장! (입.틀.막🙊) | (G)I-DLE | 끼네스촌 EP.4 | KKINNESS CHALLENGE | Oh my god (2020-03-24)",
  title: "(여자)아이들 신기록👑 플렉스 한 현장! (입.틀.막🙊) | (G)I-DLE | 끼네스촌 EP.4 | KKINNESS CHALLENGE | Oh my god (2020-03-24)"
},
{
  link: "https://www.youtube.com/watch?v=N6tS4_JSG3s",
  category: "MEDIA CONTENTS",
  member: "소연",
  year: "2020",
  thumbnail: "https://i.ytimg.com/vi/N6tS4_JSG3s/hqdefault.jpg",
  alt: "소연 - [ENG sub] Do You Know Hiphop? [1회] 아재래퍼&영래퍼의 쉽지않은 첫만남! (feat.전소연) 200228 EP.1 (2020-02-28)",
  title: "[ENG sub] Do You Know Hiphop? [1회] 아재래퍼&영래퍼의 쉽지않은 첫만남! (feat.전소연) 200228 EP.1 (2020-02-28)"
},
{
  link: "https://www.youtube.com/watch?v=OzEo_nzuf9Y",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2020",
  thumbnail: "https://i.ytimg.com/vi/OzEo_nzuf9Y/hqdefault.jpg",
  alt: "아이들 - 수진이 눈물점, 빼야 하나요......? 네버랜드 우는 소리가 여기까지 들리는데ㅠㅠ Do I have to get rid of the mole under my eyes? [ENG] (2020-02-26)",
  title: "수진이 눈물점, 빼야 하나요......? 네버랜드 우는 소리가 여기까지 들리는데ㅠㅠ Do I have to get rid of the mole under my eyes? [ENG] (2020-02-26)"
},
{
  link: "https://www.youtube.com/watch?v=e5vKoP2oXcg",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2020",
  thumbnail: "https://i.ytimg.com/vi/e5vKoP2oXcg/hqdefault.jpg",
  alt: "아이들 - 둠칫 둠칫 랜덤 댄스 세로캠 - (여자)아이들((G)I-DLE) 편｜Doomchit Doomchit Random Dance vertical cam - (G)I-DLE (2020-02-16)",
  title: "둠칫 둠칫 랜덤 댄스 세로캠 - (여자)아이들((G)I-DLE) 편｜Doomchit Doomchit Random Dance vertical cam - (G)I-DLE (2020-02-16)"
},
{
  link: "https://www.youtube.com/watch?v=fgUX2APOo4E",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2020",
  thumbnail: "https://i.ytimg.com/vi/fgUX2APOo4E/hqdefault.jpg",
  alt: "아이들 - '아이돌 그라운드' 비하인드 대방출 리액션캠 (여자)아이들((G)I-DLE) 편 #3 [ENG] (2020-02-09)",
  title: "'아이돌 그라운드' 비하인드 대방출 리액션캠 (여자)아이들((G)I-DLE) 편 #3 [ENG] (2020-02-09)"
},
{
  link: "https://www.youtube.com/watch?v=CU4A9WmzbAg",
  category: "MEDIA CONTENTS",
  member: "우기,슈화",
  year: "2020",
  thumbnail: "https://i.ytimg.com/vi/CU4A9WmzbAg/hqdefault.jpg",
  alt: "우기,슈화 - [스페셜] (여자)아이들 한국어 서열이 '우기＞수진=슈화'람서요? ★뽀시래기들의 취업 상담실★ 아는 형님[Knowing bros] (2020-02-01)",
  title: "[스페셜] (여자)아이들 한국어 서열이 '우기＞수진=슈화'람서요? ★뽀시래기들의 취업 상담실★ 아는 형님[Knowing bros] (2020-02-01)"
},
{
  link: "https://www.youtube.com/watch?v=1DcyDax98S8",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2019",
  thumbnail: "https://i.ytimg.com/vi/1DcyDax98S8/hqdefault.jpg",
  alt: "아이들 - 오디오 빌 틈 없이 하이텐션 유지하는 '서포터즈'팀♥ 워크숍이 아니라 수학여행 가는 여고생들 같아ㅋㅋㅋ | #다시보는_퀸덤 | #Diggle (2019-12-31)",
  title: "오디오 빌 틈 없이 하이텐션 유지하는 '서포터즈'팀♥ 워크숍이 아니라 수학여행 가는 여고생들 같아ㅋㅋㅋ | #다시보는_퀸덤 | #Diggle (2019-12-31)"
},
{
  link: "https://www.youtube.com/watch?v=ToCJp1IIHzk",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2019",
  thumbnail: "https://i.ytimg.com/vi/ToCJp1IIHzk/hqdefault.jpg",
  alt: "아이들 - (여자)아이들 덕질포인트 모음♥ 무대랑 갭차이 넘나 매력적ㅠ 어쩜 이리 귀엽고 사랑스러울까,, | #다시보는_퀸덤 | #Diggle (2019-12-14)",
  title: "(여자)아이들 덕질포인트 모음♥ 무대랑 갭차이 넘나 매력적ㅠ 어쩜 이리 귀엽고 사랑스러울까,, | #다시보는_퀸덤 | #Diggle (2019-12-14)"
},
{
  link: "https://www.youtube.com/watch?v=3V-_py3pZVY",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2019",
  thumbnail: "https://i.ytimg.com/vi/3V-_py3pZVY/hqdefault.jpg",
  alt: "아이들 - 누구와의 컴피티션? 출연진들 공개할 때마다 격한 반응♥ 한 명씩 리액션 보려면 50번은 돌려봐야지 헤헿 | #다시보는_퀸덤 | #Diggle (2019-12-13)",
  title: "누구와의 컴피티션? 출연진들 공개할 때마다 격한 반응♥ 한 명씩 리액션 보려면 50번은 돌려봐야지 헤헿 | #다시보는_퀸덤 | #Diggle (2019-12-13)"
},
{
  link: "https://www.youtube.com/watch?v=1yJfSk7xgO4",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2019",
  thumbnail: "https://i.ytimg.com/vi/1yJfSk7xgO4/hqdefault.jpg",
  alt: "아이들 - \"대박ㅇ0ㅇ!\" (여자)아이들 퀸덤 리액션 모음 ((G)I-DLE Queendom Reaction) (2019-11-06)",
  title: "\"대박ㅇ0ㅇ!\" (여자)아이들 퀸덤 리액션 모음 ((G)I-DLE Queendom Reaction) (2019-11-06)"
},
{
  link: "https://www.youtube.com/watch?v=MzmoRoJ1CZo",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2019",
  thumbnail: "https://i.ytimg.com/vi/MzmoRoJ1CZo/hqdefault.jpg",
  alt: "아이들 - [ENG sub] [비하인드] 표정 천재★수진ㅣ(여자)아이들 리허설 컴백전쟁 : 퀸덤 9화 (2019-10-29)",
  title: "[ENG sub] [비하인드] 표정 천재★수진ㅣ(여자)아이들 리허설 컴백전쟁 : 퀸덤 9화 (2019-10-29)"
},

// 🔽 새로 불러온 37개 항목
{
  link: "https://www.youtube.com/watch?v=AUvnvZdTyH4",
  category: "MEDIA CONTENTS",
  member: "우기",
  year: "2019",
  thumbnail: "https://i.ytimg.com/vi/AUvnvZdTyH4/hqdefault.jpg",
  alt: "우기 - [ENG sub] [비하인드] 열정 만수르 우기ㅣ(여자)아이들 대기실 컴백전쟁 : 퀸덤 9화 (2019-10-29)",
  title: "[ENG sub] [비하인드] 열정 만수르 우기ㅣ(여자)아이들 대기실 컴백전쟁 : 퀸덤 9화 (2019-10-29)"
},
{
  link: "https://www.youtube.com/watch?v=uaqNcr1UH5A",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2019",
  thumbnail: "https://i.ytimg.com/vi/uaqNcr1UH5A/hqdefault.jpg",
  alt: "아이들 - [Full ver.] (G)I-DLE, (여자)아이들 [스쿨어택 2019] (2019-10-28)",
  title: "[Full ver.] (G)I-DLE, (여자)아이들 [스쿨어택 2019] (2019-10-28)"
},
{
  link: "https://www.youtube.com/watch?v=hWtqH3i3QFo",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2019",
  thumbnail: "https://i.ytimg.com/vi/hWtqH3i3QFo/hqdefault.jpg",
  alt: "아이들 - [뽀짝포착] 천재돌 (여자)아이들의 귀염뽀짝 리허설 현장! / (여자)아이들 IDOL RADIO 비하인드 / (G)I-DLE IDOL RADIO BEHIND (2019-10-28)",
  title: "[뽀짝포착] 천재돌 (여자)아이들의 귀염뽀짝 리허설 현장! / (여자)아이들 IDOL RADIO 비하인드 / (G)I-DLE IDOL RADIO BEHIND (2019-10-28)"
},
{
  link: "https://www.youtube.com/watch?v=HTCOti9KqYE",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2019",
  thumbnail: "https://i.ytimg.com/vi/HTCOti9KqYE/hqdefault.jpg",
  alt: "아이들 - [ENG sub] [비하인드] 이상적인(?!) 키 차이ㅣ아아 리허설 컴백전쟁 : 퀸덤 9화 (2019-10-28)",
  title: "[ENG sub] [비하인드] 이상적인(?!) 키 차이ㅣ아아 리허설 컴백전쟁 : 퀸덤 9화 (2019-10-28)"
},
{
  link: "https://www.youtube.com/watch?v=mP71e4hFfL0",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2019",
  thumbnail: "https://i.ytimg.com/vi/mP71e4hFfL0/hqdefault.jpg",
  alt: "아이들 - [K-LOG] (여자)아이들((G)I-DLE) 차 뽑았다 널 데리러가 🚗 | Ep.1 @KCON19TH (ENG SUB) (2019-10-25)",
  title: "[K-LOG] (여자)아이들((G)I-DLE) 차 뽑았다 널 데리러가 🚗 | Ep.1 @KCON19TH (ENG SUB) (2019-10-25)"
},
{
  link: "https://www.youtube.com/watch?v=gNX2lU_ub4c",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2019",
  thumbnail: "https://i.ytimg.com/vi/gNX2lU_ub4c/hqdefault.jpg",
  alt: "아이들 - [INA SUB] [퀸' Story] (여자)아이들 '싫다고 말해(Nightmare Ver.)' @퀸덤 3차 R2 경연 (INA SUB) (2019-10-18)",
  title: "[INA SUB] [퀸' Story] (여자)아이들 '싫다고 말해(Nightmare Ver.)' @퀸덤 3차 R2 경연 (INA SUB) (2019-10-18)"
},
{
  link: "https://www.youtube.com/watch?v=z1N8Pxf6ACw",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2019",
  thumbnail: "https://i.ytimg.com/vi/z1N8Pxf6ACw/hqdefault.jpg",
  alt: "아이들 - [퀸' Story] 식스퍼즐 단체 퍼포먼스'친절한 금자씨+Senorita+Strip+Smooth Criminal+두 개의 달+Power'@퀸덤 3차 R1 경연 (2019-10-18)",
  title: "[퀸' Story] 식스퍼즐 단체 퍼포먼스'친절한 금자씨+Senorita+Strip+Smooth Criminal+두 개의 달+Power'@퀸덤 3차 R1 경연 (2019-10-18)"
},
{
  link: "https://www.youtube.com/watch?v=CL3Mi0MAvkQ",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2019",
  thumbnail: "https://i.ytimg.com/vi/CL3Mi0MAvkQ/hqdefault.jpg",
  alt: "아이들 - [퀸' Story] 식스퍼즐 개인 퍼포먼스 '친절한 금자씨+Senorita+Strip+Smooth Criminal+두 개의 달+Power' @퀸덤 3차 R1 경연 (2019-10-18)",
  title: "[퀸' Story] 식스퍼즐 개인 퍼포먼스 '친절한 금자씨+Senorita+Strip+Smooth Criminal+두 개의 달+Power' @퀸덤 3차 R1 경연 (2019-10-18)"
},
{
  link: "https://www.youtube.com/watch?v=aMc-0OiKawY",
  category: "MEDIA CONTENTS",
  member: "민니",
  year: "2019",
  thumbnail: "https://i.ytimg.com/vi/aMc-0OiKawY/hqdefault.jpg",
  alt: "민니 - [퀸' Story] 혜정&민니 'instagram' @퀸덤 3차 R1 경연 (2019-10-18)",
  title: "[퀸' Story] 혜정&민니 'instagram' @퀸덤 3차 R1 경연 (2019-10-18)"
},
{
  link: "https://www.youtube.com/watch?v=ciHOdUf-X5U",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2019",
  thumbnail: "https://i.ytimg.com/vi/ciHOdUf-X5U/hqdefault.jpg",
  alt: "아이들 - [ENG sub] [8회] '순위에 연연하지 말려무나' 보컬 유닛 결과 공개! 컴백전쟁 : 퀸덤 8화 (2019-10-17)",
  title: "[ENG sub] [8회] '순위에 연연하지 말려무나' 보컬 유닛 결과 공개! 컴백전쟁 : 퀸덤 8화 (2019-10-17)"
},
{
  link: "https://www.youtube.com/watch?v=76KUkEB3Z1U",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2019",
  thumbnail: "https://i.ytimg.com/vi/76KUkEB3Z1U/hqdefault.jpg",
  alt: "아이들 - [퀸' Story] (여자)아이들 'Fire' @퀸덤 2차 경연(A Queen's Story :  (G)I-DLE 'Fire' @Queendom 2nd Battle) (2019-10-17)",
  title: "[퀸' Story] (여자)아이들 'Fire' @퀸덤 2차 경연(A Queen's Story :  (G)I-DLE 'Fire' @Queendom 2nd Battle) (2019-10-17)"
},
{
  link: "https://www.youtube.com/watch?v=gFAGMkm3XIY",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2019",
  thumbnail: "https://i.ytimg.com/vi/gFAGMkm3XIY/hqdefault.jpg",
  alt: "아이들 - [퀸' Story] (여자)아이들 'LATATA' @퀸덤 1차 경연(A Queen's Story : (G)I-DLE 'LATATA' @Queendom 1st Battle) (2019-10-17)",
  title: "[퀸' Story] (여자)아이들 'LATATA' @퀸덤 1차 경연(A Queen's Story : (G)I-DLE 'LATATA' @Queendom 1st Battle) (2019-10-17)"
},
{
  link: "https://www.youtube.com/watch?v=dW9wTXpqDUk",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2019",
  thumbnail: "https://i.ytimg.com/vi/dW9wTXpqDUk/hqdefault.jpg",
  alt: "아이들 - [BEHIND THE SCENES] (G)I-DLE QUEENDOM | [비하인드] (여자)아이들 퀸덤 (2019-09-23)",
  title: "[BEHIND THE SCENES] (G)I-DLE QUEENDOM | [비하인드] (여자)아이들 퀸덤 (2019-09-23)"
},
{
  link: "https://www.youtube.com/watch?v=Cvtny6UdSNQ",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2019",
  thumbnail: "https://i.ytimg.com/vi/Cvtny6UdSNQ/hqdefault.jpg",
  alt: "아이들 - [ENG sub] [비하인드] 네버랜드 임플란트행ㅣ(여자)아이들 리허설 컴백전쟁 : 퀸덤 4화 (2019-09-23)",
  title: "[ENG sub] [비하인드] 네버랜드 임플란트행ㅣ(여자)아이들 리허설 컴백전쟁 : 퀸덤 4화 (2019-09-23)"
},
{
  link: "https://www.youtube.com/watch?v=m2rOsVEoFp0",
  category: "MEDIA CONTENTS",
  member: "소연",
  year: "2019",
  thumbnail: "https://i.ytimg.com/vi/m2rOsVEoFp0/hqdefault.jpg",
  alt: "소연 - [ENG sub] [비하인드] 소연이 생일 축하해요♥ㅣ(여자)아이들 대기실 컴백전쟁 : 퀸덤 4화 (2019-09-23)",
  title: "[ENG sub] [비하인드] 소연이 생일 축하해요♥ㅣ(여자)아이들 대기실 컴백전쟁 : 퀸덤 4화 (2019-09-23)"
},
{
  link: "https://www.youtube.com/watch?v=i_9gUh6KeVM",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2019",
  thumbnail: "https://i.ytimg.com/vi/i_9gUh6KeVM/hqdefault.jpg",
  alt: "아이들 - [ENG sub] [비하인드] 나에게 빠지도록♥ㅣ(여자)아이들 리허설 컴백전쟁 : 퀸덤 2화 (2019-09-10)",
  title: "[ENG sub] [비하인드] 나에게 빠지도록♥ㅣ(여자)아이들 리허설 컴백전쟁 : 퀸덤 2화 (2019-09-10)"
},
{
  link: "https://www.youtube.com/watch?v=aRz2zt-nDOI",
  category: "MEDIA CONTENTS",
  member: "우기",
  year: "2019",
  thumbnail: "https://i.ytimg.com/vi/aRz2zt-nDOI/hqdefault.jpg",
  alt: "우기 - [ENG sub] [비하인드] 본격!우기 꿈해몽 타임ㅣ(여자)아이들 대기실 컴백전쟁 : 퀸덤 2화 (2019-09-10)",
  title: "[ENG sub] [비하인드] 본격!우기 꿈해몽 타임ㅣ(여자)아이들 대기실 컴백전쟁 : 퀸덤 2화 (2019-09-10)"
},
{
  link: "https://www.youtube.com/watch?v=DUgmb361oW8",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2019",
  thumbnail: "https://i.ytimg.com/vi/DUgmb361oW8/hqdefault.jpg",
  alt: "아이들 - [ENG sub] 셀프 포스터 by (여자)아이들ㅣ퀸덤 2019.08.29 Coming Soon 컴백전쟁 : 퀸덤 0화 (2019-08-29)",
  title: "[ENG sub] 셀프 포스터 by (여자)아이들ㅣ퀸덤 2019.08.29 Coming Soon 컴백전쟁 : 퀸덤 0화 (2019-08-29)"
},
{
  link: "https://www.youtube.com/watch?v=Mtt9Hoz_o3Q",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2019",
  thumbnail: "https://i.ytimg.com/vi/Mtt9Hoz_o3Q/hqdefault.jpg",
  alt: "아이들 - (G)I-DLE, What's the identity of the new cutie and the chic youngest? [business of my members] (2019-07-24)",
  title: "(G)I-DLE, What's the identity of the new cutie and the chic youngest? [business of my members] (2019-07-24)"
},
{
  link: "https://www.youtube.com/watch?v=XaykABBu-9U",
  category: "MEDIA CONTENTS",
  member: "소연",
  year: "2019",
  thumbnail: "https://i.ytimg.com/vi/XaykABBu-9U/hqdefault.jpg",
  alt: "소연 - (여자)아이들((G)I-DLE) 소연이랑 소개팅할래? [상상덕후] [ENG SUB] (2019-07-22)",
  title: "(여자)아이들((G)I-DLE) 소연이랑 소개팅할래? [상상덕후] [ENG SUB] (2019-07-22)"
},
{
  link: "https://www.youtube.com/watch?v=aB5Kf3q_qsg",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2019",
  thumbnail: "https://i.ytimg.com/vi/aB5Kf3q_qsg/hqdefault.jpg",
  alt: "아이들 - (ENG SUB) [EP.02] (여자)아이들 인기가요 출첵라이브 2부 ((G)-IDLE Inkigayo Check-in LIVE) (2019-07-21)",
  title: "(ENG SUB) [EP.02] (여자)아이들 인기가요 출첵라이브 2부 ((G)-IDLE Inkigayo Check-in LIVE) (2019-07-21)"
},
{
  link: "https://www.youtube.com/watch?v=0Re2BEbylKM",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2019",
  thumbnail: "https://i.ytimg.com/vi/0Re2BEbylKM/hqdefault.jpg",
  alt: "아이들 - (ENG SUB) [EP.01] (여자)아이들 인기가요 출첵라이브 1부 ((G)-IDLE Inkigayo Check-in LIVE) (2019-07-21)",
  title: "(ENG SUB) [EP.01] (여자)아이들 인기가요 출첵라이브 1부 ((G)-IDLE Inkigayo Check-in LIVE) (2019-07-21)"
},
{
  link: "https://www.youtube.com/watch?v=BYA2W3Iuhes",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2019",
  thumbnail: "https://i.ytimg.com/vi/BYA2W3Iuhes/hqdefault.jpg",
  alt: "아이들 - 문제 맞히다 TMI 폭발한 (여자)아이들 [팀워크테스트] (2019-07-19)",
  title: "문제 맞히다 TMI 폭발한 (여자)아이들 [팀워크테스트] (2019-07-19)"
},
{
  link: "https://www.youtube.com/watch?v=QcXyNZBNCec",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2019",
  thumbnail: "https://i.ytimg.com/vi/QcXyNZBNCec/hqdefault.jpg",
  alt: "아이들 - 갑자기 단체로 조증 와버린 (여자)아이들 [파트바꾸기] (2019-07-14)",
  title: "갑자기 단체로 조증 와버린 (여자)아이들 [파트바꾸기] (2019-07-14)"
},
{
  link: "https://www.youtube.com/watch?v=HRGHXkyZ-Zo",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2019",
  thumbnail: "https://i.ytimg.com/vi/HRGHXkyZ-Zo/hqdefault.jpg",
  alt: "아이들 - [HOT] Tell the truth 마이 리틀 텔레비전 V2 20190712 (2019-07-12)",
  title: "[HOT] Tell the truth 마이 리틀 텔레비전 V2 20190712 (2019-07-12)"
},
{
  link: "https://www.youtube.com/watch?v=BJKW0OAyX1g",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2019",
  thumbnail: "https://i.ytimg.com/vi/BJKW0OAyX1g/hqdefault.jpg",
  alt: "아이들 - [HOT] The same person comes out again 마이 리틀 텔레비전 V2 20190712 (2019-07-12)",
  title: "[HOT] The same person comes out again 마이 리틀 텔레비전 V2 20190712 (2019-07-12)"
},
{
  link: "https://www.youtube.com/watch?v=g5dSxZYbSyg",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2019",
  thumbnail: "https://i.ytimg.com/vi/g5dSxZYbSyg/hqdefault.jpg",
  alt: "아이들 - [HOT] Daily guest comes 마이 리틀 텔레비전 V2 20190712 (2019-07-12)",
  title: "[HOT] Daily guest comes 마이 리틀 텔레비전 V2 20190712 (2019-07-12)"
},
{
  link: "https://www.youtube.com/watch?v=hTQ0XY1TW3s",
  category: "MEDIA CONTENTS",
  member: "우기",
  year: "2019",
  thumbnail: "https://i.ytimg.com/vi/hTQ0XY1TW3s/hqdefault.jpg",
  alt: "우기 - [선공개] 돌고래가 요기잉네? 돌고래 빙의한 우기♥ 하영♥ (2019-07-12)",
  title: "[선공개] 돌고래가 요기잉네? 돌고래 빙의한 우기♥ 하영♥ (2019-07-12)"
},
{
  link: "https://www.youtube.com/watch?v=zn_kPnx7i5w",
  category: "MEDIA CONTENTS",
  member: "슈화",
  year: "2019",
  thumbnail: "https://i.ytimg.com/vi/zn_kPnx7i5w/hqdefault.jpg",
  alt: "슈화 - [ENG SUB]💌(여자)아이들의 비글파티에 당신을 초대합니다🎉 슈화 메인랩퍼로 포지션 변경??? 수진 다리 길이 3미터 설????  | 딩고뮤직 | 딩톡방 | (G)I-DLE (2019-07-09)",
  title: "[ENG SUB]💌(여자)아이들의 비글파티에 당신을 초대합니다🎉 슈화 메인랩퍼로 포지션 변경??? 수진 다리 길이 3미터 설????  | 딩고뮤직 | 딩톡방 | (G)I-DLE (2019-07-09)"
},
{
  link: "https://www.youtube.com/watch?v=2cg4Mc0-4tM",
  category: "MEDIA CONTENTS",
  member: "우기",
  year: "2019",
  thumbnail: "https://i.ytimg.com/vi/2cg4Mc0-4tM/hqdefault.jpg",
  alt: "우기 - (G)I-DLE, Temperature Difference of 'SO Reader' (feat. Hip YUQI) [business of my members] (2019-07-03)",
  title: "(G)I-DLE, Temperature Difference of 'SO Reader' (feat. Hip YUQI) [business of my members] (2019-07-03)"
},
{
  link: "https://www.youtube.com/watch?v=JBbNuBTyFJM",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2019",
  thumbnail: "https://i.ytimg.com/vi/JBbNuBTyFJM/hqdefault.jpg",
  alt: "아이들 - [HOT] Moved by writing my grandmother. ,  가시나들 20190609 (2019-06-10)",
  title: "[HOT] Moved by writing my grandmother. ,  가시나들 20190609 (2019-06-10)"
},
{
  link: "https://www.youtube.com/watch?v=UVxQ-K0QAA4",
  category: "MEDIA CONTENTS",
  member: "우기",
  year: "2019",
  thumbnail: "https://i.ytimg.com/vi/UVxQ-K0QAA4/hqdefault.jpg",
  alt: "우기 - [가시나들 미방분] 우기의 시 - 꿈 「꿈은 거품처럼 사라지더라도 난 포기하지 않다」 (2019-06-09)",
  title: "[가시나들 미방분] 우기의 시 - 꿈 「꿈은 거품처럼 사라지더라도 난 포기하지 않다」 (2019-06-09)"
},
{
  link: "https://www.youtube.com/watch?v=YXTbMdUj-3Q",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2019",
  thumbnail: "https://i.ytimg.com/vi/YXTbMdUj-3Q/hqdefault.jpg",
  alt: "아이들 - [HOT] watch TV and be surprised, 가시나들 20190519 (2019-05-20)",
  title: "[HOT] watch TV and be surprised, 가시나들 20190519 (2019-05-20)"
},
{
  link: "https://www.youtube.com/watch?v=yj4-s_UEQqU",
  category: "MEDIA CONTENTS",
  member: "우기",
  year: "2019",
  thumbnail: "https://i.ytimg.com/vi/yj4-s_UEQqU/hqdefault.jpg",
  alt: "우기 - (여자)아이들이 우기 때문에 인내심이 대폭발해버렸다 | 마피아댄스 | MAFIA DANCE | Senorita | (G)I-DLE (2019-03-06)",
  title: "(여자)아이들이 우기 때문에 인내심이 대폭발해버렸다 | 마피아댄스 | MAFIA DANCE | Senorita | (G)I-DLE (2019-03-06)"
},
{
  link: "https://www.youtube.com/watch?v=9jUzFZ0leC8",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2019",
  thumbnail: "https://i.ytimg.com/vi/9jUzFZ0leC8/hqdefault.jpg",
  alt: "아이들 - (여자)아이들 예쁘고 멋있고 귀엽고 다해!💃 | (G)I-DLE _ Senorita | 내돌의 온도차 | GAP CRUSH (2019-02-28)",
  title: "(여자)아이들 예쁘고 멋있고 귀엽고 다해!💃 | (G)I-DLE _ Senorita | 내돌의 온도차 | GAP CRUSH (2019-02-28)"
},
{
  link: "https://www.youtube.com/watch?v=zrqEv17u63A",
  category: "MEDIA CONTENTS",
  member: "우기",
  year: "2018",
  thumbnail: "https://i.ytimg.com/vi/zrqEv17u63A/hqdefault.jpg",
  alt: "우기 - [아이돌스타 육상 선수권대회] 여자아이들(G)I-DLE 우기(YUQI)의 고난이도 리듬체조 무대 20180925 (2018-09-25)",
  title: "[아이돌스타 육상 선수권대회] 여자아이들(G)I-DLE 우기(YUQI)의 고난이도 리듬체조 무대 20180925 (2018-09-25)"
},
{
  link: "https://www.youtube.com/watch?v=9ht-nmKm1Hc",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2018",
  thumbnail: "https://i.ytimg.com/vi/9ht-nmKm1Hc/hqdefault.jpg",
  alt: "아이들 - 상상 못한 개인기 대방출한 (여자) 아이들 [톡싸FULL] (2018-08-31)",
  title: "상상 못한 개인기 대방출한 (여자) 아이들 [톡싸FULL] (2018-08-31)"
},

// 🔽 새로 불러온 13개 항목
{
  link: "https://www.youtube.com/watch?v=oLPI-MUPZUc",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2019",
  thumbnail: "https://i.ytimg.com/vi/oLPI-MUPZUc/hqdefault.jpg",
  alt: "아이들 - [HOT] Creepy sound 마이 리틀 텔레비전 V2 20190712 (2019-07-12)",
  title: "[HOT] Creepy sound 마이 리틀 텔레비전 V2 20190712 (2019-07-12)"
},
{
  link: "https://www.youtube.com/watch?v=zLLMob9m4ns",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2019",
  thumbnail: "https://i.ytimg.com/vi/zLLMob9m4ns/hqdefault.jpg",
  alt: "아이들 - [HOT] Think of a father 마이 리틀 텔레비전 V2 20190712 (2019-07-12)",
  title: "[HOT] Think of a father 마이 리틀 텔레비전 V2 20190712 (2019-07-12)"
},
{
  link: "https://www.youtube.com/watch?v=jJrP0MFZKp0",
  category: "MEDIA CONTENTS",
  member: "민니,미연",
  year: "2019",
  thumbnail: "https://i.ytimg.com/vi/jJrP0MFZKp0/hqdefault.jpg",
  alt: "민니,미연 - 토르 망치로 집 부시고 간 여자아이들 [엄마가 잠든 후에] #여자아이들 #미연 #민니 #수진 #(G)I-DLE (2019-07-12)",
  title: "토르 망치로 집 부시고 간 여자아이들 [엄마가 잠든 후에] #여자아이들 #미연 #민니 #수진 #(G)I-DLE (2019-07-12)"
},
{
  link: "https://www.youtube.com/watch?v=9svWxaXSEGI",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2019",
  thumbnail: "https://i.ytimg.com/vi/9svWxaXSEGI/hqdefault.jpg",
  alt: "아이들 - (G)I-DLE, MBTI place where God-So-teacher's Korean class opened. [MBTI of My Members] (2019-07-11)",
  title: "(G)I-DLE, MBTI place where God-So-teacher's Korean class opened. [MBTI of My Members] (2019-07-11)"
},
{
  link: "https://www.youtube.com/watch?v=lIe2O6wCjSM",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2019",
  thumbnail: "https://i.ytimg.com/vi/lIe2O6wCjSM/hqdefault.jpg",
  alt: "아이들 - 아이들 띵곡파티 시작합니다! 🔈네버랜드는 모여주세요🔈  l '(G)I-DLE' Originals Compilation l 원덕후의 [(여자)아이들] 하드털이 (2019-07-04)",
  title: "아이들 띵곡파티 시작합니다! 🔈네버랜드는 모여주세요🔈  l '(G)I-DLE' Originals Compilation l 원덕후의 [(여자)아이들] 하드털이 (2019-07-04)"
},
{
  link: "https://www.youtube.com/watch?v=vok-tx3LadQ",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2019",
  thumbnail: "https://i.ytimg.com/vi/vok-tx3LadQ/hqdefault.jpg",
  alt: "아이들 - (여자)아이들 팀워크가 박살났습니다?! l (G)I-DLE _ Uh-Oh l 눈치가요 l Telepathy Live (2019-07-03)",
  title: "(여자)아이들 팀워크가 박살났습니다?! l (G)I-DLE _ Uh-Oh l 눈치가요 l Telepathy Live (2019-07-03)"
},
{
  link: "https://www.youtube.com/watch?v=-YXCqaPD8_4",
  category: "MEDIA CONTENTS",
  member: "우기",
  year: "2019",
  thumbnail: "https://i.ytimg.com/vi/-YXCqaPD8_4/hqdefault.jpg",
  alt: "우기 - [미방분 선공개] ★우기의 댄스교실★ 유후후후 하나만 기억하세요, 참 쉽죠~? (2019-06-09)",
  title: "[미방분 선공개] ★우기의 댄스교실★ 유후후후 하나만 기억하세요, 참 쉽죠~? (2019-06-09)"
},
{
  link: "https://www.youtube.com/watch?v=f3oAllymTRE",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2019",
  thumbnail: "https://i.ytimg.com/vi/f3oAllymTRE/hqdefault.jpg",
  alt: "아이들 - [HOT] cook with a teacher 가시나들 20190526 (2019-05-27)",
  title: "[HOT] cook with a teacher 가시나들 20190526 (2019-05-27)"
},
{
  link: "https://www.youtube.com/watch?v=n4s-QdGSxo0",
  category: "MEDIA CONTENTS",
  member: "우기",
  year: "2019",
  thumbnail: "https://i.ytimg.com/vi/n4s-QdGSxo0/hqdefault.jpg",
  alt: "우기 - 주렁주렁(X) 주릉주릉(O) 우기 답이 교과서고 정답이야 #가시나들 3차 티저 (2019-05-07)",
  title: "주렁주렁(X) 주릉주릉(O) 우기 답이 교과서고 정답이야 #가시나들 3차 티저 (2019-05-07)"
},
{
  link: "https://www.youtube.com/watch?v=kIzY2F-9u2s",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2019",
  thumbnail: "https://i.ytimg.com/vi/kIzY2F-9u2s/hqdefault.jpg",
  alt: "아이들 - [IDOL RADIO]☆★(여자)아이들의 메들리댄스~★☆ (2019-03-05)",
  title: "[IDOL RADIO]☆★(여자)아이들의 메들리댄스~★☆ (2019-03-05)"
},
{
  link: "https://www.youtube.com/watch?v=GmaPL6maAtY",
  category: "MEDIA CONTENTS",
  member: "슈화",
  year: "2019",
  thumbnail: "https://i.ytimg.com/vi/GmaPL6maAtY/hqdefault.jpg",
  alt: "슈화 - [HOT] rhythmic gymnastics (G)I-DLE SHUHUA , 설특집 2019 아육대 20190205 (2019-02-05)",
  title: "[HOT] rhythmic gymnastics (G)I-DLE SHUHUA , 설특집 2019 아육대 20190205 (2019-02-05)"
},
{
  link: "https://www.youtube.com/watch?v=MnX5fthP4Ms",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2018",
  thumbnail: "https://i.ytimg.com/vi/MnX5fthP4Ms/hqdefault.jpg",
  alt: "아이들 - Idol Master - (G)I-DLE [KBS World Idol Show K-RUSH3 / ENG,CHN / 2018.09.14] (2018-09-14)",
  title: "Idol Master - (G)I-DLE [KBS World Idol Show K-RUSH3 / ENG,CHN / 2018.09.14] (2018-09-14)"
},
{
  link: "https://www.youtube.com/watch?v=UyrfKsh96-Q",
  category: "MEDIA CONTENTS",
  member: "소연,우기,슈화",
  year: "2018",
  thumbnail: "https://i.ytimg.com/vi/UyrfKsh96-Q/hqdefault.jpg",
  alt: "소연,우기,슈화 - [엄마가 잠든후에] 학교에서 맨손으로 백숙 뜯고 간 (여자)아이들 (G)I-DLE  #우기#소연#슈화 (ENG sub) (2018-08-30)",
  title: "[엄마가 잠든후에] 학교에서 맨손으로 백숙 뜯고 간 (여자)아이들 (G)I-DLE  #우기#소연#슈화 (ENG sub) (2018-08-30)"
},

// 🔽 새로 불러온 15개 항목
{
  link: "https://www.youtube.com/watch?v=UmxE266X6hE",
  category: "MEDIA CONTENTS",
  member: "우기",
  year: "2018",
  thumbnail: "https://i.ytimg.com/vi/UmxE266X6hE/hqdefault.jpg",
  alt: "우기 - [수상한 요가교실] 갑자기 (여자)아이들 우기, 수진이 요가하던 사람들과 몸빼바지를 입고 춤을 추게 된 사연은??(Feat.(여자)아이들 우기, 수진) (2018-08-23)",
  title: "[수상한 요가교실] 갑자기 (여자)아이들 우기, 수진이 요가하던 사람들과 몸빼바지를 입고 춤을 추게 된 사연은??(Feat.(여자)아이들 우기, 수진) (2018-08-23)"
},
{
  link: "https://www.youtube.com/watch?v=tZncktuTi_A",
  category: "MEDIA CONTENTS",
  member: "우기",
  year: "2018",
  thumbnail: "https://i.ytimg.com/vi/tZncktuTi_A/hqdefault.jpg",
  alt: "우기 - [음식 토크] 신맛을 좋아하는 우기(Yuqi)의 '치킨 무' 사랑♥ 아는 형님(Knowing bros) 141회 (2018-08-18)",
  title: "[음식 토크] 신맛을 좋아하는 우기(Yuqi)의 '치킨 무' 사랑♥ 아는 형님(Knowing bros) 141회 (2018-08-18)"
},
{
  link: "https://www.youtube.com/watch?v=2zq1oy7MZ50",
  category: "MEDIA CONTENTS",
  member: "우기",
  year: "2018",
  thumbnail: "https://i.ytimg.com/vi/2zq1oy7MZ50/hqdefault.jpg",
  alt: "우기 - (여자)아이들 우기((G)I-DLE Yuqi)의 돌변한 눈빛! 우아한 중국 '따이 춤'♡ 아는 형님(Knowing bros) 141회 (2018-08-18)",
  title: "(여자)아이들 우기((G)I-DLE Yuqi)의 돌변한 눈빛! 우아한 중국 '따이 춤'♡ 아는 형님(Knowing bros) 141회 (2018-08-18)"
},
{
  link: "https://www.youtube.com/watch?v=5xZfbrKpK8A",
  category: "MEDIA CONTENTS",
  member: "우기",
  year: "2018",
  thumbnail: "https://i.ytimg.com/vi/5xZfbrKpK8A/hqdefault.jpg",
  alt: "우기 - 해피투게더 - 우기의 한국어 선생님은 김수현? 분위기 반전 고쟁 연주까지! 20180816 (2018-08-17)",
  title: "해피투게더 - 우기의 한국어 선생님은 김수현? 분위기 반전 고쟁 연주까지! 20180816 (2018-08-17)"
},
{
  link: "https://www.youtube.com/watch?v=v8l_e1-0L0U",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2018",
  thumbnail: "https://i.ytimg.com/vi/v8l_e1-0L0U/hqdefault.jpg",
  alt: "아이들 - 자기 파트 뽑으면 손해인 (여자)아이들 [파트바꾸기] (2018-05-25)",
  title: "자기 파트 뽑으면 손해인 (여자)아이들 [파트바꾸기] (2018-05-25)"
},
{
  link: "https://www.youtube.com/watch?v=uHBXlFUALKo",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "2018",
  thumbnail: "https://i.ytimg.com/vi/uHBXlFUALKo/hqdefault.jpg",
  alt: "아이들 - [After School Club] This group has risen to be the hottest rookies, (G)I-DLE((여자)아이들)! _Full Episode (2018-05-22)",
  title: "[After School Club] This group has risen to be the hottest rookies, (G)I-DLE((여자)아이들)! _Full Episode (2018-05-22)"
},
{
  link: "https://www.youtube.com/watch?v=viqFO-U77x8",
  category: "MEDIA CONTENTS",
  member: "우기",
  year: "2018",
  thumbnail: "https://i.ytimg.com/vi/viqFO-U77x8/hqdefault.jpg",
  alt: "우기 - 요즘 반응 뜨거운 (여자)아이들 우기의 '첫눈처럼 너에게 가겠다' 고쟁 연주 [신소개] Guzheng by (G)I-DLE YUQI (2018-05-18)",
  title: "요즘 반응 뜨거운 (여자)아이들 우기의 '첫눈처럼 너에게 가겠다' 고쟁 연주 [신소개] Guzheng by (G)I-DLE YUQI (2018-05-18)"
},
{
  link: "https://www.youtube.com/watch?v=FoiDU23wjO4",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "PRE-DEBUT"
  thumbnail: "https://i.ytimg.com/vi/FoiDU23wjO4/hqdefault.jpg",
  alt: "아이들 - 걸그룹 데뷔를 앞둔 한 소녀에게 어마무시한 일이 일어났다?! 데뷔 전부터 살벌한(?) 신인 걸그룹 '아이들' ! (2018-04-26)",
  title: "걸그룹 데뷔를 앞둔 한 소녀에게 어마무시한 일이 일어났다?! 데뷔 전부터 살벌한(?) 신인 걸그룹 '아이들' ! (2018-04-26)"
},
{
  link: "https://www.youtube.com/watch?v=YkrS9kfFO_s",
  category: "MEDIA CONTENTS",
  member: "아이들",
  year: "PRE-DEBUT"
  thumbnail: "https://i.ytimg.com/vi/YkrS9kfFO_s/hqdefault.jpg",
  alt: "아이들 - 2018 아는만큼 보이는 아이돌 댄스! 이거 다 맞추면 춤잘알 인정 (여자)아이들 (G)I-DLE DANCE MEDLEY (2018-04-21)",
  title: "2018 아는만큼 보이는 아이돌 댄스! 이거 다 맞추면 춤잘알 인정 (여자)아이들 (G)I-DLE DANCE MEDLEY (2018-04-21)"
},
{
  link: "https://www.youtube.com/watch?v=PEW3tg4K2I4",
  category: "MEDIA CONTENTS",
  member: "미연,민니",
  year: "PRE-DEBUT"
  thumbnail: "https://i.ytimg.com/vi/PEW3tg4K2I4/hqdefault.jpg",
  alt: "아이들 - [일소라] 댕댕이 자매의 #첫사랑 (볼빨간사춘기) cover (2018-03-14)",
  title: "[일소라] 댕댕이 자매의 #첫사랑 (볼빨간사춘기) cover (2018-03-14)"
},
{
  link: "https://www.youtube.com/watch?v=KXB-9PeJbb8",
  category: "MEDIA CONTENTS",
  member: "미연,민니",
  year: "PRE-DEBUT"
  thumbnail: "https://i.ytimg.com/vi/KXB-9PeJbb8/hqdefault.jpg",
  alt: "아이들 - [일소라] 댕댕이 자매의 노력 (박원) cover (2018-03-05)",
  title: "[일소라] 댕댕이 자매의 노력 (박원) cover (2018-03-05)"
},
{
  link: "https://www.youtube.com/watch?v=MbHVHQstS9w",
  category: "MEDIA CONTENTS",
  member: "우기",
  year: "PRE-DEBUT"
  thumbnail: "https://i.ytimg.com/vi/MbHVHQstS9w/hqdefault.jpg",
  alt: "아이들 - 아이돌 연습생이 노래를 들어 달라고 한다면? 반전 목소리네 꼭 데뷔했으면 좋겠다 | 세상의 온도 | (2018-02-27)",
  title: "아이돌 연습생이 노래를 들어 달라고 한다면? 반전 목소리네 꼭 데뷔했으면 좋겠다 | 세상의 온도 | (2018-02-27)"
},
{
  link: "https://www.youtube.com/watch?v=y6XK4qYj1Vs",
  category: "MEDIA CONTENTS",
  member: "미연,민니",
  year: "PRE-DEBUT"
  thumbnail: "https://i.ytimg.com/vi/y6XK4qYj1Vs/hqdefault.jpg",
  alt: "아이들 - [일소라] 댕댕이 자매의 사랑을 했다 (iKON - LOVE SCENARIO) cover (2018-02-25)",
  title: "[일소라] 댕댕이 자매의 사랑을 했다 (iKON - LOVE SCENARIO) cover (2018-02-25)"
},
{
  link: "https://www.youtube.com/watch?v=r0rDWEw5wOU",
  category: "MEDIA CONTENTS",
  member: "미연,민니",
  year: "PRE-DEBUT"
  thumbnail: "https://i.ytimg.com/vi/r0rDWEw5wOU/hqdefault.jpg",
  alt: "아이들 - [일소라] 댕댕이 자매의 그리워하다 (비투비) (2018-02-16)",
  title: "[일소라] 댕댕이 자매의 그리워하다 (비투비) (2018-02-16)"
},
{
  link: "https://www.youtube.com/watch?v=Vyq3NXX7a8A",
  category: "MEDIA CONTENTS",
  member: "미연,민니",
  year: "PRE-DEBUT",
  thumbnail: "https://i.ytimg.com/vi/Vyq3NXX7a8A/hqdefault.jpg",
  alt: "아이들 - [일소라] 존예이신 일반인이 부르는 ‘너야’ (임슬옹) cover (2017-07-04)",
  title: "[일소라] 존예이신 일반인이 부르는 ‘너야’ (임슬옹) cover (2017-07-04)"
}
















    
];

// 중복 제거 (link + title 기준)
const seenLinks = new Set();
const seenTitles = new Set();

allCards = allCards.filter(card => {
  const linkKey = card.link?.trim();
  const titleKey = card.title?.trim();

  if (!linkKey || !titleKey) return false;
  if (seenLinks.has(linkKey)) return false;
  if (seenTitles.has(titleKey)) return false;

  seenLinks.add(linkKey);
  seenTitles.add(titleKey);
  return true;
});
