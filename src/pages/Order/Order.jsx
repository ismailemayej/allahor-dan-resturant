import React, { useState } from "react";
import orderCoverImg from "../../assets/shop/banner2.jpg";
import Cover from "../Menu/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../Hooks/userMenu";
import FootCard from "../../Components/FoodCard/FootCard";
import Navbar from "../Home/Header/Navbar";

const Order = () => {
  const [tabIndex, setTabindex] = useState(0);
  const [menuData] = useMenu();
  const dessert = menuData.filter((item) => item.category === "dessert");
  const soup = menuData.filter((item) => item.category === "soup");
  const salat = menuData.filter((item) => item.category === "salad");
  const pizza = menuData.filter((item) => item.category === "pizza");
  const drinks = menuData.filter((item) => item.category === "drinks");
  const offered = menuData.filter((item) => item.category === "offered");
  return (
    <div>
      <Navbar></Navbar>
      <Cover img={orderCoverImg} title="order Food"></Cover>
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabindex(index)}>
        <TabList className="flex justify-center mb-5">
          <Tab>Satat</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soup</Tab>
          <Tab>Dessert</Tab>
          <Tab>Drinks</Tab>
        </TabList>
        {/* for salat */}
        <TabPanel>
          <div className="g grid grid-cols-3 gap-2 sm:grid-cols-1 md:grid-cols-3">
            {salat.map((s) => (
              <FootCard items={s} key={s._id}></FootCard>
            ))}
          </div>
        </TabPanel>
        {/* for pizza */}
        <TabPanel>
          <div className="g grid grid-cols-3 gap-2 sm:grid-cols-1 md:grid-cols-3">
            {pizza.map((s) => (
              <FootCard items={s} key={s._id}></FootCard>
            ))}
          </div>
        </TabPanel>
        {/* for soup */}
        <TabPanel>
          <div className="g grid grid-cols-3 gap-2 sm:grid-cols-1 md:grid-cols-3">
            {soup.map((s) => (
              <FootCard items={s} key={s._id}></FootCard>
            ))}
          </div>
        </TabPanel>
        {/* for dessert */}
        <TabPanel>
          <div className="g grid grid-cols-3 gap-2 sm:grid-cols-1 md:grid-cols-3">
            {dessert.map((s) => (
              <FootCard items={s} key={s._id}></FootCard>
            ))}
          </div>
        </TabPanel>
        {/* for dricks */}
        <TabPanel>
          <div className="g grid grid-cols-3 gap-2 sm:grid-cols-1 md:grid-cols-3">
            {drinks.map((s) => (
              <FootCard items={s} key={s._id}></FootCard>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
