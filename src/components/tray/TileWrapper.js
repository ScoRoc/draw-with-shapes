import React from 'react';
import { Animated, Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import SlideOutTray from './SlideOutTray';
import Tile from './Tile';

export default class TileWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slideOut: false,
      slideOutTrayWidth: 0,
      animatedWidth: 0
    }
  }

  animateSlide = () => {
    const { slideOut, trayWidth } = this.state;
    const toValue = slideOut ? this.props.sideTrayWidth : trayWidth;
    Animated.timing(
      this.state.trayWidthAnim,
      {
        toValue: this.props.sideTrayWidth,
        duration: 250
      }
    ).start();
  }


  setSlideOutTrayWidth = width => {
    console.log('width: ', width);
    this.setState({
      slideOutTrayWidth: width,
      animatedWidth: new Animated.Value(-width + this.props.sideTrayWidth)
    })
  }

  handlePress = () => {
    this.setState({slideOut: !this.state.slideOut});
  }

  render() {
    // const { animatedWidth } = this.state;
    const animatedWidth = this.state.slideOut ? this.props.sideTrayWidth : this.state.animatedWidth;
    return (
      <View>
        <Animated.View style={[ styles.slideOutTray, {transform: [{translateX: animatedWidth}]} ]}>
          <SlideOutTray
            setWidth={this.setSlideOutTrayWidth}
            sideTrayWidth={this.props.sideTrayWidth}
          />
        </Animated.View>
        <Tile handlePress={this.handlePress} text={this.props.text} />
      </View>
    )
  }
};

const styles = EStyleSheet.create({
  slideOutTray: {
    position: 'absolute'
  }
});
