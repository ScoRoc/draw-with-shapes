import React from 'react';
import { Button, Dimensions, Platform, StyleSheet, Text, View } from 'react-native';

export default SideTray = props => {

  const { height, width } = props.size;

  return (
    <View style={[ styles.screen, {height, width} ]}>
      <Text>Side tray</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  screen: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f3a'
  }
});
