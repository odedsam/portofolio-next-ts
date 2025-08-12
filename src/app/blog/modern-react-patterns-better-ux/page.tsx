import { Metadata } from 'next';
import BackToHome from '@/components/BackToHome';
import Image from 'next/image';
import CodeBlock from '../../../components/cards/CodeBlock';
import {
  optimisticUpdates,
  dataFetchingWithSWR,
  skeletonLoadingStates,
  debounceSearchCode,
  errorBoundaryCode,
  performanceMonitoringCode,
  microInteractionsCode,
  useInfiniteScrollCode,
} from '@/data/blogs/modernReact';

export const metadata: Metadata = {
  title: 'Modern React Patterns for Better UX | Oded Samuel',
  description: 'Discover advanced React patterns and techniques to create smooth, performant user experiences that delight your users.',
  keywords: ['React', 'Frontend', 'UX', 'Performance', 'JavaScript'],
  authors: [{ name: 'Oded Samuel' }],
  openGraph: {
    title: 'Modern React Patterns for Better UX',
    description: 'Discover advanced React patterns and techniques to create smooth, performant user experiences that delight your users.',
    type: 'article',
    publishedTime: '2024-11-28',
  },
};

export default function ModernReactPatternsPost() {
  return (
    <article className="max-w-4xl mx-auto px-6 py-12">
      <div className="py-8">
        <BackToHome />
      </div>

      <header className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Modern React Patterns for Better UX</h1>
        <div className="flex items-center gap-4 text-gray-600 mb-6">
          <time dateTime="2024-11-28">November 28, 2024</time>
          <span>•</span>
          <span>12 min read</span>
          <span>•</span>
          <span>Frontend Development</span>
        </div>
        <p className="text-xl text-gray-700 leading-relaxed">
          Creating delightful user experiences goes beyond making things look pretty. It&apos;s about understanding user behavior,
          optimizing performance, and implementing patterns that make your app feel fast and responsive.
        </p>
      </header>

      <section className="prose prose-lg max-w-none">
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Optimistic UI Updates</h2>
        <p className="text-gray-700 mb-6">
          One of the most impactful UX improvements you can make is implementing optimistic updates. Instead of waiting for server
          responses, update the UI immediately and handle failures gracefully:
        </p>
        <CodeBlock code={optimisticUpdates} language="typescript" />

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Skeleton Loading States</h2>
        <p className="text-gray-700 mb-4">
          Replace generic spinners with skeleton screens that match your content structure. This creates a perception of faster loading:
        </p>
        <CodeBlock code={skeletonLoadingStates} language="typescript" />

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Smart Data Fetching with SWR</h2>
        <p className="text-gray-700 mb-4">
          SWR (Stale-While-Revalidate) provides excellent caching and revalidation strategies. Here&apos;s how I implement it for optimal
          UX:
        </p>
        <CodeBlock code={dataFetchingWithSWR} language="typescript" />

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Debounced Search with Instant Results</h2>
        <p className="text-gray-700 mb-4">Implement responsive search with debouncing and result caching:</p>
        <CodeBlock code={debounceSearchCode} language="typescript" />

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Error Boundaries with Fallback UI</h2>
        <p className="text-gray-700 mb-4">Create graceful error handling with custom error boundaries that provide meaningful fallbacks:</p>
        <CodeBlock code={errorBoundaryCode} language="typescript" />

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Micro-Interactions with Framer Motion</h2>
        <p className="text-gray-700 mb-4">Add delightful micro-interactions that provide feedback and enhance the user experience:</p>
        <CodeBlock code={microInteractionsCode} language="typescript" />

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Performance Monitoring</h2>
        <p className="text-gray-700 mb-4">Monitor your app&apos;s performance with custom hooks and Web Vitals:</p>
        <CodeBlock code={performanceMonitoringCode} language="typescript" />

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Intersection Observer for Smooth Scrolling</h2>
        <p className="text-gray-700 mb-4">
          Implement infinite scrolling and lazy loading with Intersection Observer for better performance:
        </p>
        <CodeBlock code={useInfiniteScrollCode} language="typescript" />
      </section>

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

        </div>
      </footer>
    </article>
  );
}
