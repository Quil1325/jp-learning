// Builds the unified item catalog + spaced-repetition store.
(() => {
  const NH = window.NH;
  NH.levels = NH_LEVELS;
  NH.units = NH_UNITS;
  NH.unitById = Object.fromEntries(NH.units.map(u => [u.id, u]));
  NH.dialogues = NH_DIALOGUES;

  const add = it => { NH.items[it.id] = it; NH.list.push(it); (NH.byUnit[it.u] ||= []).push(it); return it; };
  NH.addItem = add;

  // --- kana ---
  const unitFor = (secIdx, rowIdx) => secIdx === 0 ? (rowIdx < 3 ? 1 : rowIdx < 6 ? 2 : 3) : secIdx === 1 ? 4 : 5;
  KANA_SECTIONS.forEach((sec, si) => sec.rows.forEach((row, ri) => row.cells.forEach(c => {
    if (!c) return;
    const n = unitFor(si, ri);
    const mn = (script, ch) => {
      const m = NH_MNEMONICS[script === 'h' ? 'hira' : 'kata'][c[1]];
      if (si === 0) return m || (script === 'k' ? `Katakana "${c[1]}" — angular, drawn with straight strokes.` : '');
      if (si === 1) return `${ch[0]} + ゛/゜ marks a voiced sound: ${c[1]}.`;
      return `${ch[0]} + small ${ch[1]} = one blended sound: ${c[1]}.`;
    };
    const h = c[0], k = NH.toKata(c[0]);
    add({ id: 'ka:' + h, type: 'kana', lv: 0, u: 'h' + n, ch: h, rom: c[1], mn: mn('h', h) });
    add({ id: 'kk:' + k, type: 'kana', lv: 0, u: 'k' + n, ch: k, rom: c[1], mn: mn('k', k) });
  })));

  // --- vocab ---
  NH_VOCAB.forEach(v => {
    // "は^" / "へ^" mark particle pronunciation in the source reading; strip for display & speech
    const romSrc = v.kana.replace(/は\^/g, 'わ').replace(/へ\^/g, 'え').replace(/\^/g, '');
    const kana = v.kana.replace(/[\^ ]/g, '');
    add({ id: 'v:' + v.jp, type: 'vocab', lv: v.lv, u: v.u, jp: v.jp, kana, phrase: !!v.phrase, rom: /^こん(にち|ばん)は$/.test(kana) ? NH.romaji(kana).replace(/ha$/, 'wa') : NH.romaji(romSrc), en: v.en, ex: v.ex, exEn: v.exEn });
  });

  // --- kanji ---
  NH_KANJI.forEach(k => {
    const readings = [...k.kun.split(' '), ...k.on.split(' ')].filter(Boolean);
    const main = readings[0];
    add({ id: 'kj:' + k.ch, type: 'kanji', lv: k.lv, u: k.u, ch: k.ch, en: k.en, meanings: k.en.split(/\s*[\/,]\s*/), on: k.on, kun: k.kun, mn: k.mn, main, readings });
  });

  // --- grammar ---
  NH_GRAMMAR.forEach(g => add({ id: 'g:' + g.id, type: 'grammar', lv: g.lv, u: g.u, title: g.title, pat: g.pat, gist: g.gist, body: g.body, ex: g.ex, drills: g.drills, tip: g.tip }));

  // --- custom (user's own words / mined sentences) ---
  NH.custom = NH.store.get('custom', []);
  NH.custom.forEach(c => registerCustom(c));
  function registerCustom(c) {
    const rom = c.rom || (c.kana ? NH.romaji(c.kana) : '');
    return add({ id: c.id, type: 'custom', lv: -1, u: 'mine', jp: c.jp, kana: c.kana || '', rom, en: c.en });
  }
  NH.addCustom = ({ jp, kana, rom, en }) => {
    const id = 'c:' + jp;
    if (NH.items[id]) return NH.items[id];
    const c = { id, jp, kana: kana || '', rom: rom || '', en };
    NH.custom.push(c); NH.store.set('custom', NH.custom); return registerCustom(c);
  };
  NH.removeCustom = id => {
    NH.custom = NH.custom.filter(c => c.id !== id); NH.store.set('custom', NH.custom);
    delete NH.items[id]; NH.list = NH.list.filter(i => i.id !== id); NH.byUnit.mine = (NH.byUnit.mine || []).filter(i => i.id !== id);
    delete NH.srs.data[id]; NH.srs.save();
  };

  // Order inside a unit: kana → vocab → kanji → grammar
  const ORDER = { kana: 0, vocab: 1, kanji: 2, grammar: 3, custom: 4 };
  Object.values(NH.byUnit).forEach(a => a.sort((x, y) => ORDER[x.type] - ORDER[y.type]));
  NH.unitItems = id => NH.byUnit[id] || [];
  NH.levelItems = n => NH.list.filter(i => i.lv === n);
  NH.typeLabel = { kana: 'Kana', vocab: 'Word', kanji: 'Kanji', grammar: 'Grammar', custom: 'Mine' };

  // ---------- SRS ----------
  const H = 3600e3;
  const INT = [0, 4, 8, 24, 72, 168, 336, 720, 2880]; // hours per stage
  const srs = NH.srs = {
    data: NH.store.get('srs', {}),
    save() { NH.store.set('srs', srs.data); },
    get: id => srs.data[id],
    stage: id => srs.data[id]?.s || 0,
    learn(id, stage = 1) {
      srs.data[id] = { s: stage, due: Date.now() + INT[stage] * H, c: 0, w: 0, t: Date.now() };
      srs.save();
    },
    answer(id, ok) {
      const d = srs.data[id] || (srs.data[id] = { s: 1, due: 0, c: 0, w: 0, t: Date.now() });
      if (ok) { d.s = Math.min(8, d.s + 1); d.c++; }
      else { d.s = Math.max(1, d.s - (d.s >= 5 ? 2 : 1)); d.w++; }
      d.due = Date.now() + INT[d.s] * H;
      srs.save();
    },
    isDue: id => { const d = srs.data[id]; return !!d && d.due <= Date.now(); },
    due(filter) { return NH.list.filter(i => srs.isDue(i.id) && (!filter || filter(i))); },
    bucket(id) {
      const s = srs.stage(id);
      return !s ? 'new' : s <= 3 ? 'learning' : s <= 5 ? 'familiar' : s <= 7 ? 'strong' : 'mastered';
    },
    counts(items) {
      const c = { new: 0, learning: 0, familiar: 0, strong: 0, mastered: 0 };
      items.forEach(i => c[srs.bucket(i.id)]++);
      return c;
    },
    reset() { srs.data = {}; srs.save(); },
  };
  NH.BUCKETS = ['learning', 'familiar', 'strong', 'mastered'];
  NH.started = items => items.filter(i => srs.stage(i.id) > 0).length;

  // Recommended next unit: first unit (in order) with items not yet started
  NH.nextUnit = (track = 'anime') => NH.units.find(u => (u.track || 'anime') === track && NH.unitItems(u.id).some(i => !srs.stage(i.id)));
  NH.tag = n => n >= 11 ? 'E' + (n - 10) : 'L' + n;
  NH.levelLabel = n => n >= 11 ? 'Everyday ' + (n - 10) : 'Level ' + n;
  NH.levelOf = n => NH.levels.find(l => l.n === n);
  NH.track = () => NH.profile.track || 'anime';
})();
