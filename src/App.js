import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Cuisine from "./pages/Cuisine";
import Recipe from "./pages/Recipe";
import Searched from "./pages/Searched";
import LoginPage from "./pages/LoginPage";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import NavBar from "./components/NavBar";


function App() {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  return (
    <div className='App'>
      <NavBar user={user} dispatch={dispatch}/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cuisine/:type' element={<Cuisine dispatch={dispatch}/>} />
        <Route path='/searched/:search' element={<Searched dispatch={dispatch}/>} />
        <Route path='/recipe/:name' element={<Recipe />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='*' element={<div>Page not found</div>} />
      </Routes>
    </div>
  );
}

export default App;
