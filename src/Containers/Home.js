/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Link } from "react-router-dom";
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
            <Link to="/food/Hamburgesas">
              <img className="main__image-img" src={burger} />
            </Link>
          </div>
          <div className="main__title">
            <Link className="main__link" to="/food/Hamburgesas">
              <span className="main__span">Hamburgesas</span>
            </Link>
          </div>
        </div>
        <div className="main__item">
          <div className="main__image">
            <Link to="/food/Pizzas">
              <img className="main__image-img" src={pizza} />
            </Link>
          </div>
          <div className="main__title">
            <Link className="main__link" to="/food/Pizzas">
              <span className="main__span">Pizzas</span>
            </Link>
          </div>
        </div>
        <div className="main__item">
          <div className="main__image">
            <Link to="/food/Hot-dogs">
              <img className="main__image-img" src={hotdog} />
            </Link>
          </div>
          <div className="main__title">
            <Link className="main__link" to="/food/Hot-dogs">
              <span className="main__span">Hot-dogs</span>
            </Link>
          </div>
        </div>
        <div className="main__item">
          <div className="main__image">
            <Link to="/food/drinks">
              <img className="main__image-img" src={drink} />
            </Link>
          </div>
          <div className="main__title">
            <Link className="main__link" to="/food/drinks">
              <span className="main__span">Vevidas</span>
            </Link>
          </div>
        </div>
        <div className="main__item">
          <Link className="main__link" to="/foods">
            <div className="main__containerIcon">
              <svg className="main__icon">
                <use xlinkHref={`${sprite}#icon-forward`} />
              </svg>
              <span className="main__containerIcon_span">
                Ver todos los productos
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
