import bgImage from '../../assets/photo-bg.jpg';
import {
    View,
    ImageBackground,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
} from 'react-native';

const LoginScreen = () => {


    return (
        <View style={styles.container}>
            <ImageBackground style={styles.bgImage} source={bgImage}>
                <View style={styles.loginBox}>
                    <Text style={styles.title}>Увійти</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Адреса електронної пошти"

                    />
                    <View style={styles.passwordWrapper}>
                        <TextInput
                            style={styles.input}
                            placeholder="Пароль"

                        />
                        <TouchableOpacity
                            activeOpacity={0.5}>
                            <Text style={[styles.showHideText, styles.defaultText]}>Показати
                                {/*{showPassword ? "Приховати" : "Показати"}*/}
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styles.btnLogin}>
                        <Text style={styles.invertText}>Увійти</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        // style={styles.btnRerister}
                    >
                        <Text style={styles.defaultText}>
                            Немає акаунту? <Text style={styles.underline}>Зареєструватися</Text>
                        </Text>
                    </TouchableOpacity>

                </View>

            </ImageBackground>
        </View>
    )
};

const styles = StyleSheet.create({
    flexContainer: {
        flex: 1,
    },
    container: {
        flex: 1,
        position: "relative",
    },
    bgImage: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    loginBox: {
        width: '100%',
        backgroundColor: "#FFFFFF",
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,
        paddingLeft: 16,
        paddingRight: 16,
        paddingBottom: 78,
    },
    title: {
        fontFamily: 'Roboto-Medium',
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
        width: '100%',
        height: 50,
        marginBottom: 16,
        padding: 16,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#E8E8E8",
        backgroundColor: "#F6F6F6",

        fontFamily: 'Roboto-Regular',
        fontSize: 16,
        fontWeight: "700",
        lineHeight: 19,
    },
    passwordWrapper: {
        position: 'relative',
    },
    showHideText: {
        position: 'absolute',
        right: 32,
        bottom: 30,

    },
    defaultText: {
        fontFamily: 'Roboto-Regular',
        fontSize: 16,
        lineHeight: 19,
        color: '#1B4371',
        textAlign: "center",
    },
    invertText: {
        fontFamily: "Roboto-Regular",
        fontSize: 16,
        fontWeight: "400",
        lineHeight: 19,
        color: "#FFFFFF",
        textAlign: "center",
    },
    btnLogin: {
        borderRadius: 50,
        backgroundColor: "#FF6C00",
        marginHorizontal: 16,
        marginTop: 24,
        marginBottom: 16,
        paddingVertical: 16,
    },
    underline: {
        textDecorationLine: 'underline',
    },
});

export default LoginScreen;