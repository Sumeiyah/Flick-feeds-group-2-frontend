import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css'; // Import your CSS file

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/create-post">Create Post</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
