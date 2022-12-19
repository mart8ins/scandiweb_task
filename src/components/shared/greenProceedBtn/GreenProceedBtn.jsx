import React, { Component } from "react";
import "./greenProceedBtn.css";

class GreenProceedBtn extends Component {
    render() {
        const { text, styles, onClick, disabled } = this.props;
        return (
            <button onClick={onClick} style={styles} className={`proceed__btn ${disabled && "out__of__stock"}`} disabled={disabled}>
                {text}
            </button>
        );
    }
}

export default GreenProceedBtn;
