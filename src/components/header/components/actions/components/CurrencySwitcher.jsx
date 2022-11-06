import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import "./currencySwitcher.css";

class CurrencySwitcher extends Component {
    render() {
        const { currencies, changeActiveCurrency } = this.props;
        return (
            <div className="currencies__group">
                {currencies.map((cur) => {
                    return (
                        <div key={uuidv4()} className="currencies__group__currency" onClick={() => changeActiveCurrency(cur)}>
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
