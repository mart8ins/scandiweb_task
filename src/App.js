import "./App.css";
import CartMain from "./components/cart/cartMain/CartMain";
import Category from "./components/category/Category";
import Header from "./components/header/Header";
import ProductDetailPage from "./components/PDP/ProductDetailPage";

function App() {
    return (
        <div className="App">
            <Header />
            <Category />
            {/* <ProductDetailPage /> */}
            {/* <CartMain /> */}
        </div>
    );
}

export default App;
