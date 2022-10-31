import React, { Component } from "react";
import "./greenProceedBtn.css";

class GreenProceedBtn extends Component {
    render() {
        const { text, styles, onClick } = this.props;
        return (
            <button onClick={onClick} style={styles} className="proceed__btn">
                {text}
            </button>
        );
    }
}

export default GreenProceedBtn;
