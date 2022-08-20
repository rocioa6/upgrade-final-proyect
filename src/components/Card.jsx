import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <div>
      <Link to={"/recipe/" + props.item.id}>
        <img
          className='card__img'
          src={props.item.image}
          alt={props.item.title}
        />
        <h3 className='card__title'>{props.item.title}</h3>
      </Link>
    </div>
  );
};

export default Card;
