import { View } from "react-native";
import { StandardInput, StandardInputProps } from "./Input";
import { Typography } from "./Typography";

type LabeledInputProps = StandardInputProps & {
  label: string;
  component?: React.ReactNode;
};

export const LabeledInput = ({
  label,
  component,
  ...props
}: LabeledInputProps) => {
  return (
    <View style={{ gap: 4 }}>
      <Typography
        variant="body2"
        fontWeight={600}
        style={{ marginHorizontal: 4 }}
      >
        {label}
      </Typography>
      {component ? component : <StandardInput {...props} />}
    </View>
  );
};
