import Link from 'next/link';

export default function BlogSection() {
  return (
    <section className="pl-3 space-y-10">
      <article>
        <h2 className="text-base font-semibold">Modern React Patterns for Better UX</h2>
        <p className="text-muted-foreground mb-3">
          Discover advanced patterns in modern React development that enhance user experience, maintainability, and performance.
        </p>
        <Link href="/blog/modern-react-patterns-better-ux" className="text-primary hover:underline">
          Read more →
        </Link>
      </article>

      <article>
        <h2 className="text-base font-semibold">From Monolith to Microservices: My Journey</h2>
        <p className="text-muted-foreground mb-3">
          Lessons learned while migrating a large-scale Node.js application from a monolithic architecture to microservices.
        </p>
        <Link href="/blog/monolith-to-microservices-journey" className="text-primary hover:underline">
          Read more →
        </Link>
      </article>

      <article>
        <h2 className="text-base font-semibold">Building a Scalable API with Node.js & TypeScript</h2>
        <p className="text-muted-foreground mb-3">
          A practical guide to designing and building production-grade APIs using Node.js, TypeScript, and clean architecture.
        </p>
        <Link href="/blog/scalable-apis-nodejs-typescript" className="text-primary hover:underline">
          Read more →
        </Link>
      </article>
    </section>
  );
}
