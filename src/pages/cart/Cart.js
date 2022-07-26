import React from "react";
import cssClasses from "./Cart.module.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import CartItem from "../../components/cart item/CartItem";
import Price from "../../components/price/Price";

export default function Cart(props) {
  return (
    <div className={cssClasses.container}>
      <Header bottomText="Card" />
      <div>
        {props.products.map((product) => (
          <CartItem
            product={product}
            addToStorage={props.addToStorage}
            key={product.id}
            handleMinus={props.handleMinus}
            handleCheck={props.handleCheck}
            handleProductClick={props.handleProductClick}
          />
        ))}
      </div>
      <Footer
        showHome={props.showHome}
        handleHomeClick={props.handleHomeClick}
        handleBasketClick={props.handleBasketClick}
      />
      <Price price={props.price} handlePay={props.handlePay} />
    </div>
  );
}
