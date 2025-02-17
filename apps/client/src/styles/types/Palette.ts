export type Palette = {
  mode: "light" | "dark";
  action: {
    active: string;
    disabled: string;
    disabledBackground: string;
    focus: string;
    hover: string;
    selected: string;
  };
  background: {
    default: string;
    paper: string;
  };
  divider: string;
  primary: PaletteColor;
  secondary: PaletteColor;
  success: PaletteColor;
  info: PaletteColor;
  error: PaletteColor;
  warning: PaletteColor;
  text: {
    primary: string;
    secondary: string;
    disabled: string;
  };
};

export type PaletteColor = {
  main: string;
  light: string;
  dark: string;
  contrastText: string;
};
