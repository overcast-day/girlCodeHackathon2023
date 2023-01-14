import React, from "react";
import Graphic from '../assets/svg/illustration-upload.svg';
import {Link} from "react-router-dom";

console.log(Graphic);
window.location.href = "/LoadingPage"

export function Upload() {
    return <div className="UploadPage">
        <img src={Graphic} alt="Upload Page Illustration"/>
        <p className="title">UPLOAD PHOTO HERE</p>
        <p className="subtitle">
            Upload an outfit from your phone to discover your recommendations
        </p>
        <button 
            onclick="location.href='/LoadingPage';" 
            value="Go To" />

    </div>
}
