import React, { Component } from "react";
import ColorOptions from "./components/colorOptions/ColorOptions";
import SizeOptions from "./components/sizeOptions/SizeOptions";
import "./productDetails.css";
import PriceTag from "./components/priceTag/PriceTag";
import AddToCartBtn from "./components/addToCartBtn/AddToCartBtn";

class ProductDetails extends Component {
    render() {
        return (
            <div className="details__container">
                <img className="main__image__view" src="./Image.png" />
                <div className="product__options__view">
                    <p className="brand__name">Apollo</p>
                    <p className="product__name">Running short</p>
                    <SizeOptions />
                    <ColorOptions />
                    <PriceTag />
                    <AddToCartBtn />

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
