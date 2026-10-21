// Translator: instant offline phrasebook matches + online machine translation (MyMemory).
(() => {
  const NH = window.NH, { esc, $ } = NH;
  const API = 'https://api.mymemory.translated.net/get';
  const MAX = 500;
  const st = { dir: NH.store.get('trdir', 'en'), text: '' };   // dir: 'en' = English → Japanese, 'ja' = Japanese → English

  const history = () => NH.store.get('trhist', []);
  const saveHist = h => NH.store.set('trhist', h.slice(0, 40));
  const STOP = new Set(['the', 'a', 'an', 'is', 'are', 'am', 'to', 'of', 'and', 'or', 'it', 'in', 'on', 'at', 'for', 'my', 'me', 'we', 'you', 'your', 'do', 'does', 'can', 'could', 'would', 'please', 'this', 'that', 'there', 'have', 'has', 'with', 'be', 'i']);

  // ---- offline matches from the built-in content ----
  function localMatches(text, dir) {
    const t = text.trim().toLowerCase();
    if (t.length < 2) return [];
    const pool = NH.list.filter(i => i.type === 'vocab' || i.type === 'custom');
    if (dir === 'ja') {
      return pool.filter(i => i.jp.includes(text.trim()) || (i.kana && i.kana.includes(text.trim())) || text.trim().includes(i.jp)).slice(0, 8);
    }
    const toks = t.replace(/[^a-z0-9\s']/g, ' ').split(/\s+/).filter(w => w.length > 2 && !STOP.has(w));
    if (!toks.length) return [];
    const scored = pool.map(i => {
      const en = i.en.toLowerCase(); let s = 0;
      if (en.includes(t)) s += 6;
      toks.forEach(w => { if (new RegExp('\\b' + w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).test(en)) s += 2; });
      return [s + (i.phrase ? 1 : 0), i];
    }).filter(x => x[0] >= 2).sort((a, b) => b[0] - a[0]);
    return scored.slice(0, 6).map(x => x[1]);
  }

  async function machineTranslate(text, dir) {
    const ctl = new AbortController(), timer = setTimeout(() => ctl.abort(), 9000);
    try {
      const url = `${API}?q=${encodeURIComponent(text)}&langpair=${dir === 'en' ? 'en|ja' : 'ja|en'}`;
      const res = await fetch(url, { signal: ctl.signal });
      if (!res.ok) throw new Error('http ' + res.status);
      const data = await res.json();
      const out = (data.responseData && data.responseData.translatedText || '').trim();
      if (data.responseStatus === 429 || /MYMEMORY WARNING|QUERY LENGTH LIMIT/i.test(out)) throw new Error('limit');
      if (!out || out.toLowerCase() === text.trim().toLowerCase()) throw new Error('empty');
      return out;
    } finally { clearTimeout(timer); }
  }

  const hasKanji = s => /[一-鿿]/.test(s);
  const kanaOnly = s => /^[぀-ヿー、。！？\s]+$/.test(s);

  NH.views.translate = {
    title: 'Translator',
    render(el, a) {
      if (a.q != null) st.text = a.q;
      const draw = () => {
        el.innerHTML = `
          <div class="seg" id="dir"><button data-d="en" class="${st.dir === 'en' ? 'on' : ''}">English → 日本語</button><button data-d="ja" class="${st.dir === 'ja' ? 'on' : ''}">日本語 → English</button></div>
          <textarea id="src" rows="3" maxlength="${MAX}" placeholder="${st.dir === 'en' ? 'Type what you want to say… (e.g. “I am allergic to peanuts”)' : 'Paste or type Japanese you want to understand…'}" autocapitalize="sentences" autocorrect="on" spellcheck="true">${esc(st.text)}</textarea>
          <div class="trrow"><small id="cnt">${st.text.length}/${MAX}</small><button class="linkbtn" id="clr">Clear</button></div>
          <button class="big-btn center" id="go">🌐 Translate</button>
          <p class="hint">Nothing is sent until you tap Translate. Then your text goes to the free MyMemory translation service. Don't enter private information.</p>
          <div id="out"></div>
          <div id="loc"></div>
          <div id="hist"></div>`;
        bind();
        drawLocal();
        drawHist();
      };

      const drawLocal = () => {
        const m = localMatches(st.text, st.dir);
        $('#loc').innerHTML = m.length ? `<h2>Ready-made phrases (work offline)</h2><ul class="phrases">${m.map(p => `<li class="phrase">
          <button class="say" data-say="${esc(p.kana || p.jp)}"><span class="jp">${esc(p.jp)}</span><span class="rom">${esc(p.rom || '')}</span><span class="en">${esc(p.en)}</span></button>
          <div class="side"><button class="star" data-show="${esc(p.id)}" aria-label="Show to staff">📣</button></div></li>`).join('')}</ul>` : '';
      };

      const drawHist = () => {
        const h = history();
        $('#hist').innerHTML = h.length ? `<h2>Recent translations</h2><ul class="rows card">${h.slice(0, 12).map((x, i) => `<li data-h="${i}"><span class="mid"><b>${esc(x.dir === 'en' ? x.out : x.src)}</b><small>${esc(x.dir === 'en' ? x.src : x.out)}</small></span><span class="play">↺</span></li>`).join('')}</ul><button class="linkbtn" id="clrh">Clear history</button>` : '';
      };

      const showResult = (src, out, dir) => {
        const ja = dir === 'en' ? out : src, en = dir === 'en' ? src : out;
        const reading = dir === 'en' && kanaOnly(out) ? NH.romaji(out) : '';
        $('#out').innerHTML = `<div class="trout"><div class="trja" ${dir === 'en' ? `data-say="${esc(out)}"` : ''}>${esc(ja)}</div>
          ${reading ? `<div class="rom">${esc(reading)}</div>` : (dir === 'en' && hasKanji(out) ? '<small class="small">Reading not available for kanji text — tap ▶ to hear it.</small>' : '')}
          <div class="trsrc">${esc(en)}</div>
          <div class="btnrow"><button class="chip" id="say">▶ Hear it</button><button class="chip" id="show">📣 Show to staff</button><button class="chip" id="copy">Copy</button></div>
          <p class="small">Machine translation can be wrong or sound unnatural. For anything important (medical, legal, safety) use the Phrasebook, or call 119 / 110 in an emergency.</p></div>`;
        $('#say').onclick = () => NH.speak(ja);
        $('#show').onclick = () => NH.go('show', { jp: ja, en, say: ja });
        $('#copy').onclick = async () => { try { await navigator.clipboard.writeText(ja); NH.toast('Copied'); } catch { NH.toast('Select and copy the text'); } };
        if (dir === 'en') setTimeout(() => NH.speak(out), 150);
      };

      const run = async () => {
        const text = st.text.trim(); if (!text) return;
        const cached = history().find(x => x.src === text && x.dir === st.dir);
        if (cached) { showResult(cached.src, cached.out, cached.dir); return; }
        if (!navigator.onLine) { $('#out').innerHTML = '<div class="card pad"><b>You are offline.</b><p class="lead">Online translation needs a connection. Try the ready-made phrases below, or the Phrasebook.</p></div>'; return; }
        const go = $('#go'); go.disabled = true; go.textContent = 'Translating…';
        try {
          const out = await machineTranslate(text, st.dir);
          const h = history().filter(x => !(x.src === text && x.dir === st.dir)); h.unshift({ src: text, out, dir: st.dir, ts: Date.now() }); saveHist(h);
          showResult(text, out, st.dir); drawHist(); NH.addXP(1);
        } catch (e) {
          $('#out').innerHTML = `<div class="card pad"><b>${e.message === 'limit' ? 'Daily translation limit reached' : 'Could not translate'}</b><p class="lead">${e.message === 'limit' ? 'The free service has a daily limit. Try again tomorrow, or use the ready-made phrases below.' : 'Check your connection and try again — or use the ready-made phrases below.'}</p></div>`;
        } finally { go.disabled = false; go.textContent = '🌐 Translate'; }
      };

      function bind() {
        $('#dir').onclick = e => { const b = e.target.closest('button'); if (!b) return; st.dir = b.dataset.d; NH.store.set('trdir', st.dir); draw(); };
        const src = $('#src');
        src.oninput = () => { st.text = src.value; $('#cnt').textContent = `${src.value.length}/${MAX}`; drawLocal(); };
        $('#clr').onclick = () => { st.text = ''; draw(); $('#src').focus(); };
        $('#go').onclick = run;
        el.onclick = e => {
          const sh = e.target.closest('[data-show]'); if (sh) return NH.go('show', { id: sh.dataset.show });
          const hi = e.target.closest('[data-h]');
          if (hi) { const x = history()[+hi.dataset.h]; st.dir = x.dir; st.text = x.src; draw(); showResult(x.src, x.out, x.dir); return; }
          if (e.target.id === 'clrh') { saveHist([]); drawHist(); }
        };
      }
      draw();
      if (a.q) setTimeout(() => $('#src')?.focus(), 100);
    },
  };

  // Header 🌐 button opens the translator from anywhere
  NH.openTranslator = (q) => { const top = NH.stack[NH.stack.length - 1]; if (top && top.name === 'translate' && q == null) return; NH.go('translate', q != null ? { q } : {}); };
})();
