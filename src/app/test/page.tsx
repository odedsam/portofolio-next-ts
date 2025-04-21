import { Icon } from 'lucide-react';

export default function Test() {
  return (
    <div className="container">
      {' '}
      <section className="text-center py-24">
        <h1 className="text-4xl font-bold">I build clean, scalable web apps.</h1>
        <p className="text-muted-foreground mt-4 text-lg">Full-Stack Developer specializing in modern TypeScript frameworks.</p>
        <div className="mt-6 flex justify-center gap-4">
          <a href="/projects" className="btn btn-primary">
            View Projects
          </a>
          <a href="/contact" className="btn">
            Contact Me
          </a>
        </div>
      </section>
      <section className="text-center py-16 max-w-2xl mx-auto">
        <h2 className="text-2xl font-semibold">Reliable. Performant. Maintainable.</h2>
        <p className="text-muted-foreground mt-2">
          I craft web applications that are fast, secure, and built to scale – with a strong focus on developer experience and modern
          architecture.
        </p>
      </section>
      <section className="py-16">
        <h2 className="text-xl font-semibold text-center mb-8">Tech Stack</h2>
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-6 place-items-center">
          <Icon name="logos:typescript-icon" className="w-10 h-10" iconNode={[]} />
          <Icon name="logos:vue" className="w-10 h-10" iconNode={[]} />
          <Icon name="logos:nuxt-icon" className="w-10 h-10" iconNode={[]} />
          <Icon name="logos:nextjs-icon" className="w-10 h-10" iconNode={[]} />
          <Icon name="logos:nestjs" className="w-10 h-10" iconNode={[]} />
          <Icon name="logos:tailwindcss-icon" className="w-10 h-10" iconNode={[]} />
        </div>

        <section className="py-16 max-w-2xl mx-auto text-center">
          <h2 className="text-xl font-semibold">A Bit About Me</h2>
          <p className="text-muted-foreground mt-2">
            I&apos;m Oded, a passionate full-stack developer with 2 years of experience. I focus on clean code, modern architecture, and
            delivering real business value through fast, functional web apps.
          </p>
          <a href="/about" className="text-primary underline mt-3 inline-block">
            Learn more →
          </a>
        </section>
      </section>
      <section className="py-24 text-center bg-muted/30 rounded-xl max-w-4xl mx-auto my-12">
        <h2 className="text-2xl font-bold">Let’s build something great together.</h2>
        <p className="text-muted-foreground mt-2">Available for freelance, full-time roles, or collaboration.</p>
        <div className="mt-6 flex justify-center gap-4">
          <a href="/contact" className="btn btn-primary">
            Get in Touch
          </a>
          <a href="/cv.pdf" className="btn" download>
            Download CV
          </a>
        </div>
      </section>
    </div>
  );
}
