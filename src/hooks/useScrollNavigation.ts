// // 1. First, create the scroll hook and context
// // hooks/useScrollNavigation.ts
// "use client";

// import { useRef, RefObject } from 'react';

// // Define section names type for type safety
// export type SectionName = 'home' | 'about' | 'projects' | 'skills' | 'experience' | 'contact';

// // Define return type for the hook
// export interface ScrollNavigationHook {
//   sectionRefs: Record<SectionName, RefObject<HTMLElement>>;
//   scrollToSection: (sectionId: SectionName) => void;
// }

// /**
//  * Custom hook for section navigation
//  * @returns Object containing refs and scroll functions
//  */
// export const useScrollNavigation = (): ScrollNavigationHook => {
//   // Create an object to store all section refs
//   const sectionRefs: Record<SectionName, RefObject<HTMLElement>> = {
//     home: useRef<HTMLElement>(null),
//     about: useRef<HTMLElement>(null),
//     projects: useRef<HTMLElement>(null),
//     skills: useRef<HTMLElement>(null),
//     experience: useRef<HTMLElement>(null),
//     contact: useRef<HTMLElement>(null),
//   };

//   /**
//    * Scroll to a specific section
//    * @param sectionId - ID of the section to scroll to
//    */
//   const scrollToSection = (sectionId: SectionName): void => {
//     if (sectionRefs[sectionId]?.current) {
//       sectionRefs[sectionId].current?.scrollIntoView({
//         behavior: 'smooth',
//         block: 'start'
//       });
//     }
//   };

//   return {
//     sectionRefs,
//     scrollToSection
//   };
// };

// // 2. Create a ScrollContext to share between components
// // contexts/ScrollContext.tsx
// "use client";

// import { createContext, useContext, ReactNode } from 'react';
// import { useScrollNavigation, SectionName, ScrollNavigationHook } from '../hooks/useScrollNavigation';

// // Create context with default values
// const ScrollContext = createContext<ScrollNavigationHook>({
//   sectionRefs: {} as Record<SectionName, React.RefObject<HTMLElement>>,
//   scrollToSection: () => {}
// });

// interface ScrollProviderProps {
//   children: ReactNode;
// }

// export function ScrollProvider({ children }: ScrollProviderProps): JSX.Element {
//   const scrollUtils = useScrollNavigation();

//   return (
//     <ScrollContext.Provider value={scrollUtils}>
//       {children}
//     </ScrollContext.Provider>
//   );
// }

// export function useScroll(): ScrollNavigationHook {
//   return useContext(ScrollContext);
// }

// // 3. Update your layout to include the ScrollProvider
// // app/layout.tsx
// import type { Metadata } from 'next';
// import { Geist, Geist_Mono } from 'next/font/google';
// import './globals.css';
// import { ThemeProvider } from './components/providers/ThemeProvider';
// import AppHeader from '@/app/components/layouts/AppHeader';
// import MobileHeader from '@/app/components/layouts/MobileHeader';
// import { ScrollProvider } from './contexts/ScrollContext';

// const geistSans = Geist({
//   variable: '--font-geist-sans',
//   subsets: ['latin'],
// });

// const geistMono = Geist_Mono({
//   variable: '--font-geist-mono',
//   subsets: ['latin'],
// });

// export const metadata: Metadata = {
//   title: 'Oded Samuel Portfolio',
//   description: 'Home Page',
// };

// type RootLayoutProps = Readonly<{
//   children: React.ReactNode;
// }>;

// export default function RootLayout({ children }: RootLayoutProps) {
//   return (
//     <html lang="en" suppressHydrationWarning>
//       <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
//         <ThemeProvider attribute="class" defaultTheme="enableSystem" enableSystem disableTransitionOnChange>
//           <ScrollProvider>
//             <AppHeader />
//             <MobileHeader />
//             <main className="w-full">{children}</main>
//           </ScrollProvider>
//         </ThemeProvider>
//       </body>
//     </html>
//   );
// }

// // 4. Update your AppHeader component to use the scroll context
// // components/layouts/AppHeader.tsx
// "use client";

// import { useScroll } from '@/app/contexts/ScrollContext';
// import Link from 'next/link';
// // Import other components as needed

// export default function AppHeader(): JSX.Element {
//   const { scrollToSection } = useScroll();

//   return (
//     <header className="hidden md:flex fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md">
//       <nav className="container mx-auto flex items-center justify-between py-4">
//         <div className="logo">
//           <Link href="/">Oded Samuel</Link>
//         </div>

//         <ul className="flex gap-6">
//           <li>
//             <button
//               onClick={() => scrollToSection('home')}
//               className="text-foreground/70 hover:text-foreground transition"
//             >
//               Home
//             </button>
//           </li>
//           <li>
//             <button
//               onClick={() => scrollToSection('about')}
//               className="text-foreground/70 hover:text-foreground transition"
//             >
//               About
//             </button>
//           </li>
//           <li>
//             <button
//               onClick={() => scrollToSection('projects')}
//               className="text-foreground/70 hover:text-foreground transition"
//             >
//               Projects
//             </button>
//           </li>
//           <li>
//             <button
//               onClick={() => scrollToSection('contact')}
//               className="text-foreground/70 hover:text-foreground transition"
//             >
//               Contact
//             </button>
//           </li>
//           {/* Add other navigation items as needed */}
//         </ul>
//       </nav>
//     </header>
//   );
// }

