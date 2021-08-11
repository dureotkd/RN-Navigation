import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Home, List, Chat } from "../Screens";
import { FontAwesome5 } from "@expo/vector-icons";

const Stack = createStackNavigator();

// initialRouteName 설정안할시 Screen 은 항상 첫번째 자식이 먼저나온다.
// initialRouteName="" 첫화면에 나올 자식컴포넌트 지정가능
// Navigator screenOptions 를 이용하여 screen에 컴포넌트 배경색 모두 지정가능
// option = {{headerShown :false}} 헤더 제거방법
const StackNav = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        cardStyle: { backgroundColor: "#ffffff" },
        headerStyle: { height: 120, backgroundColor: "#555555" },
        headerTitleStyle: { fontSize: 24, color: "pink" },
        headerTitleAlign: "center",
        headerTitle: ({ style }) => {
          return (
            <FontAwesome5 name="react" size={24} color="black" style={style} />
          );
        },
      }}
    >
      <Stack.Screen
        name="Chat"
        component={Chat}
        options={{ headerShown: false }}
      ></Stack.Screen>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      ></Stack.Screen>
      <Stack.Screen name="List" component={List}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default StackNav;
