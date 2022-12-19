import React, { Component } from "react";
import "./swatchType.css";
import { v4 as uuidv4 } from "uuid";
import { connect } from "react-redux";
import { productAction } from "../../../../../redux/actions/product";

class SwatchType extends Component {
    state = {
        selectedSwatch: this.props.attribute.items[0].displayValue,
    };

    componentDidMount() {
        const { attribute, selectedAttributes } = this.props;
        if (selectedAttributes) {
            selectedAttributes.forEach((selected) => {
                if (selected.id === attribute.id) {
                    this.setState({
                        selectedSwatch: selected.item.displayValue,
                    });
                }
            });
        }
    }

    addAttribute(item) {
        const {
            dispatch,
            attribute: { id },
            forType,
        } = this.props;

        if (!forType) {
            this.setState({
                selectedSwatch: item.displayValue,
            });
            if (!this.props.cartReducer.showCartOverlay && window.location.pathname !== "/cart") {
                dispatch({
                    type: productAction.ADD_ATTRIBUTE,
                    payload: {
                        id: id,
                        item: item,
                    },
                });
            }
        }
    }

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
                                    key={uuidv4()}
                                    onClick={() => {
                                        this.addAttribute(item);
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

const mapStateToProps = (state) => {
    return state;
};
export default connect(mapStateToProps)(SwatchType);
