import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen, ProfileScreen } from "../screens/index";
import Landing from "./Landing";

const Stack = createNativeStackNavigator();

function AppStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Landing" component={Landing} />
      <Stack.Screen name="Test" component={ProfileScreen} />
    </Stack.Navigator>
  );
}

export default AppStack;
