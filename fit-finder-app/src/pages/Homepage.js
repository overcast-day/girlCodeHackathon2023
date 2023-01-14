import React from 'react'

import Graphic from '../assets/svg/illustration-homepage.svg';
import {Link} from "react-router-dom";

export function Homepage() {
    return <div className="Homepage">
        <object data={Graphic} type="image/svg+xml" className="graphic"></object>
        <div className="title">Fit Finder</div>
        <div className="subtitle">A whole new meaning to &#8220;steal her look&#8221;</div>
        <Link to="/Upload" className="button">Get Started</Link>
    </div>
}
