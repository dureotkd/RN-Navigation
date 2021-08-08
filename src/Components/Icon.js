import React from "react";
import { TouchableOpacity, View, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";

const styles = StyleSheet.create({
  icon: {
    color: "blue",
    margin: "10px",
    padding: "10px",
  },
});

const IconButton = ({ icon, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View>
        <Icon name={icon} />
      </View>
    </TouchableOpacity>
  );
};

export default IconButton;
