import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./HeaderStyle.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

function Header() {
  return (
    <nav className="header">
      {/* Logo on the left */}
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          title="Amazon Logo"
        />

        {/* search box */}
      </Link>
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>

      {/* sign in, return to orders and your prime*/}
      {/* right basket */}
      <div className="header__nav">
        <Link to="/login" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Greeting</span>
            <span
              className="
              header__optionLineTwo"
            >
              Sign In
            </span>
          </div>
        </Link>
        <Link to="/login" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Return</span>
            <span
              className="
              header__optionLineTwo"
            >
              & Orders
            </span>
          </div>
        </Link>
        <Link to="/login" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span
              className="
              header__optionLineTwo"
            >
              Prime
            </span>
          </div>
        </Link>
        {/* Basket Icon */}
        <Link to="/checkout" className="header__link">
          <div className="header__optionsBasket"></div>
          <ShoppingCartIcon />
          <span
            className="
          header__optionLineTwo header__basketCount"
          >
            0
          </span>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
