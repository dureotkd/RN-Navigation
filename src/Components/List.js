import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import styled from "styled-components/native";
import Icon from "react-native-vector-icons/AntDesign";
import IconButton from "./Icon";
import PropTypes from "prop-types";

const Container = styled.ScrollView`
  padding: 5px;
  border-radius: 3px;
  font-size: 20px;
  width: 100%;
`;

const ListBox = styled.View`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  font-size: 16px;
  width: 100%;
  padding: 12px;
  border-bottom-color: black;
  border-bottom-width: 1px;
`;

const ListContainer = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 5px;
  border-radius: 3px;
  font-size: 20px;
  width: 100%;
`;

const List = ({ todoList, handleDelete }) => {
  useEffect(() => {
    console.log("hello MyList");
  }, []);

  const handlePress = (event) => {
    alert("zz");
  };

  return (
    <Container>
      {todoList &&
        todoList.map((val, idx) => {
          return (
            <ListBox key={idx}>
              <View>
                <Icon name="check"></Icon>
              </View>
              <Text>{val.text}</Text>
              <View style={{ flexDirection: "row" }}>
                <View>
                  <Button
                    title="삭제"
                    color="red"
                    onPress={handleDelete.bind(this, val.id)}
                  ></Button>
                </View>
              </View>
            </ListBox>
          );
        })}
    </Container>
  );
};

export default List;
