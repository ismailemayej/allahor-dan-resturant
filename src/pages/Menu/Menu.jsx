import React from "react";
import coversimg from "../../assets/menu/banner3.jpg";
import { Helmet } from "react-helmet-async";
import Navbar from "../Home/Header/Navbar";
import useMenu from "../../Hooks/userMenu";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import MenuCategory from "./MenuCategory/MenuCategory";
import Dimg from "../../assets/menu/dessert-bg.jpeg";
import Pimg from "../../assets/menu/pizza-bg.jpg";
import Simg from "../../assets/menu/soup-bg.jpg";
import Saimg from "../../assets/menu/salad-bg.jpg";
import Drimg from "../../assets/menu/salad-bg.jpg";
import Cover from "./Cover/Cover";

const Menu = () => {
  const [menuData] = useMenu();
  const dessert = menuData.filter((item) => item.category === "dessert");
  const soup = menuData.filter((item) => item.category === "soup");
  const salad = menuData.filter((item) => item.category === "salad");
  const pizza = menuData.filter((item) => item.category === "pizza");
  const drinks = menuData.filter((item) => item.category === "drinks");
  const offered = menuData.filter((item) => item.category === "offered");

  return (
    <div>
      <Helmet>
        <title>Allahor dan Menu</title>
      </Helmet>

      <Cover className="h-[300px]" img={coversimg} title="Our Menu"></Cover>
      {/* offer menu items */}
      <SectionTitle heading={"Todays Offer"} subheading={"Donts Miss"} />
      <MenuCategory items={offered}></MenuCategory>
      {/* Desserets menu items */}
      <MenuCategory items={dessert} title="dessert" img={Dimg} />
      <MenuCategory items={pizza} title="pizza" img={Pimg} />
      <MenuCategory items={soup} title="soup" img={Simg} />
      <MenuCategory items={salad} title="salad" img={Saimg} />
      <MenuCategory items={drinks} title="drinks" img={Drimg} />
    </div>
  );
};

export default Menu;
