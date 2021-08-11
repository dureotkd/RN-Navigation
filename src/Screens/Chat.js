import React from "react";
import { Button, Text } from "react-native";
import styled from "styled-components/native";

const Conainter = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
`;

const StyledText = styled.Text`
  font-size: 40px;
`;
// navigation은 앞으로 쌓이는 형식인데 그 쌓인걸 Home 까지 다 걷어내주면서 이동.
// 형식은 아래 참고
// navigation.reset({ routes: [{ name: "Home" }]   })

const Chat = ({ route, navigation }) => {
  return (
    <Conainter>
      <StyledText size={50}>{route.params.name}</StyledText>
      <Button
        title="Home"
        onPress={() => navigation.reset({ routes: [{ name: "Home" }] })}
      />
    </Conainter>
  );
};

export default Chat;
