import React, { Component } from "react";
import "./category.css";
import Products from "./products/Products";

class Category extends Component {
    render() {
        return (
            <div>
                <h2 className="category__name">Category name</h2>
                <Products />
            </div>
        );
    }
}

export default Category;
