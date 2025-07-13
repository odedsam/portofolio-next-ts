// import type { Metadata } from 'next';
// import { appMetaData, firaCode, ibmPlexMono, jetBrainsMono } from '@/config/appConfig';
// import { sanitizedConfig } from '@/config';
// import HotjarProvider from '@/providers/HotjarProvider';
// import './globals.css';

// export const metaData: Metadata = appMetaData;
// type RootLayoutProps = Readonly<{ children: React.ReactNode }>;

// export default function RootLayout({ children }: RootLayoutProps) {
//   const hotjarConfig = sanitizedConfig.hotjar;
//   return (
//     <html lang="en" suppressHydrationWarning>
//       <body className={`${ibmPlexMono.variable} ${firaCode.variable} ${jetBrainsMono.variable} antialiased`}>
//         <HotjarProvider id={hotjarConfig?.id} snippetVersion={hotjarConfig?.snippetVersion} />
//         <main className="w-full">{children}</main>
//       </body>
//     </html>
//   );
// }

import type { Metadata } from 'next';
import { firaCode, ibmPlexMono, jetBrainsMono } from '@/config/appConfig';
import { analyticsConfig } from '@/config/analytics';
import AnalyticsProvider from '@/providers/AnalyticsProvider';
import './globals.css';

export const metadata: Metadata = {
  title: 'Portofolio of Oded Samuel',
  description: 'Full Stack Developer',
};

type RootLayoutProps = Readonly<{ children: React.ReactNode }>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${ibmPlexMono.variable} ${firaCode.variable} ${jetBrainsMono.variable} antialiased`}>
        <AnalyticsProvider gaId={analyticsConfig?.gaId} clarityId={analyticsConfig?.clarityId} />
        <main className="w-full">{children}</main>
      </body>
    </html>
  );
}
