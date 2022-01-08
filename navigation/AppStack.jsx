import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen, ProfileScreen } from "../screens/index";
import BottomTabNavigator from "./TabNavigator";
import DrawerNavigator from "./DrawerNavigation";

const Stack = createNativeStackNavigator();

function AppStack() {
  return <DrawerNavigator />;
}

export default AppStack;
