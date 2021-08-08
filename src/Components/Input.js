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

const Input = ({ value, handleText, handleSubmit }) => {
  const width = useWindowDimensions().width;
  return (
    <StyledInput
      autoCapitalize="none"
      autoCorrect={false}
      returnKeyType="done"
      width={width}
      onChange={handleText}
      onSubmitEditing={handleSubmit}
      value={value}
    />
  );
};

Input.propTypes = {
  value: PropTypes.string.isRequired,
  handleText: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default Input;
