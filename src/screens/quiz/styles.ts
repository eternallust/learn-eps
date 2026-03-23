import { StyleSheet } from "react-native";

// ── Palet warna utama ────────────────────────────────────────────────────────
const C = {
  bg: "#E5F2FF", // blue background
  cardBg: "#FFFFFF",
  cardAccent: "#9B6340", // coklat terracotta
  navyDark: "#0D1B4B", // teks utama gelap
  navyMid: "#1B3A6B", // progress remaining (biru tua)
  crimson: "#C41E3A", // progress answered (merah)
  purple: "#7C3AED",
  purpleLight: "#E5F2FF",
  purpleSoft: "#B3D4FF",
  gray100: "#F3F4F6",
  gray200: "#E5E7EB",
  gray400: "#9CA3AF",
  gray600: "#4B5563",
  white: "#FFFFFF",
};

export const styles = StyleSheet.create({
  // ── Root ────────────────────────────────────────────────────────────────────
  root: {
    flex: 1,
    overflow: "hidden",
  },

  // ── Header ──────────────────────────────────────────────────────────────────
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 5,
    backgroundColor: C.white,
    borderBottomWidth: 1,
    borderBottomColor: "#E2E4F0",
  },
  headerLeft: {
    flex: 2,
    flexDirection: "row",
    alignItems: "center",
  },
  headerTitle: {
    color: C.navyDark,
    fontSize: 14,
  },
  timerBadge: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: C.purpleLight,
    borderWidth: 1,
    borderColor: C.purpleSoft,
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 3,
  },
  timerBadgeWarning: {
    borderColor: "#FCA5A5",
    backgroundColor: "#FEF2F2",
  },
  timerText: {
    color: C.purple,
    fontSize: 13,
  },
  timerWarning: {
    color: "#DC2626",
  },
  headerRight: {
    flex: 2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    gap: 4,
  },
  headerIconBtn: {
    width: 28,
    height: 28,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: C.purpleSoft,
    backgroundColor: C.purpleLight,
    justifyContent: "center",
    alignItems: "center",
  },

  // ── Body ────────────────────────────────────────────────────────────────────
  /** Membungkus landscapeBody; padding horizontal aman hanya di sini */
  bodySafeHorizontal: {
    flex: 1,
    backgroundColor: "#f0f3fb",
  },
  landscapeBody: {
    flex: 1,
    flexDirection: "row",
    padding: 10,
    gap: 12,
  },

  // ── Panel Kiri ──────────────────────────────────────────────────────────────
  leftPanel: {
    flex: 1,
    gap: 10,
    borderRadius: 16,
    shadowColor: "#1a2558",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 12,
    elevation: 6,
  },

  // Counter + progress tipis di atas kartu
  questionMeta: {
    gap: 6,
  },
  questionMetaText: {
    color: C.navyDark,
    fontSize: 13,
  },
  questionMetaBold: {
    color: C.navyDark,
    fontSize: 13,
  },
  metaProgressTrack: {
    height: 6,
    backgroundColor: C.gray200,
    borderRadius: 3,
    overflow: "hidden",
  },
  metaProgressFill: {
    height: "100%",
    backgroundColor: C.navyMid,
    borderRadius: 3,
  },

  // Kartu soal (tanpa shadow — shadow + opacity animasi = artefak/halo di RN)
  questionCard: {
    flex: 1,
    backgroundColor: C.cardBg,
    borderRadius: 16,
    overflow: "hidden",
  },
  questionCardAccent: {
    height: 56,
    backgroundColor: C.cardAccent,
  },
  /** Isi kartu yang dianimasikan (bukan border/kartu luarnya) */
  cardInnerAnimated: {
    flex: 1,
  },
  questionCardBody: {
    padding: 20,
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  questionText: {
    color: C.navyDark,
    fontSize: 22,
    lineHeight: 32,
    textAlign: "center",
  },
  questionImage: {
    width: "100%",
    height: 130,
    resizeMode: "contain",
    marginTop: 12,
    borderRadius: 8,
  },

  // Dua warna progress di bawah kartu
  twoToneBar: {
    height: 8,
    flexDirection: "row",
  },
  toneAnswered: {
    backgroundColor: C.crimson,
  },
  toneRemaining: {
    backgroundColor: C.navyMid,
  },

  // ── Panel Kanan ─────────────────────────────────────────────────────────────
  rightPanel: {
    flex: 1,
    borderRadius: 16,
    padding: 16,
    shadowColor: "#1a2558",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 12,
    elevation: 6,
  },
  selectOptionTitle: {
    color: C.navyDark,
    fontSize: 14,
    marginBottom: 12,
  },

  // Grid 2 kolom
  optionsGrid: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  optionButton: {
    width: "48%",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: C.white,
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderWidth: 1.5,
    borderColor: C.gray200,
    gap: 10,
  },
  optionButtonSelected: {
    borderColor: "#1A2558",
    backgroundColor: "#EEF0FF",
  },
  optionBadge: {
    width: 30,
    height: 30,
    borderRadius: 8,
    backgroundColor: C.gray100,
    justifyContent: "center",
    alignItems: "center",
  },
  optionBadgeSelected: {
    backgroundColor: "#1A2558",
  },
  optionBadgeText: {
    color: C.gray600,
    fontSize: 13,
  },
  optionBadgeTextSelected: {
    color: C.white,
  },
  optionText: {
    color: C.navyDark,
    fontSize: 13,
    flex: 1,
    lineHeight: 18,
  },
  optionTextSelected: {
    color: C.navyDark,
  },

  // ── Footer ──────────────────────────────────────────────────────────────────
  footer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 5,
    backgroundColor: C.white,
    borderTopWidth: 1,
    borderTopColor: "#EEF0FF",
  },
  helpButton: {
    width: 28,
    height: 28,
    borderRadius: 14,
    borderWidth: 1.5,
    borderColor: C.purpleSoft,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: C.purpleLight,
  },
  questionCounter: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1.5,
    borderColor: C.purpleSoft,
    borderRadius: 7,
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: C.purpleLight,
  },
  questionCounterText: {
    color: C.navyDark,
    fontSize: 11,
  },
  footerActions: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  backButton: {
    paddingVertical: 6,
    paddingHorizontal: 18,
    borderRadius: 7,
    borderWidth: 1.5,
    borderColor: C.navyDark,
    backgroundColor: C.white,
  },
  backButtonText: {
    color: C.navyDark,
    fontSize: 12,
  },
  nextButton: {
    backgroundColor: C.navyDark,
    borderRadius: 7,
    paddingVertical: 6,
    paddingHorizontal: 20,
  },
  nextButtonDisabled: {
    backgroundColor: C.gray400,
  },
  nextButtonText: {
    color: C.white,
    fontSize: 13,
  },

  // ── Listening & Audio ────────────────────────────────────────────────────────
  listeningContainer: {
    marginTop: 14,
    width: "100%",
  },
  listeningText: {
    color: C.gray600,
    fontSize: 13,
    lineHeight: 21,
    marginBottom: 12,
    fontStyle: "italic",
  },
  audioPlayerContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: C.purpleLight,
    borderRadius: 12,
    padding: 12,
    gap: 12,
  },
  playPauseButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: C.purple,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.25)",
  },
  playPauseIcon: {
    color: C.white,
    fontSize: 14,
  },
  audioSliderContainer: {
    flex: 1,
  },
  audioSlider: {
    width: "100%",
    height: 34,
  },
  audioTimeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 4,
    marginTop: -6,
  },
  audioTimeText: {
    color: C.gray400,
    fontSize: 11,
  },

  // ── Result screen ────────────────────────────────────────────────────────────
  resultBackground: {
    flex: 1,
    backgroundColor: C.bg,
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
    width: 240,
    height: 240,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  lottieAnimation: {
    width: 320,
    height: 320,
  },
  pointsText: {
    fontSize: 32,
    color: C.purple,
    marginBottom: 12,
  },
  congratsTitle: {
    color: C.navyDark,
    textAlign: "center",
    marginBottom: 10,
  },
  congratsSubtitle: {
    textAlign: "center",
    color: C.gray400,
    lineHeight: 22,
    marginBottom: 36,
  },
  seePointsButton: {
    backgroundColor: C.purple,
    borderRadius: 30,
    paddingVertical: 14,
    paddingHorizontal: 60,
    alignItems: "center",
    shadowColor: C.purple,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  seePointsButtonText: {
    color: C.white,
    fontSize: 15,
  },
  tryAgainButton: {
    marginTop: 14,
    paddingVertical: 10,
    paddingHorizontal: 40,
  },
  tryAgainButtonText: {
    color: C.purple,
    fontSize: 14,
  },

  // ── Unused dividers (kept for safety) ───────────────────────────────────────
  divider: {
    height: 1,
    backgroundColor: C.purpleSoft,
  },
  verticalDivider: {
    width: 1,
    backgroundColor: C.purpleSoft,
  },
});
