import React, { useState } from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";
import styled from "styled-components/native";
import Icon from "react-native-vector-icons/AntDesign";
import IconButton from "./Icon";
import PropTypes from "prop-types";

const StyledTodo = styled.Text`
  background: black;
  color: white;
  width: 80%;
  border-radius: 12px;
  height: 200px;
`;

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 5px;
  border-radius: 3px;
  background: bisque;
`;

const Todo = (props) => {
  console.log("?");
  return (
    <Container>
      {todoList &&
        todoList.map((val, idx) => {
          return <Text>{val}</Text>;
        })}
      <IconButton icon="checksquareo" onPress={() => alert("zzz")} />
    </Container>
  );
};

export default Todo;
