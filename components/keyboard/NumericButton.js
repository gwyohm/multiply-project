import React from 'react';
import PropTypes from 'prop-types';

import { Button } from '../common';
import styles from './styles';

export default function NumericButton({
  number,
  style = {},
  noDefaultStyle = false,
  noNumColor = false,
  onPress = () => {},
}) {
  const applyStyle = [];
  if (!noDefaultStyle) {
    applyStyle.push(styles.numericButton);
  }
  if (!noNumColor) {
    applyStyle.push(styles[`numericButton${number}`]);
  }

  applyStyle.push(style);
  return (
     <Button
       title={number}
       style={applyStyle}
       onPress={onPress}
     />
  );
};

NumericButton.propTypes = {
  number: PropTypes.number.isRequired,
  style: PropTypes.object,
  noDefaultStyle: PropTypes.bool,
  noNumColor: PropTypes.bool,
  onPress: PropTypes.func,
};
