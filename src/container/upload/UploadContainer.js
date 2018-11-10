/**
 * Created by Feng on 2018/2/27.
 */

import {connect} from 'react-redux';
import {getUserInfo} from '../../business/userStateHelper';
import UploadComponent from '../../components/upload/UploadComponent';

const mapStateToProps = (state) => {
    const userInfo = getUserInfo(state);
    if (!userInfo) {
        return {};
    }
    return userInfo;
};

const UploadContainer = connect(mapStateToProps)(UploadComponent);

export default UploadContainer;

