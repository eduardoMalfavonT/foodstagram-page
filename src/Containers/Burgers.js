/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
//TODO uso de acciones para buscar los productos
import { searchBurgers } from "../Redux/Actions/actionProducts";
//TODO uso de selectores para recuperar los productos
import { burgersSelector } from "../Redux/Selectors/productSelectors";
//TODO Implementacion del componente
import BurgersItem from "../Components/BurgersItem";

export default () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => burgersSelector(state));
  useEffect(() => {
    dispatch(searchBurgers());
  }, [dispatch]);
  return (
    <div className="mainContainer">
      <div className="main">
        <div className="burgers">
          {products.length > 0 &&
            products.map((product) => (
              <BurgersItem key={product._id} producto={product} />
            ))}
        </div>
      </div>
    </div>
  );
};
