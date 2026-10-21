// Shared helpers, storage, speech, navigation shell.
(() => {
  const NH = window.NH = { views: {}, items: {}, list: [], units: [], levels: [], byUnit: {}, stack: [], tab: 'today' };
  const $ = (s, r = document) => r.querySelector(s);
  NH.$ = $;
  NH.esc = s => String(s ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  NH.shuffle = a => { a = [...a]; for (let i = a.length - 1; i > 0; i--) { const j = Math.random() * (i + 1) | 0; [a[i], a[j]] = [a[j], a[i]]; } return a; };
  NH.pick = a => a[Math.random() * a.length | 0];

  // ---------- storage (safe if blocked) ----------
  NH.store = {
    get(k, d) { try { const v = localStorage.getItem('nh.' + k); return v == null ? d : JSON.parse(v); } catch { return d; } },
    set(k, v) { try { localStorage.setItem('nh.' + k, JSON.stringify(v)); } catch {} },
    keys: ['profile', 'srs', 'custom', 'fav', 'read'],
  };
  NH.profile = Object.assign({ xp: 0, goal: 50, days: {}, slow: false, showRom: true, showRead: true }, NH.store.get('profile', {}));
  NH.saveProfile = () => NH.store.set('profile', NH.profile);

  // ---------- dates / xp / streak ----------
  const pad = n => String(n).padStart(2, '0');
  NH.dayKey = (d = new Date()) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
  NH.addXP = (n, { rev = 0, ok = 0 } = {}) => {
    const k = NH.dayKey(), d = NH.profile.days[k] || (NH.profile.days[k] = { xp: 0, rev: 0, ok: 0 });
    d.xp += n; d.rev += rev; d.ok += ok; NH.profile.xp += n; NH.saveProfile();
  };
  NH.todayXP = () => (NH.profile.days[NH.dayKey()] || { xp: 0 }).xp;
  NH.streak = () => {
    const d = new Date(); let n = 0;
    if (!(NH.profile.days[NH.dayKey(d)]?.xp > 0)) d.setDate(d.getDate() - 1);
    while (NH.profile.days[NH.dayKey(d)]?.xp > 0) { n++; d.setDate(d.getDate() - 1); }
    return n;
  };

  // ---------- kana helpers ----------
  NH.toKata = s => [...s].map(c => (c >= 'ぁ' && c <= 'ゖ') ? String.fromCharCode(c.charCodeAt(0) + 0x60) : c).join('');
  NH.toHira = s => [...s].map(c => (c >= 'ァ' && c <= 'ヶ') ? String.fromCharCode(c.charCodeAt(0) - 0x60) : c).join('');
  const MONO = {};
  'あa いi うu えe おo かka きki くku けke こko さsa しshi すsu せse そso たta ちchi つtsu てte とto なna にni ぬnu ねne のno はha ひhi ふfu へhe ほho まma みmi むmu めme もmo やya ゆyu よyo らra りri るru れre ろro わwa をo んn がga ぎgi ぐgu げge ごgo ざza じji ずzu ぜze ぞzo だda ぢji づzu でde どdo ばba びbi ぶbu べbe ぼbo ぱpa ぴpi ぷpu ぺpe ぽpo ゔvu ぁa ぃi ぅu ぇe ぉo'
    .split(' ').forEach(p => { MONO[p[0]] = p.slice(1); });
  // Hepburn-style romaji from kana (hiragana or katakana). Long vowels stay as written (ou, oo, aa…).
  NH.romaji = kana => {
    const s = NH.toHira(kana); let out = '', gem = false;
    for (let i = 0; i < s.length; i++) {
      const c = s[i];
      if (c === 'っ') { gem = true; continue; }
      if (c === 'ー') { const m = out.match(/[aiueo]$/); if (m) out += m[0]; continue; }
      let r = MONO[c];
      if (r === undefined) { out += ({ '。': '.', '、': ',', '！': '!', '？': '?', '…': '...', '・': ' ' }[c] ?? c); continue; }
      const nx = s[i + 1];
      if (nx && 'ゃゅょ'.includes(nx)) {
        const v = { 'ゃ': 'a', 'ゅ': 'u', 'ょ': 'o' }[nx], stem = r.slice(0, -1);
        r = ['sh', 'ch', 'j'].includes(stem) ? stem + v : stem + 'y' + v; i++;
      } else if (nx && 'ぁぃぅぇぉ'.includes(nx)) {
        const v = MONO[nx];
        if (c === 'ふ') r = 'f' + v;
        else if (c === 'て' || c === 'で') r = (c === 'て' ? 't' : 'd') + v;
        else if (c === 'う') r = 'w' + v;
        else if (['し', 'ち', 'じ'].includes(c)) r = r.slice(0, -1) + v;
        i++;
      }
      if (gem) { r = (r.startsWith('ch') ? 't' : r[0]) + r; gem = false; }
      out += r;
    }
    return out;
  };
  // Normalise typed romaji so ō / ou / oo, si / shi, etc. compare equal.
  NH.normRom = s => {
    s = String(s).toLowerCase().replace(/ā/g, 'aa').replace(/ī/g, 'ii').replace(/ū/g, 'uu').replace(/ē/g, 'ee').replace(/[ōô]/g, 'oo')
      .replace(/[^a-z]/g, '');
    return s.replace(/sy([auo])/g, 'sh$1').replace(/ty([auo])/g, 'ch$1').replace(/[zj]y([auo])/g, 'j$1')
      .replace(/si/g, 'shi').replace(/ti/g, 'chi').replace(/tu/g, 'tsu').replace(/hu/g, 'fu').replace(/zi/g, 'ji')
      .replace(/ou/g, 'oo').replace(/ei/g, 'ee').replace(/wo/g, 'o').replace(/nn/g, 'n');
  };

  // ---------- speech ----------
  let voice = null;
  const jaVoices = () => ('speechSynthesis' in window ? speechSynthesis.getVoices() : []).filter(v => /^ja/i.test((v.lang || '').replace('_', '-')));
  NH.jaVoices = jaVoices;
  const pickVoice = () => {
    const vs = jaVoices();
    voice = vs.find(v => v.name === NH.profile.voice) || vs.find(v => /premium|enhanced|siri/i.test(v.name)) || vs.find(v => /kyoko|o-ren/i.test(v.name)) || vs[0] || null;
  };
  NH.pickVoice = pickVoice;
  if ('speechSynthesis' in window) { pickVoice(); speechSynthesis.addEventListener?.('voiceschanged', pickVoice); }
  NH.speak = (text, opt = {}) => {
    if (!text) return;
    if (!('speechSynthesis' in window)) return NH.toast('Speech not supported on this device');
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(String(text).replace(/[＿_]+/g, ' '));
    u.lang = 'ja-JP'; if (voice) u.voice = voice; u.rate = NH.profile.slow ? 0.55 : (NH.profile.rate || 0.9);
    if (opt.pitch) u.pitch = opt.pitch;
    if (opt.onend) { u.onend = opt.onend; u.onerror = opt.onend; }
    speechSynthesis.speak(u);
    if (!voice) pickVoice();
  };
  document.addEventListener('click', e => {
    const el = e.target.closest('[data-say]');
    if (el && !e.target.closest('[data-nosay]')) NH.speak(el.dataset.say);
  });

  let tt;
  NH.toast = msg => {
    let t = $('#toast'); if (!t) { t = document.createElement('div'); t.id = 'toast'; document.body.append(t); }
    t.textContent = msg; t.classList.add('show'); clearTimeout(tt); tt = setTimeout(() => t.classList.remove('show'), 2200);
  };

  NH.REPO = 'https://github.com/Quil1325/jp-learning';
  NH.reportUrl = what => `${NH.REPO}/issues/new?title=${encodeURIComponent('Content issue: ' + what)}&body=${encodeURIComponent('What looks wrong, and what should it be?\n\n(Item: ' + what + ')')}`;
  NH.standalone = () => !!(window.navigator.standalone || (window.matchMedia && matchMedia('(display-mode: standalone)').matches));

  // ---------- stroke order viewer (data: KanjiVG, CC BY-SA 3.0) ----------
  let strokesP = null;
  NH.loadStrokes = () => strokesP || (strokesP = window.NH_STROKES ? Promise.resolve(NH_STROKES) : new Promise((res, rej) => {
    const sc = document.createElement('script'); sc.src = 'strokes.js';
    sc.onload = () => res(window.NH_STROKES); sc.onerror = () => { strokesP = null; rej(); };
    document.head.append(sc);
  }));
  NH.mountStrokes = root => {
    root.querySelectorAll('[data-stroke]:not([data-mounted])').forEach(box => {
      box.dataset.mounted = '1';
      NH.loadStrokes().then(data => {
        const chars = [...box.dataset.stroke].filter(c => data[c]);
        if (!chars.length) { box.remove(); return; }
        box.innerHTML = `<div class="svgs">${chars.map(c => `<svg viewBox="0 0 109 109" class="kvg" data-c="${c}">
          ${data[c].map(st => `<path d="${st[0]}" class="ghost"/>`).join('')}
          ${data[c].map(st => `<path d="${st[0]}" class="ink" pathLength="1"/>`).join('')}
          ${data[c].map((st, i) => `<text x="${st[1]}" y="${st[2]}" class="num" opacity="0">${i + 1}</text>`).join('')}</svg>`).join('')}</div>
          <div class="btns"><button class="chip play">▶ Stroke order</button><button class="chip prac">✍ Practice</button></div>
          <div class="practice" hidden></div>`;
        const play = () => {
          let t = 0;
          box.querySelectorAll('.svgs svg').forEach(svg => {
            svg.querySelectorAll('.ink').forEach(p => { p.getAnimations?.().forEach(a => a.cancel()); p.style.strokeDashoffset = 1; });
            svg.querySelectorAll('.num').forEach(n => n.setAttribute('opacity', '0'));
            const inks = svg.querySelectorAll('.ink'), nums = svg.querySelectorAll('.num');
            inks.forEach((p, i) => {
              const a = p.animate([{ strokeDashoffset: 1 }, { strokeDashoffset: 0 }], { duration: 550, delay: t, fill: 'forwards', easing: 'ease-in-out' });
              a.onfinish = () => { p.style.strokeDashoffset = 0; nums[i]?.setAttribute('opacity', '1'); };
              t += 650;
            });
          });
        };
        box.querySelector('.play').onclick = play;
        const prac = box.querySelector('.practice');
        box.querySelector('.prac').onclick = e => {
          const open = prac.hidden; prac.hidden = !open; e.target.textContent = open ? '✕ Close practice' : '✍ Practice';
          if (open) { NH.practiceInto(prac, chars, data); prac.scrollIntoView({ block: 'nearest', behavior: 'smooth' }); } else prac.innerHTML = '';
        };
        box.querySelectorAll('.svgs svg').forEach(svg => svg.querySelectorAll('.ink').forEach(p => { p.style.strokeDashoffset = 0; }));
        box.querySelectorAll('.num').forEach(n => n.setAttribute('opacity', '1'));
        setTimeout(play, 300);
      }).catch(() => box.remove());
    });
  };

  // ---------- navigation ----------
  const ROOT = { today: 'today', path: 'path', library: 'library', read: 'read', me: 'me' };
  const main = () => $('#view');
  NH.draw = () => {
    const top = NH.stack[NH.stack.length - 1], v = NH.views[top.name];
    const el = main(); el.onclick = null; el.oninput = null; el.className = '';
    document.body.classList.toggle('full', !!v.full);
    $('#back').hidden = NH.stack.length < 2;
    $('#title').textContent = (typeof v.title === 'function' ? v.title(top.args) : v.title) || '';
    v.render(el, top.args || {});
    NH.mountStrokes(el);
    document.querySelectorAll('.tabs button').forEach(b => b.classList.toggle('on', b.dataset.tab === NH.tab));
  };
  NH.go = (name, args = {}) => { NH.stack.push({ name, args }); NH.draw(); window.scrollTo(0, 0); };
  NH.replace = (name, args = {}) => { NH.stack[NH.stack.length - 1] = { name, args }; NH.draw(); window.scrollTo(0, 0); };
  NH.back = () => { if (NH.stack.length > 1) { NH.stack.pop(); NH.draw(); } };
  NH.setTab = t => { NH.tab = t; NH.stack = [{ name: ROOT[t], args: {} }]; NH.draw(); window.scrollTo(0, 0); };

  NH.boot = () => {
    $('.tabs').onclick = e => { const b = e.target.closest('button'); if (b) NH.setTab(b.dataset.tab); };
    $('#back').onclick = NH.back;
    const sp = $('#speed');
    const sync = () => { sp.textContent = NH.profile.slow ? '🐢 Slow' : 'Normal'; sp.classList.toggle('on', NH.profile.slow); };
    sp.onclick = () => { NH.profile.slow = !NH.profile.slow; NH.saveProfile(); sync(); };
    sync();
    try { navigator.storage?.persist?.(); } catch {}
    NH.setTab('today');
    if ('serviceWorker' in navigator && location.protocol !== 'file:') navigator.serviceWorker.register('sw.js').catch(() => {});
  };
})();
