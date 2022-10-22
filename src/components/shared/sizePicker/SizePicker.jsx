import React, { Component } from "react";
import "./sizePicker.css";

class SizePicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeSize: "",
        };
    }
    render() {
        const avaliableSizes = this.props.sizes;
        return (
            <div className="size__picker">
                <p className="size__title">Size:</p>
                <div className="size__variants__container">
                    {avaliableSizes.map((size) => {
                        return (
                            <div
                                key={`size-${size}`}
                                onClick={() => {
                                    this.setState({ ...this.state, activeSize: size });
                                }}
                                className={`size__variants ${this.state.activeSize === size && "selected__variant"}`}>
                                {size}
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default SizePicker;
