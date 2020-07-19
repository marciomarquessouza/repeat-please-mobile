import { createStore } from 'redux';
import rootReducer from '../reducers/rootReducer';

export const configureStore = () => {
	const store = createStore(rootReducer);
	return store;
};
