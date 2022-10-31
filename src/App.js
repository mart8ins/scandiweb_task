import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import CartMain from "./components/cart/cartMain/CartMain";
import CartOverlay from "./components/cart/cartOverlay/CartOverlay";
import Category from "./components/category/Category";
import { AppContext } from "./components/context";
import Header from "./components/header/Header";
import ProductDetailPage from "./components/PDP/ProductDetailPage";

class App extends Component {
    render() {
        const { showCartOverlay } = this.context.cart;
        return (
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/:categoryName/:productId" element={<ProductDetailPage />} />
                    <Route path="/cart" element={<CartMain />} />
                    <Route path="/" element={<Category />} />
                </Routes>

                {showCartOverlay && <CartOverlay />}
            </div>
        );
    }
}
App.contextType = AppContext;
export default App;
