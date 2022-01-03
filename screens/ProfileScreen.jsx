import React, { useContext, useEffect } from "react";
import { View, Text } from "react-native";
import Button from "../components/Button";
import { AuthenticatedUserContext } from "../providers";

const ProfileScreen = ({ navigation }) => {
  const { user, token, logout } = useContext(AuthenticatedUserContext);

  return (
    <View>
      <Text>Welcome: {user?.name}</Text>
      <Text>Role: {user?.role}</Text>
      <Button title="logut" onPress={logout} />
    </View>
  );
};

export default ProfileScreen;
