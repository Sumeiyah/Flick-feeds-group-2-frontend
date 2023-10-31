import React from 'react';

function ExploreMovies() {
  return (
    <div>
      {/* Browse movies */}
      <h1>Explore Movies</h1>
      
      {/* Movie list */}
      <ul>
        <li>The Matrix</li>
        <li>Inception</li>
        <li>Interstellar</li>
      </ul>

      {/* Genre filters */}
      <button>Action</button>
      <button>Comedy</button>
      <button>Drama</button>
    </div>
  );
}

export default ExploreMovies;