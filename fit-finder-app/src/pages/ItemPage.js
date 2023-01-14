import React from 'react'

import Clothing from "../assets/img/example-clothing.webp";

export function ItemPage() {
    return <div className="ItemPage">
        <div className="body">
            <div className="photo" style={{backgroundImage: `url(${Clothing})`}}></div>
            <div className="title">Elevate Bustier</div>
            <div className="sub">
                <div className="creator">ten by babaton</div>
                <div className="price">$110.00</div>
            </div>
            <div className="text">This is a cropped, bustier-style top with boning for shaping and a front peak hem. It's made from a high-shine, stretchy satin fabric.</div>
            <div className="colors"></div>
            <div className="size"></div>
            <div className="button"></div>
        </div>
    </div>
}
