import Image from 'next/image';
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

const FRONTEND = [
  { icon: ReactIcon, text: 'React' },
  { icon: NextIcon, text: 'Next' },
  { icon: NuxtIcon, text: 'Nuxt' },
  { icon: VueIcon, text: 'Vue' },
  { icon: TypeScriptIcon, text: 'TypeScript' },
  { icon: TailwindIcon, text: 'Tailwind' },
  { icon: HTMLIcon, text: 'HTML' },
  { icon: CSSIcon, text: 'CSS' },
  { icon: JavaScriptIcon, text: 'JavaScript' },
];

const STATE_MANAGEMENT = [
  { icon: ReduxIcon, text: 'Redux' },
  { icon: PiniaIcon, text: 'Pinia' },
  { icon: ZustandIcon, text: 'Zustand' },
];

const BACKEND = [
  { icon: NodejsIcon, text: 'NodeJS' },
  { icon: ExpressJSIcon, text: 'ExpressJS' },
  { icon: NestIcon, text: 'NestJS' },
];

const DATABASE = [
  { icon: MongoIcon, text: 'MongoDB' },
  { icon: PostgressIcon, text: 'PostgresSQL' },
  { icon: FireBaseIcon, text: 'FireBase' },
];

const handleStyle = (title: string) => {
  if (title === 'Frontend' || title === 'State Management' || title === 'Backend' || title === 'Database & Auth') {
    return { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' };
  }
  return {};
};

const renderSection = (title: string, items: { icon: string; text: string }[]) => (
  <div className="w-full">
    <h3 className="text-center text-base sm:text-lg font-semibold mb-4">{title}</h3>
    <div className="grid gap-4 justify-items-center justify-center items-center" style={handleStyle(title)}>
      {items.map(({ icon, text }) => (
        <div key={text} className="flex flex-col text-center items-center justify-center mx-auto hover:scale-105 cursor-pointer transition">
          <Image src={icon} alt={text} width={48} height={48} className="w-10 h-10 sm:w-12 cursor-pointer sm:h-12 mb-1" />
          <span className="text-xs sm:text-sm font-sans text-center">{text}</span>
        </div>
      ))}
    </div>
  </div>
);

const SkillCard = () => (
  <section className="py-10 space-y-12">
    {renderSection('Frontend', FRONTEND)}
    {renderSection('State Management', STATE_MANAGEMENT)}
    {renderSection('Backend', BACKEND)}
    {renderSection('Database & Auth', DATABASE)}
  </section>
);



export default function SkillSection() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6 drop-shadow-2xl font-fira text-center transition-all duration-500 ease-in-out hover:text-neon-blue hover:scale-105 hover:drop-shadow-[0_0_15px_#00F]">
        Skills
      </h2>
      <SkillCard />
    </div>
  );
}
