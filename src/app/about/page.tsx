export default function page() {
  return (
    <div className="">
      <section className="max-w-3xl mx-auto py-24 space-y-10">
        <div className="text-center">
          <h1 className="text-4xl font-bold">About Me</h1>
          <p className="text-muted-foreground mt-2 text-lg">
            Full-Stack Developer | TypeScript Expert | Problem-Solver
          </p>
        </div>

        <div className="space-y-4 text-base leading-relaxed">
          <p>
            I’m Oded, a dedicated full-stack developer with over 2 years of hands-on experience in building fast,
            scalable, and maintainable web apps. I work exclusively with modern technologies like{" "}
            <strong>TypeScript</strong>, <strong>Vue 3 / Nuxt 3</strong>, <strong>Next.js</strong>, and{" "}
            <strong>NestJS</strong>.
          </p>
          <p>
            My approach is simple: I write clean, efficient code with a strong emphasis on architecture, performance,
            and user experience. I value reliability, consistency, and getting things done – fast and right.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Tech Stack</h2>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm text-muted-foreground">
            <li>TypeScript</li>
            <li>Vue 3 / Nuxt 3</li>
            <li>Next.js 15</li>
            <li>Tailwind CSS</li>
            <li>NestJS</li>
            <li>MongoDB / Supabase</li>
            <li>Zustand / Redux Toolkit</li>
            <li>OpenAI API</li>
            <li>Stripe</li>
            <li>Recharts</li>
          </ul>
        </div>

        <div className="space-y-3">
          <h2 className="text-xl font-semibold">How I Work</h2>
          <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1">
            <li>Clean code, always typed and structured</li>
            <li>Component-driven development, scalable UI systems</li>
            <li>Fast iterations with focus on results</li>
            <li>Clear communication, no BS</li>
          </ul>
        </div>

        <div className="text-center pt-12">
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
        </div>
      </section>
    </div>
  );
}
