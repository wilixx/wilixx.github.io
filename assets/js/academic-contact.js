(() => {
  'use strict';
  const dialog = document.getElementById('academic-contact-dialog');
  const trigger = document.querySelector('.academic-contact-trigger');
  if (!dialog || !trigger) return;
  trigger.hidden = false;
  trigger.addEventListener('click', () => {
    if (typeof dialog.showModal !== 'function') {
      window.open(dialog.querySelector('img').src, '_blank', 'noopener,noreferrer');
      return;
    }
    if (!dialog.open) dialog.showModal();
    document.documentElement.classList.add('academic-contact-open');
  });
  dialog.querySelector('.academic-contact-close').addEventListener('click', () => dialog.close());
  let pressedBackdrop = false;
  const outside = event => {
    const box = dialog.getBoundingClientRect();
    return event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom;
  };
  dialog.addEventListener('pointerdown', event => { pressedBackdrop = event.target === dialog && outside(event); });
  dialog.addEventListener('click', event => {
    if (pressedBackdrop && event.target === dialog && outside(event)) dialog.close();
    pressedBackdrop = false;
  });
  dialog.addEventListener('close', () => {
    document.documentElement.classList.remove('academic-contact-open');
    trigger.focus({preventScroll: true});
  });
})();
