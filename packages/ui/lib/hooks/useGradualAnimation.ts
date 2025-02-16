import { useKeyboardHandler } from "react-native-keyboard-controller";
import { useSharedValue } from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export const useGradualKeyboardAnimation = () => {
    const height = useSharedValue(0);
    const { bottom } = useSafeAreaInsets();

    useKeyboardHandler(
        {
            onMove: (event) => {
                "worklet";
                height.value = Math.max(event.height, 0) - bottom;
            },
        },
        [],
    );

    return { height };
};
