import {
    View,
    Text,
    Image,
    StyleSheet,
    FlatList,
    ScrollView,
} from "react-native";
import CharmsData from "../data/CharmsData.json";

export default function CharmsDetailsScreen({ route }) {
    const { charmName } = route.params;
    const filterdData = CharmsData.find(
        (element) => element.name === charmName
    );

    const Materials = () => {
        return filterdData.ranks.map((element) => {
            return (
                <View key={element.level}>
                    <Text style={styles.levelText}>{element.level}</Text>
                    {element.crafting.materials.map((element) => (
                        <Text style={styles.detailsText} key={element.item.id}>
                            {element.item.name} X {element.quantity}
                        </Text>
                    ))}
                </View>
            );
        });
    };

    return (
        <ScrollView style={styles.mainView}>
            <Image
                source={{ uri: "https://picsum.photos/100" }}
                style={styles.img}
            />
            <Text style={styles.name}>{filterdData.name}</Text>
            <View style={styles.deatailsView}>
                <Text style={styles.craftingText}>Crafting Parts</Text>
                <Materials />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    mainView: {
        margin: 20,
    },
    img: {
        borderWidth: 2,
        height: 100,
        width: 100,
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
        borderRadius: 10,
        margin: 10,
        paddingBottom: 20,
    },
    craftingText: {
        fontSize: 22,
        fontWeight: "500",
        padding: 10,
        textAlign: "center",
    },
    detailsText: {
        textAlign: "center",
        fontSize: 18,
        fontWeight: "400",
    },
    levelText: {
        textAlign: "center",
        fontSize: 18,
        fontWeight: "600",
        color: "#3da9f0",
    },
});

////instead of using flatList create my own list component through mapping.
