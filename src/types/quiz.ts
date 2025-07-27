import { BaseEntity, Progress } from "./common";

export interface Quiz extends BaseEntity {
  title: string;
  description: string;
  level: "basic" | "intermediate" | "advanced";
  questions: Question[];
  timeLimit?: number; // in minutes
  passingScore: number;
}

export interface Question extends BaseEntity {
  text: string;
  type: "multiple-choice" | "true-false" | "fill-blank";
  options?: string[];
  correctAnswer: string | number;
  explanation?: string;
  points: number;
}

export interface QuizAttempt extends BaseEntity {
  quizId: string;
  userId: string;
  answers: Answer[];
  score: number;
  timeSpent: number; // in seconds
  completedAt: Date;
}

export interface Answer {
  questionId: string;
  userAnswer: string | number;
  isCorrect: boolean;
  timeSpent: number;
}

export interface QuizProgress extends Progress {
  quizId: string;
  userId: string;
  bestScore: number;
  lastAttemptAt: Date;
}
