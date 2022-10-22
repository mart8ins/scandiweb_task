import React, { Component } from "react";
import ProductDetails from "./components/productDetails/ProductDetails";
import SideImages from "./components/sideImages/SideImages";
import "./productDetailPage.css";

class ProductDetailPage extends Component {
    render() {
        const product = {
            sizes: ["S", "SX", "M"],
            colors: { grey: "#D3D2D5", green: "#0F6450", black: "#2B2B2B" },
        };
        return (
            <div className="product__details_page">
                <SideImages />
                <ProductDetails product={product} />
            </div>
        );
    }
}

export default ProductDetailPage;
