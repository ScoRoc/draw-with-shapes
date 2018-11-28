import React from 'react';
import { Dimensions, View } from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import EStyleSheet from 'react-native-extended-stylesheet';

import { Provider } from 'react-redux';
import store from './src/redux/store/store';

import MainScreen from './src/screens/MainScreen';
import IAPScreen from './src/screens/IAPScreen';

const RootStack = createStackNavigator(
  {
    Main: MainScreen,
    IAP: IAPScreen
  },
  {
    initialRouteName: 'Main',
    mode: 'modal',
    headerMode: 'none'
  }
);

const { height, width } = Dimensions.get('window');
const baseScreenWidth = 812; // from iPhoneX sideways

EStyleSheet.build({
  $darkGray: '#333',
  $lightGray: '#bbb',
  $rem: width / baseScreenWidth
});

// export default createAppContainer(RootStack);
const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
};
