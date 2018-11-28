import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import EStyleSheet from 'react-native-extended-stylesheet';

import MainScreen from './src/screens/MainScreen';
import IAPScreen from './src/screens/IAPScreen';

const RootStack = createStackNavigator(
  {
    Main: MainScreen,
    IAP: IAPScreen
  },
  {
    mode: 'modal',
    headerMode: 'none'
  }
);

const { height, width } = Dimensions.get('window');
const baseScreenWidth = 812; // from iPhoneX sideways

EStyleSheet.build({
  $rem: width / baseScreenWidth
});

// export default createAppContainer(RootStack);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <AppContainer />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


  //////////////////////
 // Stock code below //
//////////////////////

// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
//
// export default class App extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>Open up App.js to start working on your app!</Text>
//       </View>
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
