import { View, Text, Image, StyleSheet } from "react-native";

export default function WeaponDetailsScreen({ route }) {
    const { dataObject, weaponName } = route.params;
    const data = dataObject.find((element) => element.name === weaponName);
    console.log(data);

    return (
        <View style={styles.mainView}>
            <View style={styles.imageView}>
                <Image
                    source={{ uri: data.assets.image }}
                    style={styles.weaponImg}
                />
            </View>

            <Text style={styles.nameText}>{data.name}</Text>
            <Image source={{ uri: data.assets.icon }} style={styles.iconImg} />
            <View style={styles.statsView}>
                <Text style={styles.damageLabel}>
                    Damage:
                    <Text style={styles.damageAmount}>
                        {data.attack.display}D +{data.attack.raw}R
                    </Text>
                </Text>
                <Text style={styles.damageLabel}>
                    Damage Type:{" "}
                    <Text style={styles.damageAmount}>
                        {data.damageType.toUpperCase()}
                    </Text>
                </Text>
                {data.elements
                    ? data.elements.map((element) => (
                          <Text key={data.id} style={styles.damageLabel}>
                              Element Damage:
                              <Text style={styles.damageAmount}>
                                  {element.type.toUpperCase()}
                                  {`(${element.damage})`}
                              </Text>
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
        width: 260,
        height: 260,
    },
    nameText: {
        margin: 10,
        fontSize: 30,
        fontWeight: "400",
    },
    iconImg: {
        width: 40,
        height: 40,
    },
    damageLabel: {
        fontSize: 20,
        fontWeight: "400",
    },
    damageAmount: {
        fontSize: 17,
        fontWeight: "500",
        color: "#3da9f0",
    },
    statsView: {
        padding: 10,
        margin: 20,
    },
    imageView: {
        borderWidth: 2,
        borderRadius: 10,
        margin: 20,
    },
});
