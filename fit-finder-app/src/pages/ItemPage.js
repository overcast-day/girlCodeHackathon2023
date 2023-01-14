import React, { useState } from 'react'

import Clothing from "../assets/img/example-clothing.webp";
import ClothingBlack from "../assets/img/example-clothing-black.webp";
import ClothingBrown from "../assets/img/example-clothing-brown.webp";
import ClothingGreen from "../assets/img/example-clothing-green.webp";

export function ItemPage() {
        
    const [selectedColor, setSelectedColor] = useState("white");

    const handleChange = (e) => {
        setSelectedColor(e.target.id);
    };

    function getColorURL() {
        switch (selectedColor) {
            case "black":
                return ClothingBlack;
            case "white":
                return Clothing;
            case "green":
                return ClothingGreen;
            case "brown":
                return ClothingBrown;
            default:
                return Clothing;
        }
    }

    return <div className="ItemPage">
        <div className="body">
            <input type="checkbox" id="heart" className="heart"/>
            <label htmlFor="heart"></label>
            <div className="photo" style={{backgroundImage: `url(${getColorURL()})`}}></div>
            <div className="title">Elevate Bustier</div>
            <div className="sub">
                <div className="creator">ten by babaton</div>
                <div className="price">$110.00</div>
            </div>
            <div className="text">This is a cropped, bustier-style top with boning for shaping and a front peak hem. It's made from a high-shine, stretchy satin fabric.</div>
            <div className="colors">
                <div>
                    <input type="radio" name="color" id="black" onChange={handleChange}></input>
                    <label htmlFor="black" style={{backgroundColor: "#0A0A18"}}></label>
                </div>
                <div>
                    <input type="radio" name="color" id="brown" onChange={handleChange}></input>
                    <label htmlFor="brown" style={{backgroundColor: "#AA8164"}}></label>
                </div>
                <div>
                    <input type="radio" name="color" id="green" onChange={handleChange}></input>
                    <label htmlFor="green" style={{backgroundColor: "#D5E0C7"}}></label>
                </div>
                <div>
                    <input type="radio" name="color" id="white" onChange={handleChange}></input>
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
