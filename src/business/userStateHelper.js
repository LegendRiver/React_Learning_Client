/**
 * Created by Feng on 2018/2/27.
 */
import {USER_ID, USER_NAME, USER_TOKEN} from '../constants/stateKeys';

export function getUserInfo(state)
{
    const {userInfo} = state;
    if(!userInfo)
    {
        return null;
    }

    return {
        userId: userInfo[USER_ID],
        userName: userInfo[USER_NAME]
    }

}

export function getTokenInfo(state)
{
    const {userInfo} = state;
    if(!userInfo)
    {
        return null;
    }

    return userInfo[USER_TOKEN];
}