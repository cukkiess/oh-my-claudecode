document.addEventListener('DOMContentLoaded', () => {

  // ========================
  // Staggered card reveal
  // ========================
  const cards = document.querySelectorAll('.card');
  cards.forEach((card, i) => {
    setTimeout(() => {
      card.classList.add('visible');
    }, 50 + i * 80);
  });

  // ========================
  // Close X button
  // ========================
  const closeBtn = document.querySelector('.close-btn');
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      const root = document.getElementById('root');
      root.style.opacity = '0';
      root.style.transition = 'opacity .3s ease';
      setTimeout(() => { root.style.display = 'none'; }, 300);
    });
  }

  // ========================
  // Video modal — play button on folder
  // ========================
  const playBtn    = document.querySelector('.cw-play-btn');
  const modal      = document.getElementById('videoModal');
  const modalClose = document.querySelector('.video-modal-close');
  const backdrop   = document.querySelector('.video-modal-backdrop');

  function openModal() {
    if (!modal) return;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    if (!modal) return;
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (playBtn)    playBtn.addEventListener('click', openModal);
  if (modalClose) modalClose.addEventListener('click', closeModal);
  if (backdrop)   backdrop.addEventListener('click', closeModal);

  // ESC to close
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
      closeModal();
    }
  });

  // ========================
  // Button hover radial spotlight
  // ========================
  document.querySelectorAll('.btn-white, .btn-outline-sm, .btn-outline').forEach(btn => {
    btn.addEventListener('mousemove', e => {
      const rect = btn.getBoundingClientRect();
      btn.style.setProperty('--mx', ((e.clientX - rect.left) / rect.width * 100) + '%');
      btn.style.setProperty('--my', ((e.clientY - rect.top) / rect.height * 100) + '%');
    });
  });

  // ========================
  // Excel grid soft auto-scroll
  // ========================
  const excelGrid = document.querySelector('.excel-gr');
  if (excelGrid) {
    let scrollDir = 1;
    let scrollPaused = false;

    excelGrid.addEventListener('mouseenter', () => { scrollPaused = true; });
    excelGrid.addEventListener('mouseleave', () => { scrollPaused = false; });

    function autoScroll() {
      if (!scrollPaused) {
        const max = excelGrid.scrollHeight - excelGrid.clientHeight;
        excelGrid.scrollTop += scrollDir * 0.3;
        if (excelGrid.scrollTop >= max) {
          scrollDir = -1;
          scrollPaused = true;
          setTimeout(() => { scrollPaused = false; }, 1500);
        } else if (excelGrid.scrollTop <= 0) {
          scrollDir = 1;
          scrollPaused = true;
          setTimeout(() => { scrollPaused = false; }, 1500);
        }
      }
      requestAnimationFrame(autoScroll);
    }
    requestAnimationFrame(autoScroll);
  }
});
