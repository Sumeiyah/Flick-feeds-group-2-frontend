
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import VerticalMenu from './VerticalMenu';

function Home() {
  return (
    <div>
      <div className="bg-image" style={{ backgroundColor: 'black' }}>
        {/* Navigation Bar */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark mx-auto">
          <div className="container">
            <Link to="/" className="navbar-brand italic-bold uppercase">
              FlickFeeds
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse" // Use "data-toggle" instead of "data-bs-toggle"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to="/" className="nav-link">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/profile" className="nav-link">
                    Profile
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/explore-movies" className="nav-link">
                    Explore Movies
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/movie-clubs" className="nav-link">
                    Movie Clubs
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/about" className="nav-link">
                    About
                  </Link>
                </li>
              </ul>
            </div>
            <a href="#" className="btn btn-light">
              Login
            </a>
          </div>
        </nav>
      </div>

      <VerticalMenu /> {/* Include the VerticalMenu component here */}

      {/* Image Section */}
      <div className="container">
        <div className="row">
          <div className="col-lg-6 d-flex align-items-center">
            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1698248152617-55c4b9422b71?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1MTJ8fHxlbnwwfHx8fHw%3D/800x800"
                alt="Movie Club"
                className="img-fluid rounded"
                style={{ position: 'absolute', top: '20%', left: '50%' }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Text Section */}
      <div className="container">
        <div className="row">
          <div className="col-lg-6 d-flex align-items-center position-absolute top-50 start-0">
            <div className="text-center">
              <h1>Welcome to FlickFeeds</h1>
              <p>
                Join our movie community and enjoy exclusive movie screenings, engaging discussions with fellow movie enthusiasts, and access to a vast collection of classic and modern films.
              </p>
              <a href="#" className="btn btn-primary btn-lg">
                Register Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
