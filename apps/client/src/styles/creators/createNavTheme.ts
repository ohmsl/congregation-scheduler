import { DefaultTheme, Theme as RNTheme } from "@react-navigation/native";
import { Theme } from "../types/Theme";

export const createNavTheme = (theme: Theme): RNTheme => ({
  dark: theme.palette.mode === "dark",
  colors: {
    background: theme.palette.background.default,
    text: theme.palette.text.primary,
    primary: theme.palette.primary.main,
    border: theme.palette.divider,
    card: theme.palette.background.paper,
    notification: theme.palette.background.paper,
  },
  fonts: DefaultTheme.fonts,
});
