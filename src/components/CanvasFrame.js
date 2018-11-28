import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import Canvas from './Canvas';

export default CanvasFrame = props => {

  const { height, width } = props.size;

  return (
    <View style={[ styles.screen, {height, width} ]}>
      <Canvas />
    </View>
  )
};

const styles = EStyleSheet.create({
  screen: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '$darkGray'
  },
  text: {
    color: '#f3a',
    fontSize: '20rem'
  }
});
