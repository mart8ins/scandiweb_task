import React, { Component } from "react";
import "./colorOptions.css";

class ColorOptions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeColor: "",
        };
    }
    render() {
        return (
            <div className="color__options">
                <div className="color__title">Color:</div>
                <div className="color__variants__container">
                    <div
                        onClick={() => {
                            this.setState({
                                ...this.state,
                                activeColor: "grey",
                            });
                        }}
                        id={`${this.state.activeColor === "grey" && "selected__border"}`}
                        className="color__variant__grey">
                        <div className="variant__grey"></div>
                    </div>

                    <div
                        onClick={() => {
                            this.setState({
                                ...this.state,
                                activeColor: "black",
                            });
                        }}
                        id={`${this.state.activeColor === "black" && "selected__border"}`}
                        className="color__variant__black">
                        <div className="variant__black"></div>
                    </div>
                    <div
                        onClick={() => {
                            this.setState({
                                ...this.state,
                                activeColor: "green",
                            });
                        }}
                        id={`${this.state.activeColor === "green" && "selected__border"}`}
                        className="color__variant__green">
                        <div className="variant__green"></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ColorOptions;
