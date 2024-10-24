import React from 'react';
import styles from './MovieList.module.css';
import { Link } from 'react-router-dom';

const MovieList = ({ movies }) => {
  return (
    <div className={styles.movieList}>
      {movies.length === 0 ? (
        <p>No movies found.</p>
      ) : (
        movies.map(movie => (
          <div key={movie.id} className={styles.movieItem}>
            <Link to={`/movies/${movie.id}`} className={styles.link}> 
              <img
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                alt={movie.title}
                className={styles.moviePoster}
              />
            </Link>
            {/* Uncomment the following lines if you want to show the movie title and overview */}
            {/* <h3 className={styles.movieTitle}>{movie.title}</h3>
            <p className={styles.movieOverview}>{movie.overview}</p> */}
          </div>
        ))
      )}
    </div>
  );
};

export default MovieList;