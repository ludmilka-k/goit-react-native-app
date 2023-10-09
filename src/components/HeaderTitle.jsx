import { View, Text, StyleSheet } from "react-native";
const HeaderTitle = ({Title}) => {
    return (
        <View>
            <Text style={styles.mainTitle}>{Title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    mainTitle: {
        fontFamily: "Roboto-Medium",
        fontSize: 17,
        lineHeight: 22,
        color: "#212121",
        backgroundColor: '#ffffff',
    },
});

export default HeaderTitle;