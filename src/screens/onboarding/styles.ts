import { COLORS, SPACING } from "@/constants/theme";
import { Dimensions, StyleSheet } from "react-native";

const { height, width } = Dimensions.get("window");
const HERO_RATIO = 0.54;

/** Kotak batas untuk Skia backdrop (bentuk blob di dalamnya) */
export const ONBOARDING_BACKDROP_SIZE = Math.min(width * 0.88, 340);

/** Area ilustrasi Skia (sama seperti `imageWrap`) */
export const ONBOARDING_IMAGE_WIDTH = width * 0.82;
export const ONBOARDING_IMAGE_HEIGHT = height * HERO_RATIO * 0.78;

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#FEFEFE",
  },
  image: {
    position: "absolute",
    top: height * 0.07,
    left: 0,
    right: 0,
    height: 46,
  },
  pager: {
    flex: 1,
  },
  page: {
    flex: 1,
    paddingHorizontal: SPACING.lg,
    justifyContent: "center",
    alignItems: "center",
  },
  hero: {
    height: height * HERO_RATIO,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: SPACING.md,
  },
  blobBackdrop: {
    position: "absolute",
    width: ONBOARDING_BACKDROP_SIZE,
    height: ONBOARDING_BACKDROP_SIZE,
    overflow: "hidden",
    backgroundColor: "transparent",
    alignSelf: "center",
  },
  imageWrap: {
    width: width * 0.82,
    height: height * HERO_RATIO * 0.78,
    justifyContent: "center",
    alignItems: "center",
  },
  textBlock: {
    paddingTop: SPACING.sm,
    paddingBottom: SPACING.md,
  },
  title: {
    fontFamily: "Poppins-Bold",
    fontSize: 22,
    color: "#111827",
    textAlign: "center",
    marginBottom: SPACING.md,
    lineHeight: 30,
    paddingHorizontal: SPACING.xs,
  },
  description: {
    fontFamily: "Poppins-Regular",
    fontSize: 15,
    color: "#6B7280",
    textAlign: "center",
    lineHeight: 24,
    paddingHorizontal: SPACING.sm,
  },
  footer: {
    paddingHorizontal: SPACING.lg,
    paddingTop: SPACING.sm,
    paddingBottom: SPACING.lg,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: "#F0F0F0",
    backgroundColor: "#FEFEFE",
  },
  footerBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    minHeight: 44,
    position: "relative",
  },
  footerSide: {
    flex: 1,
    zIndex: 1,
  },
  footerSideRight: {
    alignItems: "flex-end",
  },
  dotsAbsolute: {
    position: "absolute",
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
    pointerEvents: "none",
  },
  dot: {
    width: 7,
    height: 7,
    borderRadius: 3.5,
    backgroundColor: "#D1D5DB",
  },
  dotActive: {
    width: 20,
    borderRadius: 4,
    backgroundColor: "#111827",
  },
  linkText: {
    fontFamily: "Poppins-Medium",
    fontSize: 15,
    color: "#6B7280",
    paddingVertical: 10,
    paddingHorizontal: 4,
  },
  linkTextPrimary: {
    color: COLORS.primary,
    fontFamily: "Poppins-Bold",
  },
  lastFooter: {
    alignItems: "center",
    gap: SPACING.lg,
  },
  dotsRowLast: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },
  ctaFull: {
    width: "100%",
    backgroundColor: "#192a56",
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
  },
  ctaFullPressed: {
    opacity: 0.92,
  },
  ctaFullText: {
    fontFamily: "Poppins-Bold",
    fontSize: 16,
    color: "#FFFFFF",
  },
});
