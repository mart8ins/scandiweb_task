import React, { Component } from "react";
import "./sizePicker.css";

class SizePicker extends Component {
    state = {
        activeSize: "",
    };
    render() {
        const { forType, sizes } = this.props;
        return (
            <div className={`size__picker ${forType && "size__picker__" + forType}`}>
                <p className={`size__title ${forType && "size__title__" + forType}`}>Size:</p>
                <div className={`size__variants__container ${forType && "size__variants__container__" + forType}`}>
                    {sizes &&
                        sizes.map((size) => {
                            return (
                                <div
                                    key={`size-${size.id}`}
                                    onClick={() => {
                                        this.setState({ ...this.state, activeSize: size.value });
                                    }}
                                    className={`size__variants ${forType && "size__variants__" + forType} ${
                                        (!forType && this.state.activeSize === size.value && "selected__variant") ||
                                        (forType && this.state.activeSize === size.value && "selected__variant__" + forType)
                                    }`}>
                                    {size.value}
                                </div>
                            );
                        })}
                </div>
            </div>
        );
    }
}

export default SizePicker;
