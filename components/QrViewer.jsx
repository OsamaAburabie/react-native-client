import React from "react";
import { View, Text, StyleSheet } from "react-native";
import QRCode from "react-qr-code";

const QrViewer = ({ student_id }) => {
  return (
    <View style={styles.container}>
      <QRCode size={200} bgColor="transparent" value={student_id} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    borderRadius: 170,
    height: 340,
    width: 340,
    borderWidth: 10,
    borderColor: "lightblue",
  },
});

export default QrViewer;
