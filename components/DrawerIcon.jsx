import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

const DrawerIcon = ({ onPress }) => {
  return (
    <View>
      <TouchableOpacity onPress={onPress}>
        <FontAwesome name="align-justify" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default DrawerIcon;
