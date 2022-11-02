import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./cartOverlay.css";
import CartItemOverlay from "./cartItemOverlay/CartItemOverlay";
import GreenProceedBtn from "../../shared/greenProceedBtn/GreenProceedBtn";
import { AppContext } from "../../context";

class CartOverlay extends Component {
    render() {
        const {
            cart: { items, toogleCartView },
            currencies: { active },
        } = this.context;

        return (
            <div className="cart__overlay">
                <div className="cart__preview__container">
                    {items && items.length ? (
                        <div className="cart__preview">
                            <div className="preview__title">
                                <span>My Bag,</span> {items.length} items
                            </div>
                            {items &&
                                items.map((cartItem, i) => {
                                    return <CartItemOverlay key={"cartItemOverlay-" + i} cartItem={cartItem} />;
                                })}
                            <div className="cart__overlay__totals__container">
                                <div className="cart__overlay__totals__title">Total</div>
                                <div className="cart__overlay__totals__value">{active.symbol + 9999}</div>
                            </div>
                            <div className="cart__overlay__buttons__container">
                                <Link to="/cart" className="cart__overlay__button" onClick={toogleCartView}>
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
CartOverlay.contextType = AppContext;
export default CartOverlay;
