//** Comentario normal*/
//*! Alertas */
//*? querys */
//*TODO: se usa para decir que tienes que hacer posteriormente */
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./Layout/Header";
import Aside from "./Layout/Aside";
import Home from "./Containers/Home";
import "./Styles/main.scss";

function App() {
  return (
    <Router>
      <div className="containerHome">
        <Header />
        <Aside />
        <Route exact path="/" component={Home} />
      </div>
    </Router>
  );
}

export default App;
