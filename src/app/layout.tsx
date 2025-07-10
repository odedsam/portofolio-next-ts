import type { Metadata } from 'next';
import { appMetaData, firaCode, ibmPlexMono, jetBrainsMono } from '@/config/appConfig';
import { sanitizedConfig } from '@/config';
import HotjarProvider from '@/providers/HotjarProvider';
import './globals.css';

export const metaData: Metadata = appMetaData;
type RootLayoutProps = Readonly<{ children: React.ReactNode }>;

export default function RootLayout({ children }: RootLayoutProps) {
  const hotjarConfig = sanitizedConfig.hotjar;
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${ibmPlexMono.variable} ${firaCode.variable} ${jetBrainsMono.variable} antialiased`}>
        <HotjarProvider id={hotjarConfig?.id} snippetVersion={hotjarConfig?.snippetVersion} />
        <main className="w-full -z-40 dark:stars-dark stars-light">{children}</main>
      </body>
    </html>
  );
}
