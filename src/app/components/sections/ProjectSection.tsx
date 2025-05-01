import { PROJECTS } from '@/app/config';
import ProjectCard from '../cards/ProjectCard';

const ProjectSection = () => (
  <section className="mx-auto my-12 p-6">
   <h1 className="text-3xl font-bold mb-6 drop-shadow-2xl font-fira text-center transition-all duration-500 ease-in-out hover:text-neon-blue hover:scale-105 hover:drop-shadow-[0_0_15px_#00F]">
  Projects
</h1>

    <ProjectCard projects={PROJECTS} />
  </section>
);

export default ProjectSection
