import { useTheme } from "@/hooks/useTheme";
import React, { useState } from "react";
import {
  StyleProp,
  StyleSheet,
  TextInput,
  TextInputProps,
  View,
  ViewStyle,
} from "react-native";

export type StandardInputProps = TextInputProps & {
  style?: StyleProp<ViewStyle>;
  endAdornment?: React.ReactNode;
  slots?: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    root?: React.ComponentType<any>;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    input?: React.ComponentType<any>;
  };
  slotProps?: {
    root?: object;
    input?: object;
  };
};

export const StandardInput: React.FC<StandardInputProps> = ({
  style,
  endAdornment,
  slots = {},
  slotProps = {},
  ...rest
}) => {
  const Root = slots.root || View;
  const Input = slots.input || TextInput;
  const theme = useTheme();
  const [isFocused, setIsFocused] = useState(false);

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

  return (
    <Root
      style={[
        styles.root,
        {
          borderColor: isFocused
            ? theme.palette.primary.main
            : theme.palette.divider,
        },
        style,
      ]}
      {...slotProps.root}
    >
      <Input
        style={[styles.input, { color: theme.palette.text.primary }]}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        {...rest}
        {...slotProps.input}
      />
      {endAdornment}
    </Root>
  );
};
