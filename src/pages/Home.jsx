// eslint-disable-next-line no-unused-vars
import React, { Fragment } from "react";

import PopularProduct from "../components/PopularProduct";
import NewProduct from "../components/NewProduct";
import Carousel from "../components/Carousel";
import Category from "../components/Category";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <Fragment>
      <Navbar />
      <Carousel />
      <Category />
      <NewProduct />
      <PopularProduct />
    </Fragment>
  );
};

export default Home;
