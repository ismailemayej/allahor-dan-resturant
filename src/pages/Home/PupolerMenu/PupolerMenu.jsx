import React, { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const PupolerMenu = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const populerItems = data.filter((item) => item.category == "popular");
        setMenu(populerItems);
      });
  }, []);

  return (
    <section className="mb-12">
      <SectionTitle
        heading={"From Our Menu"}
        subheading={"PupolerMenu"}
      ></SectionTitle>
      <div className="grid grid-cols-2 gap-3">
        {menu.map((item) => (
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
