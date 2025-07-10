export default function page() {
  return (
    <main className="py-24 lg:mt-12 h-screen -z-40">
      <section className="max-w-3xl mx-auto py-12 md:py-24 px-6 space-y-10">
        <div className="flex flex-col justify-center items-center gap-4">
          <h1 className="text-4xl font-bold font-sans dark:text-white drop-shadow-lg">About Me</h1>
          <p className="text-muted-foreground mt-2 text-lg text-center">Full-Stack Developer | TypeScript Expert | Problem-Solver</p>
        </div>

        <section className="space-y-4 text-base leading-relaxed text-center font-fira font-medium">
          <p>
            I’m Oded, a dedicated full-stack developer with over 3.5 years of hands-on experience in building fast, scalable, and
            maintainable web apps. I work exclusively with modern technologies like <strong>TypeScript</strong>,{' '}
            <strong>Vue 3 / Nuxt 3</strong>, <strong>Next.js</strong>, and <strong>NestJS</strong>.
          </p>
          <p>
            My approach is simple: I write clean, efficient code with a strong emphasis on architecture, performance, and user experience. I
            value reliability, consistency, and getting things done – fast and right.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Tech Stack</h2>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm text-muted-foreground">
            <li>TypeScript</li>
            <li>React</li>
            <li>Next.js 15</li>
            <li>Vue 3</li>
            <li>Nuxt 3</li>
            <li>Tailwind CSS</li>
            <li>NestJS</li>
            <li>ExpressJs</li>
            <li>MongoDB</li>
            <li>Supabase</li>
            <li>Prisma</li>
            <li>Redux Toolkit</li>
            <li>Zustand</li>
            <li>Pinia</li>
            <li>Recharts</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">How I Work</h2>
          <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1">
            <li>Clean code, always typed and structured</li>
            <li>Component-driven development, scalable UI systems</li>
            <li>Fast iterations with focus on results</li>
            <li>Clear communication, no BS</li>
          </ul>
        </section>

        <footer className="text-center pt-12">
          <h2 className="text-2xl font-bold">Ready to collaborate?</h2>
          <p className="text-muted-foreground mt-2">Let’s build something that makes an impact.</p>
          <div className="mt-6 flex justify-center gap-4">
            <a href="/contact" className="btn btn-primary">
              Contact Me
            </a>
            <a href="/projects" className="btn">
              View Projects
            </a>
          </div>
        </footer>
      </section>
    </main>
  );
}
