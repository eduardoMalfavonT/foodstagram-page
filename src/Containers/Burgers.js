/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import BurgersItem from "../Components/BurgersItem";

export default () => {
  return (
    <div className="mainContainer">
      <div className="main">
        <div className="burgers">
          <BurgersItem />
          <BurgersItem />
          <BurgersItem />
          <BurgersItem />
        </div>
      </div>
    </div>
  );
};
