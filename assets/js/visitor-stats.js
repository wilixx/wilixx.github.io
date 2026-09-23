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

  const details = section.querySelector('.visitor-stats__details');
  const wrapper = section.querySelector('[data-visitor-stats-frame]');
  const message = section.querySelector('[data-visitor-stats-message]');
  if (!details || !wrapper || section.dataset.visitorStatsInitialized === 'true') return;
  section.dataset.visitorStatsInitialized = 'true';

  // Logical viewport dimensions cover the complete board, not a clipped crop.
  const logicalWidth = Number(wrapper.dataset.frameWidth) || 1100;
  const logicalHeight = Number(wrapper.dataset.frameHeight) || 1100;
  if (logicalWidth <= 0 || logicalHeight <= 0 || !Number.isFinite(logicalWidth) || !Number.isFinite(logicalHeight)) return;
  let frame;
  let observer;
  const reset = section.querySelector('[data-visitor-stats-reset]');
  const close = section.querySelector('[data-visitor-stats-close]');
  const summary = details.querySelector('summary');

  const fitFrame = () => {
    if (!details.open || !frame) return;
    const availableWidth = wrapper.clientWidth;
    if (availableWidth <= 0) return;
    const scale = Math.min(availableWidth / logicalWidth, 0.6);
    frame.style.transform = `scale(${scale})`;
    wrapper.style.height = `${Math.ceil(logicalHeight * scale)}px`;
  };

  const openDashboard = () => {
    if (!details.open) return;
    if (!frame) {
      let source;
      try {
        source = new URL(wrapper.dataset.src);
        if (source.origin !== 'https://cloud.umami.is' || source.username || source.password) return;
      } catch (_) { return; }

      frame = document.createElement('iframe');
      frame.className = 'visitor-stats__frame';
      frame.title = 'Site visits: public read-only analytics dashboard';
      frame.width = String(logicalWidth);
      frame.height = String(logicalHeight);
      frame.style.width = `${logicalWidth}px`;
      frame.style.height = `${logicalHeight}px`;
      frame.loading = 'lazy';
      frame.referrerPolicy = 'no-referrer';
      // No iframe request is made before the first opening.
      frame.src = source.href;
      frame.addEventListener('error', () => {
        if (message) message.textContent = 'The embedded dashboard could not be opened. Please ';
      });
      wrapper.hidden = false;
      wrapper.appendChild(frame);
      if (reset) reset.hidden = false;
      if (close) close.hidden = false;
      if (typeof window.ResizeObserver === 'function') {
        observer = new window.ResizeObserver(fitFrame);
        observer.observe(wrapper);
      } else {
        window.addEventListener('resize', fitFrame);
      }
    }
    fitFrame();
  };

  // Native details and public links work without JavaScript. Reopening reuses
  // the iframe and does not call the separate page-visit collector.
  details.addEventListener('toggle', openDashboard);
  // A local, always-reachable return action avoids the third-party dashboard's
  // distant filter controls. Reset to its documented unfiltered default view.
  if (reset) reset.addEventListener('click', () => {
    if (frame) frame.src = wrapper.dataset.src;
  });
  if (close) close.addEventListener('click', () => {
    details.open = false;
    if (summary) summary.focus({ preventScroll: true });
  });
  if (details.open) openDashboard();
})();
