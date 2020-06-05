import React from "react";
import sprite from "../images/sprite.svg";

export default () => {
  return (
    <div className="asideContainer">
      <div className="aside">
        <div className="aside__containerIcon">
          <div className="containerSectionIcon">
            <svg className="containerSectionIcon__icon">
              <use xlinkHref={`${sprite}#icon-menu5`} />
            </svg>
            <span className="containerSectionIcon__span">Foodstagram</span>
          </div>
        </div>
        <div className="aside__List"></div>
      </div>
    </div>
  );
};
