import { View, Text } from "react-native";
import ArmorData from "../data/ArmorData.json";

export default function ArmorDetailsScreen({ route }) {
    const { armorId } = route.params;
    const filteredData = ArmorData.find((element) => element.id === armorId);
    console.log(filteredData);

    return (
        <View>
            <Text>Details Screen for {armorId}</Text>
        </View>
    );
}
