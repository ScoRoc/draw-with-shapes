import React from 'react';
import { Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import Tile from './Tile';

export default class SlideOutTray extends React.Component {

  handleLayout = e => {
    console.log('yoo')
    console.log('e: ', e);
    // this.setState({
    //   width: e.nativeEvent.layout.width;
    // });
  }

  render() {
    return (
      <View onLayout={this.handleLayout} style={styles.tray}>
        <Tile slide={true} text='color' />
        <Tile slide={true} text='bgColor' />
        <Tile slide={true} text='shape' />
        <Tile slide={true} text='tool' />
        <Tile slide={true} text='clear all' />
        <Tile slide={true} text='settings' />
      </View>
    )
  }
}

const styles = EStyleSheet.create({
  tray: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'yellow',
  }
});
