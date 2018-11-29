import React from 'react';
import { Animated, Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import Tile from './Tile';

export default class SlideOutTray extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slideOut: false
    }
  }

  componentDidUpdate() {
    if (this.state.slideOut !== this.props.slideOut) {
      this.setState({slideOut: this.props.slideOut})
    }
  }

  componentDidMount() {
    this.setState({slideOut: this.props.slideOut})
  }

  render() {

    const shift = this.state.slideOut ? {left: this.props.sideTrayWidth} : {right: 0};

    return (
      <Animated.View style={[ styles.tray, shift ]}>
        <Tile slide={true} text='one' />
        <Tile slide={true} text='two' />
        <Tile slide={true} text='three' />
        <Tile slide={true} text='four' />
        <Tile slide={true} text='five' />
        <Tile slide={true} text='six' />
      </Animated.View>
    )

  }
};

const styles = EStyleSheet.create({
  tray: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'yellow',
  }
});
