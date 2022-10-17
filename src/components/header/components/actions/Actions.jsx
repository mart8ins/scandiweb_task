import React, { Component } from "react";
import "./actions.css";
import vector_down from "../../../../icons/Vector_down.svg";
import vector_up from "../../../../icons/Vector_up.svg";
import empty_chart from "../../../../icons/Empty Cart.svg";

class Actions extends Component {
    render() {
        return (
            <div className="actions">
                <div className="spacer"></div>
                <div className="spacer"></div>
                <div className="currency">
                    <div className="currency__symbol">
                        <div className="symbol">$</div>
                    </div>
                    <img className="vector" src={vector_down} alt="Currency chooser" />
                    {/* <img className="vector" src={vector_up} alt="Currency chooser" /> */}
                </div>
                <img className="chart__icon" src={empty_chart} alt="Empty chart" />
            </div>
        );
    }
}

export default Actions;
