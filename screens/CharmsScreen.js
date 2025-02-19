import { View, FlatList, Pressable, ImageBackground } from "react-native";
import CharmsData from "../data/CharmsData.json";
import PreviewCard from "../components/PreviewCard";

export default function CharmsScreen({ navigation }) {
    return (
        <View>
            <ImageBackground source={require("../assets/categoryCards/gray-concrete-wall.jpg")}>
                <FlatList
                    data={CharmsData}
                    renderItem={({ item }) => (
                        <Pressable
                            onPress={() =>
                                navigation.navigate("Charms Details", {
                                    charmName: item.name,
                                })
                            }
                        >
                            <PreviewCard
                                imgUri={"https://picsum.photos/100"}
                                weaponName={item.name}
                            />
                        </Pressable>
                    )}
                />
            </ImageBackground>
        </View>
    );
}
