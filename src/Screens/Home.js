import React from "react";
import { View, Text, Button } from "react-native";
import styled from "styled-components/native";

// 노치디자인 에서의 컴포넌트 안보임 현상 막아줌.
import { useSafeAreaInsets } from "react-native-safe-area-context";

// 노치디자인 에서의 컴포넌트 안보임 현상 막아줌.
const Conainter = styled.View`
  align-items: center;
  background-color: #ffffff;
  flex: 1;
  padding-top: ${({ insets: { top } }) => top}px;
  padding-bottom: ${({ insets: { bottom } }) => bottom}px;
  padding-right: ${({ insets: { right } }) => right}px;
  padding-left: ${({ insets: { left } }) => left}px;
`;

const StyledText = styled.Text`
  font-size: 30px;
  margin: 10px;
`;

// navigate로 전달되는 변수는 name속성에 맞춰야한다.
const Home = ({ navigation }) => {
  const insets = useSafeAreaInsets();

  return (
    <Conainter insets={insets}>
      <View>
        <Text>zz</Text>
      </View>
      <Button title="List" onPress={() => navigation.navigate("List")} />
    </Conainter>
  );
};

export default Home;
