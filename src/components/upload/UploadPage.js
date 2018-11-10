/**
 * Created by Feng on 2018/2/28.
 */
import React, {Component} from 'react';
import UploadContainer from '../../container/upload/UploadContainer';
import '../../css/upload/uploadPage.css'

export default class UploadPage extends Component
{
    render() {
        return (
            <div className="upload-page-main-div">
                <div className="upload-form_div">
                    <UploadContainer/>
                </div>
                <div>

                </div>
            </div>
        )
    }
}