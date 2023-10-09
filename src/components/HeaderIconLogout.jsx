import { TouchableOpacity, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
const HeaderIconLogout = () => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity
            style={styles.HeaderIconLogout}
            onPress={() => navigation.navigate("LoginScreen")}
        >
            <Feather name="log-out" size={24} color="#BDBDBD" />
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    HeaderIconLogout: {
        right: 16,
    }
})

export default HeaderIconLogout;