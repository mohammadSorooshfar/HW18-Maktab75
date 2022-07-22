import React from "react";
import cssClasses from "./Cart.module.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import CartItem from "../../components/cart item/CartItem";

export default function Cart(props) {
  return (
    <div className={cssClasses.container}>
      <Header bottomText="Card" />
      <div>
        {props.products.map((product) => (
          <CartItem product={product} />
        ))}
      </div>
      <Footer
        showHome={props.showHome}
        setShowHome={props.setShowHome}
        handleBasketClick={props.handleBasketClick}
      />
    </div>
  );
}
