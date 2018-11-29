import React from 'react';
import { Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { connect } from 'react-redux';

import { setColor } from '../../redux/actions/actions';

import Tile from './Tile';

class SlideOutTray extends React.Component {

  onLayout = ({nativeEvent}) => {
    this.props.setWidth(nativeEvent.layout.width);
  }

  render() {
    // console.log('props: ', this.props);
    // this.props.setColor('red', 'activeColor');
    return (
      <View
        onLayout={e => this.onLayout(e)}
        style={styles.tray}
      >
        <Tile
          handlePress={this.props.setColor}
          isColorTile={this.props.isColorTile}
          bgColor='red'
          colorType={this.props.colorType}
          slide={true}
          text={this.props.text}
        />
        <Tile
          handlePress={this.props.setColor}
          isColorTile={this.props.isColorTile}
          bgColor='orange'
          colorType={this.props.colorType}
          slide={true}
          text={this.props.text}
        />
        <Tile
          handlePress={this.props.setColor}
          isColorTile={this.props.isColorTile}
          bgColor='yellow'
          colorType={this.props.colorType}
          slide={true}
          text={this.props.text}
        />
        <Tile
          handlePress={this.props.setColor}
          isColorTile={this.props.isColorTile}
          bgColor='green'
          colorType={this.props.colorType}
          slide={true}
          text={this.props.text}
        />
        <Tile
          handlePress={this.props.setColor}
          isColorTile={this.props.isColorTile}
          bgColor='blue'
          colorType={this.props.colorType}
          slide={true}
          text={this.props.text}
        />
        <Tile
          handlePress={this.props.setColor}
          isColorTile={this.props.isColorTile}
          bgColor='purple'
          colorType={this.props.colorType}
          slide={true}
          text={this.props.text}
        />
        <Tile
          handlePress={this.props.setColor}
          isColorTile={this.props.isColorTile}
          bgColor='white'
          colorType={this.props.colorType}
          slide={true}
          text={this.props.text}
        />
        <Tile
          handlePress={this.props.setColor}
          isColorTile={this.props.isColorTile}
          bgColor='black'
          colorType={this.props.colorType}
          slide={true}
          text={this.props.text}
        />
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
  return { reduxState: state }
};

const mapDispatchToProps = dispatch => {
  return {
    setColor: (color, colorType) => dispatch(setColor(color, colorType))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SlideOutTray);
