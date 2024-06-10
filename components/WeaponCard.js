import { View, ImageBackground, Text, StyleSheet } from "react-native";

export default function WeaponCard({ weaponImg, title }) {
    return (
        <>
            <View style={styles.weaponCardView}>
                <ImageBackground
                    source={weaponImg}
                    resizeMode="cover"
                    style={styles.backgroundImg}
                ></ImageBackground>
                <Text style={styles.weaponText}>{title}</Text>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    weaponCardView: {
        height: 250,
        width: 150,
        borderWidth: 1,
        borderColor: "black",
        backgroundColor: "#f5f5f5",
        borderRadius: 10,
        overflow: "hidden", // Ensures children are clipped to the boundaries of the View
    },
    backgroundImg: {
        flex: 1,
        justifyContent: "flex-end", // Ensures Text is positioned at the bottom of the ImageBackground
    },
    weaponText: {
        textAlign: "right",
        fontSize: 20,
        color: "black",
        padding: 10,
        fontWeight: "700",
    },
});
