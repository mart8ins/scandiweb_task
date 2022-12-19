import React, { Component } from "react";
import "./productCard.css";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { connect } from "react-redux";
import { cartAction } from "../../../redux/actions/cart";
import { productAttributesQuery } from "../../queries";

import add_to_basket from "../../../icons/CircleIcon.svg";

class ProductCard extends Component {
    state = {
        hover: false,
        hoverOnIcon: false,
        attributes: [],
    };

    componentDidMount() {
        this.getAttributes();
    }
    async getAttributes() {
        const { data } = await productAttributesQuery(this.props.id);
        this.setState({
            ...this.state,
            attributes: data.product.attributes,
        });
    }

    render() {
        const { price, allPrices, brand, name, stock, image, id, category, dispatch } = this.props;
        const defaultSelectedAttributes = this.state.attributes.map((item) => {
            return {
                id: item.id,
                item: item.items[0],
            };
        });
        /* ADD PRODUCT TO CART WITH QUANTITY = 1, ADDING MULTIPLE CREATES NEW PRODUCT IN CART AND NOT CHANGE
         QUANTITY TO EXISITING BECAUSE CLIENT COULD WANT TO ORDER SAME PRODUCT WITH DIFFERENT ATTRIBUTES */
        const addToCart = () => {
            dispatch({
                type: cartAction.ADD_ITEM_TO_CART,
                payload: {
                    cartItemId: uuidv4(),
                    productId: id,
                    quantity: 1,
                    selectedAttributes: defaultSelectedAttributes,
                    allAttributes: this.state.attributes,
                    allPrices,
                },
            });
        };

        return (
            <Link
                to={this.state.hoverOnIcon ? undefined : `/${category}/${id}`}
                className={`product__card`}
                onMouseEnter={() => {
                    this.setState({
                        hover: true,
                    });
                }}
                onMouseLeave={() => {
                    this.setState({
                        hover: false,
                    });
                }}>
                <div className="product__image__container">
                    {!stock && (
                        <div className="out__of__stock__overlay">
                            <p className="out__of__stock__title">Out of stock</p>
                        </div>
                    )}

                    <img className="product__image" src={image} alt="Product image" />
                    <div
                        onClick={this.state.hoverOnIcon ? addToCart : undefined}
                        className={`add__to__basket_icon__container hide__addToCart__icon ${this.state.hover && "show__addToCart__icon"}`}>
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
                    <div className="title">
                        {brand} {name}
                    </div>
                    <div className="price">
                        {price && price.currency.symbol}
                        {price && price.amount}
                    </div>
                </div>
            </Link>
        );
    }
}

const mapStateToProps = (state) => {
    return state.cartReducer;
};

export default connect(mapStateToProps)(ProductCard);
