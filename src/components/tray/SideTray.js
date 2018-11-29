import React from 'react';
import { Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { connect } from 'react-redux';

import TileWrapper from './TileWrapper';

class SideTray extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      focusedWrapper: null
    }
  }

  setFocus = num => {
    this.setState({focusedWrapper: num});
  }

  render() {
    const { height, width } = this.props.size;
    const text = 'BG';
    return (
      <View style={[ styles.tray, {height, width} ]}>
        <TileWrapper
          idx={1}
          isColorTile={true}
          colorType='activeColor'
          bgColor={this.props.activeColor}
          setFocus={this.setFocus}
          focused={this.state.focusedWrapper}
          sideTrayWidth={width}
          text='color'
        />
        <TileWrapper
          idx={2}
          isColorTile={true}
          colorType={'canvasColor'}
          bgColor={this.props.canvasColor}
          setFocus={this.setFocus}
          focused={this.state.focusedWrapper}
          sideTrayWidth={width}
          text={text}
        />
        <TileWrapper
          idx={3}
          isColorTile={false}
          setFocus={this.setFocus}
          focused={this.state.focusedWrapper}
          sideTrayWidth={width}
          text='shape'
        />
        <TileWrapper
          idx={4}
          isColorTile={false}
          setFocus={this.setFocus}
          focused={this.state.focusedWrapper}
          sideTrayWidth={width}
          text='tool'
        />
        <TileWrapper
          idx={5}
          isColorTile={false}
          setFocus={this.setFocus}
          focused={this.state.focusedWrapper}
          sideTrayWidth={width}
          text='clear all'
        />
        <TileWrapper
          idx={6}
          isColorTile={false}
          setFocus={this.setFocus}
          focused={this.state.focusedWrapper}
          sideTrayWidth={width}
          text='settings'
        />
      </View>
    )
  }
};

const styles = EStyleSheet.create({
  tray: {
    justifyContent: 'space-between',
    backgroundColor: '$lightGray',
    zIndex: 100
  }
});

const mapStateToProps = state => {
  const { canvasColor, activeColor } = state.main;
  return { canvasColor, activeColor };
};

export default connect(mapStateToProps)(SideTray);
