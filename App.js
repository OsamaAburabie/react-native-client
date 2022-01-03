import { RootNavigator } from "./navigation";
import axios from "axios";
import { AuthenticatedUserProvider } from "./providers";

axios.defaults.baseURL = "http://localhost:5000";
export default function App() {
  return (
    <AuthenticatedUserProvider>
      <RootNavigator />
    </AuthenticatedUserProvider>
  );
}
