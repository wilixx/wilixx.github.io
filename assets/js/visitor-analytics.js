---
layout: null
sitemap: false
---
(() => {
  'use strict';

  const settings = {
    enabled: {{ site.data.visitor_analytics.enabled | default: false | jsonify }},
    websiteId: {{ site.data.visitor_analytics.website_id | default: '' | jsonify }},
    scriptUrl: {{ site.data.visitor_analytics.script_url | default: '' | jsonify }}
  };

  // Disabled configuration and privacy preferences prevent any analytics request.
  if (settings.enabled !== true || window.location.hostname !== 'wilixx.github.io' ||
      window.location.protocol !== 'https:') return;
  if (window.navigator.globalPrivacyControl === true ||
      [window.navigator.doNotTrack, window.navigator.msDoNotTrack, window.doNotTrack]
        .some(value => value === true || value === '1' || value === 'yes')) return;
  if (typeof settings.websiteId !== 'string' ||
      !/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(settings.websiteId)) return;
  if (document.getElementById('academic-visitor-tracker')) return;

  try {
    const scriptUrl = new URL(settings.scriptUrl);
    if (scriptUrl.protocol !== 'https:' || scriptUrl.username || scriptUrl.password ||
        scriptUrl.search || scriptUrl.hash) return;

    const path = window.location.pathname.replace(/\/index\.html$/, '/') || '/';
    const titles = {
      '/': 'Academic homepage',
      '/talks/': 'Talks',
      '/gallery/': 'Gallery',
      '/demos/carelab-satellite-semcom/': 'CARELab Satellite SemCom',
      '/demos/carelab-green-cloud/': 'CARELab Green Cloud',
      '/demos/carelab-in-orbit-computing/': 'CARELab In-orbit Computing',
      '/demos/carelab-widest-routing/': 'CARELab Widest-Inter Satellite Routing',
      '/demos/carelab-satellite-resilience/': 'CARELab Satellite Resilience Analysis'
    };
    const tracker = document.createElement('script');
    tracker.id = 'academic-visitor-tracker';
    tracker.src = scriptUrl.href;
    tracker.async = true;
    tracker.referrerPolicy = 'no-referrer';
    tracker.setAttribute('data-website-id', settings.websiteId);
    tracker.setAttribute('data-domains', 'wilixx.github.io');
    tracker.setAttribute('data-auto-track', 'false');
    tracker.setAttribute('data-exclude-search', 'true');
    tracker.setAttribute('data-exclude-hash', 'true');
    tracker.setAttribute('data-do-not-track', 'true');

    let counted = false;
    tracker.addEventListener('load', () => {
      if (counted || !window.umami || typeof window.umami.track !== 'function') return;
      counted = true;
      try {
        // An explicit payload excludes page titles, referrers, queries, form data,
        // and automatic interactions. Only this document's page visit is counted.
        const result = window.umami.track({
          website: settings.websiteId,
          hostname: 'wilixx.github.io',
          url: path,
          title: titles[path] || 'Academic website',
          referrer: ''
        });
        if (result && typeof result.catch === 'function') result.catch(() => {});
      } catch (_) {
        // A blocked or unavailable analytics service must not affect the website.
      }
    }, { once: true });
    tracker.addEventListener('error', () => {}, { once: true });
    document.head.appendChild(tracker);
  } catch (_) {
    // Configuration or network failures leave the page fully usable.
  }
})();
