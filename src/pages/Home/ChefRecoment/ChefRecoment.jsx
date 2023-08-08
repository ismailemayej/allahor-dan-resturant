import React, { useEffect, useState } from "react";
import imgage from "../../../assets/reservation/category-pizza.jpg";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const ChefRecoment = () => {
  return (
    <>
      <SectionTitle
        heading={"Chef recomments"}
        subheading={"shoud try"}
      ></SectionTitle>
      <div className="flex">
        <div className="card card-compact w-96 bg-base-100 shadow-xl m-4">
          <figure>
            <img src={imgage} />
          </figure>
          <div className="card-body text-white">
            <h2 className="card-title">Caeser Salad</h2>
            <p>This is very testy food</p>
            <div className="card-actions justify-center">
              <button className="btn btn-outline border border-b-4">
                Add To Cart
              </button>
            </div>
          </div>
        </div>
        <div className="card card-compact w-96 bg-base-100 shadow-xl m-4">
          <figure>
            <img src={imgage} />
          </figure>
          <div className="card-body text-white">
            <h2 className="card-title">Caeser Salad</h2>
            <p>This is very testy food</p>
            <div className="card-actions justify-center">
              <button className="btn btn-outline border border-b-4">
                Add To Cart
              </button>
            </div>
          </div>
        </div>
        <div className="card card-compact w-96 bg-base-100 shadow-xl m-4">
          <figure>
            <img src={imgage} />
          </figure>
          <div className="card-body text-white">
            <h2 className="card-title">Caeser Salad</h2>
            <p>This is very testy food</p>
            <div className="card-actions justify-center">
              <button className="btn btn-outline border border-b-4">
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChefRecoment;
