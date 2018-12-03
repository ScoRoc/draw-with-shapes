import React from 'react';
import { Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { connect } from 'react-redux';

import tileTypes from '../../helpers/tile-types';

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
    const {
      allTileTypes,
      getBGColorType,
      getColorType,
      getIcon,
      getText,
      getTileProperty,
    } = tileTypes();
    const { height, width } = this.props.size;
    const color = 'black';
    const tileWrappers = Object.keys(allTileTypes).map((tileType, i) => {
      const text = (
        <Text style={[ styles.tileText, {color} ]}>
          {getText(tileType)}
        </Text>
      );
      const sideTrayDisplay = getIcon(tileType)
                            ? getIcon(tileType)
                            : (
                                <Text style={[ styles.tileText, {color} ]}>
                                  {getText(tileType)}
                                </Text>
                              );
      return (
        <TileWrapper
          key={i}
          idx={i}
          tileType={tileType}
          colorType={getColorType(tileType)}
          bgColor={getBGColorType(tileType)}
          setFocus={this.setFocus}
          focused={this.state.focusedWrapper}
          sideTrayWidth={width}
          icon={getIcon(tileType)}
          text={text}
          sideTrayDisplay={sideTrayDisplay}
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
