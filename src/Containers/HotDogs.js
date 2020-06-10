/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
//TODO uso de acciones para buscar los productos
import { searchHotDogs } from "../Redux/Actions/actionProducts";
//TODO uso de selectores para recuperar los productos
import { hotdogsSelector } from "../Redux/Selectors/productSelectors";
//TODO Implementacion del componente
import HotDogsItem from "../Components/HotDogsItem";

export default () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => hotdogsSelector(state));
  useEffect(() => {
    dispatch(searchHotDogs());
  }, [dispatch]);
  return (
    <div className="mainContainer">
      <div className="main">
        <div className="hotdogs">
          {products.length > 0 &&
            products.map((product) => (
              <HotDogsItem key={product._id} producto={product} />
            ))}
        </div>
      </div>
    </div>
  );
};
