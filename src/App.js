//** Comentario normal*/
//*! Alertas */
//*? querys */
//*TODO: se usa para decir que tienes que hacer posteriormente */
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Containers/Home";
import "./Styles/main.scss";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
    </Router>
  );
}

export default App;
