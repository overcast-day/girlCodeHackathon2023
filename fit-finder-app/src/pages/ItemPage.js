import React from 'react'

import Clothing from "../assets/img/example-clothing.webp";

export function ItemPage() {
    return <div className="ItemPage">
        <div className="body">
            <input type="checkbox" id="heart" className="heart"/>
            <label htmlFor="heart"></label>
            <div className="photo" style={{backgroundImage: `url(${Clothing})`}}></div>
            <div className="title">Elevate Bustier</div>
            <div className="sub">
                <div className="creator">ten by babaton</div>
                <div className="price">$110.00</div>
            </div>
            <div className="text">This is a cropped, bustier-style top with boning for shaping and a front peak hem. It's made from a high-shine, stretchy satin fabric.</div>
            <div className="colors">
                <div>
                    <input type="radio" name="color" id="black"></input>
                    <label htmlFor="black" style={{backgroundColor: "#0A0A18"}}></label>
                </div>
                <div>
                    <input type="radio" name="color" id="brown"></input>
                    <label htmlFor="brown" style={{backgroundColor: "#AA8164"}}></label>
                </div>
                <div>
                    <input type="radio" name="color" id="green"></input>
                    <label htmlFor="green" style={{backgroundColor: "#D5E0C7"}}></label>
                </div>
                <div>
                    <input type="radio" name="color" id="white"></input>
                    <label htmlFor="white" style={{backgroundColor: "#FFFFFF"}}></label>
                </div>
            </div>
            <div className="size">
                <select>
                    <option value="XS">extra small</option>
                    <option value="S">small</option>
                    <option value="M" selected>medium</option>
                    <option value="L">large</option>
                    <option value="XL">extra large</option>
                </select>
            </div>
            <div className="button">Add To Cart</div>
        </div>
    </div>
}
