import React, { Component } from "react";
import { connect } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
import "./cartOverlay.css";
import CartItemOverlay from "./cartItemOverlay/CartItemOverlay";
import GreenProceedBtn from "../../shared/greenProceedBtn/GreenProceedBtn";
import { cartAction } from "../../../redux/actions/cart";

class CartOverlay extends Component {
    render() {
        const { cart, showCartOverlay } = this.props.cartReducer;
        const { active } = this.props.currencyReducer;
        const { dispatch } = this.props;

        return (
            <div className="cart__overlay">
                <div className="cart__preview__container">
                    {cart && cart.length ? (
                        <div className="cart__preview">
                            <div className="preview__title">
                                <span>My Bag,</span> {cart.length} items
                            </div>
                            {cart &&
                                cart.map((cartItem, i) => {
                                    if (cartItem.quantity > 0) {
                                        return <CartItemOverlay key={uuidv4()} cartItem={cartItem} />;
                                    }
                                })}
                            <div className="cart__overlay__totals__container">
                                <div className="cart__overlay__totals__title">Total</div>
                                <div className="cart__overlay__totals__value">{active.symbol + 9999}</div>
                            </div>
                            <div className="cart__overlay__buttons__container">
                                <Link
                                    to="/cart"
                                    className="cart__overlay__button"
                                    onClick={() => {
                                        dispatch({
                                            type: cartAction.TOOGLE_CART_VIEW,
                                            payload: !showCartOverlay,
                                        });
                                    }}>
                                    View bag
                                </Link>
                                <GreenProceedBtn styles={{ width: "140px", height: "43px", fontSize: "14px" }} text="Check Out" />
                            </div>
                        </div>
                    ) : (
                        <div className="empty__cart">Cart is empty</div>
                    )}
                </div>
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
export default connect(mapStateToProps)(CartOverlay);
