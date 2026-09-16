import React, { useState } from "react";
import logo from "../assets/filmatic.png";
import SearchBar from "./SearchBar";

const Header = ({ onSearch }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="nav-container">
        <img src={logo} alt="Filmatic Logo" className="logo" />
        <div className="hamburger" onClick={toggleMenu}>
          <i className="fa fa-bars"></i>
        </div>
        <nav className={`nav-links ${isMenuOpen ? "open" : ""}`}>
          <a href="/" className="home">
            HOME
          </a>
          <a href="/movies" className="movies-header">
            MOVIES
          </a>
          <a href="/contact" className="contact">
            CONTACT
          </a>
        </nav>
      </div>
      <SearchBar onSearch={onSearch} />
    </header>
  );
};

export default Header;
