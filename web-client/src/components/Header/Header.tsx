import React from "react";
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__text">
          <h1 className="header__title">Social Media Dashboard</h1>
          <span className="header__subtitle">Total Followers: 23,004</span>
        </div>
        <ThemeSwitch />
      </div>
    </header>
  );
}

export default Header;
