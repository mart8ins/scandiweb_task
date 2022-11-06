import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import { AppContext } from "../../context";
import GreenProceedBtn from "../../shared/greenProceedBtn/GreenProceedBtn";
import CartItem from "./cartItem/CartItem";
import "./cartMain.css";

class CartMain extends Component {
    state = {
        items: this.context.cart.items,
    };

    componentDidMount() {
        this.setState({
            items: this.context.cart.items,
        });
    }

    render() {
        const {
            cart: { items },
            currencies: { active },
        } = this.context;

        return (
            <div className="cart__container">
                <div className="cart__title">Cart</div>
                <div className="cart__item__line__top"></div>
                <div className="cart__items__container">
                    {this.state.items &&
                        this.state.items.map((cartItem, i) => {
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
            </div>
        );
    }
}
CartMain.contextType = AppContext;
export default CartMain;
