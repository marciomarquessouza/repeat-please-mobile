import React, { Component } from 'react';
import SplashScreen from 'react-native-splash-screen';
import AppContainer from './src/navigator';
import * as firebase from 'firebase';
import { firebaseConfig } from './config.homolog';
import { AlertsProvider } from './src/contexts/AlertsContext';

firebase.initializeApp(firebaseConfig);

export default class App extends Component {
  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    return (
			<AlertsProvider>
	      <AppContainer />
			</AlertsProvider>
    );
  }
}
