(() => {
  'use strict';
  const nav = document.querySelector('#site-nav');
  if (!nav || nav.dataset.projectMenuDismiss === 'ready') return;
  nav.dataset.projectMenuDismiss = 'ready';

  const overflow = nav.querySelector('.hidden-links');
  const toggle = nav.querySelector('button');
  const notice = document.getElementById('carelab-preview-notice');
  let noticeTimer;
  let noticeClearTimer;
  let noticeAnchor = null;
  let noticeFrame = 0;
  let previousActivation = null;

  const syncToggle = () => {
    if (toggle && overflow) {
      toggle.setAttribute('aria-expanded', String(!overflow.classList.contains('hidden')));
    }
  };
  const closeOverflow = restoreFocus => {
    if (!overflow || overflow.classList.contains('hidden')) return;
    overflow.classList.add('hidden');
    toggle?.classList.remove('close');
    syncToggle();
    if (restoreFocus) toggle?.focus();
  };
  const hideNotice = () => {
    window.clearTimeout(noticeTimer);
    window.clearTimeout(noticeClearTimer);
    if (!notice) return;
    noticeAnchor = null;
    notice.classList.remove('is-visible');
    noticeClearTimer = window.setTimeout(() => { notice.textContent = ''; }, 240);
  };
  const positionNotice = () => {
    if (!notice || !noticeAnchor) return;
    const anchor = noticeAnchor.getBoundingClientRect();
    const width = window.innerWidth;
    const height = window.innerHeight;
    const margin = 10;
    const gap = 9;
    if (!anchor.width || !anchor.height || anchor.bottom <= 0 || anchor.top >= height) {
      hideNotice();
      return;
    }
    const noticeWidth = notice.offsetWidth;
    const noticeHeight = notice.offsetHeight;
    let left = anchor.right + gap;
    let top = anchor.top + (anchor.height - noticeHeight) / 2;
    let placement = 'right';
    if (left + noticeWidth > width - margin) {
      left = anchor.left + (anchor.width - noticeWidth) / 2;
      top = anchor.bottom + gap;
      placement = 'below';
      if (top + noticeHeight > height - margin) {
        top = anchor.top - noticeHeight - gap;
        placement = 'above';
      }
    }
    notice.style.left = `${Math.max(margin, Math.min(left, width - noticeWidth - margin))}px`;
    notice.style.top = `${Math.max(margin, Math.min(top, height - noticeHeight - margin))}px`;
    notice.dataset.placement = placement;
  };
  const scheduleNoticePosition = () => {
    if (!noticeAnchor || noticeFrame) return;
    noticeFrame = window.requestAnimationFrame(() => {
      noticeFrame = 0;
      positionNotice();
    });
  };
  const showNotice = entry => {
    if (!notice) return;
    window.clearTimeout(noticeTimer);
    window.clearTimeout(noticeClearTimer);
    noticeAnchor = entry;
    notice.textContent = 'Will be available soon';
    positionNotice();
    if (!noticeAnchor) return;
    notice.classList.add('is-visible');
    noticeTimer = window.setTimeout(hideNotice, 1500);
  };

  // Keep the notice next to its link, outside any clipped dropdown container.
  if (notice) document.body.appendChild(notice);
  document.addEventListener('scroll', scheduleNoticePosition, true);
  window.addEventListener('resize', scheduleNoticePosition);
  window.visualViewport?.addEventListener('resize', scheduleNoticePosition);
  window.visualViewport?.addEventListener('scroll', scheduleNoticePosition);
  nav.querySelectorAll('.carelab-project-nav').forEach(menu => {
    menu.addEventListener('toggle', () => { if (!menu.open) hideNotice(); });
  });

  // The legacy greedy-navigation script continues to own the toggle/X button.
  // Observe its state so outside dismissal and accessibility stay in sync.
  if (overflow) {
    new MutationObserver(syncToggle).observe(overflow, { attributes: true, attributeFilter: ['class'] });
    syncToggle();
  }

  // Capture also catches clicks on controls that stop propagation later.
  document.addEventListener('click', event => {
    nav.querySelectorAll('.carelab-project-nav[open]').forEach(menu => {
      if (!menu.contains(event.target)) menu.open = false;
    });
    if (!overflow?.contains(event.target) && !toggle?.contains(event.target)) {
      closeOverflow(false);
    }
    if (!event.target.closest?.('[data-preview-entry]')) {
      previousActivation = null;
      hideNotice();
    }
  }, true);

  // Only the marked preview entry uses two quick activations. Click events also
  // cover mobile taps and Enter; touch-action in CSS prevents double-tap zoom.
  nav.querySelectorAll('[data-preview-entry]').forEach(entry => {
    entry.addEventListener('click', event => {
      const now = performance.now();
      const threshold = event.pointerType === 'touch' ? 650 : 500;
      const opensPreview = previousActivation?.entry === entry &&
        now - previousActivation.at <= threshold;
      previousActivation = opensPreview ? null : { entry, at: now };
      if (opensPreview) {
        hideNotice();
        // Let the anchor's native target="_blank" action open the preview.
        // Keeping this synchronous with the click also works for double taps.
      } else {
        event.preventDefault();
        showNotice(entry);
      }
    });
    // The second click already opens the preview; suppress any native follow-up.
    entry.addEventListener('dblclick', event => { event.preventDefault(); });
  });

  document.addEventListener('keydown', event => {
    if (event.key === 'Enter' && event.repeat && event.target.closest?.('[data-preview-entry]')) {
      event.preventDefault();
      return;
    }
    if (event.key !== 'Escape') return;
    previousActivation = null;
    hideNotice();
    const restoreToggleFocus = overflow?.contains(document.activeElement);
    nav.querySelectorAll('.carelab-project-nav[open]').forEach(menu => {
      const restoreFocus = menu.contains(document.activeElement);
      menu.open = false;
      if (restoreFocus) menu.querySelector('summary')?.focus();
    });
    closeOverflow(restoreToggleFocus);
  });
})();
