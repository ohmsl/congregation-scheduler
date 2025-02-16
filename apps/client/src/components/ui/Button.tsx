import { useTheme } from "@/hooks/useTheme";
import * as Haptics from "expo-haptics";
import React from "react";
import {
    ActivityIndicator,
    GestureResponderEvent,
    Text,
    TextStyle,
    TouchableOpacity,
    ViewStyle,
} from "react-native";

type ButtonProps = {
    children: React.ReactNode;
    onPress?: (event: GestureResponderEvent) => void;
    variant?: "text" | "outlined" | "contained";
    color?: "primary" | "secondary" | "error" | "success" | "warning";
    size?: "small" | "medium" | "large";
    disabled?: boolean;
    loading?: boolean;
    style?: ViewStyle; // Optional custom styles for the button
    textStyle?: TextStyle; // Optional custom styles for the text
};

export const Button: React.FC<ButtonProps> = ({
    children,
    onPress,
    variant = "contained",
    color = "primary",
    size = "medium",
    disabled = false,
    loading = false,
    style,
    textStyle,
}) => {
    const theme = useTheme();

    const getButtonStyles = () => {
        const baseStyles: ViewStyle = {
            justifyContent: "center",
            alignItems: "center",
            borderRadius: theme.shape.borderRadius,
            paddingVertical: theme.spacing(
                size === "small" ? 1 : size === "large" ? 2 : 1.5,
            ),
            paddingHorizontal: theme.spacing(
                size === "small" ? 2 : size === "large" ? 4 : 3,
            ),
            opacity: disabled || loading ? 0.6 : 1,
        };

        const colorStyles: ViewStyle =
            variant === "contained"
                ? {
                      backgroundColor: disabled
                          ? theme.palette.action.disabledBackground
                          : theme.palette[color]?.main,
                  }
                : variant === "outlined"
                  ? {
                        borderWidth: 1,
                        borderColor: disabled
                            ? theme.palette.action.disabled
                            : theme.palette[color]?.main,
                        backgroundColor: "transparent",
                    }
                  : {
                        backgroundColor: "transparent",
                    };

        return [baseStyles, colorStyles, style];
    };

    const getTextStyles = () => {
        const baseTextStyles: TextStyle = {
            color:
                variant === "contained"
                    ? theme.palette[color]?.contrastText
                    : theme.palette[color]?.main,
            fontSize: size === "small" ? 12 : size === "large" ? 16 : 14,
            fontWeight: "500",
        };

        return [baseTextStyles, textStyle];
    };

    const handlePress = (event: GestureResponderEvent) => {
        if (disabled || loading) return;
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        onPress?.(event);
    };

    return (
        <TouchableOpacity
            style={getButtonStyles()}
            onPress={handlePress}
            activeOpacity={0.8}
        >
            {loading ? (
                <ActivityIndicator
                    size="small"
                    color={
                        variant === "contained"
                            ? theme.palette[color]?.contrastText
                            : theme.palette[color]?.main
                    }
                />
            ) : (
                <Text style={getTextStyles()}>{children}</Text>
            )}
        </TouchableOpacity>
    );
};
