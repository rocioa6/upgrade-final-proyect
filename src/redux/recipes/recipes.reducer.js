import * as actions from './recipes.actions';

const INITIAL_STATE = {
  recipes: [],
  isLoading: false,
  error: null,
};

const recipesReducer = (state = INITIAL_STATE, action) => {
  const {type, payload} = action;

  switch(type) {
    case actions.FETCH_RECIPES: {
      return { ...state, isLoading: true };
    }
    case actions.FETCH_RECIPES_OK: {
      return {
        ...state,
        recipes: payload.results,
        isLoading: false,
      };
    }
    case actions.FETCH_RECIPES_ERROR: {
      return { ...state, error: payload, isLoading: false };
    }
    default: {
      return state;
    }
  };
};

export default recipesReducer;
