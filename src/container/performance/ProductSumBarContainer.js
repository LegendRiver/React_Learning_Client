import {connect} from 'react-redux';

import {getProductSumBarTitle} from '../../business/productStateHelper';
import SumBar from '../../components/perfermance/SumBar';

const mapStateToProps = (state) => {
    const barTitleList = getProductSumBarTitle(state);
    if (!barTitleList)
    {
        return {};
    }
    return {
        titles: barTitleList,
    };
};

const ProductSumBarContainer = connect(mapStateToProps)(SumBar);

export default ProductSumBarContainer;
