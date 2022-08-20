import { checkUser } from "../../helpers/auth.helper";

export const SAVE_USER = "SAVE_USER";
export const LOGOUT_USER = "LOGOUT_USER";

export const saveUser = (form, redirect) => dispatch => {
  const existsUser = checkUser(form);

  const action = {
    type: SAVE_USER,
    payload: existsUser,
  }

  dispatch(action);
  if (existsUser) redirect();
};

export const logoutUser = () => dispatch => {
  console.log('logout user');
  const action = {
    type: LOGOUT_USER
  }

  dispatch(action);
};
