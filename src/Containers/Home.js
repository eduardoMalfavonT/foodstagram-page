import React from "react";
import Header from "../Layout/Header";
import Aside from "../Layout/Aside";
import Main from "../Layout/Main";
import Footer from "../Layout/Footer";

export default () => {
  return (
    <div className="containerHome">
      <Header />
      <Aside />
      <Main />
      <Footer />
    </div>
  );
};
