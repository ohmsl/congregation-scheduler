import React from "react";
import {
    GestureResponderEvent,
    Text,
    TextStyle,
    TouchableOpacity,
    View,
    ViewStyle,
} from "react-native";

type ListItemProps = {
    children: React.ReactNode;
    button?: boolean;
    onPress?: (event: GestureResponderEvent) => void;
    secondaryAction?: React.ReactNode;
    leftContent?: React.ReactNode;
    disabled?: boolean;
    dense?: boolean;
    divider?: boolean;
    disableGutters?: boolean;
    alignItems?: "center" | "flex-start" | "flex-end";
    style?: ViewStyle;
    contentStyle?: ViewStyle;
    textStyle?: TextStyle;
};

export const ListItem: React.FC<ListItemProps> = ({
    children,
    button,
    onPress,
    secondaryAction,
    leftContent,
    disabled = false,
    dense = false,
    divider = false,
    disableGutters = false,
    alignItems = "center",
    style,
    contentStyle,
    textStyle,
}) => {
    const getContainerStyles = (): ViewStyle[] => {
        const baseStyles: ViewStyle = {
            flexDirection: "row",
            alignItems: alignItems,
            paddingVertical: dense ? 8 : 16,
            paddingHorizontal: disableGutters ? 0 : 16,
            opacity: disabled ? 0.5 : 1,
            borderBottomWidth: divider ? 1 : 0,
            borderBottomColor: "#e0e0e0",
        };

        return [baseStyles, style || {}];
    };

    const getContentStyles = (): ViewStyle[] => {
        const baseContentStyles: ViewStyle = {
            flex: 1,
            flexDirection: "row",
            alignItems: alignItems,
        };

        return [baseContentStyles, contentStyle || {}];
    };

    const handlePress = (event: GestureResponderEvent) => {
        if (disabled) return;
        onPress?.(event);
    };

    const ContentWrapper = onPress ? TouchableOpacity : View;

    return (
        <ContentWrapper
            style={getContainerStyles()}
            onPress={handlePress}
            disabled={disabled}
            activeOpacity={0.7}
        >
            <View style={getContentStyles()}>
                {leftContent && (
                    <View style={{ marginRight: 16 }}>{leftContent}</View>
                )}
                {typeof children === "string" ? (
                    <Text style={textStyle}>{children}</Text>
                ) : (
                    children
                )}
            </View>
            {secondaryAction && (
                <View style={{ marginLeft: 16 }}>{secondaryAction}</View>
            )}
        </ContentWrapper>
    );
};
