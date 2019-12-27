import React, { Component } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { Slides } from './src/screens/slides';

export default class App extends Component {
  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    return (
      <Slides />
    );
  }
}
