import React from 'react';
import { Animated, Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { connect } from 'react-redux';

import SlideOutTray from './SlideOutTray';
import Tile from './Tile';
import Tile2 from './Tile2';

class TileWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isTrayOpen: false,
      slideOutTrayWidth: 0,
      animatedWidth: 0
    }
  }

  animateSlide = () => {
    const { isTrayOpen, slideOutTrayWidth, animatedWidth } = this.state;
    const { sideTrayWidth } = this.props;
    const toValue = isTrayOpen ? -slideOutTrayWidth + sideTrayWidth : sideTrayWidth;
    Animated.timing(
      animatedWidth,
      {
        toValue: toValue,
        duration: 250
      }
    ).start();
  }

  setSlideOutTrayWidth = width => {
    this.setState({
      slideOutTrayWidth: width,
      animatedWidth: new Animated.Value(-width + this.props.sideTrayWidth)
    });
  }

  handlePress = () => {
    this.props.setFocus(this.props.idx);
    this.animateSlide();
    this.setState({isTrayOpen: !this.state.isTrayOpen});
  }

  componentDidUpdate() {
    const { isTrayOpen } = this.state;
    const { focused, idx } = this.props;
    if (isTrayOpen && focused !== idx) {
      this.animateSlide();
      this.setState({isTrayOpen: false});
    }
  }

  render() {
    const { animatedWidth } = this.state;
    // const defaultTileBGColor = 'green';
    return (
      <View>
        <Animated.View style={[ styles.slideOutTray, {transform: [{translateX: animatedWidth}]} ]}>
          <SlideOutTray
            text={this.props.text}
            colorType={this.props.colorType}
            tileType={this.props.tileType}
            setWidth={this.setSlideOutTrayWidth}
            sideTrayWidth={this.props.sideTrayWidth}
          />
        </Animated.View>
        <Tile2
          tileType={this.props.tileType}
          backgroundColor={this.props.bgColor}
          handlePress={this.handlePress}
          height={this.props.height}
          width='100%'
        >
          {this.props.icon || this.props.text}
        </Tile2>
        {/* <Tile
          tileType={this.props.tileType}
          bgColor={this.props.bgColor || defaultTileBGColor}
          handlePress={this.handlePress}
          text={this.props.text}
        /> */}
      </View>
    )
  }
};

const styles = EStyleSheet.create({
  slideOutTray: {
    position: 'absolute'
  }
});

const mapStateToProps = state => {
  return { height: state.main.tileHeight, colors: state.colors }
};

export default connect(mapStateToProps)(TileWrapper);
