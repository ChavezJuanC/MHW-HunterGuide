import { View, Text, ImageBackground } from "react-native";
import { useLayoutEffect } from "react";
import DamageTypes from "../components/DamageTypes";

export default function WeaponTypesScreen({ route, navigation }) {
    const { title } = route.params;

    useLayoutEffect(() => {
        navigation.setOptions({
            title: title.slice(-1) === "s" ? title : ` ${title}s`,
        });
    }, [navigation, title]);

    return (
        <ImageBackground
            source={require("../assets/categoryCards/gray-concrete-wall.jpg")
            
            }
        >
            <DamageTypes weaponType={title} />
        </ImageBackground>
    );
}
