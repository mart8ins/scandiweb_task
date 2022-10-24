import React, { Component } from "react";
import "./priceTag.css";

class PriceTag extends Component {
    render() {
        const { showTitle, forType } = this.props;
        return (
            <div className={`price__tag ${forType && "price__tag__" + forType}`}>
                {showTitle && <div className="price__title">Price:</div>}
                <div className={`price__amount ${forType && "price__amount__" + forType}`}>$50.00</div>
            </div>
        );
    }
}

export default PriceTag;
