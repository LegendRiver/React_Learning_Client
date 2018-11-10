/**
 * Created by Feng on 2018/3/1.
 */
import UrlBuilder from './UrlBuilder'
import {RESPONSE_STATUS_CODE} from '../../constants/stateKeys';
import {URL_LOGIN} from '../../constants/urlPathConstants';
import {TOKEN_FAILED_CODE} from '../../constants/commonConstants';
import {push} from 'react-router-redux';

export default class HttpClient
{
    constructor(endpoint, paramMap=null)
    {
        this.queryUrl = this._getUrl(endpoint, paramMap);
    }

    _getUrl(endpoint, paramMap)
    {
        const urlBuilder = new UrlBuilder(endpoint, paramMap);
        return urlBuilder.buildUrl();
    }

    _checkTokenCode(dispatch, responseData)
    {
        const statusCode = responseData[RESPONSE_STATUS_CODE];

        if(statusCode === TOKEN_FAILED_CODE)
        {
            dispatch(push(URL_LOGIN));
            return false;
        }

        return true;
    }

    sendGetRequest(dispatch, callback)
    {
        return fetch(this.queryUrl).then(response=>response.json()).then(responseData =>
        {
            if(this._checkTokenCode(dispatch, responseData))
            {
                callback(responseData, dispatch);
            }
        });
    }

    sendPostFormData(formData, dispatch, callback)
    {
        let option = {
            method: 'POST',
            headers: {
                "content-type": "multipart/form-data",
            },
            body: formData
        };

        return fetch(this.queryUrl, option).then(response=>response.json()).then( responseData =>
        {
            if(this._checkTokenCode(dispatch, responseData))
            {
                callback(responseData);
            }
        });
    }

    sendPostJsonData(jsonData, dispatch, callback)
    {
        let option = {
            method: 'POST',
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(jsonData)
        };

        return fetch(this.queryUrl, option).then(response=>response.json()).then( responseData =>
        {
            if(this._checkTokenCode(dispatch, responseData))
            {
                callback(responseData);
            }
        });
    }
}