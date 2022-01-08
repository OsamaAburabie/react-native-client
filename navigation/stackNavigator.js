import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen, ProfileScreen } from "../screens";
import { AntDesign } from "@expo/vector-icons";
import DrawerIcon from "../components/DrawerIcon";
import HeaderAvatar from "../components/HeaderAvatar";
import EditProfileScreen from "../screens/EditProfile";
import EditProfileIcon from "../components/EditProfileIcon";

const Stack = createNativeStackNavigator();

const ProfileStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitle: "",
        headerTitleStyle: {
          fontSize: 20,
          fontWeight: "bold",
          color: "white",
        },
      }}
    >
      <Stack.Screen
        options={({ navigation }) => ({
          headerLeft: () => (
            <DrawerIcon onPress={() => navigation.toggleDrawer()} />
          ),
          headerRight: () => (
            <EditProfileIcon
              onPress={() => navigation.navigate("EditProfile")}
            />
          ),
        })}
        name="Profile"
        component={ProfileScreen}
      />
      <Stack.Screen name="EditProfile" component={EditProfileScreen} />
    </Stack.Navigator>
  );
};
const HomeStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitle: "",
        headerTitleStyle: {
          fontSize: 20,
          fontWeight: "bold",
          color: "white",
        },
      }}
    >
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
