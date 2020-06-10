/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
//TODO uso de acciones para buscar los productos
import { searchPizzas } from "../Redux/Actions/actionProducts";
//TODO uso de selectores para recuperar los productos
import { pizzasSelector } from "../Redux/Selectors/productSelectors";
//TODO Implementacion del componente
import PizzasItem from "../Components/PizzasItem";

export default () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => pizzasSelector(state));
  useEffect(() => {
    dispatch(searchPizzas());
  }, [dispatch]);
  return (
    <div className="mainContainer">
      <div className="main">
        <div className="pizzas">
          {products.length > 0 &&
            products.map((product) => (
              <PizzasItem key={product._id} producto={product} />
            ))}
        </div>
      </div>
    </div>
  );
};
