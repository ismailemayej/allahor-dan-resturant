import React from "react";
import Banner from "./Banneer/Banner";
import Catrgory from "./Category/Catrgory";
import Chef from "./Chef/Chef";
import PupolerMenu from "./PupolerMenu/PupolerMenu";
import ChefRecoment from "./ChefRecoment/ChefRecoment";
import Feature from "./Feature/Feature";
import Testimonials from "./Testimonials/Testimonials";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home||Page</title>
      </Helmet>

      <Banner></Banner>
      <Navbar></Navbar>
      <Catrgory></Catrgory>
      <Chef></Chef>
      <PupolerMenu></PupolerMenu>
      <ChefRecoment></ChefRecoment>
      <Feature></Feature>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
