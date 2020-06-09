/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import burger from "../images/burger.jpg";
import sprite from "../images/sprite.svg";

export default () => {
  return (
    <div className="details__item">
      <div className="details__imageContainer">
        <img className="details__image" src={burger} />
      </div>
      <div className="details__nameContainer">
        <span className="details__name">Un nombre del producto</span>
      </div>
      <div className="details__ingredientsContainer">
        <span className="details__ingredient">Ingrediente 1</span>
        <span className="details__ingredient">Ingrediente 2</span>
        <span className="details__ingredient">Ingrediente 3</span>
        <span className="details__ingredient">Ingrediente 4</span>
      </div>
      <div className="details__directionContainer">
        <span className="details__direction">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt
          temporibus ut nostrum omnis, odio fugit.
        </span>
      </div>
      <div className="details__priceContainer">
        <span className="details__price">20$</span>
      </div>
      <div className="details__buttonContainer">
        <button className="details__button">
          <svg className="details__icon">
            <use xlinkHref={`${sprite}#icon-shopping-cart1`} />
          </svg>
          Incluir al carrito
        </button>
      </div>
    </div>
  );
};
