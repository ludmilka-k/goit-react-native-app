import bgImage from "../../assets/photo-bg.jpg";
import {
    View,
    ImageBackground,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback,
    KeyboardAvoidingView,
    Keyboard,
    Platform,
} from "react-native";
import {useState} from "react";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
    const navigation = useNavigation();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [isFocusedInput, setIsFocusedInput] = useState(null);
    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = () => {
        const formData = {
            email,
            password,
        };
        console.log("Login:", formData);
        setEmail('');
        setPassword('');
        setIsFocusedInput(null)
        setShowPassword(false);

        navigation.navigate("BottomNavigator");
    };

    // const handleRegistration = () => {
    //     console.log('Redirect to Registration');
    // };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <KeyboardAvoidingView style={styles.flexContainer}
                                  behavior={Platform.OS === "ios" ? "padding" : "height"}
                                  keyboardVerticalOffset={-200}
                                  enabled
            >
                <View style={styles.container}>
                    <ImageBackground style={styles.bgImage} source={bgImage}>
                        <View style={styles.loginBox}>
                            <Text style={styles.title}>Увійти</Text>
                            <TextInput style={[styles.input, isFocusedInput === "email" && styles.isFocus]}
                                placeholder="Адреса електронної пошти"
                                value={email}
                                onChangeText={setEmail}
                                onFocus={() => setIsFocusedInput("email")}
                                onBlur={() => setIsFocusedInput(null)}
                                autoCapitalize="none"
                            />
                            <View style={styles.passwordWrapper}>
                                <TextInput
                                    style={[styles.input, isFocusedInput === "password" && styles.isFocus]}
                                    placeholder="Пароль"
                                    value={password}
                                    onChangeText={setPassword}
                                    onFocus={() => setIsFocusedInput("password")}
                                    onBlur={() => setIsFocusedInput(null)}
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    secureTextEntry={!showPassword}
                                />
                                <View style={styles.showHideContainer}>
                                    <TouchableOpacity activeOpacity={0.5}
                                                      style={styles.showHideButton}
                                                      onPress={() => setShowPassword(!showPassword)}>
                                        <Text style={ styles.defaultText}>
                                            {showPassword ? "Приховати" : "Показати"}
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <TouchableOpacity style={styles.LoginBtn}
                                              onPress={handleLogin}>
                                <Text style={styles.invertText}>Увійти</Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => navigation.navigate("RegistrationScreen")}>
                                <Text style={styles.defaultText}>
                                    Немає акаунту? <Text style={styles.underline}>Зареєструватися</Text>
                                </Text>
                            </TouchableOpacity>
                        </View>

                    </ImageBackground>
                </View>
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
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
        justifyContent: "flex-end",
        alignItems: "center",
    },
    loginBox: {
        width: "100%",
        backgroundColor: "#FFFFFF",
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,
        paddingLeft: 16,
        paddingRight: 16,
        paddingBottom: 78,
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
        fontFamily: "Roboto-Regular",
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
    LoginBtn: {
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
    isFocus: {
        borderColor: "#FF6C00",
        backgroundColor: "#FFFFFF",
    },
});

export default LoginScreen;