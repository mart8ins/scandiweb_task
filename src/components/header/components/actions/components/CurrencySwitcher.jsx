import React, { Component } from "react";
import "./currencySwitcher.css";

class CurrencySwitcher extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currencies: [
                { symbol: "£", name: "GBP" },
                { symbol: "$", name: "USD" },
                { symbol: "¥", name: "JPY" },
                { symbol: "A$", name: "AUD" },
                { symbol: "₽", name: "RUB" },
            ],
        };
    }

    render() {
        return (
            <div className="currencies__group">
                {this.state.currencies.map((cur, i) => {
                    return (
                        <div key={i} className="currencies__group__currency" onClick={() => this.props.changeActiveCurrency(cur)}>
                            <div className="currency__group">
                                <div className="currency__elements">{`${cur.symbol}`}</div>
                                <div className="currency__elements">{` ${cur.name}`}</div>
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default CurrencySwitcher;
