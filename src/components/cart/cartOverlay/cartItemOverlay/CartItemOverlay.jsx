import React, { Component } from "react";
import "./cartItemOverlay.css";
import { connect } from "react-redux";
import { cartAction } from "../../../../redux/actions/cart.js";
import { productQuery } from "../../../queries.js";

import ProductTitle from "../../../shared/productTitle/ProductTitle";
import PriceTag from "../../../shared/priceTag/PriceTag";
import AttributePicker from "../../../shared/attributePicker/AttributePicker";

import vec_hor_sm from "../../../../icons/Vector-hor-sm.svg";
import vec_ver_sm from "../../../../icons/Vector-ver-sm.svg";

class CartItemOverlay extends Component {
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
        const image = gallery && gallery[0];

        return (
            <div className="cart__item__container__ov">
                <div className="cart__item__details__ov">
                    <div className="item__options__ov">
                        <div className="product__title__price__container__ov">
                            <ProductTitle forType="overlay" name={name} brand={brand} />
                            <PriceTag showTitle={false} forType="overlay" prices={prices} />
                        </div>
                        <AttributePicker
                            attributes={allAttributes}
                            selectedAttributes={selectedAttributes}
                            forType={"overlay"}
                            cartItemId={cartItemId}
                        />
                    </div>
                    <div className="change__quantity__container__ov">
                        <div
                            className="increase__item__ov"
                            onClick={() => {
                                dispatch({
                                    type: cartAction.INCREASE_CART_ITEM,
                                    payload: cartItemId,
                                });
                            }}>
                            <img src={vec_hor_sm} alt="Increase quantity button" />
                            <img className="vertical__line__ov" src={vec_ver_sm} alt="Increase quantity button" />
                        </div>
                        <div className="item__quantity__ov">{quantity}</div>
                        <div
                            className="decrease__item__ov"
                            onClick={() => {
                                if (quantity > 1) {
                                    dispatch({
                                        type: cartAction.DECREASE_CART_ITEM,
                                        payload: cartItemId,
                                    });
                                } else {
                                    dispatch({
                                        type: cartAction.DELETE_CART_ITEM,
                                        payload: cartItemId,
                                    });
                                }
                            }}>
                            <img src={vec_hor_sm} alt="Decrease quantity button" />
                        </div>
                    </div>
                </div>
                <div className="item__image__container__ov">
                    <img src={image} />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return state;
};

export default connect(mapStateToProps)(CartItemOverlay);
