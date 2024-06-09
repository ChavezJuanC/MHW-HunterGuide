import { View, StyleSheet, Image, Text, Pressable } from "react-native";
import { useLayoutEffect } from "react";
import monsterData from "../data/MonsterData.json";

export default function MonsterDetailsScreen({ route, navigation }) {
    const { monsterName } = route.params;

    const specificData = monsterData.filter(
        (item) => item.name === monsterName
    );

    const Monster = specificData[0];

    useLayoutEffect(() => {
        navigation.setOptions({
            title: monsterName,
        });
    }, [navigation, monsterName]);

    return (
        <View>
            <View>
                <Image
                    source={{
                        uri: Monster.photoURI || "https://picsum.photos/200",
                    }}
                    style={styles.profileImg}
                />
            </View>
            <View style={styles.infoView}>
                <Text style={styles.nameText}>{monsterName}</Text>
                <Text style={styles.typeText}>type</Text>
                <View style={styles.descritpionContainer}>
                    <Text style={styles.descriptionText}>{Monster.description}</Text>
                </View>
                <View style={styles.details}>
                    <Text style={styles.detailText}>
                        Species :{" "}
                        <Text style={styles.detailVaue}>
                            {Monster.species.toUpperCase()}
                        </Text>
                    </Text>
                    <Text style={styles.detailText}>
                        Locations :{" "}
                        {Monster.locations.map((element, index) => (
                            <Text style={styles.detailVaue} key={index}>
                                {element.name}
                                {index < Monster.locations.length - 1
                                    ? ", "
                                    : "."}
                            </Text>
                        ))}
                    </Text>
                    <Text style={styles.detailText}>
                        Weakness :{" "}
                        {Monster.weaknesses.map((element, index) => (
                            <Text style={styles.detailVaue} key={index}>
                                {element.element}[
                                <Text style={styles.stars}>
                                    {"*".repeat(element.stars)}
                                </Text>
                                ]
                                {index < Monster.weaknesses.length - 1
                                    ? "  "
                                    : ""}
                            </Text>
                        ))}{" "}
                    </Text>
                </View>
                <View style={styles.rewardsButton}>
                    <Pressable>
                        <Text style={styles.buttonText}>Monster Rewards</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    profileImg: {
        width: 200,
        height: 200,
        borderRadius: 100,
        alignSelf: "center",
        marginTop: 30,
    },
    infoView: {
        margin: 20,
        alignItems: "center",
    },
    nameText: {
        fontSize: 30,
        fontWeight: "700",
    },
    details: {
        margin: 20,
    },

    typeText: {
        fontSize: 15,
        fontWeight: "500",
    },
    descritpionContainer: {
        borderWidth: 1,
        padding: 7,
        marginTop: 30,
        borderRadius: 5,
        backgroundColor: "white"
    },
    descriptionText: {
        fontSize: 15,
        fontWeight: "400"
    },
    detailText: {
        fontSize: 18,
        fontWeight: "600",
        margin: 5,
    },
    detailVaue: {
        fontWeight: "400",
    },
    stars: {
        color: "#3da9f0",
        fontWeight: "900",
    },
    rewardsButton: {
        marginTop: 20,
        borderWidth: 1,
        padding: 8,
        backgroundColor: "#3da9f0",
        borderRadius: 5,
    },
    buttonText: {
        fontSize: 15,
        fontWeight: "400",
        color: "white",
    },
});
