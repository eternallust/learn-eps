import { StyleSheet } from "react-native";
import { COLORS } from "@constants/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  gradientHeader: {
    paddingTop: 16,
    paddingBottom: 16,
    paddingHorizontal: 16,
    backgroundColor: "#2A4ECA",
  },
  transparentHeader: {
    backgroundColor: "transparent",
  },
  headerTitle: {
    color: "#FFFFFF",
  },
  quizHeaderContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  questionCounter: {
    color: "#FFFFFF",
  },
  timerText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  timerContainer: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 6,
    alignItems: "center",
    justifyContent: "center",
  },
  progressContainer: {
    height: 6,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    borderRadius: 0,
  },
  progressBar: {
    height: 6,
    backgroundColor: "#FFFFFF",
    borderRadius: 0,
  },
  questionContainer: {
    padding: 24,
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    marginHorizontal: 16,
    marginTop: -20,
    marginBottom: 16,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
  },
  questionText: {
    marginBottom: 16,
    color: COLORS.text,
    textAlign: "center",
    fontSize: 18,
  },
  questionImage: {
    width: "100%",
    height: 200,
    resizeMode: "contain",
    marginBottom: 16,
    borderRadius: 8,
  },
  optionsContainer: {
    marginHorizontal: 16,
    marginBottom: 16,
  },
  optionButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#E0E0E0",
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  selectedOption: {
    backgroundColor: "#4CAF50",
    borderColor: "#4CAF50",
  },
  correctOption: {
    backgroundColor: "#E8F5E9",
    borderColor: "#4CAF50",
  },
  incorrectOption: {
    backgroundColor: "#FFEBEE",
    borderColor: "#F44336",
  },
  optionIndex: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "#E0E0E0",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  selectedOptionIndex: {
    backgroundColor: "#2196F3",
  },
  correctOptionIndex: {
    backgroundColor: "#4CAF50",
  },
  incorrectOptionIndex: {
    backgroundColor: "#F44336",
  },
  optionIndexText: {
    color: "#FFFFFF",
  },
  optionText: {
    flex: 1,
    color: COLORS.text,
    fontSize: 16,
  },
  selectedOptionText: {
    color: "#FFFFFF",
  },
  checkIcon: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
  },
  bottomContainer: {
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: "#E0E0E0",
    backgroundColor: COLORS.surface,
  },
  nextButton: {
    backgroundColor: "#1e3c72",
    borderRadius: 8,
    padding: 16,
    alignItems: "center",
  },
  disabledButton: {
    backgroundColor: "#CCCCCC",
  },
  nextButtonText: {
    color: "#FFFFFF",
  },
  resultContainer: {
    flex: 1,
    padding: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  resultTitle: {
    marginBottom: 16,
    color: COLORS.primary,
  },
  resultScore: {
    marginBottom: 24,
    color: COLORS.primarydark,
  },
  resultText: {
    textAlign: "center",
    marginBottom: 32,
    color: COLORS.text,
    lineHeight: 24,
  },
  restartButton: {
    backgroundColor: COLORS.primary,
    borderRadius: 8,
    padding: 16,
    alignItems: "center",
    width: "100%",
    marginBottom: 16,
  },
  restartButtonText: {
    color: "#FFFFFF",
  },
  homeButton: {
    backgroundColor: "#F5F5F5",
    borderRadius: 8,
    padding: 16,
    alignItems: "center",
    width: "100%",
    borderWidth: 1,
    borderColor: "#E0E0E0",
  },
  homeButtonText: {
    color: COLORS.text,
  },
});