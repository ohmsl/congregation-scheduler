import { useTheme } from "@/hooks/useTheme";
import React from "react";
import {
    StyleProp,
    StyleSheet,
    TouchableOpacity,
    ViewStyle,
} from "react-native";
import { TouchableOpacityProps } from "react-native-gesture-handler";

export type IconButtonSize = "small" | "medium" | "large";

export interface IconButtonProps extends TouchableOpacityProps {
    size?: IconButtonSize;
    color?: string;
    contained?: boolean;
    style?: StyleProp<ViewStyle>;
}

const sizeMap = {
    small: 32,
    medium: 40,
    large: 48,
};

const IconButton: React.FC<IconButtonProps> = ({
    size = "medium",
    color,
    contained,
    style,
    children,
    ...props
}) => {
    const theme = useTheme();
    const buttonSize = sizeMap[size];

    return (
        <TouchableOpacity
            style={[
                styles.root,
                {
                    width: buttonSize,
                    height: buttonSize,
                    backgroundColor: contained
                        ? color || theme.palette.action.hover
                        : "transparent",
                },
                style,
            ]}
            {...props}
        >
            {children}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    root: {
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 999,
    },
});

export default IconButton;
