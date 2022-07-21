import React from "react";
import cssClasses from "./ProductDetails.module.css";
import Typography from "../typography/Typography";
export default function ProductDetails(props) {
  return (
    <div className={cssClasses.main}>
      <img src={props.image} alt="productImage" />
      <div>
        <Typography
          top={props.product.name}
          bottom={props.product.detail}
          topColor="black"
          bottomColor="#C8CED8"
          topSize="18px"
          bottomSize="14px"
          boldTop
        />
        <Typography
          top="Hafia Zaskin"
          bottom="Jakarta, INA"
          topColor="gray"
          bottomColor="#737C8E"
          topSize="14px"
          bottomSize="18px"
          boldBottom
        />
      </div>
    </div>
  );
}
