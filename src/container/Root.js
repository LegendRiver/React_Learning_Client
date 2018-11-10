import React, {Component} from 'react';
import {Provider} from 'react-redux';
import configureStore,{getRouterHistory} from '../store/configureStore';
import IndexRouter from '../routers/IndexRouter';
import {PersistGate} from 'redux-persist/lib/integration/react';

const {store, persistor} = configureStore();
const history = getRouterHistory();

export default class Root extends Component
{
	render()
	{
		return (
			<Provider store={store}>
				<PersistGate loading={null} persistor={persistor}>
					<IndexRouter history={history}/>
				</PersistGate>
			</Provider>
		);
	}
}