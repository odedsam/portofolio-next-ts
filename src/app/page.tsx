import HomeSection from '@/app/components/sections/HomeSection';
import ContactSection from '@/app/components/sections/ContactSection';
import ProjectSection from './components/sections/ProjectSection';
import SkillSection from './components/sections/SkillsSection';

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





