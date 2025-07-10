export default function AboutSection() {
  return (
    <section className="pl-3 max-w-3xl mx-auto space-y-10">
      <section className="space-y-4 text-sm leading-relaxed font-medium">
        <h2 className="text-black text-base font-semibold">TypeScript Expert | Problem-Solver</h2>

        <p>
          I’m Oded, a dedicated full-stack developer with over 3.5 years of hands-on experience in building fast, scalable, and maintainable
          web apps. I work exclusively with modern technologies like <strong>TypeScript</strong>, <strong>Vue 3 / Nuxt 3</strong>,{' '}
          <strong>Next.js</strong>, and <strong>NestJS</strong>.
        </p>
        <p>
          My approach is simple: I write clean, efficient code with a strong emphasis on architecture, performance, and user experience. I
          value reliability, consistency, and getting things done – fast and right.
        </p>
      </section>

      <section>
        <h2 className="text-base font-semibold mb-4">Tech Stack</h2>
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
        <h2 className="text-base font-semibold">How I Work</h2>
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
        <div className="my-5 flex justify-center gap-4">
          <a href="https://wa.me/972546472808" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            Message Me on WhatsApp
          </a>
        </div>
      </footer>
    </section>
  );
}
