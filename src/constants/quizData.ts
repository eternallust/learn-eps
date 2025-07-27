import { Question, Quiz } from "@app-types/quiz";

const basicQuestions: Question[] = [
  {
    id: "q1",
    text: 'Apa arti dari "안녕하세요" dalam bahasa Indonesia?',
    type: "multiple-choice",
    options: ["Selamat pagi", "Halo/Selamat", "Selamat malam", "Sampai jumpa"],
    correctAnswer: 1,
    points: 10,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "q2",
    text: 'Bagaimana cara mengucapkan "감사합니다" dalam romanisasi?',
    type: "multiple-choice",
    options: ["Gamsahamnida", "Kamsahamnida", "Gamsahabnida", "Kamsahabnida"],
    correctAnswer: 0,
    points: 10,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

export const QUIZ_DATA: Quiz[] = [
  {
    id: "basic-quiz",
    title: "Quiz Dasar EPS-TOPIK",
    description: "Quiz dasar untuk pemula bahasa Korea",
    level: "basic",
    questions: basicQuestions,
    timeLimit: 30,
    passingScore: 70,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];
