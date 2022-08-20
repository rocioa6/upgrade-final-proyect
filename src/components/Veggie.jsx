import { React, useEffect, useState } from "react";
import Card from "./Card";


const Veggie = () => {
  const [veggie, setVeggie] = useState([]);

  useEffect(() => {
    getVeggie();
  }, []);

  const getVeggie = async () => {
    const check = localStorage.getItem("veggie");
    if (check) {
      setVeggie(JSON.parse(check));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=5&tags=vegetarian`
      );
      const data = await api.json();
      localStorage.setItem("veggie", JSON.stringify(data.recipes));
      setVeggie(data.recipes);
    }
  };
  return (
    <section className='section section--veggie'>
      <h2 className="section__title section__title--veggie ">Vegetarian</h2>

      <div className='card__wrapper'>
        {veggie.map((item) => {
          return (
            <div className='card card--veggie' key={item.id}>
              <Card item={item}/>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Veggie;
