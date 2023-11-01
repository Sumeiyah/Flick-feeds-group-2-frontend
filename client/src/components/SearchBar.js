import React, { useState } from 'react';

function SearchBar() {
  const [query, setQuery] = useState('');

  // Handle searching for movies and posts
  const handleSearch = () => {
    // Implement search functionality based on the 'query' value
    console.log('Search query:', query);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search for movies and posts"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchBar;
