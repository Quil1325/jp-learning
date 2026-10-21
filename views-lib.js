// Library: the quick-reference side of the app.
(() => {
  const NH = window.NH, { esc, $ } = NH, srs = NH.srs;
  const SUBS = [['sounds', 'Sounds'], ['kana', 'Kana'], ['phrases', 'Phrases'], ['words', 'Words'], ['kanji', 'Kanji'], ['grammar', 'Grammar']];
  const st = { sub: NH.store.get('libsub', 'sounds'), script: 'hira', cat: 'All', q: '', lv: 'All' };
  const fav = new Set(NH.store.get('fav', []));

  NH.views.library = {
    title: 'Library',
    render(el) {
      el.innerHTML = `<div class="subnav">${SUBS.map(([k, n]) => `<button data-s="${k}" class="${st.sub === k ? 'on' : ''}">${n}</button>`).join('')}</div><div id="lib"></div>`;
      const nav = el.querySelector('.subnav');
      nav.onclick = e => { const b = e.target.closest('button'); if (!b) return; st.sub = b.dataset.s; NH.store.set('libsub', st.sub); NH.draw(); };
      nav.querySelector('.on')?.scrollIntoView({ inline: 'center', block: 'nearest' });
      ({ sounds, kana, phrases, words, kanji, grammar })[st.sub]($('#lib'));
    },
  };

  const row = (say, jp, mid, small, extra = '') => `<li data-say="${esc(say)}"><span class="jp">${esc(jp)}</span><span class="mid"><b>${esc(mid)}</b><small>${esc(small)}</small></span>${extra || '<span class="play">▶</span>'}</li>`;

  function sounds(el) {
    el.innerHTML = SOUND_GUIDE.map((s, i) => `
      <details class="card" ${i === 0 ? 'open' : ''}><summary>${esc(s.title)}</summary><p class="lead">${esc(s.body)}</p>
      <ul class="rows">${s.items.map(it => row(it.jp, it.jp, it.rom, it.tip)).join('')}</ul></details>`).join('');
  }

  function kana(el) {
    const kata = st.script === 'kata', conv = s => kata ? NH.toKata(s) : s;
    el.innerHTML = `
      <div class="seg" id="sg"><button data-s="hira" class="${kata ? '' : 'on'}">ひらがな Hiragana</button><button data-s="kata" class="${kata ? 'on' : ''}">カタカナ Katakana</button></div>
      <p class="hint">${kata ? 'Loanwords, sound effects, foreign names.' : 'Native words and grammar.'} Tap a character to hear it · press and hold for its memory hook.</p>
      ${KANA_SECTIONS.map(sec => { const three = sec.name.startsWith('Combos'), n = three ? 3 : 5; return `<h2>${esc(sec.name)}</h2>
        <div class="kana-grid ${three ? 'three' : ''}">${sec.rows.map(r => { const cells = [...r.cells]; while (cells.length < n) cells.push(null);
          return cells.map(c => c ? `<button class="kana ${srs.stage((kata ? 'kk:' : 'ka:') + conv(c[0])) ? 'seen' : ''}" data-say="${esc(conv(c[0]))}" data-id="${esc((kata ? 'kk:' : 'ka:') + conv(c[0]))}"><span class="k">${esc(conv(c[0]))}</span><span class="r">${esc(c[1])}</span></button>` : '<span class="kana empty"></span>').join(''); }).join('')}</div>`; }).join('')}
      <h2>Katakana words you already know</h2><ul class="rows card">${READING.map(w => row(w.jp, w.jp, w.rom, w.en)).join('')}</ul>`;
    $('#sg').onclick = e => { const b = e.target.closest('button'); if (b) { st.script = b.dataset.s; kana(el); } };
    let timer;
    el.addEventListener('contextmenu', e => e.preventDefault());
    el.addEventListener('touchstart', e => { const k = e.target.closest('.kana[data-id]'); if (k) timer = setTimeout(() => NH.go('item', { id: k.dataset.id }), 550); }, { passive: true });
    ['touchend', 'touchmove'].forEach(ev => el.addEventListener(ev, () => clearTimeout(timer), { passive: true }));
  }

  function phrases(el) {
    const cats = ['All', '★ Saved', ...new Set(PHRASES.map(p => p.cat))];
    el.innerHTML = `<input id="search" type="search" placeholder="Search Japanese, romaji or English" value="${esc(st.q)}" autocomplete="off" autocapitalize="off">
      <div class="chips">${cats.map(c => `<button class="chip ${c === st.cat ? 'on' : ''}" data-c="${esc(c)}">${esc(c)}</button>`).join('')}</div><ul class="phrases" id="pl"></ul>`;
    const list = $('#pl');
    const draw = () => {
      const q = st.q.trim().toLowerCase();
      const items = PHRASES.filter(p => (st.cat === 'All' || (st.cat === '★ Saved' ? fav.has(p.jp) : p.cat === st.cat)) && (!q || [p.jp, p.rom, p.en, p.note].some(f => f.toLowerCase().includes(q))));
      list.innerHTML = items.length ? items.map(p => `<li class="phrase">
        <button class="say" data-say="${esc(p.jp.replace(/[！？!?]/g, ''))}"><span class="jp big">${esc(p.jp)}</span><span class="rom">${esc(p.rom)}</span><span class="en">${esc(p.en)}</span>${p.note ? `<span class="note">${esc(p.note)}</span>` : ''}</button>
        <div class="side"><button class="star ${fav.has(p.jp) ? 'on' : ''}" data-f="${esc(p.jp)}" aria-label="Save">★</button>
        <button class="star add ${NH.items['c:' + p.jp] ? 'on' : ''}" data-add="${esc(p.jp)}" aria-label="Add to my review deck" title="Add to review deck">＋</button></div></li>`).join('') : '<li class="empty-msg">No matches.</li>';
    };
    draw();
    $('#search').oninput = e => { st.q = e.target.value; draw(); };
    el.querySelector('.chips').onclick = e => { const b = e.target.closest('[data-c]'); if (b) { st.cat = b.dataset.c; phrases(el); } };
    list.onclick = e => {
      const s = e.target.closest('.star:not(.add)');
      if (s) { const k = s.dataset.f; fav.has(k) ? fav.delete(k) : fav.add(k); NH.store.set('fav', [...fav]); return st.cat === '★ Saved' ? draw() : s.classList.toggle('on'); }
      const a = e.target.closest('[data-add]');
      if (a) {
        const p = PHRASES.find(x => x.jp === a.dataset.add), it = NH.addCustom({ jp: p.jp.replace(/[！？!?]/g, ''), rom: p.rom.replace(/[!?]/g, ''), en: p.en });
        if (!srs.stage(it.id)) srs.learn(it.id, 1);
        a.classList.add('on'); NH.toast('Added to your review deck');
      }
    };
  }

  const lvChips = () => `<div class="chips">${['All', 1, 2, 3, 4].map(l => `<button class="chip ${String(st.lv) === String(l) ? 'on' : ''}" data-l="${l}">${l === 'All' ? 'All levels' : 'L' + l}</button>`).join('')}</div>`;
  const lvFilter = i => st.lv === 'All' || i.lv === +st.lv;

  function words(el) {
    el.innerHTML = `<input id="search" type="search" placeholder="Search words…" value="${esc(st.q)}" autocapitalize="off" autocomplete="off">${lvChips()}<ul class="rows card" id="wl"></ul>`;
    const draw = () => {
      const q = st.q.trim().toLowerCase();
      const items = NH.list.filter(i => i.type === 'vocab' && lvFilter(i) && (!q || [i.jp, i.kana, i.rom, i.en].some(f => f.toLowerCase().includes(q))));
      $('#wl').innerHTML = items.map(i => `<li data-say="${esc(i.kana)}">${`<span class="dot ${srs.bucket(i.id)}"></span>`}<span class="jp">${esc(i.jp)}</span><span class="mid"><b>${esc(i.en)}</b><small>${esc(i.kana !== i.jp ? i.kana + ' · ' : '')}${esc(i.rom)}</small></span><button class="info" data-nosay data-i="${esc(i.id)}">ⓘ</button></li>`).join('') || '<li class="empty-msg">No matches.</li>';
    };
    draw();
    $('#search').oninput = e => { st.q = e.target.value; draw(); };
    el.querySelector('.chips').onclick = e => { const b = e.target.closest('[data-l]'); if (b) { st.lv = b.dataset.l; words(el); } };
    $('#wl').onclick = e => { const i = e.target.closest('[data-i]'); if (i) NH.go('item', { id: i.dataset.i }); };
  }

  function kanji(el) {
    el.innerHTML = `${lvChips()}<p class="hint">Tap a kanji for meaning, readings and its memory hook.</p><div class="kana-grid four">${NH.list.filter(i => i.type === 'kanji' && lvFilter(i)).map(i => `<button class="kana" data-i="${esc(i.id)}"><span class="k">${esc(i.ch)}</span><span class="r">${esc(i.meanings[0])}</span></button>`).join('')}</div>`;
    el.querySelector('.chips').onclick = e => { const b = e.target.closest('[data-l]'); if (b) { st.lv = b.dataset.l; kanji(el); } };
    el.querySelector('.kana-grid').onclick = e => { const b = e.target.closest('[data-i]'); if (b) NH.go('item', { id: b.dataset.i }); };
  }

  function grammar(el) {
    el.innerHTML = `${lvChips()}<ul class="rows card" id="gl">${NH.list.filter(i => i.type === 'grammar' && lvFilter(i)).map(i => `<li data-i="${esc(i.id)}"><span class="mid"><b>${esc(i.title)}</b><small>L${i.lv} · ${esc(i.pat)} — ${esc(i.gist)}</small></span><span class="play">›</span></li>`).join('')}</ul>`;
    el.querySelector('.chips').onclick = e => { const b = e.target.closest('[data-l]'); if (b) { st.lv = b.dataset.l; grammar(el); } };
    $('#gl').onclick = e => { const li = e.target.closest('[data-i]'); if (li) NH.go('item', { id: li.dataset.i }); };
  }
})();
