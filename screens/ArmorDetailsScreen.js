import { View, Text, ImageBackground, Image, StyleSheet } from "react-native";
import ArmorData from "../data/ArmorData.json";

export default function ArmorDetailsScreen({ route }) {
    const { armorId } = route.params;
    const filteredData = ArmorData.find((element) => element.id === armorId);
    console.log(filteredData);

    return (
        <ImageBackground
            source={require("../assets/categoryCards/gray-concrete-wall.jpg")}
        >
            <View style={styles.mainView}>
                <Image
                    source={{
                        uri: filteredData.assets
                            ? filteredData.assets.imageMale
                            : "https://picsum.photos/400",
                    }}
                    style={styles.img}
                />
                <Text style={styles.nameText}>{filteredData.name}</Text>
                <View
                    style={{
                        marginTop: 10,
                        marginBottom: 20,
                        alignItems: "center",
                    }}
                >
                    <Text style={styles.defenseText}> - Skills - </Text>
                    {filteredData.skills
                        ? filteredData.skills.map((element) => (
                              <>
                                  <Text style={styles.descriptionText}>
                                      <Text style={styles.label}>Name: </Text>
                                      {element.skillName}
                                  </Text>
                                  <Text style={styles.descriptionText}>
                                      <Text style={styles.label}>Des: </Text>
                                      {element.description}
                                  </Text>
                              </>
                          ))
                        : null}
                </View>
                <Text style={styles.skillsText}> - Defense - </Text>
                <Text style={styles.defenseLabel}>
                    Base:
                    <Text style={styles.defenseAmount}>
                        {" "}
                        {filteredData.defense.base}
                    </Text>
                </Text>
                <Text style={styles.defenseLabel}>
                    Max:
                    <Text style={styles.defenseAmount}>
                        {" "}
                        {filteredData.defense.max}
                    </Text>
                </Text>
                <Text style={styles.defenseLabel}>
                    AD:
                    <Text style={styles.defenseAmount}>
                        {" "}
                        {filteredData.defense.augmented}
                    </Text>
                </Text>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    mainView: {
        height: "100%",
        alignItems: "center",
    },
    img: {
        height: 200,
        width: 200,
        borderRadius: 100,
        margin: 20,
    },
    nameText: {
        padding: 20,
        fontSize: 22,
        fontWeight: "600",
    },
    defenseText: {
        padding: 10,
        fontSize: 21,
        fontWeight: "500",
    },
    defenseLabel: {
        padding: 5,
        fontSize: 18,
        fontWeight: "500",
    },
    defenseAmount: {
        padding: 5,
        fontSize: 18,
        fontWeight: "600",
        color: "#3da9f0",
    },
    label: {
        fontSize: 18,
        fontWeight: "500",
    },
    skillsText: {
        padding: 10,
        fontSize: 21,
        fontWeight: "500",
        textAlign: "center",
    },
    descriptionText: {
        marginHorizontal: 20,
        fontSize: 15,
        fontWeight: "400",
    },
});
