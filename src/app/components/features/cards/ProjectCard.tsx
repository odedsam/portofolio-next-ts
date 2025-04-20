import type { ProjectProps } from "@/app/types";
import IconLabel from "../../widgets/IconLabel";
export default function ProjectCard(project: ProjectProps) {
  return (
    <div className="bg-gradient-to-b from-[#0a0a0a] via-[#1a1a1a] to-[#2a2a2a]; border border-white/10 rounded-xl p-6 hover:ring-1 hover:ring-cyan-400 transition  bg-opacity-20 backdrop-blur-lg overflow-hidden  shadow-xl  border-opacity-30 hover:scale-105 ">
      <div className="p-4 border border-gray-700 rounded-lg">
        <IconLabel icon={project.image} text={project.name} />
        <h3 className="text-2xl font-semibold text-gray-500">{project.name}</h3>
        <p className="text-gray-500">{project.description}</p>
        <div className="mt-4">
          <iframe
            src={project.demo}
            className="w-full h-[300px] rounded-md border border-gray-700"
            loading="lazy"
          ></iframe>
        </div>

        <div className="flex space-x-2 mt-4">
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-300 hover:text-indigo-400 transition">
            Live Demo
          </a>
          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-300 hover:text-indigo-400 transition">
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
