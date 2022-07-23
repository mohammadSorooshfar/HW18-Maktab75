import React from "react";
import cssClasses from "./Price.module.css";
import Typography from "../typography/Typography";

export default function Price(props) {
  return (
    <div className={cssClasses.priceDiv}>
      <Typography
        top="Total"
        bottom={"$" + props.price.toFixed(2)}
        topColor="gray"
        bottomColor="black"
        topSize="14px"
        bottomSize="20px"
        boldBottom
        left
      />
      <button className={cssClasses.button} onClick={() => props.handlePay()}>
        Pay now
      </button>
    </div>
  );
}
