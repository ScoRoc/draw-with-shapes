import React from 'react';
import { View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import Canvas from './Canvas';

export default CanvasFrame = props => {

  const { height, width } = props.size;

  return (
    <View style={[ styles.frame, {height, width} ]}>
      <Canvas />
    </View>
  )
};

const styles = EStyleSheet.create({
  frame: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '$darkGray'
  }
});
