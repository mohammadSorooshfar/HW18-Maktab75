import React from "react";
import cssClasses from "./Icon.module.css";
export default function Icon(props) {
  let boxShadow = "0.5px 0.5px 3px #ccc";
  let size = "40px";
  let font = "20px";
  if (props.noShadow) {
    boxShadow = "none";
  }
  if (props.small) {
    size = "20px";
    font = "10px";
  }
  return (
    <div
      className={cssClasses.iconBg}
      style={{
        color: props.color,
        backgroundColor: props.bg,
        boxShadow: boxShadow,
        width: size,
        height: size,
        fontSize: font,
      }}
    >
      {props.children}
    </div>
  );
}
