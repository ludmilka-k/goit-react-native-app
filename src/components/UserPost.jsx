import { Feather } from '@expo/vector-icons';
import placeholder from '../../assets/placeholder.jpg';
import {
    TouchableOpacity,
    StyleSheet,
    View,
    Text,
    Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const UserPost = ({comments, likes, country}) => {
    const navigation = useNavigation();

    const addLike = () => {
        console.log("Add like")
    };

    return (
        <View style={styles.container}>
            <Image source={placeholder} style={styles.image} />
            <Text style={styles.title}>Text</Text>
            <View style={styles.feedbackBox}>
                <View style={styles.feedbackInfo}>
                    <TouchableOpacity style={styles.feedbackInfo}
                                      onPress={() => navigation.navigate("CommentsScreen")}>
                        <Feather
                            name="message-circle"
                            size={24}
                            style={[styles.icon, comments?.length && styles.iconActive]}
                        />
                    </TouchableOpacity>
                    <Text style={{...styles.text, marginRight: 24 }}>{comments?.length || 0}</Text>
                    <TouchableOpacity style={styles.feedbackInfo} onPress={() => addLike} >
                        <Feather
                            name="thumbs-up"
                            size={24}
                            style={[styles.icon, likes > 0 && styles.iconActive]}
                        />
                    </TouchableOpacity>
                    <Text style={{...styles.text, marginRight: 24 }}>{comments?.length || 0}</Text>
                </View>
                <TouchableOpacity
                    style={styles.feedbackInfo}
                    onPress={() => { navigation.navigate('MapScreen') }}>
                    <Feather name="map-pin" size={24} style={styles.icon}/>
                    <Text style={{...styles.text, textDecorationLine: 'underline'}}>{country || "unknown"}</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create ({
    container: {
        width: "100%",
    },
    image: {
        width: "100%",
        height: 240,
        borderRadius: 8,
        overflow: "hidden",
    },
    title: {
        marginTop: 8,
        marginBottom: 8,
        fontSize: 16,
        fontFamily: "Roboto-Medium",
        alignItems: "center"
    },
    feedbackBox: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    feedbackInfo: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
    },
    text: {
        fontSize: 16,
        fontFamily: "Roboto-Regular",
        fontWeight: "400",
        color: '#212121',

    },
    icon: {
        color: '#BDBDBD',
        marginRight: 6
    },
    iconActive: {
        color: '#FF6C00',
    },
})

export default UserPost;