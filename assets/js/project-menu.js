(() => {
  'use strict';
  const nav = document.querySelector('#site-nav');
  if (!nav || nav.dataset.projectMenuDismiss === 'ready') return;
  nav.dataset.projectMenuDismiss = 'ready';

  // Keep native summary toggling and link activation untouched. Capture also
  // handles clicks on controls that stop propagation later in the event path.
  document.addEventListener('click', event => {
    nav.querySelectorAll('.carelab-project-nav[open]').forEach(menu => {
      if (!menu.contains(event.target)) menu.open = false;
    });
  }, true);

  document.addEventListener('keydown', event => {
    if (event.key !== 'Escape') return;
    nav.querySelectorAll('.carelab-project-nav[open]').forEach(menu => {
      const restoreFocus = menu.contains(document.activeElement);
      menu.open = false;
      if (restoreFocus) menu.querySelector('summary')?.focus();
    });
  });
})();
