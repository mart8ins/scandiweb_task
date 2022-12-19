import React, { Component } from "react";
import "./cartTotals.css";
import { connect } from "react-redux";

class CartTotals extends Component {
    state = {
        cartTotalAmount: 0,
        taxPercentage: 21,
        taxAmount: 0,
    };
    componentDidMount() {
        this.calculate();
    }

    componentDidUpdate(prevProps) {
        if (prevProps != this.props) {
            this.calculate();
        }
    }

    calculate = () => {
        const {
            active: { symbol },
        } = this.props.currencyReducer;
        const { cart } = this.props.cartReducer;
        let count = 0;
        cart.forEach((item) => {
            item.allPrices.forEach((price) => {
                if (price.currency.symbol == symbol) {
                    count += item.quantity * price.amount;
                }
            });
        });
        this.setState({
            cartTotalAmount: count.toFixed(2),
            taxAmount: ((count / 100) * this.state.taxPercentage).toFixed(2),
        });
    };

    render() {
        const {
            active: { symbol },
        } = this.props.currencyReducer;
        const { totalProductCount, showCartOverlay } = this.props.cartReducer;

        return (
            <>
                {!showCartOverlay ? (
                    <div className="cart__totals__container">
                        <div className="totals__heading">
                            <div className="totals__title">Tax {this.state.taxPercentage}%:</div>
                            <div className="totals__value">
                                {symbol}
                                {this.state.taxAmount}
                            </div>
                        </div>
                        <div className="totals__heading">
                            <div className="totals__title">Quantity:</div>
                            <div className="totals__value">{totalProductCount}</div>
                        </div>
                        <div className="totals__heading">
                            <div className="totals__title fontWeight500">Total:</div>
                            <div className="totals__value">
                                {symbol}
                                {this.state.cartTotalAmount}
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="totals__heading__overlay">
                        <div className="totals__title__overlay fontWeight500">Total:</div>
                        <div className="totals__value__overlay">
                            {symbol}
                            {this.state.cartTotalAmount}
                        </div>
                    </div>
                )}
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
export default connect(mapStateToProps)(CartTotals);
