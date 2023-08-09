import React from "react";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import Cover from "../Cover/Cover";
import { Link } from "react-router-dom";

const MenuCategory = ({ items, title, img }) => {
  return (
    <div className=" border mt-2">
      {title && <Cover className="h-[300px]" img={img} title={title}></Cover>}
      <div className="grid grid-cols-2 gap-3">
        {items.map((item) => (
          <MenuItem key={item._id} items={item}></MenuItem>
        ))}
      </div>
      <div className="flex btn btn-outline border justiffy-center text-white border-b-4">
        <Link to={`/order/${title}`}>Order for Food</Link>
      </div>
    </div>
  );
};

export default MenuCategory;
