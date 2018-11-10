/**
 * Created by Feng on 2018/1/23.
 */
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../../css/dashboard/imageLink.css';

export default class ImageLink extends Component
{
    render()
    {
        return (
            <Link to={this.props.toUrl}>
                <img className="link-image" src={this.props.image} alt="Product Logo"/>
            </Link>
        );
    }
}