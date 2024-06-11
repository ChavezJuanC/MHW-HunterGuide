import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";
import MonstersScreen from "./screens/MonsterScreen";
import MonsterDetailsScreen from "./screens/MonsterDetailsScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MapsScreen from "./screens/MapsScreen";
import ExtraScreen from "./screens/ExtraScreen";
import WeaponsScreen from "./screens/WeaponsScreen";
import ArmorScreen from "./screens/ArmorScreen";
import WeaponTypesScreen from "./screens/WeaponTypesScreen";
import WeaponsDisplayScreen from "./screens/WeaponsDisplayScreen";

export default function App() {
    const Stack = createNativeStackNavigator();
    const Tab = createBottomTabNavigator();

    const StackNav = () => (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{ title: "HunterMate" }}
            />
            <Stack.Screen name="Monsters" component={MonstersScreen} />
            <Stack.Screen
                name="Monster Details"
                component={MonsterDetailsScreen}
            />
            <Stack.Screen name="Weapons" component={WeaponsScreen} />
            <Stack.Screen name="Weapon Types" component={WeaponTypesScreen} />
            <Stack.Screen name="Armor" component={ArmorScreen} />
            <Stack.Screen
                name="Weapons Display"
                component={WeaponsDisplayScreen}
            />
        </Stack.Navigator>
    );

    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen
                    name="HomeTab"
                    component={StackNav}
                    options={{
                        headerShown: false,
                    }}
                />
                <Tab.Screen name="Maps" component={MapsScreen} />
                <Tab.Screen name="Extra" component={ExtraScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
