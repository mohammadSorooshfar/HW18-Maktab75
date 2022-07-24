import React from "react";
import cssClasses from "./ProductDetails.module.css";
import Typography from "../typography/Typography";
import Icon from "../icon/Icon";
import { BsCartFill, BsHeartFill, BsHouseDoorFill } from "react-icons/bs";
import { useState } from "react";
export default function ProductDetails(props) {
  let maximumAmount;
  console.log(props.product.inventory, props.product.count);
  if (props.product.inventory === props.product.count) {
    maximumAmount = "Sorry, no more in the store";
  } else {
    maximumAmount = "";
  }
  return (
    <div className={cssClasses.main}>
      <div className={cssClasses.icons}>
        <Icon bg="white" color="#F5A1A9" noShadow>
          <BsHouseDoorFill onClick={() => props.handleHomeClick()} />
        </Icon>
        <Icon bg="white" color="#F5A1A9" noShadow>
          <BsHeartFill />
        </Icon>
      </div>
      <img
        src={props.product.image}
        alt="productImage"
        className={cssClasses.image}
      />
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
            top={"$" + props.product.price.toFixed(2)}
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
            topColor="black"
            bottomColor=""
            topSize="14px"
            bottomSize=""
            left
          />
        </div>
        <div className={cssClasses.buttonsDiv}>
          <div className={cssClasses.buttonWarning}>
            <button onClick={() => props.addToStorage(props.product)}>
              Buy now
            </button>
            <Typography
              top={maximumAmount}
              bottom=""
              topColor="red"
              bottomColor=""
              topSize="14px"
              bottomSize=""
              left
            />
          </div>
          <Icon bg="white" color="#F5A1A9">
            <BsCartFill onClick={() => props.handleBasketClick()} />
          </Icon>
        </div>
      </div>
    </div>
  );
}
