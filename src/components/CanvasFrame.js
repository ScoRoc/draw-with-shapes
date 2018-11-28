import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

export default CanvasFrame = props => {

  const { height, width } = props.size;

  return (
    <View style={[ styles.screen, {height, width} ]}>
      <Text style={eStyles.text}>I'm CanvasFrame</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  screen: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3ee'
  }
});

const eStyles = EStyleSheet.create({
  text: {
    fontSize: '20rem'
  }
});
