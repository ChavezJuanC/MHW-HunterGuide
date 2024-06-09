import React from "react";
import { StyleSheet, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function MonsterCard({ monsterName, type }) {
    const navigation = useNavigation();

    return (
        <Pressable
            style={styles.monsterContainer}
            onPress={() =>
                navigation.navigate("Monster Details", {
                    monsterName: monsterName,
                })
            }
        >
            <Text style={styles.nameText}>{monsterName}</Text>
            <Text style={styles.typeText}>{type}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    monsterContainer: {
        height: 50,
        backgroundColor: "#f5f5f5",
        borderWidth: 1,
        marginHorizontal: 10,
        borderRadius: 10,
        padding: 10,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    nameText: {
        fontSize: 16,
        fontWeight: "600",
        color: "black",
    },
    typeText: {
        fontSize: 16,
        fontWeight: "400",
        color: "black",
    },
});
