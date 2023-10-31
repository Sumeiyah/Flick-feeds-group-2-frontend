// Importing react
import React from 'react';
import './App.css';

// React Router 
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Component Imports
import Home from './components/Home';
import Profile from './components/Profile';  
import ExploreMovies from './components/ExploreMovies';
import MovieClubs from './components/MovieClubs';
import About from './components/About';

function App() {

  return (
    <Router>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/explore-movies" element={<ExploreMovies />} />
        <Route path="/movie-clubs" element={<MovieClubs />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;