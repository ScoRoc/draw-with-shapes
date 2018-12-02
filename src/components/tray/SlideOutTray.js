import React from 'react';
import { View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

export default class SlideOutTray extends React.Component {
// const SlideOutTray = props => {

  onLayout = ({nativeEvent}) => {
    this.props.setWidth(nativeEvent.layout.width);
  }

  render() {
    return (
      <View
        onLayout={e => this.onLayout(e)}
        style={styles.tray}
      >
        {this.props.children}
      </View>
    )
  }
};

const styles = EStyleSheet.create({
  tray: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'yellow',
  }
});
