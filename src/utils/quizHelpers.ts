import { Answer } from "@app-types/quiz";

/**
 * Calculate quiz score based on answers
 */
export const calculateQuizScore = (
  answers: Answer[],
  totalPoints: number
): number => {
  const earnedPoints = answers.reduce((total, answer) => {
    return total + (answer.isCorrect ? 10 : 0); // Assuming 10 points per correct answer
  }, 0);

  return Math.round((earnedPoints / totalPoints) * 100);
};

/**
 * Check if quiz is passed based on score and passing criteria
 */
export const isQuizPassed = (score: number, passingScore: number): boolean => {
  return score >= passingScore;
};

/**
 * Format quiz time in minutes and seconds
 */
export const formatQuizTime = (timeInSeconds: number): string => {
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = timeInSeconds % 60;
  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
};

/**
 * Get difficulty level badge color
 */
export const getDifficultyColor = (
  level: "basic" | "intermediate" | "advanced"
): string => {
  switch (level) {
    case "basic":
      return "#34C759"; // Green
    case "intermediate":
      return "#FF9500"; // Orange
    case "advanced":
      return "#FF3B30"; // Red
    default:
      return "#007AFF"; // Blue
  }
};
