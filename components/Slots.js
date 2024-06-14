import { View, Text, StyleSheet } from "react-native";

export default function SlotsScreen() {
    return (
        <View>
            <View style={styles.slotsContainer}>
                <Text style={styles.text}>1 SLOT</Text>
            </View>
            <View style={styles.slotsContainer}>
                <Text style={styles.text}>2 SLOTS</Text>
            </View>
            <View style={styles.slotsContainer}>
                <Text style={styles.text}>3 SLOTS</Text>
            </View>
            <View style={styles.slotsContainer}>
                <Text style={styles.text}>4 SLOTS</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    slotsContainer: {},
    text: {},
});
