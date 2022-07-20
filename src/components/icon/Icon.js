import React from "react";
import cssClasses from "./Icon.module.css";
export default function Icon(props) {
  return (
    <div
      className={cssClasses.iconBg}
      style={{
        color: props.color,
        backgroundColor: props.bg,
      }}
    >
      {props.children}
    </div>
  );
}
