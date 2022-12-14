import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import authReducer from './auth/auth.reducer';
import recipesReducer from './recipes/recipes.reducer';

const rootReducer = combineReducers({
    auth: authReducer,
    recipes: recipesReducer,
  });
  
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
