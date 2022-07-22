import React from "react";
import cssClasses from "./CartItem.module.css";
import Typography from "../typography/Typography";
import Icon from "../icon/Icon";
import { BsFillCheckSquareFill } from "react-icons/bs";
import { FaMinus, FaPlus } from "react-icons/fa";
export default function CartItem(props) {
  return (
    <div className={cssClasses.main}>
      <img
        src={props.product.image}
        alt="productImage"
        className={cssClasses.productImage}
      />
      <div className={cssClasses.productDetails}>
        <div className={cssClasses.nameAndPrice}>
          <Typography
            top={props.product.name}
            bottom={props.product.detail}
            topColor="#5B6C88"
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
            left
          />
        </div>
        <div className={cssClasses.icons}>
          <Icon bg="white" color="#F89FA8" noShadow>
            <BsFillCheckSquareFill />
          </Icon>
          <div className={cssClasses.add}>
            <Icon bg="white" color="black" noShadow small>
              <FaPlus />
            </Icon>
            <Typography
              top={props.product.count}
              bottom=""
              topColor="#34496C"
              bottomColor=""
              topSize="18px"
              bottomSize=""
              boldTop
            />
            <Icon bg="white" color="black" noShadow small>
              <FaMinus />
            </Icon>
          </div>
        </div>
      </div>
    </div>
  );
}
