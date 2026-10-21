// Today, Path (levels & units), Unit, Item detail.
(() => {
  const NH = window.NH, { esc, $ } = NH, srs = NH.srs;
  const pct = (a, b) => b ? Math.round(a / b * 100) : 0;
  const dot = id => `<span class="dot ${srs.bucket(id)}" title="${srs.bucket(id)}"></span>`;
  const levelOf = n => NH.levelOf(n);
  const trackSeg = () => `<div class="seg" id="trk"><button data-t="anime" class="${NH.track() === 'anime' ? 'on' : ''}">🎌 Anime Japanese</button><button data-t="life" class="${NH.track() === 'life' ? 'on' : ''}">🛍 Everyday Japan</button></div>`;
  const bindTrack = el => { const t = el.querySelector('#trk'); if (t) t.onclick = e => { const b = e.target.closest('button'); if (!b) return; NH.profile.track = b.dataset.t; NH.saveProfile(); NH.draw(); }; };

  // ---------- TODAY ----------
  NH.views.today = {
    title: 'Today',
    render(el) {
      const track = NH.track(), dueItems = srs.due(), nu = NH.nextUnit(track);
      const left = nu ? NH.unitItems(nu.id).filter(i => !srs.stage(i.id)).length : 0;
      const goal = NH.profile.goal, xp = NH.todayXP();
      const lvl = nu ? levelOf(nu.lv) : levelOf(track === 'life' ? 13 : 4);
      const started = NH.started(NH.list.filter(i => i.lv >= 0)), mastered = NH.list.filter(i => srs.bucket(i.id) === 'mastered').length;
      const weak = NH.list.filter(i => srs.stage(i.id) > 0 && srs.stage(i.id) <= 3);
      const readList = NH.store.get('read', []);
      const level = NH.dialogues.find(d => !readList.includes(d.id) && (track === 'life' ? d.lv >= 11 && d.lv <= (nu ? nu.lv : 13) : d.lv < 11 && d.lv <= (nu ? nu.lv : 4))) || NH.dialogues.find(d => (track === 'life') === (d.lv >= 11)) || NH.dialogues[0];
      const iosBrowser = /iphone|ipad|ipod/i.test(navigator.userAgent) && !NH.standalone() && !NH.store.get('hideInstall', false);
      const lastB = NH.profile.lastBackup || 0, needBackup = started >= 20 && Date.now() - lastB > 14 * 864e5;
      el.innerHTML = `
        ${iosBrowser ? `<div class="card pad notice"><b>Install on your iPhone</b><p class="lead">Tap <b>Share</b> <span class="sharei">⎋</span> → <b>Add to Home Screen</b>. Then open it from the Home Screen: it works offline, runs full-screen, and your progress is stored there. (Progress made in Safari does not carry over — install first.)</p><button class="linkbtn" id="hideInst">Don't show again</button></div>` : ''}
        ${needBackup ? `<div class="card pad notice"><b>Back up your progress</b><p class="lead">It has been a while. Download a backup in <b>Me → Backup</b> so you never lose your streak.</p><button class="linkbtn" id="hideBk">Remind me later</button></div>` : ''}
        <div class="hero card pad">
          <div class="stat-row">
            <div><b>🔥 ${NH.streak()}</b><small>day streak</small></div>
            <div><b>⭐ ${NH.profile.xp}</b><small>total XP</small></div>
            <div><b>${started}</b><small>items learned</small></div>
          </div>
          <div class="goal"><div class="goalbar"><div style="width:${Math.min(100, pct(xp, goal))}%"></div></div>
          <small>${xp >= goal ? '🎉 Daily goal reached!' : `${xp}/${goal} XP today`}</small></div>
        </div>

        ${trackSeg()}
        <button class="big-btn ${dueItems.length ? '' : 'ghost'}" id="rev" style="margin-top:12px">
          <span>📚 Reviews</span><span class="badge">${dueItems.length}</span>
          <small>${dueItems.length ? 'Spaced repetition: do these now to lock them in' : 'Nothing due — learn something new!'}</small></button>

        ${nu ? `<button class="big-btn" id="learn"><span>✨ Learn new</span><span class="badge">${Math.min(5, left)}</span>
          <small>${esc(nu.title)} · ${left} new left · ${NH.levelLabel(nu.lv)}: ${esc(lvl.name)}</small></button>` : '<div class="card pad center"><p class="lead">You have started every item! Keep reviewing and reading.</p></div>'}

        <div class="two">
          <button class="tile" id="weak"><b>🎯 Weak spots</b><small>${weak.length} items</small></button>
          <button class="tile" id="read"><b>🎧 Read & listen</b><small>${esc(level.title)}</small></button>
        </div>
        <div class="two">
          <button class="tile" id="quick"><b>⚡ Quick practice</b><small>mixed 10 questions</small></button>
          <button class="tile" id="path"><b>🗺 Your path</b><small>${NH.levelLabel(nu ? nu.lv : (track === 'life' ? 13 : 4))} · ${mastered} mastered</small></button>
        </div>
        <button class="tile wide" id="pb" style="margin-top:10px"><b>📖 Phrasebook</b><small>Shopping, eating out, trains, hotels — say it or show it to staff</small></button>
        <p class="hint center">Everything is unlocked. Follow the suggested path, or jump anywhere — your reviews adapt.</p>`;
      bindTrack(el);
      $('#pb').onclick = () => NH.libGo('phrasebook');
      $('#hideInst')?.addEventListener('click', () => { NH.store.set('hideInstall', true); NH.draw(); });
      $('#hideBk')?.addEventListener('click', () => { NH.profile.lastBackup = Date.now() - 7 * 864e5; NH.saveProfile(); NH.draw(); });
      $('#rev').onclick = () => NH.startReview();
      if (nu) $('#learn').onclick = () => NH.startLesson(nu.id);
      $('#weak').onclick = () => NH.startPractice(weak, 'Weak spots');
      $('#read').onclick = () => { NH.setTab('read'); NH.go('dialogue', { id: level.id }); };
      $('#quick').onclick = () => NH.startPractice(NH.list.filter(i => srs.stage(i.id) > 0), 'Quick practice', 10);
      $('#path').onclick = () => NH.setTab('path');
    },
  };

  // ---------- PATH ----------
  NH.views.path = {
    title: 'Your path',
    render(el) {
      const track = NH.track(), nu = NH.nextUnit(track);
      el.innerHTML = `${trackSeg()}<p class="hint">${track === 'life' ? 'Everyday Japan: real situations for travel and living. Everything is open — start with Survival, or jump to what you need this week.' : 'Anime Japanese: from your first sounds to villain-level speech. Everything is open — follow the suggested unit or jump around.'}</p>` +
        NH.levels.filter(l => l.track === track).map(l => {
          const items = NH.levelItems(l.n), c = srs.counts(items), st = NH.started(items);
          const units = NH.units.filter(u => u.lv === l.n);
          const open = nu ? nu.lv === l.n : l.n === (track === 'life' ? 13 : 4);
          return `<details class="card level" ${open ? 'open' : ''}>
            <summary><span class="lvl">${NH.tag(l.n)}</span><span class="grow"><b>${esc(l.name)}</b><small>${esc(l.jlpt)} · ${items.length} items</small></span><span class="pct">${pct(st, items.length)}%</span></summary>
            <p class="lead">${esc(l.blurb)}</p>
            <div class="stackbar">${NH.BUCKETS.map(b => `<i class="${b}" style="flex:${c[b]}"></i>`).join('')}<i class="new" style="flex:${c.new}"></i></div>
            <ul class="rows">${units.map(u => {
              const ui = NH.unitItems(u.id), s = NH.started(ui);
              return `<li data-u="${u.id}"><span class="mid"><b>${esc(u.title)}</b><small>${esc(u.blurb)}</small></span>
                <span class="mini">${nu && nu.id === u.id ? '<em>next</em>' : ''}${s}/${ui.length}</span></li>`;
            }).join('')}</ul>
            <div class="btnrow">
              <button class="chip" data-check="${l.n}">Level check-up</button>
              <button class="chip" data-skip="${l.n}">Skip: I know this</button>
            </div></details>`;
        }).join('');
      bindTrack(el);
      el.onclick = e => {
        const li = e.target.closest('li[data-u]');
        if (li) return NH.go('unit', { id: li.dataset.u });
        const ck = e.target.closest('[data-check]');
        if (ck) return levelCheck(+ck.dataset.check);
        const sk = e.target.closest('[data-skip]');
        if (sk) {
          const n = +sk.dataset.skip;
          if (confirm(`Mark every unstarted ${NH.levelLabel(n)} item as "known" (stage 4)? They will come back for review in a few days. Tip: take the check-up first.`)) {
            NH.levelItems(n).filter(i => !srs.stage(i.id)).forEach(i => srs.learn(i.id, 4));
            NH.toast(`${NH.levelLabel(n)} fast-tracked`); NH.draw();
          }
        }
      };
    },
  };

  // Placement-style test: 20 questions from the level; ≥85% offers fast-track
  function levelCheck(n) {
    const items = NH.levelItems(n);
    NH.startPractice(items, `${NH.levelLabel(n)} check-up`, 20, {
      after: ({ pct: p }) => ({
        html: `<p class="lead">${p >= 85 ? `Strong result! You may already know ${NH.levelLabel(n)}.` : p >= 60 ? 'Decent — some gaps. Work through the units you missed.' : 'Good baseline. Start with the suggested unit.'}</p>
          ${p >= 85 ? `<button class="big-btn center" id="ft">Fast-track ${NH.levelLabel(n)} (mark unstarted as known)</button>` : ''}`,
        bind: el2 => { const b = el2.querySelector('#ft'); if (b) b.onclick = () => { NH.levelItems(n).filter(i => !srs.stage(i.id)).forEach(i => srs.learn(i.id, 4)); NH.toast('Fast-tracked'); NH.back(); }; },
      }),
    });
  }

  // ---------- UNIT ----------
  NH.views.unit = {
    title: a => NH.unitById[a.id]?.title || 'Unit',
    render(el, a) {
      const u = NH.unitById[a.id], items = NH.unitItems(a.id), c = srs.counts(items);
      const fresh = items.filter(i => !srs.stage(i.id)), due = items.filter(i => srs.isDue(i.id));
      const dlg = NH.dialogues.filter(d => d.u === a.id);
      el.innerHTML = `
        <div class="card pad"><p class="lead"><b>${NH.levelLabel(u.lv)}</b> · ${esc(u.blurb)}</p>
          <div class="stackbar">${NH.BUCKETS.map(b => `<i class="${b}" style="flex:${c[b]}"></i>`).join('')}<i class="new" style="flex:${c.new}"></i></div>
          <p class="hint">${NH.BUCKETS.map(b => `${c[b]} ${b}`).join(' · ')} · ${c.new} new</p>
          <button class="big-btn" id="learn" ${fresh.length ? '' : 'disabled'}>✨ Learn next ${Math.min(5, fresh.length)} new</button>
          <button class="big-btn ghost" id="rev" ${due.length ? '' : 'disabled'}>📚 Review due here (${due.length})</button>
          <button class="big-btn ghost" id="prac">⚡ Practice this unit</button>
          ${fresh.length ? '<button class="linkbtn" id="known">I already know this whole unit</button>' : ''}
        </div>
        ${u.tips ? `<div class="card pad tips"><b>🎌 Good to know</b><ul>${u.tips.map(t => `<li>${esc(t)}</li>`).join('')}</ul></div>` : ''}
        ${dlg.map(d => `<button class="tile wide" data-d="${d.id}"><b>🎧 ${esc(d.title)}</b><small>Dialogue · ${esc(d.blurb)}</small></button>`).join('')}
        <ul class="rows listcard">${items.map(i => `<li data-i="${esc(i.id)}">${dot(i.id)}
          <span class="jp">${esc(i.ch || i.jp || i.pat)}</span>
          <span class="mid"><b>${esc(i.rom || i.en || i.title)}</b><small>${esc(NH.typeLabel[i.type])}${i.type === 'vocab' && i.kana !== i.jp ? ' · ' + esc(i.kana) : ''}${i.type === 'kanji' ? ' · ' + esc(i.en) : ''}${i.type === 'vocab' ? ' · ' + esc(i.en) : ''}${i.type === 'grammar' ? ' · ' + esc(i.gist) : ''}</small></span>
          <span class="play">ⓘ</span></li>`).join('')}</ul>`;
      $('#learn').onclick = () => NH.startLesson(a.id);
      $('#rev').onclick = () => NH.startReview(i => i.u === a.id);
      $('#prac').onclick = () => NH.startPractice(items, u.title, 12);
      const kn = $('#known'); if (kn) kn.onclick = () => { if (confirm('Mark all items in this unit as known (they will return for review in a few days)?')) { fresh.forEach(i => srs.learn(i.id, 4)); NH.draw(); } };
      el.onclick = e => {
        const d = e.target.closest('[data-d]'); if (d) return NH.go('dialogue', { id: d.dataset.d });
        const li = e.target.closest('li[data-i]'); if (li) NH.go('item', { id: li.dataset.i });
      };
    },
  };

  // ---------- ITEM DETAIL ----------
  NH.views.item = {
    title: a => NH.typeLabel[NH.items[a.id]?.type] || 'Item',
    render(el, a) {
      const it = NH.items[a.id]; if (!it) return (el.innerHTML = '<p class="hint">Item not found.</p>');
      const s = srs.stage(it.id), d = srs.get(it.id);
      el.innerHTML = `<div class="card pad">${NH.itemDetail(it)}</div>
        <div class="card pad"><p class="lead">Status: <b>${srs.bucket(it.id)}</b>${d ? ` · ${d.c} right / ${d.w} wrong${srs.isDue(it.id) ? ' · due now' : ''}` : ''}</p>
        ${s ? '' : '<button class="big-btn" id="learn">Start learning this</button>'}
        ${s ? '<button class="big-btn ghost" id="pr">Practice it now</button>' : '<button class="big-btn ghost" id="known">I already know this</button>'}
        ${s ? '<button class="linkbtn" id="forget">Reset progress</button>' : ''}
        <a class="linkbtn" target="_blank" rel="noopener" href="${esc(NH.reportUrl(it.ch || it.jp || it.title))}">Report a mistake in this item</a></div>`;
      const on = (id, f) => { const b = $('#' + id); if (b) b.onclick = f; };
      on('learn', () => NH.go('lesson', { items: [it] }));
      on('known', () => { srs.learn(it.id, 4); NH.draw(); });
      on('pr', () => NH.go('session', { title: 'Practice', items: [it], mode: 'practice' }));
      on('forget', () => { delete srs.data[it.id]; srs.save(); NH.draw(); });
    },
  };
})();
