import { Router, Route, Routes } from 'react-router-dom'; // Make sure to import the necessary components

import Home from './componentss/Home';
import Profile from './componentss/Profile';  
import ExploreMovies from './componentss/ExploreMovies';
import MovieClubs from './componentss/MovieClubs';
import About from './componentss/About';

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
