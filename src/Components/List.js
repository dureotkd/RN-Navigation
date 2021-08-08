import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableOpacity,
} from "react-native";
import styled from "styled-components/native";
import Icon from "react-native-vector-icons/AntDesign";
import IconButton from "./Icon";
import PropTypes from "prop-types";

const Container = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 5px;
  border-radius: 3px;
  font-size: 20px;
`;

const StyledText = styled.Text`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 16px;
  width: 100%;
  padding: 12px;
  border-bottom-color: black;
  border-bottom-width: 1px;
`;

const List = ({ todoList, handleDelete }) => {
  const handlePress = (event) => {
    alert("zz");
  };

  return (
    <Container>
      {todoList &&
        todoList.map((val, idx) => {
          return (
            <StyledText key={val.idx}>
              <Icon name="check"></Icon>
              {val.text}
              <Button
                title="삭제"
                color="red"
                onPress={handleDelete.bind(this, val.id)}
              ></Button>
            </StyledText>
          );
        })}
    </Container>
  );
};

export default List;
