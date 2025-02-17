import { deepmerge } from "@/utils/deepmerge/deepmerge";
import { Theme, ThemeOptions } from "../types/Theme";
import { createSpacing } from "./createSpacing";

export const createTheme = (options: ThemeOptions = {}): Theme => {
  const defaultTheme: Theme = {
    palette: {
      mode: "light",
      background: {
        default: "#fff",
        paper: "#fff",
      },
      primary: {
        main: "#1976d2",
        light: "#42a5f5",
        dark: "#1565c0",
        contrastText: "#fff",
      },
      secondary: {
        main: "#9c27b0",
        light: "#ba68c8",
        dark: "#7b1fa2",
        contrastText: "#fff",
      },
      success: {
        main: "#2e7d32",
        light: "#4caf50",
        dark: "#1b5e20",
        contrastText: "#fff",
      },
      info: {
        main: "#0288d1",
        light: "#03a9f4",
        dark: "#01579b",
        contrastText: "#fff",
      },
      error: {
        main: "#d32f2f",
        light: "#ef5350",
        dark: "#c62828",
        contrastText: "#fff",
      },
      warning: {
        main: "#ed6c02",
        light: "#ff9800",
        dark: "#e65100",
        contrastText: "#fff",
      },
      action: {
        active: "rgba(0, 0, 0, 0.54)",
        hover: "rgba(0, 0, 0, 0.04)",
        selected: "rgba(0, 0, 0, 0.08)",
        disabled: "rgba(0, 0, 0, 0.26)",
        disabledBackground: "rgba(0, 0, 0, 0.12)",
        focus: "rgba(0, 0, 0, 0.12)",
      },
      divider: "rgba(0, 0, 0, 0.12)",
      text: {
        primary: "rgba(0, 0, 0, 0.87)",
        secondary: "rgba(0, 0, 0, 0.6)",
        disabled: "rgba(0, 0, 0, 0.38)",
      },
    },
    shape: {
      borderRadius: 4,
    },
    spacing: createSpacing(),
    typography: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontSize: 14,
      h1: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        fontWeight: 300,
        fontSize: 96,
        lineHeight: 1.167,
        letterSpacing: -0.25,
      },
      h2: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        fontWeight: 300,
        fontSize: 60,
        lineHeight: 1.2,
        letterSpacing: -0.13,
      },
      h3: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        fontWeight: 400,
        fontSize: 48,
        lineHeight: 1.167,
        letterSpacing: 0,
      },
      h4: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        fontWeight: 400,
        fontSize: 34,
        lineHeight: 1.235,
        letterSpacing: 0.1176,
      },
      h5: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        fontWeight: 400,
        fontSize: 24,
        lineHeight: 1.334,
        letterSpacing: 0.15,
      },
      h6: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        fontWeight: 500,
        fontSize: 24,
        lineHeight: 1.6,
        letterSpacing: 0.12,
      },
      subtitle1: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        fontWeight: 400,
        fontSize: 16,
        lineHeight: 1.75,
        letterSpacing: 0.15,
      },
      subtitle2: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        fontWeight: 500,
        fontSize: 14,
        lineHeight: 1.57,
        letterSpacing: 0.1,
      },
      body1: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        fontWeight: 400,
        fontSize: 16,
        lineHeight: 1.5,
        letterSpacing: 0.15,
      },
      body2: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        fontWeight: 400,
        fontSize: 14,
        lineHeight: 1.43,
        letterSpacing: 0.1,
      },
      button: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        fontWeight: 500,
        fontSize: 14,
        lineHeight: 1.75,
        letterSpacing: 0.45,
        textTransform: "uppercase",
      },
      caption: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        fontWeight: 400,
        fontSize: 12,
        lineHeight: 1.66,
        letterSpacing: 0.5,
      },
      overline: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        fontWeight: 400,
        fontSize: 12,
        lineHeight: 2.66,
        letterSpacing: 1.3,
        textTransform: "uppercase",
      },
    },
  };

  return deepmerge(defaultTheme, options);
};
