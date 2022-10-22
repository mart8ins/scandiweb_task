import React, { Component } from "react";
import GreenProceedBtn from "../../shared/greenProceedBtn/GreenProceedBtn";
import CartItem from "../shared/cartItem/CartItem";
import "./cartMain.css";

class CartMain extends Component {
    render() {
        const cart = [
            { id: 1, name: "item1", sizes: ["XS", "S"], colors: { grey: "#D3D2D5", green: "#0F6450" } },
            { id: 2, name: "item2", sizes: ["XS", "S", "M", "L"], colors: { grey: "#D3D2D5", green: "#0F6450", black: "#2B2B2B" } },
        ];
        return (
            <div className="cart__container">
                <div className="cart__title">Cart</div>
                <div className="cart__item__line__top"></div>
                <div className="cart__items__container">
                    {cart.map((cartItem, i) => {
                        return (
                            <>
                                <CartItem key={i} cartItem={cartItem} />
                                <div className="cart__item__line"></div>
                            </>
                        );
                    })}
                    <div className="cart__totals__container">
                        <div className="totals__heading">
                            <div className="totals__title">Tax 21%:</div>
                            <div className="totals__value">$42.00</div>
                        </div>
                        <div className="totals__heading">
                            <div className="totals__title">Quantity:</div>
                            <div className="totals__value">3</div>
                        </div>
                        <div className="totals__heading">
                            <div style={{ fontWeight: 500 }} className="totals__title">
                                Total:
                            </div>
                            <div className="totals__value">$200.00</div>
                        </div>
                    </div>

                    <div className="order__btn">
                        <GreenProceedBtn styles={{ width: "279px", height: "43px", fontSize: "14px" }} text={"Order"} />
                    </div>
                </div>
            </div>
        );
    }
}

export default CartMain;
