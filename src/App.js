import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import CartMain from "./components/cart/cartMain/CartMain";
import CartOverlay from "./components/cart/cartOverlay/CartOverlay";
import Category from "./components/category/Category";
import Header from "./components/header/Header";
import ProductDetailPage from "./components/PDP/ProductDetailPage";

class App extends Component {
    render() {
        const showCartOverlay = false;
        return (
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/product/:productId" element={<ProductDetailPage />} />
                    <Route path="/cart" element={<CartMain />} />
                    <Route path="/" element={<Category />} />
                </Routes>

                {showCartOverlay && <CartOverlay />}
            </div>
        );
    }
}

export default App;
