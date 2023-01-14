import React from "react";
import Graphic from '../assets/svg/illustration-upload.svg';
import Logo from '../assets/svg/icon-upload.svg';
import {Link} from "react-router-dom";

export function Upload() {
    return <div className="UploadPage">
        <img src={Graphic} alt="Upload Page Illustration"/>
        <p className="title"><b>UPLOAD PHOTO HERE</b></p>
        <p className="subtitle">
            Upload an outfit from your phone to discover your recommendations
        </p>
        <Link
            className="button-upload"
            to="/LoadingPage">
            <img className="logo-upload" src={Logo} alt="Upload Logo"/>
        </Link>
    </div>
}
