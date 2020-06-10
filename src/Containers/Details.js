import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
//TODO uso de acciones para buscar los productos
import { searchProductById } from "../Redux/Actions/actionProducts";
//TODO uso de selectores para recuperar los productos
import { productSelector } from "../Redux/Selectors/productSelectors";
//TODO Implementacion del componente
import DetailsComponents from "../Components/DetailsComponents";

const Details = ({ match }) => {
  const dispatch = useDispatch();
  const producto = useSelector((state) => productSelector(state));
  const { idProducto } = match.params;
  useEffect(() => {
    dispatch(searchProductById({ idProducto }));
  }, [dispatch, idProducto]);
  return (
    <div className="mainContainer">
      <div className="main">
        <div className="details">
          <DetailsComponents producto={producto} />
        </div>
      </div>
    </div>
  );
};

export default withRouter(Details);
