'use client';
import { useEffect, useState } from 'react';
import { translate, platformName, type Language } from '@/lib/i18n';
export function useLanguage() {
  const [language, setLanguage] = useState<Language>('en');
  const [ready, setReady] = useState(false);
  useEffect(() => {
    try {
      const saved = localStorage.getItem('carelab-replay-language');
      if (saved === 'en' || saved === 'zh') setLanguage(saved);
    } catch {}
    setReady(true);
  }, []);
  useEffect(() => {
    document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en';
    document.title = platformName;
    if (ready)
      try {
        localStorage.setItem('carelab-replay-language', language);
      } catch {}
  }, [language, ready]);
  return {
    language,
    setLanguage,
    tr: (value: string | null | undefined) => translate(value, language),
  };
}
