import { combineReducers } from 'redux';
import { challengeReducer } from './challengeReducer';
import { userReducer } from './userReducer';

const rootReducer = combineReducers({
	challenge: challengeReducer,
	users: userReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
