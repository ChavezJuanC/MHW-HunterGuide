import { View, Text, FlatList } from "react-native";
import AmorData from "../data/ArmorData.json";
import PreviewCard from "../components/PreviewCard";

export default function ArmorsDisplayScreen({ route }) {
    const { rank } = route.params;

    const filteredData = AmorData.filter((element) => element.rank === rank);
    console.log(filteredData);

    return (
        <View>
            <Text>{rank}</Text>
            <FlatList
                data={filteredData}
                renderItem={({ item }) => <PreviewCard />}
            />
        </View>
    );
}
