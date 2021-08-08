import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Dimensions } from "react-native";
import { StyleSheet, Text, View, Button } from "react-native";
import MyButton from "./Components/MyButton";
//import Box from "./Components/Box";
import styled, { ThemeProvider, css, attrs } from "styled-components/native";
import { theme } from "./theme";
import StyledInput from "./Components/Input";

const Container = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  background-color: ${theme.background};
  padding: 0 20px;
  align-items: "center";
  justify-content: "center";
`;

const Title = styled.Text`
  font-size: 40px;
  font-weight: 600;
  color: ${theme.text};
  width: 100%;
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
  display: inline-block;
  height: 300px;
  margin: 1rem;
  position: relative;
  width: 100%;
  margin: 15px auto;
`;

export default function App() {
  const [text, setText] = useState("");

  const handleText = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    setText("");
  };

  return (
    <Container theme={theme}>
      <Box>
        <Title>TODO LIST</Title>
        <StyledInput
          handleText={handleText}
          handleSubmit={handleSubmit}
          value={text}
        />
      </Box>
      <StatusBar style="auto" />
      <Card>
        <p>{text}</p>
      </Card>
      {/* <Box style={{ backgroundColor: "red", height: 100 }} />
      <Box style={{ backgroundColor: "green", flex: 1 }} />
      <Box style={{ backgroundColor: "orange", height: 100 }} /> */}
    </Container>
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
