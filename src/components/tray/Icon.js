import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import { connect } from 'react-redux';

const libraries = {
  FontAwesome: FontAwesome,
  MaterialCommunityIcons: MaterialCommunityIcons,
}

const Icon = props => {
  const Library = libraries[props.library];
  return (
    <Library name={props.name} size={32} color={props.defaultColor || props.activeColor} />
  )
};

const styles = EStyleSheet.create({
//
});

const mapStateToProps = state => {
  const { activeColor } = state.main;
  return { activeColor };
};

export default connect(mapStateToProps)(Icon);
