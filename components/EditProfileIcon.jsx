import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

const EditProfileIcon = ({ onPress }) => {
  return (
    <View>
      <TouchableOpacity onPress={onPress}>
        <FontAwesome5 name="edit" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default EditProfileIcon;
