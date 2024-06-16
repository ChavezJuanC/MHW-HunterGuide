import { View, Text, StyleSheet, Image } from "react-native";
import DecorationData from "../data/DecorationsData.json";

export default function DecorationDetailsScreen({ route }) {
    const { decorationId } = route.params;
    const filteredData = DecorationData.find(
        (element) => element.id === decorationId
    );
    return (
        <View style={styles.mainView}>
            <Image
                source={{ uri: "https://picsum.photos/400" }}
                style={styles.img}
            />
            <Text style={styles.name}>{filteredData.name}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    mainView: {
        padding: 10,
        alignItems: "center",
    },
    img: {
        height: 200,
        width: 200,
        borderRadius: 100,
        margin: 10,
    },
    name: {
        padding: 20,
        fontWeight: "500",
        fontSize: 22,
    },
});
