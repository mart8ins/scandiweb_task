import React, { Component } from "react";
import { connect } from "react-redux";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { currencyAction } from "./redux/actions/currency";
import { categoryAction } from "./redux/actions/categories";
import { cartAction } from "./redux/actions/cart";
import CartMain from "./components/cart/cartMain/CartMain";
import CartOverlay from "./components/cart/cartOverlay/CartOverlay";
import Category from "./components/category/Category";
import Header from "./components/header/Header";
import ProductDetailPage from "./components/PDP/ProductDetailPage";
import { currenciesQuery, categoryNamesQuery } from "./components/queries";

class App extends Component {
    componentDidMount() {
        const { dispatch } = this.props;
        dispatch({
            type: cartAction.GET_CART_LS,
        });
        this.getCurrencies();
        this.fetchCategoryNames();
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

    async fetchCategoryNames() {
        const { dispatch } = this.props;
        const {
            data: { categories },
        } = await categoryNamesQuery();
        dispatch({
            type: categoryAction.GET__CATEGORY__NAMES,
            payload: categories,
        });
    }

    render() {
        const { showCartOverlay } = this.props.cartReducer;
        const { showCurrencyOptions } = this.props.currencyReducer;
        const { categoryNames } = this.props.categoryReducer;
        const { dispatch } = this.props;
        return (
            <>
                <div className={`App ${showCartOverlay && "overflow__hidden"}`}>
                    {categoryNames.length ? <Header /> : null}
                    <Routes>
                        <Route path="/:categoryName/:productId" element={<ProductDetailPage />} />
                        <Route path="/cart" element={<CartMain />} />
                        <Route path="*" element={<Category />} />
                    </Routes>

                    {showCartOverlay && <CartOverlay />}
                </div>
                <div
                    className={`${showCartOverlay && "click__to__hide__cart"}`}
                    onClick={() => {
                        if (showCartOverlay) {
                            dispatch({
                                type: cartAction.TOOGLE_CART_VIEW,
                                payload: false,
                            });
                        }
                    }}></div>

                <div
                    className={`${showCurrencyOptions && "click__to__hide__currencies"}`}
                    onClick={() => {
                        if (showCurrencyOptions) {
                            dispatch({
                                type: currencyAction.TOOGLE__CURRENCY__SWITCHER,
                                payload: false,
                            });
                        }
                    }}></div>
            </>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        cartReducer: state.cartReducer,
        currencyReducer: state.currencyReducer,
        categoryReducer: state.categoryReducer,
    };
};
export default connect(mapStateToProps)(App);
