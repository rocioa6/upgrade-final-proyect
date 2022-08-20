import { React, useState } from "react";
import { Link } from "react-router-dom";
import { IoMdHome, IoIosLogIn, IoIosMenu } from "react-icons/io";
import SideBar from "./SideBar";
import Search from "./Search";

const NavBar = (props) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const links = [
    {
      name: "Home",
      path: "/",
      icon: IoMdHome,
    },

    {
      name: "Log In",
      path: "/login",
      icon: IoIosLogIn,
    },
  ];
  const handleSidebar = () => {
    setShowSidebar(current => !current);
  };

  return (
    <nav className='navbar'>
      <Link to='/' className='logo'>
        CookitYourself
      </Link>
      <div className='nav-links'>
        <Link to={"/"}>Home </Link>
        <Link to={"/login"}> LogIn </Link>
        <Search />
      </div>
      <div
        onClick={handleSidebar}
        className={showSidebar ? "sidebar-btn active" : "sidebar-btn"}
      >
        <span>
          <IoIosMenu />
        </span>
      </div>
      {showSidebar && <SideBar close={handleSidebar} links={links} />}
    </nav>
  );
};

export default NavBar;
