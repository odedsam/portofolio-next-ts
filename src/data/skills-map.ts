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
  ZustandIcon,
  ExpressJSIcon,
} from '@/icons';

export type SkillCategory = 'Frontend' | 'Backend' | 'Database & Auth' | 'State Management';

export type SkillEntry = {
  icon: string;
  text: string;
};

export const skillsMap: Record<SkillCategory, SkillEntry[]> = {
  Frontend: [
    { icon: ReactIcon, text: 'React' },
    { icon: NextIcon, text: 'Next' },
    { icon: NuxtIcon, text: 'Nuxt' },
    { icon: VueIcon, text: 'Vue' },
    { icon: TypeScriptIcon, text: 'TypeScript' },
    { icon: TailwindIcon, text: 'Tailwind' },
    { icon: HTMLIcon, text: 'HTML' },
    { icon: CSSIcon, text: 'CSS' },
    { icon: JavaScriptIcon, text: 'JavaScript' },
  ],
  'Database & Auth': [
    { icon: MongoIcon, text: 'MongoDB' },
    { icon: PostgressIcon, text: 'PostgresSQL' },
    { icon: FireBaseIcon, text: 'FireBase' },
  ],
  'State Management': [
    { icon: ReduxIcon, text: 'Redux' },
    { icon: PiniaIcon, text: 'Pinia' },
    { icon: ZustandIcon, text: 'Zustand' },
  ],
  Backend: [
    { icon: NodejsIcon, text: 'NodeJS' },
    { icon: ExpressJSIcon, text: 'ExpressJS' },
    { icon: NestIcon, text: 'NestJS' },
  ],
};
