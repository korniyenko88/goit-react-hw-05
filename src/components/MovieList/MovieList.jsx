import React from 'react';
import styles from './MovieList.module.css';
import { Link, useLocation } from 'react-router-dom';

const MovieList = ({ movies, title }) => {
  const location = useLocation();

  return (
    <div className={styles.movieList}>
      <h2 className={styles.title}>{title}</h2>
      {movies.length === 0 ? (
        <p>No movies found.</p>
      ) : (
        movies.map(movie => (
          <div key={movie.id} className={styles.movieItem}>
            <Link
              to={`/movies/${movie.id}`}
              state={{ from: location }}
              className={styles.link}
            >
              <img
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                alt={movie.title}
                className={styles.moviePoster}
              />
            </Link>
          </div>
        ))
      )}
    </div>
  );
};

export default MovieList;
