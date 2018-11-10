/**
 * Created by Feng on 2018/1/20.
 */
import React from 'react';
import {ConnectedRouter} from 'react-router-redux'
import HomeRoute from '../routers/HomeRoute';

const IndexRouter = (props) =>
    (
        <ConnectedRouter history={props.history}>
            <HomeRoute/>
        </ConnectedRouter>
    );


export default IndexRouter;