// Pitch accent primer (Tokyo standard). `n` = accent number: 0 = flat (heiban), otherwise the mora after which pitch drops.
window.NH_PITCH = {
  intro: [
    'Japanese words have a pitch pattern: each syllable (mora) is either high (H) or low (L). It is not stress or loudness — it is melody.',
    'Rule of thumb: if the first mora is low, the second is high. After pitch drops it stays low for the rest of the word.',
    'The accent number tells you where the drop happens: [1] = drop after the 1st mora, [2] = after the 2nd, [0] = no drop at all. The following particle (が, は…) shows the difference: it stays high after [0] words but is low after the others.',
    'Pitch is far less critical than long vowels or the small っ, and it varies by region and speaker. Learn it by listening. For a word-by-word reference use the free OJAD accent dictionary (Univ. of Tokyo) or an NHK accent dictionary.',
  ],
  groups: [
    { title: 'Same sounds, different pitch', items: [
      { jp: '箸', say: 'はし', morae: ['は', 'し'], n: 1, en: 'chopsticks' },
      { jp: '橋', say: 'はし', morae: ['は', 'し'], n: 2, en: 'bridge' },
      { jp: '端', say: 'はし', morae: ['は', 'し'], n: 0, en: 'edge' },
      { jp: '雨', say: 'あめ', morae: ['あ', 'め'], n: 1, en: 'rain' },
      { jp: '飴', say: 'あめ', morae: ['あ', 'め'], n: 0, en: 'candy' },
      { jp: '花', say: 'はな', morae: ['は', 'な'], n: 2, en: 'flower' },
      { jp: '鼻', say: 'はな', morae: ['は', 'な'], n: 0, en: 'nose' },
      { jp: '神', say: 'かみ', morae: ['か', 'み'], n: 1, en: 'god' },
      { jp: '紙', say: 'かみ', morae: ['か', 'み'], n: 2, en: 'paper' },
    ] },
    { title: 'The four pattern types', items: [
      { jp: '猫', say: 'ねこ', morae: ['ね', 'こ'], n: 1, en: 'cat — atamadaka [1] (head-high)' },
      { jp: '魚', say: 'さかな', morae: ['さ', 'か', 'な'], n: 0, en: 'fish — heiban [0] (flat)' },
      { jp: '先生', say: 'せんせい', morae: ['せ', 'ん', 'せ', 'い'], n: 3, en: 'teacher — nakadaka [3] (middle-drop)' },
      { jp: '犬', say: 'いぬ', morae: ['い', 'ぬ'], n: 2, en: 'dog — odaka [2] (tail-drop; the particle falls)' },
    ] },
  ],
};

// 1 = high, 0 = low for each mora, plus the following particle
NH.pitchContour = (m, n) => {
  const pat = [];
  for (let i = 1; i <= m; i++) {
    if (n === 1) pat.push(i === 1 ? 1 : 0);
    else if (n === 0) pat.push(i === 1 ? 0 : 1);
    else pat.push(i === 1 ? 0 : i <= n ? 1 : 0);
  }
  if (m === 1 && n === 0) pat[0] = 0;
  return { pat, particle: n === 0 ? 1 : 0 };
};

NH.pitchSVG = it => {
  const { pat, particle } = NH.pitchContour(it.morae.length, it.n);
  const all = [...pat, particle], w = 34, H = 6, L = 26, X = i => 18 + i * w, Y = v => (v ? H : L);
  const pts = all.map((v, i) => `${X(i)},${Y(v)}`).join(' ');
  const labels = [...it.morae, 'が'];
  return `<svg class="pitch" viewBox="0 0 ${all.length * w + 4} 58" width="${all.length * w + 4}" height="58" role="img" aria-label="pitch pattern ${it.n}">
    <polyline points="${pts}" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round"/>
    ${all.map((v, i) => `<circle cx="${X(i)}" cy="${Y(v)}" r="4" fill="${i === all.length - 1 ? 'var(--bg)' : 'currentColor'}" stroke="currentColor" stroke-width="2"/>`).join('')}
    ${labels.map((t, i) => `<text x="${X(i)}" y="52" text-anchor="middle" font-size="16" fill="${i === all.length - 1 ? 'var(--muted)' : 'currentColor'}">${t}</text>`).join('')}</svg>`;
};
