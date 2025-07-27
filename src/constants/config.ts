// API Configuration
export const API_CONFIG = {
  BASE_URL: "https://api.example.com",
  TIMEOUT: 10000,
  VERSION: "v1",
} as const;

// Color Palette
export const COLORS = {
  primary: "#007AFF",
  secondary: "#5856D6",
  success: "#34C759",
  warning: "#FF9500",
  error: "#FF3B30",
  background: "#FFFFFF",
  surface: "#F2F2F7",
  text: "#000000",
  textSecondary: "#666666",
  border: "#C7C7CC",
} as const;

// Screen Dimensions
export const SCREEN_PADDING = 16;
export const BORDER_RADIUS = 8;

// Storage Keys
export const STORAGE_KEYS = {
  USER_TOKEN: "@user_token",
  USER_DATA: "@user_data",
  SETTINGS: "@app_settings",
} as const;

// App Configuration
export const APP_CONFIG = {
  NAME: "Learn EPS Topik",
  VERSION: "1.0.0",
  SUPPORTED_LANGUAGES: ["id", "en"],
  DEFAULT_LANGUAGE: "id",
} as const;
