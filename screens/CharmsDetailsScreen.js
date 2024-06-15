import { View, Text, Image } from "react-native";
import CharmsData from "../data/CharmsData.json";

export default function CharmsDetailsScreen({ route }) {
    const { charmName } = route.params;
    const filterdData = CharmsData.find(
        (element) => element.name === charmName
    );

    return (
        <View style={styles.mainView}>
            <Image
                source={{ uri: "https://picsum.photos/200" }}
                style={styles.img}
            />
            <Text style={styles.name}>{filterdData.name}</Text>
            <View style={styles.deatailsView}>
                <Text style={styles.detailsText}>
                    {filterdData.description}
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    mainView: {
        margin: 20,
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
        borderWidth: 1,
        borderRadius: 5,
    },
    detailsText: {
        fontSize: 18,
        fontWeight: "400",
        padding: 10,
    },
});
