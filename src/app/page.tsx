import { PROJECTS } from '@/app/config/index';
import HomeSection from '@/app/components/sections/HomeSection';
import ContactSection from '@/app/components/sections/ContactSection';
import SkillCard from './components/cards/SkillCard';
import ProjectSection from './components/sections/ProjectSection';

export default function Home() {
  return (
    <div className="w-full">
      <HomeSection />
      <SkillCard />
      <ProjectSection />
      <ContactSection />
    </div>
  );
}





