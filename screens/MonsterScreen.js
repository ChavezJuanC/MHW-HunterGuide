import { View, FlatList, ImageBackground } from "react-native";
import monsterData from "../data/MonsterData.json";
import MonsterCard from "../components/MonsterCard";

export default function MonstersScreen() {
    monsterData.sort((a, b) => {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
    });

    const backgroundImg = require("../assets/categoryCards/cover.png");

    return (
        <View>
            <ImageBackground source={backgroundImg}>
                <FlatList
                    data={monsterData}
                    renderItem={({ item }) => (
                        <MonsterCard
                            monsterName={item.name}
                            type={item.species}
                        />
                    )}
                    keyExtractor={(item) => item.id}
                    ListHeaderComponent={() => (
                        <View style={{ height: 20 }}></View>
                    )}
                    ListFooterComponent={() => (
                        <View style={{ height: 20 }}></View>
                    )}
                    ItemSeparatorComponent={() => (
                        <View style={{ height: 8 }}></View>
                    )}
                />
            </ImageBackground>
        </View>
    );
}
