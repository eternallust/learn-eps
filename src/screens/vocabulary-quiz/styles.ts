import { COLORS } from "@/constants/theme";
import { Dimensions, StyleSheet } from "react-native";

const { height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: "#ffffff",
    borderRadius: 16,
    marginHorizontal: 16,
    borderWidth: 1,
    borderColor: "#E2E4F0",
    overflow: "hidden",
  },
  slideClip: {
    overflow: "hidden",
    paddingBottom: 8,
  },
  section: {
    paddingVertical: 24,
  },
  title: {
    color: "#000000",
    marginBottom: 8,
    textAlign: "center",
  },
  subtitle: {
    color: "#666666",
    textAlign: "center",
    marginBottom: 32,
    lineHeight: 22,
  },
  quizList: {
    gap: 16,
  },
  quizButton: {
    marginBottom: 12,
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    marginVertical: 8,
    marginHorizontal: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.07,
    shadowRadius: 8,
    elevation: 3,
    height: height * 0.35,
  },
  customHeader: {
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    gap: 12,
  },
  backButton: {
    width: 36,
    height: 36,
    borderRadius: 12,
    backgroundColor: "#ECEEFF",
    alignItems: "center",
    justifyContent: "center",
  },
  titleContainer: {
    flex: 1,
  },
  headerTitle: {
    fontSize: 18,
    fontFamily: "Poppins-Bold",
    marginBottom: 2,
  },
  headerSubtitle: {
    marginTop: -8,
    fontSize: 12,
    fontFamily: "Poppins-Regular",
    color: COLORS.primarydark,
  },
  headerAvatarButton: {
    borderRadius: 21,
    backgroundColor: "white",
    padding: 1,
  },
  headerAvatar: {
    width: 42,
    height: 42,
    borderRadius: 21,
  },
  cardHeader: {
    height: "14%",
    backgroundColor: "#A0522D",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  cardBottom: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },
  koreanText: {
    fontSize: 78,
    color: COLORS.primarydark,
    textAlign: "center",
    marginBottom: 12,
    paddingHorizontal: 12,
  },
  cardContent: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  // ── Progress ──────────────────────────────────────────────────
  questionCounterRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 16,
    marginBottom: 8,
  },
  questionCounter: {
    color: "#4A4A6A",
    fontFamily: "Poppins-Medium"
  },
  questionCounterHighlight: {
    color: "#1A2558",
  },
  progressTrack: {
    height: 8,
    marginBottom: 14,
    backgroundColor: "#E2E4F0",
    borderRadius: 4,
    overflow: "hidden",
  },
  progressFill: {
    height: 8,
    backgroundColor: "#1A2558",
    borderRadius: 4,
  },

  // ── Pilihan ganda 2x2 ─────────────────────────────────────────
  optionsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
    marginTop: 16,
    marginBottom: 24,
  },
  optionBtnFull: {
    width: "100%",
  },
  optionBtn: {
    width: "48%",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    paddingVertical: 14,
    paddingHorizontal: 14,
    borderWidth: 1.5,
    borderColor: "#E2E4F0",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  optionBtnSelected: {
    borderColor: "#1A2558",
    backgroundColor: "#EEF0FF",
  },
  optionLabelWrap: {
    width: 28,
    height: 28,
    borderRadius: 8,
    backgroundColor: "#F0F1F8",
    alignItems: "center",
    justifyContent: "center",
  },
  optionLabelWrapSelected: {
    backgroundColor: "#1A2558",
  },
  optionLabel: {
    color: "#1A2558",
    fontSize: 13,
  },
  optionLabelSelected: {
    color: "#FFFFFF",
  },
  optionText: {
    flex: 1,
    color: "#4A4A6A",
    fontSize: 13,
  },
  optionTextSelected: {
    color: "#1A2558",
  },
  optionBtnCorrect: {
    borderColor: "#218c74",
    backgroundColor: "#F0FDF4",
  },
  optionBtnWrong: {
    borderColor: "#b33939",
    backgroundColor: "#FEF2F2",
  },
  optionLabelWrapCorrect: {
    backgroundColor: "#218c74",
  },
  optionLabelWrapWrong: {
    backgroundColor: "#DC2626",
  },
  optionTextCorrect: {
    color: "#16A34A",
  },
  optionTextWrong: {
    color: "#DC2626",
  },

  // ── Feedback banner ───────────────────────────────────────────
  feedbackBanner: {
    borderRadius: 12,
    borderWidth: 1.5,
    padding: 12,
    gap: 8,
    marginBottom: 10,
  },
  feedbackCorrect: {
    backgroundColor: "#F0FDF4",
    borderColor: "#16A34A",
  },
  feedbackWrong: {
    backgroundColor: "#FEF2F2",
    borderColor: "#DC2626",
  },
  feedbackTitleRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  feedbackIconWrap: {
    width: 22,
    height: 22,
    borderRadius: 11,
    alignItems: "center",
    justifyContent: "center",
  },
  feedbackIconCorrect: {
    backgroundColor: "#16A34A",
  },
  feedbackIconWrong: {
    backgroundColor: "#DC2626",
  },
  feedbackTitle: {
    fontSize: 15,
  },
  feedbackTitleCorrect: {
    color: "#15803D",
  },
  feedbackTitleWrong: {
    color: "#DC2626",
  },
  feedbackHintRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    backgroundColor: "white",
    borderRadius: 8,
    paddingVertical: 6,
    paddingHorizontal: 10,
  },
  feedbackHint: {
    color: "#92400E",
    fontSize: 13,
    flex: 1,
  },

  // ── Submit button ─────────────────────────────────────────────
  submitWrapper: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "transparent",
  },
  submitBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    backgroundColor: "#1A2558",
    paddingVertical: 16,
    borderRadius: 14,
    shadowColor: "#1A2558",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  submitBtnDisabled: {
    backgroundColor: "#C5C8DC",
    shadowOpacity: 0,
    elevation: 0,
  },
  submitBtnText: {
    color: "#FFFFFF",
    fontSize: 15,
  },
});