// // 5. Similarly, update your MobileHeader
// // components/layouts/MobileHeader.tsx
// "use client";

// import { useState } from 'react';
// import { useScroll } from '@/app/contexts/ScrollContext';
// // Import other components as needed

// export default function MobileHeader(): JSX.Element {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const { scrollToSection } = useScroll();

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const handleNavClick = (sectionId: 'home' | 'about' | 'projects' | 'contact') => {
//     scrollToSection(sectionId);
//     setIsMenuOpen(false); // Close the menu after clicking
//   };

//   return (
//     <header className="md:hidden fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md">
//       <div className="container mx-auto flex items-center justify-between py-4">
//         <div className="logo">Oded Samuel</div>

//         <button onClick={toggleMenu} aria-label="Toggle menu">
//           {/* Hamburger icon */}
//           <div className="w-6 h-6 flex flex-col justify-around">
//             <span className="w-full h-0.5 bg-foreground rounded-lg"></span>
//             <span className="w-full h-0.5 bg-foreground rounded-lg"></span>
//             <span className="w-full h-0.5 bg-foreground rounded-lg"></span>
//           </div>
//         </button>
//       </div>

//       {/* Mobile menu */}
//       {isMenuOpen && (
//         <nav className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md shadow-lg py-4">
//           <ul className="flex flex-col items-center gap-4">
//             <li>
//               <button
//                 onClick={() => handleNavClick('home')}
//                 className="text-foreground/70 hover:text-foreground transition py-2"
//               >
//                 Home
//               </button>
//             </li>
//             <li>
//               <button
//                 onClick={() => handleNavClick('about')}
//                 className="text-foreground/70 hover:text-foreground transition py-2"
//               >
//                 About
//               </button>
//             </li>
//             <li>
//               <button
//                 onClick={() => handleNavClick('projects')}
//                 className="text-foreground/70 hover:text-foreground transition py-2"
//               >
//                 Projects
//               </button>
//             </li>
//             <li>
//               <button
//                 onClick={() => handleNavClick('contact')}
//                 className="text-foreground/70 hover:text-foreground transition py-2"
//               >
//                 Contact
//               </button>
//             </li>
//             {/* Add other navigation items as needed */}
//           </ul>
//         </nav>
//       )}
//     </header>
//   );
// }

// // 6. Finally, update your home page to use the section refs
// // app/page.tsx
// "use client";

// import { useScroll } from './contexts/ScrollContext';
// // Import your section components

// export default function Home(): JSX.Element {
//   const { sectionRefs } = useScroll();

//   return (
//     <>
//       <section ref={sectionRefs.home} id="home" className="min-h-screen">
//         {/* Hero section content */}
//         <div className="container mx-auto px-4 py-20">
//           <h1 className="text-4xl font-bold">Oded Samuel</h1>
//           <p className="text-xl mt-4">Full-Stack Developer | Problem Solver | Self-Taught Coder</p>
//           {/* Hero content */}
//         </div>
//       </section>

//       <section ref={sectionRefs.about} id="about" className="min-h-screen">
//         {/* About section content */}
//         <div className="container mx-auto px-4 py-20">
//           <h2 className="text-3xl font-bold">About Me</h2>
//           {/* About content */}
//         </div>
//       </section>

//       <section ref={sectionRefs.projects} id="projects" className="min-h-screen">
//         {/* Projects section content */}
//         <div className="container mx-auto px-4 py-20">
//           <h2 className="text-3xl font-bold">My Projects</h2>
//           {/* Projects content */}
//         </div>
//       </section>

//       <section ref={sectionRefs.contact} id="contact" className="min-h-screen">
//         {/* Contact section content */}
//         <div className="container mx-auto px-4 py-20">
//           <h2 className="text-3xl font-bold">Contact Me</h2>
//           {/* Contact content */}
//         </div>
//       </section>
//     </>
//   );
// }

// // 7. Example of a CTA Button component that might exist in your Hero section
// // components/CTAButton.tsx
// "use client";

// import { useScroll } from '@/app/contexts/ScrollContext';
// import { SectionName } from '@/app/hooks/useScrollNavigation';

// interface CTAButtonProps {
//   targetSection: SectionName;
//   className?: string;
//   children: React.ReactNode;
// }

// export default function CTAButton({
//   targetSection,
//   className = "",
//   children
// }: CTAButtonProps): JSX.Element {
//   const { scrollToSection } = useScroll();

//   return (
//     <button
//       onClick={() => scrollToSection(targetSection)}
//       className={`px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition ${className}`}
//     >
//       {children}
//     </button>
//   );
// }
