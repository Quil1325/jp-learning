// Stroke practice: draw each stroke with a finger / mouse, checked against KanjiVG stroke paths.
(() => {
  const NH = window.NH, NS = 'http://www.w3.org/2000/svg';
  const dist = (a, b) => Math.hypot(a[0] - b[0], a[1] - b[1]);
  const el = (tag, attrs = {}) => { const n = document.createElementNS(NS, tag); for (const k in attrs) n.setAttribute(k, attrs[k]); return n; };

  // Compare a drawn stroke (array of [x,y] in 0..109 space) to the expected path element.
  function check(pathEl, pts) {
    const len = pathEl.getTotalLength(), start = pathEl.getPointAtLength(0), end = pathEl.getPointAtLength(len);
    if (pts.length < 2) return false;
    let drawn = 0; for (let i = 1; i < pts.length; i++) drawn += dist(pts[i - 1], pts[i]);
    if (len > 14 && drawn < len * 0.45) return false;
    if (drawn > len * 2.6 + 20) return false;
    const exp = []; for (let i = 0; i <= 30; i++) { const p = pathEl.getPointAtLength(len * i / 30); exp.push([p.x, p.y]); }
    const near = p => Math.min(...exp.map(e => dist(e, p)));
    const avg = pts.reduce((s, p) => s + near(p), 0) / pts.length;
    // direction matters: starts near the start, ends near the end
    const tol = Math.min(24, Math.max(7, len * 0.55));
    const dirOk = dist(pts[0], [start.x, start.y]) < tol && dist(pts[pts.length - 1], [end.x, end.y]) < tol;
    return dirOk && avg < 15;
  }

  // Build one practice board per character.
  NH.practiceInto = (box, chars, data) => {
    box.innerHTML = '';
    chars.forEach(c => {
      const strokes = data[c];
      const wrap = document.createElement('div'); wrap.className = 'pboard';
      const svg = el('svg', { viewBox: '0 0 109 109', class: 'pr' });
      const ghost = el('g'), done = el('g'), live = el('g');
      const hid = el('g', { visibility: 'hidden' });
      strokes.forEach(s => { ghost.append(el('path', { d: s[0], class: 'ghost' })); hid.append(el('path', { d: s[0] })); });
      const hint = el('circle', { r: 4.5, class: 'hintdot' });
      const hintNum = el('text', { class: 'hintnum' });
      svg.append(el('line', { x1: 54.5, y1: 4, x2: 54.5, y2: 105, class: 'grid' }), el('line', { x1: 4, y1: 54.5, x2: 105, y2: 54.5, class: 'grid' }), ghost, done, live, hint, hintNum, hid);
      const msg = document.createElement('div'); msg.className = 'pmsg';
      const row = document.createElement('div'); row.className = 'prow2';
      row.innerHTML = '<button class="chip" data-a="guide">Guide: on</button><button class="chip" data-a="skip">Skip stroke</button><button class="chip" data-a="reset">Start over</button>';
      wrap.append(svg, msg, row); box.append(wrap);

      let i = 0, pts = [], fails = 0, guide = true, drawing = null, finished = false;
      const paths = [...hid.children];
      const showHint = () => {
        if (i >= strokes.length) { hint.setAttribute('visibility', 'hidden'); hintNum.setAttribute('visibility', 'hidden'); return; }
        const p = paths[i].getPointAtLength(0);
        hint.setAttribute('cx', p.x); hint.setAttribute('cy', p.y); hint.setAttribute('visibility', 'visible');
        hintNum.setAttribute('x', p.x + 5); hintNum.setAttribute('y', p.y - 5); hintNum.textContent = i + 1; hintNum.setAttribute('visibility', 'visible');
        msg.textContent = `Stroke ${i + 1} of ${strokes.length} — start at the dot`;
      };
      const accept = () => {
        done.append(el('path', { d: strokes[i][0], class: 'okstroke' }));
        i++; fails = 0;
        if (i >= strokes.length) {
          finished = true; msg.textContent = '✓ Nice! Tap "Start over" to try again without the guide.'; NH.addXP(2); showHint();
        } else showHint();
      };
      const reset = () => { done.innerHTML = ''; live.innerHTML = ''; i = 0; fails = 0; finished = false; showHint(); };
      const toPt = e => { const r = svg.getBoundingClientRect(); return [(e.clientX - r.left) / r.width * 109, (e.clientY - r.top) / r.height * 109]; };

      svg.addEventListener('pointerdown', e => {
        if (finished) return;
        e.preventDefault(); svg.setPointerCapture(e.pointerId);
        pts = [toPt(e)]; drawing = el('path', { class: 'inkdraw', d: `M${pts[0][0].toFixed(1)},${pts[0][1].toFixed(1)}` }); live.append(drawing);
      });
      svg.addEventListener('pointermove', e => {
        if (!drawing) return; e.preventDefault();
        const p = toPt(e); pts.push(p); drawing.setAttribute('d', drawing.getAttribute('d') + ` L${p[0].toFixed(1)},${p[1].toFixed(1)}`);
      });
      const end = e => {
        if (!drawing) return;
        const ok = check(paths[i], pts);
        drawing.remove(); drawing = null; live.innerHTML = '';
        if (ok) accept();
        else {
          fails++;
          svg.classList.add('shake'); setTimeout(() => svg.classList.remove('shake'), 300);
          msg.textContent = fails >= 2 ? 'Not quite — follow the direction from the dot, or tap Skip stroke.' : 'Not quite — try again.';
          if (fails >= 2 && !guide) { ghost.removeAttribute('opacity'); }
        }
      };
      svg.addEventListener('pointerup', end); svg.addEventListener('pointercancel', () => { if (drawing) { drawing.remove(); drawing = null; } });
      ['touchstart', 'touchmove'].forEach(t => svg.addEventListener(t, e => e.preventDefault(), { passive: false }));

      row.onclick = e => {
        const b = e.target.closest('[data-a]'); if (!b) return;
        if (b.dataset.a === 'guide') { guide = !guide; ghost.setAttribute('opacity', guide ? '1' : '0'); b.textContent = 'Guide: ' + (guide ? 'on' : 'off'); }
        if (b.dataset.a === 'skip' && !finished) accept();
        if (b.dataset.a === 'reset') reset();
      };
      showHint();
    });
  };
})();
