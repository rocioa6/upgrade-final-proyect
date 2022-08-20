import { React, useEffect, useState } from "react";
import Card from "./Card";

const Popular = () => {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = async () => {
    const check = localStorage.getItem("popular");
    if (check) {
      setPopular(JSON.parse(check));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=5`
      );
      const data = await api.json();
      localStorage.setItem("popular", JSON.stringify(data.recipes));
      setPopular(data.recipes);
    }
  };
  return (
    <section className='section section--popular'>
      <h2 className="section__title section__title--popular">Popular Picks</h2>

      <div className='card__wrapper'>
        {popular.map((item) => {
          return (
            <div className='card' key={item.id}>
              <Card item={item} />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Popular;
