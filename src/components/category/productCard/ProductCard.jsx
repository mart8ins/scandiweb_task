import React, { Component } from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import "./productCard.css";
import add_to_basket from "../../../icons/CircleIcon.svg";
import { AppContext } from "../../context";

class ProductCard extends Component {
    state = {
        hover: false,
        hoverOnIcon: false,
    };

    render() {
        const { addProductToCart } = this.context.cart;
        const { price, brand, name, stock, image, id, category, attributes } = this.props;

        /* ADD PRODUCT TO CART WITH QUANTITY = 1, ADDING MULTIPLE CREATES NEW PRODUCT IN CART AND NOT CHANGE
         QUANTITY TO EXISITING BECAUSE CLIENT COULD WANT TO ORDER SAME PRODUCT WITH DIFFERENT ATTRIBUTES */
        const addToCart = () => {
            addProductToCart({ cartItemId: uuidv4(), productId: id, quantity: 1, selectedAttributes: [] });
        };

        return (
            <Link
                to={this.state.hoverOnIcon ? undefined : `/${category}/${id}`}
                className="product__card"
                style={{ pointerEvents: !stock && "none" }}
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
                    {!stock && (
                        <div className="out__of__stock__overlay">
                            <p className="out__of__stock__title">Out of stock</p>
                        </div>
                    )}

                    <img className="product__image" src={image} alt="Product image" />
                    <div
                        onClick={this.state.hoverOnIcon ? addToCart : undefined}
                        className="add__to__basket_icon__container"
                        style={{ visibility: this.state.hover ? "visible" : "hidden" }}>
                        <img
                            onMouseEnter={() => {
                                this.setState({
                                    hoverOnIcon: true,
                                });
                            }}
                            onMouseLeave={() => {
                                this.setState({
                                    hoverOnIcon: false,
                                });
                            }}
                            src={add_to_basket}
                            alt="Add to basket button"
                            className="add__to__basket_icon"
                        />
                    </div>
                </div>

                <div className="space__base"></div>

                <div className="content">
                    <div className="title">
                        {brand} {name}
                    </div>
                    <div className="price">
                        {price && price.currency.symbol}
                        {price && price.amount}
                    </div>
                </div>
            </Link>
        );
    }
}
ProductCard.contextType = AppContext;
export default ProductCard;
