import { combineReducers } from 'redux';
import { challengeReducer } from './challengeReducer';
import { userReducer } from './userReducer';
import { signInReducer } from './signInReducer';
import { signUpReducer } from './signUpReducer';

const rootReducer = combineReducers({
	challenge: challengeReducer,
	user: userReducer,
	signIn: signInReducer,
	signUp: signUpReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
