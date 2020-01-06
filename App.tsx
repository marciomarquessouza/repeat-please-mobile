import React, { Component } from 'react';
import SplashScreen from 'react-native-splash-screen';
import AppContainer from './src/navigator';
import * as firebase from 'firebase';

const firebaseConfig = {};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default class App extends Component {
  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    return (
      <AppContainer />
    );
  }
}
