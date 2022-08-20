import * as actions from './auth.actions';

const INITIAL_STATE = {
  user: null,
  isLoading: false,
  error: false,
}

const authReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch(type) {
    case actions.SAVE_USER: {
      return { ...state, user: payload ? payload : false };
    }

    case actions.LOGOUT_USER: {
      return { ...state, user: false };
    }

    default: {
      return state;
    }
  }
}

export default authReducer;