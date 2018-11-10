import {PRODUCT_ALL_IDS, PRODUCT_DATAS, RESPONSE_DATA} from '../../constants/stateKeys';
import HttpClient from '../../common/http/HttpClient';

export const SELECT_PRODUCT = 'SELECT_PRODUCT';
export const QUERY_PRODUCTS = 'QUERY_PRODUCTS';


export function selectOneProduct(productId)
{
	return {
		type: SELECT_PRODUCT,
		id: productId
	};
}

function queryProductData(products)
{
	return {
		type: QUERY_PRODUCTS,
		data: products,
		updateTime: Date.now()
	};
}

function preHandleProductData(queryData)
{
    let productDataInfo = queryData[RESPONSE_DATA];
    let productIds = Object.keys(productDataInfo);

    let products = {};
    products[PRODUCT_DATAS] = productDataInfo;
    products[PRODUCT_ALL_IDS] = productIds;

    return products;
}

function handleProductResponse(productData, dispatch)
{
    const handledData = preHandleProductData(productData);
    dispatch(queryProductData(handledData));
}

function fetchProducts(dispatch)
{
    const endpoint = 'productBasicInfo';
    const client = new HttpClient(endpoint);
    return client.sendGetRequest(dispatch, handleProductResponse);
}

export function fetchProductDatas()
{
	return dispatch => {
		fetchProducts(dispatch);
	};
}