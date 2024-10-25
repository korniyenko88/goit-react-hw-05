import React from 'react';
import styles from './MovieSearch.module.css'
const MovieSearch = ({ onSearch }) => {
  const handleSubmit = event => {
    event.preventDefault();
    const queryMovies = event.target.elements.search.value.trim();
    if (!queryMovies) return;
    onSearch(queryMovies);
  };

  return (
    <div className={styles.searchWraper}>
      <form className={styles.searchForm} onSubmit={handleSubmit}>
        <input className={styles.searchInput}
          type="text"
          name="search"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
        />
        <button className={styles.searchBtn} type="submit">Movie 🔍</button>
      </form>
    </div>
  );
};

export default MovieSearch;
