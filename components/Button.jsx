import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const Button = ({ onPress, title, type = "PRIMARY" }) => {
  return (
    <TouchableOpacity
      style={[styles.container, styles[`container_${type}`]]}
      onPress={onPress}
    >
      <Text style={[styles.text, styles[`text_${type}`]]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "blue",
    width: "100%",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginVertical: 5,
  },

  container_PRIMARY: {
    backgroundColor: "blue",
  },

  container_SECONDARY: {
    backgroundColor: "white",
    borderColor: "blue",
  },

  text: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
  },

  text_PRIMARY: {
    color: "white",
  },

  text_SECONDARY: {
    color: "black",
  },
});

export default Button;
