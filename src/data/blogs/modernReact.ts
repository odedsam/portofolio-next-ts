const optimisticUpdates = `
const useTodoMutation = () => {
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
};`;

const skeletonLoadingStates = `
const ArticleSkeleton = () => (
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
};`;
const dataFetchingWithSWR = `
import useSWR from 'swr';

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
};
`;

const useInfiniteScrollCode = `
import { useState, useEffect, useCallback, useRef } from 'react';

const useInfiniteScroll = <T>(
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
};
`;

const errorBoundaryCode = `
import React, { Component, PropsWithChildren, ComponentType, ErrorInfo } from 'react';

interface ErrorBoundaryState {
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
);

const errorReporting = {
  captureException: (error: Error, errorInfo: ErrorInfo) => {
    console.error('Reporting error:', error, errorInfo);
  },
};
`;

const debounceSearchCode = `
import { useState, useEffect } from 'react';

// נניח ש־useDebounce מוגדר במקום אחר, או תוסיף הגדרה לדוגמה
function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(handler);
  }, [value, delay]);

  return debouncedValue;
}

const useSearch = <T extends { id: string; name: string }>(
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
  // נניח ש־searchUsers מוגדר איפשהו
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
};
`;

const microInteractionsCode = `
import { motion, AnimatePresence } from 'framer-motion';

type TodoItemProps = {
  todo: { id: string; text: string; completed: boolean };
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
};

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
      className={\`w-5 h-5 rounded border-2 flex items-center justify-center \${todo.completed ? 'bg-green-500 border-green-500' : 'border-gray-300'}\`}
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
);
`;

const performanceMonitoringCode = `
import { useEffect } from 'react';

const usePerformanceMonitoring = () => {
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
};
`;

export {
  optimisticUpdates,
  dataFetchingWithSWR,
  skeletonLoadingStates,
  debounceSearchCode,
  errorBoundaryCode,
  performanceMonitoringCode,
  microInteractionsCode,
  useInfiniteScrollCode,
};
