import React, { Component } from "react";
import "./productCard.css";
import add_to_basket from "../../../../icons/CircleIcon.svg";

class ProductCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hover: false,
        };
    }

    render() {
        return (
            <div
                className="product__card"
                style={{ pointerEvents: this.props.stock < 1 && "none" }}
                onMouseEnter={() => {
                    this.setState({
                        hover: true,
                    });
                }}
                onMouseLeave={() => {
                    this.setState({
                        hover: false,
                    });
                }}>
                <div className="product__image__container">
                    {this.props.stock < 1 && (
                        <div className="out__of__stock__overlay">
                            <p className="out__of__stock__title">Out of stock</p>
                        </div>
                    )}

                    <img className="product__image" src="./Image.png" alt="Product image" />
                    <div className="add__to__basket_icon" style={{ visibility: this.state.hover && "visible" }}>
                        <img src={add_to_basket} alt="Add to basket button" />
                    </div>
                </div>

                <div className="space__base"></div>

                <div className="content">
                    <div className="title">{this.props.title}</div>
                    <div className="price">${this.props.price}</div>
                </div>
            </div>
        );
    }
}

export default ProductCard;
