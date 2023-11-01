import React from 'react';

function MovieDetail() {
  // Sample movie data
  const movie = {
    id: 101,
    title: 'Sample Movie',
    posterUrl: 'https://example.com/sample-movie-poster.jpg',
    releaseDate: '2023-01-01',
  };

  // Sample reviews/comments
  const reviews = [
    { id: 1, text: 'Great movie!' },
    { id: 2, text: 'I loved it!' },
    // Add more reviews
  ];

  return (
    <div>
      <h1>{movie.title}</h1>
      <img src={movie.posterUrl} alt={`${movie.title} Poster`} />
      <p>Release Date: {movie.releaseDate}</p>

      <h2>Reviews and Comments</h2>
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>{review.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default MovieDetail;
