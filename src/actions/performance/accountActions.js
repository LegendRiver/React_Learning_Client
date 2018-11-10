import {ACCOUNT_ALL_IDS, ACCOUNT_DATAS, RESPONSE_DATA} from "../../constants/stateKeys.js";
import HttpClient from '../../common/http/HttpClient';

export const QUERY_ACCOUNTS = 'QUERY_ACCOUNTS';
export const QUERY_ACT_COUNTRY_PERFORMANCE = 'QUERY_ACT_COUNTRY_PERFORMANCE';


function queryAccounts(accounts)
{
	return {
		type: QUERY_ACCOUNTS,
		data: accounts,
		updateTime: Date.now()
	};
}

function queryActCountryPerformance(queryData)
{
    let performanceData = queryData[RESPONSE_DATA];
    return {
        type: QUERY_ACT_COUNTRY_PERFORMANCE,
        data: performanceData,
        updateTime: Date.now()
    };
}

function prehandleAccountData(queryData)
{
    let dataInfo = queryData[RESPONSE_DATA];
    let accountDatas = dataInfo[ACCOUNT_DATAS];
    if(!accountDatas)
    {
        return {};
    }
    let accountIds = Object.keys(accountDatas);

    let accounts = {};
    Object.assign(accounts, dataInfo);
    accounts[ACCOUNT_ALL_IDS] = accountIds;
    return accounts;
}

function handleAccountResponse(accountData, dispatch)
{
    const handledData = prehandleAccountData(accountData);
    dispatch(queryAccounts(handledData));
}

function fetchAccounts(dispatch, productId)
{
    let paramMap = new Map();
    paramMap.set('productId', productId);

    const endpoint = 'accountBasicInfo';
    const client = new HttpClient(endpoint, paramMap);
    return client.sendGetRequest(dispatch, handleAccountResponse);
}

function handlePerformResponse(performanceData, dispatch)
{
    dispatch(queryActCountryPerformance(performanceData));
}

function fetchActPerformanceById(dispatch, productId, startDate, endDate)
{
    if(!productId)
    {
        return null;
    }

    let paramMap = new Map();
    paramMap.set('productId', productId);
    paramMap.set('startDate', startDate);
    paramMap.set('endDate', endDate);

    const endpoint = 'actGeoInsight';
    const client = new HttpClient(endpoint, paramMap);
    return client.sendGetRequest(dispatch, handlePerformResponse);
}


export function fetchAccountDatas(productId)
{
	return dispatch => {
		fetchAccounts(dispatch, productId);
	};
}

export function queryActPerformanceById(productId, startDate, endDate)
{
	return dispatch => {
		fetchActPerformanceById(dispatch, productId, startDate, endDate);
	};
}