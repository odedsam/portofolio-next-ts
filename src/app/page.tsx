import HomeSection from '@/app/components/sections/HomeSection';
import ContactSection from '@/app/components/sections/ContactSection';
import SkillSection from './components/cards/SkillCard';
import ProjectSection from './components/sections/ProjectSection';

export default function Home() {
  return (
    <div className="w-full">
      <HomeSection />
      <SkillSection />
      <ProjectSection />
      <ContactSection />
    </div>
  );
}





