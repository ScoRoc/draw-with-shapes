import React from 'react';
import { Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { connect } from 'react-redux';

const Canvas = props => {

  return (
    <View style={[ styles.canvas, {backgroundColor: props.canvasColor} ]}>
      <Text style={styles.text}>I'm Canvas</Text>
    </View>
  )
};

const styles = EStyleSheet.create({
  canvas: {
    height: '92%',
    width: '92%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#f3a',
    fontSize: '20rem'
  }
});

const mapStateToProps = state => {
  return { canvasColor: state.main.canvasColor };
};

export default connect(mapStateToProps)(Canvas);
