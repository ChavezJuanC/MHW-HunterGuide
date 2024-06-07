import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";
export default function App() {
    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer style={styles.container}>
            <Stack.Navigator name="Home" component={HomeScreen} />
            <Stack.Navigator name="About" component={AboutScreen} />
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
