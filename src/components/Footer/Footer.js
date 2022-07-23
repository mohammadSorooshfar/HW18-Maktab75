import React from "react";
import cssClasses from "./Footer.module.css";
import {
  BsCart,
  BsCartFill,
  BsCardText,
  BsPerson,
  BsHouseDoorFill,
  BsHouseDoor,
} from "react-icons/bs";
import Icon from "../icon/Icon";
export default function Footer(props) {
  return (
    <nav className={cssClasses.navbar}>
      {props.showHome ? (
        <Icon bg="#F4FBFB" color="#F8A3AC" noShadow>
          <BsHouseDoorFill />
        </Icon>
      ) : (
        <Icon bg="white" color="#A7B0BE" noShadow>
          <BsHouseDoor onClick={() => props.handleHomeClick()} />
        </Icon>
      )}
      <Icon bg="white" color="#A7B0BE" noShadow>
        <BsCardText />
      </Icon>
      {!props.showHome ? (
        <Icon bg="#F4FBFB" color="#F8A3AC" noShadow>
          <BsCartFill />
        </Icon>
      ) : (
        <Icon bg="white" color="#A7B0BE" noShadow>
          <BsCart onClick={() => props.handleBasketClick()} />
        </Icon>
      )}
      <Icon bg="white" color="#A7B0BE" noShadow>
        <BsPerson />
      </Icon>
    </nav>
  );
}
