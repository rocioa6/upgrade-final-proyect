import React from "react";
import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiSpain } from "react-icons/gi";
import { NavLink } from "react-router-dom";

const Category = () => {
  return (
    <ul className='category__list'>
      <li className='category__link'>
        <NavLink to={"/cuisine/Italian"}>
          <FaPizzaSlice />
          <h4 className='category__title'>Italian</h4>
        </NavLink>
      </li>
      <li className='category__link'>
        <NavLink to={"/cuisine/American"}>
          <FaHamburger />
          <h4 className='category__title'>American</h4>
        </NavLink>
      </li>
      <li className='category__link'>
        <NavLink to={"/cuisine/Chinese"}>
          <GiNoodles />
          <h4 className='category__title'>Chinese</h4>
        </NavLink>
      </li>
      <li className='category__link'>
        <NavLink to={"/cuisine/Spanish"}>
          <GiSpain />
          <h4 className='category__title'>Spanish</h4>
        </NavLink>
      </li>
    </ul>
  );
};

export default Category;
