import { View, FlatList, Pressable } from "react-native";
import CharmsData from "../data/CharmsData.json";
import PreviewCard from "../components/PreviewCard";

export default function CharmsScreen({ navigation }) {
    return (
        <View>
            <FlatList
                data={CharmsData}
                renderItem={({ item }) => (
                    <Pressable
                        onPress={() =>
                            navigation.navigate("Charms Details", {
                                charmName: item.name,
                            })
                        }
                    >
                        <PreviewCard
                            imgUri={{ uri: "https://picsum.photos/200" }}
                        />
                    </Pressable>
                )}
            />
        </View>
    );
}
