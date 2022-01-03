import React from "react";
import { View, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const QrView = () => {
  return (
    <View>
      <Text>View QR code</Text>
      <AntDesign name="stepforward" size={24} color="black" />
    </View>
  );
};

export default QrView;
