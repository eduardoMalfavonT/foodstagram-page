/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import burger from "../images/burger.jpg";
import pizza from "../images/pizza.jpg";
import hotdog from "../images/hot-dog.jpg";
import drink from "../images/drink.jpg";
import sprite from "../images/sprite.svg";

export default () => {
  return (
    <div className="mainContainer">
      <div className="main">
        <div className="main__item">
          <div className="main__image">
            <img className="main__image-img" src={burger} />
          </div>
          <div className="main__title">
            <span className="main__span">Hamburgesas</span>
          </div>
        </div>
        <div className="main__item">
          <div className="main__image">
            <img className="main__image-img" src={pizza} />
          </div>
          <div className="main__title">
            <span className="main__span">Pizzas</span>
          </div>
        </div>
        <div className="main__item">
          <div className="main__image">
            <img className="main__image-img" src={hotdog} />
          </div>
          <div className="main__title">
            <span className="main__span">Hot-dogs</span>
          </div>
        </div>
        <div className="main__item">
          <div className="main__image">
            <img className="main__image-img" src={drink} />
          </div>
          <div className="main__title">
            <span className="main__span">Vevidas</span>
          </div>
        </div>
        <div className="main__item">
          <div className="main__containerIcon">
            <svg className="main__icon">
              <use xlinkHref={`${sprite}#icon-forward`} />
            </svg>
            <span className="main__containerIcon_span">
              Ver todos los productos
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
