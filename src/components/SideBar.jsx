import React from "react";
import { Link, useLocation } from "react-router-dom";
import Search from "./Search";
/* import { IoMdHome, IoIosLogIn, IoIosMenu } from "react-icons/io"; */

const SideBar = ({ links }) => {
  const location = useLocation();
  return (
    <div className='sidebar'>
      {links.map((link) => (
        <Link
          to={link.path}
          className={
            location.pathname === link.path
              ? "sidebar-link active"
              : "sidebar-link"
          }
          key={link.name}
        >
          <link.icon />
          {link.name}
        </Link>
      ))}
      <Search />
    </div>
  );
};

export default SideBar;
