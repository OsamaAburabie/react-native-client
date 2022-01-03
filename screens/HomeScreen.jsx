import React, { useContext, useEffect } from "react";
import { View, Text } from "react-native";
import Button from "../components/Button";
import { AuthenticatedUserContext } from "../providers";

const HomeScreen = () => {
  const { user, token, logout } = useContext(AuthenticatedUserContext);

  return (
    <View>
      <Text>Welcome {user?.name}</Text>
      <Button title="logut" onPress={logout} />
    </View>
  );
};

export default HomeScreen;
