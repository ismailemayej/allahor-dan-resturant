import React, { useState } from "react";
import orderCoverImg from "../../assets/shop/banner2.jpg";
import Cover from "../Menu/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../Hooks/userMenu";
import FootCard from "../../Components/FoodCard/FootCard";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Order = () => {
  const categories = ["salad", "pizza", "soup", "dessert", "drinks"];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);

  const [tabIndex, setTabindex] = useState(initialIndex);
  const [menuData] = useMenu();
  const Dessert = menuData.filter((item) => item.category === "dessert");
  const Soup = menuData.filter((item) => item.category === "soup");
  const Salad = menuData.filter((item) => item.category === "salad");
  const pizza = menuData.filter((item) => item.category === "pizza");
  const Drinks = menuData.filter((item) => item.category === "drinks");
  const offered = menuData.filter((item) => item.category === "offered");
  return (
    <div>
      <Helmet>
        <title>Allahor dan || Order</title>
      </Helmet>
      <Cover img={orderCoverImg} title="order Food"></Cover>
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabindex(index)}>
        <TabList className="flex justify-center mb-5">
          <Tab>Satat</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soup</Tab>
          <Tab>Dessert</Tab>
          <Tab>Drinks</Tab>
        </TabList>
        {/* for Salad */}

        <TabPanel>
          <div className="grid grid-cols-3 contain sm:grid-cols-1 md:grid-cols-3">
            {Salad.map((s) => (
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
        {/* for Soup */}
        <TabPanel>
          <div className="g grid grid-cols-3 gap-2 sm:grid-cols-1 md:grid-cols-3">
            {Soup.map((s) => (
              <FootCard items={s} key={s._id}></FootCard>
            ))}
          </div>
        </TabPanel>
        {/* for Dessert */}
        <TabPanel>
          <div className="g grid grid-cols-3 gap-2 sm:grid-cols-1 md:grid-cols-3">
            {Dessert.map((s) => (
              <FootCard items={s} key={s._id}></FootCard>
            ))}
          </div>
        </TabPanel>
        {/* for dricks */}
        <TabPanel>
          <div className="g grid grid-cols-3 gap-2 sm:grid-cols-1 md:grid-cols-3">
            {Drinks.map((s) => (
              <FootCard items={s} key={s._id}></FootCard>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
