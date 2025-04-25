import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from './components/providers/ThemeProvider';
import AppHeader from '@/app/components/layouts/AppHeader'; // Assuming this is used globally
import MobileHeader from '@/app/components/layouts/MobileHeader'; // Mobile Header is Client Component

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Oded Samuel Portfolio',
  description: 'Home Page',
};

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="enableSystem" enableSystem disableTransitionOnChange>
          <AppHeader />
          <MobileHeader />
          <main className="w-full">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
