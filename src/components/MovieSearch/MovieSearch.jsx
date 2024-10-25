import React from 'react';

const MovieSearch = ({ onSearch }) => {
  const handleSubmit = event => {
    event.preventDefault();
    const queryMovies = event.target.elements.search.value.trim();
    if (!queryMovies) return;
    onSearch(queryMovies);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
        />
        <button type="submit">Movi 🔍</button>
      </form>
    </div>
  );
};

export default MovieSearch;
