import React from "react";
import background from "../../../assets/home/chef-service.jpg";

const Chef = () => {
  return (
    <div
      className="p-14 rounded-md my-12 bg-fixed"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="bg-white m-14 text-center p-14 rounded-md">
        <h4 className="text-3xl font-bold">Boss service</h4>
        <p className="p-5">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam sequi
          molestias aspernatur perspiciatis, quod nesciunt vitae repellendus
          voluptatum id non atque tenetur! Molestiae quasi, accusamus odio
          provident non excepturi culpa.
        </p>
      </div>
    </div>
  );
};

export default Chef;
