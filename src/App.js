import "./App.css";
import Home from "./pages/home/Home";
import { useState, useEffect } from "react";
import data from "./data/data.json";
import Details from "./pages/details/Details";
function App() {
  const [products, setProducts] = useState([]);
  const [showDetails, setShowDetails] = useState(false);
  const [product, setProduct] = useState({});
  useEffect(() => {
    setProducts(data.products);
  }, []);
  const handleProductClick = (id) => {
    setShowDetails(true);
    setProduct(products.find((elem) => elem.id === id));
  };
  return (
    <div className="App">
      {showDetails ? (
        <Details product={product} />
      ) : (
        <Home products={products} handleProductClick={handleProductClick} />
      )}
    </div>
  );
}

export default App;
