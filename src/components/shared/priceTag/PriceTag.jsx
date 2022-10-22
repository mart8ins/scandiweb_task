import React, { Component } from "react";
import "./priceTag.css";

class PriceTag extends Component {
    render() {
        const { showTitle } = this.props;
        return (
            <div className="price__tag">
                {showTitle && <div className="price__title">Price:</div>}
                <div className="price__amount">$50.00</div>
            </div>
        );
    }
}

export default PriceTag;
