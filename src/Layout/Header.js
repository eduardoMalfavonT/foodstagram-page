/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import logo from "../../src/images/logo.png";
import burger from "../../src/images/burger.jpg";
import pizza from "../../src/images/pizza.jpg";
import hotdog from "../../src/images/hot-dog.jpg";
import drink from "../../src/images/drink.jpg";
import { Link } from "react-router-dom";
//TODO Descargar e importar las imagenes necesarias para ponerlas en el header

export default () => {
  return (
    <div className="headerContainer">
      <div className="header">
        <div className="header__item">
          <img className="header__imageItem" src={burger} alt="burger" />
          <div className="header__title">
            <span className="header__span">Hamburgesa</span>
          </div>
        </div>
        <div className="header__item">
          <img className="header__imageItem" src={pizza} alt="pizza" />
          <div className="header__title align">
            <span className="header__span">Pizzas</span>
          </div>
        </div>
        <div className="header__logo">
          <Link to="/">
            <img className="header__imageLogo" src={logo} alt="logo" />
          </Link>
        </div>
        <div className="header__item">
          <img className="header__imageItem" src={hotdog} alt="hot-dog" />
          <div className="header__title">
            <span className="header__span">Hot-Dogs</span>
          </div>
        </div>
        <div className="header__item">
          <img className="header__imageItem" src={drink} alt="vevida" />
          <div className="header__title">
            <span className="header__span">Vevidas</span>
          </div>
        </div>
      </div>
    </div>
  );
};
