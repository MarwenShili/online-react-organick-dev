import React from "react";
import "./Header.css";
import logo from "../../assets/icons/Logo.svg";
import CartHeader from "../CartHeader/CartHeader";
import Menu from "../Menu/Menu";
import Search from "../Search/Search";
import { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="header">
      <div className="header_content">
        <div className="s_left">
          <a href="/" className="logo">
            <img src={logo} alt="" />
          </a>
          <div className="navigations">
            <a to="/">Home</a>
            <a to="/login">Login</a>
          </div>
        </div>
        <div className="s_right">
          <div className="search_s">
            <Search />
          </div>
          <div className="header_actions">
            <CartHeader />
          </div>
          <Menu isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </div>
    </header>
  );
}

export default Header;
