import { PROJECTS, SKILLS } from '@/app/config/index';
import HomeSection from '@/app/components/sections/home/HomeSection';
// import SkillsSection from '@/app/components/sections/home/SkillsSection';
import ContactSection from '@/app/components/sections/home/ContactSection';
import ProjectCard from './components/cards/ProjectCard';
import SkillsSection from './components/cards/SkillsDraft';

export default function Home() {
  return (
    <div className="w-full">
      <HomeSection />
      {/* <SkillsSection skills={SKILLS} /> */}
      <SkillsSection />

      <section className="mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Projects</h1>
        <ProjectCard projects={PROJECTS} />
      </section>

      <ContactSection />
    </div>
  );
}
