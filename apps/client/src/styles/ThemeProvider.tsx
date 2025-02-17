import { createContext, PropsWithChildren } from "react";
import { Theme } from "./types/Theme";

type ThemeProviderProps = PropsWithChildren<{
  theme: Theme;
}>;

export const ThemeContext = createContext<Theme | undefined>(undefined);

/**
 * ThemeProvider component to supply the theme to its children.
 *
 * @param props - The provider properties, including theme and children.
 * @returns The context provider wrapping the children.
 */
export const ThemeProvider = ({ theme, children }: ThemeProviderProps) => {
  // Error checking: Ensure a valid theme is provided.
  if (!theme) {
    throw new Error("A valid theme must be provided to the ThemeProvider.");
  }
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};
