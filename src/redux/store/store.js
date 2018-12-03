import { combineReducers, createStore } from 'redux';
import clear from '../reducers/clear';
import colors from '../reducers/colors';
import main from '../reducers/main';
import settings from '../reducers/settings';
import shapes from '../reducers/shapes';
import tools from '../reducers/tools';

const rootReducer = combineReducers({
  clear,
  colors,
  main,
  settings,
  shapes,
  tools,
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
