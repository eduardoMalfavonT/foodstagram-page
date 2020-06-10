/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
//TODO uso de acciones para buscar los productos
import { searchAllProducts } from "../Redux/Actions/actionProducts";
//TODO uso de selectores para recuperar los productos
import { foodSelector } from "../Redux/Selectors/productSelectors";
//TODO Implementacion del componente
import FoodsItem from "../Components/FoodsItem";

export default () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => foodSelector(state));
  useEffect(() => {
    dispatch(searchAllProducts());
  }, [dispatch]);
  return (
    <div className="mainContainer">
      <div className="main">
        <div className="foods">
          {products.length > 0 &&
            products.map((product) => (
              <FoodsItem key={product._id} producto={product} />
            ))}
        </div>
      </div>
    </div>
  );
};
