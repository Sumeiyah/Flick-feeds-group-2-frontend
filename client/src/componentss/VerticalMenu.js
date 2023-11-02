// Importing necessary hooks from react
import React, { useState } from 'react';
import './VerticalMenu.css';

function VerticalMenu() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    // If menu is open or closed
    <div className={`vertical-menu ${isMenuOpen ? 'open' : ''}`}>
      <button className="menu-button" onClick={toggleMenu}>
        &#9776;
      </button>
      <div className="menu-popup">
        <a href="/membership" className="menu-item">
          Membership
        </a>
        <a href="/watched-movies" className="menu-item">
          Watched Movies
        </a>
        <a href="/shared-posts" className="menu-item">
          Shared Posts
        </a>
      </div>
    </div>
  );
}

export default VerticalMenu;
