import React from "react";
import cssClasses from "./Products.module.css";
import Product from "../Product/Product";
export default function Products(props) {
  return (
    <main className={cssClasses.productsDiv}>
      {props.products.map((product) => (
        <Product
          product={product}
          key={product.id}
          handleProductClick={props.handleProductClick}
          handleFavorite={props.handleFavorite}
          favoritesList={props.favoritesList}
          handleNotFavorite={props.handleNotFavorite}
        />
      ))}
    </main>
  );
}
