import React, { Component } from "react";
import "./priceTag.css";
import { AppContext } from "../../context";

class PriceTag extends Component {
    render() {
        const { showTitle, forType, prices } = this.props;
        const { active } = this.context.currencies;
        return (
            <div className={`price__tag ${forType && "price__tag__" + forType}`}>
                {showTitle && <div className="price__title">Price:</div>}
                {prices &&
                    prices.map((price) => {
                        if (price.currency.symbol === active.symbol) {
                            return (
                                <div key={active.label} className={`price__amount ${forType && "price__amount__" + forType}`}>
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
PriceTag.contextType = AppContext;
export default PriceTag;
