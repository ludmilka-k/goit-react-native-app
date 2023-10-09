import { TouchableOpacity, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const HeaderIconBack = () => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity
            style={styles.HeaderIconBack}
            onPress={() => navigation.navigate("PostsScreen")}
        >
            <Feather name="arrow-left" size={24} color="rgba(33, 33, 33, 0.8)" />
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    HeaderIconBack: {
        left: 16,
    }
});


export default HeaderIconBack;