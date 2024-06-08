import { View, StyleSheet, Image, Text } from "react-native";
import { useLayoutEffect } from "react";

export default function MonsterDetailsScreen({ route, navigation }) {
    const { monsterName } = route.params;

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
                        uri: "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/ancient_leshen_mhw.png",
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
