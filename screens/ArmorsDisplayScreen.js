import { View, FlatList, Pressable, ImageBackground } from "react-native";
import AmorData from "../data/ArmorData.json";
import PreviewCard from "../components/PreviewCard";

export default function ArmorsDisplayScreen({ route, navigation }) {
    const { rank } = route.params;

    const filteredData = AmorData.filter((element) => element.rank === rank);

    return (
        <View>
            <ImageBackground
                source={require("../assets/categoryCards/gray-concrete-wall.jpg")}
            >
                <FlatList
                    data={filteredData}
                    renderItem={({ item }) => (
                        <Pressable
                            onPress={() => {
                                navigation.navigate("Armor Details", {
                                    armorId: item.id,
                                });
                            }}
                        >
                            <PreviewCard
                                imgUri={
                                    item.assets
                                        ? item.assets.imageMale ||
                                          item.assets.imageFemale
                                        : "https://picsum.photos/100"
                                }
                                weaponName={item.name}
                                key={item.id}
                            />
                        </Pressable>
                    )}
                />
            </ImageBackground>
        </View>
    );
}
