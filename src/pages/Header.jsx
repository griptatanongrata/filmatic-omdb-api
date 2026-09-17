import React, { useState } from "react";
import logo from "../assets/filmatic.png";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

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
          <Link to="/" className="home">
            HOME
          </Link>
          <Link to="/" className="movies-header">
            MOVIES
          </Link>
          <Link to="/" className="contact">
            CONTACT
          </Link>
        </nav>
      </div>
      <SearchBar onSearch={onSearch} />
    </header>
  );
};

export default Header;
