import React, { Component } from "react";
import "./productDetails.css";
import parse from "html-react-parser";
import { connect } from "react-redux";
import { cartAction } from "../../../../redux/actions/cart";
import PriceTag from "../../../shared/priceTag/PriceTag";
import AttributePicker from "../../../shared/attributePicker/AttributePicker";
import ProductTitle from "../../../shared/productTitle/ProductTitle";
import GreenProceedBtn from "../../../shared/greenProceedBtn/GreenProceedBtn";

class ProductDetails extends Component {
    render() {
        const {
            product: { attributes, brand, description, name, prices },
            dispatch,
            setNewCartItemId,
        } = this.props;

        const addToCart = () => {
            dispatch({
                type: cartAction.ADD_ITEM_TO_CART,
                payload: {
                    ...this.props.productForCart,
                    allAttributes: attributes,
                    allPrices: prices,
                },
            });
            setNewCartItemId();
        };

        return (
            <div className="product__options__view">
                <div className="product__title__container">
                    <ProductTitle name={name} brand={brand} />
                </div>

                <AttributePicker attributes={attributes} forType={null} />

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
    return state.productReducer;
};

export default connect(mapStateToProps)(ProductDetails);
