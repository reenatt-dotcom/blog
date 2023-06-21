import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <h1 className="logo">
          <Link to="/">My Blog</Link>
        </h1>
        <nav className="nav">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <button type="button">
            <i className="fas fa-search"></i>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
