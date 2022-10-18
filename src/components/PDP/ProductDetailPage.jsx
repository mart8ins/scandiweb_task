import React, { Component } from "react";
import ProductDetails from "./components/productDetails/ProductDetails";
import SideImages from "./components/sideImages/SideImages";
import "./productDetailPage.css";

class ProductDetailPage extends Component {
    render() {
        return (
            <div className="product__details_page">
                <SideImages />
                <ProductDetails />
            </div>
        );
    }
}

export default ProductDetailPage;
