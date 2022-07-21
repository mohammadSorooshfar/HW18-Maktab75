import React from "react";
import cssClasses from "./Product.module.css";
import Typography from "../typography/Typography";
import Icon from "../icon/Icon";
import { BsHeart } from "react-icons/bs";
export default function Product(props) {
  return (
    <div
      className={cssClasses.main}
      onClick={() => props.handleProductClick(props.product.id)}
    >
      <img src={props.product.image} alt="productImage" />
      <div className={cssClasses.productDetail}>
        <Typography
          top={props.product.name}
          bottom={props.product.price}
          topColor="#2C4266"
          bottomColor="#A7AFBF"
          topSize="14px"
          bottomSize="12px"
          boldTop
          left
        />
        <Icon bg="#FC7F71" color="white" small>
          <BsHeart />
        </Icon>
      </div>
    </div>
  );
}
