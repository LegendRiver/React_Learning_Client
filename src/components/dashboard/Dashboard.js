/**
 * Created by Feng on 2018/1/23.
 */
import React, {Component} from 'react';
import ImageLink from '../../components/common/ImageLink';
import '../../css/dashboard/dashboard.css';
import {URL_REPORT, URL_DUPLICATE} from '../../constants/urlPathConstants';

export default class Dashboard extends Component
{
    render()
    {
        return (
            <div className="dashboard-root-div">
                <div className="dashboard-row-div">
                    <div className="dashboard-image-div">
                        <ImageLink toUrl={URL_REPORT} image='./resources/icon/bar-chart.png'/>
                    </div>
                    <div className="dashboard-image-div">
                        <ImageLink toUrl={URL_DUPLICATE} image='./resources/icon/upload.png'/>
                    </div>
                </div>
            </div>
        );
    }
}