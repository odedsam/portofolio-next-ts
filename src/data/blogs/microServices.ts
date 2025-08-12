const dataMigrationCode = `
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
}
`;

const dataGatewayPatternCode = `
import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';
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
    createProxyMiddleware({
      target: route.target,
      changeOrigin: true,
      pathRewrite: { [\`^\${route.path}\`]: '' }
    })
  );
});
`;

const eventDrivenArchitectureCode = `
import amqp from 'amqplib';
import { v4 as uuidv4 } from 'uuid';

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

      await this.eventBus.publish('order.ready_for_fulfillment', {
        orderId: order.id,
        items: order.items
      });
    }
  };
}
`;

const dockerKubernetesCode = `
# Dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm && pnpm install --frozen-lockfile

COPY . .

RUN pnpm build

EXPOSE 3000

CMD ["pnpm", "start"]

---

# Kubernetes deployment.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: myapp-deployment
spec:
  replicas: 3
  selector:
    matchLabels:
      app: myapp
  template:
    metadata:
      labels:
        app: myapp
    spec:
      containers:
        - name: myapp
          image: myregistry/myapp:latest
          ports:
            - containerPort: 3000
          env:
            - name: NODE_ENV
              value: "production"
          resources:
            limits:
              cpu: "500m"
              memory: "256Mi"
            requests:
              cpu: "250m"
              memory: "128Mi"

---

# Kubernetes service.yaml
apiVersion: v1
kind: Service
metadata:
  name: myapp-service
spec:
  type: LoadBalancer
  selector:
    app: myapp
  ports:
    - protocol: TCP
      port: 80
      targetPort: 3000
`;

const ciCdPipeline = `
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
          docker build -t user-service:\${{ github.sha }} ./services/user-service
      - name: Deploy to staging
        run: |
          kubectl set image deployment/user-service user-service=user-service:\${{ github.sha }}
          kubectl rollout status deployment/user-service
      - name: Run smoke tests
        run: npm run test:smoke
      - name: Deploy to production
        if: success()
        run: |
          kubectl set image deployment/user-service user-service=user-service:\${{ github.sha }} -n production
`;

const distributedTracingCode = `
import { initTracer } from 'jaeger-client';
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
}
`;

export {
  dataMigrationCode,
  ciCdPipeline,
  dataGatewayPatternCode,
  eventDrivenArchitectureCode,
  distributedTracingCode,
  dockerKubernetesCode,
};
