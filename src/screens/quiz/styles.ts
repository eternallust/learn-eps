import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradientBackground: {
    flex: 1,
  },
  headerContainer: {
    backgroundColor: "#192a56",
    paddingVertical: 20,
    paddingHorizontal: 16,
  },
  headerContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerLeft: {
    flex: 1,
    alignItems: "flex-start",
  },
  headerCenter: {
    flex: 2,
    alignItems: "center",
  },
  headerRight: {
    flex: 1,
    alignItems: "flex-end",
  },
  headerTitle: {
    color: "white",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 12,
  },
  backButton: {
    padding: 8,
  },
  backIcon: {
    color: "#6B21A8",
    fontSize: 20,
    fontWeight: "600",
  },
  // headerTitle: {
  //   fontSize: 18,
  //   fontWeight: "600",
  //   color: "#1F2937",
  // },
  timerContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    backgroundColor: "#FEF3C7",
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 20,
    marginBottom: 12,
    marginTop: 12,
    width: 70
  },
  timerIcon: {
    color: "#F59E0B",
    fontSize: 16,
  },
  timerText: {
    color: "#78716C",
    fontSize: 14,
    fontWeight: "600",
  },
  timerWarning: {
    color: "#DC2626",
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  questionCounter: {
    color: "#192a56",
    fontSize: 14,
    fontWeight: "500",
    marginVertical: 12,
  },
  progressBarContainer: {
    height: 8,
    backgroundColor: "#E5E7EB",
    borderRadius: 4,
    marginBottom: 20,
    overflow: "hidden",
  },
  progressBarFill: {
    height: "100%",
    borderRadius: 4,
  },
  questionText: {
    color: "#1F2937",
    fontSize: 18,
    fontWeight: "bold",
    lineHeight: 26,
    marginBottom: 24,
  },
  questionImage: {
    width: "100%",
    height: 200,
    resizeMode: "contain",
    marginBottom: 24,
    borderRadius: 12,
  },
  optionsContainer: {
    gap: 12,
  },
  optionButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 16,
    borderWidth: 1.5,
    borderColor: "#E5E7EB",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  selectedOption: {
    backgroundColor: "#9333EA",
    borderColor: "#9333EA",
  },
  optionText: {
    color: "#1F2937",
    fontSize: 16,
    fontWeight: "500",
    flex: 1,
  },
  selectedOptionText: {
    color: "#FFFFFF",
  },
  checkIcon: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
  },
  checkIconText: {
    color: "#9333EA",
    fontWeight: "bold",
    fontSize: 14,
  },
  radioCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#D1D5DB",
    backgroundColor: "transparent",
  },
  bottomContainer: {
    padding: 20,
    paddingBottom: 32,
  },
  nextButton: {
    backgroundColor: "#1F2937",
    borderRadius: 12,
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 8,
  },
  disabledButton: {
    backgroundColor: "#9CA3AF",
  },
  nextButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
  // Result screen styles
  resultContainer: {
    flex: 1,
    padding: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  resultTitle: {
    marginBottom: 16,
    color: "#9333EA",
    fontSize: 24,
  },
  resultScore: {
    marginBottom: 24,
    color: "#6B21A8",
    fontSize: 20,
  },
  resultText: {
    textAlign: "center",
    marginBottom: 32,
    color: "#4B5563",
    lineHeight: 24,
  },
  restartButton: {
    backgroundColor: "#9333EA",
    borderRadius: 12,
    padding: 16,
    alignItems: "center",
    width: "100%",
    marginBottom: 16,
  },
  restartButtonText: {
    color: "#FFFFFF",
    fontWeight: "600",
  },
  homeButton: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 16,
    alignItems: "center",
    width: "100%",
    borderWidth: 1.5,
    borderColor: "#E5E7EB",
  },
  homeButtonText: {
    color: "#1F2937",
    fontWeight: "600",
  },
  // Legacy styles (keeping for compatibility)
  gradientHeader: {
    paddingTop: 16,
    paddingBottom: 16,
    paddingHorizontal: 16,
    backgroundColor: "#2A4ECA",
  },
  transparentHeader: {
    backgroundColor: "transparent",
  },
  quizHeaderContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
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
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#E5E7EB",
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
});
