'use client';
import { useEffect, useState } from 'react';
export default function SingaporeClock() {
  const [now, setNow] = useState<Date | null>(null);
  useEffect(() => {
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);
  return (
    <time aria-label="Singapore time" dateTime={now?.toISOString()}>
      {now
        ? new Intl.DateTimeFormat('en-GB', {
            timeZone: 'Asia/Singapore',
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false,
          }).format(now)
        : '—'}{' '}
      SGT (UTC+8)
    </time>
  );
}
