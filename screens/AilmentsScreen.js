import { View, Text, FlatList, Pressable, ImageBackground } from "react-native";
import PreviewCard from "../components/PreviewCard";
import AilmentData from "../data/AilmentsData.json";

export default function AilmentsScreen({ navigation }) {
    return (
        <View>
            <ImageBackground
                source={require("../assets/categoryCards/gray-concrete-wall.jpg")}
            >
                <FlatList
                    data={AilmentData}
                    renderItem={({ item }) => (
                        <Pressable
                            onPress={() =>
                                navigation.navigate("Ailment Details", {
                                    ailmentName: item.name,
                                })
                            }
                        >
                            <PreviewCard
                                imgUri={"https://picsum.photos/400"}
                                weaponName={item.name}
                            />
                        </Pressable>
                    )}
                />
            </ImageBackground>
        </View>
    );
}
