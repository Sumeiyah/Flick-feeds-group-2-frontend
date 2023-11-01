import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import MovieDetail from './components/MovieDetail';
import UserProfile from './components/UserProfile';
import PostCreationForm from './components/PostCreationForm';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
          <Route path="/user/:id" element={<UserProfile />} />
          <Route path="/create-post" element={<PostCreationForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
