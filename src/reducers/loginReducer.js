/**
 * Created by Feng on 2018/1/22.
 */

import {AUTH_STATE, QUERY_USER} from '../actions/login/authAction';

function setAuthState(state = false, action)
{
    switch (action.type)
    {
        case AUTH_STATE:
            return action.state;
        default:
            return state;
    }
}

function queryUsers(state = {}, action)
{
    switch (action.type)
    {
        case QUERY_USER:
            return Object.assign({}, state, action.data, {
                updateTime: action.updateTime
            });
        default:
            return state;
    }
}

const logInReducer = () => ({
    isAuthenticated: setAuthState,
    userInfo: queryUsers
});


export default logInReducer;