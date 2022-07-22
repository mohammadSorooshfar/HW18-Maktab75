import "./App.css";
import Home from "./pages/home/Home";
import Cart from "./pages/cart/Cart";
import { useState, useEffect } from "react";
import data from "./data/data.json";
import Details from "./pages/details/Details";
function App() {
  const [products, setProducts] = useState([]);
  const [showDetails, setShowDetails] = useState(false);
  const [product, setProduct] = useState({});
  const [showHome, setShowHome] = useState(true);
  const [cartProducts, setCartProducts] = useState([]);
  useEffect(() => {
    setProducts(data.products);
    localStorage.setItem("products", JSON.stringify(data.products));
    localStorage.setItem("cart", JSON.stringify([]));
  }, []);
  const handleProductClick = (id) => {
    setShowDetails(true);
    setProduct(products.find((elem) => elem.id === id));
  };
  const addToStorage = (product) => {
    const cartItems = getCartFromStorage();
    const index = cartItems.findIndex((item) => item.id === product.id);
    if (index !== -1) {
    } else {
      cartItems.push(product);
    }
    localStorage.setItem("cart", JSON.stringify(cartItems));
  };
  const getCartFromStorage = () => {
    return JSON.parse(localStorage.getItem("cart"));
  };
  const handleBasketClick = () => {
    setShowHome(false);
    setShowDetails(false);
    console.log(JSON.parse(localStorage.getItem("cart")));
    setCartProducts(getCartFromStorage());
  };
  return (
    <div className="App">
      {showDetails ? (
        <Details
          product={product}
          addToStorage={addToStorage}
          handleBasketClick={handleBasketClick}
        />
      ) : showHome ? (
        <Home
          products={products}
          handleProductClick={handleProductClick}
          showHome={showHome}
          setShowHome={setShowHome}
          handleBasketClick={handleBasketClick}
        />
      ) : (
        <Cart
          products={cartProducts}
          handleProductClick={handleProductClick}
          showHome={showHome}
          setShowHome={setShowHome}
          handleBasketClick={handleBasketClick}
        />
      )}
    </div>
  );
}

export default App;
