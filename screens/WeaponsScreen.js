import React from "react";
import { FlatList, ImageBackground, StyleSheet, View } from "react-native";
import WeaponCard from "../components/WeaponCard";

export default function WeaponsScreen() {
    const weaponImgs = {
        bow: require("../assets/weapons/bow.png"),
        chargeBlade: require("../assets/weapons/chargeblade.png"),
        dualBlades: require("../assets/weapons/dualblades.png"),
        greateSword: require("../assets/weapons/greatsword.png"),
        gunLance: require("../assets/weapons/gunlance.png"),
        hammer: require("../assets/weapons/hammer.png"),
        heavyBowGun: require("../assets/weapons/heavybowgun.png"),
        huntingHorn: require("../assets/weapons/huntinghorn.png"),
        insectGlaive: require("../assets/weapons/insectglaive.png"),
        lance: require("../assets/weapons/lance.png"),
        lightBowGun: require("../assets/weapons/lightbowgun.png"),
        longSword: require("../assets/weapons/greatsword.png"),
        switchAxe: require("../assets/weapons/switchaxe.png"),
        swordAndShield: require("../assets/weapons/swordandshield.png"),
    };

    const weaponsData = [
        { img: weaponImgs.bow, title: "Bow" },
        { img: weaponImgs.chargeBlade, title: "Charge Blade" },
        { img: weaponImgs.dualBlades, title: "Dual Blades" },
        { img: weaponImgs.greateSword, title: "Greate Sword" },
        { img: weaponImgs.gunLance, title: "Gun Lance" },
        { img: weaponImgs.hammer, title: "Hammer" },
        { img: weaponImgs.heavyBowGun, title: "Heavy Bow Gun" },
        { img: weaponImgs.huntingHorn, title: "Hunting Horn" },
        { img: weaponImgs.insectGlaive, title: "Insect Glaive" },
        { img: weaponImgs.lance, title: "Lance" },
        { img: weaponImgs.lightBowGun, title: "Light Bow Gun" },
        { img: weaponImgs.longSword, title: "Long Sword" },
        { img: weaponImgs.switchAxe, title: "Swicth Axe" },
        { img: weaponImgs.swordAndShield, title: "Sword & Shield" },
    ];

    return (
        <ImageBackground source={require("../assets/categoryCards/gray-concrete-wall.jpg")}>
            <FlatList
                data={weaponsData}
                renderItem={({ item }) => (
                    <View style={styles.cardWrapper}>
                        <WeaponCard weaponImg={item.img} title={item.title} />
                    </View>
                )}
                keyExtractor={(item) => item.title}
                numColumns={2}
                contentContainerStyle={styles.cardsContainer}
            />
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    cardsContainer: {
        padding: 10,
    },
    cardWrapper: {
        flex: 1,
        margin: 15,
    },
});
