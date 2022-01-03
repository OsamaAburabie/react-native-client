import React, { useState, createContext, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "../config/axios";

export const AuthenticatedUserContext = createContext({});

export const AuthenticatedUserProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loginError, setLoginError] = useState(null);
  const [registerError, setRegisterError] = useState(null);
  const getUser = async () => {
    const token = await AsyncStorage.getItem("x-auth-token");
    if (token) {
      setToken(token);
      try {
        const res = await axios.get("/api/auth/check-token", {
          headers: {
            "x-auth-token": token,
          },
        });
        if (res.data.success) {
          setUser(res.data.user);
        }
      } catch (err) {
        console.log(err.response.data.message);
      }
    }
    setLoading(false);
  };

  const login = async (email, password) => {
    try {
      const res = await axios.post("/api/auth/login", {
        email,
        password,
      });
      if (res.data.success) {
        setUser(res.data.user);
        setToken(res.data.token);
        setLoginError(null);
        await AsyncStorage.setItem("x-auth-token", res.data.token);
      }
    } catch (err) {
      console.log(err.response.data.message);
      setLoginError(err.response.data.message);
    }
    setLoading(false);
  };

  const register = async (name, email, password) => {
    try {
      const res = await axios.post("/api/auth/register", {
        name,
        email,
        password,
      });
      if (res.data.success) {
        setUser(res.data.user);
        setToken(res.data.token);
        setRegisterError(null);
        await AsyncStorage.setItem("x-auth-token", res.data.token);
      }
    } catch (err) {
      console.log(err.response.data.message);
      setRegisterError(err.response.data.message);
    }
    setLoading(false);
  };

  const logout = async () => {
    await AsyncStorage.removeItem("x-auth-token");
    setUser(null);
    setToken(null);
  };

  useEffect(() => {
    getUser();
    // logOut();
    // login("osama1@gmail.com", "hello123");
  }, []);

  return (
    <AuthenticatedUserContext.Provider
      value={{
        user,
        setUser,
        getUser,
        token,
        login,
        loading,
        loginError,
        registerError,
        register,
        logout,
      }}
    >
      {children}
    </AuthenticatedUserContext.Provider>
  );
};
