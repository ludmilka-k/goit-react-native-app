import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import  { View, StyleSheet } from "react-native";
import { Feather} from '@expo/vector-icons';
import PostsScreen from '../Screens/PostsScreen';
import ProfileScreen from '../Screens/ProfileScreen';
import CreatePostsScreen from '../Screens/CreatePostsScreen';
import HeaderTitle from "../components/HeaderTitle";
import HeaderIconLogout from '../components/HeaderIconLogout';
import HeaderIconBack from "../components/HeaderIconBack";

const Tabs = createBottomTabNavigator();

const BottomNavigator = () => {
    return (
        <Tabs.Navigator
            initialRouteName={"PostsScreen"}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    size = 24;
                    color = focused ? '#FF6C00' : "rgba(33, 33, 33, 0.8)";
                    let accent = {};

                    if (route.name === "ProfileScreen") {
                        iconName = "user";
                    } else if (route.name === "PostsScreen") {
                        iconName = "grid";
                    } else if (route.name === "CreatePostsScreen") {
                        iconName = "plus";
                        color = focused ? '#212121CC' : '#FFFFFF';
                        accent = { backgroundColor: "#FF6C00"}; //?
                    }
                    return (
                        <View style={[styles.footerBtn, accent]}>
                            <Feather name={iconName} size={size} color={color} />
                        </View>
                    )
                },
                tabBarActiveTintColor: "#FFFFFF",
                tabBarInactiveTintColor: "rgba(33, 33, 33, 0.8)",
                tabBarStyle: { height: 70,
                    justifyContent: "center",
                    paddingHorizontal: 60,
                    borderBottomWidth: 0.5,
                    borderColor: "#0000004D" },
                headerStyle: { borderBottomWidth: 0.5, borderColor: "#0000004D" },
                tabBarShowLabel: false,
                unmountOnBlur: true,
            })}

        >
            <Tabs.Screen
                name="PostsScreen"
                component={PostsScreen}
                options={{
                    headerShown: true,
                    headerTitleAlign: "center",
                    headerTitle: () => <HeaderTitle Title={"Публікації"} />,
                    headerRight: (() => <HeaderIconLogout />),
                }}
            />
            <Tabs.Screen
                name="CreatePostsScreen"
                component={CreatePostsScreen}
                options={{
                    headerShown: true,
                    headerTitleAlign: "center",
                    headerTitle: () => <HeaderTitle Title={"Створити публікацію"} />,
                    headerLeft: (() => <HeaderIconBack />),
                    tabBarStyle: { display: "none" },
                }}
            />
            <Tabs.Screen
                name="ProfileScreen"
                component={ProfileScreen}
                options={{ headerShown: false }}
            />
        </Tabs.Navigator>
    );
};

const styles = StyleSheet.create({
    footerBtn: {
        width: 70,
        height: 40,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    // accent: {
    //     color: '#FFFFFF',
    //     backgroundColor: "#FF6C00",
    // }
});

export default BottomNavigator;
