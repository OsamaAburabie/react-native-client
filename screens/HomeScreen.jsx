import React, { useContext, useEffect } from "react";
import { View, Text } from "react-native";
import Button from "../components/Button";
import { AuthenticatedUserContext } from "../providers";
import ScanScreen from "./ScanScreen";
import QrView from "./QrView";

const HomeScreen = ({ navigation }) => {
  const { user } = useContext(AuthenticatedUserContext);

  if (user?.role === "guard") {
    return <ScanScreen />;
  } else if (user?.role === "student") {
    return <QrView />;
  } else {
    return <QrView />;
  }
};

export default HomeScreen;
