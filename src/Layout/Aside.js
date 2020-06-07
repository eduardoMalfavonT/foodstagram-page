import React from "react";
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
            <svg className="sidebar__icon">
              <use xlinkHref={`${sprite}#icon-spoon-knife`} />
            </svg>
            <span className="sidebar__title">Foodstagram</span>
          </div>
          <ul className="menu">
            <li className="menu__li resalt ">
              <svg className="menu__icon">
                <use xlinkHref={`${sprite}#icon-fastfood`} />
              </svg>
              <span className="menu__span">Hamburgesas</span>
            </li>
            <li className="menu__li resalt-item-menu resalt ">
              <svg className="menu__icon ">
                <use xlinkHref={`${sprite}#icon-local_pizza`} />
              </svg>
              <span className="menu__span">Pizzas</span>
            </li>
            <li className="menu__li resalt ">
              <svg className="menu__icon">
                <use xlinkHref={`${sprite}#icon-fire1`} />
              </svg>
              <span className="menu__span">Hot-dogs</span>
            </li>
            <li className="menu__li resalt-item-menu resalt ">
              <svg className="menu__icon ">
                <use xlinkHref={`${sprite}#icon-liquor`} />
              </svg>
              <span className="menu__span">Vevidas</span>
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
