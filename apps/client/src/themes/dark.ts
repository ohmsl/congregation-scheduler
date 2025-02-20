import { createTheme } from "@/styles/creators";

export const dark = createTheme({
  palette: {
    background: {
      default: "#0C1421",
      paper: "#3B414F",
    },
    text: {
      primary: "#fff",
      secondary: "#999",
      disabled: "#666",
    },
    primary: {
      main: "#007aff",
      light: "#80bfff",
      dark: "#004080",
      contrastText: "#fff",
    },
  },
  shape: { borderRadius: 8 },
});
