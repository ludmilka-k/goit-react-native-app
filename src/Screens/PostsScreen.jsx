import avatar from '../../assets/avatar.jpg';
import {
    View,
    Image,
    StyleSheet,
    Text,
} from 'react-native';

const PostsScreen = () => {
    return (
        <View style={styles.innerContainer}>
            <View style={styles.user}>
                <Image style={styles.avatar} source={avatar}/>
                <View>
                    <Text style={styles.userName}>Natali Romanova</Text>
                    <Text style={styles.userEmail}>email@example.com</Text>
                </View>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    innerContainer: {
        flex: 1,
        width: "100%",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        paddingTop: 32,
        paddingHorizontal: 16,
        backgroundColor: "#FFFFFF",
        borderTopColor: "#000000",
    },
    user: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
    },
    avatar: {
        width: 60,
        height: 60,
        borderRadius: 16,
    },
    userName: {
        fontSize: 13,
        fontWeight: "500",
        lineHeight: 15,
        color: '#212121',
    },
    userEmail: {
        fontWeight: "400",
        fontSize: 11,
        lineHeight: 13,
        color: '#212121',
    },

});

export default PostsScreen;