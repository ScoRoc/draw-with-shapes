import React from 'react';
import { Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import SlideOutTray from './SlideOutTray';

export default SlideOutTrayWrapper = props => {

  return (
    <View style={styles.tray}>
      <SlideOutTray />
      <SlideOutTray />
      <SlideOutTray />
      <SlideOutTray />
      <SlideOutTray />
      <SlideOutTray />
    </View>
  )
};

const styles = EStyleSheet.create({
  tray: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    backgroundColor: 'orange',
    zIndex: 50
  }
});
