import { Pressable, FlatList } from "react-native";
import DecorationData from "../data/DecorationsData.json";
import PreviewCard from "../components/PreviewCard";

export default function DecorationsDisplayScreen({ route, navigation }) {
    const { slots } = route.params;

    const filteredData = DecorationData.filter(
        (element) => element.slot === slots
    );
    return (
        <FlatList
            data={filteredData}
            renderItem={({ item }) => (
                <Pressable
                    onPress={() =>
                        navigation.navigate("Decoration Details", {
                            decorationId: item.id,
                        })
                    }
                >
                    <PreviewCard
                        imgUri={"https://picsum.photos/400"}
                        weaponName={item.name}
                    />
                </Pressable>
            )}
        />
    );
}

/* inside a pressable that navigates
to "Decoration Details" with a decorationId : int */
