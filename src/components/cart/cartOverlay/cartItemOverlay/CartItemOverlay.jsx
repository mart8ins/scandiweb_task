import React, { Component } from "react";
import "./cartItemOverlay.css";
import ProductTitle from "../../../shared/productTitle/ProductTitle";
import PriceTag from "../../../shared/priceTag/PriceTag";
import vec_hor_sm from "../../../../icons/Vector-hor-sm.svg";
import vec_ver_sm from "../../../../icons/Vector-ver-sm.svg";
import AttributePicker from "../../../shared/attributePicker/AttributePicker";
import { productQuery } from "../../../queries.js";
import { AppContext } from "../../../context.js";

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
        const { cartProductId, quantity, selectedAttributes } = this.props.cartItem;
        const { brand, attributes, gallery, name, prices } = this.state.product;
        const image = gallery && gallery[0];

        return (
            <div className="cart__item__container__ov">
                <div className="cart__item__details__ov">
                    <div className="item__options__ov">
                        <div className="product__title__price__container__ov">
                            <ProductTitle forType="overlay" name={name} brand={brand} />
                            <PriceTag showTitle={false} forType="overlay" prices={prices} />
                        </div>
                        <AttributePicker attributes={attributes} forType={"overlay"} />
                    </div>
                    <div className="change__quantity__container__ov">
                        <div className="increase__item__ov">
                            <img src={vec_hor_sm} alt="Increase quantity button" />
                            <img className="vertical__line__ov" src={vec_ver_sm} alt="Increase quantity button" />
                        </div>
                        <div className="item__quantity__ov">{quantity}</div>
                        <div className="decrease__item__ov">
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

CartItemOverlay.contextType = AppContext;
export default CartItemOverlay;
