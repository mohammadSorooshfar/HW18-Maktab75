import React from "react";
import ProductDetails from "../../components/product details/ProductDetails";
export default function Details(props) {
  return (
    <main>
      <ProductDetails product={props.product} />
    </main>
  );
}
