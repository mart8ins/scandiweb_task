import React, { Component } from "react";
import "./navigation.css";

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: "Women",
        };
    }

    render() {
        return (
            <div className="navigation">
                <div className="header__navigation">
                    <div className="navigation__element">
                        <div className="label__container">
                            <div
                                onClick={() => this.setState({ active: "Women" })}
                                className="label"
                                style={{ color: this.state.active === "Women" && "#5ece7b" }}>
                                Women
                            </div>
                            {this.state.active === "Women" && <div className="border"></div>}
                        </div>
                    </div>

                    <div className="navigation__element">
                        <div className="label__container">
                            <div
                                onClick={() => this.setState({ active: "Men" })}
                                className="label"
                                style={{ color: this.state.active === "Men" && "#5ece7b" }}>
                                Men
                            </div>
                            {this.state.active === "Men" && <div className="border"></div>}
                        </div>
                    </div>

                    <div className="navigation__element">
                        <div className="label__container">
                            <div
                                onClick={() => this.setState({ active: "Kids" })}
                                className="label"
                                style={{ color: this.state.active === "Kids" && "#5ece7b" }}>
                                Kids
                            </div>
                            {this.state.active === "Kids" && <div className="border"></div>}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Navigation;
