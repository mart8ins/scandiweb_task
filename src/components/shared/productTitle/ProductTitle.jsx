import React, { Component } from "react";
import "./productTitle.css";

class ProductTitle extends Component {
    render() {
        const { forType, name, brand } = this.props;

        return (
            <div className={`product__title ${forType && "product__title__" + forType}`}>
                <p className={`brand__name ${forType && "brand__name__" + forType}`}>{brand}</p>
                <p className={`product__name ${forType && "product__name__" + forType}`}>{name}</p>
            </div>
        );
    }
}

export default ProductTitle;
