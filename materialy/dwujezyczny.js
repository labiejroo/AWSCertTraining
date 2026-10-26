// dwujezyczny.js — układa lekcję w dwie kolumny: polski (lewo) | angielski (prawo).
// Tłumaczenia: ../narzedzia/tlumaczenia.js  (window.CLF_PL = { "tekst EN": "tekst PL" })
(function () {
  var PL = window.CLF_PL || {};
  var norm = function (s) { return (s || '').replace(/[﻿​]/g, '').replace(/ /g, ' ').replace(/\s+/g, ' ').trim(); };
  var T = function (s) { return PL[norm(s)]; };

  var css = document.createElement('style');
  css.textContent =
    'main{max-width:1280px!important}' +
    '.bi{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:36px;align-items:start;margin:.55em 0}' +
    '.bi>div>*{margin-top:0!important;margin-bottom:0!important}' +
    '.bi.bi-h{margin-top:1.5em}.bi.bi-h1{margin-top:.2em;margin-bottom:.8em}' +
    '.bi>.bi-en{color:var(--muted);font-size:.84em;line-height:1.6;border-left:2px solid var(--line);padding-left:18px}' +
    '.bi-en h1,.bi-en h2,.bi-en h3,.bi-en h4,.bi-en h5{color:var(--muted)}' +
    '.nopl{opacity:.55;font-style:italic}' +
    '.bi-bar{position:fixed;top:12px;right:12px;z-index:10;display:flex;border:1px solid var(--line);border-radius:10px;overflow:hidden;background:var(--card);font:600 13px system-ui,sans-serif;box-shadow:0 2px 10px rgba(0,0,0,.08)}' +
    '.bi-bar button{border:0;background:none;color:var(--fg);padding:7px 12px;cursor:pointer;font:inherit}' +
    '.bi-bar button.on{background:var(--accent);color:#fff}' +
    '.bi-miss{font-size:12px;color:var(--muted);margin:-4px 0 14px}' +
    'body.m-pl .bi-en,body.m-en .bi-pl{display:none}' +
    'body.m-pl .bi,body.m-en .bi{grid-template-columns:1fr}' +
    'body.m-pl main,body.m-en main{max-width:780px!important}' +
    'body.m-en .bi>.bi-en{color:var(--fg);font-size:1em;border:0;padding:0}' +
    '.lesson .pl-t{display:block}.lesson .en-t{display:block;font-size:13px;color:var(--muted)}' +
    '@media (max-width:820px){.bi{grid-template-columns:1fr;gap:4px}.bi>.bi-en{border-left:0;padding-left:0;border-top:1px dashed var(--line);margin-bottom:10px}}';
  document.head.appendChild(css);

  var missing = 0, total = 0;

  // klon bloku z podmienionym tekstem
  function translated(el) {
    var c = el.cloneNode(true);
    var leafs = c.matches('ul,ol') ? c.querySelectorAll('li') : c.matches('table') ? c.querySelectorAll('td,th') : [c];
    Array.prototype.forEach.call(leafs, function (n) {
      var k = norm(n.textContent);
      if (!k) return;
      total++;
      var v = PL[k];
      if (v) n.textContent = v; else { missing++; n.classList.add('nopl'); }
    });
    return c;
  }

  function wrap(el) {
    var row = document.createElement('div');
    row.className = 'bi' + (el.matches('h1') ? ' bi-h1' : el.matches('h2,h3,h4,h5') ? ' bi-h' : '');
    var pl = document.createElement('div'); pl.className = 'bi-pl';
    var en = document.createElement('div'); en.className = 'bi-en';
    pl.appendChild(translated(el));
    el.parentNode.replaceChild(row, el);
    en.appendChild(el);
    row.appendChild(pl); row.appendChild(en);
  }

  function walk(container) {
    Array.prototype.slice.call(container.children).forEach(function (el) {
      if (el.matches('.crumbs,.qnote,.warn,script,style,.bi-bar')) return;
      if (el.matches('.tag')) {
        el.textContent = el.textContent.replace(/^Slide/, 'Slajd').replace(/^Tab/, 'Zakładka').replace(/^Marker/, 'Znacznik').replace(/^Card/, 'Fiszka');
        return;
      }
      if (el.matches('summary')) { el.textContent = '🎬 Transkrypcja wideo · Video transcript'; return; }
      if (el.matches('.card,.item,details')) { walk(el); return; }
      if (el.matches('h1,h2,h3,h4,h5,p,ul,ol,table')) { wrap(el); return; }
      if (el.matches('div')) walk(el);
    });
  }

  var main = document.querySelector('main');
  if (!main) return;

  if (document.querySelector('a.lesson')) {
    main.style.setProperty('max-width', '860px', 'important');
    // spis lekcji: polski tytuł nad angielskim
    Array.prototype.forEach.call(document.querySelectorAll('a.lesson'), function (a) {
      var tn = a.firstChild;
      if (!tn || tn.nodeType !== 3) return;
      var en = norm(tn.textContent), pl = T(en);
      if (!pl) return;
      var s1 = document.createElement('span'); s1.className = 'pl-t'; s1.textContent = pl;
      var s2 = document.createElement('span'); s2.className = 'en-t'; s2.textContent = en;
      a.replaceChild(s2, tn); a.insertBefore(s1, s2);
    });
    Array.prototype.forEach.call(main.querySelectorAll('h2,h3'), function (h) {
      var pl = T(h.textContent); if (pl) h.textContent = pl + ' · ' + norm(h.textContent);
    });
    // powrót do ostatnio otwartej lekcji: przewiń do niej i wyróżnij
    var st2 = document.createElement('style');
    st2.textContent = 'a.lesson.last{border-color:var(--accent);box-shadow:0 0 0 2px var(--accent)}' +
      'a.lesson.last::after{content:"ostatnio otwarta";float:right;margin-top:-1.6em;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.06em;color:var(--accent)}';
    document.head.appendChild(st2);
    Array.prototype.forEach.call(document.querySelectorAll('a.lesson'), function (a) {
      a.addEventListener('click', function () { try { localStorage.setItem('clf_last', a.getAttribute('href')); } catch (e) {} });
    });
    var goLast = function () {
      var last = null;
      try { last = localStorage.getItem('clf_last'); } catch (e) {}
      if (!last) return;
      var el = document.querySelector('a.lesson[href="' + last.replace(/"/g, '') + '"]');
      if (!el) return;
      Array.prototype.forEach.call(document.querySelectorAll('a.lesson.last'), function (x) { x.classList.remove('last'); });
      el.classList.add('last');
      el.scrollIntoView({ block: 'center' });
    };
    goLast();
    window.addEventListener('pageshow', function (e) { if (e.persisted) goLast(); });
    return;
  }

  // lekcja: zapamiętaj ją jako ostatnio otwartą (na wypadek wejścia inną drogą niż ze spisu)
  try { localStorage.setItem('clf_last', location.pathname.split('/').pop()); } catch (e) {}

  walk(main);
  var crumbs = main.querySelector('.crumbs');
  var metaEl = document.getElementById('lesson-meta');
  if (crumbs && metaEl) {
    try {
      var meta = JSON.parse(metaEl.textContent);
      var a = crumbs.querySelector('a');
      crumbs.textContent = ' · ' + [meta.module, meta.section].map(function (x) { return T(x) || x; }).join(' › ');
      if (a) crumbs.insertBefore(a, crumbs.firstChild);
    } catch (e) {}
  }
  var h1 = main.querySelector('.bi');
  if (missing && h1) {
    var note = document.createElement('div');
    note.className = 'bi-miss';
    note.textContent = 'Bez tłumaczenia: ' + missing + ' z ' + total + ' fragmentów (szare, kursywą). Napisz Claude: „przetłumacz nowe”.';
    h1.parentNode.insertBefore(note, h1.nextSibling);
  }

  // przełącznik PL+EN / PL / EN (zapamiętywany)
  var mode = 'both';
  try { mode = localStorage.getItem('clf_lang') || 'both'; } catch (e) {}
  var bar = document.createElement('div'); bar.className = 'bi-bar';
  [['both', 'PL | EN'], ['pl', 'PL'], ['en', 'EN']].forEach(function (o) {
    var b = document.createElement('button'); b.textContent = o[1]; b.dataset.m = o[0];
    b.onclick = function () { set(o[0]); };
    bar.appendChild(b);
  });
  document.body.appendChild(bar);
  function set(m) {
    mode = m;
    document.body.classList.remove('m-pl', 'm-en');
    if (m !== 'both') document.body.classList.add('m-' + m);
    Array.prototype.forEach.call(bar.children, function (b) { b.classList.toggle('on', b.dataset.m === m); });
    try { localStorage.setItem('clf_lang', m); } catch (e) {}
  }
  set(mode);
})();
