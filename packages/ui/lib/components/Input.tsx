/**
 * StandardInput Component
 * A reusable input component to be used within the ChatInput component or elsewhere.
 * This component follows a structure similar to MUI with support for slotProps, slots, and style overrides.
 */

import { theme } from "@/constants/Theme";
import { useTheme } from "@/hooks/useTheme";
import React from "react";
import {
    StyleProp,
    StyleSheet,
    TextInput,
    TextInputProps,
    View,
    ViewStyle,
} from "react-native";

export type StandardInputProps = TextInputProps & {
    label?: string;
    style?: StyleProp<ViewStyle>;
    endAdornment?: React.ReactNode;
    slots?: {
        root?: React.ComponentType<any>;
        input?: React.ComponentType<any>;
    };
    slotProps?: {
        root?: object;
        input?: object;
    };
};

const StandardInput: React.FC<StandardInputProps> = ({
    label,
    style,
    endAdornment,
    slots = {},
    slotProps = {},
    ...rest
}) => {
    const Root = slots.root || View;
    const Input = slots.input || TextInput;
    const theme = useTheme();

    return (
        <Root
            style={[styles.root, { borderColor: theme.palette.divider }, style]}
            {...slotProps.root}
        >
            <Input
                style={[styles.input, { color: theme.palette.text.primary }]}
                {...rest}
                {...slotProps.input}
            />
            {endAdornment}
        </Root>
    );
};

const styles = StyleSheet.create({
    root: {
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        borderRadius: theme.shape.borderRadius,
        paddingHorizontal: 12,
        paddingVertical: 4,
    },
    input: {
        flex: 1,
        fontSize: 16,
        height: 40,
    },
});

export default StandardInput;
