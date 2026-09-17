import React, { useState, useEffect, useRef } from "react";
import logo from "../assets/filmatic.png";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

const Header = ({ onSearch }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  return (
    <header className="header">
      <div className="nav-container">
        <img src={logo} alt="Filmatic Logo" className="logo" />
        <div className="hamburger" onClick={toggleMenu}>
          <i className="fa fa-bars"></i>
        </div>
        <nav ref={menuRef} className={`nav-links ${isMenuOpen ? "open" : ""}`}>
          <Link to="/" className="home" onClick={() => setIsMenuOpen(false)}>
            HOME
          </Link>
          <Link
            to="/"
            className="movies-header"
            onClick={() => setIsMenuOpen(false)}
          >
            MOVIES
          </Link>
          <Link to="/" className="contact" onClick={() => setIsMenuOpen(false)}>
            CONTACT
          </Link>
        </nav>
      </div>
      <SearchBar onSearch={onSearch} />
    </header>
  );
};

export default Header;
