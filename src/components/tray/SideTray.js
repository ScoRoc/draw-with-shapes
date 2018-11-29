import React from 'react';
import { Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import Tile from './Tile';

export default SideTray = props => {

  const { height, width } = props.size;

  return (
    <View style={[ styles.tray, {height, width} ]}>
      <Tile text='color' />
      <Tile text='bgColor' />
      <Tile text='shape' />
      <Tile text='tool' />
      <Tile text='clear all' />
      <Tile text='settings' />
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
