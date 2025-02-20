import { Button, LabeledInput, ListItem, Typography } from "@/components/ui";
import { useTheme } from "@/hooks/useTheme";
import { SafeAreaView, ScrollView, StyleSheet } from "react-native";

export default function HomeScreen() {
  const theme = useTheme();

  return (
    <SafeAreaView>
      <ScrollView
        style={{
          padding: 16,
          backgroundColor: theme.palette.background.default,
        }}
      >
        <Button>Click Me</Button>
        <LabeledInput label="Email" placeholder="Enter your email" />
        <ListItem>
          <Typography variant="body2" style={{ color: "red" }}>
            Item 1
          </Typography>
        </ListItem>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
