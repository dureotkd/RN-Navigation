import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect, useRef, createContext } from "react";
import { Dimensions, StyleSheet, Text, View, Button } from "react-native";
import AppLoading from "expo-app-loading";
import styled, { ThemeProvider, css, attrs } from "styled-components/native";
import { theme } from "./theme";

// 무조건 Navigation Continer 밑에는 Stack또는 자식 컴포넌트가 존재해야한다 Stack컴포넌트아래에는 Screen컴포넌트가 다수 들어갈수있다.
import Navigation from "./Navigations";

const Container = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  background-color: ${theme.background};
  padding: 0 20px;
`;

const Title = styled.Text`
  font-size: 40px;
  font-weight: 600;
  color: ${theme.text};
  width: 100%;
  margin-top: 50px;
  text-align: center;
  /* padding: 0 20px; */
`;

const Input = styled.TextInput`
  font-size: 12px;
  width: 200px;
  height: 30px;
  border: 1px solid black;
  background: white;
  text-align: center;
  border-radius: 6px;
`;

const Box = styled.View`
  display: flex;
  align-items: center;
`;

const Card = styled.View`
  background: ${theme.whiteBackground};
  border-radius: 2px;
  flex: 1;
  margin: 1rem;
  position: relative;
  width: 100%;
  margin: 15px auto;
`;

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {}, []);

  const getData = () => {
    return "zzz";
  };

  return !loading ? (
    <Navigation />
  ) : (
    <AppLoading
      startAsync={getData}
      onFinish={() => {
        console.log("loading End");
        setLoading(false);
      }}
      onError={() => {
        console.log("error");
      }}
    />
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
