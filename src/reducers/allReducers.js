import productReducer from './productReducers';
import accountReducer from './accountReducers';
import loginReducer from './loginReducer';
import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';


const productReducerObject = productReducer();
const accountReducerObject = accountReducer();
const loginReducerObject = loginReducer();
const reducers = Object.assign({}, productReducerObject, accountReducerObject, loginReducerObject);

const allReducers = combineReducers({
    ...reducers,
    router: routerReducer
});

export default allReducers;