import { TextStyle } from "react-native";

export type TypographyVariants = {
  body1: TextStyle;
  body2: TextStyle;
  button: TextStyle;
  caption: TextStyle;
  h1: TextStyle;
  h2: TextStyle;
  h3: TextStyle;
  h4: TextStyle;
  h5: TextStyle;
  h6: TextStyle;
  overline: TextStyle;
  subtitle1: TextStyle;
  subtitle2: TextStyle;
};

export type Typography = TypographyVariants & {
  fontFamily: string;
  fontSize: number | string;
};
