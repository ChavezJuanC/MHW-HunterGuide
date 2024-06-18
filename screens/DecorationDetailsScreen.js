import {
    View,
    Text,
    StyleSheet,
    Image,
    FlatList,
    ImageBackground,
} from "react-native";
import DecorationData from "../data/DecorationsData.json";

export default function DecorationDetailsScreen({ route }) {
    const { decorationId } = route.params;
    const filteredData = DecorationData.find(
        (element) => element.id === decorationId
    );
    return (
        <ImageBackground
            source={require("../assets/categoryCards/gray-concrete-wall.jpg")}
            style={{ height: "100%" }}
        >
            <View style={styles.mainView}>
                <Image
                    source={{ uri: "https://picsum.photos/400" }}
                    style={styles.img}
                />
                <Text style={styles.name}>{filteredData.name}</Text>
                <Text style={styles.skillsText}>Skills</Text>
                <FlatList
                    data={filteredData.skills}
                    renderItem={({ item }) => (
                        <View style={styles.skillView}>
                            <Text style={styles.skillName}>
                                {item.skillName}
                            </Text>
                            <Text style={styles.skillDes}>
                                {item.description}
                            </Text>
                        </View>
                    )}
                />
            </View>
        </ImageBackground>
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
        fontSize: 23,
    },
    skillView: {
        borderWidth: 1,
        alignItems: "center",
        margin: 20,
        padding: 10,
        paddingBottom: 20,
        paddingHorizontal: 20,
        borderRadius: 5,
        width: 350,
        backgroundColor: "#f5f5f5",
    },
    skillsText: {
        fontWeight: "600",
        fontSize: 22,
    },
    skillName: {
        fontSize: 20,
        fontWeight: "500",
        padding: 10,
        color: "#3da9f0",
    },
    skillDes: {
        fontSize: 18,
        fontWeight: "400",
    },
});
