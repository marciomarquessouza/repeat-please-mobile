import { call, put, takeEvery, all, fork } from 'redux-saga/effects';
import { getUsers } from '../services/userService';
import * as actions from '../actions/actionsCreator/userActionsCreator';
import * as actionsTypes from '../actions/actionTypes/userActionsTypes';

function* onLoadUsers() {
	try {
		const users = yield call(getUsers);
		yield put(actions.getUserSuccess(users));
	} catch (error) {
		yield put(actions.userError(error));
	}
}

function* watchOnLoadUsers() {
	yield takeEvery(actionsTypes.GET_USERS_REQUEST, onLoadUsers);
}

export default function* userSaga() {
	yield all([fork(watchOnLoadUsers)]);
}
