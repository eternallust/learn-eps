import { RADIUS, SPACING } from "@/constants/theme";
import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");

export const LOGIN_HERO_SIZE = Math.min(width * 0.72, 280);


export const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: SPACING.lg,
  },
  loginSkiaHeroWrap: {
    alignSelf: "center",
    marginTop: SPACING.md,
  },
  loginImage: {
    width: "100%",
    height: height * 0.25,
    resizeMode: "contain",
    alignSelf: "center",

    marginBottom: SPACING.md,
  },
    image: {
  width: "100%",
    height: 46,
    marginBottom: SPACING.xl,
  },
  title: {
    fontFamily: "Poppins-Bold",
    fontSize: 22,
    color: "#1A1941",
    textAlign: "center",
    marginBottom: SPACING.sm,
    lineHeight: 30,
  },
  subtitle: {
    fontFamily: "Poppins-Regular",
    fontSize: 15,
    color: "#6B7280",
    textAlign: "center",
    lineHeight: 24,
    paddingHorizontal: SPACING.xs,
    marginBottom: SPACING.lg,
  },
  inputRow: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: RADIUS.md,
    paddingHorizontal: SPACING.md,
    paddingVertical: 4,
    marginBottom: SPACING.md,
    backgroundColor: "#FFFFFF",
    minHeight: 52,
  },
  inputIcon: {
    marginRight: SPACING.sm,
  },
  input: {
    flex: 1,
    fontFamily: "Poppins-Regular",
    fontSize: 15,
    color: "#111827",
    paddingVertical: SPACING.sm,
  },
  forgotText: {
    fontFamily: "Poppins-Medium",
    fontSize: 12,
    color: "#192a56",
    paddingLeft: SPACING.xs,
    flexShrink: 0,
  },
  primaryBtn: {
    width: "100%",
    backgroundColor: "#192a56",
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    marginTop: SPACING.sm,
  },
  primaryBtnPressed: {
    opacity: 0.92,
  },
  primaryBtnText: {
    fontFamily: "Poppins-Bold",
    fontSize: 16,
    color: "#FFFFFF",
  },
  googleIcon: {
    width: 22,
    height: 22,
  },
  googleSignInBtn: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: SPACING.sm,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E5E7EB",
    paddingVertical: 16,
    borderRadius: 14,
  },
  googleSignInBtnPressed: {
    opacity: 0.88,
    backgroundColor: "#F9FAFB",
  },
  googleSignInText: {
    fontFamily: "Poppins-Medium",
    fontSize: 16,
    color: "#374151",
  },
  dividerRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: SPACING.sm,
    marginBottom: SPACING.sm,
  },
  dividerLine: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: "#D1D5DB",
  },
  dividerText: {
    fontFamily: "Poppins-Regular",
    fontSize: 13,
    color: "#9CA3AF",
    marginHorizontal: SPACING.md,
  },
  socialRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: SPACING.lg,
  },
  socialDivider: {
    width: StyleSheet.hairlineWidth,
    height: 28,
    backgroundColor: "#D1D5DB",
  },
  socialFb: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: "#1877F2",
    alignItems: "center",
    justifyContent: "center",
  },
  socialGoogle: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E5E7EB",
    alignItems: "center",
    justifyContent: "center",
  },
  footer: {
    width: "100%",
    paddingTop: SPACING.md,
    paddingBottom: SPACING.sm,
    alignItems: "center",
  },
  footerText: {
    fontFamily: "Poppins-Regular",
    fontSize: 14,
    color: "#6B7280",
    textAlign: "center",
  },
  footerLink: {
    fontFamily: "Poppins-Bold",
    fontSize: 14,
    color: "#192a56",
  },
});
