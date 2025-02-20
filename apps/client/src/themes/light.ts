import { createTheme } from "@/styles/creators";

export const light = createTheme({
  palette: {
    background: {
      default: "#F7F7F7",
      paper: "#FFFFFF",
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
