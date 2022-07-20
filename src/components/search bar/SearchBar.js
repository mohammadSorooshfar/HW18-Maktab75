import React from "react";
import Icon from "../icon/Icon";
import cssClasses from "./SearchBar.module.css";
import { BsSliders, BsSearch } from "react-icons/bs";
export default function SearchBar() {
  return (
    <div className={cssClasses.main}>
      <div className={cssClasses.searchDiv}>
        <BsSearch />
        <input type="text" />
      </div>
      <Icon bg="#F5A1A9" color="white">
        <BsSliders />
      </Icon>
    </div>
  );
}
