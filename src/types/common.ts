export interface BaseEntity {
  id: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface User extends BaseEntity {
  name: string;
  email: string;
  avatar?: string;
  level?: number;
  totalScore?: number;
}

export interface Progress {
  completed: boolean;
  score?: number;
  completedAt?: Date;
  attempts: number;
}
