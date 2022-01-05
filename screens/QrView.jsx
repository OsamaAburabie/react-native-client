import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import QrViewer from "../components/QrViewer";
import { AuthenticatedUserContext } from "../providers";

const QrView = () => {
  const { user } = useContext(AuthenticatedUserContext);

  //make the fitst letter of the first name capital
  const firstName = user?.name.charAt(0).toUpperCase() + user?.name.slice(1);
  return (
    <View style={styles.container}>
      <QrViewer student_id={user?._id} />
      <View>
        <Text style={styles.title}>{firstName}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  title: {
    fontSize: 30,
    marginVertical: 20,
  },
});

export default QrView;
