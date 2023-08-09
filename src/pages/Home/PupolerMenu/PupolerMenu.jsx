import React, { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../Hooks/userMenu";

const PupolerMenu = () => {
  const [menuData] = useMenu();

  const popular = menuData.filter((item) => item.category === "popular");

  return (
    <section className="mb-12">
      <SectionTitle
        heading={"From Our Menu"}
        subheading={"PupolerMenu"}
      ></SectionTitle>
      <div className="grid grid-cols-2 gap-3">
        {popular.map((item) => (
          <MenuItem key={item._id} items={item}></MenuItem>
        ))}
      </div>
      <div className="flex justify-center">
        <button className="btn btn-outline border-0 border-b-4">
          View Full Menu
        </button>
      </div>
    </section>
  );
};

export default PupolerMenu;
