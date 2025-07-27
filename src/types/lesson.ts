import { BaseEntity, Progress } from "./common";

export interface Topic extends BaseEntity {
  title: string;
  description: string;
  category: "vocabulary" | "grammar" | "conversation" | "listening";
  level: "basic" | "intermediate" | "advanced";
  lessons: Lesson[];
  estimatedTime: number; // in minutes
}

export interface Lesson extends BaseEntity {
  topicId: string;
  title: string;
  content: string;
  type: "text" | "audio" | "video" | "interactive";
  order: number;
  vocabulary?: VocabularyItem[];
  exercises?: Exercise[];
}

export interface VocabularyItem extends BaseEntity {
  korean: string;
  romanization: string;
  indonesian: string;
  example?: string;
  audioUrl?: string;
  category: string;
}

export interface Exercise extends BaseEntity {
  lessonId: string;
  type: "translate" | "match" | "fill-blank" | "pronunciation";
  question: string;
  correctAnswer: string;
  options?: string[];
  points: number;
}

export interface LessonProgress extends Progress {
  lessonId: string;
  userId: string;
  timeSpent: number;
  lastAccessedAt: Date;
}

export interface TopicProgress extends Progress {
  topicId: string;
  userId: string;
  lessonsCompleted: number;
  totalLessons: number;
  overallScore: number;
}
