import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import Link from 'next/link';

export type Project = {
  title: string;
  description: string;
  tech: string[];
  href: string;
  github: string;
};

type Props = {
  projects: Project[];
};

export default function ProjectCard({ projects }: Props) {
  return (
    <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <div key={project.title} className="rounded-2xl border bg-background p-4 sm:p-5 md:p-6 shadow-sm hover:shadow-md transition">
          <h2 className="text-lg sm:text-xl font-semibold mb-2">{project.title}</h2>
          <p className="text-sm sm:text-base text-muted-foreground mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((t) => (
              <span key={t} className="text-[10px] sm:text-xs bg-muted text-foreground px-2 py-0.5 rounded-md">
                {t}
              </span>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
            <Link href={project.href} target="_blank" className="inline-flex items-center gap-1 text-sm text-primary hover:underline">
              Live <ExternalLink className="w-4 h-4" />
            </Link>
            <Link
              href={project.github}
              target="_blank"
              className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:underline">
              GitHub <FaGithub className="w-4 h-4" />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

// scrollable horizontal style
// export default function ProjectCard({ projects }: Props) {
//   return (
//     <div className="overflow-x-auto">
//       <div className="flex gap-4 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6 px-1">
//         {projects.map((project) => (
//           <div
//             key={project.title}
//             className="min-w-[280px] sm:min-w-[320px] flex-shrink-0 rounded-2xl border bg-background p-4 shadow-sm hover:shadow-md transition"
//           >
//             <h2 className="text-lg font-semibold mb-2">{project.title}</h2>
//             <p className="text-sm text-muted-foreground mb-4">
//               {project.description}
//             </p>
//             <div className="flex flex-wrap gap-2 mb-4">
//               {project.tech.map((t) => (
//                 <span
//                   key={t}
//                   className="text-[10px] bg-muted text-foreground px-2 py-0.5 rounded-md"
//                 >
//                   {t}
//                 </span>
//               ))}
//             </div>
//             <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
//               <Link
//                 href={project.href}
//                 target="_blank"
//                 className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
//               >
//                 Live <ExternalLink className="w-4 h-4" />
//               </Link>
//               <Link
//                 href={project.github}
//                 target="_blank"
//                 className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:underline"
//               >
//                 GitHub <FaGithub className="w-4 h-4" />
//               </Link>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }
