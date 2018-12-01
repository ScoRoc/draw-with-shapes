import React from 'react';
import { Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { connect } from 'react-redux';

import TileWrapper from './TileWrapper';
import Icon from './Icon';

const innerText = ['', 'BG', 'shape', 'tool', 'clear all', 'settings'];

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
    // const text = 'BG';
    const icon = <Icon />

    const color = 'black';
    // const color = canvasColor === 'white' || canvasColor === 'yellow' ? colors.black : colors.white;
    const text = innerText.map((text, i) => (
       <Text key={i} style={[ styles.tileText, {color} ]}>{text}</Text>
    ));
    return (
      <View style={[ styles.tray, {height, width} ]}>
        <TileWrapper
          idx={1}
          tileType='color'
          colorType='activeColor'
          bgColor={this.props.activeColor}
          setFocus={this.setFocus}
          focused={this.state.focusedWrapper}
          sideTrayWidth={width}
          // text='color'
          text={text[0]}
        />
        <TileWrapper
          idx={2}
          tileType='bg'
          colorType={'canvasColor'}
          bgColor={this.props.canvasColor}
          setFocus={this.setFocus}
          focused={this.state.focusedWrapper}
          sideTrayWidth={width}
          // text='BG'
          text={text[1]}
        />
        <TileWrapper
          idx={3}
          tileType='shape'
          bgColor='green'
          setFocus={this.setFocus}
          focused={this.state.focusedWrapper}
          sideTrayWidth={width}
          // text='shape'
          text={text[2]}
          icon={icon}
        />
        <TileWrapper
          idx={4}
          tileType='tool'
          bgColor='green'
          setFocus={this.setFocus}
          focused={this.state.focusedWrapper}
          sideTrayWidth={width}
          // text='tool'
          text={text[3]}
          icon={icon}
        />
        <TileWrapper
          idx={5}
          tileType='clear'
          bgColor='green'
          setFocus={this.setFocus}
          focused={this.state.focusedWrapper}
          sideTrayWidth={width}
          // text='clear all'
          text={text[4]}
          icon={icon}
        />
        <TileWrapper
          idx={6}
          tileType='settings'
          bgColor='green'
          setFocus={this.setFocus}
          focused={this.state.focusedWrapper}
          sideTrayWidth={width}
          text={text[5]}
          icon={icon}
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
  },
  tileText: {
    fontSize: '20rem',
    fontWeight: 'bold'
  }
});

const mapStateToProps = state => {
  const { canvasColor, activeColor, colors } = state.main;
  return { canvasColor, activeColor, colors };
};

export default connect(mapStateToProps)(SideTray);
