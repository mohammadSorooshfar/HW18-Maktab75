import React from "react";
import cssClasses from "./Product.module.css";
import Typography from "../typography/Typography";
import Icon from "../icon/Icon";
import { BsHeart, BsHeartFill } from "react-icons/bs";
export default function Product(props) {
  return (
    <div className={cssClasses.main}>
      <img
        src={props.product.image}
        alt="productImage"
        onClick={() => props.handleProductClick(props.product.id)}
      />
      <div className={cssClasses.productDetail}>
        <Typography
          top={props.product.name}
          bottom={"$" + props.product.price.toFixed(2)}
          topColor="#2C4266"
          bottomColor="#A7AFBF"
          topSize="14px"
          bottomSize="12px"
          boldTop
          left
        />
        <Icon bg="#FC7F71" color="white" small>
          {props.favoritesList.find((id) => id == props.product.id) ? (
            <BsHeartFill
              onClick={() => props.handleNotFavorite(props.product.id)}
            />
          ) : (
            <BsHeart onClick={() => props.handleFavorite(props.product.id)} />
          )}
        </Icon>
      </div>
    </div>
  );
}
