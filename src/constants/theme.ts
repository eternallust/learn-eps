// Color Palette
export const COLORS = {
  primary: "#4A90E2",
  primarydark: "#1A1941",
  secondary: "#7B68EE",
  background: "#FAFBFC",
  surface: "#FFFFFF",
  card: "#FFFFFF",
  text: "#2C3E50",
  textSecondary: "#718096",
  border: "#EDF2F7",
  error: "#E53E3E",
  success: "#38A169",
  warning: "#DD6B20",
  info: "#3182CE",
  accent: "#ED64A6",
  headerBackground: "#FFFFFF",
  headerText: "#2C3E50",
  statusBar: "#FAFBFC",
} as const;

// Typography
export const FONTS = {
  sizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20,
    xxl: 24,
    xxxl: 32,
  },
  weights: {
    normal: "400" as const,
    medium: "500" as const,
    semiBold: "600" as const,
    bold: "700" as const,
  },
  family: {
    regular: "Poppins-Regular",
    medium: "Poppins-Medium",
    bold: "Poppins-Bold",
    obvia: "Obvia-Regular",
    obviaBold: "Obvia-Bold",
  },
} as const;

// Spacing
export const SPACING = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
} as const;

// Border Radius
export const RADIUS = {
  sm: 4,
  md: 8,
  lg: 12,
  xl: 16,
  full: 9999,
} as const;
