import React from "react";
import hero from "../assets/hero-pic.jpg";

const Hero = () => {
  return (
    <>
      <div className='hero'>
        <img className='hero__img' src={hero} alt='salad-pic'></img>
      </div>
      <div className="hero__text"><h2>Learn to cook the most delicious recipes ever.</h2>
      <p>Discover all the different dishes and enjoy eating</p></div>
    </>
  );
};

export default Hero;
