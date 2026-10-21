// Me: stats, goals, my words, backup & restore.
(() => {
  const NH = window.NH, { esc, $ } = NH, srs = NH.srs;

  NH.views.me = {
    title: 'Me',
    render(el) {
      const days = [];
      const d0 = new Date();
      for (let i = 13; i >= 0; i--) { const d = new Date(d0); d.setDate(d.getDate() - i); const k = NH.dayKey(d); days.push({ k, xp: NH.profile.days[k]?.xp || 0, d: d.getDate() }); }
      const max = Math.max(50, ...days.map(x => x.xp));
      const tot = Object.values(NH.profile.days).reduce((a, x) => ({ rev: a.rev + x.rev, ok: a.ok + x.ok }), { rev: 0, ok: 0 });
      const types = ['kana', 'vocab', 'kanji', 'grammar'];
      const mine = NH.list.filter(i => i.type === 'custom'), voices = NH.jaVoices();
      el.innerHTML = `
        <div class="card pad"><div class="stat-row">
          <div><b>🔥 ${NH.streak()}</b><small>day streak</small></div><div><b>⭐ ${NH.profile.xp}</b><small>XP</small></div>
          <div><b>${tot.rev ? Math.round(tot.ok / tot.rev * 100) : 0}%</b><small>accuracy</small></div></div>
          <div class="bars">${days.map(x => `<div><i style="height:${Math.max(3, x.xp / max * 60)}px" class="${x.xp >= NH.profile.goal ? 'hit' : ''}"></i><small>${x.d}</small></div>`).join('')}</div>
        </div>

        <h2>Progress by type</h2>
        <div class="card pad">${types.map(t => { const items = NH.list.filter(i => i.type === t), c = srs.counts(items); return `
          <div class="prow"><span>${NH.typeLabel[t]}</span><div class="stackbar">${NH.BUCKETS.map(b => `<i class="${b}" style="flex:${c[b]}"></i>`).join('')}<i class="new" style="flex:${c.new}"></i></div><small>${NH.started(items)}/${items.length}</small></div>`; }).join('')}
          <p class="legend"><i class="learning"></i>learning <i class="familiar"></i>familiar <i class="strong"></i>strong <i class="mastered"></i>mastered <i class="new"></i>new</p></div>

        <h2>Settings</h2>
        <div class="card pad">
          <label class="field">Daily goal
            <select id="goal">${[20, 50, 100, 200].map(n => `<option ${n === NH.profile.goal ? 'selected' : ''} value="${n}">${n} XP${n === 20 ? ' (casual)' : n === 50 ? ' (regular)' : n === 100 ? ' (serious)' : ' (intense)'}</option>`).join('')}</select></label>
        </div>

        <h2>Voice</h2>
        <div class="card pad">
          <label class="field">Japanese voice
            <select id="voice">${voices.length ? voices.map(v => `<option value="${esc(v.name)}" ${v.name === NH.profile.voice ? 'selected' : ''}>${esc(v.name)}</option>`).join('') : '<option>No Japanese voice found</option>'}</select></label>
          <label class="field">Speed: <span id="rv">${(NH.profile.rate || 0.9).toFixed(2)}</span>
            <input type="range" id="rate" min="0.5" max="1.1" step="0.05" value="${NH.profile.rate || 0.9}"></label>
          <button class="big-btn ghost center" id="vtest">▶ Test voice (ありがとう、がんばって！)</button>
          <p class="lead">No sound? Turn the volume up and tap the test button. The app asks iOS to play speech even when the silent switch is on; if it's still silent, flip the switch (side of the phone) to ring.</p>
          <p class="lead">For the best sound on iPhone, install a better voice: <b>Settings → Accessibility → Spoken Content → Voices → Japanese</b>, then download <b>Kyoko (Enhanced)</b> or another “Enhanced / Premium” voice. Pick it here.</p>
        </div>

        <h2>My words (${mine.length})</h2>
        <div class="card pad">
          <p class="lead">Sentence mining: add words and lines you meet in anime. They join your review deck.</p>
          <form id="addf" class="stackform">
            <input id="aj" placeholder="Japanese (e.g. 必殺技)" required autocapitalize="off">
            <input id="ak" placeholder="Reading in kana (optional)" autocapitalize="off">
            <input id="ae" placeholder="Meaning" required autocapitalize="off">
            <button class="big-btn center" type="submit">Add to review deck</button>
          </form>
          <ul class="rows">${mine.map(i => `<li><span class="mid"><b>${esc(i.jp)}</b><small>${esc(i.en)}</small></span><button class="info" data-del="${esc(i.id)}">✕</button></li>`).join('')}</ul>
        </div>

        <h2>Backup</h2>
        <div class="card pad">
          <p class="lead">Your progress lives in this browser. Safari can clear it if you don't open the app for a long time, so save a backup now and then.</p>
          <button class="big-btn ghost center" id="exp">⬇ Download backup</button>
          <button class="big-btn ghost center" id="cp">Copy backup to clipboard</button>
          <textarea id="imp" rows="3" placeholder="Paste a backup here to restore"></textarea>
          <button class="big-btn ghost center" id="restore">Restore from pasted backup</button>
          <button class="linkbtn danger" id="reset">Reset all progress</button>
        </div>

        <h2>App version</h2>
        <div class="card pad"><p class="lead">Version <b>${esc(window.NH_VERSION || 'dev')}</b>. If a new feature isn't showing, tap below: it clears the offline copy and loads the newest files (your progress is kept).</p>
          <button class="big-btn ghost center" id="upd">↻ Get latest version</button></div>

        <h2>About & credits</h2>
        <div class="card pad"><p class="lead">Stroke-order animations use <a href="https://kanjivg.tagaini.net" target="_blank" rel="noopener">KanjiVG</a> © Ulrich Apel and contributors, licensed <a href="https://creativecommons.org/licenses/by-sa/3.0/" target="_blank" rel="noopener">CC BY-SA 3.0</a>. Course content was written for this app and has not been reviewed by a native speaker — if something looks wrong, tap “Report a mistake” on any item.</p>
        <a class="linkbtn" target="_blank" rel="noopener" href="${esc(NH.REPO)}/issues/new">Report a problem or suggest content</a></div>`;
      const vs = $('#voice');
      if (vs && voices.length) { const cur = NH.profile.voice && voices.find(v => v.name === NH.profile.voice); if (cur) vs.value = cur.name; vs.onchange = () => { NH.profile.voice = vs.value; NH.saveProfile(); NH.pickVoice(); NH.speak('ありがとう'); }; }
      $('#rate').oninput = e => { NH.profile.rate = +e.target.value; $('#rv').textContent = (+e.target.value).toFixed(2); NH.saveProfile(); };
      $('#vtest').onclick = () => NH.speak('ありがとう、がんばって！');
      $('#upd').onclick = () => { NH.toast('Updating…'); NH.forceUpdate(); };
      $('#goal').onchange = e => { NH.profile.goal = +e.target.value; NH.saveProfile(); NH.toast('Goal updated'); };
      $('#addf').onsubmit = e => {
        e.preventDefault();
        const it = NH.addCustom({ jp: $('#aj').value.trim(), kana: $('#ak').value.trim(), en: $('#ae').value.trim() });
        if (!srs.stage(it.id)) srs.learn(it.id, 1);
        NH.toast('Added'); NH.draw();
      };
      el.querySelectorAll('[data-del]').forEach(b => b.onclick = () => { NH.removeCustom(b.dataset.del); NH.draw(); });

      const snap = () => JSON.stringify({ app: 'anime-nihongo', v: 1, data: Object.fromEntries(NH.store.keys.map(k => [k, NH.store.get(k, null)])) });
      $('#exp').onclick = () => {
        const a = document.createElement('a');
        a.href = URL.createObjectURL(new Blob([snap()], { type: 'application/json' }));
        a.download = `nihongo-backup-${NH.dayKey()}.json`; document.body.append(a); a.click(); a.remove();
        NH.profile.lastBackup = Date.now(); NH.saveProfile();
      };
      $('#cp').onclick = async () => { try { await navigator.clipboard.writeText(snap()); NH.profile.lastBackup = Date.now(); NH.saveProfile(); NH.toast('Backup copied'); } catch { $('#imp').value = snap(); NH.toast('Copy it from the box below'); } };
      $('#restore').onclick = () => {
        try {
          const o = JSON.parse($('#imp').value);
          if (o.app !== 'anime-nihongo') throw 0;
          if (!confirm('Replace current progress with this backup?')) return;
          Object.entries(o.data).forEach(([k, v]) => v != null && NH.store.set(k, v));
          location.reload();
        } catch { NH.toast("That doesn't look like a valid backup"); }
      };
      $('#reset').onclick = () => {
        if (!confirm('Erase ALL progress, streaks and custom words? This cannot be undone.')) return;
        NH.store.keys.forEach(k => { try { localStorage.removeItem('nh.' + k); } catch {} });
        location.reload();
      };
    },
  };
})();
