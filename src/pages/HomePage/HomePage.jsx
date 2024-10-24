import React, { useState, useEffect } from 'react';
import Loader from '../../components/Loader/Loader';
import MovieList from '../../components/MovieList/MovieList';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessege';

import styles from './HomePage.module.css';
import { fetchTrendingMovies } from '../../components/API/Request';

const HomePage = () => {
  const [loading, setLoading] = useState(false);
  const [moviesList, setMoviesList] = useState([]);
  const [errorMessage, setErrorMasege] = useState('');
  const [page, setPage] = useState(1);
  const [error, setError] = useState(false);

  useEffect(() => {
    const addTrendMovies = async () => {
      try {
        setError(false);
        setLoading(true);
        const data = await fetchTrendingMovies(page);
        const movie = data.results;
        setMoviesList([...movie]);
      } catch (error) {
        setError(true);
        setErrorMasege(error.message);
      } finally {
        setLoading(false);
      }
    };
    addTrendMovies();
  }, [page]);

  return (
    <div className={styles.homePage}>
      {loading && <Loader />}
      {error ? (
        <ErrorMessage errorMessage={errorMessage} />
      ) : (
        <MovieList movies={moviesList} />
      )}
    </div>
  );
};

export default HomePage;
