/**
 * Created by Feng on 2018/3/2.
 */

import HttpClient from '../../common/http/HttpClient';

function uploadFile(dispatch, file, paramMap, callback)
{

    const endpoint = 'materialUpload';
    const client = new HttpClient(endpoint, paramMap);

    const formData = new FormData();
    formData.append('file',file);

    return client.sendPostFormData(formData, dispatch, callback);
}

export function uploadZip(file, userName, userId, taskName, callback)
{
    return dispatch => {
        let paramMap = new Map();
        paramMap.set('userName', userName);
        paramMap.set('userId', userId);
        paramMap.set('taskName', taskName);

        uploadFile(dispatch, file, paramMap, callback);
    };
}