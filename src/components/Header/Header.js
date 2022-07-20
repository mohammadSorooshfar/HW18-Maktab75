import React from "react";
import Typography from "../typography/Typography";
import cssClasses from "./Header.module.css";
import { BsGridFill } from "react-icons/bs";
import profile from "../../assets/profile1.webp";
import Icon from "../icon/Icon";
export default function Header(props) {
  return (
    <header className={cssClasses.header}>
      <Icon bg="white" color="#F5A1A9">
        <BsGridFill />
      </Icon>
      <Typography
        top="Hafia Zaskin"
        bottom="Jakarta, INA"
        topColor="gray"
        bottomColor="#737C8E"
        topSize="14px"
        bottomSize="18px"
        boldBottom
      />
      <div className={cssClasses.profileBg}>
        <img src={profile} alt="" />
      </div>
    </header>
  );
}
