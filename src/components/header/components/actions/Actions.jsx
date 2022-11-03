import React, { Component } from "react";
import "./actions.css";
import vector_down from "../../../../icons/Vector_down.svg";
import vector_up from "../../../../icons/Vector_up.svg";
import empty_chart from "../../../../icons/Empty Cart.svg";
import CurrencySwitcher from "./components/CurrencySwitcher";
import { AppContext } from "../../../context";

class Actions extends Component {
    state = {
        showCurrencyOptions: false,
    };

    render() {
        const changeActiveCurrency = (activeCurrency) => {
            this.context.setActiveCurrency(activeCurrency);
            this.setState({
                showCurrencyOptions: false,
            });
        };
        const { data } = this.context.currencies;
        const { showCartOverlay } = this.context.cart;
        const { items, toogleCartView } = this.context.cart;

        return (
            <>
                <div className="actions">
                    <div className="spacer"></div>
                    <div className="spacer"></div>
                    <div
                        className="currency"
                        onClick={() => {
                            if (!showCartOverlay) {
                                this.setState({
                                    ...this.state,
                                    showCurrencyOptions: !this.state.showCurrencyOptions,
                                });
                            }
                        }}>
                        <div className="currency__symbol">
                            <div className="symbol">{this.context.currencies.active.symbol}</div>
                        </div>
                        {!this.state.showCurrencyOptions && <img className="vector" src={vector_down} alt="Currency chooser" />}
                        {this.state.showCurrencyOptions && <img className="vector" src={vector_up} alt="Currency chooser" />}
                    </div>
                    <div className="chart__icon" onClick={window.location.pathname != "/cart" ? toogleCartView : null}>
                        <img src={empty_chart} alt="Empty chart" />
                        {items.length > 0 && (
                            <div className="items__in__cart">
                                <div className="cart__number">{items.length}</div>
                            </div>
                        )}
                    </div>
                </div>
                {this.state.showCurrencyOptions && <CurrencySwitcher currencies={data} changeActiveCurrency={changeActiveCurrency} />}
            </>
        );
    }
}
Actions.contextType = AppContext;
export default Actions;
