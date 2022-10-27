import React, { Component } from "react";
import ProductDetails from "./components/productDetails/ProductDetails";
import DetailsImages from "./components/detailsImages/DetailsImages";
import "./productDetailPage.css";
import { productQuery } from "../queries";
import withRouter from "./withRouter";

class ProductDetailPage extends Component {
    state = {
        product: {},
        productId: this.props.params.productId,
    };

    componentDidMount() {
        this.getDetails();
    }

    async getDetails() {
        const { data } = await productQuery(this.state.productId);
        this.setState({
            product: data.product,
        });
    }
    render() {
        return (
            <div className="product__details_page">
                <DetailsImages images={this.state.product.gallery} />
                <ProductDetails product={this.state.product} />
            </div>
        );
    }
}

export default withRouter(ProductDetailPage);
