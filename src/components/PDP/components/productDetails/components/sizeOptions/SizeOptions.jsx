import React, { Component } from "react";
import "./sizeOptions.css";

class SizeOptions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeSize: "",
        };
    }
    render() {
        return (
            <div className="size__options">
                <p className="size__title">Size:</p>
                <div className="size__variants__container">
                    <div
                        onClick={() => {
                            this.setState({ ...this.state, activeSize: "XS" });
                        }}
                        className={`size__variants ${this.state.activeSize === "XS" && "selected__variant"}`}>
                        XS
                    </div>
                    <div
                        onClick={() => {
                            this.setState({ ...this.state, activeSize: "S" });
                        }}
                        className={`size__variants ${this.state.activeSize === "S" && "selected__variant"}`}>
                        S
                    </div>
                    <div
                        onClick={() => {
                            this.setState({ ...this.state, activeSize: "M" });
                        }}
                        className={`size__variants ${this.state.activeSize === "M" && "selected__variant"}`}>
                        M
                    </div>
                    <div
                        onClick={() => {
                            this.setState({ ...this.state, activeSize: "L" });
                        }}
                        className={`size__variants ${this.state.activeSize === "L" && "selected__variant"}`}>
                        L
                    </div>
                </div>
            </div>
        );
    }
}

export default SizeOptions;
