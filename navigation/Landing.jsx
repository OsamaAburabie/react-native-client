import React, { useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen, ProfileScreen, QrView, ScanScreen } from "../screens";
import { AuthenticatedUserContext } from "../providers";
import { AntDesign } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

function Landing() {
  const { user } = useContext(AuthenticatedUserContext);
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Profile") {
            iconName = focused ? "profile" : "profile";
          } else if (route.name === "QR") {
            iconName = focused ? "qrcode" : "qrcode";
          } else if (route.name === "Scan") {
            iconName = focused ? "qrcode" : "qrcode";
          }

          // You can return any component that you like here!
          return <AntDesign name={iconName} size={size} color={color} />;
        },
      })}
    >
      {user.role === "student" && <Tab.Screen name="QR" component={QrView} />}
      {user.role === "guard" && (
        <Tab.Screen name="Scan" component={ScanScreen} />
      )}
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default Landing;
