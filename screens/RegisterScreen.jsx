import React, { useState, useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import Button from "../components/Button";
import Input from "../components/Input";
import { AuthenticatedUserContext } from "../providers";

const RegisterScreen = ({ navigation }) => {
  const { register, registerError } = useContext(AuthenticatedUserContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
      {registerError && <Text style={styles.error}>{registerError}</Text>}
      <Input placeholder="Name" value={name} setValue={setName} />
      <Input placeholder="Email" value={email} setValue={setEmail} />
      <Input
        placeholder="Password"
        value={password}
        setValue={setPassword}
        secureTextEntry
      />
      <Button
        title="Register"
        onPress={() => register(name, email, password)}
      />
      <Button
        title="Login"
        onPress={() => navigation.navigate("Login")}
        type="SECONDARY"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
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

export default RegisterScreen;
