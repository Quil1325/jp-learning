// Question generation, quiz sessions, lessons and item detail cards.
(() => {
  const NH = window.NH, { esc, shuffle, pick, $ } = NH, srs = NH.srs;

  // ---------- distractors ----------
  const group = x => x.u + '|' + x.lv;
  function distract(item, val, n = 3, pred) {
    pred = pred || (x => x.type === item.type);
    const seen = new Set([val(item)]);
    const pool = shuffle(NH.list.filter(x => x.id !== item.id && pred(x)));
    const rank = x => (x.u === item.u ? 0 : x.lv === item.lv ? 1 : 2);
    pool.sort((a, b) => rank(a) - rank(b));
    const out = [];
    for (const x of pool) {
      const v = val(x);
      if (!v || seen.has(v)) continue;
      seen.add(v); out.push(v); if (out.length === n) break;
    }
    return out;
  }

  const meaningVariants = en => en.toLowerCase().replace(/\(.*?\)/g, '').split(/[\/,;]| or /).map(s => s.trim().replace(/^to /, '')).filter(Boolean);
  const stripNum = s => s.replace(/\(.*?\)/g, '');

  // ---------- question builders ----------
  const choice = (item, o) => ({ item, kind: 'choice', ...o, options: shuffle(o.options) });
  const typed = (item, o) => ({ item, kind: 'type', ...o });
  const romCheck = accepts => input => {
    const raw = input.trim(), n = NH.normRom(raw);
    return accepts.some(a => a && (a === raw || (NH.normRom(a) === n && n)));
  };
  const enCheck = en => input => {
    const v = input.trim().toLowerCase().replace(/^to /, '');
    return !!v && meaningVariants(en).some(m => m === v);
  };

  function makeQ(item, stage) {
    const s = Math.max(1, stage || srs.stage(item.id) || 1);
    const T = item.type;

    if (T === 'kana') {
      const same = x => x.type === 'kana' && x.id.slice(0, 2) === item.id.slice(0, 2);
      const mnemonic = item.mn ? `<p class="mn">${esc(item.mn)}</p>` : '';
      const base = { say: item.ch, extra: mnemonic };
      if (s === 1) return choice(item, { ...base, prompt: item.ch, big: true, sub: 'Which sound?', answer: item.rom, options: [item.rom, ...distract(item, x => x.rom, 3, same)] });
      if (s === 2) return choice(item, { ...base, prompt: item.rom, big: true, sub: 'Which character?', answer: item.ch, optClass: 'kanaopt', options: [item.ch, ...distract(item, x => x.ch, 3, same)] });
      if (s === 3) return choice(item, { ...base, prompt: '🔊', big: true, sayFirst: true, sub: 'Listen — which character?', answer: item.ch, optClass: 'kanaopt', options: [item.ch, ...distract(item, x => x.ch, 3, same)] });
      return typed(item, { ...base, prompt: item.ch, big: true, sub: 'Type the romaji', answer: item.rom, check: romCheck([item.rom]) });
    }

    if (T === 'vocab') {
      const rd = item.kana !== item.jp ? `${item.kana} · ${item.rom}` : item.rom;
      const ex = item.ex ? `<p class="mn" data-say="${esc(item.ex)}">${esc(item.ex)}<br><small>${esc(item.exEn)}</small></p>` : '';
      const base = { say: item.kana, extra: `<p class="mn"><b>${esc(item.jp)}</b> ${esc(rd)} — ${esc(item.en)}</p>${ex}` };
      const enOpts = [item.en, ...distract(item, x => x.en)];
      const k = s >= 5 ? 5 + (Math.random() * 3 | 0) : s;
      if (k === 1) return choice(item, { ...base, prompt: item.jp, big: true, sub: rd, answer: item.en, options: enOpts });
      if (k === 2) return choice(item, { ...base, prompt: item.en, big: false, sub: 'Which Japanese word?', answer: item.jp, optClass: 'jpopt', options: [item.jp, ...distract(item, x => x.jp)] });
      if (k === 3) return choice(item, { ...base, prompt: '🔊', big: true, sayFirst: true, sub: 'Listen — what does it mean?', answer: item.en, options: enOpts });
      if (k === 4) return typed(item, { ...base, prompt: item.jp, big: true, sub: `${item.en} — type the reading (romaji or kana)`, answer: item.rom, check: romCheck([item.rom, item.kana, item.jp]) });
      if (k === 5) return typed(item, { ...base, prompt: item.en, big: false, sub: 'Type the Japanese reading (romaji or kana)', answer: item.rom, check: romCheck([item.rom, item.kana, item.jp]) });
      if (k === 6) return typed(item, { ...base, prompt: '🔊', big: true, sayFirst: true, sub: 'Listen — type what you hear (romaji or kana)', answer: item.rom, check: romCheck([item.rom, item.kana, item.jp]) });
      return typed(item, { ...base, prompt: item.jp, big: true, sub: 'Type the English meaning', answer: item.en, check: enCheck(item.en) });
    }

    if (T === 'kanji') {
      const words = NH.list.filter(x => x.type === 'vocab' && x.jp.includes(item.ch)).slice(0, 4);
      const base = { say: item.main, extra: `<p class="mn"><b>${esc(item.ch)}</b> ${esc(item.en)}<br>on: ${esc(item.on || '—')} · kun: ${esc(item.kun || '—')}</p><p class="mn">${esc(item.mn)}</p>${words.length ? `<p class="mn">${words.map(w => `${esc(w.jp)} (${esc(w.kana)})`).join(' · ')}</p>` : ''}` };
      const k = s >= 4 ? 4 + (Math.random() * 2 | 0) : s;
      if (k === 1) return choice(item, { ...base, prompt: item.ch, big: true, sub: 'Meaning?', answer: item.meanings[0], options: [item.meanings[0], ...distract(item, x => x.meanings[0])] });
      if (k === 2) return choice(item, { ...base, prompt: item.meanings[0], big: false, sub: 'Which kanji?', answer: item.ch, optClass: 'kanaopt', options: [item.ch, ...distract(item, x => x.ch)] });
      if (k === 3) return choice(item, { ...base, prompt: item.ch, big: true, sub: 'Pick a reading', answer: stripNum(item.main), options: [stripNum(item.main), ...distract(item, x => stripNum(x.main))] });
      if (k === 4) return typed(item, { ...base, prompt: item.ch, big: true, sub: 'Type the English meaning', answer: item.meanings.join(' / '), check: input => { const v = input.trim().toLowerCase(); return !!v && item.meanings.some(m => m.toLowerCase() === v); } });
      const rds = item.readings.flatMap(r => [NH.romaji(stripNum(r)), NH.romaji(r.replace(/[()]/g, ''))]);
      return typed(item, { ...base, prompt: item.ch, big: true, sub: 'Type any reading (romaji or kana)', answer: stripNum(item.main) + ` (${NH.romaji(stripNum(item.main))})`, check: input => { const raw = input.trim(); return item.readings.some(r => stripNum(r) === raw) || romCheck(rds)(input); } });
    }

    if (T === 'grammar') {
      const d = pick(item.drills);
      const filled = d[0].replace(/＿＿/, d[1]);
      return choice(item, { prompt: d[0], big: false, sub: d[3], say: filled, answer: d[1], options: [d[1], ...d[2]].slice(0, 4), extra: `<p class="mn"><b>${esc(item.title)}</b><br>${esc(filled)}<br><small>${esc(d[3])}</small></p>` });
    }

    if (T === 'line') {
      const pool = NH.dialogues.flatMap(d => d.lines.map(l => l[4])).filter(e => e !== item.en);
      return choice(item, { prompt: '🔊', big: true, sayFirst: true, sub: 'Listen — what does the line mean?', say: item.kana, answer: item.en,
        options: [item.en, ...shuffle([...new Set(pool)]).slice(0, 3)], optClass: 'sentopt',
        extra: `<p class="mn" data-say="${esc(item.kana)}"><b>${esc(item.jp)}</b><br>${esc(item.rom)}<br>${esc(item.en)}</p>` });
    }

    // custom
    const base = { say: item.kana || item.jp, extra: `<p class="mn"><b>${esc(item.jp)}</b> ${esc(item.rom)} — ${esc(item.en)}</p>` };
    const pred = x => !!x.en && x.type !== 'grammar' && x.type !== 'kanji' && x.type !== 'kana';
    if (s === 2) return choice(item, { ...base, prompt: item.en, big: false, sub: 'Which Japanese?', answer: item.jp, optClass: 'jpopt', options: [item.jp, ...distract(item, x => x.jp, 3, pred)] });
    if (s >= 4 && item.rom) return typed(item, { ...base, prompt: item.jp, big: item.jp.length < 8, sub: `${item.en} — type the reading`, answer: item.rom, check: romCheck([item.rom, item.kana, item.jp]) });
    return choice(item, { ...base, prompt: item.jp, big: item.jp.length < 8, sub: 'Meaning?', answer: item.en, options: [item.en, ...distract(item, x => x.en, 3, pred)] });
  }
  NH.makeQ = makeQ;
  // Virtual (non-SRS) items for listening drills
  NH.lineItems = (filter = () => true) => NH.dialogues.filter(filter).flatMap(d => d.lines.map((l, i) => ({ id: `dl:${d.id}:${i}`, type: 'line', lv: d.lv, u: d.u, jp: l[1], kana: l[2], rom: l[3], en: l[4] })));

  // ---------- detail card (lessons, library, unit lists) ----------
  NH.itemDetail = item => {
    const say = (t, c = '') => `data-say="${esc(t)}" ${c}`;
    if (item.type === 'kana') return `
      <div class="detail" ${say(item.ch)}><div class="huge">${esc(item.ch)}</div><div class="rom big">${esc(item.rom)}</div>
      <div class="strokebox" data-stroke="${esc(item.ch)}"></div>
      ${item.mn ? `<p class="mn">${esc(item.mn)}</p>` : ''}<p class="play">▶ tap to hear</p></div>`;
    if (item.type === 'vocab' || item.type === 'custom') return `
      <div class="detail"><div class="huge sm" ${say(item.kana || item.jp)}>${esc(item.jp)}</div>
      ${item.kana && item.kana !== item.jp ? `<div class="read">${esc(item.kana)}</div>` : ''}
      <div class="rom big">${esc(item.rom || '')}</div><div class="en big">${esc(item.en)}</div>
      ${item.ex ? `<div class="exbox" ${say(item.ex)}><span class="jp">${esc(item.ex)}</span><small>${esc(item.exEn)}</small><span class="play">▶</span></div>` : ''}
      <p class="play" ${say(item.kana || item.jp)}>▶ tap to hear</p></div>`;
    if (item.type === 'kanji') {
      const words = NH.list.filter(x => x.type === 'vocab' && x.jp.includes(item.ch));
      return `<div class="detail"><div class="huge" ${say(item.main)}>${esc(item.ch)}</div><div class="en big">${esc(item.en)}</div>
      <div class="strokebox" data-stroke="${esc(item.ch)}"></div>
      <table class="rd"><tr><td>on’yomi</td><td>${esc(item.on || '—')}</td></tr><tr><td>kun’yomi</td><td>${esc(item.kun || '—')}</td></tr></table>
      <p class="mn">${esc(item.mn)}</p>
      ${words.length ? `<h3>Words using it</h3>${words.map(w => `<div class="exbox" ${say(w.kana)}><span class="jp">${esc(w.jp)}</span><small>${esc(w.kana)} — ${esc(w.en)}</small><span class="play">▶</span></div>`).join('')}` : ''}
      </div>`;
    }
    // grammar
    return `<div class="detail gram"><div class="pat">${esc(item.pat)}</div><h3>${esc(item.title)}</h3><p class="gist">${esc(item.gist)}</p>
      ${item.body.map(b => `<p>${esc(b)}</p>`).join('')}
      <h3>Examples <small>(tap to hear)</small></h3>
      ${item.ex.map(e => `<div class="exbox" ${say(e[0])}><span class="jp">${esc(e[0])}</span><small>${esc(e[1])}</small><span class="play">▶</span></div>`).join('')}
      ${item.tip ? `<p class="mn tip">🎌 ${esc(item.tip)}</p>` : ''}</div>`;
  };

  // ---------- quiz session ----------
  // args: { title, items, mode: 'review' | 'lesson' | 'practice', stageFor?, after?(summary, el), again?() }
  NH.views.session = {
    full: true,
    title: a => a.title || 'Quiz',
    render(el, a) {
      const queue = [...a.items], total = a.items.length;
      const wrongFirst = new Set(), missed = [], sum = { xp: 0, ok: 0, n: 0 };
      let done = 0, cur = null;

      const bar = () => `<div class="sbar"><div style="width:${total ? (done / total * 100) : 0}%"></div></div>
        <div class="qhead"><span>${done}/${total}</span><button class="linkbtn" id="quit">✕ Quit</button></div>`;
      el.innerHTML = '';
      el.onclick = null;

      function nextQ() {
        if (!queue.length) return finish();
        const item = queue.shift();
        cur = { item, q: makeQ(item, a.stageFor ? a.stageFor(item) : undefined), answered: false, ok: false };
        drawQ();
        if (cur.q.sayFirst) setTimeout(() => NH.speak(cur.q.say), 250);
      }

      function drawQ() {
        const q = cur.q;
        el.innerHTML = `${bar()}
          <div class="qprompt ${q.big ? '' : 'small'}" id="qp" data-say="${esc(q.say)}">${esc(q.prompt)}<small>${esc(q.sub || '')}</small></div>
          ${q.kind === 'choice'
            ? `<div class="opts">${q.options.map(o => `<button class="opt ${q.optClass || ''}" data-o="${esc(o)}">${esc(o)}</button>`).join('')}</div>`
            : `<form id="tf" class="typeform"><input id="ans" type="text" autocomplete="off" autocapitalize="none" autocorrect="off" spellcheck="false" placeholder="Your answer">
               <button class="big-btn center" type="submit">Check</button></form>`}
          <div id="fb"></div>`;
        $('#quit').onclick = () => { if (confirm('Quit this session? Progress on answered items is kept.')) NH.back(); };
        if (q.kind === 'choice') {
          el.querySelector('.opts').onclick = e => {
            const b = e.target.closest('.opt'); if (!b || cur.answered) return;
            cur.answered = true;
            const ok = b.dataset.o === q.answer;
            b.classList.add(ok ? 'right' : 'wrong');
            if (!ok) el.querySelectorAll('.opt').forEach(x => x.dataset.o === q.answer && x.classList.add('right'));
            feedback(ok);
          };
        } else {
          const inp = $('#ans'); setTimeout(() => inp.focus(), 50);
          $('#tf').onsubmit = e => {
            e.preventDefault(); if (cur.answered || !inp.value.trim()) return;
            cur.answered = true; inp.disabled = true;
            const ok = q.check(inp.value);
            inp.classList.add(ok ? 'right' : 'wrong');
            cur.given = inp.value; feedback(ok);
          };
        }
      }

      function feedback(ok) {
        cur.ok = ok;
        const q = cur.q;
        NH.speak(q.say);
        const last = !queue.length && ok;
        $('#fb').innerHTML = `<div class="fb ${ok ? 'good' : 'bad'}">
          <b>${ok ? 'Correct!' : 'Not quite'}</b>${ok ? '' : ` <span>Answer: <b>${esc(q.answer)}</b></span>`}
          ${q.kind === 'type' && !ok ? `<span class="small">You typed “${esc(cur.given)}”. <button class="linkbtn" id="right">I was right</button></span>` : ''}
          ${q.extra || ''}</div>
          <button class="big-btn center" id="nx">${last ? 'Finish' : 'Next →'}</button>`;
        const r = $('#right');
        if (r) r.onclick = () => { cur.ok = true; r.replaceWith('Counted ✓'); };
        $('#nx').onclick = commit;
        $('#nx').focus?.();
      }

      function commit() {
        const item = cur.item, id = item.id, retry = wrongFirst.has(id), mode = a.mode;
        if (cur.ok) {
          if (!retry) {
            sum.ok++; sum.n++;
            if (mode === 'review') { srs.answer(id, true); sum.xp += 10; }
            else if (mode === 'lesson') { srs.learn(id, 1); sum.xp += 5; }
            else sum.xp += 3;
            NH.addXP(mode === 'review' ? 10 : mode === 'lesson' ? 5 : 3, { rev: 1, ok: 1 });
          } else if (mode === 'lesson') srs.learn(id, 1);
          done++;
        } else {
          if (!retry) {
            wrongFirst.add(id); missed.push(item); sum.n++;
            if (mode === 'review') srs.answer(id, false);
            NH.addXP(1, { rev: 1, ok: 0 }); sum.xp += 1;
          }
          queue.splice(Math.min(3, queue.length), 0, item);
        }
        nextQ();
      }

      function finish() {
        const pct = sum.n ? Math.round(sum.ok / sum.n * 100) : 100;
        const extra = a.after ? a.after({ pct, missed, sum }) : '';
        el.innerHTML = `${bar()}<div class="card pad center">
          <div class="qprompt">${pct}%</div>
          <p class="lead">${sum.ok}/${sum.n} right on the first try · +${sum.xp} XP</p>
          <p class="lead">${pct >= 90 ? 'Sugoi! すごい！' : pct >= 70 ? 'Ii ne! いいね！' : 'Ganbatte! がんばって！'}</p>
          ${missed.length ? `<h3>Review these</h3><ul class="rows">${missed.map(m => `<li data-say="${esc(m.kana || m.ch || m.jp || '')}"><span class="jp">${esc(m.jp || m.ch || m.title)}</span><span class="mid"><b>${esc(m.en || m.rom || m.gist || '')}</b></span><span class="play">▶</span></li>`).join('')}</ul>` : ''}
          ${extra ? extra.html : ''}
          ${a.again ? '<button class="big-btn center" id="again">Keep going</button>' : ''}
          <button class="big-btn center ghost" id="done">Done</button></div>`;
        $('#quit')?.remove();
        $('#done').onclick = () => NH.back();
        if (a.again) $('#again').onclick = () => { const next = a.again(); next ? NH.replace('session', next) : NH.back(); };
        extra?.bind?.(el);
      }

      nextQ();
    },
  };

  // ---------- lesson (teach cards, then quiz) ----------
  NH.views.lesson = {
    full: true, title: 'New items',
    render(el, a) {
      const items = a.items; let i = 0;
      const draw = () => {
        const it = items[i];
        el.innerHTML = `<div class="sbar"><div style="width:${i / items.length * 100}%"></div></div>
          <div class="qhead"><span>${NH.typeLabel[it.type]} ${i + 1}/${items.length}</span><button class="linkbtn" id="quit">✕ Close</button></div>
          <div class="card pad">${NH.itemDetail(it)}</div>
          <button class="big-btn center" id="nx">${i === items.length - 1 ? 'Start quiz →' : 'Next →'}</button>
          <button class="big-btn center ghost" id="known">I already know this</button>`;
        $('#quit').onclick = () => NH.back();
        $('#nx').onclick = () => { if (++i < items.length) { draw(); window.scrollTo(0, 0); } else NH.replace('session', { title: 'Quick quiz', items, mode: 'lesson', again: a.again }); };
        $('#known').onclick = () => { srs.learn(it.id, 4); items.splice(i, 1); NH.toast('Marked as known'); if (!items.length) NH.back(); else { if (i >= items.length) i = items.length - 1; draw(); } };
        NH.mountStrokes(el);
        if (it.type === 'kana' || it.type === 'vocab') setTimeout(() => NH.speak(it.kana || it.ch || it.jp), 250);
      };
      draw();
    },
  };

  // Helpers for starting sessions
  NH.startLesson = (unitId, n = 5) => {
    const pending = NH.unitItems(unitId).filter(i => !srs.stage(i.id));
    if (!pending.length) return NH.toast('Everything in this unit is already started');
    const batch = pending.slice(0, n);
    NH.go('lesson', { items: batch, again: () => { const left = NH.unitItems(unitId).filter(i => !srs.stage(i.id)); return left.length ? { title: 'Quick quiz', items: left.slice(0, n), mode: 'lesson' } : null; } });
  };
  NH.reviewArgs = (filter, max = 20) => {
    const due = NH.srs.due(filter);
    if (!due.length) return null;
    return { title: 'Reviews', items: shuffle(due).slice(0, max), mode: 'review', again: () => NH.reviewArgs(filter, max) };
  };
  NH.startReview = (filter, max = 20) => {
    const args = NH.reviewArgs(filter, max);
    if (!args) return NH.toast('Nothing due right now 🎉');
    NH.go('session', args);
  };
  NH.startPractice = (items, title = 'Practice', n = 15, extra = {}) => {
    const pick_ = shuffle(items).slice(0, n);
    if (!pick_.length) return NH.toast('Start learning some items first');
    NH.go('session', { title, items: pick_, mode: 'practice', stageFor: it => srs.stage(it.id) || (1 + (Math.random() * 3 | 0)), ...extra });
  };
})();
