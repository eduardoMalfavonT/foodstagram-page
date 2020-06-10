/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
//TODO uso de acciones para buscar los productos
import { searchDrinks } from "../Redux/Actions/actionProducts";
//TODO uso de selectores para recuperar los productos
import { drinksSelector } from "../Redux/Selectors/productSelectors";
//TODO Implementacion del componente
import DrinksItem from "../Components/DrinksItem";

export default () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => drinksSelector(state));
  useEffect(() => {
    dispatch(searchDrinks());
  }, [dispatch]);
  return (
    <div className="mainContainer">
      <div className="main">
        <div className="drinks">
          {products.length > 0 &&
            products.map((product) => (
              <DrinksItem key={product._id} producto={product} />
            ))}
        </div>
      </div>
    </div>
  );
};
