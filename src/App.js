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
  const [price, setPrice] = useState(0);
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
      if (cartItems[index].inventory > cartItems[index].count) {
        cartItems[index].count++;
        setPrice(price + cartItems[index].price);
        setProduct(cartItems[index]);
      }
    } else {
      product.count = 1;
      cartItems.push(product);
      setPrice(price + product.price);
      setProduct(product);
    }
    localStorage.setItem("cart", JSON.stringify(cartItems));
    setCartProducts(getCartFromStorage());
  };
  const getCartFromStorage = () => {
    return JSON.parse(localStorage.getItem("cart"));
  };
  const handleBasketClick = () => {
    setShowHome(false);
    setShowDetails(false);
    setCartProducts(getCartFromStorage());
  };
  const handleHomeClick = () => {
    setShowHome(true);
    setShowDetails(false);
  };
  const handlePay = () => {
    localStorage.setItem("cart", JSON.stringify([]));
    setCartProducts([]);
    setPrice(0);
  };
  const handleMinus = (id) => {
    const products = cartProducts;
    const index = products.findIndex((product) => product.id === id);
    products[index].count--;
    setPrice(price - products[index].price);
    if (products[index].count === 0) {
      products.splice(index, 1);
    }
    setCartProducts(products);
    localStorage.setItem("cart", JSON.stringify(products));
  };
  const handleCheck = (id) => {
    const products = cartProducts;
    const index = products.findIndex((product) => product.id === id);
    setPrice(price - products[index].price * products[index].count);
    products.splice(index, 1);
    setCartProducts(products);
    localStorage.setItem("cart", JSON.stringify(products));
  };
  return (
    <div className="App">
      {showDetails ? (
        <Details
          product={product}
          addToStorage={addToStorage}
          handleBasketClick={handleBasketClick}
          handleHomeClick={handleHomeClick}
        />
      ) : showHome ? (
        <Home
          products={products}
          handleProductClick={handleProductClick}
          showHome={showHome}
          handleHomeClick={handleHomeClick}
          handleBasketClick={handleBasketClick}
        />
      ) : (
        <Cart
          products={cartProducts}
          handleProductClick={handleProductClick}
          addToStorage={addToStorage}
          showHome={showHome}
          handleHomeClick={handleHomeClick}
          handleBasketClick={handleBasketClick}
          handlePay={handlePay}
          price={price}
          handleMinus={handleMinus}
          handleCheck={handleCheck}
        />
      )}
    </div>
  );
}

export default App;
