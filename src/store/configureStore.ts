import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/rootReducer';
import createSagaMiddleware from 'redux-saga';
import rootSagas from '../sagas/rootSagas';

const sagaMiddleware = createSagaMiddleware();

export const configureStore = () => {
	const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
	sagaMiddleware.run(rootSagas);
	return store;
};
