import React, {useState} from "react";
import {
    View,
    // Image,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback,
    KeyboardAvoidingView,
    Keyboard,
    Platform
} from "react-native";
import {Feather, FontAwesome} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";


const CreatePostsScreen = () => {
    const [photoUri, setPhotoUri] = useState(null);
    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const [isFocusedInput, setIsFocusedInput] = useState(null);
    const navigation = useNavigation();

    const handleTakePhoto = () => {

    };
    const handleEditPhoto = () => {

    };
    const handlePublishPhoto = () => {
        const formData = {
            photoUri,
            name,
            location,
        };
        console.log("Publish:", formData);
        setPhotoUri(null);
        setName('');
        setLocation('');
        setIsFocusedInput(null);
        navigation.navigate("PostsScreen");
    };

    const deletePost = () => {
        setPhotoUri(null);
        setName('');
        setLocation('');
    };

    return (
        < TouchableWithoutFeedback onPress={Keyboard.dismiss} >
            <View style={styles.container}>
                {/*<Image source={{ uri: photoUri }} style={styles.image} />*/}
                <View style={styles.cameraBox}>
                    <TouchableOpacity style={styles.cameraBtn} onPress={handleTakePhoto}>
                        <FontAwesome   name='camera' size={24} color='#FFFFFF' />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={handleEditPhoto}>
                    <Text style={{...styles.helperText, marginBottom: 32}}>
                        {photoUri ? "Редагувати фото" : "Завантажте фото"}
                    </Text>
                </TouchableOpacity>
                <KeyboardAvoidingView style={styles.flexContainer}
                                      behavior={Platform.OS === "ios" ? "padding" : "height"}
                                      keyboardVerticalOffset={20}
                                      enabled
                >
                    <TextInput
                        style={[{...styles.input, marginBottom: 16}, isFocusedInput === "name" && styles.isFocus]}
                        placeholder="Назва..."
                        value={name}
                        onChangeText={setName}
                        onFocus={() => setIsFocusedInput("name")}
                        onBlur={() => setIsFocusedInput(null)}
                    />
                    <View style={styles.locationWrap}>
                        <Feather style={styles.iconMap} name="map-pin" size={24} color="#BDBDBD"/>
                        <TextInput
                            style={[styles.input, styles.location, isFocusedInput === "location" && styles.isFocus]}
                            placeholder="Місцевість..."
                            value={location}
                            onChangeText={setLocation}
                            onFocus={() => setIsFocusedInput("location")}
                            onBlur={() => setIsFocusedInput(null)}
                        />
                    </View>
                    <TouchableOpacity style={styles.publishBtn}
                                      onPress={handlePublishPhoto}>
                        <Text style={styles.invertText}>Опублікувати</Text>
                    </TouchableOpacity>
                </KeyboardAvoidingView>
                <TouchableOpacity style={styles.trash} onPress={deletePost}>
                    <Feather name="trash-2" size={24} color="#BDBDBD"
                             style={[photoUri?.length && styles.isFocus]}
                    />
                </TouchableOpacity>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    flexContainer: {
        flex: 1,
    },
    container: {
        flex: 1,
        paddingHorizontal: 16,
        paddingVertical: 32,
        backgroundColor: "#FFFFFF",
    },
    cameraBox: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: 240,
        borderWidth: 1,
        borderColor: '#DBDBDB',
        borderRadius: 8,
        marginBottom: 8,
        backgroundColor: '#F6F6F6',
        overflow: 'hidden',
    },
    image: {

    },
    cameraBtn: {
        width: 60,
        height: 60,
        borderRadius: 100,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(198, 198, 198, 0.3)",
    },
    helperText: {
        fontFamily: "Roboto-Regular",
        fontSize: 16,
        fontWeight: "400",
        color: "#BDBDBD",
    },

    input: {
        width: "100%",
        height: 50,
        paddingVertical: 16,
        fontFamily: "Roboto-Regular",
        fontSize: 16,
        fontWeight: "400",
        borderBottomWidth: 1,
        borderBottomColor: "#E8E8E8",
    },
    locationWrap: {
        position: "relative",
    },
    iconMap: {
        position: "absolute",
        top: 12,
        zIndex: 2,
    },
    location: {
        paddingLeft: 28,
    },
    invertText: {
        fontFamily: "Roboto-Bold",
        fontSize: 16,
        fontWeight: "400",
        lineHeight: 19,
        color: "#FFFFFF",
        textAlign: "center",
    },
    publishBtn: {
        borderRadius: 50,
        backgroundColor: "#FF6C00",
        marginHorizontal: 16,
        marginTop: 32,
        marginBottom: 8,
        paddingVertical: 16,
    },
    isFocus: {
        borderColor: '#FF6C00',
        backgroundColor: '#FFFFFF',
    },
    trash: {
        width: 70,
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#F6F6F6',
        borderRadius: 20,
        alignSelf: "center",
    },
})

export default CreatePostsScreen;