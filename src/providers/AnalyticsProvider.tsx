// providers/AnalyticsProvider.tsx
'use client';

import Script from 'next/script';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';

import type { AnalyticsProps } from './AnalyticsClient';
const AnalyticsClient = dynamic(() => import('@/providers/AnalyticsClient'), { ssr: false });

export default function AnalyticsProvider({ gaId, clarityId }: AnalyticsProps) {
  return (
    <>
      {gaId && (
        <>
          <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} />
          <Script
            id="gtag-init"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
              `,
            }}
          />
        </>
      )}
      <Suspense fallback={null}>
        <AnalyticsClient gaId={gaId} clarityId={clarityId} />
      </Suspense>
    </>
  );
}
