import React, { useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen, ProfileScreen, QrView, ScanScreen } from "../screens";
import { AuthenticatedUserContext } from "../providers";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { ProfileStackNavigator } from "./stackNavigator";

const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
  const { user } = useContext(AuthenticatedUserContext);
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Profile") {
            iconName = focused ? "user-alt" : "user";
          } else if (route.name === "QR") {
            iconName = focused ? "qrcode" : "qrcode";
          } else if (route.name === "Scan") {
            iconName = focused ? "qrcode" : "qrcode";
          }
          return <FontAwesome5 name={iconName} size={size} color={color} />;
        },
      })}
    >
      {user.role === "student" && <Tab.Screen name="QR" component={QrView} />}
      {user.role === "guard" && (
        <Tab.Screen name="Scan" component={ScanScreen} />
      )}
      <Tab.Screen name="Profile" component={ProfileStackNavigator} />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;
