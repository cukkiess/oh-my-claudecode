const RAW = [
  // ── September 2025 ──
  { date:'2025-09-05', s:1,  song:'Follow Me' },
  { date:'2025-09-06', s:2,  song:'Muffin Man' },
  { date:'2025-09-12', s:3,  song:'Head Shoulders Knees and Toes' },
  { date:'2025-09-13', s:4,  song:"If You're Happy and You Know It" },
  { date:'2025-09-19', s:5,  song:'Rain Rain Go Away' },
  { date:'2025-09-20', s:6,  song:'Itsy Bitsy Spider' },
  { date:'2025-09-26', s:7,  song:'ABC Song' },
  { date:'2025-09-27', s:8,  song:'Tralala Hu' },
  // ── October 2025 ──
  { date:'2025-10-03', s:9,  song:'Pease Porridge Hot' },
  { date:'2025-10-04', s:10, song:'Hush, Little Baby' },
  { date:'2025-10-10', s:1,  song:'This Is the Way' },
  { date:'2025-10-11', s:2,  song:'Apples and Bananas' },
  { date:'2025-10-17', s:3,  song:"Do As I'm Doing" },
  { date:'2025-10-18', s:4,  song:'The Hokey Pokey' },
  { date:'2025-10-24', s:5,  song:'Hujan Turun' },
  { date:'2025-10-25', s:6,  song:'Old MacDonald Had a Farm' },
  { date:'2025-10-31', s:7,  song:'Baa Baa Black Sheep' },
  // ── November 2025 ──
  { date:'2025-11-07', s:8,  song:'Bath Song' },
  { date:'2025-11-08', s:9,  song:'Twinkle Twinkle Little Star' },
  { date:'2025-11-14', s:10, song:'Tak Mau Sendiri' },
  { date:'2025-11-15', s:1,  song:'Are You Sleeping (Brother John)' },
  { date:'2025-11-21', s:2,  song:'Polly Put the Kettle On' },
  { date:'2025-11-22', s:3,  song:'Open Shut Them' },
  { date:'2025-11-28', s:4,  song:'A Ram Sam Sam' },
  { date:'2025-11-29', s:5,  song:'Down by the Bay' },
  // ── December 2025 ──
  { date:'2025-12-05', s:6,  song:'The Bear Went Over the Mountain' },
  { date:'2025-12-06', s:7,  song:'Jejak Apa' },
  { date:'2025-12-12', s:8,  song:'Tersesat di Hutan' },
  { date:'2025-12-13', s:9,  song:'Pat-a-cake' },
  { date:'2025-12-19', s:10, song:'Tidurlah Anakku' },
  { date:'2025-12-20', s:1,  song:'Teman Baru' },
  { date:'2025-12-26', s:2,  song:'The More We Get Together' },
  { date:'2025-12-27', s:3,  song:'Nyam Nyam' },
  // ── January 2026 ──
  { date:'2026-01-02', s:4,  song:'This Is the Way (versi makan)' },
  { date:'2026-01-03', s:5,  song:'Walking Walking' },
  { date:'2026-01-09', s:6,  song:'Finger Family' },
  { date:'2026-01-10', s:7,  song:'Old MacDonald Had a Farm' },
  { date:'2026-01-16', s:8,  song:'Baa Baa Black Sheep' },
  { date:'2026-01-17', s:9,  song:'Twinkle Twinkle Little Star' },
  { date:'2026-01-23', s:10, song:'Rock a Baby' },
  { date:'2026-01-24', s:1,  song:'Wash Wash Your Hand' },
  { date:'2026-01-30', s:2,  song:'Makan Sehat' },
  { date:'2026-01-31', s:3,  song:'Hewan Apa' },
  // ── February 2026 ──
  { date:'2026-02-05', s:4,  song:'Five Little Monkeys' },
  { date:'2026-02-06', s:5,  song:'Wheels on the Bus' },
  { date:'2026-02-12', s:6,  song:'Ice Cream' },
  { date:'2026-02-13', s:7,  song:'See You Later, Alligator' },
  { date:'2026-02-19', s:8,  song:'London Bridge Is Falling Down' },
  { date:'2026-02-20', s:9,  song:'This Is the Way We Eat Our Meal' },
  { date:'2026-02-26', s:10, song:'Bintang Kecilku' },
  { date:'2026-02-27', s:1,  song:'Bangun Pagi' },
  // ── March 2026 ──
  { date:'2026-03-06', s:2,  song:'She\'ll Be Coming \'Round the Mountain' },
  { date:'2026-03-07', s:3,  song:'Mary Had a Little Lamb' },
  { date:'2026-03-13', s:4,  song:'Yankee Doodle' },
  { date:'2026-03-14', s:5,  song:'Train Song (Tut Tut Tut Naik Kereta Api)' },
  { date:'2026-03-20', s:6,  song:'Row Row Row Your Boat' },
  { date:'2026-03-21', s:7,  song:'Mr. Golden Sun' },
  { date:'2026-03-27', s:8,  song:'Five Little Ducks' },
  { date:'2026-03-28', s:9,  song:'Hot Cross Buns' },
  // ── April 2026 ──
  { date:'2026-04-03', s:10, song:"Bram's Lullaby" },
];

