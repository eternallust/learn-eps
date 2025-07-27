import { COLORS } from "@constants/theme";
import { useState } from "react";

type Theme = "light" | "dark";

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>("light");

  const colors = theme === "light" ? COLORS.light : COLORS.dark;

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return {
    theme,
    colors,
    toggleTheme,
    isDark: theme === "dark",
  };
};
