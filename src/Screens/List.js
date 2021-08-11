import React from "react";
import { Button, Text } from "react-native";
import styled from "styled-components/native";

const Conainter = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  height: 100%;
`;

const StyledText = styled.Text`
  font-size: 30px;
  margin: 10px;
`;

const items = [
  { id: 1, name: "성민" },
  { id: 2, name: "을한" },
  { id: 3, name: "수정" },
];

const List = ({ navigation }) => {
  return (
    <Conainter>
      <Text>Home</Text>
      {items.map(({ id, name }) => {
        return (
          <Button
            key={id}
            title={name}
            onPress={() => navigation.navigate("Chat", { id, name })}
          ></Button>
        );
      })}
    </Conainter>
  );
};
export default List;
