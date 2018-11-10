/**
 * Created by Feng on 2018/1/20.
 */
import React, {Component} from 'react';

import PerformanceReport from '../components/perfermance/PerformanceReport';
import {Route, Switch} from 'react-router-dom'
import Login from '../container/login/Login';
import AuthRoute from '../routers/AuthRoute';
import {URL_LOGIN, URL_HOME, URL_REPORT, URL_DASHBOARD, URL_DUPLICATE} from '../constants/urlPathConstants';
import Dashboard from '../components/dashboard/Dashboard';
import UploadPage from '../components/upload/UploadPage';

class HomeRouteComponent extends Component
{
    render()
    {
        return (
            <div className="home-route-div">
                <Switch>
                    <AuthRoute exact path={URL_HOME} component={Dashboard}/>
                    <Route path={URL_LOGIN} component={Login}/>
                    <AuthRoute path={URL_REPORT} component={PerformanceReport}/>
                    <AuthRoute path={URL_DASHBOARD} component={Dashboard}/>
                    <AuthRoute path={URL_DUPLICATE} component={UploadPage}/>
                </Switch>
            </div>
        );
    }
}

export default HomeRouteComponent;