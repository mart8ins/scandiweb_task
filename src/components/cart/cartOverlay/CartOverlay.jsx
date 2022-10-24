import React, { Component } from "react";
import "./cartOverlay.css";
import CartItemOverlay from "./cartItemOverlay/CartItemOverlay";
import GreenProceedBtn from "../../shared/greenProceedBtn/GreenProceedBtn";

class CartOverlay extends Component {
    render() {
        const currency = "$";
        const cartCount = 5;
        const cartTotal = "200.00";
        const cart = [
            { id: 1, name: "item1", sizes: ["XS", "S"], colors: { grey: "#D3D2D5", green: "#0F6450" } },
            { id: 2, name: "item2", sizes: ["XS", "S", "M", "L"], colors: { grey: "#D3D2D5", green: "#0F6450", black: "#2B2B2B" } },
        ];
        return (
            <div className="cart__overlay">
                <div className="cart__preview__container">
                    <div className="cart__preview">
                        <div className="preview__title">
                            <span>May Bag,</span> {cartCount} items
                        </div>
                        {cart.map((cartItem, i) => {
                            return <CartItemOverlay cartItem={cartItem} />;
                        })}
                        <div className="cart__overlay__totals__container">
                            <div className="cart__overlay__totals__title">Total</div>
                            <div className="cart__overlay__totals__value">{currency + cartTotal}</div>
                        </div>
                        <div className="cart__overlay__buttons__container">
                            <button className="cart__overlay__button">View bag</button>
                            <GreenProceedBtn styles={{ width: "140px", height: "43px", fontSize: "14px" }} text="Check Out" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CartOverlay;
