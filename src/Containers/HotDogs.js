/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import HotDogsItem from "../Components/HotDogsItem";

export default () => {
  return (
    <div className="mainContainer">
      <div className="main">
        <div className="hotdogs">
          <HotDogsItem />
          <HotDogsItem />
          <HotDogsItem />
          <HotDogsItem />
        </div>
      </div>
    </div>
  );
};
