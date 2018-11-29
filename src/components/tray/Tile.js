import React from 'react';
import { TouchableHighlight, Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { connect } from 'react-redux';

const Tile = props => {
  // FIX WIDTH
  const { bgColor, colors, colorType, height, isColorTile, slide, text } = props;
  const width = slide ? 80 : '100%';
  const backgroundColor = isColorTile ? colors[bgColor] : colors.green;
  const color = bgColor === 'white' || bgColor === 'yellow' ? colors.black : colors.white;
  return (
    <TouchableHighlight
      onPress={() => props.handlePress(backgroundColor, colorType)}
      activeOpacity={.6}
      underlayColor='#3cd'
    >
      <View style={[ styles.tile, {height, width, backgroundColor} ]}>
        <Text style={[ styles.tileText, {color} ]}>{text || ''}</Text>
      </View>
    </TouchableHighlight>
  )
};

const styles = EStyleSheet.create({
  tile: {
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 1
  },
  tileText: {
    fontSize: '20rem',
    fontWeight: 'bold'
  }
});

const mapStateToProps = state => {
  return { height: state.main.tileHeight, colors: state.colors }
};

export default connect(mapStateToProps)(Tile);
