import { View, StyleSheet, Image, Text } from "react-native";
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
        fontSize: 25,
        fontWeight: "600",
    },
});
