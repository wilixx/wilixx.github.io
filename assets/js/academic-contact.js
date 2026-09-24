(() => {
  'use strict';
  const dialog = document.getElementById('academic-contact-dialog');
  const triggers = Array.from(document.querySelectorAll('.academic-contact-trigger'));
  if (!dialog || !triggers.length) return;
  const closeButton = dialog.querySelector('.academic-contact-close');
  const qr = dialog.querySelector('.academic-contact-qr');
  const linkedIn = dialog.querySelector('.academic-contact-linkedin');
  if (!closeButton || !qr) return;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const labels = {
    en: { title: 'WeChat', hint: 'Scan the QR code to connect.', save: 'Save QR code', open: 'Connect on WeChat', close: 'Close contact dialog', qr: "Binquan Guo's WeChat contact QR code", linkedIn: 'Open LinkedIn profile in a new tab' },
    zh: { title: '微信', hint: '扫描二维码，交流联系。', save: '保存二维码', open: '通过微信联系', close: '关闭联系方式', qr: 'Binquan Guo 的微信联系二维码', linkedIn: '在新标签页打开 LinkedIn 主页' }
  };
  let closeTimer;
  let pressedBackdrop = false;
  let returnFocus = null;

  const syncLanguage = () => {
    const copy = labels[document.documentElement.lang.toLowerCase().startsWith('zh') ? 'zh' : 'en'];
    dialog.querySelectorAll('[data-contact-copy]').forEach(node => { node.textContent = copy[node.dataset.contactCopy]; });
    closeButton.setAttribute('aria-label', copy.close);
    qr.alt = copy.qr;
    if (linkedIn) linkedIn.setAttribute('aria-label', copy.linkedIn);
    triggers.forEach(trigger => {
      trigger.setAttribute('aria-label', copy.open);
      trigger.title = copy.title;
    });
  };

  const finishClose = () => {
    window.clearTimeout(closeTimer);
    if (dialog.open) dialog.close();
  };
  const requestClose = () => {
    if (!dialog.open || dialog.classList.contains('is-closing')) return;
    if (reducedMotion.matches) {
      finishClose();
      return;
    }
    dialog.classList.add('is-closing');
    // Keep native focus containment and the inert background until exit ends.
    closeTimer = window.setTimeout(finishClose, 240);
  };

  syncLanguage();
  new MutationObserver(syncLanguage).observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
  triggers.forEach(trigger => {
    trigger.hidden = false;
    trigger.addEventListener('click', () => {
      syncLanguage();
      if (typeof dialog.showModal !== 'function') {
        window.open(qr.src, '_blank', 'noopener,noreferrer');
        return;
      }
      if (dialog.open) return;
      returnFocus = trigger;
      pressedBackdrop = false;
      window.clearTimeout(closeTimer);
      dialog.classList.remove('is-closing');
      dialog.showModal();
      document.documentElement.classList.add('academic-contact-open');
      closeButton.focus({ preventScroll: true });
    });
  });
  closeButton.addEventListener('click', requestClose);
  dialog.addEventListener('cancel', event => {
    event.preventDefault();
    requestClose();
  });
  dialog.addEventListener('keydown', event => {
    if (event.key !== 'Tab' || !dialog.open) return;
    const focusable = Array.from(dialog.querySelectorAll('button:not([disabled]), a[href], [tabindex="0"]'))
      .filter(node => !node.hidden && node.getClientRects().length);
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    const current = document.activeElement;
    if (!first) { event.preventDefault(); return; }
    if (event.shiftKey && (current === first || current === dialog || !dialog.contains(current))) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && (current === last || current === dialog || !dialog.contains(current))) {
      event.preventDefault();
      first.focus();
    }
  });
  dialog.addEventListener('animationend', event => {
    if (event.target === dialog && event.animationName === 'academic-contact-out') finishClose();
  });
  const outside = event => {
    const box = dialog.getBoundingClientRect();
    return event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom;
  };
  dialog.addEventListener('pointerdown', event => { pressedBackdrop = event.target === dialog && outside(event); });
  dialog.addEventListener('pointercancel', () => { pressedBackdrop = false; });
  dialog.addEventListener('click', event => {
    if (pressedBackdrop && event.target === dialog && outside(event)) requestClose();
    pressedBackdrop = false;
  });
  dialog.addEventListener('close', () => {
    window.clearTimeout(closeTimer);
    dialog.classList.remove('is-closing');
    document.documentElement.classList.remove('academic-contact-open');
    pressedBackdrop = false;
    if (returnFocus && returnFocus.isConnected && !returnFocus.hidden && returnFocus.getClientRects().length) {
      returnFocus.focus({ preventScroll: true });
    }
    returnFocus = null;
  });
})();
