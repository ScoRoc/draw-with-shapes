import React from 'react';
import { Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { connect } from 'react-redux';

import { setColor } from '../../redux/actions/actions';

import Tile from './Tile';
import Tile2 from './Tile2';

// const bgColors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'white', 'black'];

class SlideOutTray extends React.Component {

  onLayout = ({nativeEvent}) => {
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
          tileType={this.props.tileType}
          backgroundColor={bgColor}
          colorType={this.props.colorType}
          slide={true}
          text={this.props.text}
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
        {/* <Tile
          handlePress={this.props.setColor}
          tileType={this.props.tileType}
          bgColor='red'
          colorType={this.props.colorType}
          slide={true}
          text={this.props.text}
          width={80}
        />
        <Tile
          handlePress={this.props.setColor}
          tileType={this.props.tileType}
          bgColor='orange'
          colorType={this.props.colorType}
          slide={true}
          text={this.props.text}
          width={80}
        />
        <Tile
          handlePress={this.props.setColor}
          tileType={this.props.tileType}
          bgColor='yellow'
          colorType={this.props.colorType}
          slide={true}
          text={this.props.text}
          width={80}
        />
        <Tile
          handlePress={this.props.setColor}
          tileType={this.props.tileType}
          bgColor='green'
          colorType={this.props.colorType}
          slide={true}
          text={this.props.text}
          width={80}
        />
        <Tile
          handlePress={this.props.setColor}
          tileType={this.props.tileType}
          bgColor='blue'
          colorType={this.props.colorType}
          slide={true}
          text={this.props.text}
          width={80}
        />
        <Tile
          handlePress={this.props.setColor}
          tileType={this.props.tileType}
          bgColor='purple'
          colorType={this.props.colorType}
          slide={true}
          text={this.props.text}
          width={80}
        />
        <Tile
          handlePress={this.props.setColor}
          tileType={this.props.tileType}
          bgColor='white'
          colorType={this.props.colorType}
          slide={true}
          text={this.props.text}
          width={80}
        />
        <Tile
          handlePress={this.props.setColor}
          tileType={this.props.tileType}
          bgColor='black'
          colorType={this.props.colorType}
          slide={true}
          text={this.props.text}
          width={80}
        /> */}
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
