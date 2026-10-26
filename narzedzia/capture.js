// AWS-CLF capture.js v5.4 — wklej RAZ do konsoli DevTools (F12 → Console) na stronie kursu w Skill Builder.
// W rogu strony pojawi się panel z przyciskiem „Zapisz tę lekcję”. Chodzisz po lekcjach i klikasz —
// każda zapisuje się do folderu AWS-CLF na dysku:
//   AWS-CLF\materialy\<lekcja>.html  + index.html (spis)
//   AWS-CLF\pytania\<lekcja>.md       (zaznaczasz [x]) + pytania-dane.js (dla testownika)
(async () => {
  const VERSION = '5.4';
  const TEST = window.__AWS_TEST__;
  const sleep = (ms) => new Promise((r) => setTimeout(r, TEST ? 0 : ms));
  const log = (...a) => console.log('%c[AWS-CLF]', 'color:#d97a00;font-weight:bold', ...a);
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const norm = (s) => (s || '').replace(/[\ufeff\u200b]/g, '').replace(/\u00a0/g, ' ').replace(/\s+/g, ' ').trim();
  const txt = (el) => (el ? norm(el.textContent) : '');
  const BLOCK = 'p,div,li,br,h1,h2,h3,h4,h5,h6,tr,td,th,section,article,legend,b,strong';
  const blockText = (el) => {
    if (!el) return '';
    const c = el.cloneNode(true);
    c.querySelectorAll(BLOCK).forEach((n) => n.after(c.ownerDocument.createTextNode(' ')));
    return norm(c.textContent).replace(/ ([,.;:!?])/g, '$1');
  };
  const pad = (n) => String(n).padStart(2, '0');
  const JUNK = /^(submit|transcript|next lesson|previous lesson|course overview|go to lesson|knowledge check|test your skills|choose \d+\.?|zoom image in|previous page|next page|replay|continue|start|play|pause|enter reader mode|close menu|course progress|video and transcript)$/i;
  const SKIP = new Set(['script', 'style', 'svg', 'button', 'video', 'img', 'noscript', 'input', 'progress', 'header', 'nav', 'select', 'textarea']);

  // ------------------------------------------------------------ dokument lekcji (szukany przy każdym kliknięciu)
  let sameTop = true;
  try { void window.top.document.body; } catch (_) { sameTop = false; }
  const uiWin = sameTop ? window.top : window;
  const uiDoc = uiWin.document;
  function findDoc() {
    if (document.querySelector('.Lesson')) return document;
    for (const fr of uiDoc.querySelectorAll('#renderer_iframe, iframe[title="Training Content"], iframe')) {
      try { const d = fr.contentDocument; if (d && d.querySelector('.Lesson')) return d; } catch (_) { /* inna domena */ }
    }
    return uiDoc.querySelector('.Lesson') ? uiDoc : null;
  }

  // ------------------------------------------------------------ metadane lekcji
  function metaOf(doc) {
    const lesson = txt(doc.querySelector('.LessonTitle h1') || doc.querySelector('h1')) || 'Lesson';
    const module = txt(doc.querySelector('.MenuTitle'));
    const lessonBtns = [...doc.querySelectorAll('[aria-label^="Lesson "][role="button"]')];
    const myBtn = lessonBtns.find((b) => norm(b.getAttribute('aria-label').slice(7)) === lesson);
    const secGroup = myBtn && myBtn.closest('[role="group"][aria-label^="Section "]');
    const section = secGroup ? norm(secGroup.getAttribute('aria-label').slice(8))
      : txt(doc.querySelector('[aria-label^="Section "][aria-expanded="true"]'));
    const moduleNo = +((module.match(/Module (\d+)/) || [])[1] || 0);
    const lessonNo = myBtn ? lessonBtns.indexOf(myBtn) + 1 : 0;
    const slug = `m${pad(moduleNo)}-${pad(lessonNo)}-` + (lesson.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 60) || 'lesson');
    return { lesson, module, section, moduleNo, lessonNo, slug };
  }

  // ------------------------------------------------------------ ekstrakcja całej lekcji
  async function extract(doc) {
    const lessonEl = doc.querySelector('.Lesson');
    // ------------------------------------------------------------ 2. doładuj i rozwiń
    const scroller = doc.querySelector('#ContentWrapper') || doc.scrollingElement;
    if (scroller) {
      const y0 = scroller.scrollTop;
      for (let i = 0; i < 40; i++) { scroller.scrollTop += 1500; await sleep(60); }
      scroller.scrollTop = y0;
    }
    for (const t of lessonEl.querySelectorAll('[aria-expanded="false"]')) { t.click(); await sleep(120); }

    const { lesson, module, section, moduleNo, lessonNo, slug } = metaOf(doc);
    // ------------------------------------------------------------ 4. ekstrakcja treści
    const questions = [];
    const warnings = [];
    const carousels = [...doc.querySelectorAll('.Carousel')];

    async function walk(el, out) {
      for (const ch of [...el.children]) {
        const tag = ch.tagName.toLowerCase();
        const cls = ch.classList;
        const role = ch.getAttribute('role');
        if (ch.getAttribute('aria-label') === 'video and transcript' || cls.contains('SideTranscript')) { transcript(ch, out); continue; }
        if (SKIP.has(tag)) continue;
        if (cls.contains('CapturedTabs') || cls.contains('CapturedStore') || ch.id === 'messages') continue; // ślady starszej wersji
        if (cls.contains('Carousel')) { out.push(await carousel(ch)); continue; }
        if (tag === 'fieldset') { question(ch); continue; }
        if (role === 'tablist') { out.push(await tabs(ch)); continue; }
        if (role === 'tabpanel') continue; // obsłużone w tabs()
        if (cls.contains('rowOfCards') || (ch.querySelector(':scope > [class^="flippy_card"]'))) { out.push(await flashcards(ch)); continue; }
        if (!inHotspot) {
          const markers = markerButtons(ch);
          if (markers.length >= 2) {
            // blok lekcji (MaxWidth2) albo najniższy wspólny przodek wszystkich znaczników
            // grupa = blok lekcji (MaxWidth2) albo element, w którym znaczniki nie dzielą się na mniejsze grupy
            const childGroups = [...ch.children].map((c) => markers.filter((m) => c.contains(m)).length);
            if (ch.classList.contains('MaxWidth2') || childGroups.every((n) => n < 2)) { out.push(await hotspot(ch, markers)); continue; }
          }
        }
        if (/^h[1-6]$/.test(tag)) {
          const t = txt(ch);
          if (t && !JUNK.test(t)) out.push({ type: 'heading', level: +tag[1], text: t });
          continue;
        }
        if (tag === 'p') {
          const t = txt(ch);
          if (t && !JUNK.test(t)) out.push({ type: 'para', text: t });
          continue;
        }
        if (tag === 'ul' || tag === 'ol') {
          const items = [...ch.children].filter((li) => li.tagName === 'LI').map(txt).filter((t) => t && !JUNK.test(t));
          if (items.length) out.push({ type: 'list', ordered: tag === 'ol', items });
          continue;
        }
        if (tag === 'table') {
          const rows = [...ch.querySelectorAll('tr')].map((tr) => [...tr.querySelectorAll('th,td')].map(txt)).filter((r) => r.some(Boolean));
          if (rows.length) out.push({ type: 'table', rows });
          continue;
        }
        await walk(ch, out);
      }
    }

    // Przyciski-znaczniki: "1", "2"… albo aria-label typu "Marker 1", "Hotspot", "Open 2".
    let inHotspot = 0;
    function markerButtons(el) {
      if (el.matches && el.matches('.Carousel,[role="tablist"],fieldset,.SideTranscript')) return [];
      const btns = [...el.querySelectorAll('button,[role="button"]')].filter((b) => {
        if (b.closest('.Carousel,[role="tablist"],fieldset,.SideTranscript,.LMC_Menu,header')) return false;
        if (/ImageZoomButton|FlatButton/.test(b.className) && /zoom|navigation/i.test(b.getAttribute('aria-label') || '')) return false;
        const t = txt(b), a = (b.getAttribute('aria-label') || '').trim();
        return /^\d{1,2}$/.test(t) || /^(marker|hotspot|point|label|pin)\b|^\d{1,2}\s*[:.)-]/i.test(a) || /\b(marker|hotspot)\b/i.test(b.className);
      });
      return btns;
    }
    // Klika każdy znacznik i zbiera treść, która się pokazała (w bloku albo w okienku/popoverze).
    async function hotspot(container, markers) {
      const items = [];
      const seen = new Set();
      const popups = () => [...doc.querySelectorAll('[role="dialog"],[role="tooltip"],[class*="popover"],[class*="Popover"]')]
        .filter((d) => !container.contains(d) && !/hidden/i.test(d.className) && d.offsetParent !== null && txt(d));
      for (const b of markers) {
        b.click();
        await sleep(400);
        const blocks = [];
        inHotspot++;
        await walk(container, blocks);
        for (const p of popups()) await walk(p, blocks);
        inHotspot--;
        const fresh = blocks.filter((bl) => { const k = JSON.stringify(bl); if (seen.has(k)) return false; seen.add(k); return true; });
        const label = (b.getAttribute('aria-label') || txt(b)).trim();
        // "marker 1 of 4. selected. Marker for X" i same cyfry to etykiety techniczne — treść ma własny nagłówek
        const clean = /^\d{1,2}$/.test(label) || /^marker \d+ of \d+/i.test(label) ? '' : label;
        items.push({ no: items.length + 1, title: clean, blocks: fresh });
        doc.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
      }
      const empty = items.filter((i) => !i.blocks.length).length;
      if (empty) warnings.push(`znaczniki: ${empty} z ${items.length} bez treści`);
      return { type: 'tabs', label: 'Marker', total: items.length, items };
    }

    // Fiszki (flip cards): przód = obrazek/tytuł, tył = treść. Obie strony są w DOM, nie trzeba klikać.
    async function flashcards(row) {
      const items = [];
      for (const c of row.querySelectorAll('[class^="flippy_card"], .fcard')) {
        if (c.matches('.fcard') && c.closest('[class^="flippy_card"]')) continue;
        const front = c.querySelector('.fcard_front'), back = c.querySelector('.fcard_back');
        const img = front && front.querySelector('img');
        const title = txt(front) || (img ? norm(img.getAttribute('alt') || '').replace(/\.$/, '').replace(/\s+icon$/i, '') : '');
        const blocks = [];
        if (back) { inHotspot++; await walk(back, blocks); inHotspot--; }
        items.push({ no: items.length + 1, title, blocks });
      }
      return { type: 'tabs', label: 'Card', total: items.length, items };
    }

    function transcript(el, out) {
      const full = norm([...el.querySelectorAll('.SideTranscript .SafeHTMLSpan')].map(txt).join(' '));
      if (!full) return;
      const s = full.split(/(?<=[.!?])\s+(?=[A-Z0-9“"'])/);
      const paras = [];
      for (let i = 0; i < s.length; i += 4) paras.push(s.slice(i, i + 4).join(' '));
      out.push({ type: 'transcript', paras });
    }

    async function slideFrom(node, no) {
      const h = node.querySelector('h3,h4,h5');
      const blocks = [];
      for (const part of node.querySelectorAll('.SafeHTML')) await walk(part, blocks);
      return { no, title: txt(h), blocks };
    }

    async function carousel(el) {
      const idx = carousels.indexOf(el);
      const first = el.querySelector('.CarouselContents');
      const total = +(((first && first.getAttribute('aria-label')) || '').match(/out of (\d+)/) || [])[1] || 1;
      const slides = [];
      const seen = new Set();
      const legacy = doc.querySelectorAll(`.CapturedSlides[data-carousel="${idx}"] .CarouselContents`);
      const pages = [...el.querySelectorAll('button[aria-label^="Page "]')];
      const grab = async (node) => {
        if (!node) return;
        const no = +((node.getAttribute('aria-label') || '').match(/Slide (\d+)/) || [])[1] || slides.length + 1;
        const s = await slideFrom(node, no);
        const key = JSON.stringify([s.title, s.blocks]);
        if (!seen.has(key)) { seen.add(key); slides.push(s); }
      };
      if (legacy.length) for (const n of legacy) await grab(n);
      else if (pages.length) for (const p of pages) { p.click(); await sleep(400); await grab(el.querySelector('.CarouselContents')); }
      else await grab(first);
      slides.sort((a, b) => a.no - b.no);
      if (slides.length < total) warnings.push(`karuzela: ${slides.length} z ${total} slajdów`);
      return { type: 'carousel', label: 'Slide', total, items: slides };
    }

    async function tabs(tablist) {
      const legacy = tablist.nextElementSibling && tablist.nextElementSibling.classList.contains('CapturedTabs') ? tablist.nextElementSibling : null;
      const items = [];
      for (const tab of tablist.querySelectorAll('[role="tab"]')) {
        const pid = tab.getAttribute('aria-controls');
        let panel = legacy && legacy.querySelector(`[id="${pid}"]`);
        if (!panel) {
          tab.click();
          await sleep(300);
          panel = [...doc.querySelectorAll(`[id="${pid}"]`)].find((p) => !p.closest('.CapturedTabs'));
        }
        const blocks = [];
        if (panel) await walk(panel, blocks);
        items.push({ no: items.length + 1, title: txt(tab), blocks });
      }
      const empty = items.filter((i) => !i.blocks.length).length;
      if (empty) warnings.push(`zakładki: ${empty} z ${items.length} pustych`);
      return { type: 'tabs', label: 'Tab', total: items.length, items };
    }

    function question(fs) {
      const legend = fs.querySelector('legend');
      const qdiv = legend && legend.querySelector('.SafeHTML');
      const text = blockText(qdiv).replace(/^\s*Question\s*[-–:]\s*/, '');
      const choose = +((txt(legend && legend.querySelector('b')).match(/Choose (\d+)/) || [])[1] || 1);
      const answerEls = [...fs.querySelectorAll('.Answer')];
      const answers = answerEls.map((a, i) => {
        const t = txt(a);
        const m = t.match(/^([A-H])[.)]\s*(.*)$/);
        return m ? { letter: m[1], text: m[2] } : { letter: String.fromCharCode(65 + i), text: t };
      });
      // --- klucz odpowiedzi z tego, co pokazuje strona po zatwierdzeniu (Submit)
      const sig = (el) => [el, ...el.querySelectorAll('*')].map((e) => [
        typeof e.className === 'string' ? e.className : (e.className && e.className.baseVal) || '',
        e.getAttribute('aria-label') || '', e.getAttribute('alt') || '', e.getAttribute('title') || '', e.getAttribute('src') || '',
      ].join(' ')).join(' ').toLowerCase();
      const POS = /(^|[^a-z])(correct|success|positive)/;
      const NEG = /incorrect|wrong|error|negative|fail|cross|times|close/;
      const checked = answers.filter((_, i) => { const inp = answerEls[i].querySelector('input'); return inp && inp.checked; }).map((a) => a.letter);
      const status = fs.querySelector('.AnswerContainer') || fs.querySelector('[id$="status"]');
      const feedback = blockText(status);
      let correct = answers.filter((_, i) => { const g = sig(answerEls[i]); return POS.test(g.replace(/incorrect/g, '')) && !NEG.test(g); }).map((a) => a.letter);
      if (correct.length === answers.length) correct = []; // wszystkie „poprawne” = to nie jest znacznik klucza
      let keySrc = correct.length ? 'znaczniki przy odpowiedziach' : '';
      if (!correct.length) {
        const m = feedback.match(/correct (?:answer|answers|response|option)s? (?:is|are|was|were)[:\s]*((?:[A-H](?:[.)]|\b)[\s,and&]*)+)/i);
        if (m) { correct = [...new Set(m[1].match(/[A-H]/g))]; keySrc = 'komunikat po zatwierdzeniu'; }
      }
      const fbLow = feedback.toLowerCase();
      if (!correct.length && checked.length && /\b(correct|that's right|well done|great job|nice work)\b/.test(fbLow) && !/incorrect|not correct|try again/.test(fbLow)) {
        correct = checked; keySrc = 'Twoja zatwierdzona odpowiedź';
      }
      questions.push({ id: `${slug}-q${questions.length + 1}`, text, choose, answers, correct, keySrc, checked, feedback });
    }

    const blocks = [];
    await walk(lessonEl, blocks);
    while (blocks.length && blocks[0].type === 'heading' && blocks[0].text === lesson) blocks.shift();

    // ------------------------------------------------------------ 5. HTML lekcji
    const CSS = `:root{--bg:#fbfaf7;--fg:#1d1d1b;--muted:#77736a;--line:#e6e1d6;--accent:#d97a00;--card:#fff;--soft:#f3efe6}
  @media (prefers-color-scheme:dark){:root{--bg:#161614;--fg:#ecebe6;--muted:#9b978d;--line:#2f2e2a;--accent:#ffa733;--card:#1e1e1b;--soft:#24231f}}
  *{box-sizing:border-box}body{margin:0;background:var(--bg);color:var(--fg);font:18px/1.7 system-ui,-apple-system,"Segoe UI",Roboto,sans-serif}
  main{max-width:760px;margin:0 auto;padding:28px 16px 80px}a{color:var(--accent)}
  .crumbs{font-size:13px;color:var(--muted)}h1{font-size:32px;line-height:1.2;margin:.3em 0 .6em}
  h2{font-size:25px;margin:1.6em 0 .4em}h3{font-size:21px;margin:1.4em 0 .3em}h4,h5{font-size:18px;margin:1em 0 .2em}
  p{margin:.5em 0}ul,ol{padding-left:1.3em}li{margin:.2em 0}
  .card{background:var(--card);border:1px solid var(--line);border-radius:12px;padding:6px 20px 14px;margin:18px 0}
  .item+.item{border-top:1px dashed var(--line)}.item{padding-top:10px}
  .tag{font-size:11px;text-transform:uppercase;letter-spacing:.08em;color:var(--accent);font-weight:700}
  .item h4{margin-top:2px}
  details{margin:18px 0;background:var(--soft);border-radius:12px;padding:10px 20px}summary{cursor:pointer;font-weight:600}
  details p{font-size:16px}
  table{border-collapse:collapse;width:100%;font-size:16px}td,th{border:1px solid var(--line);padding:6px 8px;text-align:left;vertical-align:top}
  .warn{background:var(--soft);border-left:3px solid var(--accent);padding:8px 12px;font-size:14px;border-radius:6px}
  .qnote{margin-top:40px;font-size:14px;color:var(--muted)}`;

    const renderBlocks = (bs) => bs.map((b) => {
      switch (b.type) {
        case 'heading': { const l = Math.min(Math.max(b.level, 2), 5); return `<h${l}>${esc(b.text)}</h${l}>`; }
        case 'para': return `<p>${esc(b.text)}</p>`;
        case 'list': { const t = b.ordered ? 'ol' : 'ul'; return `<${t}>${b.items.map((i) => `<li>${esc(i)}</li>`).join('')}</${t}>`; }
        case 'table': return `<table>${b.rows.map((r) => `<tr>${r.map((c) => `<td>${esc(c)}</td>`).join('')}</tr>`).join('')}</table>`;
        case 'transcript': return `<details><summary>🎬 Video transcript</summary>${b.paras.map((p) => `<p>${esc(p)}</p>`).join('')}</details>`;
        case 'carousel': case 'tabs': {
          const miss = b.type === 'carousel' ? b.total - b.items.length : b.items.filter((i) => !i.blocks.length).length;
          return `<div class="card">${miss > 0 ? `<p class="warn">Brakuje ${miss} element(ów) — uruchom capture.js ponownie na tej lekcji.</p>` : ''}${b.items.map((i) =>
            `<div class="item"><div class="tag">${b.label} ${i.no}/${b.total}</div>${i.title ? `<h4>${esc(i.title)}</h4>` : ''}${renderBlocks(i.blocks)}</div>`).join('')}</div>`;
        }
        default: return '';
      }
    }).join('\n');

    const meta = { slug, module, module_no: moduleNo, section, lesson, lesson_no: lessonNo, questions: questions.length, captured: new Date().toISOString(), v: VERSION };
    const lessonHtml = `<!doctype html>
  <html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
  <title>${esc(lesson)}</title><style>${CSS}</style>
  <script type="application/json" id="lesson-meta">${JSON.stringify(meta).replace(/</g, '\\u003c')}</script></head>
  <body><main>
  <div class="crumbs"><a href="index.html">← Spis lekcji</a> · ${esc(module)} › ${esc(section)}</div>
  <h1>${esc(lesson)}</h1>
  ${renderBlocks(blocks)}
  ${questions.length ? `<p class="qnote">Pytania kontrolne (${questions.length}): <code>pytania\\${slug}.md</code> · <a href="../pytania/testownik.html">testownik</a></p>` : ''}
  </main><script src="../narzedzia/tlumaczenia.js"></script><script src="dwujezyczny.js"></script></body></html>`;

    // ------------------------------------------------------------ 6. plik pytań (.md)
    const parseMarks = (text) => {
      const marks = {}; let cur = null;
      for (const line of (text || '').split(/\r?\n/)) {
        let m = line.match(/^<!-- id: (\S+) -->/);
        if (m) cur = m[1];
        m = line.match(/^\s*- \[([xX ])\] ([A-H])\./);
        if (m && cur && m[1].toLowerCase() === 'x') (marks[cur] = marks[cur] || new Set()).add(m[2]);
      }
      return marks;
    };
    const buildMd = (existing) => {
      const marks = parseMarks(existing);
      const out = [`# ${module} › ${lesson}`, '', 'Zaznacz poprawne odpowiedzi: zmień `[ ]` na `[x]`.', ''];
      questions.forEach((q, i) => {
        out.push(`<!-- id: ${q.id} -->`, `## Question ${i + 1}`, '', q.text, '', `_Choose ${q.choose}_`, '');
        const key = marks[q.id] && marks[q.id].size ? marks[q.id] : new Set(q.correct);
        for (const a of q.answers) out.push(`- [${key.has(a.letter) ? 'x' : ' '}] ${a.letter}. ${a.text}`);
        if (!(marks[q.id] && marks[q.id].size) && q.correct.length) out.push('', `<!-- klucz: ${q.keySrc} -->`);
        if (q.feedback) out.push('', '> ' + q.feedback);
        out.push('');
      });
      return out.join('\n');
    };

    // ------------------------------------------------------------ 7. spis lekcji
    const buildIndex = (metas) => {
      metas.sort((a, b) => a.module_no - b.module_no || a.lesson_no - b.lesson_no || a.slug.localeCompare(b.slug));
      let html = '', mod = null, sec = null;
      for (const m of metas) {
        if (m.module !== mod) { mod = m.module; sec = null; html += `<h2>${esc(mod)}</h2>`; }
        if (m.section !== sec) { sec = m.section; html += `<h3>${esc(sec)}</h3>`; }
        html += `<a class="lesson" href="${m.slug}.html">${esc(m.lesson)}<small>${m.questions ? `pytań: ${m.questions} · ` : ''}zapisano ${m.captured.slice(0, 10)}</small></a>`;
      }
      return `<!doctype html><html lang="pl"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
  <title>AWS CLF-C02 — materiały</title><style>${CSS}
  h3{font-size:13px;text-transform:uppercase;letter-spacing:.07em;color:var(--accent);margin:22px 0 6px}
  a.lesson{display:block;padding:10px 14px;margin:6px 0;background:var(--card);border:1px solid var(--line);border-radius:10px;color:inherit;text-decoration:none}
  a.lesson:hover{border-color:var(--accent)}a.lesson small{display:block;color:var(--muted);font-size:13px}</style></head>
  <body><main><h1>AWS Cloud Practitioner</h1><p><a href="../pytania/testownik.html">Otwórz testownik →</a></p>${html}</main><script src="../narzedzia/tlumaczenia.js"></script><script src="dwujezyczny.js"></script></body></html>`;
    };
    return { slug, lesson, meta, blocks, questions, warnings, lessonHtml, buildMd, buildIndex, nCarousels: carousels.length, rawHtml: doc.documentElement.outerHTML };
  }

  // ------------------------------------------------------------ zapis na dysk (File System Access API)
  const idb = () => new Promise((res, rej) => {
    const r = uiWin.indexedDB.open('aws-clf', 1);
    r.onupgradeneeded = () => r.result.createObjectStore('kv');
    r.onsuccess = () => res(r.result);
    r.onerror = () => rej(r.error);
  });
  const idbOp = (mode, fn) => idb().then((db) => new Promise((res, rej) => {
    const tx = db.transaction('kv', mode);
    const req = fn(tx.objectStore('kv'));
    tx.oncomplete = () => { db.close(); res(req.result); };
    tx.onerror = () => rej(tx.error);
  }));
  const getSaved = () => idbOp('readonly', (s) => s.get('root2')).catch(() => null);
  const putSaved = (h) => idbOp('readwrite', (s) => s.put(h, 'root2')).catch(() => null);

  async function getRoot(interactive) {
    let h = await getSaved();
    if (h) {
      if ((await h.queryPermission({ mode: 'readwrite' })) === 'granted') return h;
      if (interactive && (await h.requestPermission({ mode: 'readwrite' })) === 'granted') return h;
    }
    if (!interactive) return null;
    h = await uiWin.showDirectoryPicker({ id: 'aws-clf-root', mode: 'readwrite', startIn: 'documents' });
    h = await resolveRoot(h);
    await putSaved(h);
    return h;
  }
  // Akceptuje AWS-CLF albo folder, w którym AWS-CLF jest; nie pozwala wybrać podfolderu (materialy/pytania).
  async function resolveRoot(h) {
    const has = async (dir, name) => { try { await dir.getDirectoryHandle(name); return true; } catch (_) { return false; } };
    if (/^(materialy|pytania|narzedzia|surowe)$/i.test(h.name)) {
      throw new Error(`Wybrałeś podfolder „${h.name}” — wskaż folder nadrzędny AWS-CLF (Dokumenty\\AWS-CLF).`);
    }
    if (h.name === 'AWS-CLF' || (await has(h, 'materialy')) || (await has(h, 'pytania'))) return h;
    return h.getDirectoryHandle('AWS-CLF', { create: true });
  }
  const readFile = async (dir, name) => { try { return await (await (await dir.getFileHandle(name)).getFile()).text(); } catch (_) { return null; } };
  const writeFile = async (dir, name, content) => {
    const w = await (await dir.getFileHandle(name, { create: true })).createWritable();
    await w.write(content);
    await w.close();
  };

  async function saveAll(root, L) {
    const mat = await root.getDirectoryHandle('materialy', { create: true });
    const pyt = await root.getDirectoryHandle('pytania', { create: true });
    await writeFile(mat, `${L.slug}.html`, L.lessonHtml);
    if (L.rawHtml) await writeFile(await root.getDirectoryHandle('surowe', { create: true }), `${L.slug}.html`, L.rawHtml);
    if (L.questions.length) await writeFile(pyt, `${L.slug}.md`, L.buildMd(await readFile(pyt, `${L.slug}.md`)));
    // spis lekcji z metadanych wszystkich zapisanych lekcji
    const metas = [];
    for await (const [name, h] of mat.entries()) {
      if (h.kind !== 'file' || !name.endsWith('.html') || name === 'index.html') continue;
      const m = (await (await h.getFile()).text()).match(/<script type="application\/json" id="lesson-meta">([\s\S]*?)<\/script>/);
      if (m) { try { metas.push(JSON.parse(m[1])); } catch (_) { /* pomiń */ } }
    }
    await writeFile(mat, 'index.html', L.buildIndex(metas));
    // dane dla testownika: wszystkie pliki .md z pytaniami
    const md = {};
    for await (const [name, h] of pyt.entries()) if (h.kind === 'file' && name.endsWith('.md')) md[name] = await (await h.getFile()).text();
    await writeFile(pyt, 'pytania-dane.js', `// wygenerowane przez capture.js ${new Date().toLocaleString('pl-PL')}\nwindow.CLF_MD_TIME = ${Date.now()};\nwindow.CLF_MD = ${JSON.stringify(md)};\n`);
    return metas.length;
  }

  // ------------------------------------------------------------ tryb testowy (moje testy automatyczne)
  if (TEST && !TEST.panel) {
    const L = await extract(findDoc());
    if (TEST.opfs) window.__AWS_SAVED__ = await saveAll(await navigator.storage.getDirectory(), L);
    else window.__AWS_RESULT__ = { ...L, md: L.buildMd(TEST.existingMd) };
    return;
  }
  const getRootFn = TEST && TEST.panel ? async () => navigator.storage.getDirectory() : getRoot;
  const fsOK = 'showDirectoryPicker' in uiWin || (TEST && TEST.panel);

  // ------------------------------------------------------------ pobieranie (awaryjnie, gdy zapis do folderu niemożliwy)
  function download(name, content, type) {
    const a = uiDoc.createElement('a');
    a.href = URL.createObjectURL(new Blob([content], { type }));
    a.download = name;
    uiDoc.body.appendChild(a); a.click(); a.remove();
  }

  // ------------------------------------------------------------ panel
  if (uiWin.__awsClf) uiWin.__awsClf.destroy(); // ponowne wklejenie snippetu podmienia panel
  const host = uiDoc.createElement('div');
  host.style.cssText = 'position:fixed;right:16px;bottom:16px;z-index:2147483647';
  const root$ = host.attachShadow({ mode: 'open' });
  root$.innerHTML = `<style>
    *{box-sizing:border-box;font-family:system-ui,-apple-system,"Segoe UI",Roboto,sans-serif}
    .p{width:300px;background:#1d1d1b;color:#f3f1ea;border-radius:14px;box-shadow:0 10px 34px rgba(0,0,0,.4);padding:12px 14px 14px;font-size:13px;line-height:1.45}
    .top{display:flex;align-items:center;gap:8px;margin-bottom:8px}
    .logo{font-weight:800;letter-spacing:.04em;color:#ffa733;flex:1}
    .x{background:none;border:0;color:#9b978d;cursor:pointer;font-size:16px;padding:0 2px;line-height:1}.x:hover{color:#fff}
    .les{font-size:15px;font-weight:600;color:#fff;margin:2px 0 2px}
    .sub{color:#9b978d;font-size:12px}
    .badge{display:inline-block;font-size:11px;font-weight:700;padding:1px 7px;border-radius:99px;margin-left:4px;vertical-align:1px}
    .new{background:#3a2a10;color:#ffa733}.saved{background:#16301f;color:#5fd38d}
    .go{width:100%;margin-top:10px;background:#d97a00;color:#fff;border:0;border-radius:9px;padding:10px;font-size:14px;font-weight:700;cursor:pointer}
    .go:hover{background:#ee8a0a}.go:disabled{opacity:.55;cursor:default}
    .st{margin-top:8px;min-height:18px;color:#d8d4ca}.st.err{color:#ff8a7a}
    .foot{margin-top:8px;padding-top:8px;border-top:1px solid #33322d;display:flex;justify-content:space-between;color:#9b978d;font-size:12px}
    .lnk{background:none;border:0;color:#9b978d;text-decoration:underline;cursor:pointer;font-size:12px;padding:0}.lnk:hover{color:#fff}
    .mini{background:#1d1d1b;color:#ffa733;border:0;border-radius:99px;padding:10px 14px;font-weight:800;cursor:pointer;box-shadow:0 6px 20px rgba(0,0,0,.35)}
  </style>
  <div class="p" id="panel">
    <div class="top"><span class="logo">AWS-CLF <span style="font-weight:600;color:#9b978d;font-size:11px">v${VERSION}</span></span><button class="x" id="min" title="Zwiń">–</button><button class="x" id="close" title="Zamknij">×</button></div>
    <div class="sub" id="path">—</div>
    <div class="les"><span id="title">Szukam lekcji…</span><span class="badge" id="badge"></span></div>
    <button class="go" id="go">💾 Zapisz tę lekcję</button>
    <div class="st" id="st"></div>
    <div class="foot"><span id="folder">Folder: nie wybrano</span><button class="lnk" id="chg">zmień folder</button></div>
  </div>
  <button class="mini" id="mini" hidden>💾 AWS-CLF</button>`;
  uiDoc.body.appendChild(host);
  const $ = (id) => root$.getElementById(id);
  const setStatus = (msg, err) => { $('st').textContent = msg; $('st').className = 'st' + (err ? ' err' : ''); };

  let busy = false;
  let lastSlug = null;
  async function refresh() {
    const doc = findDoc();
    if (!doc) {
      $('title').textContent = 'Nie widzę lekcji';
      $('path').textContent = sameTop ? 'Otwórz lekcję kursu' : 'Przełącz konsolę na ramkę kursu';
      $('badge').textContent = ''; $('go').disabled = true; return;
    }
    const m = metaOf(doc);
    $('go').disabled = busy;
    $('title').textContent = m.lesson;
    $('path').textContent = [m.module.replace(/^Module (\d+):.*/, 'Moduł $1'), m.section].filter(Boolean).join(' › ');
    if (m.slug !== lastSlug) { lastSlug = m.slug; if (!busy) setStatus(''); }
    // czy ta lekcja jest już zapisana?
    let saved = null;
    try {
      const r = fsOK ? await (TEST && TEST.panel ? getRootFn() : getRoot(false)) : null;
      if (r) {
        $('folder').textContent = 'Folder: ' + r.name;
        const mat = await r.getDirectoryHandle('materialy', { create: false });
        const f = await (await mat.getFileHandle(`${m.slug}.html`)).getFile();
        saved = new Date(f.lastModified);
      }
    } catch (_) { /* brak pliku albo brak uprawnień */ }
    $('badge').textContent = saved ? '✓ zapisana' : 'nowa';
    $('badge').className = 'badge ' + (saved ? 'saved' : 'new');
    $('badge').title = saved ? 'Zapisano ' + saved.toLocaleString('pl-PL') : '';
  }

  async function onSave() {
    if (busy) return;
    busy = true; $('go').disabled = true;
    let root = null;
    let fsError = '';
    try {
      // najpierw folder — przeglądarka pozwala na to tylko „w trakcie” kliknięcia
      if (fsOK) { setStatus('Folder…'); root = await getRootFn(true); }
    } catch (e) {
      if (e.name === 'AbortError') { setStatus('Anulowano wybór folderu.'); busy = false; refresh(); return; }
      if (/podfolder/.test(e.message)) { setStatus(e.message + ' Kliknij „Zapisz” jeszcze raz.', true); busy = false; refresh(); return; }
      fsError = e.message;
      console.error('[AWS-CLF] zapis do folderu:', e);
    }
    try {
      const doc = findDoc();
      if (!doc) throw new Error('nie widzę lekcji');
      setStatus('Zbieram treść (karuzele, zakładki)…');
      const L = await extract(doc);
      const keyed = L.questions.filter((q) => q.correct.length).length;
      const info = `${L.nCarousels ? 'karuzele: ' + L.nCarousels + ', ' : ''}pytania: ${L.questions.length}` +
        (L.questions.length ? ` (klucz ze strony: ${keyed}/${L.questions.length})` : '') + (L.warnings.length ? ' · ⚠ ' + L.warnings.join('; ') : '');
      if (root) {
        const n = await saveAll(root, L);
        setStatus(`✅ Zapisano · ${info} · lekcji w spisie: ${n}` + (keyed < L.questions.length ? ' · Odpowiedz na pozostałe pytania (Submit) i zapisz ponownie.' : ''));
        log(`✅ „${L.lesson}” → ${root.name}\\materialy\\${L.slug}.html (${info})`);
      } else {
        download(`${L.slug}.html`, L.lessonHtml, 'text/html');
        if (L.questions.length) download(`${L.slug}.md`, L.buildMd(''), 'text/markdown');
        download(`${L.slug}.surowe.html`, L.rawHtml, 'text/html');
        setStatus(`⬇ Pobrano do Pobranych (nie zapisałem do folderu: ${fsError || 'brak obsługi w tej przeglądarce'}) · ${info}`, true);
      }
    } catch (e) {
      setStatus('Błąd: ' + e.message, true);
      console.error('[AWS-CLF]', e);
    }
    busy = false;
    refresh();
  }

  $('go').onclick = onSave;
  $('chg').onclick = async () => {
    try {
      await idbOp('readwrite', (s) => s.delete('root2'));
      const r = await getRoot(true);
      setStatus('Folder: ' + r.name);
    } catch (e) { if (e.name !== 'AbortError') setStatus(e.message, true); }
    refresh();
  };
  $('min').onclick = () => { $('panel').hidden = true; $('mini').hidden = false; };
  $('mini').onclick = () => { $('panel').hidden = false; $('mini').hidden = true; };
  const timer = setInterval(() => { if (!busy) refresh(); }, 1500);
  const destroy = () => { clearInterval(timer); host.remove(); delete uiWin.__awsClf; };
  $('close').onclick = destroy;
  uiWin.__awsClf = { destroy, save: onSave };
  if (!fsOK) setStatus('Ta przeglądarka nie zapisuje do folderu — pliki trafią do Pobranych.');
  refresh();
  log('Panel gotowy (prawy dolny róg). Przechodź między lekcjami i klikaj „Zapisz tę lekcję”.');
})();
