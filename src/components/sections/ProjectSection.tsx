import { PROJECTS } from '@/app/config';
import ProjectCard from '../cards/ProjectCard';

const ProjectSection = () => (
  <section className="mx-auto my-12 p-6">
    <h2 className="text-[min(13vw,46px)] font-semibold mb-24 drop-shadow-2xl font-sans text-center transition-all duration-100 ease-in-out hover:text-neon-gray hover:scale-120 hover:drop-shadow-gray-900 dark:hover:drop-shadow-gray-50">
      Projects
    </h2>
    <ProjectCard projects={PROJECTS} />
  </section>
);

export default ProjectSection;
