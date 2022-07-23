import React from "react";
import cssClasses from "./Home.module.css";
import Header from "../../components/Header/Header";
import SearchBar from "../../components/search bar/SearchBar";
import Filters from "../../components/filters/Filters";
import Footer from "../../components/Footer/Footer";
import Products from "../../components/products/Products";
export default function Home(props) {
  return (
    <div className={cssClasses.container}>
      <Header topText="Hafia Zaskin" bottomText="Jakarta, INA" />
      <SearchBar />
      <Filters />
      <Products
        products={props.products}
        handleProductClick={props.handleProductClick}
      />
      <Footer
        showHome={props.showHome}
        handleHomeClick={props.handleHomeClick}
        handleBasketClick={props.handleBasketClick}
      />
    </div>
  );
}
