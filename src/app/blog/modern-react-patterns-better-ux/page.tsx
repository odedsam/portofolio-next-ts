// app/blog/modern-react-patterns-better-ux/page.tsx
import BackToHome from '@/components/BackToHome';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Modern React Patterns for Better UX | Your Name',
  description: 'Discover advanced React patterns and techniques to create smooth, performant user experiences that delight your users.',
  keywords: ['React', 'Frontend', 'UX', 'Performance', 'JavaScript'],
  authors: [{ name: 'Your Name' }],
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
     <div className='py-8'> <BackToHome /></div>
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
          Creating delightful user experiences goes beyond making things look pretty. It's about understanding user behavior, optimizing
          performance, and implementing patterns that make your app feel fast and responsive.
        </p>
      </header>

      <div className="prose prose-lg max-w-none">
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Optimistic UI Updates</h2>
        <p className="text-gray-700 mb-6">
          One of the most impactful UX improvements you can make is implementing optimistic updates. Instead of waiting for server
          responses, update the UI immediately and handle failures gracefully:
        </p>

        <div className="bg-gray-900 text-gray-100 rounded-lg p-4 mb-6 overflow-x-auto">
          <pre className="text-sm">
            {`const useTodoMutation = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(false);

  const addTodo = async (newTodo: Omit<Todo, 'id'>) => {
    // Optimistic update
    const tempId = Date.now().toString();
    const optimisticTodo = { ...newTodo, id: tempId };
    setTodos(prev => [...prev, optimisticTodo]);

    try {
      const response = await api.post('/todos', newTodo);
      // Replace optimistic todo with real one
      setTodos(prev => prev.map(todo =>
        todo.id === tempId ? response.data : todo
      ));
    } catch (error) {
      // Rollback optimistic update
      setTodos(prev => prev.filter(todo => todo.id !== tempId));
      toast.error('Failed to add todo');
    }
  };

  return { todos, addTodo, loading };
};`}
          </pre>
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Skeleton Loading States</h2>
        <p className="text-gray-700 mb-4">
          Replace generic spinners with skeleton screens that match your content structure. This creates a perception of faster loading:
        </p>

        <div className="bg-gray-900 text-gray-100 rounded-lg p-4 mb-6 overflow-x-auto">
          <pre className="text-sm">
            {`const ArticleSkeleton = () => (
  <div className="animate-pulse">
    <div className="h-4 bg-gray-300 rounded mb-4 w-3/4"></div>
    <div className="h-3 bg-gray-300 rounded mb-2"></div>
    <div className="h-3 bg-gray-300 rounded mb-2 w-5/6"></div>
    <div className="h-3 bg-gray-300 rounded w-4/6"></div>
  </div>
);

const ArticleCard = ({ articleId }: { articleId: string }) => {
  const { data: article, loading } = useArticle(articleId);

  if (loading) return <ArticleSkeleton />;

  return (
    <div className="p-4 border rounded-lg">
      <h3 className="font-semibold mb-2">{article.title}</h3>
      <p className="text-gray-600">{article.excerpt}</p>
    </div>
  );
};`}
          </pre>
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Smart Data Fetching with SWR</h2>
        <p className="text-gray-700 mb-4">
          SWR (Stale-While-Revalidate) provides excellent caching and revalidation strategies. Here's how I implement it for optimal UX:
        </p>

        <div className="bg-gray-900 text-gray-100 rounded-lg p-4 mb-6 overflow-x-auto">
          <pre className="text-sm">
            {`import useSWR from 'swr';

const useUserProfile = (userId: string) => {
  const { data, error, mutate } = useSWR(
    userId ? \`/api/users/\${userId}\` : null,
    fetcher,
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: true,
      dedupingInterval: 60000, // 1 minute
      errorRetryCount: 3,
      errorRetryInterval: 5000,
      // Show cached data immediately, then revalidate
      fallbackData: getCachedUser(userId),
    }
  );

  const updateProfile = async (updates: Partial<User>) => {
    // Optimistic update
    mutate({ ...data, ...updates }, false);

    try {
      const updated = await api.patch(\`/users/\${userId}\`, updates);
      mutate(updated);
    } catch (error) {
      // Revert on error
      mutate();
      throw error;
    }
  };

  return {
    user: data,
    isLoading: !error && !data,
    isError: error,
    updateProfile,
  };
};`}
          </pre>
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Intersection Observer for Smooth Scrolling</h2>
        <p className="text-gray-700 mb-4">
          Implement infinite scrolling and lazy loading with Intersection Observer for better performance:
        </p>

        <div className="bg-gray-900 text-gray-100 rounded-lg p-4 mb-6 overflow-x-auto">
          <pre className="text-sm">
            {`const useInfiniteScroll = <T>(
  fetchFn: (page: number) => Promise<T[]>,
  options: { threshold?: number } = {}
) => {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);

  const loadMore = useCallback(async () => {
    if (loading || !hasMore) return;

    setLoading(true);
    try {
      const newData = await fetchFn(page);
      if (newData.length === 0) {
        setHasMore(false);
      } else {
        setData(prev => [...prev, ...newData]);
        setPage(prev => prev + 1);
      }
    } catch (error) {
      console.error('Error loading more data:', error);
    } finally {
      setLoading(false);
    }
  }, [fetchFn, page, loading, hasMore]);

  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          loadMore();
        }
      },
      { threshold: options.threshold || 0.1 }
    );

    if (sentinelRef.current) {
      observer.observe(sentinelRef.current);
    }

    return () => observer.disconnect();
  }, [loadMore, options.threshold]);

  return { data, loading, hasMore, sentinelRef };
};`}
          </pre>
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Error Boundaries with Fallback UI</h2>
        <p className="text-gray-700 mb-4">Create graceful error handling with custom error boundaries that provide meaningful fallbacks:</p>

        <div className="bg-gray-900 text-gray-100 rounded-lg p-4 mb-6 overflow-x-auto">
          <pre className="text-sm">
            {`interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<
  PropsWithChildren<{ fallback?: ComponentType<{ error: Error; reset: () => void }> }>,
  ErrorBoundaryState
> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
    // Send to error reporting service
    errorReporting.captureException(error, errorInfo);
  }

  reset = () => {
    this.setState({ hasError: false, error: undefined });
  };

  render() {
    if (this.state.hasError) {
      const FallbackComponent = this.props.fallback || DefaultErrorFallback;
      return <FallbackComponent error={this.state.error!} reset={this.reset} />;
    }

    return this.props.children;
  }
}

const DefaultErrorFallback = ({ error, reset }: { error: Error; reset: () => void }) => (
  <div className="p-6 bg-red-50 border border-red-200 rounded-lg">
    <h2 className="text-lg font-semibold text-red-900 mb-2">Something went wrong</h2>
    <p className="text-red-700 mb-4">{error.message}</p>
    <button
      onClick={reset}
      className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
    >
      Try again
    </button>
  </div>
);`}
          </pre>
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Debounced Search with Instant Results</h2>
        <p className="text-gray-700 mb-4">Implement responsive search with debouncing and result caching:</p>

        <div className="bg-gray-900 text-gray-100 rounded-lg p-4 mb-6 overflow-x-auto">
          <pre className="text-sm">
            {`const useSearch = <T>(
  searchFn: (query: string) => Promise<T[]>,
  debounceMs: number = 300
) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<T[]>([]);
  const [loading, setLoading] = useState(false);
  const [cache, setCache] = useState<Record<string, T[]>>({});

  const debouncedQuery = useDebounce(query, debounceMs);

  useEffect(() => {
    if (!debouncedQuery.trim()) {
      setResults([]);
      return;
    }

    // Check cache first
    if (cache[debouncedQuery]) {
      setResults(cache[debouncedQuery]);
      return;
    }

    setLoading(true);
    searchFn(debouncedQuery)
      .then(data => {
        setResults(data);
        setCache(prev => ({ ...prev, [debouncedQuery]: data }));
      })
      .catch(error => {
        console.error('Search error:', error);
        setResults([]);
      })
      .finally(() => setLoading(false));
  }, [debouncedQuery, searchFn, cache]);

  return { query, setQuery, results, loading };
};

const SearchComponent = () => {
  const { query, setQuery, results, loading } = useSearch(searchUsers);

  return (
    <div className="relative">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search users..."
        className="w-full p-2 border rounded-lg"
      />
      {loading && (
        <div className="absolute right-2 top-2">
          <div className="animate-spin h-5 w-5 border-2 border-blue-500 rounded-full border-t-transparent"></div>
        </div>
      )}
      {results.length > 0 && (
        <div className="absolute z-10 w-full bg-white border rounded-lg mt-1 shadow-lg">
          {results.map(user => (
            <div key={user.id} className="p-2 hover:bg-gray-50 cursor-pointer">
              {user.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};`}
          </pre>
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Micro-Interactions with Framer Motion</h2>
        <p className="text-gray-700 mb-4">Add delightful micro-interactions that provide feedback and enhance the user experience:</p>

        <div className="bg-gray-900 text-gray-100 rounded-lg p-4 mb-6 overflow-x-auto">
          <pre className="text-sm">
            {`import { motion, AnimatePresence } from 'framer-motion';

const TodoItem = ({ todo, onToggle, onDelete }: TodoItemProps) => (
  <motion.div
    layout
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, x: -300 }}
    className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm"
  >
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => onToggle(todo.id)}
      className={\`w-5 h-5 rounded border-2 flex items-center justify-center \${
        todo.completed ? 'bg-green-500 border-green-500' : 'border-gray-300'
      }\`}
    >
      <AnimatePresence>
        {todo.completed && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            className="text-white text-xs"
          >
            ✓
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>

    <span className={todo.completed ? 'line-through text-gray-500' : ''}>
      {todo.text}
    </span>

    <motion.button
      whileHover={{ scale: 1.1, color: '#ef4444' }}
      whileTap={{ scale: 0.9 }}
      onClick={() => onDelete(todo.id)}
      className="ml-auto text-gray-400 hover:text-red-500"
    >
      ✕
    </motion.button>
  </motion.div>
);`}
          </pre>
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Performance Monitoring</h2>
        <p className="text-gray-700 mb-4">Monitor your app's performance with custom hooks and Web Vitals:</p>

        <div className="bg-gray-900 text-gray-100 rounded-lg p-4 mb-6 overflow-x-auto">
          <pre className="text-sm">
            {`const usePerformanceMonitoring = () => {
  useEffect(() => {
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'navigation') {
          const nav = entry as PerformanceNavigationTiming;
          analytics.track('page_load_time', {
            duration: nav.loadEventEnd - nav.loadEventStart,
            page: window.location.pathname,
          });
        }
      }
    });

    observer.observe({ entryTypes: ['navigation'] });

    return () => observer.disconnect();
  }, []);

  // Track component render times
  const trackRenderTime = (componentName: string, startTime: number) => {
    const endTime = performance.now();
    const duration = endTime - startTime;

    if (duration > 100) { // Only track slow renders
      analytics.track('slow_render', {
        component: componentName,
        duration,
      });
    }
  };

  return { trackRenderTime };
};`}
          </pre>
        </div>

        <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-6">
          <h3 className="text-lg font-semibold text-green-900 mb-2">UX Best Practices</h3>
          <ul className="text-green-800 space-y-1">
            <li>• Always provide immediate feedback for user actions</li>
            <li>• Use skeleton screens instead of generic loading spinners</li>
            <li>• Implement optimistic updates for better perceived performance</li>
            <li>• Add meaningful micro-interactions and animations</li>
            <li>• Monitor real-world performance metrics</li>
            <li>• Handle errors gracefully with fallback UI</li>
          </ul>
        </div>

        <p className="text-gray-700 mt-8">
          Modern React development is about creating experiences that feel native and responsive. By implementing these patterns, you'll
          build applications that not only work well but also delight your users with smooth, intuitive interactions.
        </p>
      </div>

      <footer className="mt-12 pt-8 border-t border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
            <div>
              <p className="font-semibold text-gray-900">Your Name</p>
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
