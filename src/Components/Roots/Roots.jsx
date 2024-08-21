import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Roots = () => {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto">
        <Header />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Roots;
