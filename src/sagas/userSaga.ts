import { put, takeEvery, all, fork, take } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import * as firebase from 'firebase';
import * as actions from '../actions/actionsCreator/userActionsCreator';
import * as actionsTypes from '../actions/actionTypes/userActionsTypes';
import { UserType } from '../../types/users';

interface IDocument {
	id: string;
	data: () => UserType;
}

function* onLoadUsers() {
	const ref = firebase.firestore().collection('users');
	const channel = eventChannel(emit => ref.onSnapshot(emit));
	try {
		while (true) {
			const users: UserType[] = [];
			const querySnapshot = yield take(channel);
			querySnapshot.forEach((document: IDocument) => {
				users.push({ ...document.data(), id: document.id });
			});
			yield put(actions.getUserSuccess(users));
		}
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
