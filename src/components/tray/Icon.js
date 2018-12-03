import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';

const libraries = {
  FontAwesome: FontAwesome,
  MaterialCommunityIcons: MaterialCommunityIcons,
}

export default Icon = props => {
  const Library = libraries[props.library];
  return (
    // <MaterialCommunityIcons name={props.name} size={32} color='black' />
    <Library name={props.name} size={32} color='black' />
  )
};

const styles = EStyleSheet.create({
//
});
