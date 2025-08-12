const dependencyInjectionCode = `
export class Container {
  private services = new Map<string, () => any>();

  register<T>(token: string, factory: () => T): void {
    this.services.set(token, factory);
  }

  resolve<T>(token: string): T {
    const factory = this.services.get(token);
    if (!factory) throw new Error(\`Service \${token} not found\`);
    return factory();
  }
}
`;

const repositoryPatternCode = `
interface UserRepository {
  findById(id: string): Promise<User | null>;
  create(userData: CreateUserDto): Promise<User>;
  update(id: string, userData: UpdateUserDto): Promise<User>;
  delete(id: string): Promise<void>;
}

class MongoUserRepository implements UserRepository {
  // MongoDB implementation
  async findById(id: string): Promise<User | null> {
    // MongoDB logic here
    return null;
  }

  async create(userData: CreateUserDto): Promise<User> {
    // MongoDB logic here
    return {} as User;
  }

  async update(id: string, userData: UpdateUserDto): Promise<User> {
    // MongoDB logic here
    return {} as User;
  }

  async delete(id: string): Promise<void> {
    // MongoDB logic here
  }
}

class PostgresUserRepository implements UserRepository {
  // PostgreSQL implementation
  async findById(id: string): Promise<User | null> {
    // PostgreSQL logic here
    return null;
  }

  async create(userData: CreateUserDto): Promise<User> {
    // PostgreSQL logic here
    return {} as User;
  }

  async update(id: string, userData: UpdateUserDto): Promise<User> {
    // PostgreSQL logic here
    return {} as User;
  }

  async delete(id: string): Promise<void> {
    // PostgreSQL logic here
  }
}
`;

const cachingLayerCode = `
class CacheService {
  private redis: Redis;

  constructor(redisClient: Redis) {
    this.redis = redisClient;
  }

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
}
`;

const errorLoggingCode = `
import { Request, Response, NextFunction } from 'express';

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
};
`;

const userControllerTestCode = `
describe('UserController', () => {
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
});
`;

export { dependencyInjectionCode, repositoryPatternCode, cachingLayerCode, errorLoggingCode, userControllerTestCode };
