import React, { useState, useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import Button from "../components/Button";
import Input from "../components/Input";
import { AuthenticatedUserContext } from "../providers";

const LoginScreen = ({ navigation }) => {
  const { login, loginError } = useContext(AuthenticatedUserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const handleLogin = () => {
  // };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      {loginError && <Text style={styles.error}>{loginError}</Text>}
      <Input placeholder="Email" value={email} setValue={setEmail} />
      <Input
        placeholder="Password"
        value={password}
        setValue={setPassword}
        secureTextEntry
      />
      <Button
        title="Login"
        onPress={() => login(email, password)}
        type="PRIMARY"
      />
      <Button
        title="Register"
        onPress={() => navigation.navigate("Register")}
        type="SECONDARY"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    // backgroundColor: "red",
    padding: 20,
  },
  error: {
    color: "red",
    marginBottom: 10,
  },
  title: {
    fontSize: 30,
    marginVertical: 20,
  },
});

export default LoginScreen;
