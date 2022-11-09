import React, { Component } from "react";
import { connect } from "react-redux";
import { cartAction } from "../../../../redux/actions/cart.js";
import ProductTitle from "../../../shared/productTitle/ProductTitle";
import { productQuery } from "../../../queries";
import "./cartItem.css";
import AttributePicker from "../../../shared/attributePicker/AttributePicker";
import PriceTag from "../../../shared/priceTag/PriceTag";
import vec_hor from "../../../../icons/Vector-hor.svg";
import vec_ver from "../../../../icons/Vector-ver.svg";
import ImageSlide from "./components/ImageSlide.jsx";

export class CartItem extends Component {
    state = {
        product: {},
    };

    componentDidMount() {
        this.getDetails();
    }

    async getDetails() {
        const { productId } = this.props.cartItem;
        const { data } = await productQuery(productId);
        this.setState({
            product: data.product,
        });
    }

    render() {
        const { dispatch } = this.props;
        const { quantity, selectedAttributes, cartItemId, allAttributes } = this.props.cartItem;
        const { brand, gallery, name, prices } = this.state.product;
        return (
            <div className="cart__item__container">
                <div className="cart__item__details">
                    <div className="item__options">
                        <div className="product__title__container">
                            <ProductTitle name={name} brand={brand} />
                        </div>
                        <div className="product__price__tag__container">
                            <PriceTag showTitle={false} forType="cart" prices={prices} />
                        </div>
                        <AttributePicker
                            attributes={allAttributes}
                            selectedAttributes={selectedAttributes}
                            forType={"cart"}
                            cartItemId={cartItemId}
                        />
                    </div>
                </div>
                <div className="image__quantity">
                    <div className="change__quantity__container">
                        <div
                            className="increase__item"
                            onClick={() => {
                                dispatch({
                                    type: cartAction.INCREASE_CART_ITEM,
                                    payload: cartItemId,
                                });
                            }}>
                            <img src={vec_hor} alt="Increase quantity button" />
                            <img className="vertical__line" src={vec_ver} alt="Increase quantity button" />
                        </div>
                        <div className="item__quantity">{quantity}</div>
                        <div
                            className="decrease__item"
                            onClick={() => {
                                dispatch({
                                    type: cartAction.DECREASE_CART_ITEM,
                                    payload: cartItemId,
                                });
                            }}>
                            <img src={vec_hor} alt="Decrease quantity button" />
                        </div>
                    </div>
                    {this.state.product.gallery && <ImageSlide gallery={gallery} />}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return state;
};

export default connect(mapStateToProps)(CartItem);
