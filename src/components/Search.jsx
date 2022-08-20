import { React, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Search = () => {
    const [input, setInput] = useState("");
    const navigate = useNavigate();
    const submitHandler = (event) => {
        event.preventDefault();
        navigate('/searched/' + input)
    }
  return (
    <form className='search-form' onSubmit={submitHandler}>
      <FaSearch />
      <input 
      onChange={
        (event) => setInput(event.target.value)}
        className='search-form__input' type='text'
        value={input} />
    </form>
  );
};

export default Search;
