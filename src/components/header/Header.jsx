import React, { Component } from "react";
import "./header.css";

import Navigation from "./components/navigation/Navigation";
import Logo from "./components/logo/Logo";
import Actions from "./components/actions/Actions";

class Header extends Component {
    render() {
        return (
            <div className="header">
                <Navigation />
                <Logo />
                <Actions />
            </div>
        );
    }
}
export default Header;
