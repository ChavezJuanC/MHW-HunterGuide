import { View, Text, Image, StyleSheet } from "react-native";

export default function WeaponDetailsScreen({ route }) {
    const { dataObject, weaponName } = route.params;
    const data = dataObject.find((element) => element.name === weaponName);
    console.log(data);

    return (
        <View style={styles.mainView}>
            <Image
                source={{ uri: data.assets.image }}
                style={styles.weaponImg}
            />
            <Text style={styles.nameText}>{data.name}</Text>
            <Image source={{ uri: data.assets.icon }} style={styles.iconImg} />
            <View>
                <Text>
                    Damage: {data.attack.display} +{data.attack.raw}
                </Text>
                <Text>Damage Type: {data.damageType}</Text>
                {data.elements
                    ? data.elements.map((element) => (
                          <Text>
                              Element Damage: {element.type}
                              {`(${element.damage})`}
                          </Text>
                      ))
                    : null}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        alignItems: "center",
    },
    weaponImg: {
        width: 250,
        height: 250,
    },
    nameText: {
        fontSize: 30,
        fontWeight: "500",
    },
    iconImg: {
        width: 40,
        height: 40,
    },
    damageLabel: {},
    damageAmount: {},
});
