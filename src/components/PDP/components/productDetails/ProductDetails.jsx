import React, { Component } from "react";
import parse from "html-react-parser";
import "./productDetails.css";
import PriceTag from "../../../shared/priceTag/PriceTag";
import AttributePicker from "../../../shared/attributePicker/AttributePicker";
import ProductTitle from "../../../shared/productTitle/ProductTitle";
import GreenProceedBtn from "../../../shared/greenProceedBtn/GreenProceedBtn";
import { AppContext } from "../../../context";

class ProductDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            attributes: [],
        };
    }

    render() {
        const {
            product: { attributes, brand, description, gallery, name, prices, id },
        } = this.props;
        const { addProductToCart } = this.context.cart;

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
                            console.log("Add product to cart from product details");
                        }}
                    />
                </div>

                <div className="description">{description && parse(description)}</div>
            </div>
        );
    }
}

ProductDetails.contextType = AppContext;
export default ProductDetails;
