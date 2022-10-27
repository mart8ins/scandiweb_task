import React, { Component } from "react";
import parse from "html-react-parser";
import "./productDetails.css";
import PriceTag from "../../../shared/priceTag/PriceTag";
import SizePicker from "../../../shared/sizePicker/SizePicker";
import ProductTitle from "../../../shared/productTitle/ProductTitle";
import ColorPicker from "../../../shared/colorPicker/ColorPicker";
import GreenProceedBtn from "../../../shared/greenProceedBtn/GreenProceedBtn";

class ProductDetails extends Component {
    render() {
        const {
            product: { attributes, brand, description, gallery, name, prices },
        } = this.props;
        return (
            <div className="details__container">
                <img className="main__image__view" src={gallery && gallery[0]} />
                <div className="product__options__view">
                    <div className="product__title__container">
                        <ProductTitle name={name} brand={brand} />
                    </div>
                    {attributes &&
                        attributes.map((attr, i) => {
                            if (attr.id === "Size" || attr.id === "Capacity") {
                                return (
                                    <div key={attr.id + "-" + i} className="product__size__picker__container">
                                        <SizePicker sizes={attr.items} />
                                    </div>
                                );
                            }
                            if (attr.id === "Color") {
                                return (
                                    <div key={attr.id + "-" + i} className="product__color__picker__container">
                                        <ColorPicker colors={attr.items} />
                                    </div>
                                );
                            }
                        })}

                    <div className="product__price__tag__container">
                        <PriceTag showTitle={true} prices={prices} />
                    </div>

                    <div className="product__add__to__chart__container">
                        <GreenProceedBtn styles={{ width: "292px", height: "52px", fontSize: "16px" }} text={"Add to cart"} />
                    </div>

                    <div className="description">{description && parse(description)}</div>
                </div>
            </div>
        );
    }
}

export default ProductDetails;
