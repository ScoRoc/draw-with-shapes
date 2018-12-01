import React from 'react';
import { StyleSheet, TouchableHighlight, Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

export default Tile2 = props => {
  const { backgroundColor, height, width } = props;
  return (
    <TouchableHighlight
      onPress={props.handlePress}
      activeOpacity={.6}
      underlayColor='#3cd'
    >
      <View style={[ styles.tile, {height, width, backgroundColor} ]}>
        {props.children}
      </View>
    </TouchableHighlight>
  )
};

// const styles = EStyleSheet.create({
//   tile: {
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderColor: 'black',
//     borderWidth: 1
//   }
// });

const styles = StyleSheet.create({
  tile: {
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 1
  }
});
