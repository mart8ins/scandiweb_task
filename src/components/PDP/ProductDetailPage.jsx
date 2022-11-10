import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import { connect } from "react-redux";
import { productAction } from "../../redux/actions/product";
import { productQuery } from "../queries";
import withRouter from "./withRouter";
import ProductDetails from "./components/productDetails/ProductDetails";
import DetailsImages from "./components/detailsImages/DetailsImages";

class ProductDetailPage extends Component {
    state = {
        product: {},
        productId: this.props.params.productId,
        cartItemId: uuidv4(),
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
                    cartItemId: this.state.cartItemId,
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

    setNewCartItemId = () => {
        this.setState({
            ...this.state,
            cartItemId: uuidv4(),
        });
    };
    render() {
        return (
            <div className="product__details_page">
                {this.state.product.gallery && <DetailsImages images={this.state.product.gallery} />}

                <ProductDetails product={this.state.product} setNewCartItemId={this.setNewCartItemId} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return state;
};

export default connect(mapStateToProps)(withRouter(ProductDetailPage));
