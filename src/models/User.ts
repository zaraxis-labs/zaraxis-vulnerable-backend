export type UserRole = 'user' | 'admin';

export interface User {
  id: string;
  username: string;
  email: string;
  password: string; // hashed password
  role: UserRole;
  createdAt: Date;
}

export interface UserPayload {
  id: string;
  username: string;
  email: string;
  role: UserRole;
}

