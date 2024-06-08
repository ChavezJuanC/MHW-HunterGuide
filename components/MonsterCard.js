import React from "react";
import { View, StyleSheet, Text } from "react-native";

export default function MonsterCard({ monsterName, type }) {
    return (
        <View style={styles.monsterContainer}>
            <Text style={styles.nameText}>{monsterName}</Text>
            <Text style={styles.typeText}>{type}</Text>
        </View>
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
        backgroundColor: "#f9f9f9",
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
