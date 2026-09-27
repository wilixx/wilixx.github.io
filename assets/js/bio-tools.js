(() => {
  'use strict';
  const panel = document.querySelector('.bio-resources');
  if (!panel) return;
  const buttons = Array.from(panel.querySelectorAll('button[data-copy-target]'));
  const status = panel.querySelector('#bio-copy-status');
  const allowedIds = new Set(['bio-short', 'bio-journal', 'bio-magazine', 'bio-grants', 'bio-edas', 'bio-reviewer']);
  const captions = new Map();
  const resetTimers = new Map();
  const messages = {
    en: {
      copying: 'Copying…', copied: 'Copied', manual: 'Select & copy',
      statusCopying: 'Copying text…', statusCopied: 'Text copied.',
      statusSelected: 'Automatic copying was unavailable. The text is selected; use your device’s Copy command or Ctrl/Cmd+C.',
      statusManual: 'Automatic copying was unavailable. Select the text and use your device’s Copy command or Ctrl/Cmd+C.',
      statusMissing: 'This text is unavailable.'
    },
    zh: {
      copying: '复制中…', copied: '已复制', manual: '手动复制',
      statusCopying: '正在复制文本…', statusCopied: '已复制文本。',
      statusSelected: '浏览器未完成自动复制。文本已选中，请使用设备的“复制”命令或 Ctrl/Cmd+C。',
      statusManual: '浏览器未完成自动复制，请选中文本后使用设备的“复制”命令或 Ctrl/Cmd+C。',
      statusMissing: '暂时无法取得这段文本。'
    }
  };
  let busy = false;
  let statusKey = '';
  const language = () => document.documentElement.lang.toLowerCase().startsWith('zh') ? 'zh' : 'en';

  const announce = key => {
    statusKey = key;
    if (status) status.textContent = messages[language()][key] || '';
  };
  const labelButton = (button, state) => {
    button.dataset.copyState = state;
    const saved = captions.get(button);
    if (saved.spans.length) {
      saved.spans.forEach(({node, original}) => {
        node.textContent = state === 'ready' ? original : messages[node.dataset.lang][state];
      });
    } else {
      button.textContent = state === 'ready' ? saved.original : messages[language()][state];
    }
  };
  const selectSource = source => {
    try {
      if (!source.hasAttribute('tabindex')) source.setAttribute('tabindex', '-1');
      source.focus({preventScroll: true});
      const selection = window.getSelection();
      if (!selection) return false;
      const range = document.createRange();
      range.selectNodeContents(source);
      selection.removeAllRanges();
      selection.addRange(range);
      return selection.rangeCount > 0 && !selection.isCollapsed;
    } catch (_) {
      return false;
    }
  };

  buttons.forEach(button => {
    const spans = Array.from(button.querySelectorAll('[data-lang="en"], [data-lang="zh"]'))
      .map(node => ({node, original: node.textContent}));
    captions.set(button, {spans, original: button.textContent});
    button.hidden = false;
    button.addEventListener('click', async () => {
      if (busy) return;
      const id = button.dataset.copyTarget;
      const source = allowedIds.has(id) ? document.getElementById(id) : null;
      if (!source || !panel.contains(source) || source.tagName !== 'CODE' || !source.closest('pre')) {
        announce('statusMissing');
        return;
      }
      // Preserve the source exactly, including LaTeX syntax and line breaks.
      const text = source.textContent;
      if (!text.trim()) { announce('statusMissing'); return; }
      busy = true;
      buttons.forEach(item => item.setAttribute('aria-disabled', 'true'));
      button.setAttribute('aria-busy', 'true');
      window.clearTimeout(resetTimers.get(button));
      labelButton(button, 'copying');
      announce('statusCopying');
      try {
        if (!window.isSecureContext || !navigator.clipboard || typeof navigator.clipboard.writeText !== 'function') {
          throw new Error('Clipboard unavailable');
        }
        await navigator.clipboard.writeText(text);
        labelButton(button, 'copied');
        announce('statusCopied');
      } catch (_) {
        const selected = selectSource(source);
        labelButton(button, 'manual');
        announce(selected ? 'statusSelected' : 'statusManual');
      } finally {
        busy = false;
        buttons.forEach(item => item.removeAttribute('aria-disabled'));
        button.removeAttribute('aria-busy');
        resetTimers.set(button, window.setTimeout(() => {
          labelButton(button, 'ready');
          resetTimers.delete(button);
        }, 4000));
      }
    });
  });

  new MutationObserver(() => {
    if (statusKey) announce(statusKey);
    buttons.forEach(button => {
      if (!captions.get(button).spans.length && button.dataset.copyState) {
        labelButton(button, button.dataset.copyState);
      }
    });
  }).observe(document.documentElement, {attributes: true, attributeFilter: ['lang']});
})();
