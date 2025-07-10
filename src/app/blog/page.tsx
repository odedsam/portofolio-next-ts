import Link from 'next/link';

export default function BlogPage() {
  return (
    <main className="py-24 lg:mt-12 min-h-screen">
      <section className="max-w-3xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-4">Blog</h1>
        <p className="text-muted-foreground mb-10">
          Articles on modern full-stack development, architecture, and best practices from real-world experience.
        </p>

        <div className="space-y-10">
          <article>
            <h2 className="text-2xl font-semibold">Modern React Patterns for Better UX</h2>
            <p className="text-muted-foreground mb-3">
              Discover advanced patterns in modern React development that enhance user experience, maintainability, and performance.
            </p>
            <Link href="/blog/modern-react-patterns-better-ux" className="text-primary hover:underline">
              Read more →
            </Link>
          </article>

          <article>
            <h2 className="text-2xl font-semibold">From Monolith to Microservices: My Journey</h2>
            <p className="text-muted-foreground mb-3">
              Lessons learned while migrating a large-scale Node.js application from a monolithic architecture to microservices.
            </p>
            <Link href="/blog/monolith-to-microservices-journey" className="text-primary hover:underline">
              Read more →
            </Link>
          </article>

          <article>
            <h2 className="text-2xl font-semibold">Building a Scalable API with Node.js & TypeScript</h2>
            <p className="text-muted-foreground mb-3">
              A practical guide to designing and building production-grade APIs using Node.js, TypeScript, and clean architecture.
            </p>
            <Link href="/blog/scalable-api-nodejs-typescript" className="text-primary hover:underline">
              Read more →
            </Link>
          </article>
        </div>
      </section>
    </main>
  );
}
