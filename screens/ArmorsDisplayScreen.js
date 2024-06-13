import { View } from "react-native";

export default function ArmorsDisplayScreen({ route }) {
    const { rank } = route.params;

    return (
        <View>
            <Text>{rank}</Text>
        </View>
    );
}
