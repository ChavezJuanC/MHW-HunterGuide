import { View, Text, FlatList, Pressable } from "react-native";
import PreviewCard from "../components/PreviewCard";
import AilmentData from "../data/AilmentsData.json";

export default function AilmentsScreen({navigation}) {
    return (
        <View>
            <FlatList
                data={AilmentData}
                renderItem={({ item }) => (
                    <Pressable
                        onPress={() =>
                            navigation.navigate("Ailment Details", {
                                ailmentName: item.name,
                            })
                        }
                    >
                        <PreviewCard
                            imgUri={"https://picsum.photos/200"}
                            weaponName={item.name}
                        />
                    </Pressable>
                )}
            />
        </View>
    );
}
