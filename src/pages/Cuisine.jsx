import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getRecipes } from "../redux/recipes/recipes.actions";
import { useSelector } from "react-redux";
import Card from "../components/Card";

const Cuisine = (props) => {
 /*  const dispatch = useDispatch(); */
  const { recipes, error, isLoading } = useSelector((state) => state.recipes);
  let params = useParams();
  const cuisineUrl = (type) => {
    return `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${type}`;
  };
  const getCuisine = () => {
    props.dispatch(getRecipes(cuisineUrl(params.type)));
  };

  useEffect(() => {
    getCuisine();
  }, [params.type]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className='card__grid'>
      {isLoading && <div>Cargando...</div>}

      {error && <div>{error}</div>}

      {!error &&
        recipes.map((item) => {
          return (
            <div className='card' key={item.id}>
              <Card item={item}/>
            </div>
          );
        })}
    </div>
  );
};

export default Cuisine;
