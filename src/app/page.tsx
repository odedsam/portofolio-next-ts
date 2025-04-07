import HomeSection from '@/app/components/sections/home/HomeSection';
import SkillsSection from '@/app/components/sections/home/SkillsSection';
import ContactSection from '@/app/components/sections/home/ContactSection';
import ProjectSection from '@/app/components/sections/home/ProjectSection';
import {PROJECTS} from "@/app/constants/index"
export default function Home() {
  return (
    <div className="w-full">
      <HomeSection />
      <SkillsSection />
      <ProjectSection project={PROJECTS} />
      <ContactSection />
    </div>
  );
}
