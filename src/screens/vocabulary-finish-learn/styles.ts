import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({

  // ── Container ─────────────────────────────────────────────────
  container: {
    flex: 1,
    backgroundColor: "#ECEEF8",
    alignItems: "center",
    justifyContent: "space-between",
  },

  // ── Confetti ──────────────────────────────────────────────────
  confettiOverlay: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 10,
    alignItems: "center",
  },
  confettiAnimation: {
    width: width,
    height: height * 0.6,
  },

  // ── Main content ──────────────────────────────────────────────
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 32,
    gap: 16,
  },

  // ── Character circle ──────────────────────────────────────────
  characterCircle: {
    width: 160,
    height: 160,
    borderRadius: 80,
    backgroundColor: "#D8DCFF",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    marginBottom: 8,
  },
  characterAnimation: {
    width: 200,
    height: 200,
  },

  // ── Text ──────────────────────────────────────────────────────
  title: {
    textAlign: "center",
    color: "#1A1941",
    marginBottom: -4,
  },
  subtitle: {
    textAlign: "center",
    color: "#4A4A6A",
    lineHeight: 24,
  },
  subtitleHighlight: {
    color: "#1A1941",
  },

  // ── Buttons ───────────────────────────────────────────────────
  buttonsContainer: {
    width: "100%",
    gap: 12,
    marginTop: 8,
  },
  primaryButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    backgroundColor: "#1A2558",
    paddingVertical: 16,
    borderRadius: 14,
    shadowColor: "#1A2558",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
    paddingHorizontal: 40,
  },
  primaryButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
  },
  secondaryButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    backgroundColor: "#FFFFFF",
    paddingVertical: 16,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#E2E4F0",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 2,
  },
  secondaryButtonText: {
    color: "#4A4A6A",
    fontSize: 16,
  },

  // ── Ad Banner ─────────────────────────────────────────────────
  adBanner: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    paddingVertical: 20,
    paddingHorizontal: 24,
    alignItems: "center",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 8,
    gap: 12,
  },
  adContent: {
    width: "100%",
    alignItems: "center",
    gap: 12,
  },
  adTitle: {
    color: "#B0B4C8",
    letterSpacing: 1.5,
    fontSize: 18,
  },
  adButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    backgroundColor: "#F5D53F",
    paddingVertical: 12,
    paddingHorizontal: 28,
    borderRadius: 30,
  },
  adButtonText: {
    color: "#1A1941",
    fontSize: 14,
  },
  adLabel: {
    color: "#B0B4C8",
    fontSize: 11,
    alignSelf: "flex-end",
  },
});
