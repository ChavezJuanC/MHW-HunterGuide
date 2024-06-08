import {
    View,
    Text,
    StyleSheet,
    Pressable,
    ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function CategoryCard({ category, cover }) {
    const navigation = useNavigation();
    return (
        <Pressable
            onPress={() => {
                console.log(category);
                navigation.navigate(category);
            }}
            style={styles.cardContainer}
        >
            <ImageBackground
                source={cover}
                resizeMode="cover"
                style={styles.cover}
            >
                <View>
                    <Text style={styles.categoryText}>{category}</Text>
                </View>
            </ImageBackground>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    cardContainer: {
        borderWidth: 2,
        borderColor: "black",
        marginHorizontal: 10,
        height: 100,
        backgroundColor: "white",
        borderRadius: 10,
    },
    categoryText: {
        fontSize: 25,
        fontWeight: "700",
        padding: 10,
        borderRadius: 5,
        color: "white",
    },
    cover: {
        flex: 1,
        borderRadius: 10,
    },
});
