import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/Footer/Footer";
import Navbar from "../pages/Home/Header/Navbar";

const Main = () => {
  const location = useLocation();
  const noHeaderFooter =
    location.pathname.includes("login") ||
    location.pathname.includes("register");
  return (
    <div>
      {noHeaderFooter || <Navbar></Navbar>}
      <Outlet></Outlet>
      {noHeaderFooter || <Footer></Footer>}
    </div>
  );
};

export default Main;
