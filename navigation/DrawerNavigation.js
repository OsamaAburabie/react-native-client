import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { ProfileStackNavigator } from "./stackNavigator";
import BottomTabNavigator from "./TabNavigator";
import { FontAwesome5 } from "@expo/vector-icons";
import { View, Image } from "react-native";
import HeaderAvatar from "../components/HeaderAvatar";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={({ route, navigation }) => ({
        headerTitle: route.name,
        headerRight: () => (
          <HeaderAvatar onPress={() => navigation.navigate("Profile")} />
        ),
      })}
    >
      <Drawer.Screen name="Home" component={BottomTabNavigator} />
      <Drawer.Screen name="Profile" component={ProfileStackNavigator} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
