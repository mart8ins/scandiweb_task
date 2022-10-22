import React, { Component } from "react";
import "./productDetails.css";
import PriceTag from "../../../shared/priceTag/PriceTag";
import SizePicker from "../../../shared/sizePicker/SizePicker";
import ProductTitle from "../../../shared/productTitle/ProductTitle";
import ColorPicker from "../../../shared/colorPicker/ColorPicker";
import GreenProceedBtn from "../../../shared/greenProceedBtn/GreenProceedBtn";

class ProductDetails extends Component {
    render() {
        const {
            product: { sizes, colors },
        } = this.props;
        return (
            <div className="details__container">
                <img className="main__image__view" src="./Image.png" />
                <div className="product__options__view">
                    <div className="product__title__container">
                        <ProductTitle />
                    </div>
                    <div className="product__size__picker__container">
                        <SizePicker sizes={sizes} />
                    </div>
                    <div className="product__color__picker__container">
                        <ColorPicker colors={colors} />
                    </div>
                    <div className="product__price__tag__container">
                        <PriceTag showTitle={true} />
                    </div>

                    <div className="product__add__to__chart__container">
                        <GreenProceedBtn styles={{ width: "292px", height: "52px", fontSize: "16px" }} text={"Add to cart"} />
                    </div>

                    <div className="description">
                        Find stunning womens cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses and party
                        dresses from all your favorite brands
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductDetails;
