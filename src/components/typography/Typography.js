import React from "react";

export default function Typography(props) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <p
        style={{
          color: props.topColor,
          fontSize: props.topSize,
          fontWeight: props.boldTop ? "bold" : "normal",
          margin: 0,
        }}
      >
        {props.top}
      </p>
      <p
        style={{
          color: props.bottomColor,
          fontSize: props.bottomSize,
          fontWeight: props.boldBottom ? "bold" : "normal",
          margin: 0,
        }}
      >
        {props.bottom}
      </p>
    </div>
  );
}
