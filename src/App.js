//** Comentario normal*/
//*! Alertas */
//*? querys */
//*TODO: se usa para decir que tienes que hacer posteriormente */
import React, { useContext } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./Layout/Header";
import Aside from "./Layout/Aside";
import Home from "./Containers/Home";
import Foods from "./Containers/Foods";
import Burgers from "./Containers/Burgers";
import Pizzas from "./Containers/Pizzas";
import HotDogs from "./Containers/HotDogs";
import Drinks from "./Containers/Drinks";
import Details from "./Containers/Details";
import Carrito from "./Containers/Carrito";
import Pedidos from "./Containers/Pedidos";
import Registro from "./Containers/Registro";
import Login from "./Containers/Login";
import { CRMContext, CRMProvider } from "./Context/index";
import "./Styles/main.scss";

function App() {
  const [auth, setAuth] = useContext(CRMContext);
  return (
    <Router>
      <CRMProvider value={[auth, setAuth]}>
        <div className="container">
          <Header />
          <Aside />
          <Route exact path="/" component={Home} />
          <Route exact path="/foods" component={Foods} />
          <Route exact path="/food/Hamburgesas" component={Burgers} />
          <Route exact path="/food/Pizzas" component={Pizzas} />
          <Route exact path="/food/Hot-dogs" component={HotDogs} />
          <Route exact path="/food/drinks" component={Drinks} />
          <Route exact path="/food/details/:idProducto" component={Details} />
          <Route exact path="/cart" component={Carrito} />
          <Route exact path="/pedidos" component={Pedidos} />
          <Route exact path="/registro" component={Registro} />
          <Route exact path="/login" component={Login} />
        </div>
      </CRMProvider>
    </Router>
  );
}

export default App;
