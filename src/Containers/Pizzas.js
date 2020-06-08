/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import PizzasItem from "../Components/PizzasItem";

export default () => {
  return (
    <div className="mainContainer">
      <div className="main">
        <div className="pizzas">
          <PizzasItem />
          <PizzasItem />
          <PizzasItem />
          <PizzasItem />
        </div>
      </div>
    </div>
  );
};
