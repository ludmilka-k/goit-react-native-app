import {StyleSheet, Text, View} from "react-native";
import React from "react";

const CommentsScreen = () => {
    return (
        <View style={styles.container}>

            <Text style={styles.title}>Коментарі</Text>
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
export default CommentsScreen