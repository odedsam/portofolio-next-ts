import type { Project } from '@/types';

export * from './configTheme';
export * from './env';
export * from './themes';
export * from './errors';

export const LOCAL_STORAGE_KEY_NAME = 'gitprofile-theme';
export const BG_COLOR = 'bg-base-300';

export const FALLBACK_IMAGE =
  'data:image/png;base64,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';

export const SKILLS: string[] = [
  'TypeScript',
  'Next.js',
  'Nuxt',
  'React',
  'Vue',
  'Tailwind CSS',
  'Node.js',
  'MongoDB',
  'PostgreSQL',
  'Firebase',
  'Express.js',
  'NestJS',
  'Redux',
  'Pinia',
  'Zustand',
  'HTML',
  'CSS',
  'JavaScript',
  'Prisma',
  'Drizzle',
];

export const PROJECTS: Project[] = [
  {
    title: 'Aura Stream',
    description: 'Developed a sleek real-time audio streaming app with live user channels, interactive sessions, and smooth playback. Focused on low latency, performance, and a modern music-driven UX.',
    tech: ['TypeScript', 'Next.js', 'PostgreSQL', 'Prisma', 'Zustand', 'TMDB API'],
    href: 'https://aura-stream.vercel.app/',
    githubMonorepo: 'https://github.com/odedsam/stream-vibe',
    imageUrl: '/thumb/aura-stream-browse.webp',
    pinned: true,
  },
    {
    title: 'Noad',
    description: 'sleek platform for a future-forward techwear company. Includes dynamic product displays, micro-animations, and smooth UX flows. Designed to merge fashion innovation with digital elegance',
    tech: ['React', 'Zustand', 'Recharts', 'WebSockets'],
    href: 'https://noad.vercel.app',
    imageUrl: '/thumb/noad-thumbnail.webp',
    githubMonorepo: 'https://github.com/odedsam/crypto-dash',
  },
  {
    title: 'Estatein RealEstate',
    description: 'Developed a smart real estate platform with property listings, advanced filters, and admin dashboards. Designed for high usability, scalability, and clean architecture. Combines sleek UI with powerful property management tools.',
    tech: ['TypeScript', 'Nuxt 3', 'Vue 3', 'Pinia', 'Tailwind', 'FirebaseDB'],
    href: 'https://estate-app-nuxt3.vercel.app',
    githubMonorepo: 'https://github.com/odedsam/Estate-App-nuxt3',
    imageUrl: '/thumb/esa.webp',
    pinned: true,
  },

  {
    title: 'Explore Moon',
    description: 'Crafted an interactive web app that simulates a lunar exploration journey. Built with immersive animations, real-time data integration, and a futuristic design. Blends storytelling with cutting-edge frontend tech for a unique user experience.',
    tech: ['React', 'Zustand', 'Recharts', 'WebSockets'],
    href: 'https://explore-moon.vercel.app',
    imageUrl: '/thumb/explore-moon-thumbnail.webp',
    githubMonorepo: 'https://github.com/odedsam/explore-moon',
  },

  {
    title: 'Pierced',
    description: 'Built a bold, responsive website for a modern tattoo & piercing studio. Features include a custom gallery, booking system, and edgy UI that reflects the brand’s identity. Clean, scalable frontend with top UX practices.',
    tech: ['React', 'Zustand', 'Recharts', 'WebSockets'],
    href: 'https://pierced.vercel.app/',
    imageUrl: '/thumb/pierced-thumbnail.webp',
    githubMonorepo: 'https://github.com/odedsam/Pierced',
  },
   {
    title: 'Hasa Media',
    description: 'Built a dynamic platform for a digital media agency, featuring project showcases, client onboarding, and content management tools. Focused on performance, elegant UI, and smooth user flows to elevate brand presence online.',
    tech: ['TypeScript', 'React', 'CMS', 'PHP'],
    href: 'https://hasamedia.io',
    githubClientUrl: 'https://github.com/odedsam/Hasamedia',
    githubMonorepo: 'https://github.com/odedsam/Hasamedia',
    imageUrl: '/thumb/hasamedia-thumbnail.webp',
    pinned: true,
  },
  {
    title: 'Candleaf E‑Commerce',
    description: 'Created a clean and calming online store for a sustainable candle brand. Includes product filtering, subscription options, and minimalist design. Focused on user trust, accessibility, and eco-conscious branding.',
    tech: ['TypeScript', 'Vue 3', 'NodeJs', 'MongoDB', 'GoogleAuth', 'Tailwind', 'Stripe', 'Express'],
    href: 'https://candleaf-front.vercel.app',
    githubClientUrl: 'https://github.com/odedsam/candleaf-front',
    githubServerUrl: 'https://github.com/odedsam/candleaf-back',
    imageUrl: '/thumb/cand-black.webp',
    pinned: true,
  },


  {
    title: 'Avion E‑Commerce',
    description: 'Designed and developed a refined e-commerce platform for a luxury furniture brand. Features include modular product components, smooth cart experience, and optimized performance. Built for elegance, speed, and conversion.',
    tech: ['TypeScript', 'React', 'Tailwind', 'NestJS', 'ReduxRTK', 'MongoDB'],
    href: 'https://avion-steel.vercel.app/',
    githubClientUrl: 'https://github.com/odedsam/avion-new-react-18',
    githubServerUrl: 'https://github.com/odedsam/avm-back',
    imageUrl: '/thumb/avion-thumbnail.webp',
    pinned: true,
  },
  {
    title: 'Lernaean',
    description: 'Developed a cutting-edge VR application leveraging WebXR to deliver immersive, high-performance virtual experiences. Focused on intuitive interaction, futuristic UI, and seamless integration of next-gen tech.',
    tech: ['React', 'Zustand', 'Recharts', 'WebSockets'],
    href: 'https://lernaean.vercel.app/',
    imageUrl: '/thumb/lernaean-thumbnail.webp',
    githubMonorepo: 'https://github.com/odedsam/lernaean',
  },
  {
    title: 'Cyber Skin',
    description: 'Engineered a modern marketplace for game skins and digital outfits. Features include smart search, live updates, user profiles, and a gaming-inspired UI. Built for scalability, performance, and real-time engagement.',
    tech: ['React', 'Zustand', 'Recharts', 'WebSockets'],
    href: 'https://cyberskin.vercel.app/',
    imageUrl: '/thumb/cyberskin-thumbnail.webp',
    githubMonorepo: 'https://github.com/odedsam/cyberskin',
  },
  {
    title: 'Crypto Pulse',
    description: 'Real-time cryptocurrency dashboard with live price updates, interactive charts, and global market stats.',
    tech: ['React', 'Zustand', 'Recharts', 'WebSockets'],
    href: 'https://crypto-dash-flame.vercel.app',
    imageUrl: '/thumb/cryptodash-thumbnail.webp',
    githubMonorepo: 'https://github.com/odedsam/crypto-dash',
  },
];
