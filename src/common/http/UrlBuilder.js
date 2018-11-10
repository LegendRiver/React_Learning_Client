/**
 * Created by Feng on 2018/3/1.
 */
import {USER_TOKEN} from '../../constants/stateKeys';

const ORION_SERVICE_IP = '34.215.220.228';
const ORION_SERVICE_PORT = '6030';

// const ORION_SERVICE_IP = '127.0.0.1';
// const ORION_SERVICE_PORT = '8050';

export default class UrlBuilder
{
    constructor(endpoint, paramMap)
    {
       this.baseUrl = this._buildBaseUrl() ;
       this.endpoint = endpoint;
       this.paramMap = paramMap;
       this.token = localStorage.getItem(USER_TOKEN);
    }

    _buildBaseUrl()
    {
        let url = 'http://';
        url += ORION_SERVICE_IP;
        url += ':';
        url += ORION_SERVICE_PORT;
        url += '/';

        return url;
    }

    _buildQueryParam()
    {
        let queryString = '?';
        if(this.paramMap && this.paramMap instanceof Map && this.paramMap.size > 0)
        {
            for(let [paramName, paramValue] of this.paramMap.entries())
            {
                queryString += paramName;
                queryString += '=';
                queryString += paramValue;
                queryString += '&'
            }
        }

        queryString += 'sessionToken=';
        queryString += this.token;

        return queryString;
    }

    buildUrl()
    {
        if(!this.endpoint)
        {
            return '';
        }

        let url = this.baseUrl;
        url += this.endpoint;
        url += this._buildQueryParam();

        return url;
    }

}
