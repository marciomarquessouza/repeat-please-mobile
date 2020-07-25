import { put, call, takeLatest, all, fork } from 'redux-saga/effects';
import { getUser } from '../services/userServices';
import * as userActions from '../actions/actionsCreator/userActionsCreator';
import * as userActionsTypes from '../actions/actionTypes/userActionsTypes';
import { UserType } from '../../types/users';

export function* onGetUser({ userId }: userActionsTypes.IGetUserRequestAction) {
	try {
		const user: UserType = yield call(getUser, userId);
		yield put(userActions.getUserSuccess(user));
	} catch (error) {
		yield put(userActions.getUserError(error));
	}
}

function* watchOnGetUser() {
	yield takeLatest(userActionsTypes.GET_USER_REQUEST, onGetUser);
}

export default function* userSaga() {
	yield all([fork(watchOnGetUser)]);
}
