import React from 'react';
import NumericButton from './NumericButton';

const NUMERIC_KEYBOARD = [
  [7, 8, 9],
  [4, 5, 6],
  [1, 2, 3],
  ['<', 0, 'v'],
];


function getButton(value = null, options = {}) {
  if (typeof value === 'number') {
    return (<NumericButton number={value}/>)
  }
  if (value === '<') {

  }
  if (value === 'v') {

  }
  return null;
}

export default function({  }) {
  return (
    <View >

    </View>
  );
}
