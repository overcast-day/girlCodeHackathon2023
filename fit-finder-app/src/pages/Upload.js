import React, { useRef, useEffect, useState } from "react";
import Graphic from '../assets/svg/illustration-upload.svg';
import Logo from '../assets/svg/icon-upload.svg';
import { Link, useHistory } from "react-router-dom";

export function Upload() {
    const fileInput = useRef(null);
    const history = useHistory();
    const [isUploaded, setIsUploaded] = useState(false);

    const handleClick = (e) => {
      fileInput.current.click();
      e.preventDefault();
    };
  
    const handleChange = (e) => {
      console.log(e.target.files[0]); 
      setIsUploaded(true);
    };

    useEffect(() => {
      if (isUploaded) {
        history.push('/LoadingPage');
      }
    }, [isUploaded]);
  

    return <div className="UploadPage">
        <img src={Graphic} alt="Upload Page Illustration" />
        <p className="title"><b>UPLOAD PHOTO HERE</b></p>
        <p className="subtitle">
            Upload an outfit from your phone to discover your recommendations
        </p>
        <button 
            class="button-upload" 
            onClick={handleClick}>
            <img src={Logo} alt="Upload Logo" class="upload-logo" />
        </button>
        <Link to="/LoadingPage" value="Go To" />
        <input type="file" ref={fileInput} onChange={handleChange} style={{ display: "none" }} />
    </div>
}
