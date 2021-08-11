import React from "react";
import { TouchableOpacity, View, Text, TextInput } from "react-native";

const MyButton = (props) => {
  return (
    <TouchableOpacity
      onPress={() => console.log("press")}
      onPressIn={() => console.log("in")}
      onLongPress={() => alert("long")}
      delayLongPress={2000}
    >
      <View style={{ backgroundColor: "red", padding: 10 }}>
        <TextInput onChangeText={(event) => console.log(event)}></TextInput>
        <Text style={{ fontSize: 20, color: "white" }}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default MyButton;
