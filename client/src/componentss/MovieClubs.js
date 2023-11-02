import React from 'react';

function MovieClubs() {
  return (
    <div>
      {/* Page header */}
      <h1>Movie Clubs</h1>

      {/* List of clubs */}
      <h2>Available Clubs</h2>
      <ul>
        <li>Classic Movie Club</li>
        <li>80s Movie Fanatics</li>
        <li>Marvel Cinematic Universe</li>
      </ul>

      {/* Club details */}
      <h2>Classic Movie Club</h2>
      <p>
        Meet other classic movie lovers and discuss films like Casablanca, 
        Gone with the Wind, and more!
      </p>

      {/* Join button */}
      <button>Join Club</button>

      {/* Create club form */}
      <h2>Don't see your club? Create one!</h2>
      <form>
        {/* Form inputs */}
      </form>
    </div>
  );
}

export default MovieClubs;