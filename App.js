import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";
import MonstersScreen from "./screens/MonsterScreen";
import MonsterDetailsScreen from "./screens/MonsterDetailsScreen";

export default function App() {
    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
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
            </Stack.Navigator>
        </NavigationContainer>
    );
}
