import React, { useContext, useEffect, useState } from "react";
import { Button, Image, Text, View } from "react-native";
import Modal from "react-native-modal";

function ScanPopup({ isModalVisible, toggleModal, data, error }) {
  const handleClost = () => {
    toggleModal();
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
        {data && (
          <>
            <Text>{data?.user?.name}</Text>
            <Text>{data?.user?.email}</Text>
          </>
        )}

        {error && <Text style={{ color: "red" }}>{error}</Text>}
        <Button title="Close" onPress={handleClost} />
      </View>
    </Modal>
  );
}

export default ScanPopup;
