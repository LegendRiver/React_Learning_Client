/**
 * Created by Feng on 2018/1/27.
 */

import React, {Component} from 'react';
import {uploadZip} from '../../actions/upload/uploadAction';
import {RESPONSE_MESSAGE} from '../../constants/stateKeys';


export default class UploadComponent extends Component
{
    constructor(props)
    {
        super(props);
        this.state ={
            message: ''
        };
        this.file = null;
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.handleResponse = this.handleResponse.bind(this);
    }

    onFormSubmit(event)
    {
        event.preventDefault();
        if(!this.file)
        {
            return;
        }
        this.props.dispatch(uploadZip(this.file, this.props.userName, this.props.userId, 'DATask', this.handleResponse));
    }
    onChange(event)
    {
        const uploadFile = event.target.files[0];
        if(!uploadFile)
        {
            this.file = null;
            this.setState({message: 'The File is empty. Please choose file again.'});
            return;
        }
        if(uploadFile.size > 100*1024*1024)
        {
            this.file = null;
            this.setState({message: 'File size is greater than 50M.'});
            return;
        }

        this.file = uploadFile;
    }

    handleResponse(responseData)
    {
        this.setState({message: responseData[RESPONSE_MESSAGE]});
    }

    render() {
        return (
            <form className="upload-zipfile-form" onSubmit={this.onFormSubmit}>
                {/*<input type="text"/>*/}
                <div className="upload-input-div">
                    <input className="upload-file-input" type="file" onChange={this.onChange} />
                    <button type="submit">上传</button>
                </div>
                <div className="upload-result-message">
                    <label>{this.state.message}</label>
                </div>
            </form>
        )
    }
}