import React from 'react';
import NavContainer from '../../container/performance/NavContainer';

import PerformanceContainer from '../../container/performance/PerformanceContainer';
import '../../css/performance/performanceReport.css';

const PerformanceReport = () => {
	return (
		<div className="performance-report-container">
    		<NavContainer/>
			<PerformanceContainer/>
    	</div>
	);
};

export default PerformanceReport;