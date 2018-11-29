import React from 'react';
import { Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

export default Canvas = props => {

  return (
    <View style={styles.canvas}>
      <Text style={styles.text}>I'm Canvas</Text>
    </View>
  )
};

const styles = EStyleSheet.create({
  canvas: {
    height: '92%',
    width: '92%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  text: {
    color: '#f3a',
    fontSize: '20rem'
  }
});
