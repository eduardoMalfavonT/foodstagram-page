/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import DrinksItem from "../Components/DrinksItem";

export default () => {
  return (
    <div className="mainContainer">
      <div className="main">
        <div className="drinks">
          <DrinksItem />
          <DrinksItem />
          <DrinksItem />
          <DrinksItem />
        </div>
      </div>
    </div>
  );
};
