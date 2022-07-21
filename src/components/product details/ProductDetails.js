import React from "react";
import cssClasses from "./ProductDetails.module.css";
import Typography from "../typography/Typography";
export default function ProductDetails(props) {
  return (
    <div className={cssClasses.main}>
      <img src={props.product.image} alt="productImage" />
      <div className={cssClasses.details}>
        <div className={cssClasses.priceNameDiv}>
          <Typography
            top={props.product.name}
            bottom={props.product.detail}
            topColor="black"
            bottomColor="gray"
            topSize="18px"
            bottomSize="14px"
            boldTop
            left
          />
          <Typography
            top={props.product.price}
            bottom=""
            topColor="black"
            bottomColor=""
            topSize="18px"
            bottomSize=""
            boldTop
          />
        </div>
        <div className={cssClasses.detailsDiv}>
          <Typography
            top="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            bottom=""
            topColor="gray"
            bottomColor=""
            topSize="14px"
            bottomSize=""
            left
          />
        </div>
      </div>
    </div>
  );
}
