import React, { Component } from "react";
import "./productTitle.css";

class ProductTitle extends Component {
    render() {
        return (
            <div className="product__title">
                <p className="brand__name">Apollo</p>
                <p className="product__name">Running short</p>
            </div>
        );
    }
}

export default ProductTitle;
