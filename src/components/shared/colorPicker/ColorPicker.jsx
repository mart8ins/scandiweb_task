import React, { Component } from "react";
import "./colorPicker.css";

class ColorPicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeColor: "",
        };
    }
    render() {
        const { colors } = this.props;
        return (
            <div className="color__picker">
                <div className="color__title">Color:</div>
                <div className="color__variants__container">
                    {colors &&
                        Object.entries(colors).map(([colorName, colorCode], i) => {
                            return (
                                <div
                                    key={i}
                                    onClick={() => {
                                        this.setState({
                                            ...this.state,
                                            activeColor: colorName,
                                        });
                                    }}
                                    id={`${this.state.activeColor === colorName && "selected__border"}`}
                                    className="color__variants">
                                    <div style={{ backgroundColor: colorCode }} className="variant"></div>
                                </div>
                            );
                        })}
                </div>
            </div>
        );
    }
}

export default ColorPicker;
