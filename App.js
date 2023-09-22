import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { StyleSheet, View } from 'react-native';
// import RegistrationScreen from './src/Screens/RegistrationScreen';
// import LoginScreen from './src/Screens/LoginScreen';
import PostsScreen from "./src/Screens/PostsScreen";

export default function App() {
    const [fontsLoaded] = useFonts({
        "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
        "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
        "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    });

    if (!fontsLoaded) {
        return null;
    }


    return (
    <View style={styles.flexContainer}>
      <StatusBar style="auto" />
      {/*<RegistrationScreen />*/}
      {/*<LoginScreen />*/}
       <PostsScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  flexContainer: {
    flex: 1,
  },
});

