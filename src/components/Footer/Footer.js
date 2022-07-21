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
export default function Footer() {
  return (
    <nav className={cssClasses.navbar}>
      <Icon bg="white" color="#A7B0BE" noShadow>
        <BsHouseDoor />
      </Icon>
      <Icon bg="white" color="#A7B0BE" noShadow>
        <BsCardText />
      </Icon>
      <Icon bg="white" color="#A7B0BE" noShadow>
        <BsCart />
      </Icon>
      <Icon bg="white" color="#A7B0BE" noShadow>
        <BsPerson />
      </Icon>
    </nav>
  );
}
