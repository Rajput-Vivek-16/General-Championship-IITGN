import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import './navbar.css';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      {/* Original left-aligned content - unchanged */}
      <Link to = "/" className="navstart">
        <img src={logo} alt="Logo" className="nav-logo" />
        <div className="navtitcontainer">
          <div className="navbar-title">GC 2025</div>
          <p className="tagline">Unite | Compete | Conquer</p>
        </div>
      </Link>

      {/* Hamburger - only visible on mobile */}
      <div className="hamburger" onClick={toggleMenu}>
        <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
      </div>

      {/* Original navbar links - unchanged */}
      <ul className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
        <li>
          <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} onClick={() => setIsMenuOpen(false)}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/register" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} onClick={() => setIsMenuOpen(false)}>
            Register
          </NavLink>
        </li>
        <li>
          <NavLink to="/rulebook" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} onClick={() => setIsMenuOpen(false)}>
            RuleBook
          </NavLink>
        </li>
        <li>
          <NavLink to="/standings" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} onClick={() => setIsMenuOpen(false)}>
            Standings
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;