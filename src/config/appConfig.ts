import { Metadata } from 'next';
import { IBM_Plex_Mono, Fira_Code, JetBrains_Mono } from 'next/font/google';

export const ibmPlexMono = IBM_Plex_Mono({
  variable: '--font-sans',
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const firaCode = Fira_Code({
  variable: '--font-fira',
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});
export const jetBrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains',
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const appMetaData: Metadata = {
   title: 'Oded\'s portofolio',
   description: 'Full Stack Developer',

};


