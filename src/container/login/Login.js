/**
 * Created by Feng on 2018/1/23.
 */

import {connect} from 'react-redux';

import React, {Component} from 'react';
import {checkAuth} from '../../actions/login/authAction';
import {checkIllegalChar} from '../../common/commonUtil';
import '../../css/login/loginForm.css';
import {USER_NAME_ILLEGAL_MSG, PASSWORD_ILLEGAL_MSG, AUTH_FAILED_MSG} from "../../constants/uiTextConstants";

class LoginForm extends Component
{
    constructor(props)
    {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.handleUserName = this.handleUserName.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.userName = '';
        this.password = '';
        this.firstLogin = true;
        this.state = {message: ''}
    }

    onSubmit(event)
    {
        this.firstLogin = false;
        event.preventDefault();
        if(!this.checkIllegal(this.userName, USER_NAME_ILLEGAL_MSG))
        {
            return;
        }

        if(!this.checkIllegal(this.password, PASSWORD_ILLEGAL_MSG))
        {
            return;
        }
        const {dispatch} = this.props;
        dispatch(checkAuth(this.userName, this.password));
    }

    handleUserName(event)
    {
        const name = event.target.value;
        this.checkIllegal(name, USER_NAME_ILLEGAL_MSG);
        this.userName = name;
    }

    handlePassword(event)
    {
        const pwd = event.target.value;
        this.checkIllegal(pwd, PASSWORD_ILLEGAL_MSG);
        this.password = pwd;
    }

    checkIllegal(checkString, message)
    {
        if (checkIllegalChar(checkString) === false)
        {
            this.setState({message: message});
            return false;
        }
        else
        {
            this.setState({message: ''});
            return true;
        }
    }

    showMessage()
    {
        if(!this.props.isAuth && !this.firstLogin)
        {
           return AUTH_FAILED_MSG;
        }
        else
        {
            return this.state.message;
        }
    }



    render()
    {
        return (
            <form className="login-form" onSubmit={this.onSubmit}>
                <div className="login-message-div">
                    <label>{this.showMessage()}</label>
                </div>
                <div className="login-username-div">
                    <label className="login-label" htmlFor="username">Username</label>
                    <input className="login-input" type="text" id="username" placeholder="Enter userName" onChange={this.handleUserName}
                           autoCorrect="off" autoCapitalize="off" spellCheck="false" />
                </div>
                <div className="login-password-div">
                    <label className="login-label" htmlFor="password">Password</label>
                    <input className="login-input" id="password" type="password" placeholder="Enter password" onChange={this.handlePassword}/>
                </div>
                <div className="login-button-div">
                    <button className="login-submit-button" type="submit">Submit</button>
                </div>
            </form>
        );
    }


}

const mapStateToProps = (state) => {
    const {isAuthenticated} = state;
    return {
        isAuth: isAuthenticated,
    };
};

const Login = connect(mapStateToProps)(LoginForm);

export default Login;