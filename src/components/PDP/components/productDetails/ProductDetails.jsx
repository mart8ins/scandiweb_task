import React, { Component } from "react";
import { connect } from "react-redux";
import { cartAction } from "../../../../redux/actions/cart";
import parse from "html-react-parser";
import { v4 as uuidv4 } from "uuid";
import "./productDetails.css";
import PriceTag from "../../../shared/priceTag/PriceTag";
import AttributePicker from "../../../shared/attributePicker/AttributePicker";
import ProductTitle from "../../../shared/productTitle/ProductTitle";
import GreenProceedBtn from "../../../shared/greenProceedBtn/GreenProceedBtn";

class ProductDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedAttributes: [],
        };

        this.addSelectedAttribute = this.addSelectedAttribute.bind(this);
    }

    addSelectedAttribute(attr) {
        this.setState({
            ...this.state,
            selectedAttributes: [...this.state.selectedAttributes, attr],
        });
    }

    render() {
        const {
            product: { attributes, brand, description, gallery, name, prices, id },
            dispatch,
        } = this.props;

        const addToCart = () => {
            dispatch({
                type: cartAction.ADD_ITEM_TO_CART,
                payload: { cartItemId: uuidv4(), productId: id, quantity: 1, selectedAttributes: [] },
            });
        };

        return (
            <div className="product__options__view">
                <div className="product__title__container">
                    <ProductTitle name={name} brand={brand} />
                </div>

                <AttributePicker attributes={attributes} forType={null} addSelectedAttribute={this.addSelectedAttribute} />

                <div className="product__price__tag__container">
                    <PriceTag showTitle={true} prices={prices} />
                </div>

                <div className="product__add__to__chart__container">
                    <GreenProceedBtn
                        styles={{ width: "292px", height: "52px", fontSize: "16px" }}
                        text={"Add to cart"}
                        onClick={() => {
                            addToCart();
                        }}
                    />
                </div>

                <div className="description">{description && parse(description)}</div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return state;
};

export default connect(mapStateToProps)(ProductDetails);
