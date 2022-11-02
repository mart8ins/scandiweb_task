import React, { Component } from "react";
import { AppContext } from "../../../../context";
import "./swatchType.css";

class SwatchType extends Component {
    state = {
        selectedSwatch: this.props.attribute.items[0].displayValue,
    };

    componentDidMount() {
        const { attribute, selectedAttributes } = this.props;
        const {
            cart: { showCartOverlay, addDefaultAttributeToCartitem },
        } = this.context;

        if (selectedAttributes && selectedAttributes.length) {
            selectedAttributes.forEach((sel) => {
                if (attribute.id === sel.id) {
                    this.setState({
                        selectedSwatch: sel.item.displayValue,
                    });
                }
            });
        }
        if (showCartOverlay) {
            addDefaultAttributeToCartitem(this.state.cartItemId, attribute);
        }
    }

    render() {
        const {
            attribute: { id, name, items },
            forType,
            addSelectedAttribute,
        } = this.props;
        return (
            <div className={`swatch__picker ${forType && "swatch__picker__" + forType}`}>
                <div className={`swatch__title ${forType && "swatch__title__" + forType}`}>{name}:</div>
                <div className={`swatch__variants__container ${forType && "swatch__variants__container__" + forType}`}>
                    {items &&
                        items.map((item) => {
                            return (
                                <div
                                    key={`swatch-${item.id}`}
                                    onClick={() => {
                                        this.setState({
                                            selectedSwatch: item.displayValue,
                                        });
                                        if (addSelectedAttribute) {
                                            addSelectedAttribute({
                                                id: id,
                                                item: item,
                                            });
                                        }
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
SwatchType.contextType = AppContext;
export default SwatchType;
