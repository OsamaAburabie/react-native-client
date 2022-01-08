import React, { useContext } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { AuthenticatedUserContext } from "../providers";

const HeaderAvatar = ({ onPress }) => {
  const { user } = useContext(AuthenticatedUserContext);
  return (
    <TouchableOpacity style={{ marginRight: 10 }} onPress={onPress}>
      <Image
        style={{ width: 40, height: 40, borderRadius: 20 }}
        source={{
          uri: user?.avatar,
        }}
      />
    </TouchableOpacity>
  );
};

export default HeaderAvatar;
