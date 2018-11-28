import React from 'react';
import { Button, Dimensions, Platform, StyleSheet, Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

export default SideTray = props => {

  const { height, width } = props.size;

  return (
    <View style={[ styles.screen, {height, width} ]}>
      <Text style={{color: '#f3a', fontWeight: 'bold'}}>Side tray</Text>
    </View>
  )
};

const styles = EStyleSheet.create({
  screen: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '$lightGray'
  }
});
