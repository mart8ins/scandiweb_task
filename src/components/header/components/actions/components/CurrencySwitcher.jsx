import React, { Component } from "react";
import "./currencySwitcher.css";
import { AppContext } from "../../../../context";

class CurrencySwitcher extends Component {
    render() {
        const { currencies, changeActiveCurrency } = this.props;
        return (
            <div className="currencies__group">
                {currencies.map((cur) => {
                    return (
                        <div key={cur.label} className="currencies__group__currency" onClick={() => changeActiveCurrency(cur)}>
                            <div className="currency__group">
                                <div className="currency__elements">{`${cur.symbol}`}</div>
                                <div className="currency__elements">{` ${cur.label}`}</div>
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default CurrencySwitcher;
