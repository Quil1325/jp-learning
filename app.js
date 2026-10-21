(() => {
  const $ = s => document.querySelector(s);
  const view = $('#view');
  const titleEl = $('#title');

  // ---------- storage (safe in private mode) ----------
  const store = {
    get(k, d) { try { const v = localStorage.getItem(k); return v == null ? d : JSON.parse(v); } catch { return d; } },
    set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} },
  };
  const state = {
    tab: store.get('tab', 'sounds'),
    slow: store.get('slow', false),
    script: store.get('script', 'hira'),
    cat: 'All',
    q: '',
    fav: new Set(store.get('fav', [])),
    best: store.get('best', 0),
  };

  // ---------- speech ----------
  let jaVoice = null;
  function pickVoice() {
    if (!('speechSynthesis' in window)) return;
    const vs = speechSynthesis.getVoices().filter(v => v.lang && v.lang.toLowerCase().replace('_', '-').startsWith('ja'));
    jaVoice = vs.find(v => /kyoko|o-ren|siri/i.test(v.name)) || vs[0] || null;
  }
  if ('speechSynthesis' in window) {
    pickVoice();
    speechSynthesis.addEventListener?.('voiceschanged', pickVoice);
  }
  function speak(text) {
    if (!('speechSynthesis' in window)) return toast('Speech not supported on this device');
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = 'ja-JP';
    if (jaVoice) u.voice = jaVoice;
    u.rate = state.slow ? 0.55 : 0.9;
    speechSynthesis.speak(u);
    if (!jaVoice) pickVoice();
  }

  let toastTimer;
  function toast(msg) {
    let t = $('#toast');
    if (!t) { t = document.createElement('div'); t.id = 'toast'; document.body.append(t); }
    t.textContent = msg; t.classList.add('show');
    clearTimeout(toastTimer); toastTimer = setTimeout(() => t.classList.remove('show'), 2200);
  }

  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const shuffle = a => { a = [...a]; for (let i = a.length - 1; i > 0; i--) { const j = Math.random() * (i + 1) | 0; [a[i], a[j]] = [a[j], a[i]]; } return a; };

  // Anything with data-say speaks when tapped
  document.addEventListener('click', e => {
    const el = e.target.closest('[data-say]');
    if (el) speak(el.dataset.say);
  });

  // ---------- Sounds tab ----------
  function renderSounds() {
    view.innerHTML = SOUND_GUIDE.map((s, i) => `
      <details class="card" ${i === 0 ? 'open' : ''}>
        <summary>${esc(s.title)}</summary>
        <p class="lead">${esc(s.body)}</p>
        <ul class="rows">${s.items.map(it => `
          <li data-say="${esc(it.jp)}">
            <span class="jp">${esc(it.jp)}</span>
            <span class="mid"><b>${esc(it.rom)}</b><small>${esc(it.tip)}</small></span>
            <span class="play" aria-hidden="true">▶</span>
          </li>`).join('')}
        </ul>
      </details>`).join('');
  }

  // ---------- Kana tab ----------
  function renderKana() {
    const kata = state.script === 'kata';
    const conv = s => kata ? toKata(s) : s;
    view.innerHTML = `
      <div class="seg" id="scriptSeg">
        <button data-s="hira" class="${kata ? '' : 'on'}">ひらがな Hiragana</button>
        <button data-s="kata" class="${kata ? 'on' : ''}">カタカナ Katakana</button>
      </div>
      <p class="hint">${kata ? 'Used for loanwords, sound effects and foreign names.' : 'Used for native words and grammar.'} Tap a character to hear it.</p>
      ${KANA_SECTIONS.map(sec => `
        <h2>${esc(sec.name)}</h2>
        <div class="kana-grid ${sec.name.startsWith('Combos') ? 'three' : ''}">
          ${sec.rows.map(row => {
            const n = sec.name.startsWith('Combos') ? 3 : 5;
            const cells = [...row.cells];
            while (cells.length < n) cells.push(null);
            return cells.map(c => c
              ? `<button class="kana" data-say="${esc(conv(c[0]))}"><span class="k">${esc(conv(c[0]))}</span><span class="r">${esc(c[1])}</span></button>`
              : `<span class="kana empty"></span>`).join('');
          }).join('')}
        </div>`).join('')}
      <h2>Read these (katakana you already know)</h2>
      <ul class="rows">${READING.map(w => `
        <li data-say="${esc(w.jp)}"><span class="jp">${esc(w.jp)}</span>
        <span class="mid"><b>${esc(w.rom)}</b><small>${esc(w.en)}</small></span><span class="play">▶</span></li>`).join('')}
      </ul>`;
    $('#scriptSeg').onclick = e => {
      const b = e.target.closest('button'); if (!b) return;
      state.script = b.dataset.s; store.set('script', state.script); renderKana();
    };
  }

  // ---------- Phrases tab ----------
  function renderPhrases() {
    const cats = ['All', '★ Saved', ...new Set(PHRASES.map(p => p.cat))];
    view.innerHTML = `
      <input id="search" type="search" placeholder="Search Japanese, romaji or English" value="${esc(state.q)}" autocomplete="off" autocapitalize="off">
      <div class="chips">${cats.map(c => `<button class="chip ${c === state.cat ? 'on' : ''}" data-c="${esc(c)}">${esc(c)}</button>`).join('')}</div>
      <ul class="phrases" id="plist"></ul>`;
    const list = $('#plist');
    const draw = () => {
      const q = state.q.trim().toLowerCase();
      const items = PHRASES.filter(p =>
        (state.cat === 'All' || (state.cat === '★ Saved' ? state.fav.has(p.jp) : p.cat === state.cat)) &&
        (!q || [p.jp, p.rom, p.en, p.note].some(f => f.toLowerCase().includes(q))));
      list.innerHTML = items.length ? items.map(p => `
        <li class="phrase">
          <button class="say" data-say="${esc(p.jp.replace(/[！？!?]/g, ''))}" aria-label="Play ${esc(p.rom)}">
            <span class="jp big">${esc(p.jp)}</span>
            <span class="rom">${esc(p.rom)}</span>
            <span class="en">${esc(p.en)}</span>
            ${p.note ? `<span class="note">${esc(p.note)}</span>` : ''}
          </button>
          <button class="star ${state.fav.has(p.jp) ? 'on' : ''}" data-f="${esc(p.jp)}" aria-label="Save">★</button>
        </li>`).join('') : `<li class="empty-msg">${state.cat === '★ Saved' ? 'Tap ★ on a phrase to save it here.' : 'No matches.'}</li>`;
    };
    draw();
    $('#search').oninput = e => { state.q = e.target.value; draw(); };
    document.querySelector('.chips').onclick = e => {
      const b = e.target.closest('[data-c]'); if (!b) return;
      state.cat = b.dataset.c; renderPhrases();
    };
    list.onclick = e => {
      const s = e.target.closest('.star'); if (!s) return;
      const k = s.dataset.f;
      state.fav.has(k) ? state.fav.delete(k) : state.fav.add(k);
      store.set('fav', [...state.fav]);
      state.cat === '★ Saved' ? draw() : s.classList.toggle('on');
    };
  }

  // ---------- Quiz tab ----------
  const quiz = { mode: null, n: 0, score: 0, q: null, answered: false };
  const ALL_KANA = [...KANA_ROWS, ...KANA_VOICED].flatMap(r => r.cells.filter(Boolean));

  function renderQuizMenu() {
    view.innerHTML = `
      <div class="card pad">
        <p class="lead">10 questions. Best score: <b>${state.best}/10</b></p>
        <button class="big-btn" data-m="read-h">あ → ? &nbsp;Hiragana to sound</button>
        <button class="big-btn" data-m="read-k">ア → ? &nbsp;Katakana to sound</button>
        <button class="big-btn" data-m="listen">🔊 Listen &amp; pick the kana</button>
        <button class="big-btn" data-m="phrase">💬 What does this phrase mean?</button>
      </div>`;
    view.onclick = e => {
      const b = e.target.closest('[data-m]'); if (!b) return;
      Object.assign(quiz, { mode: b.dataset.m, n: 0, score: 0 });
      nextQuestion();
    };
  }

  function nextQuestion() {
    if (quiz.n >= 10) return renderQuizEnd();
    quiz.answered = false;
    const m = quiz.mode;
    let prompt, answer, options, say = null, big = true;
    if (m === 'phrase') {
      const p = PHRASES[Math.random() * PHRASES.length | 0];
      const wrong = shuffle(PHRASES.filter(x => x.en !== p.en)).slice(0, 3).map(x => x.en);
      prompt = p.jp; answer = p.en; options = shuffle([p.en, ...wrong]); say = p.jp.replace(/[！？!?]/g, ''); big = false;
    } else {
      const c = ALL_KANA[Math.random() * ALL_KANA.length | 0];
      const kata = m === 'read-k';
      const show = k => (kata ? toKata(k[0]) : k[0]);
      const wrong = shuffle(ALL_KANA.filter(x => x[1] !== c[1])).slice(0, 3);
      if (m === 'listen') {
        prompt = '🔊'; answer = c[0]; say = c[0];
        options = shuffle([c, ...wrong]).map(x => x[0]);
      } else {
        prompt = show(c); answer = c[1]; say = show(c);
        options = shuffle([c, ...wrong]).map(x => x[1]);
      }
    }
    quiz.q = { answer, say };
    view.innerHTML = `
      <div class="qhead"><span>Question ${quiz.n + 1}/10</span><span>Score ${quiz.score}</span></div>
      <div class="qprompt ${big ? '' : 'small'}" data-say="${esc(say)}">${esc(prompt)}<small>tap to hear</small></div>
      <div class="opts">${options.map(o => `<button class="opt ${m === 'listen' ? 'kanaopt' : ''}" data-o="${esc(o)}">${esc(o)}</button>`).join('')}</div>
      <div id="fb"></div>`;
    view.onclick = e => {
      const b = e.target.closest('.opt');
      if (!b || quiz.answered) return;
      quiz.answered = true;
      const ok = b.dataset.o === quiz.q.answer;
      b.classList.add(ok ? 'right' : 'wrong');
      if (ok) quiz.score++;
      else view.querySelectorAll('.opt').forEach(x => x.dataset.o === quiz.q.answer && x.classList.add('right'));
      speak(quiz.q.say);
      quiz.n++;
      $('#fb').innerHTML = `<button class="big-btn" id="nx">${quiz.n >= 10 ? 'See result' : 'Next →'}</button>`;
      $('#nx').onclick = nextQuestion;
    };
    if (m === 'listen') setTimeout(() => speak(say), 150);
  }

  function renderQuizEnd() {
    if (quiz.score > state.best) { state.best = quiz.score; store.set('best', state.best); }
    view.innerHTML = `
      <div class="card pad center">
        <div class="qprompt">${quiz.score}/10</div>
        <p class="lead">${quiz.score >= 9 ? 'Sugoi! すごい！' : quiz.score >= 6 ? 'Ii ne! いいね！' : 'Ganbatte! がんばって！'}</p>
        <button class="big-btn" id="again">Play again</button>
        <button class="big-btn ghost" id="menu">Change quiz</button>
      </div>`;
    $('#again').onclick = () => { quiz.n = 0; quiz.score = 0; nextQuestion(); };
    $('#menu').onclick = renderQuizMenu;
  }

  // ---------- shell ----------
  const TITLES = { sounds: 'Sounds', kana: 'Kana', phrases: 'Anime Phrases', quiz: 'Quiz' };
  function show(tab) {
    state.tab = tab; store.set('tab', tab);
    titleEl.textContent = TITLES[tab];
    document.querySelectorAll('.tabs button').forEach(b => b.classList.toggle('on', b.dataset.tab === tab));
    view.onclick = null;
    ({ sounds: renderSounds, kana: renderKana, phrases: renderPhrases, quiz: renderQuizMenu })[tab]();
    window.scrollTo(0, 0);
  }
  document.querySelector('.tabs').onclick = e => {
    const b = e.target.closest('button'); if (b) show(b.dataset.tab);
  };

  const speedBtn = $('#speed');
  const syncSpeed = () => { speedBtn.textContent = state.slow ? 'Slow speed' : 'Normal speed'; speedBtn.classList.toggle('on', state.slow); };
  speedBtn.onclick = () => { state.slow = !state.slow; store.set('slow', state.slow); syncSpeed(); };
  syncSpeed();

  show(TITLES[state.tab] ? state.tab : 'sounds');

  if ('serviceWorker' in navigator && location.protocol !== 'file:') {
    navigator.serviceWorker.register('sw.js').catch(() => {});
  }
})();
