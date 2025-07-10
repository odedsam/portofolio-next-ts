import HeroSection from '@/components/sections/HeroSection';
import ContactSection from '@/components/sections/ContactSection';
import ProjectSection from '@/components/sections/ProjectSection';
import SkillsSection from '@/components/sections/SkillsSection';

export default function Home() {
  return (
    <div className="w-full">
      <HeroSection />
      <SkillsSection />
      <ProjectSection />
      <ContactSection />
    </div>
  );
}





