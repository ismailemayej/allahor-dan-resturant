import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../pages/Footer/Footer";
import Navbar from "../pages/Home/Header/Navbar";
import Banner from "../pages/Home/Banneer/Banner";

const Main = () => {
  return (
    <div>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
