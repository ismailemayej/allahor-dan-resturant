import React from "react";
import { Helmet } from "react-helmet-async";
import Cover from "../Cover/Cover";
import menuImg from "../../assets/menu/banner3.jpg";
import PupolerMenu from "../Home/PupolerMenu/PupolerMenu";
import Navbar from "../Home/Header/Navbar";
const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>Allahor dan Menu</title>
      </Helmet>
      <Navbar></Navbar>
      <Cover img={menuImg} title={"Our Menu"}></Cover>
      <PupolerMenu></PupolerMenu>
      <Cover img={menuImg} title={"Our Menu"}></Cover>
      <PupolerMenu></PupolerMenu>
      <Cover img={menuImg} title={"Our Menu"}></Cover>
      <PupolerMenu></PupolerMenu>
    </div>
  );
};

export default Menu;
