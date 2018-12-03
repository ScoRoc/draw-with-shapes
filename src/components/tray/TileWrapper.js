import React from 'react';
import { Animated, Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { connect } from 'react-redux';

import { setColor } from '../../redux/actions/actions';

import SlideOutTray from './SlideOutTray';
import Tile from './Tile';

const tileTypeMap = {
  color: 'colors',
  bg: 'colors',
  shape: 'shapes',
  tool: 'tools',
  clear: 'clear',
  settings: 'settings',
};

class TileWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isTrayOpen: false,
      slideOutTrayWidth: 0,
      animatedWidth: new Animated.Value(0)
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
      slideOutTrayWidth: width
      // animatedWidth: new Animated.Value(-width + this.props.sideTrayWidth)
    });
    this.state.animatedWidth.setValue(-width + this.props.sideTrayWidth);
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
    const { tileType } = this.props;
    console.log('tileType: ', tileType);
    const mapValues = this.props[tileTypeMap[tileType]];
    const tiles = Object.values(mapValues).map((color, i) => {
      let bgColor = tileType === 'color' || tileType === 'bg' ? color : 'green';
      return (
        <Tile
          key={i}
          handlePress={() => this.props.setColor(color, this.props.colorType)}
          backgroundColor={bgColor}
          height={this.props.height}
          width={80}
        >
          {this.props.text || this.props.icon}
        </Tile>
      );
    });
    return (
      <View>
        <Animated.View style={[ styles.slideOutTray, {transform: [{translateX: animatedWidth}]} ]}>
          <SlideOutTray
            setWidth={this.setSlideOutTrayWidth}
          >
            {tiles}
          </SlideOutTray>
        </Animated.View>
        <Tile
          backgroundColor={this.props.bgColor}
          handlePress={this.handlePress}
          height={this.props.height}
          width='100%'
        >
          {/* {this.props.icon || this.props.text} */}
          {this.props.sideTrayDisplay}
        </Tile>
      </View>
    );
  };
};

const styles = EStyleSheet.create({
  slideOutTray: {
    position: 'absolute'
  }
});

const mapStateToProps = state => {
  return {
    clear: state.clear,
    colors: state.colors,
    height: state.main.tileHeight,
    settings: state.settings,
    shapes: state.shapes,
    tools: state.tools,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setColor: (color, colorType) => dispatch(setColor(color, colorType))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TileWrapper);
