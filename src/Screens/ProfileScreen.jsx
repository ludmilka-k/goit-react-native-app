import React from 'react';
import bgImage from '../../assets/photo-bg.jpg';
import { AntDesign } from '@expo/vector-icons';
import UserPost from "../components/UserPost";
// import avatar from '../../assets/avatar.jpg';
import {
    View,
    // Image,
    ImageBackground,
    StyleSheet,
    Text,
    TouchableOpacity,
    SafeAreaView,
} from 'react-native';
import HeaderIconLogout from '../components/HeaderIconLogout';

const ProfileScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground style={styles.bgImage} source={bgImage}>
                <View style={styles.profileBox}>
                    <View style={styles.avatar}>
                        {/*<Image  style={styles.avatar} source={avatar}/>*/}
                        <TouchableOpacity style={styles.closeAvatar}>
                            <AntDesign name="pluscircleo" size={24} color="#BDBDBD"/>
                            {/*<AntDesign name="closecircleo" size={24} color="#BDBDBD"/>*/}
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.title}>Natali Romanova</Text>
                    <View style={styles.logOutIcon}>
                        <HeaderIconLogout />
                    </View>
                    {/*<FlatList/>*/}
                    <UserPost/>
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
};

const styles= StyleSheet.create({
    flexContainer: {
        flex: 1,
    },
    container: {
        flex: 1,
        position: "relative",
    },
    bgImage: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    logOutIcon: {
        position: "absolute",
        top: 22,
        right: 16,
    },
    profileBox: {
        width: "100%",
        backgroundColor: "#FFFFFF",
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,
        paddingLeft: 16,
        paddingRight: 16,
        paddingBottom: 78,
    },
    avatarThumb: {
        width: 120,
        height: 120,
        backgroundColor: "#F6F6F6",
        marginLeft: "auto",
        marginRight: "auto",
        borderRadius: 16,
        marginTop: -60,
    },
    avatar: {
        width: 120,
        height: 120,
        backgroundColor: "#F6F6F6",
        marginLeft: "auto",
        marginRight: "auto",
        borderRadius: 16,
        marginTop: -60,
    },
    closeAvatar: {
        width: 25,
        height: 25,
        borderRadius: 50,
        marginLeft: "auto",
        marginTop: "auto",
        marginBottom: 12,
        marginRight: -12,
        backgroundColor: "#FFFFFF",
    },
    title: {
        fontFamily: "Roboto-Medium",
        fontSize: 30,
        textAlign: "center",
        fontWeight: "500",
        lineHeight: 35,
        marginTop: 32,
        marginBottom: 32,
        backgroundColor: "#ffffff",
        color: "#212121",
    },
    input: {
        width: "100%",
        height: 50,
        marginBottom: 16,
        padding: 16,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#E8E8E8",
        backgroundColor: "#F6F6F6",

        fontFamily: "Roboto-Regular",
        fontSize: 16,
        fontWeight: "700",
        lineHeight: 19,
    },
    passwordWrapper: {
        position: "relative",
    },
    showHideContainer: {
        position: "absolute",
        right: 0,
        bottom: 32,
    },
    showHideButton: {
        // borderWidth: 1,
        paddingHorizontal: 16,
    },
    defaultText: {
        fontFamily: "Roboto-Bold",
        fontSize: 16,
        lineHeight: 19,
        color: '#1B4371',
        textAlign: "center",
    },
    invertText: {
        fontFamily: "Roboto-Bold",
        fontSize: 16,
        fontWeight: "400",
        lineHeight: 19,
        color: "#FFFFFF",
        textAlign: "center",
    },
    registrationBtn: {
        borderRadius: 50,
        backgroundColor: "#FF6C00",
        marginHorizontal: 16,
        marginTop: 24,
        marginBottom: 16,
        paddingVertical: 16,
    },
    isFocus: {
        borderColor: "#FF6C00",
        backgroundColor: "#FFFFFF",
    },
});


export default ProfileScreen;