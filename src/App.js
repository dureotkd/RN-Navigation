import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Dimensions } from "react-native";
import { StyleSheet, Text, View, Button } from "react-native";
import MyButton from "./Components/MyButton";
//import Box from "./Components/Box";
import styled, { ThemeProvider, css, attrs } from "styled-components/native";
import { theme } from "./theme";
import StyledInput from "./Components/Input";
import Todo from "./Components/Todo";
import List from "./Components/List";

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
  const [text, setText] = useState("");
  const [todoList, setTodoList] = useState([
    {
      id: "1",
      text: "React Native",
      success: false,
    },
    {
      id: "2",
      text: "Javascript",
      success: false,
    },
  ]);

  const handleText = (text) => {
    setText(text);
  };

  const handleSubmit = (e) => {
    if (text.length < 1) {
      alert("Todo를 입력해주세요.");
      return false;
    }

    const id = Date.now().toString();

    const newTodo = {
      id: id,
      success: false,
      text: text,
    };

    let clone = [...todoList];
    clone.unshift(newTodo);
    setTodoList(clone);
    setText("");
  };

  const handleDelete = (id) => {
    const clone = [...todoList];
    // 첫번쨰 방법.
    const newList = clone.filter((val, idx) => {
      return val.id !== id;
    });

    setTodoList(newList);
  };

  return (
    <Container theme={theme}>
      <Box>
        <Title>Todo List</Title>
        <StyledInput
          handleText={handleText}
          handleSubmit={handleSubmit}
          value={text}
        />
      </Box>
      <StatusBar style="auto" />
      <Card>
        <List todoList={todoList} handleDelete={handleDelete} />
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
