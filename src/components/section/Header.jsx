import React from "react";
import Logo from "../header/Logo";
import Menu from "../header/Menu";
import Sns from "../header/Sns";

const Header = () => {
  return (
    <header id="header" role="banner">
      <div className="header-wrap">
        <Logo />
        <Menu />
        <Sns />
      </div>
    </header>
  );
};

export default Header;
