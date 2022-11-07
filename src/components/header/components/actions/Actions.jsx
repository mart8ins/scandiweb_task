import React, { Component } from "react";
import { connect } from "react-redux";
import { cartAction } from "../../../../redux/actions/cart";
import "./actions.css";
import { currencyAction } from "../../../../redux/actions/currency";
import vector_down from "../../../../icons/Vector_down.svg";
import vector_up from "../../../../icons/Vector_up.svg";
import empty_chart from "../../../../icons/Empty Cart.svg";
import CurrencySwitcher from "./components/CurrencySwitcher";

class Actions extends Component {
    state = {
        showCurrencyOptions: false,
    };

    render() {
        const { dispatch } = this.props;
        const { data, active } = this.props.currencyReducer;
        const { cart, showCartOverlay } = this.props.cartReducer;

        const changeActiveCurrency = (activeCurrency) => {
            dispatch({
                type: currencyAction.SET__ACTIVE__CURRENCY,
                payload: activeCurrency,
            });
            this.setState({
                showCurrencyOptions: false,
            });
        };

        const toogleCartView = () => {
            const show = window.location.pathname !== "/cart" ? true : false;
            if (show) {
                dispatch({
                    type: cartAction.TOOGLE_CART_VIEW,
                    payload: !showCartOverlay,
                });
            }
        };

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
                            <div className="symbol">{active.symbol}</div>
                        </div>
                        {!this.state.showCurrencyOptions && <img className="vector" src={vector_down} alt="Currency chooser" />}
                        {this.state.showCurrencyOptions && <img className="vector" src={vector_up} alt="Currency chooser" />}
                    </div>
                    <div className="chart__icon" onClick={toogleCartView}>
                        <img src={empty_chart} alt="Empty chart" />
                        {cart.length > 0 && (
                            <div className="items__in__cart">
                                <div className="cart__number">{cart.length}</div>
                            </div>
                        )}
                    </div>
                </div>
                {this.state.showCurrencyOptions && <CurrencySwitcher currencies={data} changeActiveCurrency={changeActiveCurrency} />}
            </>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        currencyReducer: state.currencyReducer,
        cartReducer: state.cartReducer,
    };
};
export default connect(mapStateToProps)(Actions);
