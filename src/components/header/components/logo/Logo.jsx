import React, { Component } from "react";
import logo from "../../../../icons/a-logo.svg";
import "./logo.css";
class Logo extends Component {
    render() {
        return (
            <div className="logo__container">
                <img className="logo" src={logo} alt="Logo" />
            </div>
        );
    }
}

export default Logo;
