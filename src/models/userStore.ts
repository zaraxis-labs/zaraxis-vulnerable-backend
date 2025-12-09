import { User, UserRole } from './User';
import crypto from 'crypto';

// In-memory user store (replace with database in production)
const users: User[] = [];

// MD5 hash function (weak - for learning purposes only)
const hashPassword = (password: string): string => {
  return crypto.createHash('md5').update(password).digest('hex');
};

export const userStore = {
  async findByUsername(username: string): Promise<User | null> {
    return users.find(u => u.username === username) || null;
  },

  async findByEmail(email: string): Promise<User | null> {
    return users.find(u => u.email === email) || null;
  },

  async findById(id: string): Promise<User | null> {
    return users.find(u => u.id === id) || null;
  },

  async create(username: string, email: string, password: string, role: UserRole = 'user'): Promise<User> {
    // Check if user already exists
    const existingUser = await this.findByUsername(username);
    if (existingUser) {
      throw new Error('Username already exists');
    }

    const existingEmail = await this.findByEmail(email);
    if (existingEmail) {
      throw new Error('Email already exists');
    }

    // Hash password using MD5 (weak - for learning purposes)
    const hashedPassword = hashPassword(password);

    const newUser: User = {
      id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
      username,
      email,
      password: hashedPassword,
      role,
      createdAt: new Date(),
    };

    users.push(newUser);
    return newUser;
  },

  async verifyPassword(user: User, password: string): Promise<boolean> {
    const hashedInput = hashPassword(password);
    return hashedInput === user.password;
  },
};

