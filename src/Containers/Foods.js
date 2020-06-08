/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import FoodsItem from "../Components/FoodsItem";

export default () => {
  return (
    <div className="mainContainer">
      <div className="main">
        <div className="foods">
          <FoodsItem />
          <FoodsItem />
          <FoodsItem />
          <FoodsItem />
        </div>
      </div>
    </div>
  );
};
