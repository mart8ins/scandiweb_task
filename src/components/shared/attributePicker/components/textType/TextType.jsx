import React, { Component } from "react";
import { AppContext } from "../../../../context";
import "./textType.css";

class TextType extends Component {
    state = {
        selectedText: this.props.attribute.items[0].value,
        cartItemId: this.props.cartItemId,
        items: [],
    };

    handleAttributes() {
        const { attribute, selectedAttributes } = this.props;
        const {
            cart: { showCartOverlay, addDefaultAttributeToCartitem },
        } = this.context;

        if (selectedAttributes && selectedAttributes.length) {
            selectedAttributes.forEach((sel) => {
                if (attribute.id === sel.id) {
                    this.setState({
                        ...this.state,
                        selectedText: sel.item.value,
                    });
                }
            });
        }
        if (showCartOverlay) {
            addDefaultAttributeToCartitem(this.state.cartItemId, attribute);
        }
    }

    componentDidMount() {
        this.handleAttributes();
        this.setState({
            ...this.state,
            items: this.props.attribute.items,
        });
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.attributes != this.props.attributes || prevProps.selectedAttributes != this.props.selectedAttributes) {
            this.handleAttributes();
        }
    }

    render() {
        const {
            forType,
            attribute: { items, name, id },
            addSelectedAttribute,
        } = this.props;

        return (
            <div className={`text__picker ${forType && "text__picker__" + forType}`}>
                <p className={`text__title ${forType && "text__title__" + forType}`}>{name}:</p>
                <div className={`text__variants__container ${forType && "text__variants__container__" + forType}`}>
                    {this.state.items &&
                        this.state.items.map((size, i) => {
                            return (
                                <div
                                    key={`text-${size.id}`}
                                    onClick={() => {
                                        this.setState({ ...this.state, selectedText: size.value });
                                        if (addSelectedAttribute) {
                                            addSelectedAttribute({
                                                id: id,
                                                item: size,
                                            });
                                        }
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

TextType.contextType = AppContext;
export default TextType;
