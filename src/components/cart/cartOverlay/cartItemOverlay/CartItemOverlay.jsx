import React, { Component } from "react";
import "./cartItemOverlay.css";
import ProductTitle from "../../../shared/productTitle/ProductTitle";
import PriceTag from "../../../shared/priceTag/PriceTag";

import vec_hor_sm from "../../../../icons/Vector-hor-sm.svg";
import vec_ver_sm from "../../../../icons/Vector-ver-sm.svg";
import SizePicker from "../../../shared/sizePicker/SizePicker";
import ColorPicker from "../../../shared/colorPicker/ColorPicker";

class CartItemOverlay extends Component {
    render() {
        const {
            cartItem: { sizes, colors },
        } = this.props;

        return (
            <div className="cart__item__container__ov">
                <div className="cart__item__details__ov">
                    <div className="item__options__ov">
                        <div className="product__title__price__container__ov">
                            <ProductTitle forType="overlay" />
                            <PriceTag showTitle={false} forType="overlay" />
                        </div>
                        <SizePicker sizes={sizes} forType="overlay" />
                        <ColorPicker colors={colors} forType="overlay" />
                    </div>
                    <div className="change__quantity__container__ov">
                        <div className="increase__item__ov">
                            <img src={vec_hor_sm} alt="Increase quantity button" />
                            <img className="vertical__line__ov" src={vec_ver_sm} alt="Increase quantity button" />
                        </div>
                        <div className="item__quantity__ov">2</div>
                        <div className="decrease__item__ov">
                            <img src={vec_hor_sm} alt="Decrease quantity button" />
                        </div>
                    </div>
                </div>
                <div className="item__image__container__ov">
                    <img src={"./Image.png"} />
                </div>
            </div>
        );
    }
}

export default CartItemOverlay;
