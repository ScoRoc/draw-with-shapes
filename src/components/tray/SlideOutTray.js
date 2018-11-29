import React from 'react';
import { Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import Tile from './Tile';

export default class SlideOutTray extends React.Component {

  onLayout = ({nativeEvent}) => {
    this.props.setWidth(nativeEvent.layout.width);
  }

  render() {
    return (
      <View
        onLayout={e => this.onLayout(e)}
        style={styles.tray}
      >
        <Tile slide={true} text='one' />
        <Tile slide={true} text='two' />
        <Tile slide={true} text='three' />
        <Tile slide={true} text='four' />
        <Tile slide={true} text='five' />
        <Tile slide={true} text='six' />
      </View>
    )
  }
};

const styles = EStyleSheet.create({
  tray: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'yellow',
  }
});
