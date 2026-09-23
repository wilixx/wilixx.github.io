(() => {
  'use strict';
  const section = document.querySelector('[data-visitor-stats]');
  if (!section) return;

  if (section.dataset.visitorStats === 'preview') {
    // A preview flag never exposes an unconnected placeholder on a public host.
    const localHosts = new Set(['localhost', '127.0.0.1', '::1', '[::1]']);
    section.hidden = !localHosts.has(window.location.hostname);
    return;
  }

  const frame = section.querySelector('.visitor-stats__frame');
  const status = section.querySelector('[data-visitor-stats-status]');
  if (!frame || !status) return;

  const start = section.querySelector('[data-visitor-stats-start]');
  if (start) {
    const raw = start.dataset.visitorStatsStart || '';
    const date = /^\d{4}-\d{2}-\d{2}$/.test(raw) ? new Date(`${raw}T00:00:00Z`) : new Date(NaN);
    const time = start.querySelector('time');
    if (time && Number.isFinite(date.getTime()) && date.getTime() <= Date.now() && date.toISOString().slice(0, 10) === raw) {
      time.dateTime = raw;
      time.textContent = new Intl.DateTimeFormat('en', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' }).format(date);
      start.hidden = false;
    }
  }

  // Cross-origin frames cannot be inspected. In particular, their load event
  // does not prove that analytics data was loaded or embedding was permitted.
  // Keep the standalone dashboard link available regardless of frame state.
  frame.addEventListener('error', () => {
    const link = status.querySelector('a');
    if (!link) return;
    status.replaceChildren(document.createTextNode('The embedded dashboard could not be opened. Use '), link, document.createTextNode('.'));
  });
})();
