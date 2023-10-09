import 'react-native-gesture-handler';
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from './src/routes/RootNavigator';
import { useFonts } from 'expo-font';

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
        <NavigationContainer>
            <RootNavigator />
        </NavigationContainer>
  );
}


