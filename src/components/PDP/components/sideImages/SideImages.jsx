import React, { Component } from "react";
import "./sideImages.css";

class SideImages extends Component {
    render() {
        return (
            <div className="side__images__container">
                <img className="side__image" src="./Image.png" alt="Product" />
                <img className="side__image" src="./Image.png" alt="Product" />
                <img className="side__image" src="./Image.png" alt="Product" />
            </div>
        );
    }
}

export default SideImages;