/* ──────────────────────────────────────────────
   Data helpers
   ────────────────────────────────────────────── */

let evMap = {};
function rebuildEvMap() {
  evMap = {};
  RAW.forEach(e => { evMap[e.date] = e; });
}
rebuildEvMap();

const MONTHS = [
  { y:2025, m:8,  label:'September' },
  { y:2025, m:9,  label:'October'   },
  { y:2025, m:10, label:'November'  },
  { y:2025, m:11, label:'December'  },
  { y:2026, m:0,  label:'January'   },
  { y:2026, m:1,  label:'February'  },
  { y:2026, m:2,  label:'March'     },
  { y:2026, m:3,  label:'April'     },
];

const WD_LABELS = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
const grid = document.getElementById('grid');

function pad(n){ return String(n).padStart(2,'0'); }
function dowMon(jsDay){ return (jsDay + 6) % 7; }

// Escape for safe HTML
function esc(str) {
  const el = document.createElement('span');
  el.textContent = str;
  return el.innerHTML;
}

/* ──────────────────────────────────────────────
   IndexedDB Persistence
   ────────────────────────────────────────────── */

const DB_NAME = 'BabyZuTimeline';
const DB_STORE = 'state';
const DB_KEY = 'raw';
const DB_KEY_UPDATED = 'updated';

function openDB() {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, 1);
    req.onupgradeneeded = (e) => e.target.result.createObjectStore(DB_STORE);
    req.onsuccess = (e) => resolve(e.target.result);
    req.onerror = (e) => reject(e.target.error);
  });
}

async function saveState() {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(DB_STORE, 'readwrite');
    tx.objectStore(DB_STORE).put(JSON.parse(JSON.stringify(RAW)), DB_KEY);
    const today = new Date();
    const yy = String(today.getFullYear()).slice(2);
    tx.objectStore(DB_STORE).put(`${pad(today.getDate())}/${pad(today.getMonth()+1)}/${yy}`, DB_KEY_UPDATED);
    tx.oncomplete = () => resolve();
    tx.onerror = (e) => reject(e.target.error);
  });
}

async function loadState() {
  try {
    const db = await openDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(DB_STORE, 'readonly');
      const req = tx.objectStore(DB_STORE).get(DB_KEY);
      const reqUpdated = tx.objectStore(DB_STORE).get(DB_KEY_UPDATED);
      req.onsuccess = () => {
        reqUpdated.onsuccess = () => resolve({ raw: req.result || null, updated: reqUpdated.result || null });
        reqUpdated.onerror = (e) => resolve({ raw: req.result || null, updated: null });
      };
      req.onerror = (e) => reject(e.target.error);
    });
  } catch {
    return { raw: null, updated: null };
  }
}

/* ──────────────────────────────────────────────
   Change Tracking
   ────────────────────────────────────────────── */

// Deep-frozen snapshot taken at page load for dirty detection
let rawSnapshot = JSON.parse(JSON.stringify(RAW));
let hasChanges = false;

function markDirty() {
  if (!hasChanges) {
    hasChanges = true;
    updateSaveButton();
  }
}

