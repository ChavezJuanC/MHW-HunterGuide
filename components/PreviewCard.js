import { View, Image, StyleSheet, Text } from "react-native";

export default function PreviewCard({ imgUri, weaponName }) {
    return (
        <View style={styles.previewCard}>
            <Image source={{ uri: imgUri }} style={styles.previewImg} />
            <Text style={styles.nameText}>{weaponName}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    previewCard: {
        borderWidth: 1,
        height: 100,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 10,
        margin: 10,
        borderRadius: 10,
        backgroundColor: "#f5f5f5",
        overflow: "scroll"
    },
    previewImg: {
        width: 80,
        height: 80,
        borderRadius: 400,
    },
    nameText: {
        fontSize: 20,
    },
    damageText: {
        fontSize: 16,
    },
});
