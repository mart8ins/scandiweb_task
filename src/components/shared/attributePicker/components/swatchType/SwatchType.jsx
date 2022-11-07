import React, { Component } from "react";
import { connect } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import "./swatchType.css";

class SwatchType extends Component {
    state = {
        selectedSwatch: this.props.attribute.items[0].displayValue,
    };

    render() {
        const {
            attribute: { id, name, items },
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
                                        this.setState({
                                            selectedSwatch: item.displayValue,
                                        });
                                        // addSelectedAttribute({
                                        //     id: id,
                                        //     item: item,
                                        // });
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
    return {
        cartReducer: state.cartReducer,
    };
};
export default connect(mapStateToProps)(SwatchType);
