import React from 'react';
import AwesomeButton from "react-native-really-awesome-button";
import { Text } from "react-native";

export default function ({ children, text, textColor, textSize, ...props }) {

  return (
      <AwesomeButton { ...props}>
        <Text style={{fontSize: textSize, color: textColor}}>{text}</Text>
      </AwesomeButton>
  );
}
