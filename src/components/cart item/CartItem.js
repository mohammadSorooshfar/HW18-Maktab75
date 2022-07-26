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
        onClick={() => props.handleProductClick(props.product.id)}
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
            top={"$" + props.product.price.toFixed(2)}
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
            <BsFillCheckSquareFill
              onClick={() => props.handleCheck(props.product.id)}
            />
          </Icon>
          <div className={cssClasses.add}>
            <Icon bg="white" color="black" noShadow small>
              <FaPlus onClick={() => props.addToStorage(props.product)} />
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
              <FaMinus onClick={() => props.handleMinus(props.product.id)} />
            </Icon>
          </div>
        </div>
      </div>
    </div>
  );
}
