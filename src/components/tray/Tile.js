import React from 'react';
import { TouchableHighlight, Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { connect } from 'react-redux';

const Tile = props => {
  // FIX WIDTH
  const width = props.slide ? 80 : '100%';
  return (
    <TouchableHighlight
      onPress={() => console.log('pressed')}
      activeOpacity={.6}
      underlayColor='#3cd'
    >
      <View style={[ styles.tile, {height: props.height, width} ]}>
        <Text style={{color: '#f3a', fontWeight: 'bold'}}>{props.text}</Text>
      </View>
    </TouchableHighlight>
  )
};

const styles = EStyleSheet.create({
  tile: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
    borderColor: 'black',
    borderWidth: 1
  }
});

const mapStateToProps = state => {
  return { height: state.tileHeight }
};

export default connect(mapStateToProps)(Tile);
