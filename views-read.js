// Read & Listen: graded dialogues, shadowing with record/playback, sentence mining.
(() => {
  const NH = window.NH, { esc, $ } = NH;

  NH.views.read = {
    title: 'Read & listen',
    render(el) {
      const done = NH.store.get('read', []);
      el.innerHTML = `<p class="hint">Short scenes written for each level. Listen first, read along, then <b>shadow</b> (repeat each line out loud) and save lines you like to your review deck.</p>` +
        NH.levels.filter(l => NH.dialogues.some(d => d.lv === l.n)).map(l => `<h2>Level ${l.n} · ${esc(l.name)}</h2>` +
          NH.dialogues.filter(d => d.lv === l.n).map(d => `<button class="tile wide" data-d="${d.id}"><b>${done.includes(d.id) ? '✅' : '🎧'} ${esc(d.title)}</b><small>${esc(d.blurb)} · ${d.lines.length} lines</small></button>`).join('')).join('');
      el.onclick = e => { const b = e.target.closest('[data-d]'); if (b) NH.go('dialogue', { id: b.dataset.d }); };
    },
  };

  const PITCH = [1.0, 1.25, 0.8, 1.1];

  NH.views.dialogue = {
    title: a => NH.dialogues.find(d => d.id === a.id)?.title || 'Dialogue',
    render(el, a) {
      const d = NH.dialogues.find(x => x.id === a.id);
      const who = [...new Set(d.lines.map(l => l[0]))];
      let showRead = NH.profile.showRead !== false, showEn = NH.profile.showEn !== false, playing = false, rec = null;

      const draw = () => {
        el.innerHTML = `
          <div class="seg tog"><button id="tRead" class="${showRead ? 'on' : ''}">Reading</button><button id="tEn" class="${showEn ? 'on' : ''}">English</button><button id="tPlay">${playing ? '■ Stop' : '▶ Play all'}</button></div>
          <div class="chat">${d.lines.map((l, i) => `
            <div class="line s${who.indexOf(l[0]) % 4}" data-i="${i}">
              <small class="who">${esc(l[0])}</small>
              <div class="bubble" data-line="${i}">
                <span class="jp">${esc(l[1])}</span>
                ${showRead && l[2] !== l[1] ? `<span class="read">${esc(l[2])}</span>` : ''}
                ${showRead ? `<span class="rom">${esc(NH.romaji(l[2]))}</span>` : ''}
                ${showEn ? `<span class="en">${esc(l[3])}</span>` : ''}
              </div>
              <div class="tools"><button data-rec="${i}" class="chip ${rec === i ? 'on' : ''}">${rec === i ? '■ Stop' : '🎤 Shadow'}</button><button data-save="${i}" class="chip">＋ Save line</button><span class="mine" id="m${i}"></span></div>
            </div>`).join('')}</div>
          <button class="big-btn center" id="doneRead">Mark as read (+10 XP)</button>
          <p class="hint">Shadowing: tap a line to hear it, then 🎤 to record yourself and compare. Use 🐢 Slow at the top for a slower model.</p>`;
        bind();
      };

      const pitchFor = l => PITCH[who.indexOf(l[0]) % 4];
      const speakLine = (i, cb) => NH.speak(d.lines[i][2], { pitch: pitchFor(d.lines[i]), onend: cb });

      function playAll() {
        if (playing) { playing = false; speechSynthesis.cancel(); return draw(); }
        playing = true; draw();
        let i = 0;
        const step = () => {
          if (!playing || i >= d.lines.length) { playing = false; return draw(); }
          const bubble = el.querySelector(`[data-line="${i}"]`); bubble?.classList.add('hot');
          speakLine(i, () => { bubble?.classList.remove('hot'); i++; setTimeout(step, 250); });
        };
        step();
      }

      async function toggleRec(i) {
        if (rec === i && mr) { mr.stop(); return; }
        if (!navigator.mediaDevices?.getUserMedia || !window.MediaRecorder) return NH.toast('Recording is not supported in this browser');
        try {
          const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
          const chunks = []; mr = new MediaRecorder(stream);
          mr.ondataavailable = e => chunks.push(e.data);
          mr.onstop = () => {
            stream.getTracks().forEach(t => t.stop());
            const url = URL.createObjectURL(new Blob(chunks, { type: mr.mimeType || 'audio/mp4' }));
            const idx = rec; rec = null; mr = null; draw();
            const slot = $('#m' + idx); if (slot) slot.innerHTML = `<audio controls src="${url}"></audio>`;
            NH.addXP(2);
          };
          rec = i; mr.start(); draw();
        } catch { NH.toast('Microphone permission is needed to record'); }
      }
      let mr = null;

      function bind() {
        $('#tRead').onclick = () => { showRead = !showRead; NH.profile.showRead = showRead; NH.saveProfile(); draw(); };
        $('#tEn').onclick = () => { showEn = !showEn; NH.profile.showEn = showEn; NH.saveProfile(); draw(); };
        $('#tPlay').onclick = playAll;
        $('#doneRead').onclick = () => {
          const r = NH.store.get('read', []);
          if (!r.includes(d.id)) { r.push(d.id); NH.store.set('read', r); NH.addXP(10); NH.toast('+10 XP'); }
          NH.back();
        };
        el.querySelectorAll('[data-line]').forEach(b => b.onclick = () => speakLine(+b.dataset.line));
        el.querySelectorAll('[data-rec]').forEach(b => b.onclick = e => { e.stopPropagation(); toggleRec(+b.dataset.rec); });
        el.querySelectorAll('[data-save]').forEach(b => b.onclick = e => {
          e.stopPropagation();
          const l = d.lines[+b.dataset.save];
          const it = NH.addCustom({ jp: l[1], kana: l[2], en: l[3] });
          if (!NH.srs.stage(it.id)) NH.srs.learn(it.id, 1);
          NH.toast('Saved to your review deck'); b.textContent = '✓ Saved';
        });
      }
      draw();
    },
  };
})();
