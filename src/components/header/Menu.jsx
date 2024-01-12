import React from "react";
import { headerMenus } from "../../data/header";
import { Link, useLocation } from "react-router-dom";

const Menu = () => {

  //location 데이터를 가져올 것임
  const location = useLocation();
  
  return (
    <nav className="nav">
      <ul className="nav-list">
        {headerMenus.map((menu, key) => (
          <li key={key} className={location.pathname === menu.src ? 'on' : ''}>
            <Link to={menu.src}>
              {menu.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
