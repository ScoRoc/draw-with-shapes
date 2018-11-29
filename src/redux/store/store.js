import { combineReducers, createStore } from 'redux';
import main from '../reducers/main';
import colors from '../reducers/colors';

const rootReducer = combineReducers({
  main,
  colors
});

export default store = createStore(rootReducer);



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
