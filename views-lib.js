// Library: the quick-reference side of the app.
(() => {
  const NH = window.NH, { esc, $ } = NH, srs = NH.srs;
  const SUBS = [['phrasebook', 'Phrasebook'], ['sounds', 'Sounds'], ['kana', 'Kana'], ['phrases', 'Anime'], ['words', 'Words'], ['kanji', 'Kanji'], ['grammar', 'Grammar']];
  const st = { sub: NH.store.get('libsub', 'phrasebook'), script: 'hira', cat: 'All', q: '', lv: 'All' };
  const fav = new Set(NH.store.get('fav', []));

  NH.views.library = {
    title: 'Library',
    render(el) {
      el.innerHTML = `<div class="subnav">${SUBS.map(([k, n]) => `<button data-s="${k}" class="${st.sub === k ? 'on' : ''}">${n}</button>`).join('')}</div><div id="lib"></div>`;
      const nav = el.querySelector('.subnav');
      nav.onclick = e => { const b = e.target.closest('button'); if (!b) return; st.sub = b.dataset.s; NH.store.set('libsub', st.sub); NH.draw(); };
      nav.querySelector('.on')?.scrollIntoView({ inline: 'center', block: 'nearest' });
      ({ phrasebook, sounds, kana, phrases, words, kanji, grammar })[st.sub]($('#lib'));
    },
  };
  NH.libGo = sub => { st.sub = sub; NH.store.set('libsub', sub); NH.setTab('library'); };

  const row = (say, jp, mid, small, extra = '') => `<li data-say="${esc(say)}"><span class="jp">${esc(jp)}</span><span class="mid"><b>${esc(mid)}</b><small>${esc(small)}</small></span>${extra || '<span class="play">▶</span>'}</li>`;

  // ---------- Phrasebook (everyday situations) ----------
  const SHORT = { 'e1-manners': 'Manners', 'e1-eat': 'Eating out', 'e1-shop': 'Shopping', 'e1-numbers': 'Time & numbers', 'e2-transport': 'Trains & taxis', 'e2-directions': 'Directions', 'e2-hotel': 'Hotels', 'e2-health': 'Health & SOS', 'e3-people': 'Making friends', 'e3-services': 'Post, bank & phone', 'e3-work': 'Work' };
  const pbFav = new Set(NH.store.get('pbfav', []));
  function phrasebook(el) {
    const all = NH.list.filter(i => i.type === 'vocab' && i.phrase && NH.unitById[i.u]?.track === 'life');
    const unitIds = Object.keys(SHORT).filter(u => all.some(p => p.u === u));
    if (!unitIds.includes(st.pb) && st.pb !== 'All' && st.pb !== 'Saved') st.pb = 'All';
    el.innerHTML = `<p class="hint">Real-life phrases for travel and daily life. Tap to hear one, or tap <b>📣 Show</b> to display it in big letters for staff. ★ saves it to the top.</p>
      <input id="search" type="search" placeholder="Search phrases (English or Japanese)" value="${esc(st.q)}" autocomplete="off" autocapitalize="off">
      <div class="chips">${['All', 'Saved', ...unitIds].map(c => `<button class="chip ${c === st.pb ? 'on' : ''}" data-c="${c}">${c === 'Saved' ? '★ Saved' : c === 'All' ? 'All' : SHORT[c]}</button>`).join('')}</div>
      <div id="pbl"></div>`;
    const draw = () => {
      const q = st.q.trim().toLowerCase();
      const items = all.filter(p => (st.pb === 'All' || (st.pb === 'Saved' ? pbFav.has(p.id) : p.u === st.pb)) && (!q || [p.jp, p.kana, p.rom, p.en].some(f => f.toLowerCase().includes(q))));
      const byUnit = unitIds.map(u => [u, items.filter(p => p.u === u)]).filter(([, a]) => a.length);
      $('#pbl').innerHTML = byUnit.length ? byUnit.map(([u, a]) => `<h2>${esc(SHORT[u])}</h2><ul class="phrases">${a.map(p => `<li class="phrase">
        <button class="say" data-say="${esc(p.kana)}"><span class="jp">${esc(p.jp)}</span><span class="rom">${esc(p.rom)}</span><span class="en">${esc(p.en)}</span></button>
        <div class="side"><button class="star" data-show="${esc(p.id)}" aria-label="Show to staff" title="Show to staff">📣</button><button class="star ${pbFav.has(p.id) ? 'on' : ''}" data-f="${esc(p.id)}" aria-label="Save">★</button></div></li>`).join('')}</ul>`).join('') : `<p class="empty-msg">${st.pb === 'Saved' ? 'Tap ★ on a phrase to save it here.' : 'No matches.'}</p>${st.pb !== 'Saved' && st.q.trim() ? `<button class="big-btn center" id="totr">🌐 Translate “${esc(st.q.trim())}”</button>` : ''}`;
      const t = $('#totr'); if (t) t.onclick = () => NH.openTranslator(st.q.trim());
    };
    draw();
    $('#search').oninput = e => { st.q = e.target.value; draw(); };
    el.querySelector('.chips').onclick = e => { const b = e.target.closest('[data-c]'); if (b) { st.pb = b.dataset.c; phrasebook(el); } };
    $('#pbl').onclick = e => {
      const sh = e.target.closest('[data-show]'); if (sh) return NH.go('show', { id: sh.dataset.show });
      const f = e.target.closest('[data-f]');
      if (f) { const k = f.dataset.f; pbFav.has(k) ? pbFav.delete(k) : pbFav.add(k); NH.store.set('pbfav', [...pbFav]); if (st.pb === 'Saved') draw(); else f.classList.toggle('on'); }
    };
  }
  NH.views.show = {
    full: true, title: 'Show to staff',
    render(el, a) {
      const p = a.id ? NH.items[a.id] : { jp: a.jp, en: a.en, kana: a.say || a.jp };
      el.innerHTML = `<div class="showcard"><div class="sjp">${esc(p.jp)}</div><div class="sen">${esc(p.en)}</div></div>
        <button class="big-btn center" id="say">▶ Say it aloud</button>
        <p class="hint center">Turn the phone around to show the staff member.</p>`;
      $('#say').onclick = () => NH.speak(p.kana || p.jp);
    },
  };

  function sounds(el) {
    el.innerHTML = SOUND_GUIDE.map((s, i) => `
      <details class="card" ${i === 0 ? 'open' : ''}><summary>${esc(s.title)}</summary><p class="lead">${esc(s.body)}</p>
      <ul class="rows">${s.items.map(it => row(it.jp, it.jp, it.rom, it.tip)).join('')}</ul></details>`).join('') + pitchCard();
  }

  function pitchCard() {
    const P = NH_PITCH;
    return `<details class="card"><summary>Pitch accent (high / low melody)</summary>
      ${P.intro.map(t => `<p class="lead">${esc(t)}</p>`).join('')}
      ${P.groups.map(g => `<h3 class="pad-h">${esc(g.title)}</h3><ul class="rows">${g.items.map(it => `<li data-say="${esc(it.say)}"><span class="jp">${esc(it.jp)}</span><span class="mid">${NH.pitchSVG(it)}<small>${esc(it.say)} [${it.n}] · ${esc(it.en)}</small></span><span class="play">▶</span></li>`).join('')}</ul>`).join('')}
      <p class="lead">The phone's voice follows its own accent model, so treat the diagrams as the reference and the audio as a rough guide.</p></details>`;
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

  const lvChips = () => `<div class="chips">${['All', 1, 2, 3, 4, 'E'].map(l => `<button class="chip ${String(st.lv) === String(l) ? 'on' : ''}" data-l="${l}">${l === 'All' ? 'All levels' : l === 'E' ? 'Everyday' : 'L' + l}</button>`).join('')}</div>`;
  const lvFilter = i => st.lv === 'All' || (st.lv === 'E' ? i.lv >= 11 : i.lv === +st.lv);

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
    el.innerHTML = `${lvChips()}<ul class="rows card" id="gl">${NH.list.filter(i => i.type === 'grammar' && lvFilter(i)).map(i => `<li data-i="${esc(i.id)}"><span class="mid"><b>${esc(i.title)}</b><small>${NH.tag(i.lv)} · ${esc(i.pat)} — ${esc(i.gist)}</small></span><span class="play">›</span></li>`).join('')}</ul>`;
    el.querySelector('.chips').onclick = e => { const b = e.target.closest('[data-l]'); if (b) { st.lv = b.dataset.l; grammar(el); } };
    $('#gl').onclick = e => { const li = e.target.closest('[data-i]'); if (li) NH.go('item', { id: li.dataset.i }); };
  }
})();
