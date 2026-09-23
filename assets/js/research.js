(() => {
  'use strict';
  const controls = document.querySelectorAll('[data-language]');
  const copies = document.querySelectorAll('[data-lang]');
  const navigation = document.querySelector('.header-actions');
  const sections = document.querySelector('.section-nav');
  const description = document.querySelector('meta[name="description"]');
  const languageSwitch = document.querySelector('.language-switch');

  const readingPosition = () => {
    if (window.scrollY < 80) return null;
    const headerBottom = document.querySelector('.site-header').getBoundingClientRect().bottom;
    const blocks = document.querySelectorAll('.intro, .section-heading, .work-row, .interest, .background-grid > div, .earlier-work, #contact');
    const block = Array.from(blocks).find(item => {
      const bounds = item.getBoundingClientRect();
      return bounds.bottom > headerBottom + 12 && bounds.top < window.innerHeight;
    });
    return block ? { block, top: block.getBoundingClientRect().top } : null;
  };

  const showLanguage = (language, updateAddress) => {
    const selected = language === 'zh' ? 'zh' : 'en';
    const position = updateAddress ? readingPosition() : null;
    document.documentElement.lang = selected === 'zh' ? 'zh-CN' : 'en';
    copies.forEach(copy => { copy.hidden = copy.dataset.lang !== selected; });
    controls.forEach(control => { control.setAttribute('aria-pressed', String(control.dataset.language === selected)); });
    document.title = selected === 'zh' ? '科学研究 | Binquan Guo' : 'Research | Binquan Guo';
    if (navigation) navigation.setAttribute('aria-label', selected === 'zh' ? '页面导航' : 'Page navigation');
    if (sections) sections.setAttribute('aria-label', selected === 'zh' ? '科研内容目录' : 'Research sections');
    if (description) description.content = selected === 'zh'
      ? 'Binquan Guo 的科研工作：卫星网络、高效计算与面向实际问题的算法。'
      : 'Research by Binquan Guo on satellite networking, efficient computing and practical algorithms.';
    if (updateAddress) {
      const url = new URL(window.location.href);
      if (selected === 'zh') url.searchParams.set('lang', 'zh');
      else url.searchParams.delete('lang');
      window.history.replaceState(window.history.state, '', url);
    }
    if (position) {
      window.requestAnimationFrame(() => {
        window.scrollBy(0, position.block.getBoundingClientRect().top - position.top);
      });
    }
  };

  const languageFromAddress = () => new URL(window.location.href).searchParams.get('lang');
  showLanguage(languageFromAddress(), false);
  if (languageSwitch) languageSwitch.hidden = false;
  controls.forEach(control => control.addEventListener('click', () => showLanguage(control.dataset.language, true)));
  window.addEventListener('popstate', () => showLanguage(languageFromAddress(), false));
})();
