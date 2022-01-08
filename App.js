import React from "react";
import { RootNavigator } from "./navigation";
import axios from "axios";
import { AuthenticatedUserProvider } from "./providers";
import { Provider as PaperProvider } from "react-native-paper";

axios.defaults.baseURL = "http://localhost:5000";
export default function App() {
  return (
    <AuthenticatedUserProvider>
      <PaperProvider>
        <RootNavigator />
      </PaperProvider>
    </AuthenticatedUserProvider>
  );
}
