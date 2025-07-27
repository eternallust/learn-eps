import { TopicProgress } from "@app-types/lesson";

/**
 * Calculate lesson completion percentage
 */
export const calculateLessonProgress = (
  completedLessons: number,
  totalLessons: number
): number => {
  if (totalLessons === 0) return 0;
  return Math.round((completedLessons / totalLessons) * 100);
};

/**
 * Format study time in readable format
 */
export const formatStudyTime = (timeInMinutes: number): string => {
  if (timeInMinutes < 60) {
    return `${timeInMinutes} menit`;
  }

  const hours = Math.floor(timeInMinutes / 60);
  const minutes = timeInMinutes % 60;

  if (minutes === 0) {
    return `${hours} jam`;
  }

  return `${hours} jam ${minutes} menit`;
};

/**
 * Get category icon based on lesson category
 */
export const getCategoryIcon = (category: string): string => {
  switch (category) {
    case "vocabulary":
      return "📝";
    case "grammar":
      return "📖";
    case "conversation":
      return "💬";
    case "listening":
      return "🎧";
    default:
      return "📚";
  }
};

/**
 * Check if topic is completed
 */
export const isTopicCompleted = (progress: TopicProgress): boolean => {
  return progress.lessonsCompleted === progress.totalLessons;
};
