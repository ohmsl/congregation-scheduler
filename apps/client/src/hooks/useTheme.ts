import { useContext } from "react";
import { ThemeContext } from "../styles/ThemeProvider";
import { Theme } from "../styles/types/Theme";

/**
 * Custom hook to access the theme from the context.
 *
 * @returns The current theme.
 */
export function useTheme(): Theme {
  const theme = useContext(ThemeContext);
  if (!theme) {
    throw new Error("useTheme must be used within a ThemeProvider.");
  }
  return theme;
}
