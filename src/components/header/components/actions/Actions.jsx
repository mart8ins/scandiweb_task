import React, { Component } from "react";
import "./actions.css";
import vector_down from "../../../../icons/Vector_down.svg";
import vector_up from "../../../../icons/Vector_up.svg";
import empty_chart from "../../../../icons/Empty Cart.svg";
import CurrencySwitcher from "./components/CurrencySwitcher";

class Actions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showCurrencyOptions: false,
            activeCurrency: { symbol: "$", name: "USD" },
        };
    }

    render() {
        const changeActiveCurrency = (activeCurrency) => {
            this.setState({
                showCurrencyOptions: false,
                activeCurrency,
            });
        };
        return (
            <>
                <div className="actions">
                    <div className="spacer"></div>
                    <div className="spacer"></div>
                    <div
                        className="currency"
                        onClick={() => {
                            this.setState({
                                ...this.state,
                                showCurrencyOptions: !this.state.showCurrencyOptions,
                            });
                        }}>
                        <div className="currency__symbol">
                            <div className="symbol">{this.state.activeCurrency.symbol}</div>
                        </div>
                        {!this.state.showCurrencyOptions && <img className="vector" src={vector_down} alt="Currency chooser" />}
                        {this.state.showCurrencyOptions && <img className="vector" src={vector_up} alt="Currency chooser" />}
                    </div>
                    <img className="chart__icon" src={empty_chart} alt="Empty chart" />
                </div>
                {this.state.showCurrencyOptions && <CurrencySwitcher changeActiveCurrency={changeActiveCurrency} />}
            </>
        );
    }
}

export default Actions;
