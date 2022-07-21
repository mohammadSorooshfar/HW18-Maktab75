import React from "react";
import cssClasses from "./Filters.module.css";
import woman from "../../assets/bigsale.png";
export default function Filters() {
  return (
    <div>
      <div className={cssClasses.bigSale}>
        <img src={woman} alt="" />
        <div className={cssClasses.bigSaleText}>
          <h2>Big Sale</h2>
          <p>Get the trandy fashion at a discount of up to 50%</p>
        </div>
      </div>
      <div className={cssClasses.buttonDiv}>
        <button className={`${cssClasses.buttonPink} ${cssClasses.button}`}>
          All
        </button>
        <button className={`${cssClasses.buttonGray} ${cssClasses.button}`}>
          Popular
        </button>
        <button className={`${cssClasses.buttonGray} ${cssClasses.button}`}>
          Recent
        </button>
        <button className={`${cssClasses.buttonGray} ${cssClasses.button}`}>
          Recommended
        </button>
      </div>
    </div>
  );
}
