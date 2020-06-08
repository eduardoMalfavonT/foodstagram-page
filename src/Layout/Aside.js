import React from "react";
import { Link } from "react-router-dom";
import sprite from "../images/sprite.svg";

export default () => {
  return (
    <div className="asideContainer">
      <div id="aside" className="aside">
        <input type="checkbox" id="abrir-cerrar" name="abrir-cerrar" value="" />
        <label htmlFor="abrir-cerrar" className="aside__label">
          <svg className="aside__icon">
            <use xlinkHref={`${sprite}#icon-menu5`} />
          </svg>
        </label>
        <div id="sidebar" className="sidebar">
          <div className="sidebar__titleMenuContainer resalt-item-aside">
            <Link className="link" to="/">
              <svg className="sidebar__icon">
                <use xlinkHref={`${sprite}#icon-spoon-knife`} />
              </svg>
              <span className="sidebar__title">Foodstagram</span>
            </Link>
          </div>
          <ul className="menu">
            <li className="menu__li resalt ">
              <Link className="link__menu" to="/food/Hamburgesas">
                <svg className="menu__icon">
                  <use xlinkHref={`${sprite}#icon-fastfood`} />
                </svg>
                <span className="menu__span">Hamburgesas</span>
              </Link>
            </li>
            <li className="menu__li resalt-item-menu resalt ">
              <Link className="link__menu" to="/food/Pizzas">
                <svg className="menu__icon ">
                  <use xlinkHref={`${sprite}#icon-local_pizza`} />
                </svg>
                <span className="menu__span">Pizzas</span>
              </Link>
            </li>
            <li className="menu__li resalt ">
              <Link className="link__menu" to="/food/Hot-dogs">
                <svg className="menu__icon">
                  <use xlinkHref={`${sprite}#icon-fire1`} />
                </svg>
                <span className="menu__span">Hot-dogs</span>
              </Link>
            </li>
            <li className="menu__li resalt-item-menu resalt ">
              <Link className="link__menu" to="/food/drinks">
                <svg className="menu__icon ">
                  <use xlinkHref={`${sprite}#icon-liquor`} />
                </svg>
                <span className="menu__span">Vevidas</span>
              </Link>
            </li>
            <li className="menu__li resalt ">
              <svg className="menu__icon ">
                <use xlinkHref={`${sprite}#icon-pencil1`} />
              </svg>
              <span className="menu__span">Pedidos</span>
            </li>
            <li className="menu__li resalt-item-menu resalt ">
              <svg className="menu__icon ">
                <use xlinkHref={`${sprite}#icon-person_add`} />
              </svg>
              <span className="menu__span">Registrarse</span>
            </li>
            <li className="menu__li resalt ">
              <svg className="menu__icon ">
                <use xlinkHref={`${sprite}#icon-key`} />
              </svg>
              <span className="menu__span">Iniciar Sesion</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
