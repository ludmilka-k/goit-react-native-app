import 'react-native-gesture-handler';
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import RegistrationScreen from '../Screens/RegistrationScreen.jsx';
import LoginScreen from '../Screens/LoginScreen';
import BottomNavigator from './BottomNavigator.js';
import CommentsScreen from "../Screens/CommentsScreen";
import MapScreen from "../Screens/MapScreen";
import HeaderIconBack from "../components/HeaderIconBack";
import HeaderTitle from "../components/HeaderTitle";

const RootNavigator = () => {
    const MainStack = createStackNavigator();

    return (
        <MainStack.Navigator initialRouteName="LoginScreen">
            <MainStack.Screen name="RegistrationScreen" component={RegistrationScreen} options={{headerShown: false}} />
            <MainStack.Screen name="LoginScreen" component={LoginScreen} options={{headerShown: false}} />
            <MainStack.Screen name="BottomNavigator" component={BottomNavigator} options={{headerShown: false}} />
            <MainStack.Screen name="CommentsScreen" component={CommentsScreen}
                              options={{
                                  headerTitle: () => <HeaderTitle Title={"Коментарі"} />,
                                  headerLeft: () => <HeaderIconBack />, }} />
            <MainStack.Screen name="MapScreen" component={MapScreen} options={{
                headerTitle: () => <HeaderTitle Title={"Карта"} />,
                headerLeft: () => <HeaderIconBack />, }} />
        </MainStack.Navigator>
    );
};

export default RootNavigator;