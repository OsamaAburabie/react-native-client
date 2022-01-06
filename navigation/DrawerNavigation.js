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
      screenOptions={{
        headerShown: false,
      }}
    >
      {/* <Drawer.Screen name="Home" component={BottomTabNavigator} /> */}
      <Drawer.Screen
        options={{
          drawerLabel: "Home",
        }}
        name="HomeDrawer"
        component={BottomTabNavigator}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
