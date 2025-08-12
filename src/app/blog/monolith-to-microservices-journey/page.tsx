import { Metadata } from 'next';
import {
  dataMigrationCode,
  ciCdPipeline,
  dataGatewayPatternCode,
  eventDrivenArchitectureCode,
  distributedTracingCode,
  dockerKubernetesCode,
} from '@/data/blogs/microServices';
import BackToHome from '@/components/BackToHome';
import Image from 'next/image';
import CodeBlock from '@/components/cards/CodeBlock';

export const metadata: Metadata = {
  title: 'From Monolith to Microservices: A Real-World Journey | Your Name',
  description:
    'Learn from my experience migrating a monolithic application to microservices architecture, including challenges, solutions, and lessons learned.',
  keywords: ['Microservices', 'Architecture', 'DevOps', 'Scalability', 'Migration'],
  authors: [{ name: 'Your Name' }],
  openGraph: {
    title: 'From Monolith to Microservices: A Real-World Journey',
    description:
      'Learn from my experience migrating a monolithic application to microservices architecture, including challenges, solutions, and lessons learned.',
    type: 'article',
    publishedTime: '2024-10-15',
  },
};

export default function MicroservicesJourneyPost() {
  return (
    <article className="max-w-4xl mx-auto px-6 py-12">
      <div className="py-8">
        <BackToHome />
      </div>

      <header className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">From Monolith to Microservices: A Real-World Journey</h1>
        <div className="flex items-center gap-4 text-gray-600 mb-6">
          <time dateTime="2024-10-15">October 15, 2024</time>
          <span>•</span>
          <span>15 min read</span>
          <span>•</span>
          <span>Architecture</span>
        </div>
        <p className="text-xl text-gray-700 leading-relaxed">
          Last year, I led the migration of a monolithic e-commerce platform to a microservices architecture...
        </p>
      </header>

      <div className="prose prose-lg max-w-none">
        {/* Data Migration */}
        <h2>The Starting Point</h2>
        <p>Our monolithic application was a typical Node.js/Express app...</p>

        <h2>Planning the Migration Strategy</h2>
        <h3>2. Data Migration Strategy</h3>
        <p>One of the biggest challenges was decomposing the shared database...</p>
        <CodeBlock code={dataMigrationCode} language="typescript" />

        {/* API Gateway */}
        <h3>API Gateway Pattern</h3>
        <p>We used an API Gateway to handle cross-cutting concerns...</p>
        <CodeBlock code={dataGatewayPatternCode} language="typescript" />

        {/* Event Driven */}
        <h3>Event-Driven Architecture</h3>
        <p>For asynchronous communication, we implemented RabbitMQ...</p>
        <CodeBlock code={eventDrivenArchitectureCode} language="typescript" />

        {/* Docker & K8s */}
        <h3>Docker and Kubernetes</h3>
        <p>Each service runs in its own container with Kubernetes orchestration...</p>
        <CodeBlock code={dockerKubernetesCode} language="yaml" />

        {/* CI/CD */}
        <h3>CI/CD Pipeline</h3>
        <p>We implemented independent deployment pipelines...</p>
        <CodeBlock code={ciCdPipeline} language="yaml" />

        {/* Distributed Tracing */}
        <h3>Distributed Tracing</h3>
        <p>Using Jaeger for distributed tracing to track requests...</p>
        <CodeBlock code={distributedTracingCode} language="typescript" />
      </div>

      <footer className="mt-12 pt-8 border-t border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gray-300 rounded-full relative overflow-hidden">
              <Image src="/user-avatar.webp" alt="user-avatar" fill className="rounded-full object-cover" priority />
            </div>
            <div>
              <p className="font-semibold text-gray-900">Oded Samuel</p>
              <p className="text-gray-600">Full Stack Developer</p>
            </div>
          </div>
          <div className="flex gap-4">
            <button className="text-blue-600 hover:text-blue-800 font-medium">Share</button>
            <button className="text-gray-600 hover:text-gray-800 font-medium">Save</button>
          </div>
        </div>
      </footer>
    </article>
  );
}
