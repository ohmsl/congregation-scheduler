import { theme } from "@/constants/Theme";
import { useColorScheme } from "./useColorScheme.web";

export const useTheme = () => {
    const colorScheme = useColorScheme();

    return {
        ...theme,
        palette: theme.palette[colorScheme ?? "light"],
    };
};
