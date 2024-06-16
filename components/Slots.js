import { View, Text, StyleSheet, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
const SlotPreview = ({ slotsText, slots }) => {
    const navigation = useNavigation();

    return (
        <Pressable
            style={styles.slotsContainer}
            onPress={() =>
                navigation.navigate("Decorations Display", { slots })
            }
        >
            <Text style={styles.text}>{slotsText}</Text>
        </Pressable>
    );
};

export default function SlotsScreen() {
    return (
        <View>
            <SlotPreview slotsText="1 Slot" slots={1} />
            <SlotPreview slotsText="2 Slots" slots={2} />
            <SlotPreview slotsText="3 Slots" slots={3} />
            <SlotPreview slotsText="4 Slots" slots={4} />
        </View>
    );
}

const styles = StyleSheet.create({
    slotsContainer: {
        borderWidth: 2,
        margin: 10,
        padding: 10,
        borderRadius: 5,
    },
    text: {
        fontSize: 20,
        fontWeight: "500",
    },
});
