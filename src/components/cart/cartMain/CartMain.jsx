import React, { Component } from "react";
import { connect } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import GreenProceedBtn from "../../shared/greenProceedBtn/GreenProceedBtn";
import CartItem from "./cartItem/CartItem";
import "./cartMain.css";

class CartMain extends Component {
    render() {
        const { cart } = this.props.cartReducer;
        const { active } = this.props.currencyReducer;

        return (
            <div className="cart__container">
                {cart.length > 0 ? (
                    <>
                        <div className="cart__title">Cart</div>
                        <div className="cart__item__line__top"></div>
                        <div className="cart__items__container">
                            {cart &&
                                cart.map((cartItem, i) => {
                                    return (
                                        <div key={uuidv4()}>
                                            <CartItem cartItem={cartItem} />
                                            <div className="cart__item__line"></div>
                                        </div>
                                    );
                                })}
                            <div className="cart__totals__container">
                                <div className="totals__heading">
                                    <div className="totals__title">Tax 21%:</div>
                                    <div className="totals__value">{active.symbol}42.00</div>
                                </div>
                                <div className="totals__heading">
                                    <div className="totals__title">Quantity:</div>
                                    <div className="totals__value">3</div>
                                </div>
                                <div className="totals__heading">
                                    <div style={{ fontWeight: 500 }} className="totals__title">
                                        Total:
                                    </div>
                                    <div className="totals__value">{active.symbol}200.00</div>
                                </div>
                            </div>

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
        currencyReducer: state.currencyReducer,
        cartReducer: state.cartReducer,
    };
};
export default connect(mapStateToProps)(CartMain);
