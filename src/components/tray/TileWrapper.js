import React from 'react';
import { Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import SlideOutTray from './SlideOutTray';
import Tile from './Tile';

export default class TileWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slideOut: false
    }
  }

  handlePress = () => {
    this.setState({slideOut: !this.state.slideOut})
  }

  render() {

    return (
      <View>
        <SlideOutTray
          slideOut={this.state.slideOut}
          sideTrayWidth={this.props.sideTrayWidth}
        />
        <Tile handlePress={this.handlePress} text={this.props.text} />
      </View>
    )
  }
};

const styles = EStyleSheet.create({
  tray: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    backgroundColor: 'orange',
    zIndex: 50
  }
});
