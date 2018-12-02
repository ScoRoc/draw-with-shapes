import React from 'react';
import { Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { connect } from 'react-redux';

import tileTypes, { getBGColorType, getColorType } from '../../helpers/tile-types';

import TileWrapper from './TileWrapper';
import Icon from './Icon';

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
    const color = 'black';
    const tileWrappers = Object.keys(tileTypes).map((tileType, i) => {
      const text = (
        <Text style={[ styles.tileText, {color} ]}>
          {tileTypes[tileType].text}
        </Text>
      );
      const theIcon = tileTypes[tileType].icon
                    ? <Icon icon={tileTypes[tileType].icon} />
                    : null;
      const colorType = getColorType(tileType);
      const bgColor = getBGColorType(tileType);
      // const theIcon = tileTypes[tileType].icon;
      return (
        <TileWrapper
          key={i}
          idx={i}
          tileType={tileType}
          colorType={colorType}
          bgColor={bgColor}
          setFocus={this.setFocus}
          focused={this.state.focusedWrapper}
          sideTrayWidth={width}
          icon={theIcon}
          text={text}
        />
      )
    });
    return (
      <View style={[ styles.tray, {height, width} ]}>
        {tileWrappers}
      </View>
    );
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
