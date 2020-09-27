import * as storage from '../api/storage';
import * as schemas from '../schemas';
import { IProfile } from '../../types/profile';
import { INITAL_PROFILE } from '../constants/profile';

export const initializeProfile = () => {
	const profile = storage.get(schemas.PROFILE_SCHEMA_NAME).byId(0);
	if (!profile.length) {
		setProfile(INITAL_PROFILE);
	}
};

export const setProfile = (profile: IProfile) => {
	try {
		storage.set<IProfile>(schemas.PROFILE_SCHEMA_NAME, {
			...profile,
			id: 0,
		});
	} catch (error) {
		throw new Error(error.message);
	}
};

export const getProfile = () =>
	storage.get<IProfile>(schemas.PROFILE_SCHEMA_NAME).byId(0);

export const clearProfile = () => {
	try {
		storage.clear<IProfile>(schemas.PROFILE_SCHEMA_NAME).all();
	} catch (error) {
		throw new Error(error.message);
	}
};
