import React, { Component } from 'react';
import SplashScreen from 'react-native-splash-screen';
import AppContainer from './src/navigator';
import * as firebase from 'firebase';
import { AlertsProvider } from './src/contexts/AlertsContext';
import { Provider } from 'react-redux';
import { configureStore } from './src/store/configureStore';
import 'firebase/firestore';
import { firebaseConfig } from './config';

firebase.initializeApp(firebaseConfig);
firebase.firestore();
const store = configureStore();

export default class App extends Component {
	componentDidMount() {
		SplashScreen.hide();
	}

	render() {
		return (
			<Provider store={store}>
				<AlertsProvider>
					<AppContainer />
				</AlertsProvider>
			</Provider>
		);
	}
}
