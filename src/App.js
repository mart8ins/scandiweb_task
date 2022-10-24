import "./App.css";
import CartMain from "./components/cart/cartMain/CartMain";
import CartOverlay from "./components/cart/cartOverlay/CartOverlay";
import Category from "./components/category/Category";
import Header from "./components/header/Header";
import ProductDetailPage from "./components/PDP/ProductDetailPage";

function App() {
    const showCartOverlay = true;
    return (
        <div className="App">
            <Header />
            {/* <Category /> */}
            {/* <ProductDetailPage /> */}
            <CartMain />
            {showCartOverlay && <CartOverlay />}
        </div>
    );
}

export default App;