function buildChangeLines() {
  const curBySong = {};
  const snapBySong = {};
  RAW.forEach(e => { curBySong[e.song] = e; });
  rawSnapshot.forEach(e => { snapBySong[e.song] = e; });

  const edits = [];
  const moves = [];

  for (const song in curBySong) {
    const cur = curBySong[song];
    const snap = snapBySong[song] || null;
    if (!snap) {
      // New song added
      edits.push({ song: cur.song, date: cur.date, note: 'new → ' + cur.date });
    } else {
      const diffs = [];
      if (cur.s !== snap.s) diffs.push(`S${snap.s}`);
      if (cur.song !== snap.song) diffs.push(`"${snap.song}" → "${cur.song}"`);
      if (cur.date !== snap.date) {
        moves.push(`${snap.song}: ${snap.date} → ${cur.date}`);
      }
      if (diffs.length) {
        edits.push({ song: cur.song, date: cur.date, note: diffs.join(', ') });
      }
    }
  }

  // Removed songs (in snapshot but not in current, and not just relocated)
  for (const song in snapBySong) {
    if (!curBySong[song]) {
      moves.push(`${snapBySong[song].song}: removed from ${snapBySong[song].date}`);
    }
  }

  return { edits, moves };
}

/* ──────────────────────────────────────────────
   Save UI
   ────────────────────────────────────────────── */

const saveBtn = document.getElementById('save-btn');
const saveToast = document.getElementById('save-toast');

let toastTimer = null;

function showToast(msg, duration) {
  saveToast.textContent = msg;
  saveToast.hidden = false;
  requestAnimationFrame(() => saveToast.classList.add('visible'));
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    saveToast.classList.remove('visible');
    toastTimer = setTimeout(() => { saveToast.hidden = true; }, 200);
  }, duration);
}

function updateSaveButton() {
  if (hasChanges) {
    saveBtn.classList.add('save-btn--unsaved');
    saveBtn.classList.remove('save-btn--saved');
    saveBtn.textContent = 'Save';
  } else {
    saveBtn.classList.remove('save-btn--unsaved');
    saveBtn.textContent = 'Save';
  }
}

saveBtn.addEventListener('click', async () => {
  saveBtn.disabled = true;
  saveBtn.textContent = 'Saving…';
  try {
    await saveState();
    hasChanges = false;
    rawSnapshot = JSON.parse(JSON.stringify(RAW));
    saveBtn.textContent = 'Saved!';
    saveBtn.classList.remove('save-btn--unsaved');
    saveBtn.classList.add('save-btn--saved');
    showToast('Schedule saved!', 2000);
    setTimeout(() => {
      saveBtn.disabled = false;
      saveBtn.textContent = 'Save';
      saveBtn.classList.remove('save-btn--saved');
    }, 3000);
  } catch (err) {
    saveBtn.disabled = false;
    saveBtn.textContent = 'Save';
    showToast('Save failed — ' + err.message, 3000);
  }
});

/* ──────────────────────────────────────────────
   Before-Unload Modal (custom overlay)
   ────────────────────────────────────────────── */

const modalOverlay = document.getElementById('save-modal-overlay');
const modalBody = document.getElementById('save-modal-body');
const modalContent = document.getElementById('save-modal-content');

function showSaveModal() {
  if (!hasChanges) return;
  const { edits, moves } = buildChangeLines();
  let html = '';
  if (edits.length || moves.length) {
    html += '<ul class="changes-list">';
    edits.forEach(e => { html += `<li><span class="tag tag-edited">edited</span> ${e.song} — ${e.note}</li>`; });
    moves.forEach(m => { html += `<li><span class="tag tag-moved">moved</span> ${m}</li>`; });
    html += '</ul>';
  }
  modalContent.innerHTML = html;
  modalOverlay.hidden = false;
  requestAnimationFrame(() => { modalOverlay.classList.add('modal-show'); });
}

function hideSaveModal() {
  modalOverlay.classList.remove('modal-show');
  setTimeout(() => { modalOverlay.hidden = true; }, 200);
}

document.getElementById('save-modal-save').addEventListener('click', async () => {
  hideSaveModal();
  saveBtn.click();
});

