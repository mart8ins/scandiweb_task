import "./App.css";
import Category from "./components/category/Category";
import Header from "./components/header/Header";
import ProductDetailPage from "./components/PDP/ProductDetailPage";

function App() {
    return (
        <div className="App">
            <Header />
            {/* <Category /> */}
            <ProductDetailPage />
        </div>
    );
}

export default App;
