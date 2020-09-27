import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import AppContainer from './src/navigator';
import * as firebase from 'firebase';
import { AlertsProvider } from './src/contexts/AlertsContext';
import { Provider } from 'react-redux';
import { configureStore } from './src/store/configureStore';
import 'firebase/firestore';
import { firebaseConfig } from './config';
import './src/locales/i18n';
import { setI18nConfig, RNLocalize } from './src/locales/i18n';
import { initializeProfile } from './src/services/profileServices';
import { checkConnection } from './src/utils/checkConnection';

const store = configureStore();

checkConnection().then(netInfo => {
	if (netInfo.isConnected && firebaseConfig.apiKey) {
		firebase.initializeApp(firebaseConfig);
		firebase.firestore();
	}
});

setI18nConfig();

export default () => {
	useEffect(() => {
		RNLocalize.addEventListener('change', setI18nConfig);
		initializeProfile();
		SplashScreen.hide();
		return () => {
			RNLocalize.removeEventListener('change', setI18nConfig);
		};
	}, []);

	return (
		<Provider store={store}>
			<AlertsProvider>
				<AppContainer />
			</AlertsProvider>
		</Provider>
	);
};
