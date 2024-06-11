import { View, Text, StyleSheet, FlatList } from "react-native";
import PreviewCard from "../components/PreviewCard";
import rawData from "../data/WeaponsData.json";

export default function WeaponsDisplayScreen({ route }) {
    const { weaponType, element } = route.params;

    const formatSearchParams = () => {
        let weaponName = "";

        switch (weaponType) {
            case "Bow":
                weaponName = "bow";
                break;
            case "Charge Blade":
                weaponName = "charge-blade";
                break;
            case "Dual Blades":
                weaponName = "dual-blades";
                break;
            case "Great Sword":
                weaponName = "great-sword";
                break;
            case "Gun Lance":
                weaponName = "gunlance";
                break;
            case "Hammer":
                weaponName = "hammer";
                break;
            case "Heavy Bow Gun":
                weaponName = "heavy-bowgun";
                break;
            case "Hunting Horn":
                weaponName = "hunting-horn";
                break;
            case "Insect Glaive":
                weaponName = "insect-glaive";
                break;
            case "Lance":
                weaponName = "lance";
                break;
            case "Light Bow Gun":
                weaponName = "light-bowgun";
                break;
            case "Switch Axe":
                weaponName = "switch-axe";
                break;
            case "Sword & Shield":
                weaponName = "sword-and-shield";
                break;
            case "Long Sword":
                weaponName = "long-sword";
                break;
        }

        return weaponName;
    };

    let weaponName = formatSearchParams();
    let elementName = element.toLowerCase();

    const filteredData = rawData.filter((element) => {
        if (elementName != "raw") {
            return (
                element.type === weaponName &&
                element.elements.some((element) => element.type === elementName)
            );
        } else {
            return element.type === weaponName && element.elements.length === 0;
        }
    }); //maybe turn this into a switch

    return (
        <FlatList
            data={filteredData}
            renderItem={({ item }) => (
                <View>
                    <PreviewCard
                        imgUri={"https://picsum.photos/100"}
                        weaponName={item.name}
                    />
                </View>
            )}
            ListHeaderComponent={() => (
                <Text style={styles.headerText}>
                    {element}
                    {" Damage "}
                    {weaponType.slice(-1) === "s"
                        ? weaponType
                        : `${weaponType}s`}
                </Text>
            )}
        />
    );
}

const styles = StyleSheet.create({
    headerText: {
        fontSize: 25,
        fontWeight: "600",
        textAlign: "center",
        margin: 8,
    },
});

/*


*/
