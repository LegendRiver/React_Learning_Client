/**
 * Created by Feng on 2018/1/22.
 */

import React, {Component} from 'react';
import {Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {URL_LOGIN} from '../constants/urlPathConstants';

class AuthRouteComponent extends Component
{
    render()
    {
        const {
            isAuthenticated,
            component: Component,
            ...props
        } = this.props;

        return (
            <Route {...props} render={
                props => isAuthenticated ? <Component {...props} />
                        : (<Redirect to={
                            {
                                pathname: URL_LOGIN,
                                state: { from: props.location }
                        }} />)
                }
            />
        )
    }
}

const AuthRoute = connect(state => ({
    isAuthenticated: state.isAuthenticated
}))(AuthRouteComponent);

export default AuthRoute;