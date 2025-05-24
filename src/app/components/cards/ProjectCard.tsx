import { ExternalLink, Pin } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import Link from 'next/link';

export type Project = {
  title: string;
  description: string;
  tech: string[];
  href: string;
  githubMonorepo?: string;
  githubClientUrl?: string;
  githubServerUrl?: string;
  pinned?: boolean;
};
type GithubLinksType = {
  clientUrl: string;
  serverUrl: string;
  monorepo: boolean;
};

type Props = {
  projects: Project[];
};


export const GithubLinks = ({ clientUrl, serverUrl, monorepo }: GithubLinksType) => {
  return (
    <div className="flex gap-2 items-center">
      {monorepo ? (
        <Link href={clientUrl} target="_blank" className="flex items-center gap-1">
          Repo <FaGithub className="w-4 h-4" />
        </Link>
      ) : (
        <>
          <Link href={clientUrl} target="_blank" className="flex items-center gap-1">
            Client <FaGithub className="w-4 h-4" />
          </Link>
          {serverUrl && (
            <Link href={serverUrl} target="_blank" className="flex items-center gap-1">
              Server <FaGithub className="w-4 h-4" />
            </Link>
          )}
        </>
      )}
    </div>
  );
};

export default function ProjectCard({ projects }: Props) {
  return (
    <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <div
          key={project.title}
          className="relative rounded-2xl border bg-background p-4 sm:p-5 md:p-6 shadow-sm hover:shadow-md transition">
          {project.pinned && <Pin className="absolute top-3 right-3 text-yellow-500 fill-yellow-500 w-5 h-5" />}
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
            <GithubLinks
              clientUrl={project?.githubClientUrl ?? ''}
              serverUrl={project.githubServerUrl ?? ''}
              monorepo={!!project.githubMonorepo }
            />
          </div>
        </div>
      ))}
    </div>
  );
}
