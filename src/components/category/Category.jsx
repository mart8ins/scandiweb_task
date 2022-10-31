import React, { Component } from "react";
import { AppContext } from "../context";
import "./category.css";
import ProductCard from "./productCard/ProductCard";

class Category extends Component {
    render() {
        const {
            active: { name, products },
        } = this.context.categories;
        const {
            active: { symbol },
        } = this.context.currencies;

        return (
            <div>
                <h2 className="category__name">{name}</h2>
                <div className="products__container">
                    {products &&
                        products.map((product) => {
                            const activePrice =
                                product.prices &&
                                product.prices.filter((pr) => {
                                    if (pr) {
                                        return pr.currency.symbol === symbol;
                                    } else {
                                        return [];
                                    }
                                })[0];
                            return (
                                <ProductCard
                                    key={product.id}
                                    id={product.id}
                                    name={product.name}
                                    price={activePrice}
                                    stock={product.inStock}
                                    image={product.gallery[0]}
                                    category={product.category}
                                    attributes={product.attributes}
                                    brand={product.brand}
                                />
                            );
                        })}
                </div>
            </div>
        );
    }
}
Category.contextType = AppContext;
export default Category;
