import type { IconLabelProps } from '@/app/types';
import {
  CSSIcon,
  FireBaseIcon,
  HTMLIcon,
  JavaScriptIcon,
  MongoIcon,
  NestIcon,
  NextIcon,
  VueIcon,
  NodejsIcon,
  NuxtIcon,
  PiniaIcon,
  PostgressIcon,
  ReactIcon,
  ReduxIcon,
  TailwindIcon,
  TypeScriptIcon,
} from '@/icons';
import { Project } from '../components/cards/ProjectCard';

export const SKILLS: IconLabelProps[] = [
  { icon: CSSIcon, text: 'CSS' },
  { icon: HTMLIcon, text: 'HTML' },
  { icon: JavaScriptIcon, text: 'JavaScript' },
  { icon: TypeScriptIcon, text: 'TypeScript' },
  { icon: TailwindIcon, text: 'Tailwind' },
  { icon: ReactIcon, text: 'React' },
  { icon: NestIcon, text: 'Nest' },
  { icon: NuxtIcon, text: 'Nuxt' },
  { icon: NextIcon, text: 'Next' },
  { icon: VueIcon, text: 'Vue' },
  { icon: ReduxIcon, text: 'Redux' },
  { icon: PiniaIcon, text: 'Pinia' },
  { icon: FireBaseIcon, text: 'FireBase' },
  { icon: MongoIcon, text: 'MongoDB' },
  { icon: PostgressIcon, text: 'PostgresSQL' },
  { icon: NodejsIcon, text: 'Node' },
];

export const PROJECTS: Project[] = [
   {
    title: 'Aura Stream',
    description: 'Full-stack streaming platform leveraging TMDB API for movies and shows with PostgreSQL, Prisma, and Next.js backend.',
    tech: ['TypeScript', 'Next.js', 'PostgreSQL', 'Prisma', 'Zustand','TMDB API'],
    href: 'https://aura-stream.vercel.app/',
    githubMonorepo: 'https://github.com/fragged-up/stream-vibe',
    pinned: true,
  },
  {
    title: 'Estatein RealEstate',
    description: 'High-end real estate website with property listings, filters, and booking system.',
    tech: ['TypeScript', 'Nuxt 3', 'Vue 3', 'Pinia', 'Tailwind', 'FirebaseDB'],
    href: 'https://estate-app-nuxt3.vercel.app',
    githubMonorepo: 'https://github.com/fragged-up/Estate-App-nuxt3',
    pinned: true,
  },
  {
    title: 'Avion E‑Commerce',
    description: 'Scalable e‑commerce app with CMS integration, shopping cart, and responsive UI.',
    tech: ['TypeScript', 'React', 'Tailwind', 'NestJS', 'ReduxRTK', 'MongoDB'],
    href: 'https://avion-steel.vercel.app/',
    githubClientUrl: 'https://github.com/fragged-up/avion-new-react-18',
    githubServerUrl:'https://github.com/fragged-up/avm-back',
    pinned: true,
  },
  {
    title: 'Candleaf E‑Commerce',
    description: 'Minimalist online store built with Next.js, TailwindCSS, and Stripe integration.',
    tech: ['TypeScript', 'Vue 3', 'NodeJs','MongoDB','GoogleAuth', 'Tailwind', 'Stripe','Express'],
    href: 'https://candleaf-front.vercel.app',
    githubClientUrl: 'https://github.com/fragged-up/candleaf-front',
    githubServerUrl:'https://github.com/fragged-up/candleaf-back',
    pinned: true,
  },

  {
    title: 'Hasa Media',
    description: 'Media services agency website with CMS-managed content and service showcase.',
    tech: ['TypeScript', 'React', 'CMS', 'PHP'],
    href: 'https://hasamedia.io',
    githubClientUrl: 'https://github.com/fragged-up/Hasamedia',
    githubMonorepo:'https://github.com/fragged-up/Hasamedia',
    pinned: true,
  },
  {
    title: 'Crypto Pulse',
    description: 'Real-time cryptocurrency dashboard with live price updates, interactive charts, and global market stats.',
    tech: ['React', 'Zustand', 'Recharts', 'WebSockets'],
    href: 'https://crypto-dash-flame.vercel.app',
    githubMonorepo: 'https://github.com/fragged-up/crypto-dash',
  },

];
