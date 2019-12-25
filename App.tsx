import React, { Component } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  StatusBar,
} from 'react-native';
import { LogoTitle } from 'repeat-please-styles';
import SplashScreen from 'react-native-splash-screen';


export default class App extends Component {
  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <ScrollView contentInsetAdjustmentBehavior="automatic">
            <View>
              <LogoTitle />
            </View>
          </ScrollView>
        </SafeAreaView>
      </>
    );
  }
}
