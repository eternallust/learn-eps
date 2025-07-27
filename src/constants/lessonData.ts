import { Lesson, Topic, VocabularyItem } from "@app-types/lesson";

const basicVocabulary: VocabularyItem[] = [
  {
    id: "vocab1",
    korean: "안녕하세요",
    romanization: "annyeonghaseyo",
    indonesian: "Halo/Selamat",
    example: "안녕하세요! 만나서 반갑습니다.",
    category: "greeting",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "vocab2",
    korean: "감사합니다",
    romanization: "gamsahamnida",
    indonesian: "Terima kasih",
    example: "도움 주셔서 감사합니다.",
    category: "greeting",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

const basicLessons: Lesson[] = [
  {
    id: "lesson1",
    topicId: "basic-greetings",
    title: "Salam dan Perkenalan",
    content:
      "Pelajari cara menyapa dan memperkenalkan diri dalam bahasa Korea.",
    type: "text",
    order: 1,
    vocabulary: basicVocabulary,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

export const LESSON_DATA: Topic[] = [
  {
    id: "basic-greetings",
    title: "Salam Dasar",
    description: "Pelajari salam dan perkenalan dalam bahasa Korea",
    category: "vocabulary",
    level: "basic",
    lessons: basicLessons,
    estimatedTime: 30,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];
