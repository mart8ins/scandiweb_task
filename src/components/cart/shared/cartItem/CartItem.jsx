import React, { Component } from "react";
import ProductTitle from "../../../shared/productTitle/ProductTitle";
import SizePicker from "../../../shared/sizePicker/SizePicker";
import ColorPicker from "../../../shared/colorPicker/ColorPicker";
import "./cartItem.css";
import PriceTag from "../../../shared/priceTag/PriceTag";

export class CartItem extends Component {
    render() {
        const {
            cartItem: { sizes, colors },
        } = this.props;

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
                        <div className="product__size__picker__container">
                            <SizePicker sizes={sizes} />
                        </div>
                        <div className="product__color__picker__container">
                            <ColorPicker colors={colors} />
                        </div>
                    </div>
                    <div>Vertikālais skaita mainitaajs</div>
                </div>
                <div>
                    <div>Pati bilde</div>
                    <div>Bultas bildes mainišanai</div>
                </div>
            </div>
        );
    }
}

export default CartItem;
