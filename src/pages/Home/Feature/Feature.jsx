import React from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import "./Feature.css";

const Feature = () => {
  return (
    <div className="w-auto pt-32 backgroudImage bg-fixed">
      <SectionTitle
        className="text-white"
        heading={"from our menu"}
        subheading={"check it out"}
      ></SectionTitle>
      <div className="hero-content z-auto lg:flex-row-reverse flex-col pt-5 w-auto pb-[50px]  hero min-h-screen justify-center bg-current ">
        <div className="w-[50%] ml-11 text-white">
          <h2 className="font-semibold"> March 20, 2023 </h2>
          <h3 className="font-semibold">WHERE CAN I GET SOME? </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            voluptate facere, deserunt dolores maiores quod nobis quas quasi.
            Eaque repellat recusandae ad laudantium tempore consequatur
            consequuntur omnis ullam maxime tenetur.
          </p>
          <button className="btn btn-outline border-0 border-b-4 mt-2 ">
            Read more
          </button>
        </div>
        <div className="w-[50%] justify-end">
          <img
            className="z-auto w-[80%] ml-[150px] rounded-md"
            src={featuredImg}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Feature;
