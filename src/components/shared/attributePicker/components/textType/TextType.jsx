import React, { Component } from "react";
import "./textType.css";

class TextType extends Component {
    state = {
        selectedText: this.props.attribute.items[0].value,
    };
    render() {
        const {
            forType,
            attribute: { items, name },
        } = this.props;
        return (
            <div className={`text__picker ${forType && "text__picker__" + forType}`}>
                <p className={`text__title ${forType && "text__title__" + forType}`}>{name}:</p>
                <div className={`text__variants__container ${forType && "text__variants__container__" + forType}`}>
                    {items &&
                        items.map((size, i) => {
                            return (
                                <div
                                    key={size.id}
                                    onClick={() => {
                                        this.setState({ ...this.state, selectedText: size.value });
                                    }}
                                    className={`text__variants ${forType && "text__variants__" + forType} ${
                                        (!forType && this.state.selectedText === size.value && "selected__variant") ||
                                        (forType && this.state.selectedText === size.value && "selected__variant__" + forType)
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

export default TextType;
