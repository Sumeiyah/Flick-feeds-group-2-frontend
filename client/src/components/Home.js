import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  // Sample data for recent posts and popular movies
  const recentPosts = [
    { id: 1, title: 'Post 1' },
    { id: 2, title: 'Post 2' },
    // Add more posts
  ];

  const popularMovies = [
    { id: 101, title: 'Movie 1' },
    { id: 102, title: 'Movie 2' },
    // Add more movies
  ];

  return (
    <div>
      <h2>Recent Posts</h2>
      <ul>
        {recentPosts.map((post) => (
          <li key={post.id}>
            <Link to={`/post/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>

      <h2>Popular Movies</h2>
      <ul>
        {popularMovies.map((movie) => (
          <li key={movie.id}>
            <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