document.getElementById('save-modal-discard').addEventListener('click', () => {
  rawSnapshot = JSON.parse(JSON.stringify(RAW));
  hasChanges = false;
  updateSaveButton();
  hideSaveModal();
  showToast('Unsaved changes discarded', 1500);
});

document.getElementById('save-modal-close')?.addEventListener('click', hideSaveModal);
document.getElementById('save-modal-cancel').addEventListener('click', hideSaveModal);

// Block standard beforeunload with custom modal + native fallback
let modalShownForUnload = false;
window.addEventListener('beforeunload', (e) => {
  if (hasChanges && !modalShownForUnload) {
    modalShownForUnload = true;
    // Stop the actual unload
    e.preventDefault();
    e.returnValue = '';
    // Show our custom modal so when the dialog closes, the user sees it
    showSaveModal();
    setTimeout(() => { modalShownForUnload = false; }, 500);
    return '';
  }
});

/* ──────────────────────────────────────────────
   Inline Editing
   ────────────────────────────────────────────── */

function startEdit(span, fieldKey, entry) {
  const cell = span.closest('.day-cell');
  if (!cell || cell.classList.contains('editing')) return;

  cell.classList.add('editing');
  const original = entry[fieldKey];

  const input = document.createElement('input');
  input.className = 'edit-input';

  if (fieldKey === 's') {
    input.type = 'number';
    input.min = 1;
    input.max = 10;
    input.value = entry.s;
    input.style.width = '40px';
    input.style.fontSize = '.6rem';
    input.style.fontWeight = '700';
  } else {
    input.type = 'text';
    input.value = entry.song;
    input.maxLength = 200;
    input.style.fontSize = '.65rem';
    input.style.fontWeight = '500';
  }

  span.replaceWith(input);
  input.focus();

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') { e.preventDefault(); input.blur(); }
    if (e.key === 'Escape') { e.preventDefault(); input.value = original; input.blur(); }
  });

  input.addEventListener('blur', () => {
    const val = input.value.trim();
    if (fieldKey === 's') {
      const num = parseInt(val, 10);
      entry.s = isNaN(num) ? original : Math.max(1, Math.min(10, num));
    } else {
      entry.song = val.length > 0 ? val : original;
    }
    const newSpan = document.createElement('span');
    if (fieldKey === 's') {
      newSpan.className = 's-badge';
      newSpan.textContent = `S${entry.s}`;
    } else {
      newSpan.className = 'song';
      newSpan.textContent = entry.song;
    }
    input.replaceWith(newSpan);
    cell.classList.remove('editing');
    markDirty();
  });
}

/* ──────────────────────────────────────────────
   Drag and Drop
   ────────────────────────────────────────────── */

let dragSourceDate = null;

function onDragStart(e) {
  if (e.currentTarget.classList.contains('editing')) { e.preventDefault(); return; }
  const cell = e.currentTarget;
  dragSourceDate = cell.dataset.date;
  e.dataTransfer.setData('text/plain', dragSourceDate);
  e.dataTransfer.effectAllowed = 'move';
  requestAnimationFrame(() => cell.classList.add('drag-source'));
}

function onDragEnd(e) {
  e.currentTarget.classList.remove('drag-source');
  document.querySelectorAll('.drag-over, .drag-over-invalid')
    .forEach(el => el.classList.remove('drag-over', 'drag-over-invalid'));
  dragSourceDate = null;
}

function onDragOver(e) {
  e.preventDefault();
  if (!dragSourceDate) return;
  const cell = e.currentTarget;
  if (!cell.dataset.date) return;
  const targetDate = cell.dataset.date;
  if (targetDate === dragSourceDate) return;
  if (evMap[targetDate]) {
    cell.classList.remove('drag-over');
    cell.classList.add('drag-over-invalid');
  } else {
    cell.classList.remove('drag-over-invalid');
    cell.classList.add('drag-over');
  }
}

function onDragLeave(e) {
  e.currentTarget.classList.remove('drag-over', 'drag-over-invalid');
}

