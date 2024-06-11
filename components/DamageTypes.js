import {
    FlatList,
    View,
    Image,
    StyleSheet,
    Text,
    Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const ElementCard = ({ elementImage, elementName, weaponType }) => {
    const navigation = useNavigation();

    return (
        <Pressable
            onPress={() => {
                navigation.navigate("Weapons Display", {
                    weaponType: weaponType,
                    element: elementName,
                });
            }}
        >
            <View style={styles.elementCard}>
                <Image source={elementImage} style={styles.elementImage} />
                <Text style={styles.elementText}>{elementName}</Text>
            </View>
        </Pressable>
    );
};
export default function DamageTypes({ weaponType }) {
    const elementsData = [
        {
            type: "Raw",
            photo: require("../assets/elements/raw.png"),
            id: 0,
        },
        {
            type: "Blast",
            photo: require("../assets/elements/blast.png"),
            id: 1,
        },
        {
            type: "Dragon",
            photo: require("../assets/elements/dragon.png"),
            id: 2,
        },
        { type: "Fire", photo: require("../assets/elements/fire.png"), id: 3 },
        { type: "Ice", photo: require("../assets/elements/ice.png"), id: 4 },
        {
            type: "Paralysis",
            photo: require("../assets/elements/paralysis.png"),
            id: 5,
        },
        {
            type: "Poison",
            photo: require("../assets/elements/poison.png"),
            id: 6,
        },
        {
            type: "Sleep",
            photo: require("../assets/elements/sleep.png"),
            id: 7,
        },
        { type: "Stun", photo: require("../assets/elements/stun.png"), id: 8 },
        {
            type: "Thunder",
            photo: require("../assets/elements/thunder.png"),
            id: 9,
        },
        {
            type: "Water",
            photo: require("../assets/elements/water.png"),
            id: 10,
        },
    ];
    return (
        <View style={styles.typesContainer}>
            <FlatList
                data={elementsData}
                renderItem={({ item }) => (
                    <ElementCard
                        elementImage={item.photo}
                        elementName={item.type}
                        weaponType={weaponType}
                    />
                )}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    elementCard: {
        borderWidth: 2,
        flex: 1,
        flexDirection: "row",
        padding: 10,
        margin: 6,
        borderRadius: 10,
        backgroundColor: "#f5f5f5",
    },
    elementImage: {
        width: 50,
        height: 50,
    },
    elementText: {
        fontSize: 20,
        alignSelf: "center",
        padding: 10,
        fontSize: 25,
        fontWeight: "500",
    },
    typesContainer: {
        justifyContent: "space-between",
    },
});
