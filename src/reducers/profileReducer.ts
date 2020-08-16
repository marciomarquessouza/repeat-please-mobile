import * as actions from '../actions/actionTypes/profileActionsTypes';
import { IProfile } from '../../types/profile';

interface IProfileState {
	profile: IProfile | null;
	error: string;
}

const initialState: IProfileState = {
	profile: null,
	error: '',
};

export const profileReducer = (
	state: IProfileState = initialState,
	action: actions.ProfileAction,
): IProfileState => {
	switch (action.type) {
		case actions.PROFILE_SET_SUCCESS:
		case actions.PROFILE_GET_SUCCESS:
			return {
				...state,
				profile: action.profile,
			};
		case actions.PROFILE_CLEAR_SUCCESS:
			return {
				...state,
				profile: null,
			};
		case actions.PROFILE_ERROR:
			return {
				...state,
				error: action.error,
			};
		default:
			return state;
	}
};
