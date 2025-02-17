import { Palette } from "./Palette";
import { Shape } from "./Shape";
import { Spacing } from "./Spacing";
import { Typography } from "./Typography";

export type Theme = {
  palette: Palette;
  typography: Typography;
  spacing: Spacing;
  shape: Shape;
};

export type ThemeOptions = {
  palette?: Partial<Palette>;
  typography?: Partial<Typography>;
  spacing?: Partial<Spacing>;
  shape?: Partial<Shape>;
};
