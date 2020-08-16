import {
	call,
	put,
	takeLatest,
	takeEvery,
	all,
	fork,
} from 'redux-saga/effects';
import * as actions from '../actions/actionsCreator/profileActionsCreator';
import * as actionsTypes from '../actions/actionTypes/profileActionsTypes';
import * as services from '../services/profileServices';
import { IProfile } from 'types/profile';

function* onSetProfile({ profile }: actionsTypes.IProfileSetRequestAction) {
	try {
		yield call(services.setProfile, profile);
		yield put(actions.setProfileSuccess(profile));
	} catch (error) {
		yield put(actions.profileError(error.message));
	}
}

function* watchOnSetProfile() {
	yield takeEvery(actionsTypes.PROFILE_SET_REQUEST, onSetProfile);
}

function* onGetProfile() {
	try {
		const profile: Realm.Results<IProfile> = yield call(services.getProfile);
		yield put(actions.getProfileSuccess(profile[0]));
	} catch (error) {
		yield put(actions.profileError(error.message));
	}
}

function* watchOnGetProfile() {
	yield takeLatest(actionsTypes.PROFILE_GET_REQUEST, onGetProfile);
}

function* onClearProfile() {
	try {
		yield call(services.clearProfile);
		yield put(actions.clearProfileSuccess());
	} catch (error) {
		yield put(actions.profileError(error.message));
	}
}

function* watchOnClearProfile() {
	yield takeLatest(actionsTypes.PROFILE_CLEAR_REQUEST, onClearProfile);
}

export default function* profileSaga() {
	yield all([
		fork(watchOnSetProfile),
		fork(watchOnGetProfile),
		fork(watchOnClearProfile),
	]);
}
