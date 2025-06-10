import type { Metadata } from 'next';
import { Fira_Code,IBM_Plex_Mono, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from './components/providers/ThemeProvider';
import AppHeader from '@/app/components/layouts/AppHeader';
import MobileHeader from '@/app/components/layouts/MobileHeader';

const ibmPlexMono = IBM_Plex_Mono({
  variable: '--font-sans',
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const firaCode = Fira_Code({
  variable: '--font-fira',
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});
const jetBrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains',
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'oded_sam | Full Stack Dev',
  description: 'Home Page',
};
type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${ibmPlexMono.variable} ${firaCode.variable} ${jetBrainsMono.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <AppHeader />
          <MobileHeader />
          <main className="w-full -z-40">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
