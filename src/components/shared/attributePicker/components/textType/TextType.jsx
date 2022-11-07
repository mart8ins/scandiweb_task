import React, { Component } from "react";
import { connect } from "react-redux";
import { productAction } from "../../../../../redux/actions/product";
import { v4 as uuidv4 } from "uuid";
import "./textType.css";

class TextType extends Component {
    state = {
        selectedText: this.props.attribute.items[0].value,
        attributeData: this.props.attribute.items[0],
    };

    // componentDidMount() {
    //     const { attribute, selectedAttributes } = this.props;
    //     if (selectedAttributes) {
    //         selectedAttributes.forEach((selected) => {
    //             if (
    //                 selected.id === attribute.id
    //                 // && attribute.items[0].value === selected.item.value
    //             ) {
    //                 // console.log(attribute.items[0].value);
    //                 // console.log(selected.item.value);
    //                 this.setState({
    //                     selectedText: selected.item.value,
    //                     attributeData: selected.item,
    //                 });
    //             }
    //         });
    //     }
    // }

    addAttribute(item) {
        this.setState({
            selectedText: item.value,
            attributeData: item,
        });
        const {
            dispatch,
            attribute: { id },
        } = this.props;
        if (!this.props.cartReducer.showCartOverlay) {
            dispatch({
                type: productAction.ADD_ATTRIBUTE,
                payload: {
                    id: id,
                    item: item,
                },
            });
        }
        if (this.props.cartReducer.showCartOverlay) {
            // Jādispečo actions uz cartu, mainot itema atribūtu
        }
    }

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
                                    key={uuidv4()}
                                    onClick={() => {
                                        this.addAttribute(size);
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

const mapStateToProps = (state) => {
    return state;
};
export default connect(mapStateToProps)(TextType);
