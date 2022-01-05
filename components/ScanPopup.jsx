import React, { useContext, useEffect, useState } from "react";
import { Button, Image, Text, View } from "react-native";
import Modal from "react-native-modal";
import axios from "../config/axios";
import { AuthenticatedUserContext } from "../providers";

function ScanPopup({ isModalVisible, setModalVisible, toggleModal, data }) {
  const { token } = useContext(AuthenticatedUserContext);

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [validQr, setValidQr] = useState(false);
  const fetchData = async () => {
    try {
      const res = await axios.get(`/api/guard/scan/${data}`, {
        headers: { "x-auth-token": token },
      });
      setUser(res.data);
      setLoading(false);
      setValidQr(true);
    } catch (err) {
      setLoading(false);
      setValidQr(false);
    }
  };

  useEffect(() => {
    if (data) {
      fetchData();
    }
  }, [data]);

  const handleClost = () => {
    toggleModal();
    setUser(null);
    setLoading(true);
    setValidQr(false);
  };
  return (
    <Modal
      animationIn="zoomIn"
      animationOut="zoomOut"
      isVisible={isModalVisible}
      onBackdropPress={() => handleClost()}
    >
      <View
        style={{
          backgroundColor: "#fff",
          borderRadius: 20,
          padding: 10,
        }}
      >
        {loading ? (
          <Text>Loading...</Text>
        ) : (
          <>
            {validQr ? (
              <>
                <Text>{user?.user?.name}</Text>
                <Text>{user?.user?.email}</Text>
                {/* <Text>{pic}</Text> */}
              </>
            ) : (
              <Text>Invalid QR Code</Text>
            )}
          </>
        )}
        <Button title="Close" onPress={handleClost} />
      </View>
    </Modal>
  );
}

export default ScanPopup;
