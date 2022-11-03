import React, { Component } from "react";
import ProductTitle from "../../../shared/productTitle/ProductTitle";
import { productQuery } from "../../../queries";
import "./cartItem.css";
import AttributePicker from "../../../shared/attributePicker/AttributePicker";
import PriceTag from "../../../shared/priceTag/PriceTag";
import vec_hor from "../../../../icons/Vector-hor.svg";
import vec_ver from "../../../../icons/Vector-ver.svg";

import arrow_left from "../../../../icons/Vector-arrow-left.svg";
import arrow_right from "../../../../icons/Vector-arrow-right.svg";
import { AppContext } from "../../../context";

export class CartItem extends Component {
    state = {
        product: {},
    };

    componentDidMount() {
        this.getDetails();
    }

    componentDidUpdate(previousProps) {
        if (this.props.cartItem.cartItemId != previousProps.cartItem.cartItemId) {
            this.getDetails();
        }
    }

    async getDetails() {
        const { productId } = this.props.cartItem;
        const { data } = await productQuery(productId);
        this.setState({
            product: data.product,
        });
    }

    render() {
        const { changeQuantityForItemInCart } = this.context.cart;
        const { quantity, selectedAttributes, cartItemId } = this.props.cartItem;
        const { brand, attributes, gallery, name, prices } = this.state.product;
        return (
            <div className="cart__item__container">
                <div className="cart__item__details">
                    <div className="item__options">
                        <div className="product__title__container">
                            <ProductTitle name={name} brand={brand} />
                        </div>
                        <div className="product__price__tag__container">
                            <PriceTag showTitle={false} forType="cart" prices={prices} />
                        </div>
                        <AttributePicker
                            attributes={attributes}
                            selectedAttributes={selectedAttributes}
                            forType={"cart"}
                            cartItemId={cartItemId}
                        />
                    </div>
                </div>
                <div className="image__quantity">
                    <div className="change__quantity__container">
                        <div
                            className="increase__item"
                            onClick={() => {
                                changeQuantityForItemInCart(cartItemId, "increase");
                            }}>
                            <img src={vec_hor} alt="Increase quantity button" />
                            <img className="vertical__line" src={vec_ver} alt="Increase quantity button" />
                        </div>
                        <div className="item__quantity">{quantity}</div>
                        <div
                            className="decrease__item"
                            onClick={() => {
                                changeQuantityForItemInCart(cartItemId, "decrease");
                            }}>
                            <img src={vec_hor} alt="Decrease quantity button" />
                        </div>
                    </div>
                    <div className="item__image__container">
                        <img src={"./Image.png"} />
                        <div className="change__image">
                            <div className="image__to__left">
                                <div className="vector__container">
                                    <img className="arrow" src={arrow_left} alt="Change image" />
                                </div>
                            </div>
                            <div className="image__to__right">
                                <div className="vector__container">
                                    <img className="arrow" src={arrow_right} alt="Change image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
CartItem.contextType = AppContext;
export default CartItem;
