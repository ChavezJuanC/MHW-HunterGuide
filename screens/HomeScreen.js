import { View, FlatList, StyleSheet, ImageBackground } from "react-native";
import CategoryCard from "../components/CategoryCard";

export default function HomeScreen() {
    const monstersCover = require("../assets/categoryCards/cover.png");
    const categories = [
        { type: "Monsters", id: 1, cover: monstersCover },
        { type: "Weapons", id: 2, cover: monstersCover },
        { type: "Armor", id: 3, cover: monstersCover },
        { type: "Ailments", id: 4, cover: monstersCover },
        { type: "Charms", id: 5, cover: monstersCover },
        { type: "Decorations", id: 6, cover: monstersCover },
        { type: "More", id: 7, cover: monstersCover },
    ];

    return (
        <ImageBackground
            source={require("../assets/categoryCards/gray-concrete-wall.jpg")}
        >
            <View>
                <FlatList
                    data={categories}
                    renderItem={({ item }) => (
                        <CategoryCard category={item.type} cover={item.cover} />
                    )}
                    keyExtractor={(item) => item.id.toString()}
                    ItemSeparatorComponent={() => (
                        <View style={styles.separator}></View>
                    )}
                    ListHeaderComponent={() => (
                        <View style={styles.listHeader}></View>
                    )}
                    ListFooterComponent={() => (
                        <View style={styles.listFooter}></View>
                    )}
                />
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    separator: {
        height: 10,
    },
    listHeader: {
        height: 15,
    },
    listFooter: {
        height: 15,
    },
});
