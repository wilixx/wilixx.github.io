(() => {
  'use strict';
  const dialog = document.getElementById('academic-contact-dialog');
  const trigger = document.querySelector('.academic-contact-trigger');
  if (!dialog || !trigger) return;
  const closeButton = dialog.querySelector('.academic-contact-close');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let closeTimer;
  let pressedBackdrop = false;

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
    // Keep the native modal open through its exit animation; the timer also
    // closes it if an animation is interrupted or disabled by custom styles.
    closeTimer = window.setTimeout(finishClose, 240);
  };

  trigger.hidden = false;
  trigger.addEventListener('click', () => {
    if (typeof dialog.showModal !== 'function') {
      window.open(dialog.querySelector('img').src, '_blank', 'noopener,noreferrer');
      return;
    }
    if (dialog.open) return;
    dialog.classList.remove('is-closing');
    dialog.showModal();
    document.documentElement.classList.add('academic-contact-open');
  });
  closeButton.addEventListener('click', requestClose);
  dialog.addEventListener('cancel', event => {
    event.preventDefault();
    requestClose();
  });
  dialog.addEventListener('animationend', event => {
    if (event.target === dialog && event.animationName === 'academic-contact-out') finishClose();
  });
  const outside = event => {
    const box = dialog.getBoundingClientRect();
    return event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom;
  };
  dialog.addEventListener('pointerdown', event => { pressedBackdrop = event.target === dialog && outside(event); });
  dialog.addEventListener('click', event => {
    if (pressedBackdrop && event.target === dialog && outside(event)) requestClose();
    pressedBackdrop = false;
  });
  dialog.addEventListener('close', () => {
    window.clearTimeout(closeTimer);
    dialog.classList.remove('is-closing');
    document.documentElement.classList.remove('academic-contact-open');
    pressedBackdrop = false;
    trigger.focus({preventScroll: true});
  });
})();
