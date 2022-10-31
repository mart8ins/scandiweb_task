import React, { Component } from "react";
import "./swatchType.css";

class SwatchType extends Component {
    state = {
        selectedSwatch: this.props.attribute.items[0].displayValue,
    };
    render() {
        const {
            attribute: { name, items },
            forType,
        } = this.props;
        return (
            <div className={`swatch__picker ${forType && "swatch__picker__" + forType}`}>
                <div className={`swatch__title ${forType && "swatch__title__" + forType}`}>{name}:</div>
                <div className={`swatch__variants__container ${forType && "swatch__variants__container__" + forType}`}>
                    {items &&
                        items.map((item) => {
                            return (
                                <div
                                    key={item.id}
                                    onClick={() => {
                                        this.setState({
                                            selectedSwatch: item.displayValue,
                                        });
                                    }}
                                    id={`${this.state.selectedSwatch === item.displayValue && "selected__border"}`}
                                    className={`swatch__variants ${forType && "swatch__variants__" + forType}`}>
                                    <div
                                        style={{ backgroundColor: item.value }}
                                        className={`variant ${forType && "variant__" + forType}`}></div>
                                </div>
                            );
                        })}
                </div>
            </div>
        );
    }
}

export default SwatchType;
