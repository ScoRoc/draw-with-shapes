import React from 'react';
import { Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import TileWrapper from './TileWrapper';

export default class SideTray extends React.Component {
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
    return (
      <View style={[ styles.tray, {height, width} ]}>
        <TileWrapper idx={1} setFocus={this.setFocus} focused={this.state.focusedWrapper} sideTrayWidth={width} text='color' />
        <TileWrapper idx={2} setFocus={this.setFocus} focused={this.state.focusedWrapper} sideTrayWidth={width} text='bgColor' />
        <TileWrapper idx={3} setFocus={this.setFocus} focused={this.state.focusedWrapper} sideTrayWidth={width} text='shape' />
        <TileWrapper idx={4} setFocus={this.setFocus} focused={this.state.focusedWrapper} sideTrayWidth={width} text='tool' />
        <TileWrapper idx={5} setFocus={this.setFocus} focused={this.state.focusedWrapper} sideTrayWidth={width} text='clear all' />
        <TileWrapper idx={6} setFocus={this.setFocus} focused={this.state.focusedWrapper} sideTrayWidth={width} text='settings' />
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
