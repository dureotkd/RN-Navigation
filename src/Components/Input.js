import React, { useState } from "react";
import styled from "styled-components/native";
import { Dimensions, useWindowDimensions } from "react-native";
import PropTypes from "prop-types";

const StyledInput = styled.TextInput`
  width: ${({ width }) => width - 40}px;
  height: 60px;
  margin: 3px 0;
  padding: 15px 20px;
  border-radius: 10px;
  font-size: 25px;
  background: white;
  border: none;
`;

const Input = ({ value, handleText, handleSubmit, addInput }) => {
  const width = useWindowDimensions().width;
  return (
    <StyledInput
      returnKeyType="next"
      width={width}
      onChangeText={handleText}
      onSubmitEditing={handleSubmit}
      value={value}
      ref={addInput}
      placeholder="Add +"
    />
  );
};

// Input.propTypes = {
//   value: PropTypes.string.isRequired,
//   handleText: PropTypes.func.isRequired,
//   handleSubmit: PropTypes.func.isRequired,
// };

export default Input;
