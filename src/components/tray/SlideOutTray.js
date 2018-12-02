import React from 'react';
import { Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { connect } from 'react-redux';

import { setColor } from '../../redux/actions/actions';

import Tile from './Tile';

// const bgColors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'white', 'black'];

class SlideOutTray extends React.Component {
// const SlideOutTray = props => {

  onLayout = ({nativeEvent}) => {
    // console.log('nativeEvent.layout: ', nativeEvent.layout);
    this.props.setWidth(nativeEvent.layout.width);
  }

  render() {
    // console.log('reduxState: ', this.props.colors);
    const { tileType } = this.props;

    const tiles = Object.values(this.props.colors).map((color, i) => {
      let bgColor = tileType === 'color' || tileType === 'bg' ? color : 'green';
      return (
        <Tile
          key={i}
          handlePress={() => this.props.setColor(color, this.props.colorType)}
          backgroundColor={bgColor}
          height={this.props.height}
          width={80}
        >
          {this.props.inner}
        </Tile>
      );
    });
    return (
      <View
        onLayout={e => this.onLayout(e)}
        style={styles.tray}
      >
        {tiles}
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

const mapStateToProps = state => {
  return { reduxState: state, height: state.main.tileHeight, colors: state.colors }
};

const mapDispatchToProps = dispatch => {
  return {
    setColor: (color, colorType) => dispatch(setColor(color, colorType))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SlideOutTray);