function onDrop(e) {
  e.preventDefault();
  const cell = e.currentTarget;
  cell.classList.remove('drag-over', 'drag-over-invalid');
  if (!dragSourceDate || !cell.dataset.date) return;

  const targetDate = cell.dataset.date;
  if (targetDate === dragSourceDate) return;

  const entry = evMap[dragSourceDate];
  if (!entry) return;

  if (evMap[targetDate]) return;

  entry.date = targetDate;
  rebuildEvMap();
  renderAll();
  markDirty();
}

/* ──────────────────────────────────────────────
   Render
   ────────────────────────────────────────────── */

function buildMonth({ y, m, label }){
  const first    = new Date(y, m, 1);
  const daysInM  = new Date(y, m+1, 0).getDate();
  const startCol = dowMon(first.getDay());

  let sessionCount = 0;
  for(let d=1; d<=daysInM; d++){
    if(evMap[`${y}-${pad(m+1)}-${pad(d)}`]) sessionCount++;
  }

  const cells = Array(startCol).fill(null);
  for(let d=1; d<=daysInM; d++) cells.push(d);
  while(cells.length % 7) cells.push(null);

  const dayCells = cells.map((day, idx) => {
    if(!day) return '<div class="day-cell empty"></div>';

    const col      = idx % 7;
    const isWknd   = col >= 5;
    const dateStr  = `${y}-${pad(m+1)}-${pad(day)}`;
    const ev       = evMap[dateStr];
    const evClass  = ev ? (isWknd ? ' ev-wknd' : ' ev-day') : (isWknd ? ' wknd' : '');

    return `
      <div class="day-cell${evClass}" data-date="${dateStr}">
        <div class="day-num">${day}</div>
        ${ev ? `
          <div class="ev-body" draggable="true">
            <span class="s-badge">S${ev.s}</span>
            <span class="song">${esc(ev.song)}</span>
          </div>` : ''}
      </div>`;
  }).join('');

  const countLabel = `${sessionCount} song${sessionCount!==1?'s':''}`;

  const card = document.createElement('div');
  card.className = 'month-card';
  card.innerHTML = `
    <div class="month-header">
      <span class="month-name">${esc(label)}</span>
      <div class="month-meta">
        <span class="session-count">${countLabel}</span>
        <span class="month-year">${y}</span>
      </div>
    </div>
    <div class="calendar">
      <div class="calendar-weekdays">
        ${WD_LABELS.map((d,i) =>
          `<div class="wd-label${i>=5?' wknd':''}">${esc(d)}</div>`
        ).join('')}
      </div>
      <div class="calendar-grid">${dayCells}</div>
    </div>`;
  return card;
}

function renderAll() {
  grid.innerHTML = '';
  MONTHS.forEach(mo => grid.appendChild(buildMonth(mo)));
  attachInteractionListeners();
}

function attachInteractionListeners() {
  grid.addEventListener('click', onGridClick);
  document.querySelectorAll('.day-cell[data-date]').forEach(cell => {
    cell.addEventListener('dragstart', onDragStart);
    cell.addEventListener('dragend', onDragEnd);
    cell.addEventListener('dragover', onDragOver);
    cell.addEventListener('dragleave', onDragLeave);
    cell.addEventListener('drop', onDrop);
  });
}

function onGridClick(e) {
  const badge = e.target.closest('.s-badge');
  if (badge) {
    const cell = badge.closest('.day-cell');
    const entry = evMap[cell.dataset.date];
    if (entry) { e.stopPropagation(); startEdit(badge, 's', entry); }
    return;
  }
  const song = e.target.closest('.song');
  if (song) {
    const cell = song.closest('.day-cell');
    const entry = evMap[cell.dataset.date];
    if (entry) { e.stopPropagation(); startEdit(song, 'song', entry); }
  }
}

/* ──────────────────────────────────────────────
   Init
   ────────────────────────────────────────────── */

(async function init() {
  const saved = await loadState();
  if (saved && saved.raw && Array.isArray(saved.raw)) {
    RAW.length = 0;
    saved.raw.forEach(e => RAW.push(e));
    rebuildEvMap();
    rawSnapshot = JSON.parse(JSON.stringify(RAW));
  }
  if (saved && saved.updated) {
    document.getElementById('last-updated').textContent = 'Updated ' + saved.updated;
  }
  renderAll();
})();
