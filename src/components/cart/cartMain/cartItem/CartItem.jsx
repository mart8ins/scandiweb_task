import React, { Component } from "react";
import ProductTitle from "../../../shared/productTitle/ProductTitle";
import "./cartItem.css";
import AttributePicker from "../../../shared/attributePicker/AttributePicker";
import PriceTag from "../../../shared/priceTag/PriceTag";
import vec_hor from "../../../../icons/Vector-hor.svg";
import vec_ver from "../../../../icons/Vector-ver.svg";

import arrow_left from "../../../../icons/Vector-arrow-left.svg";
import arrow_right from "../../../../icons/Vector-arrow-right.svg";

export class CartItem extends Component {
    render() {
        const { attributes } = this.props;

        return (
            <div className="cart__item__container">
                <div className="cart__item__details">
                    <div className="item__options">
                        <div className="product__title__container">
                            <ProductTitle />
                        </div>
                        <div className="product__price__tag__container">
                            <PriceTag showTitle={false} />
                        </div>
                        <AttributePicker attributes={attributes} forType={null} />
                    </div>
                    <div className="change__quantity__container">
                        <div className="increase__item">
                            <img src={vec_hor} alt="Increase quantity button" />
                            <img className="vertical__line" src={vec_ver} alt="Increase quantity button" />
                        </div>
                        <div className="item__quantity">2</div>
                        <div className="decrease__item">
                            <img src={vec_hor} alt="Decrease quantity button" />
                        </div>
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
        );
    }
}

export default CartItem;
