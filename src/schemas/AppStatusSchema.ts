import Realm from 'realm';

export const APP_STATUS_SCHEMA_NAME = 'AppStatus';

export const AppStatusSchema: Realm.ObjectSchema = {
	name: APP_STATUS_SCHEMA_NAME,
	properties: {
		isConnected: 'bool',
	},
};
