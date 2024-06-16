import { View, Text, FlatList } from "react-native";
import DecorationData from "../data/DecorationsData.json";
import PreviewCard from "../components/PreviewCard";

export default function DecorationsDisplayScreen({ route, navigate }) {
    const { slots } = route.params;

    const filteredData = DecorationData.filter(
        (element) => element.slot === slots
    );
    return (
        <FlatList
            data={filteredData}
            renderItem={({ item }) => (
                <PreviewCard
                    imgUri={"https://picsum.photos/400"}
                    weaponName={item.name}
                />
            )}
        />
    );
}

/*import data, filter data by slots, use that data to create a flatlist of preview cards inside a pressable that navigates
to "Decoration Details" with a decorationId : int */
