import BackToHome from '@/components/BackToHome';
import { Metadata } from 'next';

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
        {' '}
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
          Last year, I led the migration of a monolithic e-commerce platform to a microservices architecture. Here&lsquo;s what I learned
          about the technical challenges, organizational changes, and architectural decisions that made this transformation successful.
        </p>
      </header>

      <div className="prose prose-lg max-w-none">
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">The Starting Point</h2>
        <p className="text-gray-700 mb-6">
          Our monolithic application was a typical Node.js/Express app with a PostgreSQL database. It handled user authentication, product
          catalog, inventory management, order processing, and payment integration. While it served us well initially, we were hitting
          several pain points:
        </p>

        <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-6">
          <h3 className="text-lg font-semibold text-red-900 mb-2">Challenges We Faced</h3>
          <ul className="text-red-800 space-y-1">
            <li>• Deployment bottlenecks (single point of failure)</li>
            <li>• Scaling issues (entire app needed to scale for one component)</li>
            <li>• Team coordination problems (multiple teams working on same codebase)</li>
            <li>• Technology lock-in (hard to adopt new technologies)</li>
            <li>• Long development cycles and testing bottlenecks</li>
          </ul>
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Planning the Migration Strategy</h2>
        <p className="text-gray-700 mb-4">
          We adopted the &quot;Strangler Fig&quot; pattern, gradually replacing parts of the monolith with microservices. Here&lsquo;s how we
          approached the planning:
        </p>

        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">1. Domain-Driven Design</h3>
        <p className="text-gray-700 mb-4">
          We started by identifying bounded contexts and designing our services around business capabilities:
        </p>

        <div className="bg-gray-50 rounded-lg p-6 mb-6">
          <h4 className="font-semibold mb-3">Service Boundaries</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <strong>User Service:</strong>
              <ul className="text-gray-700 mt-1">
                <li>• Authentication & Authorization</li>
                <li>• User profile management</li>
                <li>• Password reset</li>
              </ul>
            </div>
            <div>
              <strong>Product Service:</strong>
              <ul className="text-gray-700 mt-1">
                <li>• Product catalog</li>
                <li>• Search and filtering</li>
                <li>• Product recommendations</li>
              </ul>
            </div>
            <div>
              <strong>Order Service:</strong>
              <ul className="text-gray-700 mt-1">
                <li>• Order processing</li>
                <li>• Order history</li>
                <li>• Order status tracking</li>
              </ul>
            </div>
            <div>
              <strong>Payment Service:</strong>
              <ul className="text-gray-700 mt-1">
                <li>• Payment processing</li>
                <li>• Refund handling</li>
                <li>• Payment methods</li>
              </ul>
            </div>
          </div>
        </div>

        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">2. Data Migration Strategy</h3>
        <p className="text-gray-700 mb-4">
          One of the biggest challenges was decomposing the shared database. We used the Database-per-Service pattern:
        </p>

        <div className="bg-gray-900 text-gray-100 rounded-lg p-4 mb-6 overflow-x-auto">
          <pre className="text-sm">
            {`// Data migration approach
const migrationStrategy = {
  phase1: {
    approach: 'Shared Database',
    description: 'Services share the same database initially',
    risk: 'Low',
    complexity: 'Low'
  },
  phase2: {
    approach: 'Database Views',
    description: 'Create service-specific database views',
    risk: 'Medium',
    complexity: 'Medium'
  },
  phase3: {
    approach: 'Separate Databases',
    description: 'Each service gets its own database',
    risk: 'High',
    complexity: 'High'
  }
};

// Example: User service data model
interface UserServiceData {
  users: {
    id: string;
    email: string;
    passwordHash: string;
    profile: UserProfile;
    createdAt: Date;
    updatedAt: Date;
  };
  sessions: {
    id: string;
    userId: string;
    token: string;
    expiresAt: Date;
  };
}`}
          </pre>
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Implementation: Service Communication</h2>
        <p className="text-gray-700 mb-4">We implemented both synchronous and asynchronous communication patterns based on use cases:</p>

        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">API Gateway Pattern</h3>
        <p className="text-gray-700 mb-4">We used an API Gateway to handle cross-cutting concerns and route requests:</p>

        <div className="bg-gray-900 text-gray-100 rounded-lg p-4 mb-6 overflow-x-auto">
          <pre className="text-sm">
            {`// API Gateway implementation with Express
import express from 'express';
import httpProxy from 'http-proxy-middleware';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';

const app = express();

// Security middleware
app.use(helmet());

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
});
app.use('/api/', limiter);

// Authentication middleware
const authenticate = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    const user = await userService.validateToken(token);
    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({ error: 'Unauthorized' });
  }
};

// Route configurations
const routes = [
  {
    path: '/api/users',
    target: 'http://user-service:3001',
    middleware: [authenticate]
  },
  {
    path: '/api/products',
    target: 'http://product-service:3002',
    middleware: []
  },
  {
    path: '/api/orders',
    target: 'http://order-service:3003',
    middleware: [authenticate]
  }
];

// Setup proxy routes
routes.forEach(route => {
  app.use(
    route.path,
    ...route.middleware,
    httpProxy({
      target: route.target,
      changeOrigin: true,
      pathRewrite: { [\`^\${route.path}\`]: '' }
    })
  );
});`}
          </pre>
        </div>

        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Event-Driven Architecture</h3>
        <p className="text-gray-700 mb-4">For asynchronous communication, we implemented an event-driven architecture using RabbitMQ:</p>

        <div className="bg-gray-900 text-gray-100 rounded-lg p-4 mb-6 overflow-x-auto">
          <pre className="text-sm">
            {`// Event system implementation
class EventBus {
  private connection: amqp.Connection;
  private channel: amqp.Channel;

  async connect() {
    this.connection = await amqp.connect(process.env.RABBITMQ_URL);
    this.channel = await this.connection.createChannel();
  }

  async publish(event: string, data: any, options: PublishOptions = {}) {
    const message = {
      id: uuidv4(),
      timestamp: new Date().toISOString(),
      event,
      data,
      ...options
    };

    await this.channel.publish(
      'events',
      event,
      Buffer.from(JSON.stringify(message)),
      {
        persistent: true,
        messageId: message.id,
        timestamp: Date.now()
      }
    );
  }

  async subscribe(event: string, handler: EventHandler) {
    const queue = await this.channel.assertQueue(\`\${event}_queue\`, {
      durable: true
    });

    await this.channel.bindQueue(queue.queue, 'events', event);

    this.channel.consume(queue.queue, async (msg) => {
      if (msg) {
        try {
          const event = JSON.parse(msg.content.toString());
          await handler(event);
          this.channel.ack(msg);
        } catch (error) {
          console.error('Error processing event:', error);
          this.channel.nack(msg, false, true);
        }
      }
    });
  }
}

// Example: Order service listening to payment events
class OrderService {
  constructor(private eventBus: EventBus) {}

  async initialize() {
    await this.eventBus.subscribe('payment.completed', this.handlePaymentCompleted);
    await this.eventBus.subscribe('payment.failed', this.handlePaymentFailed);
  }

  private handlePaymentCompleted = async (event: PaymentEvent) => {
    const order = await this.orderRepository.findById(event.data.orderId);
    if (order) {
      order.status = 'paid';
      order.paidAt = new Date();
      await this.orderRepository.save(order);

      // Trigger fulfillment process
      await this.eventBus.publish('order.ready_for_fulfillment', {
        orderId: order.id,
        items: order.items
      });
    }
  };
}`}
          </pre>
        </div>

        <h2 className="text-2xl font-semibent text-gray-900 mt-8 mb-4">DevOps and Deployment</h2>
        <p className="text-gray-700 mb-4">
          Microservices require robust DevOps practices. Here&lsquo;s how we handled deployment and monitoring:
        </p>

        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Docker and Kubernetes</h3>
        <p className="text-gray-700 mb-4">Each service runs in its own container with Kubernetes for orchestration:</p>

        <div className="bg-gray-900 text-gray-100 rounded-lg p-4 mb-6 overflow-x-auto">
          <pre className="text-sm">
            {`# Dockerfile for a typical service
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .

EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \\
  CMD curl -f http://localhost:3000/health || exit 1

CMD ["npm", "start"]

---
# Kubernetes deployment
apiVersion: apps/v1
kind: Deployment
metadata:
  name: user-service
spec:
  replicas: 3
  selector:
    matchLabels:
      app: user-service
  template:
    metadata:
      labels:
        app: user-service
    spec:
      containers:
      - name: user-service
        image: user-service:latest
        ports:
        - containerPort: 3000
        env:
        - name: DATABASE_URL
          valueFrom:
            secretKeyRef:
              name: user-service-secrets
              key: database-url
        resources:
          requests:
            memory: "256Mi"
            cpu: "250m"
          limits:
            memory: "512Mi"
            cpu: "500m"
        livenessProbe:
          httpGet:
            path: /health
            port: 3000
          initialDelaySeconds: 30
          periodSeconds: 10
        readinessProbe:
          httpGet:
            path: /ready
            port: 3000
          initialDelaySeconds: 5
          periodSeconds: 5`}
          </pre>
        </div>

        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">CI/CD Pipeline</h3>
        <p className="text-gray-700 mb-4">We implemented independent deployment pipelines for each service:</p>

        <div className="bg-gray-900 text-gray-100 rounded-lg p-4 mb-6 overflow-x-auto">
          <pre className="text-sm">
            {`# GitHub Actions workflow
name: Deploy User Service

on:
  push:
    branches: [main]
    paths: ['services/user-service/**']

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    - uses: actions/setup-node@v3
      with:
        node-version: '18'
    - run: npm ci
    - run: npm test
    - run: npm run test:integration

  build-and-deploy:
    needs: test
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    - name: Build Docker image
      run: |
        docker build -t user-service:${'${{ github.sha }}'} ./services/user-service
    - name: Deploy to staging
      run: |
        kubectl set image deployment/user-service user-service=user-service:${'${{ github.sha }}'}
        kubectl rollout status deployment/user-service
    - name: Run smoke tests
      run: npm run test:smoke
    - name: Deploy to production
      if: success()
      run: |
        kubectl set image deployment/user-service user-service=user-service:${'${{ github.sha }}'} -n production`}
          </pre>
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Monitoring and Observability</h2>
        <p className="text-gray-700 mb-4">
          Distributed systems require comprehensive monitoring. We implemented the three pillars of observability:
        </p>

        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Distributed Tracing</h3>
        <p className="text-gray-700 mb-4">Using Jaeger for distributed tracing to track requests across services:</p>

        <div className="bg-gray-900 text-gray-100 rounded-lg p-4 mb-6 overflow-x-auto">
          <pre className="text-sm">
            {`import { initTracer } from 'jaeger-client';
import opentracing from 'opentracing';

const tracer = initTracer({
  serviceName: 'user-service',
  reporter: {
    agentHost: process.env.JAEGER_AGENT_HOST || 'localhost'
  }
});

// Middleware to create spans for HTTP requests
const tracingMiddleware = (req, res, next) => {
  const span = tracer.startSpan(\`HTTP \${req.method} \${req.path}\`);

  span.setTag('http.method', req.method);
  span.setTag('http.url', req.url);
  span.setTag('user.id', req.user?.id);

  req.span = span;

  res.on('finish', () => {
    span.setTag('http.status_code', res.statusCode);
    if (res.statusCode >= 400) {
      span.setTag('error', true);
    }
    span.finish();
  });

  next();
};

// Example: Tracing database calls
class UserRepository {
  async findById(id: string, parentSpan?: any) {
    const span = tracer.startSpan('db.query', {
      childOf: parentSpan
    });

    span.setTag('db.type', 'postgresql');
    span.setTag('db.statement', 'SELECT * FROM users WHERE id = $1');

    try {
      const result = await this.db.query('SELECT * FROM users WHERE id = $1', [id]);
      span.setTag('db.rows_affected', result.rowCount);
      return result.rows[0];
    } catch (error) {
      span.setTag('error', true);
      span.log({ error: error.message });
      throw error;
    } finally {
      span.finish();
    }
  }
}`}
          </pre>
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Lessons Learned</h2>

        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
          <h3 className="text-lg font-semibold text-yellow-900 mb-2">What Worked Well</h3>
          <ul className="text-yellow-800 space-y-1">
            <li>• Gradual migration approach reduced risk</li>
            <li>• Team autonomy improved development velocity</li>
            <li>• Independent scaling saved infrastructure costs</li>
            <li>• Technology diversity enabled better tool selection</li>
            <li>• Fault isolation improved system reliability</li>
          </ul>
        </div>

        <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-6">
          <h3 className="text-lg font-semibold text-red-900 mb-2">Challenges We Faced</h3>
          <ul className="text-red-800 space-y-1">
            <li>• Distributed transactions complexity</li>
            <li>• Network latency and reliability issues</li>
            <li>• Debugging across multiple services</li>
            <li>• Data consistency challenges</li>
            <li>• Operational complexity increased significantly</li>
          </ul>
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Key Recommendations</h2>
        <p className="text-gray-700 mb-4">
          Based on our experience, here are my recommendations for anyone considering a similar migration:
        </p>

        <div className="space-y-4 mb-6">
          <div className="border-l-4 border-blue-400 pl-4">
            <h4 className="font-semibold text-blue-900">Start Small</h4>
            <p className="text-blue-800">Begin with a non-critical service to learn the patterns and tools.</p>
          </div>

          <div className="border-l-4 border-green-400 pl-4">
            <h4 className="font-semibold text-green-900">Invest in Tooling</h4>
            <p className="text-green-800">Good monitoring, logging, and deployment tools are essential for success.</p>
          </div>

          <div className="border-l-4 border-purple-400 pl-4">
            <h4 className="font-semibold text-purple-900">Team Structure</h4>
            <p className="text-purple-800">Align team boundaries with service boundaries for better ownership.</p>
          </div>

          <div className="border-l-4 border-orange-400 pl-4">
            <h4 className="font-semibold text-orange-900">Don&lsquo;t Rush</h4>
            <p className="text-orange-800">Take time to get each service right before moving to the next one.</p>
          </div>
        </div>

        <p className="text-gray-700 mt-8">
          The journey from monolith to microservices is challenging but rewarding. It&lsquo;s not just a technical transformation—it&lsquo;s an
          organizational one. The key is to approach it methodically, learn from each step, and be prepared to adapt your strategy as you
          go.
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
