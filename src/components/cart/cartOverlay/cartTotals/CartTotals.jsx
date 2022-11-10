import React, { Component } from "react";
import { connect } from "react-redux";
import "./cartTotals.css";

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
        const { totalProductCount } = this.props.cartReducer;
        const { active } = this.props.currencyReducer;

        return (
            <div className="cart__totals__container">
                <div className="totals__heading">
                    <div className="totals__title">Tax {this.state.taxPercentage}%:</div>
                    <div className="totals__value">
                        {active.symbol}
                        {this.state.taxAmount}
                    </div>
                </div>
                <div className="totals__heading">
                    <div className="totals__title">Quantity:</div>
                    <div className="totals__value">{totalProductCount}</div>
                </div>
                <div className="totals__heading">
                    <div style={{ fontWeight: 500 }} className="totals__title">
                        Total:
                    </div>
                    <div className="totals__value">
                        {symbol}
                        {this.state.cartTotalAmount}
                    </div>
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
export default connect(mapStateToProps)(CartTotals);
