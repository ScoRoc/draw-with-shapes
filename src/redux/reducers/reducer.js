import { Dimensions } from 'react-native';

import { TEST } from '../constants/action-types';

const initialState = {
  tileHeight: Dimensions.get('window').height / 7,
  tester: 'foo test'
};

export default rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case TEST:
      return {
        ...state,
        tester: action.tester
      };
    default:
      return state;
  }
};






   ////////////////////////////////////////////
  // separating reducers into similar logic //
 //  and then combine like this            //
////////////////////////////////////////////

// import { combineReducers } from 'redux';
//
// const comboReducer = combineReducers({
//   reducer1,
//   reducer2
// });
//
// export default comboReducer;
