import React from 'react';
import PropTypes from 'prop-types';
import {
  Platform,
  Text,
  TouchableOpacity,
  TouchableNativeFeedback,
  View,
} from 'react-native';


export default function Button({
  accessibilityLabel,
  color,
  onPress,
  touchSoundDisabled,
  title,
  hasTVPreferredFocus,
  nextFocusDown,
  nextFocusForward,
  nextFocusLeft,
  nextFocusRight,
  nextFocusUp,
  disabled,
  testID,
}) {
  const Touchable = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;
  return (
    <Touchable onPress={onPress}>
      <View >
        <Text>
          { title }
        </Text>
      </View>
    </Touchable>
  );
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
}
