import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./productCard.css";
import add_to_basket from "../../../icons/CircleIcon.svg";
import { AppContext } from "../../context";

class ProductCard extends Component {
    state = {
        hover: false,
        hoverOnIcon: false,
    };

    render() {
        const addToCart = () => {
            console.log("Pielikt grozan");
        };
        const visitProduct = () => {
            console.log("Doties uz produktu");
        };

        const { price, name, stock, image, id, category } = this.props;
        return (
            <Link
                to={this.state.hoverOnIcon ? undefined : `/${category}/${id}`}
                className="product__card"
                style={{ pointerEvents: !stock && "none" }}
                onMouseEnter={() => {
                    this.setState({
                        hover: true,
                    });
                }}
                onMouseLeave={() => {
                    this.setState({
                        hover: false,
                    });
                }}
                onClick={!this.state.hoverOnIcon && this.state.hover ? visitProduct : undefined}>
                <div className="product__image__container">
                    {!stock && (
                        <div className="out__of__stock__overlay">
                            <p className="out__of__stock__title">Out of stock</p>
                        </div>
                    )}

                    <img className="product__image" src={image} alt="Product image" />
                    <div
                        onClick={this.state.hoverOnIcon ? addToCart : undefined}
                        className="add__to__basket_icon__container"
                        style={{ visibility: this.state.hover ? "visible" : "hidden" }}>
                        <img
                            onMouseEnter={() => {
                                this.setState({
                                    hoverOnIcon: true,
                                });
                            }}
                            onMouseLeave={() => {
                                this.setState({
                                    hoverOnIcon: false,
                                });
                            }}
                            src={add_to_basket}
                            alt="Add to basket button"
                            className="add__to__basket_icon"
                        />
                    </div>
                </div>

                <div className="space__base"></div>

                <div className="content">
                    <div className="title">{name}</div>
                    <div className="price">${price && price.amount}</div>
                </div>
            </Link>
        );
    }
}
ProductCard.contextType = AppContext;
export default ProductCard;
