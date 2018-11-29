import React from 'react';
import { Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import TileWrapper from './TileWrapper';

export default SideTray = props => {

  const { height, width } = props.size;

  return (
    <View style={[ styles.tray, {height, width} ]}>
      <TileWrapper sideTrayWidth={width} text='color' />
      <TileWrapper sideTrayWidth={width} text='bgColor' />
      <TileWrapper sideTrayWidth={width} text='shape' />
      <TileWrapper sideTrayWidth={width} text='tool' />
      <TileWrapper sideTrayWidth={width} text='clear all' />
      <TileWrapper sideTrayWidth={width} text='settings' />
    </View>
  )
};

const styles = EStyleSheet.create({
  tray: {
    justifyContent: 'space-between',
    backgroundColor: '$lightGray',
    zIndex: 100
  }
});
