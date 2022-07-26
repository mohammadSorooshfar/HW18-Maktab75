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
  const [favoritesList, setFavoritesList] = useState([]);
  useEffect(() => {
    setProducts(data.products);
    setFavoritesList([]);
    localStorage.setItem("products", JSON.stringify(data.products));
    localStorage.setItem("cart", JSON.stringify([]));
    localStorage.setItem("favorite", JSON.stringify([]));
  }, []);
  const handleProductClick = (id) => {
    setShowDetails(true);
    setProduct(products.find((elem) => elem.id === id));
    setFavoritesList(JSON.parse(localStorage.getItem("favorite")));
  };
  const addToStorage = (product) => {
    const cartItems = getCartFromStorage();
    const index = cartItems.findIndex((item) => item.id === product.id);
    if (index !== -1) {
      if (cartItems[index].inventory > cartItems[index].count) {
        cartItems[index].count++;
        setPrice(price + cartItems[index].price);
        setProduct(cartItems[index]);
        products[products.findIndex((elem) => elem.id == product.id)] =
          cartItems[index];
        setProducts(products);
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
    const cartProductsList = cartProducts;
    const index = cartProductsList.findIndex((product) => product.id === id);
    cartProductsList[index].count--;
    setPrice(price - cartProductsList[index].price);
    if (cartProductsList[index].count === 0) {
      cartProductsList.splice(index, 1);
    }
    products[products.findIndex((elem) => elem.id == id)] =
      cartProductsList[index];
    setProducts(products);
    setCartProducts(cartProductsList);
    localStorage.setItem("cart", JSON.stringify(cartProductsList));
  };
  const handleCheck = (id) => {
    const products = cartProducts;
    const index = products.findIndex((product) => product.id === id);
    setPrice(price - products[index].price * products[index].count);
    products.splice(index, 1);
    setCartProducts(products);
    localStorage.setItem("cart", JSON.stringify(products));
  };
  const handleFavorite = (id) => {
    const favorites = JSON.parse(localStorage.getItem("favorite"));
    favorites.push(id);
    localStorage.setItem("favorite", JSON.stringify(favorites));
    setFavoritesList(favorites);
  };
  const handleNotFavorite = (id) => {
    const favorites = JSON.parse(localStorage.getItem("favorite"));
    favorites.splice(
      favorites.findIndex((pid) => pid == id),
      1
    );
    localStorage.setItem("favorite", JSON.stringify(favorites));
    setFavoritesList(favorites);
  };
  return (
    <div className="App">
      {showDetails ? (
        <Details
          product={product}
          addToStorage={addToStorage}
          handleBasketClick={handleBasketClick}
          handleHomeClick={handleHomeClick}
          handleFavorite={handleFavorite}
          favoritesList={favoritesList}
          handleNotFavorite={handleNotFavorite}
        />
      ) : showHome ? (
        <Home
          products={products}
          handleProductClick={handleProductClick}
          showHome={showHome}
          handleHomeClick={handleHomeClick}
          handleBasketClick={handleBasketClick}
          handleFavorite={handleFavorite}
          favoritesList={favoritesList}
          handleNotFavorite={handleNotFavorite}
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
