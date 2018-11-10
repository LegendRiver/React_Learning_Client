/**
 * Created by Feng on 2018/1/22.
 */
import {RESPONSE_STATUS_CODE, USER_TOKEN, RESPONSE_DATA} from '../../constants/stateKeys';
import {URL_HOME} from '../../constants/urlPathConstants';
import {push} from 'react-router-redux';
import HttpClient from '../../common/http/HttpClient';

export const AUTH_STATE = 'AUTH_STATE';
export const QUERY_USER = 'GET_USER_INFO';

export function authState(isAuthenticated)
{
    return {
        type: AUTH_STATE,
        state: isAuthenticated
    };
}

function queryUserData(user)
{
    return {
        type: QUERY_USER,
        data: user,
        updateTime: Date.now()
    };
}

function storeToken(user)
{
    const token = user[USER_TOKEN];
    return () => {
        localStorage.removeItem(USER_TOKEN);
        localStorage.setItem(USER_TOKEN, token);
    };
}

function handleUserData(userData, dispatch)
{
    const statusCode = userData[RESPONSE_STATUS_CODE];
    const user = userData[RESPONSE_DATA];
    if (statusCode === 200)
    {
        dispatch(authState(true));
        dispatch(queryUserData(user));
        dispatch(storeToken(user));
        dispatch(push(URL_HOME));
    }
    else
    {
        dispatch(authState(false));
    }
}

function isValidUser(dispatch, userName, password)
{
    let paramMap = new Map();
    paramMap.set('userName', userName);
    paramMap.set('password', password);

    const endpoint = 'userAuth';
    const client = new HttpClient(endpoint, paramMap);
    return client.sendGetRequest(dispatch,handleUserData);
}

export function checkAuth(userName, password)
{
    return dispatch => {
        isValidUser(dispatch, userName, password);
    };
}