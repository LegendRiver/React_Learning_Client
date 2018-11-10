import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {createLogger} from 'redux-logger';
import allReducers from '../reducers/allReducers';
import createHistory from 'history/createBrowserHistory';
import {routerMiddleware} from 'react-router-redux';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const loggerMiddleware = createLogger();

const history = createHistory();
const routeMiddleware = routerMiddleware(history);

const persistConfig = {
	key: 'all',
	storage: storage,
	whitelist:['isAuthenticated', 'userInfo']
};
const persistedReducer = persistReducer(persistConfig, allReducers);

export default function configureStore(preloadedState)
{
	let store = createStore(persistedReducer, preloadedState,
		applyMiddleware(thunkMiddleware, loggerMiddleware, routeMiddleware));

	let persistor = persistStore(store);

	return {store, persistor};
}

export function getRouterHistory()
{
	return history;
}