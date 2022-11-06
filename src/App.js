import React, { Component } from "react";
import { connect } from "react-redux";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { currencyAction } from "./redux/actions/currency";
import { categoryAction } from "./redux/actions/categories";
import CartMain from "./components/cart/cartMain/CartMain";
import CartOverlay from "./components/cart/cartOverlay/CartOverlay";
import Category from "./components/category/Category";
import { AppContext } from "./components/context";
import Header from "./components/header/Header";
import ProductDetailPage from "./components/PDP/ProductDetailPage";
import { currenciesQuery, categoryQuery } from "./components/queries";

class App extends Component {
    componentDidMount() {
        this.getCurrencies();
        this.getCategories();
    }

    async getCurrencies() {
        const {
            data: { currencies },
        } = await currenciesQuery();
        const { dispatch } = this.props;
        dispatch({
            type: currencyAction.GET__CURRENCY__DATA,
            payload: currencies,
        });
    }

    async getCategories() {
        const {
            data: { categories },
        } = await categoryQuery();
        const { dispatch } = this.props;
        dispatch({
            type: categoryAction.GET__CATEGORIES__DATA,
            payload: categories,
        });
    }

    render() {
        const { showCartOverlay } = this.context.cart;

        return (
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/:categoryName/:productId" element={<ProductDetailPage />} />
                    {/* <Route path="/cart" element={<CartMain />} /> */}
                    <Route path="/" element={<Category />} />
                </Routes>

                {/* {showCartOverlay && <CartOverlay />} */}
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return state;
};

App.contextType = AppContext;
export default connect(mapStateToProps)(App);
