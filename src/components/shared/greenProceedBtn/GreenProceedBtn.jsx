import React, { Component } from "react";
import "./greenProceedBtn.css";

class GreenProceedBtn extends Component {
    render() {
        const { text, styles } = this.props;
        return (
            <button style={styles} className="proceed__btn">
                {text}
            </button>
        );
    }
}

export default GreenProceedBtn;
