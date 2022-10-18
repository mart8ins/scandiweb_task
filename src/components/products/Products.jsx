import React, { Component } from "react";
import ProductCard from "./productCard/ProductCard";
import "./products.css";

class Products extends Component {
    render() {
        return (
            <div className="products__container">
                <ProductCard title="Soma" price="50.00" stock="1" />
                <ProductCard title="Bikses" price="60.00" stock="0" />
                <ProductCard title="Krekls" price="70.00" stock="2" />
                <ProductCard title="Šorti" price="90.00" stock="1" />
            </div>
        );
    }
}

export default Products;
