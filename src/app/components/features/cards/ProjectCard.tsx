import type { ProjectProps } from "@/app/types";
import IconLabel from "../../widgets/IconLabel";
export default function ProjectCard(project: ProjectProps) {
  return (
    <div className="bg-gray-200 bg-opacity-20 backdrop-blur-lg overflow-hidden rounded-xl shadow-xl border border-white border-opacity-30 hover:scale-105 transition">
      <div className="p-4 border border-gray-700 rounded-lg">
        <IconLabel icon={project.image} text={project.name} />
        <h3 className="text-2xl font-semibold text-gray-gray-500">{project.name}</h3>ƒ
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
