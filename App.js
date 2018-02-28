import { View, StatusBar, StyleSheet, Platform } from 'react-native';
import { Constants } from 'expo';
import { Provider } from 'react-redux';
import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';

import Routes from './Routes';
import reducers from './src/reducers';

const styles = StyleSheet.create({
  statusBar: {
    //android
    backgroundColor: "#128C7E",
    height: Constants.statusBarHeight,
  },

  // rest of the styles
});

export default class App extends Component {

  componentWillMount () {
    // Initialize Firebase
    let config = {
      apiKey: "AIzaSyABg60sgWbYq4RKj6b129AuB513lKAbOkI",
      authDomain: "zaplin-f49cf.firebaseapp.com",
      databaseURL: "https://zaplin-f49cf.firebaseio.com",
      projectId: "zaplin-f49cf",
      storageBucket: "zaplin-f49cf.appspot.com",
      messagingSenderId: "909617101723"
    };
    firebase.initializeApp(config);
  }

  platform() {
    if(Platform.OS != 'ios'){
      return(
        <View style={styles.statusBar} />
      );
    }
  }

  render() {
    console.ignoredYellowBox = ['Setting a timer'];
    return (
      <View style={{flex: 1}}>
        <View style={styles.statusBar} />
        <StatusBar barStyle="light-content" />
        <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}> 
          <Routes />      
        </Provider>
      </View>
    );
  }
}