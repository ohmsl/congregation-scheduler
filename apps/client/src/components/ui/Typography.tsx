import { useTheme } from "@/hooks/useTheme";
import { TypographyVariants } from "@/styles/types/Typography";
import React from "react";
import { Text, TextStyle, type TextProps } from "react-native";

export type ThemedTextProps = TextProps & {
  variant?: keyof TypographyVariants;
  color?: "primary" | "secondary" | "error" | "success" | "warning";
  fontWeight?: TextStyle["fontWeight"];
};

export function Typography({
  variant,
  color,
  fontWeight,
  style,
  children,
  ...rest
}: ThemedTextProps) {
  const theme = useTheme();

  const internalColor = color
    ? theme.palette[color].main
    : theme.palette.text.primary;

  const typographyStyle = variant
    ? theme.typography[variant]
    : theme.typography.body1;

  return (
    <Text
      style={[
        { color: internalColor, fontFamily: "Geist", fontWeight },
        typographyStyle,
        style,
      ]}
      {...rest}
    >
      {children}
    </Text>
  );
}
