import { View, Text } from "react-native";
import { useLayoutEffect } from "react";

export default function WeaponTypesScreen({ route, navigation }) {
    const { title } = route.params;

    useLayoutEffect(() => {
        navigation.setOptions({
            title: title.slice(-1) === "s" ? title : ` ${title}s`,
        });
    }, [navigation, title]);

    return (
        <View>
            <Text>{title} Types</Text>
        </View>
    );
}
