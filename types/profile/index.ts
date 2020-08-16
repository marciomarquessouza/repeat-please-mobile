import { TLevels } from '../challenge';
import { IStorage } from '../storage';

export type TUserType = 'guest' | 'registered';

export interface IProfile extends IStorage {
	name?: string;
	isFirstAccess?: boolean;
	userType?: TUserType;
	email?: string;
	lastLevelSelected?: TLevels;
}
