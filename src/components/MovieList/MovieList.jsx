import React from 'react';
import styles from './MovieList.module.css';
import { Link, useLocation } from 'react-router-dom';

const MovieList = ({ movies = [] }) => {
 
  const location = useLocation();

  return (
    <div className={styles.movieList}>
      <div>
        <h2>Trending today</h2>
      </div>

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
