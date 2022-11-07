import React, { Component } from "react";
import { connect } from "react-redux";
import { productAction } from "../../redux/actions/product";
import ProductDetails from "./components/productDetails/ProductDetails";
import DetailsImages from "./components/detailsImages/DetailsImages";
import "./productDetailPage.css";
import { v4 as uuidv4 } from "uuid";
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

    componentDidUpdate(prevProps, prevState) {
        if (prevState != this.state) {
            const { dispatch } = this.props;
            const selectDefaultAttributes = this.state.product.attributes.map((item) => {
                return {
                    id: item.id,
                    item: item.items[0],
                };
            });
            dispatch({
                type: productAction.INITILIZE_PRODUCT,
                payload: {
                    cartItemId: uuidv4(),
                    productId: this.state.productId,
                    quantity: 1,
                    selectedAttributes: selectDefaultAttributes,
                },
            });
        }
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

const mapStateToProps = (state) => {
    return state;
};

export default connect(mapStateToProps)(withRouter(ProductDetailPage));
