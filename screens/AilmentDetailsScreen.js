import { View, Text, Image, StyleSheet, ImageBackground } from "react-native";
import AilmentData from "../data/AilmentsData.json";

export default function AilmentDetailsScreen({ route }) {
    const { ailmentName } = route.params;
    const filteredData = AilmentData.find(
        (element) => element.name === ailmentName
    );

    return (
        <ImageBackground
            source={require("../assets/categoryCards/gray-concrete-wall.jpg")}
        >
            <View style={styles.mainView}>
                <Image
                    source={{ uri: "https://picsum.photos/400" }}
                    style={styles.img}
                />
                <Text style={styles.name}>{filteredData.name}</Text>
                <View style={styles.deatailsView}>
                    <Text style={styles.detailsText}>
                        {filteredData.description}
                    </Text>
                </View>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    mainView: {
        margin: 20,
        height: "100%",
    },
    img: {
        borderWidth: 2,
        height: 200,
        width: 200,
        alignSelf: "center",
        borderRadius: 100,
    },
    name: {
        fontSize: 25,
        fontWeight: "600",
        textAlign: "center",
        margin: 20,
    },
    deatailsView: {
        backgroundColor: "#f5f5f5",
        borderWidth: 1,
        borderRadius: 5,
    },
    detailsText: {
        fontSize: 18,
        fontWeight: "400",
        padding: 10,
    },
});
