export * from "./interfaces"
export type Project = {
  title: string;
  description: string;
  tech: string[];
  href: string;
  githubMonorepo?: string;
  githubClientUrl?: string;
  githubServerUrl?: string;
  pinned?: boolean;
  imageUrl?: string;
};
