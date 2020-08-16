import { combineReducers } from 'redux';
import { challengeReducer } from './challengeReducer';
import { userReducer } from './userReducer';
import { signInReducer } from './signInReducer';
import { signUpReducer } from './signUpReducer';
import { profileReducer } from './profileReducer';

const rootReducer = combineReducers({
	challenge: challengeReducer,
	user: userReducer,
	signIn: signInReducer,
	signUp: signUpReducer,
	profile: profileReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
