import { View, Text, ImageBackground } from "react-native";
import Slots from "../components/Slots";
export default function DecorationsScreen() {
    return (
        <ImageBackground
            source={require("../assets/categoryCards/gray-concrete-wall.jpg")}
        >
            <View style={{ height: "100%" }}>
                <Slots />
            </View>
        </ImageBackground>
    );
}
