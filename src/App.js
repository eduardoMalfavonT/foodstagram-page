//** Comentario normal*/
//*! Alertas */
//*? querys */
//*TODO: se usa para decir que tienes que hacer posteriormente */
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./Layout/Header";
import Aside from "./Layout/Aside";
import Home from "./Containers/Home";
import Foods from "./Containers/Foods";
import Burgers from "./Containers/Burgers";
import Pizzas from "./Containers/Pizzas";
import HotDogs from "./Containers/HotDogs";
import Drinks from "./Containers/Drinks";
import "./Styles/main.scss";

function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <Aside />
        <Route exact path="/" component={Home} />
        <Route exact path="/foods" component={Foods} />
        <Route exact path="/food/Hamburgesas" component={Burgers} />
        <Route exact path="/food/Pizzas" component={Pizzas} />
        <Route exact path="/food/Hot-dogs" component={HotDogs} />
        <Route exact path="/food/drinks" component={Drinks} />
      </div>
    </Router>
  );
}

export default App;
