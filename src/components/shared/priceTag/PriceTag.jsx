import React, { Component } from "react";
import "./priceTag.css";
import { v4 as uuidv4 } from "uuid";
import { connect } from "react-redux";

class PriceTag extends Component {
    render() {
        const { active, showTitle, forType, prices } = this.props;
        return (
            <div className={`price__tag ${forType && "price__tag__" + forType}`}>
                {showTitle && <div className="price__title">Price:</div>}
                {prices &&
                    prices.map((price) => {
                        if (price.currency.symbol === active.symbol) {
                            return (
                                <div key={uuidv4()} className={`price__amount ${forType && "price__amount__" + forType}`}>
                                    {price.currency.symbol}
                                    {price.amount}
                                </div>
                            );
                        }
                    })}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return state.currencyReducer;
};
export default connect(mapStateToProps)(PriceTag);
