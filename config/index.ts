import Config from 'react-native-config';

export const firebaseConfig = {
	apiKey: Config.API_KEY,
	authDomain: Config.AUTH_DOMAIN,
	databaseURL: Config.DATABASE_URL,
	projectId: Config.PROJECT_ID,
	storageBucket: Config.STORAGE_BUCKET,
	messagingSenderId: Config.MESSAGEING_SENDER_ID,
	appId: Config.APP_ID,
};
