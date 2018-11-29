import { Dimensions } from 'react-native';

import { SET_COLOR } from '../constants/action-types';

const initialState = {
  tileHeight: Dimensions.get('window').height / 7,
  activeColor: 'red',
  canvasColor: 'white',
};

export default main = (state = initialState, action) => {
  switch (action.type) {
    case SET_COLOR:
      const { colorType } = action;
      return {
        ...state,
        [colorType]: action.color
      };
    default:
      return state;
  }
};
