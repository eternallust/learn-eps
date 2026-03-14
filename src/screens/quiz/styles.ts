import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradientBackground: {
    flex: 1,
  },
  headerContainer: {
    paddingTop: 20,
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
  resultBackground: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  confettiOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 10,
  },
  confettiAnimation: {
    width: "100%",
    height: "100%",
  },
  resultContainer: {
    flex: 1,
    padding: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  lottieContainer: {
    width: 280,
    height: 280,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 24,
  },
  lottieAnimation: {
    width: 400,
    height: 400,
  },
  pointsText: {
    fontSize: 36,
    color: "#4338CA",
    marginBottom: 16,
  },
  congratsTitle: {
    color: "#1F2937",
    textAlign: "center",
    marginBottom: 12,
  },
  congratsSubtitle: {
    textAlign: "center",
    color: "#9CA3AF",
    lineHeight: 22,
    marginBottom: 40,
  },
  seePointsButton: {
    backgroundColor: "#4338CA",
    borderRadius: 30,
    paddingVertical: 16,
    paddingHorizontal: 80,
    alignItems: "center",
    shadowColor: "#4338CA",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  seePointsButtonText: {
    color: "#FFFFFF",
    fontWeight: "600",
    fontSize: 16,
  },
  tryAgainButton: {
    marginTop: 16,
    paddingVertical: 12,
    paddingHorizontal: 40,
  },
  tryAgainButtonText: {
    color: "#4338CA",
    fontWeight: "600",
    fontSize: 14,
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
  // Listening & Audio Player styles
  listeningContainer: {
    marginTop: 16,
  },
  listeningText: {
    color: "#4B5563",
    fontSize: 14,
    lineHeight: 22,
    marginBottom: 16,
    fontStyle: "italic",
  },
  audioPlayerContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F3F4F6",
    borderRadius: 12,
    padding: 12,
    gap: 12,
  },
  playPauseButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#4338CA",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#4338CA",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
  },
  playPauseIcon: {
    color: "#FFFFFF",
    fontSize: 18,
  },
  audioSliderContainer: {
    flex: 1,
  },
  audioSlider: {
    width: "100%",
    height: 40,
  },
  audioTimeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 4,
    marginTop: -8,
  },
  audioTimeText: {
    color: "#6B7280",
    fontSize: 12,
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
