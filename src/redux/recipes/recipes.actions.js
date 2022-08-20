export const FETCH_RECIPES = 'FETCH_RECIPES';
export const FETCH_RECIPES_OK = 'FETCH_RECIPES_OK';
export const FETCH_RECIPES_ERROR = 'FETCH_RECIPES_ERROR';

export const getRecipes = (url) => dispatch => {
  dispatch({ type: FETCH_RECIPES });

  fetch(url)
      .then((res) => res.json())
      .then((res) => {
        console.log(res)

        if (res.error) throw new Error(res.error);
        
        dispatch({
          type: FETCH_RECIPES_OK,
          payload: res,
        });
      })
      .catch((error) => {
        console.log('error', error.message);
        dispatch({
          type: FETCH_RECIPES_ERROR,
          payload: error.message,
        });
      });
};
