import React, { Component } from 'react';
import SplashScreen from 'react-native-splash-screen';
import AppContainer from './src/navigator';
import * as firebase from 'firebase';

const firebaseConfig = {
	apiKey: "AIzaSyDcMG3Wr5rB8n8hcGvh7kbFisvSx_k4uxk",
	authDomain: "repeatpleaseapi.firebaseapp.com",
	databaseURL: "https://repeatpleaseapi.firebaseio.com",
	projectId: "repeatpleaseapi",
	storageBucket: "repeatpleaseapi.appspot.com",
	messagingSenderId: "86626703872",
	appId: "1:86626703872:web:e1f2ce8753b15482a796e5"
};

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
