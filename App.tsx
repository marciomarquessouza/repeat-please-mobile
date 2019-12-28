import React, { Component } from 'react';
import SplashScreen from 'react-native-splash-screen';
import AppContainer from './src/navigator';


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
