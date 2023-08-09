import React from "react";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import Cover from "../Cover/Cover";

const MenuCategory = ({ items, title, img }) => {
  return (
    <div className=" border mt-2">
      {title && <Cover className="h-[300px]" img={img} title={title}></Cover>}
      <div className="grid grid-cols-2 gap-3">
        {items.map((item) => (
          <MenuItem key={item._id} items={item}></MenuItem>
        ))}
      </div>
    </div>
  );
};

export default MenuCategory;
