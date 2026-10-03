(() => {
  'use strict';
  const panel = document.querySelector('#references-resources');
  if (!panel) return;
  const buttons = Array.from(panel.querySelectorAll('button[data-copy-target]'));
  const status = panel.querySelector('#reference-copy-status');
  const sources = new Map(Array.from(panel.querySelectorAll('pre > code[id]')).map(source => [source.id, source]));
  const captions = new Map();
  const timers = new Map();
  const messages = {
    en: { copying: 'Copying…', copied: 'Copied', manual: 'Select & copy',
      statusCopying: 'Copying citation…', statusCopied: 'BibTeX copied.',
      statusSelected: 'The BibTeX is selected. Use Copy or Ctrl/Cmd+C.',
      statusManual: 'Select the BibTeX and use Copy or Ctrl/Cmd+C.', statusMissing: 'This citation is unavailable.' },
    zh: { copying: '复制中…', copied: '已复制', manual: '手动复制',
      statusCopying: '正在复制引用…', statusCopied: '已复制 BibTeX。',
      statusSelected: 'BibTeX 已选中，请使用“复制”或 Ctrl/Cmd+C。',
      statusManual: '请选中 BibTeX 后使用“复制”或 Ctrl/Cmd+C。', statusMissing: '暂时无法取得这条引用。' }
  };
  let busy = false;
  let statusKey = '';
  const language = () => document.documentElement.lang.toLowerCase().startsWith('zh') ? 'zh' : 'en';
  const announce = key => {
    statusKey = key;
    if (status) status.textContent = messages[language()][key];
  };
  const label = (button, state) => {
    button.dataset.copyState = state;
    captions.get(button).forEach(({node, original}) => {
      node.textContent = state === 'ready' ? original : messages[node.dataset.lang][state];
    });
  };
  const selectSource = source => {
    const entry = source.closest('details.reference-entry');
    if (entry) entry.open = true;
    try {
      source.focus({preventScroll: true});
      const selection = window.getSelection();
      if (!selection) return false;
      const range = document.createRange();
      range.selectNodeContents(source);
      selection.removeAllRanges();
      selection.addRange(range);
      source.scrollIntoView({block: 'nearest'});
      return selection.rangeCount > 0 && !selection.isCollapsed;
    } catch (_) { return false; }
  };
  buttons.forEach(button => {
    captions.set(button, Array.from(button.querySelectorAll('[data-lang]')).map(node => ({node, original: node.textContent})));
    button.hidden = false;
    button.addEventListener('click', async () => {
      if (busy) return;
      const source = sources.get(button.dataset.copyTarget);
      if (!source || !panel.contains(source) || !source.textContent.trim()) {
        announce('statusMissing');
        return;
      }
      busy = true;
      buttons.forEach(item => item.setAttribute('aria-disabled', 'true'));
      button.setAttribute('aria-busy', 'true');
      window.clearTimeout(timers.get(button));
      label(button, 'copying');
      announce('statusCopying');
      try {
        if (!window.isSecureContext || !navigator.clipboard || typeof navigator.clipboard.writeText !== 'function') throw new Error('Clipboard unavailable');
        await navigator.clipboard.writeText(source.textContent);
        label(button, 'copied');
        announce('statusCopied');
      } catch (_) {
        const selected = selectSource(source);
        label(button, 'manual');
        announce(selected ? 'statusSelected' : 'statusManual');
      } finally {
        busy = false;
        buttons.forEach(item => item.removeAttribute('aria-disabled'));
        button.removeAttribute('aria-busy');
        timers.set(button, window.setTimeout(() => { label(button, 'ready'); timers.delete(button); }, 4000));
      }
    });
  });
  new MutationObserver(() => { if (statusKey) announce(statusKey); }).observe(document.documentElement, {attributes: true, attributeFilter: ['lang']});
})();
