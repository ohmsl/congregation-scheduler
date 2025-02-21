import { Button, Typography } from "@/components/ui";
import Card from "@/components/ui/card/Card";
import { useTheme } from "@/hooks/useTheme";

export const TodaysEvents = () => {
  const theme = useTheme();
  const spacing = theme.spacing(1);

  return (
    <Card elevation={10}>
      <Card.Content>
        <Typography variant="h6">Today's Events</Typography>
      </Card.Content>
      <Card.Actions>
        <Button variant="contained" color="primary">
          View All
        </Button>
      </Card.Actions>
    </Card>
  );
};
