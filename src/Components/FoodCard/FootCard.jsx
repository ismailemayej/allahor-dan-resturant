import React from "react";

const FootCard = ({ items }) => {
  const { name, image, recipe, price } = items;
  return (
    <div>
      <div className="border card w-[100%] h-[100%] my-10 card-compact bg-base-100 shadow-xl">
        <figure>
          <img className="w-full" src={image} />
        </figure>
        <div className="card-body  text-white">
          <div className="relative">
            <h2 className="card-title">{name}</h2>
            <h2 className="absolute top-0 right-0 text-amber-300 font-semibold text-2xl">
              ${price}
            </h2>
          </div>
          <p>{recipe}</p>
          <div className="card-actions justify-center">
            <button className="btn btn-outline border border-b-4">
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FootCard;
