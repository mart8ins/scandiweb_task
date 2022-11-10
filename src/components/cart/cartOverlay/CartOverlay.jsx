import React, { Component } from "react";
import "./cartOverlay.css";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { cartAction } from "../../../redux/actions/cart";

import CartItemOverlay from "./cartItemOverlay/CartItemOverlay";
import GreenProceedBtn from "../../shared/greenProceedBtn/GreenProceedBtn";
import CartTotals from "../../shared/cartTotals/CartTotals";

class CartOverlay extends Component {
    render() {
        const { cart, showCartOverlay, totalProductCount } = this.props.cartReducer;
        const { dispatch } = this.props;

        const toogleCartOverlay = () => {
            dispatch({
                type: cartAction.TOOGLE_CART_VIEW,
                payload: !showCartOverlay,
            });
        };

        return (
            <>
                <div className="cart__overlay" onClick={toogleCartOverlay}></div>
                <div className="cart__preview__container">
                    {cart && cart.length ? (
                        <div className="cart__preview">
                            <div className="preview__title">
                                <span>My Bag,</span> {totalProductCount} items
                            </div>
                            <div
                                className={`cart__items ${cart.length > 3 && "custom__scrollbar"}`}
                                style={cart.length < 4 ? { overflowX: "hidden", overflowY: "hidden" } : {}}>
                                {cart &&
                                    cart.map((cartItem) => {
                                        if (cartItem.quantity > 0) {
                                            return <CartItemOverlay key={uuidv4()} cartItem={cartItem} />;
                                        }
                                    })}
                            </div>
                            <div className="cart__overlay__totals__container">
                                <CartTotals />
                            </div>

                            <div className="cart__overlay__buttons__container">
                                <Link to="/cart" className="cart__overlay__button" onClick={toogleCartOverlay}>
                                    View bag
                                </Link>
                                <GreenProceedBtn styles={{ width: "140px", height: "43px", fontSize: "14px" }} text="Check Out" />
                            </div>
                        </div>
                    ) : (
                        <div className="empty__cart">Cart is empty</div>
                    )}
                </div>
            </>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        cartReducer: state.cartReducer,
    };
};
export default connect(mapStateToProps)(CartOverlay);
