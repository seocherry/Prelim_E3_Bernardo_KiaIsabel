import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <Link className="navbar-brand" to="/">
          MyApp
        </Link>
        <button className="navbar-toggler" type="button" onClick={toggleNavbar}>
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible Navbar Links */}
        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
          <div className="navbar-nav">
            <Link className="nav-link" to="/" onClick={toggleNavbar}>
              Home
            </Link>
            <Link className="nav-link" to="/profile" onClick={toggleNavbar}>
              Profile
            </Link>
            <Link className="nav-link" to="/settings" onClick={toggleNavbar}>
              Settings
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );

  function Navbar({ darkMode }) {
    return (
      <nav className={`navbar navbar-expand-lg ${darkMode ? "dark-mode" : ""}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            MyApp
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/profile">
                  Profile
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/settings">
                  Settings
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
