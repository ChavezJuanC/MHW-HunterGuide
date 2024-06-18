import {
    View,
    Text,
    StyleSheet,
    Pressable,
    ImageBackground,
} from "react-native";

export default function ArmorScreen({ navigation }) {
    const handleNav = (destination, params) => {
        navigation.navigate(destination, params);
    };
    return (
        <ImageBackground
            source={require("../assets/categoryCards/gray-concrete-wall.jpg")}
        >
            <View style={{ height: "100%" }}>
                <View>
                    <Pressable
                        style={styles.rankCard}
                        onPress={() =>
                            handleNav("Armor Display", { rank: "low" })
                        }
                    >
                        <Text style={styles.cardText}>Low Rank</Text>
                    </Pressable>
                    <Pressable
                        style={styles.rankCard}
                        onPress={() =>
                            handleNav("Armor Display", { rank: "high" })
                        }
                    >
                        <Text style={styles.cardText}>High Rank</Text>
                    </Pressable>
                    <Pressable
                        style={styles.rankCard}
                        onPress={() =>
                            handleNav("Armor Display", { rank: "master" })
                        }
                    >
                        <Text style={styles.cardText}>Master Rank</Text>
                    </Pressable>
                </View>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    rankCard: {
        borderWidth: 2,
        alignItems: "center",
        padding: 10,
        margin: 8,
        borderRadius: 10,
        backgroundColor: "#f5f5f5",
    },
    cardText: {
        fontSize: 20,
        fontWeight: "400",
    },
});
