import React, { Component } from "react";
import styled, { css } from "styled-components";
import MaterialCommunityIconsIcon from "react-native-vector-icons/dist/MaterialCommunityIcons";

function MaterialRightIconTextbox(props) {
  return (
    <Container {...props}>
      <InputStyle placeholder="Label"></InputStyle>
      <MaterialCommunityIconsIcon
        name="eye"
        style={{
          color: "#616161",
          fontSize: 24,
          paddingRight: 8
        }}
      ></MaterialCommunityIconsIcon>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  border-bottom-width: 1px;
  border-color: #D9D5DC;
  background-color: transparent;
  flex-direction: row;
  align-items: center;
`;

const InputStyle = styled.input`
  font-family: Roboto;
  color: #000;
  padding-right: 16px;
  font-size: 16px;
  align-self: stretch;
  flex: 1 1 0%;
  line-height: 16px;
  padding-top: 14px;
  padding-bottom: 8px;
  border: none;
  background: transparent;
  display: flex;
  flex-direction: column;
`;

export default MaterialRightIconTextbox;