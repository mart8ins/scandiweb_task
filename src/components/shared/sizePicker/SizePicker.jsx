import React, { Component } from "react";
import "./sizePicker.css";

class SizePicker extends Component {
    state = {
        activeSize: "",
    };
    render() {
        const { forType } = this.props;
        const avaliableSizes = this.props.sizes;
        return (
            <div className={`size__picker ${forType && "size__picker__" + forType}`}>
                <p className={`size__title ${forType && "size__title__" + forType}`}>Size:</p>
                <div className={`size__variants__container ${forType && "size__variants__container__" + forType}`}>
                    {avaliableSizes.map((size) => {
                        return (
                            <div
                                key={`size-${size}`}
                                onClick={() => {
                                    this.setState({ ...this.state, activeSize: size });
                                }}
                                className={`size__variants ${forType && "size__variants__" + forType} ${
                                    (!forType && this.state.activeSize === size && "selected__variant") ||
                                    (forType && this.state.activeSize === size && "selected__variant__" + forType)
                                }`}>
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
