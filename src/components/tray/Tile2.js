import React from 'react';
import { TouchableHighlight, Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { connect } from 'react-redux';

const Tile2 = props => {
  // FIX WIDTH
  const { bgColor, colors, colorType, height, slide, text, tileType, width } = props;
  const backgroundColor = tileType === 'color' || tileType === 'bg' ? colors[bgColor] : colors.green;
  const color = bgColor === 'white' || bgColor === 'yellow' ? colors.black : colors.white;
  const adjustHandlePress = () => {
    switch (tileType) {
      case 'color':
      case 'bg':
        return () => props.handlePress(backgroundColor, colorType);
      default:
        return () => props.handlePress();
    }
  }
  const handlePress = adjustHandlePress();
  // const inner = props.icon || <Text style={[ styles.tileText, {color} ]}>{text || ''}</Text>;
  return (
    <TouchableHighlight
      onPress={handlePress}
      activeOpacity={.6}
      underlayColor='#3cd'
    >
      <View style={[ styles.tile, {height, width, backgroundColor} ]}>
        <Text style={[ styles.tileText, {color} ]}>{props.icon || text || ''}</Text>
        {/* <Icon /> */}
        {/* {inner} */}
        {/* <Text><Icon /></Text> */}
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

export default connect(mapStateToProps)(Tile2);
