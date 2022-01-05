import React, { useState, useEffect, useContext } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import ScanPopup from "../components/ScanPopup";
import mongoose from "mongoose";
import { AuthenticatedUserContext } from "../providers";
import axios from "../config/axios";
export default function ScanScreen() {
  const { token } = useContext(AuthenticatedUserContext);
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
    setScanned(false);
    setData(null);
    setError(null);
  };

  const askForCameraPermission = () => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  };

  useEffect(() => {
    askForCameraPermission();
    setScanned(false);
  }, []);

  const fetchData = async (id) => {
    try {
      setScanned(true);
      const res = await axios.get(`/api/guard/scan/${id}`, {
        headers: { "x-auth-token": token },
      });
      if (res.data.success) {
        setData(res.data);
        setModalVisible(true);
      }
    } catch (err) {
      // console.log(err.response.data.message);
      // setScanned(false);
      if (err.response.data.message) {
        setError(err.response.data.message);
        setModalVisible(true);
      }
    }
  };

  const handleBarCodeScanned = ({ type, data }) => {
    const ObjectId = mongoose.Types.ObjectId;
    //check if scanned data is valid
    if (ObjectId.isValid(data) && !scanned) {
      fetchData(data);
    }
  };

  if (hasPermission === null) {
    return (
      <View style={styles.container}>
        <Text>Requesting for camera permission</Text>
      </View>
    );
  }
  if (hasPermission === false) {
    return (
      <View style={styles.container}>
        <Text>No access to camera</Text>
        <Button
          title="Grant Permission"
          onPress={() => askForCameraPermission()}
        ></Button>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />

      <ScanPopup
        isModalVisible={isModalVisible}
        setModalVisible={setModalVisible}
        toggleModal={toggleModal}
        data={data}
        error={error}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
