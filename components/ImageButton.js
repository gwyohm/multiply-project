import React from 'react';
import AwesomeButton from "react-native-really-awesome-button";
import { Image } from "react-native";

export default function ({ image, width=100, height=50, ...props }) {
  return (
      <AwesomeButton { ...props}>
        <Image source={image} style={{ width, height, resizeMode: 'contain'}}/>
      </AwesomeButton>
  );
}
