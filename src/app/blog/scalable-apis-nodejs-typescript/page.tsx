import BackToHome from '@/components/BackToHome';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Building Scalable APIs with Node.js and TypeScript | Your Name',
  description: 'Learn how to build production-ready, scalable APIs using Node.js, TypeScript, and modern architectural patterns.',
  keywords: ['Node.js', 'TypeScript', 'API', 'Backend', 'Scalability'],
  authors: [{ name: 'Your Name' }],
  openGraph: {
    title: 'Building Scalable APIs with Node.js and TypeScript',
    description: 'Learn how to build production-ready, scalable APIs using Node.js, TypeScript, and modern architectural patterns.',
    type: 'article',
    publishedTime: '2024-12-15',
  },
};

export default function ScalableAPIsPost() {
  return (
    <article className="max-w-4xl mx-auto px-6 py-12">
      <div className="py-8">
        {' '}
        <BackToHome />
      </div>
      <header className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Building Scalable APIs with Node.js and TypeScript</h1>
        <div className="flex items-center gap-4 text-gray-600 mb-6">
          <time dateTime="2024-12-15">December 15, 2024</time>
          <span>•</span>
          <span>8 min read</span>
          <span>•</span>
          <span>Backend Development</span>
        </div>
        <p className="text-xl text-gray-700 leading-relaxed">
          After 3.5 years of building production APIs, I've learned that scalability isn't just about handling more requests—it's about
          creating maintainable, robust systems that can evolve with your business needs.
        </p>
      </header>

      <div className="prose prose-lg max-w-none">
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">The Foundation: TypeScript + Express</h2>
        <p className="text-gray-700 mb-6">
          Starting with a solid foundation is crucial. TypeScript provides the type safety that becomes invaluable as your API grows. Here's
          how I structure my Node.js APIs for maximum scalability:
        </p>

        <div className="bg-gray-50 rounded-lg p-6 mb-6">
          <h3 className="text-lg font-semibold mb-3">Project Structure</h3>
          <pre className="text-sm text-gray-800 overflow-x-auto">
            {`src/
├── controllers/     # Request handlers
├── services/       # Business logic
├── models/         # Data models
├── middleware/     # Custom middleware
├── routes/         # Route definitions
├── utils/          # Helper functions
├── types/          # TypeScript types
└── config/         # Configuration files`}
          </pre>
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Key Architectural Patterns</h2>

        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">1. Dependency Injection</h3>
        <p className="text-gray-700 mb-4">
          Using dependency injection makes your code more testable and maintainable. I typically use a simple container pattern:
        </p>

        <div className="bg-gray-900 text-gray-100 rounded-lg p-4 mb-6 overflow-x-auto">
          <pre className="text-sm">
            {`// container.ts
export class Container {
  private services = new Map();

  register<T>(token: string, factory: () => T): void {
    this.services.set(token, factory);
  }

  resolve<T>(token: string): T {
    const factory = this.services.get(token);
    if (!factory) throw new Error(\`Service \${token} not found\`);
    return factory();
  }
}`}
          </pre>
        </div>

        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">2. Repository Pattern</h3>
        <p className="text-gray-700 mb-4">
          Abstracting data access through repositories makes your code database-agnostic and easier to test:
        </p>

        <div className="bg-gray-900 text-gray-100 rounded-lg p-4 mb-6 overflow-x-auto">
          <pre className="text-sm">
            {`interface UserRepository {
  findById(id: string): Promise<User | null>;
  create(userData: CreateUserDto): Promise<User>;
  update(id: string, userData: UpdateUserDto): Promise<User>;
  delete(id: string): Promise<void>;
}

class MongoUserRepository implements UserRepository {
  // MongoDB implementation
}

class PostgresUserRepository implements UserRepository {
  // PostgreSQL implementation
}`}
          </pre>
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Performance Optimization Strategies</h2>

        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Caching Layer</h3>
        <p className="text-gray-700 mb-4">
          Implementing Redis caching can dramatically improve response times for frequently accessed data:
        </p>

        <div className="bg-gray-900 text-gray-100 rounded-lg p-4 mb-6 overflow-x-auto">
          <pre className="text-sm">
            {`class CacheService {
  private redis: Redis;

  async get<T>(key: string): Promise<T | null> {
    const cached = await this.redis.get(key);
    return cached ? JSON.parse(cached) : null;
  }

  async set(key: string, value: any, ttl: number = 3600): Promise<void> {
    await this.redis.setex(key, ttl, JSON.stringify(value));
  }

  async invalidate(pattern: string): Promise<void> {
    const keys = await this.redis.keys(pattern);
    if (keys.length > 0) {
      await this.redis.del(...keys);
    }
  }
}`}
          </pre>
        </div>

        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Database Optimization</h3>
        <p className="text-gray-700 mb-4">
          Proper indexing and query optimization are essential. I use tools like MongoDB Compass or pgAdmin to analyze query performance and
          create appropriate indexes.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Error Handling and Logging</h2>
        <p className="text-gray-700 mb-4">Centralized error handling and structured logging are crucial for debugging production issues:</p>

        <div className="bg-gray-900 text-gray-100 rounded-lg p-4 mb-6 overflow-x-auto">
          <pre className="text-sm">
            {`// Global error handler middleware
export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  logger.error('API Error', {
    message: err.message,
    stack: err.stack,
    url: req.url,
    method: req.method,
    userId: req.user?.id
  });

  res.status(500).json({
    success: false,
    message: 'Internal server error',
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
  });
};`}
          </pre>
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Testing Strategy</h2>
        <p className="text-gray-700 mb-4">
          A comprehensive testing strategy includes unit tests, integration tests, and end-to-end tests. I use Jest for unit testing and
          Supertest for API testing:
        </p>

        <div className="bg-gray-900 text-gray-100 rounded-lg p-4 mb-6 overflow-x-auto">
          <pre className="text-sm">
            {`describe('UserController', () => {
  let userService: jest.Mocked<UserService>;
  let userController: UserController;

  beforeEach(() => {
    userService = mockUserService();
    userController = new UserController(userService);
  });

  it('should create user successfully', async () => {
    const userData = { name: 'John Doe', email: 'john@example.com' };
    userService.create.mockResolvedValue(mockUser);

    const result = await userController.createUser(userData);

    expect(result).toEqual(mockUser);
    expect(userService.create).toHaveBeenCalledWith(userData);
  });
});`}
          </pre>
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Deployment and Monitoring</h2>
        <p className="text-gray-700 mb-4">
          For production deployment, I use Docker containers with proper health checks and implement monitoring with tools like Prometheus
          and Grafana. Rate limiting and API versioning are also essential for production APIs.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
          <h3 className="text-lg font-semibold text-blue-900 mb-2">Key Takeaways</h3>
          <ul className="text-blue-800 space-y-1">
            <li>• Use TypeScript for better code quality and maintainability</li>
            <li>• Implement proper architectural patterns (DI, Repository)</li>
            <li>• Add caching and database optimization early</li>
            <li>• Invest in comprehensive testing and monitoring</li>
            <li>• Plan for scalability from the beginning</li>
          </ul>
        </div>

        <p className="text-gray-700 mt-8">
          Building scalable APIs is an iterative process. Start with solid foundations, measure performance, and optimize based on
          real-world usage patterns. The patterns I've shared here have served me well across multiple production applications.
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
