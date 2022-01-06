import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen, ProfileScreen } from "../screens";
import { AntDesign } from "@expo/vector-icons";
import DrawerIcon from "../components/DrawerIcon";
import HeaderAvatar from "../components/HeaderAvatar";

const Stack = createNativeStackNavigator();

const ProfileStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
};
const HomeStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={({ navigation }) => ({
          headerLeft: () => (
            <DrawerIcon onPress={() => navigation.toggleDrawer()} />
          ),
          headerRight: () => (
            <HeaderAvatar onPress={() => navigation.navigate("ProfileTab")} />
          ),
        })}
        name="Home"
        component={HomeScreen}
      />
    </Stack.Navigator>
  );
};

export { ProfileStackNavigator, HomeStackNavigator };
