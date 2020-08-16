import * as actions from '../actions/actionTypes/profileActionsTypes';
import { IProfile } from '../../types/profile';

interface IProfileState {
	profile: IProfile | null;
	error: string;
	isLoading: boolean;
}

const initialState: IProfileState = {
	profile: null,
	error: '',
	isLoading: false,
};

export const profileReducer = (
	state: IProfileState = initialState,
	action: actions.ProfileAction,
): IProfileState => {
	switch (action.type) {
		case actions.PROFILE_SET_REQUEST:
		case actions.PROFILE_GET_REQUEST:
		case actions.PROFILE_CLEAR_REQUEST:
			return {
				...state,
				isLoading: true,
			};
		case actions.PROFILE_SET_SUCCESS:
		case actions.PROFILE_GET_SUCCESS:
			return {
				...state,
				profile: action.profile,
				isLoading: false,
			};
		case actions.PROFILE_CLEAR_SUCCESS:
			return {
				...state,
				profile: null,
				isLoading: false,
			};
		case actions.PROFILE_ERROR:
			return {
				...state,
				isLoading: false,
				error: action.error,
			};
		default:
			return state;
	}
};
