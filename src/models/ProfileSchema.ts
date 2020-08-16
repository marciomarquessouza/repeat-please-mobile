import Realm from 'realm';

export const PROFILE_SCHEMA_NAME = 'Profile';

export const ProfileSchema: Realm.ObjectSchema = {
	name: PROFILE_SCHEMA_NAME,
	primaryKey: 'id',
	properties: {
		id: 'int',
		name: 'string',
		isFirstAccess: { type: 'bool', default: true },
		userType: 'string',
		email: 'string',
		lastLevelSelected: 'string',
	},
};
