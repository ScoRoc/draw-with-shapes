import React from 'react';
import { Button, Dimensions, Platform, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-navigation';

// import { connect } from 'react-redux';
// import { testTest } from '../redux/actions/actions';

import SideTray from '../components/SideTray';
import CanvasFrame from '../components/CanvasFrame';

export default MainScreen = props => {
// const MainScreen = props => {
  // props.testTest('flaka');
  // console.log('tester: ', props.tester);

  const { height, width } = Dimensions.get('window');
  const fraction = Platform.isPad ? 10 : 6;

  const sideTraySize = {
    height: height,
    width: width / fraction
  };
  const canvasFrameSize = {
    height: height,
    width: width / fraction * (fraction - 1)
  };

  return (
    <View style={styles.screen}>
      {/* <Button title='to IAP' onPress={() => props.navigation.navigate('IAP')} /> */}

      <SideTray size={sideTraySize} />
      <CanvasFrame size={canvasFrameSize} />

    </View>
  )
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3fa'
  }
});

// const mapStateToProps = state => {
//   return { tester: state.tester };
// };
//
// const mapDispatchToProps = dispatch => {
//   return {
//     testTest: tester => dispatch(testTest(tester))
//   };
// };
//
// export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
