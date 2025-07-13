'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

export type AnalyticsProps = {
  gaId?: string;
  clarityId?: string;
};

export default function AnalyticsClient({ gaId, clarityId }: AnalyticsProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!gaId || typeof window === 'undefined') return;
     // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if (!(window as any).gtag) return;

    const page_path = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '');
     // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).gtag('config', gaId, { page_path });
  }, [gaId, pathname, searchParams]);

  useEffect(() => {
    if (!clarityId || typeof window === 'undefined') return;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const w = window as any;
    const d = document;
    const c = 'clarity';
    const s = 'script';

    w[c] = w[c] || function (...args: unknown[]) {
      (w[c].q = w[c].q || []).push(args);
    };

    const t = d.createElement(s) as HTMLScriptElement;
    t.async = true;
    t.src = `https://www.clarity.ms/tag/${clarityId}`;
    const y = d.getElementsByTagName(s)[0];
    if (y?.parentNode) y.parentNode.insertBefore(t, y);
  }, [clarityId]);

  return null;
}
