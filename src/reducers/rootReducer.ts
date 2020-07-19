import { combineReducers } from 'redux';
import { challengeReducer } from './challengeReducer';

const rootReducer = combineReducers({
	challenge: challengeReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
