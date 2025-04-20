// app/projects/page.tsx
'use client';

import Link from 'next/link';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'AI Prompts Playground',
    description: 'Organize, test and manage your AI prompts with dynamic form generation and OpenAI integration.',
    href: 'https://ai-prompts-playground.vercel.app',
    github: 'https://github.com/oded-samuel/ai-prompts-playground',
    tech: ['Next.js', 'Tailwind', 'Zod', 'OpenAI', 'Supabase'],
  },
  {
    title: 'Finance Dashboard',
    description: 'Track your income and expenses with real-time charts, Supabase auth and persistent transactions.',
    href: 'https://finance-dashboard.vercel.app',
    github: 'https://github.com/oded-samuel/finance-dashboard',
    tech: ['Next.js', 'Tailwind', 'Zustand', 'Recharts', 'Supabase'],
  },
];

export default function ProjectsPage() {
  return (
    <section className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Projects</h1>
      <div className="grid gap-6">
        {projects.map((project) => (
          <div key={project.title} className="rounded-2xl border bg-background p-6 shadow-sm hover:shadow-md transition">
            <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
            <p className="text-muted-foreground mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((t) => (
                <span key={t} className="text-xs bg-muted text-foreground px-2 py-0.5 rounded-md">
                  {t}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-4">
              <Link href={project.href} target="_blank" className="inline-flex items-center gap-1 text-sm text-primary hover:underline">
                Live <ExternalLink className="w-4 h-4" />
              </Link>
              <Link href={project.github} target="_blank" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:underline">
                GitHub <Github className="w-4 h-4" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
