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
            <View style={styles.innerContainer}>
                <ImageBackground
                    source={cover}
                    resizeMode="cover"
                    style={styles.cover}
                    imageStyle={styles.imageStyle}
                >
                    <Text style={styles.categoryText}>{category}</Text>
                </ImageBackground>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    cardContainer: {
        borderWidth: 3,
        borderColor: "black",
        marginHorizontal: 10,
        height: 100,
        backgroundColor: "white",
        borderRadius: 10,
        overflow: "hidden",
    },
    innerContainer: {
        flex: 1,
        overflow: "hidden",
        borderRadius: 7, // Slightly less than the parent to ensure proper fitting
    },
    categoryText: {
        fontSize: 25,
        fontWeight: "700",
        padding: 10,
        borderRadius: 5,
        color: "#f5f5f5",
    },
    cover: {
        flex: 1,
        justifyContent: "center",
    },
    imageStyle: {
        borderRadius: 7, // Same as innerContainer to match the rounded corners
    },
});
