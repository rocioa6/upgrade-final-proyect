import React from "react";
import Hero from "../components/Hero";
import Category from "../components/Category";
import Popular from "../components/Popular";
import Veggie from "../components/Veggie";

const Home = () => {
  return (
    <div>
      <Hero />
      <Category />
      <Popular />
      <Veggie />
    </div>
  );
};

export default Home;
