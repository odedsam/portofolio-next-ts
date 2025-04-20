'use client';
import { PROJECTS } from '../config';
import ProjectCard from '../components/cards/ProjectCard';

export default function ProjectsPage() {
  return (
    <section className="p-6">
      <h1 className="text-3xl font-bold mb-6">Projects</h1>
      <ProjectCard projects={PROJECTS} />
    </section>
  );
}
