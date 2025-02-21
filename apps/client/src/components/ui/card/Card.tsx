import { useTheme } from "@/hooks/useTheme";
import React from "react";
import { Platform, StyleProp, View, ViewProps, ViewStyle } from "react-native";

interface CardProps extends ViewProps {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  elevation?: number;
  variant?: "elevation" | "outlined";
}

interface CardSubComponentProps extends ViewProps {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

export const Card: React.FC<CardProps> & {
  Content: React.FC<CardSubComponentProps>;
  Actions: React.FC<CardSubComponentProps>;
} = ({ children, style, elevation = 2, variant = "elevation", ...rest }) => {
  const theme = useTheme();

  // Use theme values with fallbacks
  const backgroundColor = theme.palette.background.paper;
  const borderRadius = theme.shape.borderRadius ?? 4;
  const cardStyle: StyleProp<ViewStyle> = {
    backgroundColor,
    borderRadius,
    overflow: "hidden",
  };

  // Determine shadow or border styles based on variant
  let variantStyle: StyleProp<ViewStyle> = {};
  if (variant === "outlined") {
    variantStyle = {
      borderWidth: 1,
      borderColor: theme.palette.divider ?? "#ddd",
    };
  } else {
    // For an elevated card, we try to mimic shadow on iOS and use elevation on Android:
    variantStyle = {
      ...Platform.select({
        ios: {
          elevation,
          shadowColor: "#000",
          shadowOffset: { width: 1, height: elevation },
          shadowOpacity: 0.15,
          shadowRadius: elevation,
        },
        android: {
          elevation: elevation,
        },
      }),
    };
  }

  return (
    <View {...rest} style={[cardStyle, variantStyle, style]}>
      {children}
    </View>
  );
};

// Subcomponent for Card.Content
const CardContent: React.FC<CardSubComponentProps> = ({
  children,
  style,
  ...rest
}) => {
  const theme = useTheme();
  const spacing = theme.spacing(2);

  return (
    <View {...rest} style={[{ padding: spacing }, style]}>
      {children}
    </View>
  );
};

// Subcomponent for Card.Actions
const CardActions: React.FC<CardSubComponentProps> = ({
  children,
  style,
  ...rest
}) => {
  const theme = useTheme();
  const spacing = theme.spacing(1);

  return (
    <View
      {...rest}
      style={[
        {
          padding: spacing,
          flexDirection: "row",
          justifyContent: "flex-end",
        },
        style,
      ]}
    >
      {children}
    </View>
  );
};

Card.Content = CardContent;
Card.Actions = CardActions;

export default Card;
