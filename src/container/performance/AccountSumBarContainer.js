import {connect} from 'react-redux';

import {getAccountSumBarInfo} from '../../business/productStateHelper';
import SumBar from '../../components/perfermance/SumBar';

const mapStateToProps = (state, ownProps) => {
    const barTitleList = getAccountSumBarInfo(state, ownProps.accountId);
    if (!barTitleList) {
        return {};
    }
    return {
        titles: barTitleList,
    };
};

const AccountSumBarContainer = connect(mapStateToProps)(SumBar);

export default AccountSumBarContainer;
