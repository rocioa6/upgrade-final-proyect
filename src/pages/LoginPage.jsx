import { React, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { saveUser } from "../redux/auth/auth.actions";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const submitForm = (event) => {
    event.preventDefault();
    const redirect = () => navigate("/");
    dispatch(saveUser(form, redirect));
  };
  return (
    <section className="login">
      <h2>Log In</h2>
      <form className="login__form" onSubmit={submitForm}>
        <p>Email</p>
        <input   className="login_input"
          type='text'
          name='email'
          value={form.email}
          onChange={(event) =>
            setForm({ ...form, [event.target.name]: event.target.value })
          }
  
        ></input>
        <p>Password</p>
        <input
          className="login_input"
          type='password'
          name='password'
          value={form.password}
          onChange={(event) =>
            setForm({ ...form, [event.target.name]: event.target.value })
          }
        ></input>
        <button className="login__button" type='submit'>Login</button>
      </form>
    </ section>
  );
};

export default LoginPage;
