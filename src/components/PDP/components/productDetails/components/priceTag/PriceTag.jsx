import React, { Component } from "react";
import "./priceTag.css";

class PriceTag extends Component {
    render() {
        return (
            <div className="price__tag">
                <div className="price__title">Price:</div>
                <div className="price__amount">$50.00</div>
            </div>
        );
    }
}

export default PriceTag;
