import { ProjectProps } from "@/app/types";
import ProjectCard from "../../features/cards/ProjectCard";
type Props = {
  project: ProjectProps[];
};
export default function ProjectSection({ project }: Props) {
  return (
    <div className="py-16 px-6">
      <h2 className="text-4xl font-sans font-semibold mb-6 text-center text-white drop-shadow-lg">Projects</h2>
      {Array.isArray(project) &&
        project.map((item: any, index: number) => (
          <ProjectCard
            key={index}
            demo={item.demo}
            image={item.image}
            description={item.description}
            name={item.name}
            repo={item.repo}
          />
        ))}
    </div>
  );
}
