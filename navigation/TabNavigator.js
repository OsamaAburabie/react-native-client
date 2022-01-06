import React, { useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen, ProfileScreen, QrView, ScanScreen } from "../screens";
import { AuthenticatedUserContext } from "../providers";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { HomeStackNavigator, ProfileStackNavigator } from "./stackNavigator";

const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
  const { user } = useContext(AuthenticatedUserContext);
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "ProfileTab") {
            iconName = focused ? "user-alt" : "user-alt";
          } else if (route.name === "HomeTab") {
            iconName = focused ? "home" : "home";
          }
          return <FontAwesome5 name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen
        options={{
          tabBarLabel: "Home",
        }}
        name="HomeTab"
        component={HomeStackNavigator}
      />
      <Tab.Screen
        options={{
          tabBarLabel: "Profile",
        }}
        name="ProfileTab"
        component={ProfileStackNavigator}
      />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;
