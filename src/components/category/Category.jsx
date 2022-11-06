import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import { connect } from "react-redux";
import "./category.css";
import ProductCard from "./productCard/ProductCard";

class Category extends Component {
    render() {
        const { name, products } = this.props.categoryReducer.active;
        const { symbol } = this.props.currencyReducer.active;

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
                                    key={uuidv4()}
                                    id={product.id}
                                    name={product.name}
                                    price={activePrice}
                                    stock={product.inStock}
                                    image={product.gallery[0]}
                                    category={product.category}
                                    brand={product.brand}
                                />
                            );
                        })}
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return state;
};
export default connect(mapStateToProps)(Category);
