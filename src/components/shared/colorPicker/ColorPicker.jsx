import React, { Component } from "react";
import "./colorPicker.css";

class ColorPicker extends Component {
    state = {
        activeColor: "",
    };
    render() {
        const { colors, forType } = this.props;
        return (
            <div className={`color__picker ${forType && "color__picker__" + forType}`}>
                <div className={`color__title ${forType && "color__title__" + forType}`}>Color:</div>
                <div className={`color__variants__container ${forType && "color__variants__container__" + forType}`}>
                    {colors &&
                        Object.entries(colors).map(([colorName, colorCode], i) => {
                            return (
                                <div
                                    key={"d" + i}
                                    onClick={() => {
                                        this.setState({
                                            ...this.state,
                                            activeColor: colorName,
                                        });
                                    }}
                                    id={`${this.state.activeColor === colorName && "selected__border"}`}
                                    className={`color__variants ${forType && "color__variants__" + forType}`}>
                                    <div
                                        style={{ backgroundColor: colorCode }}
                                        className={`variant ${forType && "variant__" + forType}`}></div>
                                </div>
                            );
                        })}
                </div>
            </div>
        );
    }
}

export default ColorPicker;