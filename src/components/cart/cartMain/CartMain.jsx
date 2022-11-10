import React, { Component } from "react";
import "./cartMain.css";
import { connect } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import GreenProceedBtn from "../../shared/greenProceedBtn/GreenProceedBtn";
import CartItem from "./cartItem/CartItem";
import CartTotals from "../../shared/cartTotals/CartTotals";

class CartMain extends Component {
    render() {
        const { cart } = this.props.cartReducer;

        return (
            <div className="cart__container">
                {cart.length > 0 ? (
                    <>
                        <div className="cart__title">Cart</div>
                        <div className="cart__item__line__top"></div>
                        <div className="cart__items__container">
                            {cart &&
                                cart.map((cartItem) => {
                                    return (
                                        <div key={uuidv4()}>
                                            <CartItem cartItem={cartItem} />
                                            <div className="cart__item__line"></div>
                                        </div>
                                    );
                                })}
                            <CartTotals />
                            <div className="order__btn">
                                <GreenProceedBtn styles={{ width: "279px", height: "43px", fontSize: "14px" }} text={"Order"} />
                            </div>
                        </div>
                    </>
                ) : (
                    <div className="empty__cart">Your cart is empty</div>
                )}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        cartReducer: state.cartReducer,
    };
};
export default connect(mapStateToProps)(CartMain);
