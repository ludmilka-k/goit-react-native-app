import {StyleSheet, Text, View} from "react-native";


const MapScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Карта</Text>
        </View>
    )
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",

    },
    title: {
        fontSize: 24,
        fontFamily: "Roboto-Medium",
    },
    backIcon: {

    },
})
export default MapScreen;